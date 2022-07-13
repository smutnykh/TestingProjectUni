import { Page, test } from "@playwright/test";
import BasePage from "../BasePage";

export default class VeterinariansListPage extends BasePage {
    constructor(page: Page) {
        super(page);
    }

    addButton() {
        let element;
        test.step(`Find locator by cssSelector: .addVet)`, async () => {
            element = this.page.locator('.addVet');
        });
        return element;
    }

    fullNameFields() {
        let element;
        test.step(`Find locator by cssSelector: .vetFullName`, async () => {
            element = this.page.locator('.vetFullName');
        });
        return element;
    }

    deleteButtons() {
        let element;
        test.step(`Find locator by cssSelector: .deleteVet`, async () => {
            element = this.page.locator('.deleteVet');
        });
        return element;
    }
}