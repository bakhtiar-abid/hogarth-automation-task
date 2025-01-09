
export class ImageUploadPage{

    imageUplaodWebLocators = {
        damPopUp: '#menu-button-11',
        assestsButton: '#menu-list-11-menuitem-8',
        uploadItemButton: '//button[@title="New Item"]',
        fileUpload:'//div[@class="css-17i91hl"]',
        titleField: '//input[@class="chakra-input _s_singleLineTextField css-1an7nsl"]',
        imageTypeField: '(//div[@class="mb-tag-field__input-container css-19bb58m"])[3]',
        imageTypeInputBox: '(//input[@class="mb-tag-field__input"])[3]',
        imageTitile: '//p[@class="chakra-text css-ytdmmk"]',
        saveButton: '//button[@aria-label="Confirm"]',
        findImageTag: 'img.chakra-image.css-ltsvov',
        listContainer: '//div[@class="chakra-stack css-1ocxmib"]',
        thumbanailContainer: '.chakra-stack.css-7w28qn',
        inputFile: 'input[type="file"]'

    }



 
    selectDamPopUp(){
        cy.viewport(1900, 700);
       cy.get(this.imageUplaodWebLocators.damPopUp).click();
       cy.get(this.imageUplaodWebLocators.assestsButton,  { timeout: 10000 }).click();
    }

    selectItemUploadButton(filePaths){
        cy.viewport(1900, 700);
        cy.xpath(this.imageUplaodWebLocators.uploadItemButton).click();
        cy.xpath(this.imageUplaodWebLocators.fileUpload).click();
        cy.get(this.imageUplaodWebLocators.inputFile).attachFile(filePaths);
    }

    checkUploadedImage(){
        return cy.xpath(this.imageUplaodWebLocators.imageTitile);
    }

    fillInformation(title, image){
     cy.xpath(this.imageUplaodWebLocators.titleField).type(title)
     cy.xpath(this.imageUplaodWebLocators.imageTypeField).click({force:true});
     cy.xpath(this.imageUplaodWebLocators.imageTypeInputBox).type(image).type('{enter}');
     cy.xpath(this.imageUplaodWebLocators.saveButton).click();
    }

    verifyUploadedImageFileName(){
        return cy.xpath(this.imageUplaodWebLocators.listContainer);
    }

    verifyUploadedImageThumbnail(){
        return cy.get(this.imageUplaodWebLocators.thumbanailContainer);
    }

    

    
 
}