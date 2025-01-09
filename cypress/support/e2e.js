// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import 'cypress-mochawesome-reporter/register';
const { MailSlurp } = require('mailslurp-client');

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})


// Create a MailSlurp instance and attach it to Cypress
Cypress.Commands.add('mailslurp', () => {
  return new MailSlurp({ apiKey: 'bbf1894c1ffe0213020e17c7609d1df936e6e9a1c37441ce95f41f373cd485cd' }); // Replace with your actual API key
});
