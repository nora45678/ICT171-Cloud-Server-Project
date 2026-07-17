"use strict";

/* -------------------------------------------------
   Mobile navigation
------------------------------------------------- */

const menuButton = document.getElementById("menu-button");
const navLinks = document.getElementById("nav-links");

menuButton.addEventListener("click", () => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");

    menuButton.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );
});

document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        menuButton.setAttribute("aria-label", "Open navigation menu");
    });
});


/* -------------------------------------------------
   General helper functions
------------------------------------------------- */

function formatCurrency(value) {
    return new Intl.NumberFormat("en-AE", {
        style: "currency",
        currency: "AED",
        maximumFractionDigits: 0
    }).format(value);
}

function formatPercentage(value) {
    return `${value.toFixed(2)}%`;
}

function displayMessage(element, message, type) {
    element.textContent = message;
    element.classList.remove("message-success", "message-error");

    if (type === "success") {
        element.classList.add("message-success");
    }

    if (type === "error") {
        element.classList.add("message-error");
    }
}


/* -------------------------------------------------
   Property investment calculator
------------------------------------------------- */

const calculatorForm = document.getElementById("calculator-form");
const calculatorMessage = document.getElementById("calculator-message");

const propertyPriceInput = document.getElementById("property-price");
const downPaymentInput = document.getElementById("down-payment");
const annualRentInput = document.getElementById("annual-rent");
const serviceChargesInput = document.getElementById("service-charges");

const downPaymentResult = document.getElementById("down-payment-result");
const grossYieldResult = document.getElementById("gross-yield-result");
const netIncomeResult = document.getElementById("net-income-result");
const netYieldResult = document.getElementById("net-yield-result");

const clearCalculatorButton = document.getElementById("clear-calculator");
const clearHistoryButton = document.getElementById("clear-history");
const calculationHistoryContainer =
    document.getElementById("calculation-history");

const CALCULATION_STORAGE_KEY = "ict171PropertyCalculations";

function getSavedCalculations() {
    try {
        const savedData = localStorage.getItem(CALCULATION_STORAGE_KEY);

        return savedData ? JSON.parse(savedData) : [];
    } catch (error) {
        console.error("Unable to read saved calculations:", error);
        return [];
    }
}

function saveCalculations(calculations) {
    try {
        localStorage.setItem(
            CALCULATION_STORAGE_KEY,
            JSON.stringify(calculations)
        );
    } catch (error) {
        console.error("Unable to save calculations:", error);
    }
}

function resetCalculatorResults() {
    downPaymentResult.textContent = "AED 0";
    grossYieldResult.textContent = "0%";
    netIncomeResult.textContent = "AED 0";
    netYieldResult.textContent = "0%";
}

function renderCalculationHistory() {
    const calculations = getSavedCalculations();

    calculationHistoryContainer.innerHTML = "";

    if (calculations.length === 0) {
        calculationHistoryContainer.innerHTML = `
            <p class="empty-message">
                No calculations have been saved yet.
            </p>
        `;
        return;
    }

    calculations.forEach((calculation) => {
        const entry = document.createElement("article");
        entry.className = "history-entry";

        entry.innerHTML = `
            <strong>${formatCurrency(calculation.propertyPrice)}</strong>

            <p>
                Gross yield: ${formatPercentage(calculation.grossYield)}
                |
                Net yield: ${formatPercentage(calculation.netYield)}
            </p>

            <p>
                Net annual income:
                ${formatCurrency(calculation.netIncome)}
            </p>

            <p>
                Saved: ${calculation.savedAt}
            </p>
        `;

        calculationHistoryContainer.appendChild(entry);
    });
}

calculatorForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const propertyPrice = Number(propertyPriceInput.value);
    const downPaymentPercentage = Number(downPaymentInput.value);
    const annualRent = Number(annualRentInput.value);
    const serviceCharges = Number(serviceChargesInput.value);

    if (
        !Number.isFinite(propertyPrice) ||
        !Number.isFinite(downPaymentPercentage) ||
        !Number.isFinite(annualRent) ||
        !Number.isFinite(serviceCharges)
    ) {
        displayMessage(
            calculatorMessage,
            "Please enter valid numbers in every field.",
            "error"
        );
        return;
    }

    if (propertyPrice <= 0) {
        displayMessage(
            calculatorMessage,
            "The property price must be greater than zero.",
            "error"
        );
        return;
    }

    if (
        downPaymentPercentage < 0 ||
        downPaymentPercentage > 100
    ) {
        displayMessage(
            calculatorMessage,
            "The down payment must be between 0% and 100%.",
            "error"
        );
        return;
    }

    if (annualRent < 0 || serviceCharges < 0) {
        displayMessage(
            calculatorMessage,
            "Rent and service charges cannot be negative.",
            "error"
        );
        return;
    }

    const initialDownPayment =
        propertyPrice * (downPaymentPercentage / 100);

    const grossYield =
        (annualRent / propertyPrice) * 100;

    const netIncome =
        annualRent - serviceCharges;

    const netYield =
        (netIncome / propertyPrice) * 100;

    downPaymentResult.textContent =
        formatCurrency(initialDownPayment);

    grossYieldResult.textContent =
        formatPercentage(grossYield);

    netIncomeResult.textContent =
        formatCurrency(netIncome);

    netYieldResult.textContent =
        formatPercentage(netYield);

    displayMessage(
        calculatorMessage,
        "Calculation completed and saved successfully.",
        "success"
    );

    const savedCalculations = getSavedCalculations();

    savedCalculations.unshift({
        propertyPrice,
        downPaymentPercentage,
        annualRent,
        serviceCharges,
        initialDownPayment,
        grossYield,
        netIncome,
        netYield,
        savedAt: new Date().toLocaleString("en-AE")
    });

    const limitedHistory = savedCalculations.slice(0, 5);

    saveCalculations(limitedHistory);
    renderCalculationHistory();
});

clearCalculatorButton.addEventListener("click", () => {
    calculatorForm.reset();
    resetCalculatorResults();
    displayMessage(calculatorMessage, "", "");
});

clearHistoryButton.addEventListener("click", () => {
    localStorage.removeItem(CALCULATION_STORAGE_KEY);
    renderCalculationHistory();

    displayMessage(
        calculatorMessage,
        "Calculation history has been cleared.",
        "success"
    );
});


/* -------------------------------------------------
   Developer comparison tool
------------------------------------------------- */

const developerData = {
    emaar: {
        name: "Emaar",
        positioning: "Large-scale premium developer",
        projectStyle: "Master-planned communities and landmark projects",
        commonPropertyTypes: "Apartments, villas and townhouses",
        marketPresence: "Established and internationally recognised",
        suitableFor: "Buyers seeking large communities and established branding"
    },

    sobha: {
        name: "Sobha Realty",
        positioning: "Premium quality-focused developer",
        projectStyle: "Integrated communities with strong finish quality",
        commonPropertyTypes: "Apartments, villas and waterfront residences",
        marketPresence: "Established premium market presence",
        suitableFor: "Buyers prioritising construction quality and design"
    },

    damac: {
        name: "DAMAC",
        positioning: "Luxury and lifestyle-focused developer",
        projectStyle: "Branded residences and themed communities",
        commonPropertyTypes: "Apartments, villas and luxury residences",
        marketPresence: "Large regional and international presence",
        suitableFor: "Buyers interested in lifestyle-led developments"
    },

    binghatti: {
        name: "Binghatti",
        positioning: "Design-led urban developer",
        projectStyle: "Distinctive architecture and branded residences",
        commonPropertyTypes: "Apartments and branded luxury residences",
        marketPresence: "Rapidly growing Dubai market presence",
        suitableFor: "Buyers seeking recognisable design and central locations"
    }
};

const developerOneSelect = document.getElementById("developer-one");
const developerTwoSelect = document.getElementById("developer-two");
const compareButton = document.getElementById("compare-button");
const comparisonMessage = document.getElementById("comparison-message");
const comparisonResults = document.getElementById("comparison-results");

const developerOneName =
    document.getElementById("developer-one-name");

const developerTwoName =
    document.getElementById("developer-two-name");

const developerOneDetails =
    document.getElementById("developer-one-details");

const developerTwoDetails =
    document.getElementById("developer-two-details");

function createDeveloperDetails(developer) {
    return `
        <div class="comparison-item">
            <strong>Market positioning</strong>
            <span>${developer.positioning}</span>
        </div>

        <div class="comparison-item">
            <strong>Project style</strong>
            <span>${developer.projectStyle}</span>
        </div>

        <div class="comparison-item">
            <strong>Common property types</strong>
            <span>${developer.commonPropertyTypes}</span>
        </div>

        <div class="comparison-item">
            <strong>Market presence</strong>
            <span>${developer.marketPresence}</span>
        </div>

        <div class="comparison-item">
            <strong>May suit</strong>
            <span>${developer.suitableFor}</span>
        </div>
    `;
}

compareButton.addEventListener("click", () => {
    const firstDeveloperKey = developerOneSelect.value;
    const secondDeveloperKey = developerTwoSelect.value;

    if (!firstDeveloperKey || !secondDeveloperKey) {
        comparisonResults.hidden = true;

        displayMessage(
            comparisonMessage,
            "Please select two developers.",
            "error"
        );
        return;
    }

    if (firstDeveloperKey === secondDeveloperKey) {
        comparisonResults.hidden = true;

        displayMessage(
            comparisonMessage,
            "Please select two different developers.",
            "error"
        );
        return;
    }

    const firstDeveloper =
        developerData[firstDeveloperKey];

    const secondDeveloper =
        developerData[secondDeveloperKey];

    developerOneName.textContent = firstDeveloper.name;
    developerTwoName.textContent = secondDeveloper.name;

    developerOneDetails.innerHTML =
        createDeveloperDetails(firstDeveloper);

    developerTwoDetails.innerHTML =
        createDeveloperDetails(secondDeveloper);

    comparisonResults.hidden = false;

    displayMessage(
        comparisonMessage,
        "Developer comparison generated successfully.",
        "success"
    );
});


/* -------------------------------------------------
   Enquiry form and local storage
------------------------------------------------- */

const enquiryForm = document.getElementById("enquiry-form");
const enquiryMessage = document.getElementById("enquiry-message");

const fullNameInput = document.getElementById("full-name");
const emailInput = document.getElementById("email");
const budgetInput = document.getElementById("budget");
const propertyTypeInput = document.getElementById("property-type");
const messageInput = document.getElementById("message");

const ENQUIRY_STORAGE_KEY = "ict171PropertyEnquiries";

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function getSavedEnquiries() {
    try {
        const savedData = localStorage.getItem(ENQUIRY_STORAGE_KEY);

        return savedData ? JSON.parse(savedData) : [];
    } catch (error) {
        console.error("Unable to read saved enquiries:", error);
        return [];
    }
}

function saveEnquiries(enquiries) {
    try {
        localStorage.setItem(
            ENQUIRY_STORAGE_KEY,
            JSON.stringify(enquiries)
        );
    } catch (error) {
        console.error("Unable to save enquiry:", error);
    }
}

enquiryForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const fullName = fullNameInput.value.trim();
    const email = emailInput.value.trim();
    const budget = Number(budgetInput.value);
    const propertyType = propertyTypeInput.value;
    const message = messageInput.value.trim();

    if (
        !fullName ||
        !email ||
        !budget ||
        !propertyType ||
        !message
    ) {
        displayMessage(
            enquiryMessage,
            "Please complete every field before submitting.",
            "error"
        );
        return;
    }

    if (fullName.length < 3) {
        displayMessage(
            enquiryMessage,
            "Please enter a valid full name.",
            "error"
        );
        return;
    }

    if (!isValidEmail(email)) {
        displayMessage(
            enquiryMessage,
            "Please enter a valid email address.",
            "error"
        );
        return;
    }

    if (!Number.isFinite(budget) || budget <= 0) {
        displayMessage(
            enquiryMessage,
            "Please enter a valid property budget.",
            "error"
        );
        return;
    }

    if (message.length < 10) {
        displayMessage(
            enquiryMessage,
            "Your message must contain at least 10 characters.",
            "error"
        );
        return;
    }

    const enquiries = getSavedEnquiries();

    enquiries.unshift({
        fullName,
        email,
        budget,
        propertyType,
        message,
        submittedAt: new Date().toLocaleString("en-AE")
    });

    saveEnquiries(enquiries.slice(0, 10));

    displayMessage(
        enquiryMessage,
        `Thank you, ${fullName}. Your enquiry has been recorded locally.`,
        "success"
    );

    enquiryForm.reset();
});


/* -------------------------------------------------
   Initial page setup
------------------------------------------------- */

renderCalculationHistory();
resetCalculatorResults();
displayMessage(enquiryMessage, "", ""); 