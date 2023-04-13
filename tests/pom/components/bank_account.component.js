"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
const info_component_1 = require("./info.component");
class BankInfo extends info_component_1.default {
    constructor(page) {
        super(page, 'https://auto-test-prod-bxpay-vendor.bluextrade.com/signup/bank_account_info');
        // Locators
        this.bank_Text = () => this.dataTestLocator('bankName');
        this.bankCountry_Selector = () => this.dataTestLocator('bankCountry');
        this.accountName_Text = () => this.dataTestLocator('accountName');
        this.accountNumber_Text = () => this.dataTestLocator('accountNumber');
        this.routingNumber_Text = () => this.dataTestLocator('routingNumber');
        this.invoice_File = () => this.page.locator('#invoiceSamples-1');
        this.email_Text = () => this.dataTestLocator('notifyEmailsInput0');
    }
    // Actions
    async select_CountryCode(_country) {
        await this.bankCountry_Selector().click();
        await this.textLocator(_country).click();
    }
    async enter_BankName(_bank) {
        await this.bank_Text().fill(_bank);
    }
    async select_BankCountry(_country) {
        await this.bankCountry_Selector().click();
        await this.textLocator(_country).click();
    }
    async enter_AccountName(_name) {
        await this.accountName_Text().fill(_name);
    }
    async enter_AccountNumber(_number) {
        await this.accountNumber_Text().fill(_number);
    }
    async enter_routingNumber(_number) {
        await this.routingNumber_Text().fill(_number);
    }
    async upload_InvoiceFile(_file) {
        await this.invoice_File().setInputFiles(_file);
    }
    async enter_Email(_email) {
        await this.email_Text().fill(_email);
    }
    async waitForAllElementsToLoad() {
        await (0, test_1.expect)(this.bank_Text()).toBeVisible();
        await (0, test_1.expect)(this.bankCountry_Selector()).toBeVisible();
        await (0, test_1.expect)(this.accountName_Text()).toBeVisible();
        await (0, test_1.expect)(this.email_Text()).toBeVisible();
    }
}
exports.default = BankInfo;
