"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
const info_component_1 = require("./info.component");
class BusinessInfo extends info_component_1.default {
    constructor(page) {
        super(page, 'https://auto-test-prod-bxpay-vendor.bluextrade.com/signup/business_info');
        // Locators
        this.countryCode_Selector = () => this.dataTestLocator('phone_countryCode');
        this.phone_Number = () => this.dataTestLocator('phone_number');
        this.address_Text = () => this.dataTestLocator('address');
        this.city_Text = () => this.dataTestLocator('city');
        this.state_Selector = () => this.dataTestLocator('state');
        this.zipCode_Text = () => this.dataTestLocator('zipCode');
    }
    // Actions
    async select_CountryCode(_country) {
        await this.countryCode_Selector().click();
        await this.textLocator(_country).click();
    }
    async enter_PhoneNumber(_phone) {
        await this.phone_Number().type(_phone);
    }
    async enter_Address(_address) {
        await this.address_Text().fill(_address);
    }
    async enter_City(_city) {
        await this.city_Text().fill(_city);
    }
    async select_State(_state) {
        await this.state_Selector().click();
        await this.textLocator(_state).click();
    }
    async enter_ZipCode(_zipcode) {
        await this.zipCode_Text().fill(_zipcode);
    }
    async waitForAllElementsToLoad() {
        await (0, test_1.expect)(this.countryCode_Selector()).toBeVisible();
        await (0, test_1.expect)(this.phone_Number()).toBeVisible();
        await (0, test_1.expect)(this.address_Text()).toBeVisible();
        await (0, test_1.expect)(this.city_Text()).toBeVisible();
        await (0, test_1.expect)(this.state_Selector()).toBeVisible({ timeout: 10000 });
        await (0, test_1.expect)(this.zipCode_Text()).toBeVisible();
    }
}
exports.default = BusinessInfo;
