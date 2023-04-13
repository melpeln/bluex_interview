import { Page } from "@playwright/test"
import Info from "./info.component";

export default class Loading
{
    page : Page
    constructor(page: Page){
        this.page = page
    }

    // Locators
    private loadingMessage = () => this.page.textContent('Loading')

    // Actions
    public async animationDisappears() {
        this.page.waitForSelector('text=state')
    }
}