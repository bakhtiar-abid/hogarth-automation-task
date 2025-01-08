
const { UpdateItemPage } = require("../../pages/UpdateItemPage");
import typeInfo from '../../fixtures/data.json';
import { ImageUploadPage } from '../../pages/ImageUploadPage';
import { ShareItemPage } from '../../pages/ShareItemPage';
require('dotenv').config();

const updateItemPageObj = new UpdateItemPage();
const imageUploadObj = new ImageUploadPage();
const shareItemObj = new ShareItemPage();

describe('Share Item @Part-3', () => {

    beforeEach(() => {
        cy.login("sash.dqa@gmail.com", "Abid1234");
    })
  

    it('Verify that item is selected and edit for the information for title name value', () => {
        imageUploadObj.selectDamPopUp();
        shareItemObj.shareItemWithEamil();
    
    });
});
