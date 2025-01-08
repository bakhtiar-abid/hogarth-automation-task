const { imageUpload } = require("../../pages/ImageUpload");
const { loginPage } = require("../../pages/LoginPage");
import typeInfo from '../../fixtures/data.json'; // Adjust path as needed

require('dotenv').config();

const imageUploadObj = new imageUpload();
const loginPageObj = new loginPage();
describe('Login to the admin panel', () => {

    beforeEach(() => {
        cy.login("sash.dqa@gmail.com", "Abid1234");
    })
   

    it('Verify that After logged in, go to DAM > Assets from the top menu and upload image', () => {
        imageUploadObj.selectDamPopUp();
        imageUploadObj.selectItemUploadButton();
        imageUploadObj.checkUploadedImage().should('have.text', 'Photography.jpeg');
        imageUploadObj.fillInformation(typeInfo.title, typeInfo.type);
       
    });
});
