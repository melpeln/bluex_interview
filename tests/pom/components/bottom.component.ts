import { Page } from "@playwright/test"

export default class Bottom
{
    page: Page;

    constructor(page: Page){
        this.page = page
    }

    // Locators
    nextButton = () => this.page.locator('text= Next')

    // Actions
    public async click_Next() {
        await this.nextButton().click()
    }
}