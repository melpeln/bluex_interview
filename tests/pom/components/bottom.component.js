"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Bottom {
    constructor(page) {
        // Locators
        this.nextButton = () => this.page.locator('text= Next');
        this.page = page;
    }
    // Actions
    async click_Next() {
        await this.nextButton().click();
    }
}
exports.default = Bottom;
