import { expect, test, type Locator } from "../.renderer/node_modules/@playwright/test/index.mjs";

const lessons = [
  "concepts/cancer-biology/cell-death-and-survival/autophagy",
  "concepts/immunology/innate-and-unconventional-cells/cgas-sting",
  "concepts/cancer-biology/metabolism-and-stress/cholesterol-and-srebp",
  "concepts/immunology/antibodies-and-b-cells/adcc-adcp-cdc",
  "local-treatment-modalities/01-mechanism",
];

async function assertNativeProportions(images: Locator) {
  expect(await images.count()).toBeGreaterThan(0);
  const measurements = await images.evaluateAll(async elements => Promise.all(elements.map(async element => {
    const image = element as HTMLImageElement;
    image.loading = "eager";
    await image.decode();
    const box = image.getBoundingClientRect();
    return { src: image.currentSrc, width: box.width, height: box.height,
      naturalWidth: image.naturalWidth, naturalHeight: image.naturalHeight };
  })));
  for (const image of measurements) {
    expect(image.width, image.src).toBeGreaterThan(0);
    expect(image.height, image.src).toBeGreaterThan(0);
    expect(Math.abs(image.height - image.width * image.naturalHeight / image.naturalWidth), image.src).toBeLessThan(1);
  }
  return measurements;
}

for (const width of [390, 1280]) {
  test(`current portrait, square and landscape cartoons preserve their proportions at ${width}px`, async ({ page }) => {
    test.setTimeout(180_000);
    await page.setViewportSize({ width, height: 844 });
    await page.emulateMedia({ colorScheme: null });
    await page.addInitScript(() => localStorage.setItem("theme", "light"));
    const evidence = [];
    for (const lesson of lessons) {
      await page.goto(`/education/${lesson}/`);
      const toggle = page.getByRole("button", { name: "Dark theme", exact: true });
      const images = page.locator("article img[data-theater-image]:visible");
      const visibleCount = await images.count();
      for (const theme of ["light", "dark"] as const) {
        if (theme === "dark") await toggle.click();
        await expect(page.locator("html")).toHaveAttribute("style", `color-scheme: ${theme};`);
        await expect(images.first()).toHaveAttribute("src", new RegExp(`-${theme}\\.(png|svg)$`));
        expect(await images.count()).toBe(visibleCount);
        evidence.push({ lesson, theme, width, images: await assertNativeProportions(images) });
        expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
        await images.first().focus();
        await images.first().press("Enter");
        const dialog = page.getByRole("dialog");
        await expect(dialog).toBeVisible();
        await expect(dialog.locator("img")).toHaveCSS("object-fit", "contain");
        await page.keyboard.press("Escape");
        await expect(dialog).not.toBeVisible();
      }
    }
    console.info("Image proportion evidence: " + JSON.stringify(evidence));
  });

  test(`static portrait artwork preserves proportions without JavaScript at ${width}px`, async ({ browser }) => {
    const context = await browser.newContext({ javaScriptEnabled: false, viewport: { width, height: 844 }, colorScheme: "light" });
    try {
      const page = await context.newPage();
      await page.goto(String(test.info().project.use.baseURL) + `/education/${lessons[0]}/`);
      const images = page.locator("article img[data-theater-image]:visible");
      console.info("Static image proportion evidence: " + JSON.stringify({ width, images: await assertNativeProportions(images) }));
    } finally { await context.close(); }
  });
}
