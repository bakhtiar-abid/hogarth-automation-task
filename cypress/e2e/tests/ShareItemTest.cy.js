import typeInfo from "../../fixtures/data.json";
import { ImageUploadPage } from "../../pages/ImageUploadPage";
import { ShareItemPage } from "../../pages/ShareItemPage";

const imageUploadObj = new ImageUploadPage();
const shareItemObj = new ShareItemPage();

describe("Part-3: Share Item with Email and Verification with the dowloadable link", () => {
  it("Verify that item is selected and edit for the information for title name value", () => {
    cy.login(Cypress.env("userEmail"), Cypress.env("password"));
    imageUploadObj.selectDamPopUp();
    cy.wait(6000);
    shareItemObj.shareItemWithEamil(typeInfo.shareEmail);
  });

  it("Verify email for download link", () => {
    cy.visit(Cypress.env("yopMail"));
    shareItemObj.visitToTheEmailProvider(typeInfo.shareEmail);
    cy.getIframeBody('#ifmail').within(() => {
    cy.contains('span', typeInfo.dowloadTitleLink)
      .should('exist')
      .parent('a')
      .should('have.attr', 'href')
      .and('include', typeInfo.hrefLink);
  });
  

      
      
  });
});
