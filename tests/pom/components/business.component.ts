import { Page, expect } from "@playwright/test"
import Info from "./info.component";

export default class BusinessInfo extends Info
{
    constructor(page: Page){
        super(page, 'https://auto-test-prod-bxpay-vendor.bluextrade.com/signup/business_info')
    }

    // Locators
    private countryCode_Selector = () => this.dataTestLocator('phone_countryCode')
    private phone_Number = () => this.dataTestLocator('phone_number')
    private address_Text = () => this.dataTestLocator('address')
    private city_Text = () => this.dataTestLocator('city')
    private state_Selector = () => this.dataTestLocator('state')
    private zipCode_Text = () => this.dataTestLocator('zipCode')

    // Actions
    public async select_CountryCode(_country: string) {
        await this.countryCode_Selector().click()
        await this.textLocator(_country).click()
    }

    public async enter_PhoneNumber(_phone: string) {
        await this.phone_Number().type(_phone)
    }

    public async enter_Address(_address: string) {
        await this.address_Text().fill(_address)
    }

    public async enter_City(_city: string) {
        await this.city_Text().fill(_city)
    }

    public async select_State(_state: string) {
        await this.state_Selector().click()
        await this.textLocator(_state).click()
    }

    public async enter_ZipCode(_zipcode: string) {
        await this.zipCode_Text().fill(_zipcode)
    }

    public async waitForAllElementsToLoad(){
        await expect(this.countryCode_Selector()).toBeVisible()
        await expect(this.phone_Number()).toBeVisible()
        await expect(this.address_Text()).toBeVisible()
        await expect(this.city_Text()).toBeVisible()
        await expect(this.state_Selector()).toBeVisible({timeout:10000})
        await expect(this.zipCode_Text()).toBeVisible()
    }

}