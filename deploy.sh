#!/bin/bash

# Configuration
APP_NAME="portfolio-site"
REGION="us-central1"

# Colors
GREEN='\033[0;32m'
RED='\033[0;31m'
NC='\033[0m'

echo -e "${GREEN}Starting Deployment for $APP_NAME...${NC}"

# 1. Check for gcloud
if ! command -v gcloud &> /dev/null; then
    echo -e "${RED}Error: gcloud CLI is not installed.${NC}"
    echo "Please install it from: https://cloud.google.com/sdk/docs/install"
    exit 1
fi

# 2. Check for Project ID
PROJECT_ID=$(gcloud config get-value project)
if [ -z "$PROJECT_ID" ]; then
    echo -e "${RED}Error: No Google Cloud project selected.${NC}"
    echo "Run: gcloud config set project [YOUR_PROJECT_ID]"
    exit 1
fi

echo -e "Deploying to Project: ${GREEN}$PROJECT_ID${NC}"

# 3. Enable Services
echo "Enabling necessary Google Cloud services..."
gcloud services enable cloudbuild.googleapis.com run.googleapis.com

# 4. Build and Deploy
# We use Cloud Build so you don't need local Docker running
echo "Building and Deploying to Cloud Run..."
gcloud run deploy $APP_NAME \
    --source . \
    --region $REGION \
    --allow-unauthenticated \
    --project $PROJECT_ID

echo -e "${GREEN}Deployment Complete!${NC}"
