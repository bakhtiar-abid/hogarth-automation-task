
export class imageUpload{

    imageUplaodWebLocators = {
        damPopUp: '#menu-button-11',
        assestsButton: '#menu-list-11-menuitem-8',
        uploadItemButton: '//button[@title="New Item"]',
        fileUpload:'//div[@class="css-17i91hl"]'
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
 
}