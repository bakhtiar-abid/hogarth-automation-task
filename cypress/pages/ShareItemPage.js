

export class ShareItemPage{

    shareItemPageLocators = {
       checkbox: '.chakra-checkbox__control',
       shareButton: '//button[@title="Share"]',
       addEmail: '(//div[@class="mb-tag-field__input-container css-19bb58m"])[2]',
       sendEmail: '//button[@aria-label="Email Link"]'
    }


    shareItemWithEamil(){
       cy.get(this.shareItemPageLocators.checkbox).eq(2).click();
       cy.xpath(this.shareItemPageLocators.shareButton).click();
       
       cy.xpath('//div[@class="mb-tag-field__control css-g5xere-control"]').click()

    //    cy.xpath('(//div[@class="mb-tag-field__input-container css-19bb58m"])[2]')
    //    .should('exist')
    //    .and('be.visible')
    //    .click();
     
    //  cy.xpath('(//div[@class="mb-tag-field__input-container css-19bb58m"])[2]//input')
    //    .should('exist') // Ensure input is attached
    //    .and('be.visible') // Ensure input is visible
    //    .then(($input) => {
    //      // Interact after verifying the input is stable
    //      cy.wrap($input).type('test@gmail.com{enter}');
    //    });
      // Check if value is typed correctly
     

     



    }

    
}