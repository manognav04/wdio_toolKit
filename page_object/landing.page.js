const Page = require('./page');

class LandingPage extends Page {
  get pageTitle() { return $('#main-app-header-link'); }

  get btnAddDoc() { return $('/html/body/app-root/app-document-list/a'); }

  get inputBox() { return $('/html/body/app-root/app-add-document-form/form/input'); }

  get dropDownType() { return $('//*[@id="select-document-type"]/option[1]'); }

  get btnUpload() { return $('/html/body/app-root/app-add-document-form/form/div/button[1]'); }

  get successMsg() { return $('//*[@id="messages-container"]/div/h3'); }

  get btnOk() { return $('//*[@id="messages-container"]/button'); }

  get editRec() { return $('//*[@id="documents-list"]/div[2]/app-document/div/div[1]'); }

  get editRecTxtBox() { return $('//*[@id="edit-document-form-name"]'); }

  get btnSave() { return $('//*[@id="edit-document-form"]/div/button[1]'); }

  get deleteRec() { return $('//*[@id="delete-doc-button"]'); }

  get btnYes() { return $('//*[@id="confirmation-modal"]/div/button[2]'); }

  open() {
    super.open();
  }

  getPageTitle() {
    return this.pageTitle.getText();
  }

  clickBtnAddDoc() {
    return this.btnAddDoc.click();
  }

  txtInputBox(txt) {
    return this.inputBox.setValue(txt);
  }

  selectDdType() {
    return this.dropDownType.click();
  }

  clickBtnUpload() {
    return this.btnUpload.click();
  }

  getSuccessMsg() {
    return this.successMsg.getText();
  }

  clickBtnOk() {
    return this.btnOk.click();
  }

  clickPageTitle() {
    return this.pageTitle.click();
  }

  clickEditRec() {
    return this.editRec.click();
  }

  clickEditRecTxt(val) {
    this.editRecTxtBox.clearValue();
    browser.pause(1000);
    return this.editRecTxtBox.setValue(val);
  }

  clickBtnSave() {
    return this.btnSave.click();
  }

  clickDeleteRec() {
    return this.deleteRec.click();
  }

  clickBtnYes() {
    return this.btnYes.click();
  }
}

module.exports = new LandingPage();
