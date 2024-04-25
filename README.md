# Project "Social Media Website" Setup Guide

## Description

Social Media Web is a modern, minimalistic, and secure social media website project aimed at providing users with a seamless and enjoyable social networking experience. Built with advanced technologies and security measures, this project ensures the privacy and data protection of its users while offering a feature-rich platform for social interaction.

## Setup Backend

1. Navigate to the root directory of the project.
2. Install the necessary dependencies for the backend:
   ```bash
   npm install
   ```
3. Create a file named `config.js` in the root directory and provide your server credentials, including the secret key and MongoDB connection string. Example:
   ```javascript
   module.exports = {
     SECRET_KEY: "your_secret_key_here",
     MONGODB: "your_mongodb_connection_string_here",
   };
   ```
4. Run the project:
   - For production:
     ```bash
     npm start
     ```
   - For development with nodemon:
     ```bash
     npm run server
     ```

## Setup Frontend

1. Navigate to the root folder of the project.
2. Change directory to the client folder:
   ```bash
   cd client
   ```
3. Install necessary dependencies for the frontend:
   ```bash
   npm install
   ```
4. Run the project:
   ```bash
   npm start
   ```
