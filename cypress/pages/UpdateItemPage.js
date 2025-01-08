
export class UpdateItemPage{

    updateItemPageLocators = {
        checkbox: '.chakra-checkbox__control',
        editButton: '(//button[@title="Edit"])[2]',
        titleBox: '//input[@class="chakra-input _s_singleLineTextField css-1an7nsl"]',
        saveButton: '//button[@aria-label="Confirm"]',
        closeItem: '(//button[@class="chakra-button css-rce95w"])[2]'
    }


    clickCheckBoxToSelectItem(){
       cy.get(this.updateItemPageLocators.checkbox).eq(2).click();
    }

    editItemClickForUpdateInformation(updateTitleName){
        cy.xpath(this.updateItemPageLocators.editButton).click();
        cy.xpath(this.updateItemPageLocators.titleBox).type(updateTitleName);
        cy.xpath(this.updateItemPageLocators.saveButton).click();
        cy.xpath(this.updateItemPageLocators.closeItem).click();
    }

    verifyTheUpdatedItemInfoTitle(){

    }

 
}