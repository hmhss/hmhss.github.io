#!/bin/bash

# Script to start local development server

echo "Starting Hebron MHSS local development server..."
echo "------------------------------------------------"
echo "URL: http://localhost:4321"
echo "Admin: http://localhost:4321/admin"
echo "------------------------------------------------"

# Check if node_modules exists, install if not
if [ ! -d "node_modules" ]; then
  echo "Installing dependencies..."
  npm install
fi

# Start Astro
npm run dev
