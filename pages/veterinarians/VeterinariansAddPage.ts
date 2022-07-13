import { Page, test } from "@playwright/test";
import BasePage from "../BasePage";

export default class VeterinariansAddPage extends BasePage {
    constructor(page: Page) {
        super(page);
    }

    firstNameInput(){
        let element;
        test.step(`Find locator by id: #firstName`, async () => {
            element = this.page.locator('#firstName');
        });
        return element;
    }

    lastNameInput(){
        let element;
        test.step(`Find locator by id: #lastName`, async () => {
            element = this.page.locator('#lastName');
        });
        return element;
    }

    typeSelect(){
        let element;
        test.step(`Find locator by id: #specialties`, async () => {
            element = this.page.locator('#specialties');
        });
        return element;
    }

    saveButton() {
        let element;
        test.step(`Find locator by cssSelector: .saveVet`, async () => {
            element = this.page.locator('.saveVet');
        });
        return element;
    }
}