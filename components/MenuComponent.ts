import test from '@playwright/test';
import { Page } from '@playwright/test';
import BasePage from '../pages/BasePage';

export class MenuComponent extends BasePage{
    constructor(page: Page) {
        super(page);
      }

    specialtiesTab(){
        let element;
        test.step('Find locator  by cssSelector: a[routerlink="/specialties"]', async () =>{
            element = this.page.locator('a[routerlink="/specialties"]');
        });
        return element;
    }

    veterinariansTab(){
        let element;
        test.step('Find locator  by cssSelector: .vetsTab', async () =>{
            element = this.page.locator('.vetsTab');
        });
        return element;
    }

    veterinariansTabListButton(){
        let element;
        test.step('Find locator  by cssSelector: a[routerlink="/vets"]', async () =>{
            element = this.page.locator('a[routerlink="/vets"]');
        });
        return element;
    }
}