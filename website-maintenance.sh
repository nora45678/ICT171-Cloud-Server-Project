# ICT171 Website Maintenance Script
# Author: Khadija Noor
# Purpose: Backup the website, check Apache, and test the live website.

WEBSITE_DIR="/var/www/html"
BACKUP_DIR="$HOME/website-backups"
TIMESTAMP=$(date +"%Y-%m-%d_%H-%M-%S")
BACKUP_FILE="$BACKUP_DIR/website-backup-$TIMESTAMP.tar.gz"
WEBSITE_URL="http://4.186.29.190"

echo "Starting website maintenance..."

mkdir -p "$BACKUP_DIR"

echo "Creating website backup..."
sudo tar -czf "$BACKUP_FILE" "$WEBSITE_DIR"

if [ $? -eq 0 ]; then
    echo "Backup created successfully:"
    echo "$BACKUP_FILE"
else
    echo "Backup failed."
    exit 1
fi

echo "Checking Apache status..."

if systemctl is-active --quiet apache2; then
    echo "Apache is running."
else
    echo "Apache is not running. Attempting to restart..."
    sudo systemctl restart apache2

    if systemctl is-active --quiet apache2; then
        echo "Apache restarted successfully."
    else
        echo "Apache could not be restarted."
        exit 1
    fi
fi

echo "Checking live website..."

if curl -Is "$WEBSITE_URL" | head -n 1 | grep -q "200"; then
    echo "Website is responding successfully."
else
    echo "Website check failed."
    exit 1
fi

echo "Website maintenance completed successfully."