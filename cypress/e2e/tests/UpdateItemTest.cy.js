const { UpdateItemPage } = require("../../pages/UpdateItemPage");
import typeInfo from '../../fixtures/data.json';
import { ImageUploadPage } from '../../pages/ImageUploadPage';
require('dotenv').config();

const updateItemPageObj = new UpdateItemPage();
const imageUploadObj = new ImageUploadPage();

describe('Part-2: Update Item', () => {

    beforeEach(() => { 
        cy.login(Cypress.env('userEmail'), Cypress.env('password'));
    })
  

    it('Verify that item is selected and edit for the information for title name value', () => {
        imageUploadObj.selectDamPopUp();
        cy.wait(5000);
        updateItemPageObj.clickCheckBoxToSelectItem();
        cy.wait(3000);
        updateItemPageObj.editItemClickForUpdateInformation(typeInfo.updateTitle);
    });

    it('Verify that after updating the item it is displaying the title as expected', () => {
        imageUploadObj.selectDamPopUp();
        cy.wait(3000);
    //verification of title checking
    cy.contains("p.chakra-text", typeInfo.updateTitle)
      .should("be.visible")
      .and("have.text", typeInfo.updateTitle);
    });
});
