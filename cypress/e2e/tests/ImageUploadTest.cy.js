const { imageUpload } = require("../../pages/ImageUpload");
const { loginPage } = require("../../pages/LoginPage");
import typeInfo from "../../fixtures/data.json";

require("dotenv").config();

const imageUploadObj = new imageUpload();
describe("Upload Item To The Admin Panel", () => {
  beforeEach(() => {
    cy.login("sash.dqa@gmail.com", "Abid1234");
  });

  it("Verify that After logged in, go to DAM > Assets from the top menu and upload image with info", () => {
    imageUploadObj.selectDamPopUp();
    imageUploadObj.selectItemUploadButton();
    imageUploadObj.checkUploadedImage().should("have.text", typeInfo.imageName);
    imageUploadObj.fillInformation(typeInfo.title, typeInfo.type);
    cy.wait(10000);
  });

  it("Verify that photo has been uploaded successfully according to the file name", () => {
    const imageName = "Photography.jpeg";
    imageUploadObj.selectDamPopUp();
    imageUploadObj
      .verifyUploadedImageFileName()
      .contains(imageName)
      .should("be.visible");
  });

  it("Verify that photo has been uploaded successfully based on the generated the thumbnail of the uploaded image", () => {
    imageUploadObj.selectDamPopUp();
    imageUploadObj
      .verifyUploadedImageThumbnail()
      .find("img.chakra-image.css-ltsvov")
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
    //verification of title checking
    cy.contains("p.chakra-text", typeInfo.title)
      .should("be.visible")
      .and("have.text", typeInfo.title);
    // verification of image type checking
    cy.contains("p.chakra-text", typeInfo.type)
      .should("be.visible")
      .and("have.text", typeInfo.type);
  });
});
