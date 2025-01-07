const { imageUpload } = require("../../pages/ImageUpload");
const { loginPage } = require("../../pages/LoginPage");
require('dotenv').config();

const imageUploadObj = new imageUpload();
const loginPageObj = new loginPage();
describe('Login to the admin panel', () => {

    beforeEach(() => {
        cy.login("sash.dqa@gmail.com", "Abid1234");
    })
   

    it('Verify that After logged in, go to DAM > Assets from the top menu', () => {
        imageUploadObj.selectDamPopUp();
        imageUploadObj.selectItemUploadButton();
    });
});
