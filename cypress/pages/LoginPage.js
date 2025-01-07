
export class loginPage{

    loginPageWebLocators = {
        emailField: '//input[@name="userName"]',
        nextButton: '//button[@aria-label="Next"]',
        passwordField: '//input[@type="password"]',
        loginButton: '//button[@aria-label="Log in"]'
    }



    visitWebPage(){
        cy.visit(Cypress.env('baseURL')).then(()=>{
            cy.url().should('include', '/Login');
        })
    }

    enterEmail(email){
       cy.xpath(this.loginPageWebLocators.emailField).type(email);
       cy.xpath(this.loginPageWebLocators.nextButton).click();
    }

    enterPassword(password){
        cy.xpath(this.loginPageWebLocators.passwordField).type(password);
       cy.xpath(this.loginPageWebLocators.loginButton).click();
    }
}