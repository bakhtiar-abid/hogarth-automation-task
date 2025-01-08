# Cypress Automation Test Project

## Project Overview
This project is aimed at automating the testing process for the Hogarth Automation Task using Cypress, a robust end-to-end testing framework that streamlines the testing of modern web applications.

## Project Structure
- **cypress/**: Contains all test-related files.
    - **fixtures/**: Contains test data in JSON format.
    - **pages/**: Contains each web page of the applicatio.
    - **integration/**: Contains the actual test scripts.
    - **support/**: Reusable functions and custom commands.
    - **reports/**: Contains Mochawesome reporter for Cypress with screenshots attached to tests
- **cypress.config.js**: Configuration file for Cypress.
- **package.json**: Dependencies and scripts for the project.

## Prerequisites
- Node.js (v12 or later)
- npm or yarn

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/bakhtiar-abid/hogarth-automation-task.git

2. Navigate to the project directory:
   ```bash
   cd hogarth-automation-task

3. Install the dependencies:
   ```bash
   npm install
   or
   yarn install

## Running Tests

4. To run the tests, use the following command:
   ```bash
   npx cypress open

   This will open the Cypress Test Runner, where you can select and run your tests.

   For headless mode (runs tests in the background):
   
   npx cypress run

## Test Cases
The project includes automated test cases for the following functionalities:


- Login: Admin can succefully login from the browser.
- Image Upload: validate to upload imgae with proper information such as title and type.
- Update Item: Verify that admin can update the item and ensure it is updated accordingly.
- Share Item: Valiate that admin can share item with email and verification of the received an email with download link..

## CI/CD Integration
This project is integrated with CI/CD pipelines with GitHub Actions to automate test execution on every commit.


## Reporting
The project generates test reports using [Mocha Reporter]. The reports are saved in the `reports/` directory.

## Browser Configuration

### For now, This project has configured with one browser, we can easily create more browser later on.

1. Chrome


## License
This project is licensed under the MIT License.
