"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.slowLocator = void 0;
// Return a "slow" page locator that waits before 'click' and 'fill' requests
function slowLocator(page, waitInMs) {
    // Grab original
    const l = page.locator.bind(page);
    // Return a new function that uses the original locator but remaps certain functions
    return (locatorArgs) => {
        const locator = l(locatorArgs);
        locator.click = async (args) => {
            await new Promise((r) => setTimeout(r, waitInMs));
            return l(locatorArgs).click(args);
        };
        locator.fill = async (args) => {
            await new Promise((r) => setTimeout(r, waitInMs));
            return l(locatorArgs).fill(args);
        };
        return locator;
    };
}
exports.slowLocator = slowLocator;
