
const { imageUpload } = require("../../pages/ImageUpload");
const { UpdateItemPage } = require("../../pages/UpdateItemPage");
import typeInfo from '../../fixtures/data.json';
require('dotenv').config();

const updateItemPageObj = new UpdateItemPage();
const imageUploadObj = new imageUpload();

describe('Login to the admin panel', () => {

    beforeEach(() => {
        cy.login("sash.dqa@gmail.com", "Abid1234");
    })
  

    it('Verify that item is selected and edit for the information for title name value', () => {
        imageUploadObj.selectDamPopUp();
        updateItemPageObj.clickCheckBoxToSelectItem();
        updateItemPageObj.editItemClickForUpdateInformation(typeInfo.updateTitle);
    });
});
