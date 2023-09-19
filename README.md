
# Arcadian Transaction

Welcome to the **Arcadian Transaction** repository. This repository consists of two main solutions:

1. **TransactionApi** - A .NET 7 API.
2. **arcadian-transactions-app** - An Angular application.

## Getting Started

To get started with the project, you need to run both the API solution and the Angular application.

### Prerequisites

- .NET 7 SDK
- Node.js and npm (for the Angular app)
- Angular CLI

### Running the TransactionApi

1. Navigate to the `TransactionApi` directory:

    ```bash
    cd path-to-TransactionApi
    ```

2. Run the API:

    For HTTP:
    ```bash
    dotnet run --launch-profile http
    ```

    For HTTPS:
    ```bash
    dotnet run --launch-profile https
    ```
    The Swagger documentation will be available at [http://localhost:5094/swagger](http://localhost:5094/swagger) or [https://localhost:7000/swagger](https://localhost:7000/swagger) based on your chosen profile.

### Running the arcadian-transactions-app

1. Navigate to the `arcadian-transactions-app` directory:

    ```bash
    cd path-to-arcadian-transactions-app
    ```

2. Install the required npm packages:

    ```bash
    npm install
    ```

3. Start the Angular application:

    ```bash
    npm start
    ```

    The application will be available at [http://localhost:4200](http://localhost:4200).

