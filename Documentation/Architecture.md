# System Architecture

## Overview

The Dubai Property Hub website is hosted on a Microsoft Azure Ubuntu Virtual Machine running the Apache web server. The project is developed locally using Visual Studio Code, managed with Git and GitHub, and deployed to Azure.

## Architecture

```
User
   │
   ▼
Web Browser
   │
   ▼
Azure Virtual Machine (Ubuntu)
   │
   ▼
Apache Web Server
   │
   ▼
Website Files
(index.html, CSS, JavaScript, Images)
```

## Components

- Microsoft Azure Virtual Machine
- Ubuntu Linux
- Apache Web Server
- HTML5
- CSS3
- JavaScript
- GitHub Repository

## Workflow

1. Develop website locally using Visual Studio Code.
2. Commit changes using Git.
3. Push changes to GitHub.
4. Deploy website to the Azure Virtual Machine.
5. Apache serves the website to users.

## Security

- SSH is used for secure remote server management.
- Website files are stored on the Ubuntu server.
- Regular backups can be created using the maintenance Bash script.