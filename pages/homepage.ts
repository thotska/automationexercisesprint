import {Locator, Page, expect} from '@playwright/test';

export class Homepage {
    mainTitle: Locator;

    constructor(page: Page) {
        this.mainTitle = page.locator('div').nth(3)
    }

    async verifyHomePage(): Promise<void> {
        await this.mainTitle.isVisible();
        await expect(this.mainTitle).toHaveText('Automation Exercise');
    }   
}