# System Architecture

## Overview

The Dubai Property Hub project is deployed using a cloud-based Infrastructure as a Service (IaaS) architecture on Microsoft Azure. The website is hosted on an Ubuntu Linux Virtual Machine running the Apache2 web server and is accessible through both a custom domain name and the server's public IP address.

Development was completed locally using Visual Studio Code. Version control was managed with Git and GitHub before the website was securely deployed to the Azure Virtual Machine using SSH.

---

# Architecture Diagram

```text
                    User
                      │
                      ▼
              Web Browser
                      │
                      ▼
        www.dubaipropertyhub.org
               (Namecheap DNS)
                      │
                      ▼
        Azure Public IP Address
                      │
                      ▼
    Azure Ubuntu Virtual Machine
                      │
                      ▼
          Apache2 Web Server
                      │
                      ▼
        Website Files (HTML, CSS,
        JavaScript and Images)
```

---

# System Components

| Component | Purpose |
|----------|---------|
| Microsoft Azure Virtual Machine | Hosts the website in the cloud using Infrastructure as a Service (IaaS). |
| Ubuntu Linux | Operating system running on the virtual machine. |
| Apache2 Web Server | Serves the website files to users over HTTP and HTTPS. |
| Namecheap DNS | Connects the custom domain name to the Azure Virtual Machine's public IP address. |
| Let's Encrypt & Certbot | Provides and automatically renews the SSL/TLS certificate for secure HTTPS communication. |
| HTML5 | Structures the website pages. |
| CSS3 | Provides responsive styling and layout. |
| JavaScript | Adds interactivity, form validation, Local Storage and calculator functionality. |
| Git | Tracks project changes during development. |
| GitHub | Stores the source code and project documentation. |

---

# Deployment Workflow

1. Develop the website locally using Visual Studio Code.
2. Track project changes using Git.
3. Push updates to the GitHub repository.
4. Connect securely to the Azure Virtual Machine using SSH.
5. Upload the website files to the Apache web directory.
6. Configure DNS records through Namecheap.
7. Install and configure SSL/TLS certificates using Certbot.
8. Test HTTP, HTTPS and DNS connectivity.
9. Verify the website is publicly accessible through both the custom domain and the public IP address.

---

# Security

The server incorporates several security measures:

- SSH is used for secure remote administration.
- DNS records route the custom domain securely to the Azure Virtual Machine.
- SSL/TLS encryption protects communication between users and the website.
- Certbot automatically renews SSL certificates.
- Apache serves only the required website files.
- A Bash maintenance script can be used to verify server health and assist with routine maintenance.

---

# Summary

The system architecture combines Microsoft Azure cloud infrastructure, Ubuntu Linux, Apache2, Namecheap DNS, SSL/TLS encryption, GitHub version control and client-side web technologies to provide a secure, reliable and publicly accessible educational website.