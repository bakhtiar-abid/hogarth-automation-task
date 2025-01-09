
const { UpdateItemPage } = require("../../pages/UpdateItemPage");
import typeInfo from '../../fixtures/data.json';
import { ImageUploadPage } from '../../pages/ImageUploadPage';
import { ShareItemPage } from '../../pages/ShareItemPage';


const updateItemPageObj = new UpdateItemPage();
const imageUploadObj = new ImageUploadPage();
const shareItemObj = new ShareItemPage();

describe('Share Item @Part-3', () => {
    const emailAddress = 'user-d10f1c57-8f3b-4aa8-806e-ee2d897ff398@mailslurp.biz';
    let emailId;

    beforeEach(() => {
        cy.login(Cypress.env('userEmail'), Cypress.env('password'));
    })
  

    it('Verify that item is selected and edit for the information for title name value', () => {
        imageUploadObj.selectDamPopUp();
        cy.wait(6000);
        shareItemObj.shareItemWithEamil(typeInfo.shareEmail);
    });

    it('Verify email for download link', () => {
        imageUploadObj.selectDamPopUp();
        cy.wait(6000);
        cy.mailslurp().then(mailslurp => {
          
          mailslurp.waitForLatestEmail('d10f1c57-8f3b-4aa8-806e-ee2d897ff398', 60000).then(email => {
            emailId = email.id;
    
            
            // expect(email.subject).to.include('Download Link');
            expect(email.body).to.include('Click here to download the files');
    
            
            const linkRegex = /(https?:\/\/[^\s]+)/g;
            const downloadLink = email.body.match(linkRegex)[0];
            expect(downloadLink).to.not.be.empty;
    
           
            cy.visit(downloadLink);
          });
        });
      });
});
