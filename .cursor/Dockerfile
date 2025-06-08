# Base image with Node.js
FROM node:20-slim

# Install system dependencies
RUN apt-get update && apt-get install -y \
    git \
    curl \
    wget \
    build-essential \
    python3 \
    && rm -rf /var/lib/apt/lists/*

# Create a non-root user
RUN useradd -m -s /bin/bash ubuntu

# Set the user and working directory
USER ubuntu
WORKDIR /home/ubuntu

# Install global npm packages that might be useful for development
USER root
RUN npm install -g \
    typescript \
    @docusaurus/core \
    @docusaurus/preset-classic \
    npm-check-updates
USER ubuntu

# Set up Node environment
ENV NODE_ENV=development

# Note: Do NOT copy project files or run npm install here
# The agent will clone the repository and install dependencies
