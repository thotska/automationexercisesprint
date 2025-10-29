import {Locator, Page, expect} from "@playwright/test";

export class enterAccountInformationPage {
    accountInformationTitle: Locator;
    titleMrRadioButton: Locator;
    titleMrsRadioButton: Locator;
    passwordField: Locator;
    daysDropdown: Locator;
    monthsDropdown: Locator;
    yearsDropdown: Locator
    firstNameField: Locator;
    lastNameField: Locator
    addressField: Locator;
    countryDropdown: Locator
    stateField: Locator;
    cityField: Locator
    zipCodeField: Locator;
    mobileNumberField: Locator;
    createAccountButton: Locator;

    constructor(page: Page) {
        this.accountInformationTitle = page.getByRole('heading', { name: 'Enter Account Information' })
        this.titleMrRadioButton = page.getByRole('radio', { name: 'Mr.' })
        this.titleMrsRadioButton = page.getByRole('radio', { name: 'Mrs.' })
        this.passwordField = page.getByRole('textbox', { name: 'Password *' })
        this.daysDropdown = page.locator('select[id="days"]')
        this.monthsDropdown = page.locator('select[id="months"]')
        this.yearsDropdown = page.locator('select[id="years"]')
        this.firstNameField = page.getByRole('textbox', { name: 'First name *' })
        this.lastNameField = page.getByRole('textbox', { name: 'Last name *' })
        this.addressField = page.getByRole('textbox', { name: 'Address * (Street address, P.' })
        this.countryDropdown = page.locator('select[id="country"]')
        this.stateField = page.getByRole('textbox', { name: 'State *' })
        this.cityField = page.getByRole('textbox', { name: 'City * Zipcode *' })
        this.zipCodeField = page.getByRole('textbox', { name: 'Zipcode *' })
        this.mobileNumberField = page.getByRole('textbox', { name: 'Mobile Number *' })
        this.createAccountButton = page.getByRole('button', { name: 'Create Account' })
    }       
    async verifyEnterAccountInformationPage(): Promise<void> {
        await this.accountInformationTitle.isVisible();
        await expect(this.accountInformationTitle).toHaveText('Enter Account Information');
    }

    async fillAccountInformationForm(
        password: string, 
        day: string,
         month: string, 
         year: string,
          firstName: string, 
          lastName: string, 
          address: string, 
          country: string,
           state: string, 
           city: string, 
           zipCode: string, 
           mobileNumber: string): Promise<void> {

        await this.titleMrRadioButton.check();
        await this.passwordField.fill(password);
        await this.daysDropdown.selectOption(day);
        await this.monthsDropdown.selectOption(month);
        await this.yearsDropdown.selectOption(year);
        await this.firstNameField.fill(firstName);
        await this.lastNameField.fill(lastName);
        await this.addressField.fill(address);
        await this.countryDropdown.selectOption(country);
        await this.stateField.fill(state);
        await this.cityField.fill(city);
        await this.zipCodeField.fill(zipCode);
        await this.mobileNumberField.fill(mobileNumber);
    }   
    async clickCreateAccountButton(): Promise<void> {
        await this.createAccountButton.click();
    }   
}