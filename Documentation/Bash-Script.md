# Website Maintenance Bash Script

## Overview

A custom Bash script was created to automate basic website maintenance tasks on the Ubuntu server.

## Script Name

```
website-maintenance.sh
```

## Purpose

The script performs several maintenance tasks automatically:

- Creates a backup of the website files
- Checks whether the Apache web server is running
- Verifies that the website is accessible
- Displays the maintenance status to the user

## Usage

Make the script executable:

```bash
chmod +x website-maintenance.sh
```

Run the script:

```bash
./website-maintenance.sh
```

## Features

- Automatic website backup
- Apache service status check
- Website availability test
- Simple console output
- Easy to run and maintain

## Output

When executed successfully, the script:

- Creates a timestamped backup archive
- Confirms Apache is running
- Confirms the website is responding
- Displays a completion message

## Benefits

Using a Bash script reduces manual work, improves server maintenance, and helps ensure the website remains available.