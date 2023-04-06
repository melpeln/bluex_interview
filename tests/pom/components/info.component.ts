import { Locator, Page } from "@playwright/test"

export default class Info
{
    page: Page;
    link: string;

    constructor(page: Page, link: string){
        this.page = page;
        this.link = link;
    }

    public async goto()
    {
        await this.page.goto(this.link)
    }

    dataTestLocator = (data_test_id : string) => this.page.locator(`data-test=${data_test_id}`)

    textLocator = (content:string) => this.page.locator(`text=${content}`)

    // Locators


    // Actions

}