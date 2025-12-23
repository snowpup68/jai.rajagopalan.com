# Deployment Guide

Since `gcloud` and `docker` are not currently installed in this environment, you will need to perform the deployment steps manually from a terminal where these tools are available.

## Prerequisites

1.  **Google Cloud SDK**: [Install Guide](https://cloud.google.com/sdk/docs/install)
2.  **Google Cloud Project**: You need an active GCP project with billing enabled.

## Quick Deployment

I have included a script `deploy.sh` that automates the process using Google Cloud Build (so you don't even need Docker installed locally, just the `gcloud` CLI).

1.  **Login to Google Cloud**:
    ```bash
    gcloud auth login
    ```

2.  **Set your Project ID**:
    ```bash
    gcloud config set project [YOUR_PROJECT_ID]
    ```

3.  **Run the Deployment Script**:
    ```bash
    ./deploy.sh
    ```

## What does the script do?
- Enables the **Cloud Build** and **Cloud Run** APIs.
- Uploads your source code to Google Cloud.
- Builds the Docker container remotely.
- Deploys the service to Cloud Run in `us-central1`.
- Makes the URL public (since it's a portfolio site).

## Manual Steps (Alternative)

If you prefer to run the commands yourself:

```bash
# 1. Build and Submit to Artifact Registry (or Container Registry)
gcloud builds submit --tag gcr.io/[PROJECT_ID]/portfolio-site .

# 2. Deploy to Cloud Run
gcloud run deploy portfolio-site \
  --image gcr.io/[PROJECT_ID]/portfolio-site \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated
```
