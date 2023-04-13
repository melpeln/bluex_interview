"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Info {
    constructor(page, link) {
        this.dataTestLocator = (data_test_id) => this.page.locator(`data-test=${data_test_id}`);
        this.textLocator = (content) => this.page.locator(`text=${content}`);
        this.page = page;
        this.link = link;
    }
    async goto() {
        await this.page.goto(this.link);
    }
}
exports.default = Info;
