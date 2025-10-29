import {Locator, Page} from "@playwright/test";

export class accountCreatedPage {
    accountCreatedTitle: Locator;
    continueButton: Locator;

    constructor(page: Page) {
        this.accountCreatedTitle = page.getByRole('heading', { name: 'Account Created!' })
        this.continueButton = page.getByRole('link', { name: 'Continue' })
    }

async verifyAccountCreatedPage(): Promise<void> {
    await this.accountCreatedTitle.isVisible();
    }  
async clickContinueButton(): Promise<void> {
    await this.continueButton.click();
    } 
}  