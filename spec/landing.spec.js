var expect = require('chai').expect;
var LandingPage = require('../page_object/landing.page');

describe('e2e testing', () => {
    beforeEach(() => {
        LandingPage.open();
        browser.pause(3000);
    })

    it('should successfully upload document', () => {
        LandingPage.clickBtnAddDoc();
        LandingPage.txtInputBox('Test01');
        browser.pause(3000);
        LandingPage.selectDdType();
        browser.pause(2000);
        LandingPage.clickBtnUpload();
        browser.pause(2000);
        expect(LandingPage.getSuccessMsg()).to.contain('Document successfully added');
        LandingPage.clickBtnOk();
        LandingPage.clickPageTitle();
    })

    it('should edit exisiting record', () => {
        LandingPage.clickEditRec();
        LandingPage.clickEditRecTxt('wdio_01');
        browser.pause(2000);
        LandingPage.clickBtnSave();
        browser.pause(2000);
        expect(LandingPage.getSuccessMsg()).to.contain('Document Updated Successfully');
        LandingPage.clickBtnOk();
        LandingPage.clickPageTitle();
        browser.pause(2000);
    })

    it('should delete exisiting record', () => {
        LandingPage.clickEditRec();
        LandingPage.clickDeleteRec();
        LandingPage.clickBtnYes();
        browser.pause(2000);
        expect(LandingPage.getSuccessMsg()).to.contain('Document successfully deleted');
        LandingPage.clickBtnOk();
        LandingPage.clickPageTitle();
        browser.pause(2000);
    })
})