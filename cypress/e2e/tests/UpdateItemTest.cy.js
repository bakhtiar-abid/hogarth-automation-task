const { UpdateItemPage } = require("../../pages/UpdateItemPage");
import typeInfo from '../../fixtures/data.json';
import { ImageUploadPage } from '../../pages/ImageUploadPage';
require('dotenv').config();

const updateItemPageObj = new UpdateItemPage();
const imageUploadObj = new ImageUploadPage();

describe('Update Item @Part-2', () => {

    beforeEach(() => { 
        cy.login("sash.dqa@gmail.com", "Abid1234");
    })
  

    it('Verify that item is selected and edit for the information for title name value', () => {
        imageUploadObj.selectDamPopUp();
        updateItemPageObj.clickCheckBoxToSelectItem();
        updateItemPageObj.editItemClickForUpdateInformation(typeInfo.updateTitle);
    });

    it('Verify that after updating the item it is displaying the title as expected', () => {
        imageUploadObj.selectDamPopUp();
    //verification of title checking
    cy.contains("p.chakra-text", typeInfo.updateTitle)
      .should("be.visible")
      .and("have.text", typeInfo.updateTitle);
    });
});
