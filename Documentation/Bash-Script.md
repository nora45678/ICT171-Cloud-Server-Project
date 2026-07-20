# Website Maintenance Bash Script

## Overview

A custom Bash script was developed to automate routine website maintenance tasks on the Ubuntu Linux web server hosting the Dubai Property Hub website. Automating these routine tasks reduces manual administration, improves server reliability, and provides a quick method of verifying that the web server is functioning correctly after maintenance.

The script is named:

```text
website-maintenance.sh
```

---

# Purpose

The maintenance script automates several common server administration tasks, including:

- Creating a backup of the website files
- Checking whether the Apache web server is running
- Restarting Apache if required
- Verifying that the website is accessible
- Displaying informative status messages throughout execution

Automating these operations reduces manual effort, improves consistency, and minimizes the risk of human error.

---

# Script Location

The script is stored on the Ubuntu Virtual Machine:

```text
~/website-maintenance.sh
```

---

# Making the Script Executable

Before running the script, execute:

```bash
chmod +x website-maintenance.sh
```

This command grants execute permission to the script.

---

# Running the Script

The script is executed using:

```bash
./website-maintenance.sh
```

---

# Script Functions

## 1. Website Backup

The script creates a backup of the website files before performing maintenance.

Purpose:

- Protect website data
- Provide a recovery copy if problems occur
- Reduce the risk of accidental data loss

---

## 2. Apache Service Check

The script checks whether the Apache web server is currently running.

If Apache is not running, the script automatically restarts the service using:

```bash
sudo systemctl restart apache2
```

This helps maximise website availability.

---

## 3. Website Availability Test

After confirming that Apache is running, the script verifies that the website responds successfully.

This confirms that visitors are able to access the website after maintenance has been completed.

---

## 4. Status Messages

Throughout execution, the script displays informative messages describing each maintenance task.

Example output:

```text
Creating backup...
Backup completed.

Checking Apache...
Apache is running.

Checking live website...
Website is responding successfully.

Website maintenance completed successfully.
```

These messages provide immediate feedback and help verify that each maintenance task completed successfully.

---

# Benefits

Using a Bash maintenance script provides several advantages:

- Automates repetitive server administration tasks
- Saves time during routine maintenance
- Reduces manual configuration errors
- Improves server reliability
- Confirms Apache service availability
- Verifies website accessibility
- Simplifies future server administration

---

# Testing Results

The script was tested successfully on the Microsoft Azure Ubuntu Virtual Machine.

Testing confirmed that:

- Website backup completed successfully.
- Apache service was running correctly.
- Website availability was successfully verified.
- Informative status messages were displayed throughout execution.
- All maintenance tasks completed without errors.

---

# Outcome

The custom Bash maintenance script provides a reliable and efficient method for performing routine website administration. By combining automated backups, Apache service verification, website availability testing, and clear status reporting into a single script, it improves both the efficiency and reliability of server maintenance while reducing manual administrative effort.