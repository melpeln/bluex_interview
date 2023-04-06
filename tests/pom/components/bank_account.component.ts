import { Locator, Page, expect } from "@playwright/test"
import Info from "./info.component";

export default class BankInfo extends Info
{
    constructor(page: Page){
        super(page, 'https://auto-test-prod-bxpay-vendor.bluextrade.com/signup/bank_account_info')
    }

    // Locators
    private bank_Text = () => this.dataTestLocator('bankName')
    private bankCountry_Selector = () => this.dataTestLocator('bankCountry')
    private accountName_Text = () => this.dataTestLocator('accountName')
    private accountNumber_Text = () => this.dataTestLocator('accountNumber')
    private routingNumber_Text = () => this.dataTestLocator('routingNumber')
    private invoice_File = () => this.page.locator('#invoiceSamples-1')
    private email_Text = () => this.dataTestLocator('notifyEmailsInput0')

    // Actions
    public async select_CountryCode(_country: string) {
        await this.bankCountry_Selector().click()
        await this.textLocator(_country).click()
    }

    public async enter_BankName(_bank:string) {
        await this.bank_Text().fill(_bank)
    }

    public async select_BankCountry(_country:string) {
        await this.bankCountry_Selector().click()
        await this.textLocator(_country).click()
    }

    public async enter_AccountName(_name:string) {
        await this.accountName_Text().fill(_name)
    }

    public async enter_AccountNumber(_number:string) {
        await this.accountNumber_Text().fill(_number)
    }

    public async enter_routingNumber(_number:string) {
        await this.routingNumber_Text().fill(_number)
    }

    public async upload_InvoiceFile(_file:string) {
        await this.invoice_File().setInputFiles(_file)
    }

    public async enter_Email(_email:string) {
        await this.email_Text().fill(_email)
    }

    public async waitForAllElementsToLoad() {
        await expect(this.bank_Text()).toBeVisible()
        await expect(this.bankCountry_Selector()).toBeVisible()
        await expect(this.accountName_Text()).toBeVisible()
        await expect(this.email_Text()).toBeVisible()
    
    }
}