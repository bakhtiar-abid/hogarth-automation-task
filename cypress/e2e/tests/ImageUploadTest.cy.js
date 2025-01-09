
const { loginPage } = require("../../pages/LoginPage");
import typeInfo from "../../fixtures/data.json";
import { ImageUploadPage } from "../../pages/ImageUploadPage";

require("dotenv").config();

const imageUploadObj = new ImageUploadPage();
describe("Part-1: Upload Item To The Admin Panel", () => {
  beforeEach(() => {
    cy.login(Cypress.env('userEmail'), Cypress.env('password'));
  });

  it("Verify that After logged in, go to DAM > Assets from the top menu and upload image with information", () => {
    const filePath = 'images/Photography.jpeg'; 
    imageUploadObj.selectDamPopUp();
    imageUploadObj.selectItemUploadButton(filePath);
    cy.wait(3000);
    imageUploadObj.checkUploadedImage().should("have.text", typeInfo.imageName);
    imageUploadObj.fillInformation(typeInfo.title, typeInfo.type);
    cy.wait(6000);
  });

  it("Verify that photo has been uploaded successfully according to the file name", () => {
    const imageName = "Photography.jpeg";
    imageUploadObj.selectDamPopUp();
    cy.wait(3000);
    imageUploadObj
      .verifyUploadedImageFileName()
      .contains(imageName)
      .should("be.visible");
  });

  it("Verify that photo has been uploaded successfully based on the generated the thumbnail of the uploaded image", () => {
    imageUploadObj.selectDamPopUp();
    cy.wait(3000);
    imageUploadObj
      .verifyUploadedImageThumbnail()
      .find(imageUploadObj.imageUplaodWebLocators.findImageTag)
      .should("be.visible")
      .and("have.attr", "src")
      .then((src) => {
        expect(src).to.match(
          /https:\/\/sashimi-ir\.s3\.eu-west-1\.amazonaws\.com\/.+/
        );
      });
  });

  it("Verify that the title and type is displayed as expected", () => {
    imageUploadObj.selectDamPopUp();
    cy.wait(3000);
    //verification of title checking
    cy.contains("p.chakra-text", typeInfo.title)
      .should("be.visible")
      .and("have.text", typeInfo.title);
      cy.wait(3000);
    // verification of image type checking
    cy.contains("p.chakra-text", typeInfo.type)
      .should("be.visible")
      .and("have.text", typeInfo.type);
  });
});
