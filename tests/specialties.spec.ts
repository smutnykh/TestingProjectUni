import { test, Page, expect } from "@playwright/test";
import Pages from "../pages";

test.describe.serial("Check specialty functionality", () => {
  let page: Page;
  let pages: Pages;

  test.beforeAll(async ({ browser }) => {
    const context = await browser.newContext();
    page = await context.newPage();
    pages = new Pages(page);
    await page.goto("https://client.sana-commerce.dev/");
  });

  test.beforeEach(async () => {
    await test.step('Click on the "Specialties" menu item', async () => {
      await await pages.getMenuComponent().specialtiesTab().click();
    });
  });

  test("Create specialty", async () => {
    const testSpecialtyName = "testName";

    await test.step('Click on the "Add" specialty button', async () => {
      await pages.getSpecialtyListPage().addButton().click();
    });

    await test.step("Fill form", async () => {
      await pages.getSpecialtyListPage().nameInput().fill(testSpecialtyName);
    });

    await test.step("Save values", async () => {
      await pages.getSpecialtyListPage().saveButton().click();
    });

    await test.step(
      `Verify that last specialty in the list contains '${testSpecialtyName}'`,
      async () => {
        await page.waitForTimeout(1000);
        const item = await pages.getSpecialtyListPage().nameFields().last();
        expect(await item.inputValue()).toBe(testSpecialtyName);
      }
    );
  });

  test("Edit specialty", async () => {
    const newTestSpecialtyName = "testName2";
    await test.step(
      'Select last item and click "Edit" specialty button"',
      async () => {
        await pages.getSpecialtyListPage().editButtons().last().click();
      }
    );

    await test.step(
      `Change specialty name to '${newTestSpecialtyName}'`,
      async () => {
        await page.waitForTimeout(1000);
        await pages
          .getSpecialtyEditPage()
          .nameInput()
          .fill(newTestSpecialtyName);
      }
    );

    await test.step('Click on "Update" specialty button', async () => {
      await pages.getSpecialtyEditPage().updateButton().click();
      await page.waitForTimeout(1000);
    });

    await test.step("Verify that specialty data was changed", async () => {
      expect(
        await pages.getSpecialtyListPage().nameFields().last().inputValue()
      ).toBe(newTestSpecialtyName);
    });
  });

  test("Delete specialty", async () => {
    let totalCount = 0;

    await test.step(
      "Get the number of specialties in the list before delete",
      async () => {
        await page.waitForTimeout(1000);
        totalCount = await pages.getSpecialtyListPage().nameFields().count();
      }
    );

    await test.step(
      'Select the last item in the list and click "Delete" button',
      async () => {
        await pages.getSpecialtyListPage().deleteButtons().last().click();
      }
    );

    await test.step(
      "Verify that the count of items was changed by 1 after delete",
      async () => {
        await page.waitForTimeout(1000);
        const newTotalCount = await pages
          .getSpecialtyListPage()
          .nameFields()
          .count();
        expect(await newTotalCount).toBe(totalCount - 1);
      }
    );
  });
});
