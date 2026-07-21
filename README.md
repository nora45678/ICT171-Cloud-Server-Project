# Dubai Property Hub

**ICT171 – Introduction to Server Environments and Architectures**  
**Murdoch University Dubai**

---

## Student Information

**Student Name:** Khadija Noor  
**Student ID:** 35279053

---

## Project Overview

Dubai Property Hub is a cloud-hosted educational website developed for the ICT171 Cloud Server Project at Murdoch University Dubai.

The purpose of this project is to demonstrate the deployment of a modern web application using Microsoft Azure Infrastructure as a Service (IaaS), Ubuntu Linux, Apache2 Web Server, Git and GitHub version control, DNS configuration, SSL/TLS encryption, and client-side web technologies.

The website introduces users to the fundamentals of Dubai real estate investing through educational content, interactive calculators, developer comparisons, and a property enquiry system.

---

# Live Website

### Primary Website

https://www.dubaipropertyhub.org

### Alternative URL

https://dubaipropertyhub.org

### Azure Public IP

http://4.186.29.190

---

# Features

- Responsive multi-page website
- Dubai Real Estate Learning Hub
- Featured Dubai property developments
- Property Investment Calculator
- Developer Comparison Tool
- Property Enquiry Form
- Client-side JavaScript validation
- Local Storage enquiry history
- Interactive navigation
- MIT Licensed project

---

# Technologies Used

## Frontend

- HTML5
- CSS3
- JavaScript (ES6)

## Cloud Infrastructure

- Microsoft Azure Virtual Machine (Infrastructure as a Service – IaaS)
- Ubuntu Linux
- Apache2 Web Server

## Networking & Security

- SSH (Secure Shell)
- Namecheap BasicDNS
- Let's Encrypt
- Certbot

## Version Control

- Git
- GitHub

---

# Website Sections

- Home
- Learning Hub
- Featured Projects
- Investment Calculator
- Developer Comparison
- Property Enquiry
- About

---

# Project Structure

```text
ICT171-Cloud-Server-Project
│
├── css/
│   └── style.css
│
├── images/
│
├── js/
│   └── script.js
│
├── screenshots/
│
├── Documentation/
│   ├── Architecture.md
│   ├── Azure-Deployment.md
│   ├── DNS-and-SSL.md
│   ├── Bash-Script.md
│   ├── GitHub.md
│   └── Technologies.md
│
├── website-maintenance.sh
├── LICENSE
├── README.md
└── index.html
```

---

# Documentation

Complete technical documentation is provided in the **Documentation** folder.

The repository includes:

- Architecture.md
- Azure-Deployment.md
- DNS-and-SSL.md
- Bash-Script.md
- GitHub.md
- Technologies.md

The documentation explains how the cloud server was deployed, configured, secured, and maintained, providing sufficient technical information for another ICT171 student to recreate the cloud server environment and website deployment.

---

# Azure Deployment

The website is deployed on a Microsoft Azure Ubuntu Linux Virtual Machine running the Apache2 Web Server.

The deployment process included:

- Creating an Ubuntu Linux Virtual Machine
- Configuring the Azure Network Security Group (NSG)
- Installing Apache2 Web Server
- Configuring the custom domain using Namecheap BasicDNS
- Installing SSL/TLS certificates using Let's Encrypt and Certbot
- Uploading website files securely using SSH
- Verifying HTTP and HTTPS connectivity
- Testing automatic SSL certificate renewal

---

# Project Highlights

This project demonstrates:

- Microsoft Azure Infrastructure as a Service (IaaS)
- Ubuntu Linux server administration
- Apache2 Web Server configuration
- DNS configuration using Namecheap BasicDNS
- SSL/TLS implementation using Let's Encrypt and Certbot
- Git and GitHub version control
- Responsive web design
- Client-side JavaScript
- Local Storage implementation
- Interactive user experience

---

# Screenshots

The repository contains screenshots demonstrating the completed website, including:

- Home Page
- Learning Hub
- Featured Projects
- Investment Calculator
- Developer Comparison Tool
- Property Enquiry Form
- About Page

---

# Technical Evidence

The repository also contains technical evidence demonstrating the successful deployment and configuration of the cloud server, including:

- Azure Virtual Machine Overview
- Azure Networking Configuration
- Namecheap DNS Records
- SSL Certificate Installation
- SSL Certificate Renewal Test
- Apache Server Status
- Bash Script Execution
- GitHub Repository
- Documentation Folder

---

# License

This project is licensed under the **MIT License**.

For more information, visit:

https://opensource.org/licenses/MIT

---

# Video Explainer

A video walkthrough demonstrating the deployment, configuration, and functionality of the Dubai Property Hub project will be added before final submission.

**Video Link:** *(To be added after recording.)*