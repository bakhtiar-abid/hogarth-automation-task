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


- Login: Ensure the Admin can successfully log in through the browser.
- Image Upload: Validate that images can be uploaded with accurate and complete information, including title and type.
- Update Item: Verify that the Admin can update items and confirm that the updates are reflected correctly.
- Share Item: Validate that the Admin can share items via email and confirm that the recipient receives an email with a download link.

## Reporting
The project generates test reports using [Mocha Reporter]. The reports are saved in the `reports/` directory.

- Login Functionality
https://github.com/user-attachments/assets/8b82aa6b-e67b-4bf7-80e8-1deb8cb8ad01

- @Part 1 Validate that images can be uploaded with accurate and complete information, including title and type.
https://github.com/user-attachments/assets/ac5ad3bf-be97-467a-93fe-b8abfed44557


- @Part 2 Verify that the Admin can update items and confirm that the updates are reflected correctly.
https://github.com/user-attachments/assets/8a9c8324-a994-4fe1-a111-a6ab2c86e2d6


- @Part 3 Validate that the Admin can share items via email and confirm that the recipient receives an email with a download link.
https://github.com/user-attachments/assets/0899b876-093a-4aca-b014-7a324ea7e44c




## Browser Configuration

### For now, This project has configured with one browser, we can easily create more browser later on.

1. Chrome


## License
This project is licensed under the MIT License.
