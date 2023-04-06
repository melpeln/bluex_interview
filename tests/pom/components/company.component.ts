import { Page, expect } from "@playwright/test"
import Info from "./info.component";

export default class CompanyInfo extends Info
{
    constructor(page: Page){
        super(page, 'https://auto-test-prod-bxpay-vendor.bluextrade.com/signup/company_info')
    }

    // Locators
    private businessName_Text = () => this.dataTestLocator('legalBusinessName')
    private dba_Text = () => this.dataTestLocator('doingBusinessAs')
    private companyCategory_Selector = () => this.dataTestLocator('companyCategory')
    private licenseNo_Text = () => this.dataTestLocator('otiLicenseNumber')
    private country_Selector = () => this.dataTestLocator('country')
    private ein_Text = () => this.dataTestLocator('ein')
    private agree_Checkbox = () => this.page.locator('label.checkbox-label')

    // Actions
    public async enter_BusinessName(_name : string) {
        await this.businessName_Text().fill(_name)
        return this.page
    }

    public async enter_DBA(_dba : string) {
        await this.dba_Text().fill(_dba)
    }

    public async select_CompanyCategory(_option : string) {
        await this.companyCategory_Selector().click()
        await this.textLocator(_option).click()
    }

    public async enter_LicenseNumber(_licenseNumber : string) {
        await this.licenseNo_Text().fill(_licenseNumber)
    }

    public async select_Country(_option: string) {
        await this.country_Selector().click()
        await this.textLocator(_option).click()
    }

    public async enter_EIN(_ein: string) {
        await this.ein_Text().fill(_ein)
    }

    public async click_Agree() {
        await this.agree_Checkbox().click()
    }

    public async waitForAllElementsToLoad() {
        await expect(this.businessName_Text()).toBeVisible()
        await expect(this.dba_Text()).toBeVisible()
        await expect(this.companyCategory_Selector()).toBeVisible()
        await expect(this.country_Selector()).toBeVisible()
        await expect(this.agree_Checkbox()).toBeVisible()
    }

}