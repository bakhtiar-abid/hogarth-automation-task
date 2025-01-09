
import typeInfo from '../../fixtures/data.json';
import { ImageUploadPage } from '../../pages/ImageUploadPage';
import { ShareItemPage } from '../../pages/ShareItemPage';

const imageUploadObj = new ImageUploadPage();
const shareItemObj = new ShareItemPage();

describe('Part-3: Share Item with Email and Verification with the dowloadable link', () => {
    let emailId;
   
 
  

    it('Verify that item is selected and edit for the information for title name value', () => {
        cy.login(Cypress.env('userEmail'), Cypress.env('password'));
        imageUploadObj.selectDamPopUp();
        cy.wait(6000);
        shareItemObj.shareItemWithEamil(typeInfo.shareEmail);
        
    });

    it('Verify email for download link', () => {
        cy.visit(Cypress.env('yopMail'));
        shareItemObj.visitToTheEmailProviderAndVerifyDownLoad(typeInfo.shareEmail);
        cy.xpath('//span[text()="Click here to download the files"]')
        .should('exist') // Ensure the element exists
        .and('have.text', 'Click here to download the files');

        cy.get('a')
        .should('have.attr', 'href')
        .and('include', 'https://qatest.marcombox.com/FileShare?id=');
    });
});
