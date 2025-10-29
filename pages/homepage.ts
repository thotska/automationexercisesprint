import {Locator, Page, expect} from '@playwright/test';
import {BasePage} from './basepage';

export class Homepage extends BasePage{
    mainTitle: Locator;

    constructor(page: Page) {
        super(page);
        this.mainTitle = page.getByRole('heading', { name: 'AutomationExercise' })
    }

    async verifyHomePage(): Promise<void> {
        await this.mainTitle.isVisible();
        await expect(this.mainTitle).toHaveText('AutomationExercise');
    }   
}