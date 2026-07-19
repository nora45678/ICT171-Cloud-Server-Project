# Azure Deployment

## Overview

The website is deployed on a Microsoft Azure Virtual Machine running Ubuntu Linux and Apache Web Server.

## Deployment Steps

1. Create an Ubuntu Virtual Machine in Microsoft Azure.
2. Configure the Network Security Group (NSG) to allow HTTP (Port 80) and SSH (Port 22).
3. Connect to the virtual machine using SSH.
4. Install Apache Web Server.
5. Upload the website files to:

```
/var/www/html
```

6. Restart Apache after updating the website.

## Deployment Commands

Connect to the server:

```bash
ssh username@server-ip
```

Navigate to the website folder:

```bash
cd /var/www/html
```

Restart Apache:

```bash
sudo systemctl restart apache2
```

Check Apache status:

```bash
sudo systemctl status apache2
```

## Testing

After deployment, the following features were tested successfully:

- Navigation menu
- Learning Hub
- Featured Projects
- Investment Calculator
- Developer Comparison
- Enquiry Form
- About section
- MIT License hyperlink

## Result

The website was successfully deployed and is accessible through the Azure Virtual Machine's public IP address.