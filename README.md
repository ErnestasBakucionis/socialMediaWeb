# Project "Social Media Website" Setup Guide

## Description

Social Media Web is a modern, minimalistic, and secure social media website project aimed at providing users with a seamless and enjoyable social networking experience. Built with advanced technologies and security measures, this project ensures the privacy and data protection of its users while offering a feature-rich platform for social interaction.

## Technologies Used

### Backend

- **Node.js**: JavaScript runtime environment for server-side development.
- **Apollo Server**: GraphQL server implementation.
- **bcryptjs**: Library for hashing passwords.
- **GraphQL**: Query language for APIs.
- **jsonwebtoken**: Library for generating and verifying JSON Web Tokens (JWT).
- **MongoDB**: NoSQL database for storing application data.
- **Mongoose**: Object Data Modeling (ODM) library for MongoDB and Node.js.

### Frontend

- **React**: JavaScript library for building user interfaces.
- **Apollo Client**: GraphQL client for React applications.
- **Semantic UI React**: UI framework for React applications.
- **React Router DOM**: Library for routing in React applications.
- **JWT Decode**: Library for decoding JWT tokens.
- **Moment.js**: Library for parsing, validating, manipulating, and displaying dates and times.
- **GraphQL Tag**: Library for parsing GraphQL queries.
- **Web Vitals**: Library for measuring real-world performance metrics.

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
