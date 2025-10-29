import {test, expect} from "@playwright/test"
import {Homepage} from "../../pages/homepage";
import {BasePage} from "../../pages/basepage";
import {signupLoginPage} from "../../pages/signUpLoginPage";
import {accountCreatedPage} from "../../pages/accountCreated";
import { enterAccountInformationPage } from "../../pages/enterAccountInformationPage";
import { faker } from "@faker-js/faker";

test.describe("Create Account Test ", () => {
    test("Create Account Test Case", async ({page}) => {
        const homepage = new Homepage(page);
        const basePage = new BasePage(page);
        const signUpLoginPage = new signupLoginPage(page);
        const accountCreated = new accountCreatedPage(page);
        const enterAccountInformation = new enterAccountInformationPage(page);

        const fakerName = faker.person.firstName();
        const fakerLastName = faker.person.lastName();
        const fakerMonth = faker.date.month();
        const fakerDay = faker.date.recent().getDate().toString();
        const fakerYear = faker.date.past().getFullYear();
        const fakerCompany = faker.company.name();
        const fakerStreetAddress = faker.location.streetAddress();
        const fakerCity = faker.location.city();
        const fakerState = faker.location.state();
        const fakerZipCode = faker.location.zipCode();
        const fakerCountry = faker.location.country();
        const fakerPhoneNumber = faker.phone.number();
        const fakerAddressAlias = faker.location.secondaryAddress();

        await page.goto(process.env.baseUrl!);
        await homepage.verifyHomePage();
        await basePage.clickOnTopNavigationBarLink('Signup / Login');
        await signUpLoginPage.verifySignupLoginPage();
        await signUpLoginPage.enterNameAndEmailToSignup(process.env.userName!, process.env.userEmail!);
        await enterAccountInformation.fillAccountInformationForm(process.env.userPassword!, fakerDay, fakerMonth, fakerYear.toString(), fakerName, fakerLastName, fakerStreetAddress, fakerCountry, fakerState, fakerCity, fakerZipCode, fakerPhoneNumber);
        await enterAccountInformation.clickCreateAccountButton();
        await accountCreated.verifyAccountCreatedPage();
        await accountCreated.clickContinueButton();
        await basePage.verifyUserLoggedIn(process.env.userName!);
    }
    )
});



