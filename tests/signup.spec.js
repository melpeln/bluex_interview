"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
const company_component_1 = require("./pom/components/company.component");
const bottom_component_1 = require("./pom/components/bottom.component");
const business_component_1 = require("./pom/components/business.component");
const bank_account_component_1 = require("./pom/components/bank_account.component");
const loading_component_1 = require("./pom/components/loading.component");
(0, test_1.test)("Complete signup", async ({ page }) => {
    // COMPANY INFO
    // Wait for the page to load
    await page.waitForLoadState('networkidle');
    // page.locator = slowLocator(page, 1500)
    // Go to the Droplets product page of DigitalOcean web page
    await page.goto('https://auto-test-prod-bxpay-vendor.bluextrade.com/signup/company_info');
    const companyInfo = new company_component_1.default(page);
    const businessInfo = new business_component_1.default(page);
    const bankInfo = new bank_account_component_1.default(page);
    const loadingAnimation = new loading_component_1.default(page);
    const bottom = new bottom_component_1.default(page);
    await companyInfo.waitForAllElementsToLoad();
    await companyInfo.enter_BusinessName('Test123456789 Inc.');
    await companyInfo.enter_DBA('Test123456789');
    await companyInfo.select_CompanyCategory('NVOCC');
    await companyInfo.enter_LicenseNumber('1234567890');
    await companyInfo.select_Country('United States of America');
    await companyInfo.enter_EIN('009988776');
    await companyInfo.click_Agree();
    await bottom.click_Next();
    await businessInfo.waitForAllElementsToLoad();
    await businessInfo.select_CountryCode('United States');
    await businessInfo.enter_PhoneNumber('1234567890');
    await businessInfo.enter_Address('test address');
    await businessInfo.enter_City('Los Angeles');
    await businessInfo.select_State('California');
    await businessInfo.enter_ZipCode('12345');
    await bottom.click_Next();
    await bankInfo.waitForAllElementsToLoad();
    await bankInfo.enter_BankName('Citi Bank');
    await bankInfo.select_BankCountry('United States of America');
    await bankInfo.enter_AccountName('Test123456789 Inc.');
    await bankInfo.enter_AccountNumber('1234567890');
    await bankInfo.enter_routingNumber('987654321');
    await bankInfo.upload_InvoiceFile('tests/bin/sample.pdf');
    await bankInfo.enter_Email('vendortest@example.com');
    await bottom.click_Next();
});
