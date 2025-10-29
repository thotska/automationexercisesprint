import {Locator, Page, expect} from '@playwright/test';

export class SignupLoginPage {
    newUserSignup: Locator;
    nameField: Locator;
    emailField: Locator;
    signupButton: Locator;


    constructor(page: Page) {
        this.newUserSignup = page.getByRole('heading', { name: 'New User Signup!' })
        this.nameField = page.getByRole('textbox', { name: 'Name' })
        this.emailField = page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address')
        this.signupButton = page.getByRole('button', { name: 'Signup' })
    }

    async verifySignupLoginPage(): Promise<void> {
        await this.newUserSignup.isVisible();
        await expect(this.newUserSignup).toHaveText('New User Signup!');
    }

    async enterNameAndEmailToSignup(name: string, email: string): Promise<void> {
        await this.nameField.fill(name);
        await this.emailField.fill(email);
        await this.signupButton.click();
    }
}
