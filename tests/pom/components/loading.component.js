"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Loading {
    constructor(page) {
        // Locators
        this.loadingMessage = () => this.page.textContent('Loading');
        this.page = page;
    }
    // Actions
    async animationDisappears() {
        this.page.waitForSelector('text=state');
    }
}
exports.default = Loading;
