import { expect, test } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("http://localhost:3000/marvel-catalog/1");

  await expect(page).toHaveTitle(/marvel catalog/);
  await expect(
    page.getByRole("heading", { name: "Marvel Super Heroes" })
  ).toBeDefined();
});

test("can navigate", async ({ page }) => {
  await page.goto("http://localhost:3000/marvel-catalog/1");

  await page.getByTestId("next").first().click();
  await expect(page).toHaveURL("http://localhost:3000/marvel-catalog/2");

  await page.getByTestId("last").first().click();
  await expect(page).toHaveURL("http://localhost:3000/marvel-catalog/78");

  await page.getByTestId("previous").first().click();
  await expect(page).toHaveURL("http://localhost:3000/marvel-catalog/77");

  await page.getByTestId("first").first().click();
  await expect(page).toHaveURL("http://localhost:3000/marvel-catalog/1");
});
