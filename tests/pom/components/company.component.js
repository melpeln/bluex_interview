"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
const info_component_1 = require("./info.component");
class CompanyInfo extends info_component_1.default {
    constructor(page) {
        super(page, 'https://auto-test-prod-bxpay-vendor.bluextrade.com/signup/company_info');
        // Locators
        this.businessName_Text = () => this.dataTestLocator('legalBusinessName');
        this.dba_Text = () => this.dataTestLocator('doingBusinessAs');
        this.companyCategory_Selector = () => this.dataTestLocator('companyCategory');
        this.licenseNo_Text = () => this.dataTestLocator('otiLicenseNumber');
        this.country_Selector = () => this.dataTestLocator('country');
        this.ein_Text = () => this.dataTestLocator('ein');
        this.agree_Checkbox = () => this.page.locator('label.checkbox-label');
    }
    // Actions
    async enter_BusinessName(_name) {
        await this.businessName_Text().fill(_name);
        return this.page;
    }
    async enter_DBA(_dba) {
        await this.dba_Text().fill(_dba);
    }
    async select_CompanyCategory(_option) {
        await this.companyCategory_Selector().click();
        await this.textLocator(_option).click();
    }
    async enter_LicenseNumber(_licenseNumber) {
        await this.licenseNo_Text().fill(_licenseNumber);
    }
    async select_Country(_option) {
        await this.country_Selector().click();
        await this.textLocator(_option).click();
    }
    async enter_EIN(_ein) {
        await this.ein_Text().fill(_ein);
    }
    async click_Agree() {
        await this.agree_Checkbox().click();
    }
    async waitForAllElementsToLoad() {
        await (0, test_1.expect)(this.businessName_Text()).toBeVisible();
        await (0, test_1.expect)(this.dba_Text()).toBeVisible();
        await (0, test_1.expect)(this.companyCategory_Selector()).toBeVisible();
        await (0, test_1.expect)(this.country_Selector()).toBeVisible();
        await (0, test_1.expect)(this.agree_Checkbox()).toBeVisible();
    }
}
exports.default = CompanyInfo;
