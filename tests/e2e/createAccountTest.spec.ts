import {test, expect} from "@playwright/test"
import {Homepage} from "../../pages/homepage";
import {BasePage} from "../../pages/basepage";
import {SignupLoginPage} from "../../pages/signUpLoginPage";
import {AccountCreatedPage} from "../../pages/accountCreated";
import { EnterAccountInformationPage } from "../../pages/enterAccountInformationPage";
import { faker } from "@faker-js/faker";

test.describe("Create Account Test ", () => {
    test("Create Account Test Case", async ({page}) => {
        const homepage = new Homepage(page);
        const basePage = new BasePage(page);
        const signUpLoginPage = new SignupLoginPage(page);
        const accountCreated = new AccountCreatedPage(page);
        const enterAccountInformation = new EnterAccountInformationPage(page);

        const fakerName = faker.person.firstName();
        const fakerLastName = faker.person.lastName();
        const fakerEmail = faker.internet.email();
        const fakerMonth = faker.date.month({ abbreviated: false });
        const fakerDay = faker.number.int({ min: 1, max: 28 }).toString();
        const fakerYear = faker.date.between({ from: new Date('1900-01-01'), to: new Date('2021-12-31') }).getFullYear();
        const fakerCompany = faker.company.name();
        const fakerStreetAddress = faker.location.streetAddress();
        const fakerCity = faker.location.city();
        const fakerState = faker.location.state();
        const fakerZipCode = faker.location.zipCode();
        const fakerCountry = faker.helpers.arrayElement(['India', 'United States', 'Canada', 'Australia', 'Israel', 'New Zealand', 'Singapore']);
        const fakerPhoneNumber = faker.phone.number();
        const fakerAddressAlias = faker.location.secondaryAddress();

        await page.goto(process.env.baseUrl!);
        await homepage.verifyHomePage();
        await basePage.clickOnTopNavigationBarLink('Signup / Login');
        await signUpLoginPage.verifySignupLoginPage();
        await signUpLoginPage.enterNameAndEmailToSignup(fakerName, fakerEmail);
        await enterAccountInformation.fillAccountInformationForm(process.env.userPassword!, fakerDay, fakerMonth, fakerYear.toString(), fakerName, fakerLastName, fakerStreetAddress, fakerCountry, fakerState, fakerCity, fakerZipCode, fakerPhoneNumber);
        await accountCreated.verifyAccountCreatedPage();
        await accountCreated.clickContinueButton();
        await basePage.verifyUserLoggedIn();
    }
    )
});



