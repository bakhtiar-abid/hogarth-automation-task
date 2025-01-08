
export class imageUpload{

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

    }



 
    selectDamPopUp(){
        cy.viewport(1900, 700);
       cy.get(this.imageUplaodWebLocators.damPopUp).click();
       cy.get(this.imageUplaodWebLocators.assestsButton,  { timeout: 10000 }).click();
    }

    selectItemUploadButton(){
        cy.viewport(1900, 700);
        cy.xpath(this.imageUplaodWebLocators.uploadItemButton).click();
        cy.xpath(this.imageUplaodWebLocators.fileUpload).click();
        const filePath = 'images/Photography.jpeg'; 
        cy.get('input[type="file"]').attachFile(filePath);
    }

    checkUploadedImage(){
        return cy.xpath(this.imageUplaodWebLocators.imageTitile);
    }

    fillInformation(title, image){
     cy.xpath(this.imageUplaodWebLocators.titleField).type(title)
     cy.xpath(this.imageUplaodWebLocators.imageTypeField).click({force:true});
     cy.xpath(this.imageUplaodWebLocators.imageTypeInputBox).type("Image").type('{enter}');
     cy.xpath(this.imageUplaodWebLocators.saveButton).click();
    }
 
}