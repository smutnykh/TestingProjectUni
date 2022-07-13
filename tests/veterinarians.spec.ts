import { test, Page, expect } from "@playwright/test";
import Pages from "../pages";

test.describe.serial("Check vets functionality", () => {
  let page: Page;
  let pages: Pages;

  test.beforeAll(async ({ browser }) => {
    const context = await browser.newContext();
    page = await context.newPage();
    pages = new Pages(page);
    await page.goto("https://client.sana-commerce.dev/");
  });

  test.beforeEach(async () => {
    await test.step('Click on the "Veterinarians" menu item', async () => {
      await await pages.getMenuComponent().veterinariansTab().click();
    });
    await test.step('Click on the "All" dropdown item', async () => {
      await await pages.getMenuComponent().veterinariansTabListButton().click();
    });
  });

  test("Create vet", async () => {
    const firstNameVet = "Ivan";
    const lastNameVet = "Ivanov";

    await test.step('Click on the "Add" specialty button', async () => {
      await pages.getVeterinariansListPage().addButton().click();
    });

    await test.step("Fill form", async () => {
      await pages.getVeterinariansAddPage().firstNameInput().fill(firstNameVet);
      await pages.getVeterinariansAddPage().lastNameInput().fill(lastNameVet);
      await pages
        .getVeterinariansAddPage()
        .typeSelect()
        .selectOption("0: Object");
    });

    await test.step("Save values", async () => {
      await pages.getVeterinariansAddPage().saveButton().click();
    });

    await test.step(
      `Verify that last vet in the list contains fullName '${firstNameVet} ${lastNameVet}'`,
      async () => {
        await page.waitForTimeout(1000);
        const item = await pages
          .getVeterinariansListPage()
          .fullNameFields()
          .last();
        expect(await item).toHaveText(`${firstNameVet} ${lastNameVet}`);
      }
    );
  });

  test("Delete vet", async () => {
    let totalCount = 0;

    await test.step(
      "Get the number of vets in the list before delete",
      async () => {
        await page.waitForTimeout(1000);
        totalCount = await pages
          .getVeterinariansListPage()
          .fullNameFields()
          .count();
      }
    );

    await test.step(
      'Select the last item in the list and click "Delete" button',
      async () => {
        await pages.getVeterinariansListPage().deleteButtons().last().click();
      }
    );

    await test.step(
      "Verify that the count of items was changed by 1 after delete",
      async () => {
        await page.waitForTimeout(1000);
        const newTotalCount = await pages
          .getVeterinariansListPage()
          .fullNameFields()
          .count();
        expect(await newTotalCount).toBe(totalCount - 1);
      }
    );
  });
});
