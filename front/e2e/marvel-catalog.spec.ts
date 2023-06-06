import { expect, test } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("http://localhost:3000/marvel-catalog/1");

  await expect(page).toHaveTitle(/marvel catalog/);
  await expect(
    page.getByRole("heading", { name: "Marvel Super Heroes" })
  ).toBeVisible();
});

test("can navigate", async ({ page }) => {
  await page.goto("http://localhost:3000/marvel-catalog/1");
  await expect(page.getByText(/A/)).toBeVisible();
  await expect(page.getByRole("img")).toHaveAttribute("src", "A.jpg");

  await page.getByTestId("next").first().click();
  await expect(page).toHaveURL("http://localhost:3000/marvel-catalog/2");
  await expect(page.getByText(/B/)).toBeVisible();
  await expect(page.getByRole("img")).toHaveAttribute("src", "B.jpg");

  await page.getByTestId("last").first().click();
  await expect(page).toHaveURL("http://localhost:3000/marvel-catalog/3");
  await expect(page.getByText(/C/)).toBeVisible();
  await expect(page.getByRole("img")).toHaveAttribute("src", "C.jpg");

  await page.getByTestId("previous").first().click();
  await expect(page).toHaveURL("http://localhost:3000/marvel-catalog/2");
  await expect(page.getByText(/B/)).toBeVisible();
  await expect(page.getByRole("img")).toHaveAttribute("src", "B.jpg");

  await page.getByTestId("first").first().click();
  await expect(page).toHaveURL("http://localhost:3000/marvel-catalog/1");
  await expect(page.getByText(/A/)).toBeVisible();
  await expect(page.getByRole("img")).toHaveAttribute("src", "A.jpg");
});
