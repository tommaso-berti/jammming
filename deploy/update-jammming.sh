#!/bin/bashecho "🔁 Pulling latest code..."
git pull origin main || exit 1

echo "📦 Installing dependencies..."
npm install

echo "🛠️ Building React app..."
npm run build

echo "🔐 Fixing permissions..."
chown -R website_deployer:www-data .

echo "✅ Deploy completed!"