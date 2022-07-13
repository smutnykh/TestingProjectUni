import { Page } from "@playwright/test";
import { MenuComponent } from "../components/MenuComponent";
import { VeterinariansListPage, VeterinariansAddPage } from "./veterinarians";
import { SpecialtiesListPage, SpecialtiesEditPage } from "./specialties";

export default class Pages {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    getMenuComponent() {
        return new MenuComponent(this.page);
    }

    getVeterinariansListPage() {
        return new VeterinariansListPage(this.page);
    }

    getVeterinariansAddPage(){
        return new VeterinariansAddPage(this.page);
    }

    getSpecialtyListPage() {
        return new SpecialtiesListPage(this.page);
    }

    getSpecialtyEditPage(){
        return new SpecialtiesEditPage(this.page);
    }
}