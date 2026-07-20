# Azure Deployment

## Overview

The Dubai Property Hub website is hosted on a Microsoft Azure Ubuntu Virtual Machine using Infrastructure as a Service (IaaS). The server runs Ubuntu Linux and Apache2 Web Server, providing a reliable environment for hosting the website.

The website was developed locally using Visual Studio Code and deployed securely to the Azure Virtual Machine using SSH.

---

# Deployment Process

The deployment was completed using the following steps:

1. Create an Ubuntu Linux Virtual Machine in Microsoft Azure.
2. Allocate a Public IP Address to the Virtual Machine.
3. Configure the Network Security Group (NSG).
4. Allow inbound traffic for:
   - SSH (Port 22)
   - HTTP (Port 80)
   - HTTPS (Port 443)
5. Connect securely to the server using SSH.
6. Update the Ubuntu operating system.
7. Install the Apache2 Web Server.
8. Upload the website files to the Apache web directory.
9. Restart the Apache service.
10. Test website accessibility using the Public IP Address.
11. Configure the custom domain name.
12. Install and configure SSL/TLS certificates using Certbot.
13. Verify secure HTTPS connectivity.

---

# Important Directories

Apache web directory:

```text
/var/www/html
```

Apache configuration files:

```text
/etc/apache2/
```

SSL certificates:

```text
/etc/letsencrypt/
```

---

# Deployment Commands

## Connect to the Azure Virtual Machine

```bash
ssh username@server-ip
```

## Update Ubuntu

```bash
sudo apt update
sudo apt upgrade -y
```

## Install Apache2

```bash
sudo apt install apache2 -y
```

## Navigate to the Website Directory

```bash
cd /var/www/html
```

## Restart Apache

```bash
sudo systemctl restart apache2
```

## Check Apache Status

```bash
sudo systemctl status apache2
```

---

# Testing and Verification

After deployment, the following components were tested successfully:

- Home Page
- Learning Hub
- Featured Projects
- Investment Calculator
- Developer Comparison Tool
- Property Enquiry Form
- About Page
- Navigation Menu
- Responsive Layout
- JavaScript Functionality
- Local Storage
- MIT License Hyperlink
- DNS Resolution
- HTTPS Secure Connection

---

# Deployment Outcome

The website was successfully deployed to Microsoft Azure and is publicly accessible through:

- Custom Domain
- Public IP Address

The deployment also includes:

- Apache2 Web Server
- Ubuntu Linux
- Namecheap DNS
- SSL/TLS encryption using Certbot
- Secure SSH remote administration

The final deployment provides a secure, reliable and fully functional cloud-hosted educational website. 