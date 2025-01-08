const { loginPage } = require("../../pages/LoginPage");
require('dotenv').config();

const loginPageObj = new loginPage();

const userEmail = Cypress.env('USEREMAIL');
const password = Cypress.env('PASSWORD');
describe('Login to the admin panel', () => {

    beforeEach(() => {
        loginPageObj.visitWebPage();
    });
  

    it('Verify that admin successfully can login the admin panel', () => {
        loginPageObj.enterEmail(Cypress.env('userEmail'));
        loginPageObj.enterPassword(Cypress.env('password'));
    });
});
