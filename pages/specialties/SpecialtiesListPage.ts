import { Page, test } from "@playwright/test";
import BasePage from "../BasePage";

export default class SpecialtiesListPage extends BasePage {
    constructor(page: Page) {
        super(page);
    }

    addButton() {
        let element;
        test.step(`Find locator by cssSelector: .addSpecialty:not([type="submit"]))`, async () => {
            element = this.page.locator('.addSpecialty:not([type="submit"])');
        });
        return element;
    }

    saveButton() {
        let element;
        test.step(`Find locator by cssSelector: .addSpecialty[type="submit"]`, async () => {
            element = this.page.locator('.addSpecialty[type="submit"]');
        });
        return element;
    }

    nameInput(){
        let element;
        test.step(`Find locator by id: #name`, async () => {
            element = this.page.locator('#name');
        });
        return element;
    }

    nameFields() {
        let element;
        test.step(`Find locator by cssSelector: [name="spec_name"]:`, async () => {
            element = this.page.locator('[name="spec_name"]');
        });
        return element;
    }
    
    editButtons() {
        let element;
        test.step(`Find locator by cssSelector: .editSpecialty`, async () => {
            element = this.page.locator('.editSpecialty');
        });
        return element;
    }

    deleteButtons() {
        let element;
        test.step(`Find locator by cssSelector: .deleteSpecialty`, async () => {
            element = this.page.locator('.deleteSpecialty');
        });
        return element;
    }
}