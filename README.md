# Subscription-Management-Software

## Overview

This project consists of two main parts:

- **saas-client**: A React application built with Vite.
- **saas-server**: A Node.js application using Express.

## Prerequisites

Before you begin, ensure you have the following installed on your local machine:

- [Node.js](https://nodejs.org/) (v14.x or higher)
- [npm](https://www.npmjs.com/) (v6.x or higher) or [yarn](https://yarnpkg.com/)

## Technologies Used

### Frontend

- **React**: A JavaScript library for building user interfaces.
- **Vite**: A build tool that provides a faster and leaner development experience for modern web projects.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **Material Tailwind**: A set of UI components based on Material Design and Tailwind CSS.
- **Flowbite React**: A component library built with Tailwind CSS and React.

### Backend

- **Node.js**: A JavaScript runtime built on Chrome's V8 JavaScript engine.
- **Express.js**: A minimal and flexible Node.js web application framework.
- **MySQL**: An open-source relational database management system.
- **Sequelize**: A promise-based Node.js ORM for MySQL, PostgreSQL, SQLite, and MSSQL.

### Payment Integration

- **Razorpay**: A payment gateway platform that allows businesses to accept, process, and disburse payments.

## Setup Instructions

### Clone the Repository

```bash
git clone https://github.com/dsvasudev19/Subscription-Management-Software.git
cd Subscription-Management-Software

### Install Dependencies

#### Client (saas-client)

Navigate to the `saas-client` directory and install the dependencies:

```bash
cd saas-client
npm install
```
or
```bash
cd saas-client
yarn install
```

#### Server (saas-server)

Navigate to the `saas-server` directory and install the dependencies:

```bash
cd ../saas-server
npm install
```
or
```bash
cd ../saas-server
yarn install
```

## Running the Project

### Running the Client

Ensure you are in the `saas-client` directory and start the development server:

```bash
cd ../saas-client
npm run dev
```
or
```bash
cd ../saas-client
yarn dev
```

The client application should now be running on [http://localhost:5173](http://localhost:5173) (or another port specified by Vite).

### Running the Server

Ensure you are in the `saas-server` directory and start the server:

```bash
cd ../saas-server
npm start
```
or
```bash
cd ../saas-server
yarn start
```

The server should now be running on [http://localhost:5000](http://localhost:5000) (or another port if specified).

## Execution Flow

1. **Start the Server**: Begin by starting the backend server. This ensures that all API endpoints are available when the client tries to access them.
2. **Start the Client**: Once the server is running, start the frontend development server. This will launch the React application in your browser.

## Additional Information

### Environment Variables

Make sure to configure any necessary environment variables for both the client and server. Typically, these might be set in `.env` files within the respective directories.

### Payment Integration

Ensure to set up the necessary configurations for integrating Razorpay for payment processing. This might include setting up API keys and configuring routes for handling payment requests and callbacks.

### Testing

Ensure to write and run tests to verify the functionality of both the client and server. Typically, tests can be run with:

```bash
npm test
```
or
```bash
yarn test
```

## Contribution

If you wish to contribute to this project, please follow these steps:

1. **Fork the repository**.
2. **Create a new branch**:
   ```bash
   git checkout -b feature/YourFeature
   ```
3. **Make your changes**.
4. **Commit your changes**:
   ```bash
   git commit -m 'Add some feature'
   ```
5. **Push to the branch**:
   ```bash
   git push origin feature/YourFeature
   ```
6. **Open a pull request**.

Thank you for contributing!
```
