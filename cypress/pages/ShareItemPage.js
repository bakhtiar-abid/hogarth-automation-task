

export class ShareItemPage{

    shareItemPageLocators = {
       checkbox: '.chakra-checkbox__control',
       shareButton: '//button[@title="Share"]',
       addEmail: '//div[@class="mb-tag-field__control css-g5xere-control"]//input',
       sendEmail: '//button[@aria-label="Email Link"]',
       apiKeyField: '//input[@data-testid="api-key"]',
       loginButton: '#login',
       clickToLogin: '//button[@class="md"]',
       downloadFileLink: '//span[text()="Click here to download the files"]'
       
    }
    shareItemWithEamil(emailID){
       cy.get(this.shareItemPageLocators.checkbox).eq(2).click();
       cy.xpath(this.shareItemPageLocators.shareButton).click();

        cy.xpath(this.shareItemPageLocators.addEmail).click();
       cy.wait(3000)
       .then(() => {
         cy.xpath(this.shareItemPageLocators.addEmail).as('emailInput').type(`${emailID}`,{ delay: 50 });
         cy.wait(5000)
         cy.xpath(`//div[text()='Create "${emailID}"']`).click();

         cy.xpath(this.shareItemPageLocators.sendEmail).click();
       });
    }
   


    visitToTheEmailProvider(email){
      cy.get(this.shareItemPageLocators.loginButton).type(email);
      cy.xpath(this.shareItemPageLocators.clickToLogin).click();
    }

    VerifyDownLoadLink(){
     return cy.xpath(this.shareItemPageLocators.downloadFileLink);
    }

    
}