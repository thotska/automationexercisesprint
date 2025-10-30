import {Locator, Page, expect} from '@playwright/test';
import { BasePage } from './basepage';

export class SignupLoginPage extends BasePage {
    newUserSignup: Locator;
    nameField: Locator;
    emailField: Locator;
    signupButton: Locator;
    emailToLoginField: Locator;
    passwordToLoginField: Locator
    logInButton: Locator;
    emailOrPasswordIncorrectMessage: Locator;


    constructor(page: Page) {
        super(page);
        this.newUserSignup = page.getByRole('heading', { name: 'New User Signup!' })
        this.nameField = page.getByRole('textbox', { name: 'Name' })
        this.emailField = page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address')
        this.signupButton = page.getByRole('button', { name: 'Signup' })
        this.emailToLoginField = page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address')
        this.passwordToLoginField = page.getByRole('textbox', { name: 'Password' })
        this.logInButton = page.getByRole('button', { name: 'Login' })
        this.emailOrPasswordIncorrectMessage = page.getByText('Your email or password is incorrect!')
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
    async enterEmailAndPasswordToLogin(email: string, password: string): Promise<void> {
        await this.emailToLoginField.fill(email);
        await this.passwordToLoginField.fill(password);
        await this.logInButton.click();
    }
    async verifyIncorrectEmailOrPasswordMessage(): Promise<void> {
        await this.emailOrPasswordIncorrectMessage.isVisible();
    }
}
