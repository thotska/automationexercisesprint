import {Locator, Page, expect} from '@playwright/test';

export class BasePage {
    
    homeLink: Locator;
    productsLink: Locator;
    cartLink: Locator;
    signupLoginLink: Locator;
    contactUsLink: Locator;
    topNavigationBar: Locator;
    loggedAsUserLabel: Locator;

    constructor(page: Page) {
    
        this.homeLink = page.getByRole('listitem').filter({ hasText: 'Home' })
        this.productsLink = page.getByRole('listitem').filter({ hasText: ' Products' })
        this.cartLink = page.getByRole('link', { name: ' Cart' })
        this.signupLoginLink = page.getByRole('link', { name: ' Signup / Login' })
        this.contactUsLink = page.getByRole('link', { name: ' Contact us' })
        this.topNavigationBar = page.locator('ul[class="nav navbar-nav"] li')
        this.loggedAsUserLabel = page.getByRole('listitem').filter({ hasText: 'Logged in as' })
    }

    async clickOnTopNavigationBarLink(linkText: string) {
        const link = this.topNavigationBar.filter({ hasText: linkText });
        await expect(link).toBeVisible();
        await link.click();
    }
    async verifyUserLoggedIn(): Promise<void> {
        await this.loggedAsUserLabel.isVisible();
    }
}
