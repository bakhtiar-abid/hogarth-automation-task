const { loginPage } = require("../../pages/LoginPage");
require('dotenv').config();

const loginPageObj = new loginPage();


describe('Login to the admin panel', () => {

    beforeEach(() => {
        loginPageObj.visitWebPage();
    });
  

    it('Verify that admin successfully can login the admin panel', () => {
        loginPageObj.enterEmail(Cypress.env('userEmail'));
        loginPageObj.enterPassword(Cypress.env('password'));
    });
});
