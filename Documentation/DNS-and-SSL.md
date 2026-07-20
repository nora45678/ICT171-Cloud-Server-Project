# DNS and SSL/TLS Configuration

## Overview

A custom domain was connected to the Microsoft Azure Virtual Machine to make the website accessible through a professional domain name rather than only through its public IP address.

The domain used for this project is:

```text
dubaipropertyhub.org
```

The Azure Virtual Machine public IP address is:

```text
4.186.29.190
```

The website can be accessed securely using either of the following URLs:

- https://dubaipropertyhub.org
- https://www.dubaipropertyhub.org

---

# DNS Provider

The domain was registered and managed through Namecheap. Namecheap BasicDNS was used to point the domain towards the Azure Virtual Machine.

---

# DNS Records

The default Namecheap parking and URL redirect records were removed.

The following DNS records were then created:

| Record Type | Host | Value | TTL |
|---|---|---|---|
| A Record | `@` | `4.186.29.190` | Automatic |
| CNAME Record | `www` | `dubaipropertyhub.org` | Automatic |

## A Record

The A record connects the root domain directly to the public IPv4 address of the Azure Virtual Machine.

```text
dubaipropertyhub.org → 4.186.29.190
```

## CNAME Record

The CNAME record allows the `www` version of the website to resolve to the root domain.

```text
www.dubaipropertyhub.org → dubaipropertyhub.org
```

---

# DNS Testing

After the records were saved and DNS propagation was completed, both of the following addresses successfully loaded the website:

```text
http://dubaipropertyhub.org
http://www.dubaipropertyhub.org
```

---

# Azure HTTPS Firewall Rule

HTTPS uses TCP port **443**.

Initially, the Azure Network Security Group allowed only:

- TCP Port 22 (SSH)
- TCP Port 80 (HTTP)

A new inbound port rule was created with the following configuration:

| Setting | Value |
|---|---|
| Source | Any |
| Source Port Ranges | `*` |
| Destination | Any |
| Service | HTTPS |
| Destination Port | `443` |
| Protocol | TCP |
| Action | Allow |
| Priority | `310` |
| Name | `HTTPS` |

This rule allows external users to establish secure HTTPS connections to the Apache web server.

---

# Installing Certbot

The Certbot Apache plugin was installed using:

```bash
sudo apt update
sudo apt install certbot python3-certbot-apache -y
```

---

# Requesting the SSL/TLS Certificate

The following command was used to request and install the SSL/TLS certificate:

```bash
sudo certbot --apache
```

The certificate was configured for both domains:

```text
dubaipropertyhub.org
www.dubaipropertyhub.org
```

Certbot automatically:

1. Requested an SSL/TLS certificate from Let's Encrypt.
2. Verified ownership of the domain.
3. Installed the certificate.
4. Updated the Apache Virtual Host configuration.
5. Enabled HTTPS for both domain names.

---

# Certificate Location

The certificate files are stored in:

```text
/etc/letsencrypt/live/dubaipropertyhub.org/
```

The full certificate chain is located at:

```text
/etc/letsencrypt/live/dubaipropertyhub.org/fullchain.pem
```

---

# Testing HTTPS

Both secure website addresses were tested successfully:

```text
https://dubaipropertyhub.org
https://www.dubaipropertyhub.org
```

The browser displayed a secure connection indicator, confirming that the SSL/TLS certificate was installed correctly.

---

# Testing Automatic Renewal

Let's Encrypt certificates are short-lived, so automatic renewal was tested using:

```bash
sudo certbot renew --dry-run
```

The command returned:

```text
Congratulations, all simulated renewals succeeded
```

This confirmed that Certbot is able to renew the SSL/TLS certificate automatically before it expires.

---

# Troubleshooting

## HTTPS Connection Timed Out

After installing the certificate, HTTPS initially timed out because TCP Port 443 was not permitted by the Azure Network Security Group.

The issue was resolved by creating an inbound HTTPS rule for TCP Port 443.

---

## Newly Registered Domain Flagged by Local Antivirus

A local antivirus application temporarily flagged the newly registered domain because it had not yet established a reputation.

Server-side testing confirmed that Apache was serving the website correctly.

The CSS file was tested using:

```bash
curl -I http://localhost/css/style.css
```

and

```bash
curl -I http://4.186.29.190/css/style.css
```

Both commands returned:

```text
HTTP/1.1 200 OK
```

This confirmed that the Apache server and website files were functioning correctly.

---

# Result

The DNS configuration and SSL/TLS implementation were successfully completed. The website is publicly accessible using both the custom domain and the **www** subdomain, with all communication encrypted using a valid Let's Encrypt SSL/TLS certificate that is configured for automatic renewal.