import { test, expect } from "@playwright/test";

const TARGET_VIEWPORTS = [
  { name: "mobile-359x807", width: 359, height: 807, isMobile: true },
  { name: "mobile-360x800", width: 360, height: 800, isMobile: true },
  { name: "mobile-375x667", width: 375, height: 667, isMobile: true },
  { name: "mobile-390x844", width: 390, height: 844, isMobile: true },
  { name: "mobile-412x915", width: 412, height: 915, isMobile: true },
  { name: "mobile-430x932", width: 430, height: 932, isMobile: true },
  { name: "tablet-768x1024", width: 768, height: 1024, isMobile: false },
  { name: "laptop-1366x768", width: 1366, height: 768, isMobile: false },
  { name: "desktop-1440x900", width: 1440, height: 900, isMobile: false },
  { name: "desktop-1536x864", width: 1536, height: 864, isMobile: false },
  { name: "desktop-1920x1080", width: 1920, height: 1080, isMobile: false },
  { name: "desktop-2560x1440", width: 2560, height: 1440, isMobile: false },
];

test.describe("Hero Surface Geometry, Registration & Responsive Fit", () => {
  for (const vp of TARGET_VIEWPORTS) {
    test(`hero fits ${vp.name} (${vp.width}x${vp.height}) with zero overflow`, async ({ page }) => {
      await page.setViewportSize({ width: vp.width, height: vp.height });
      await page.goto("/");
      await page.evaluate(async () => {
        await document.fonts.ready;
        await Promise.all(
          [...document.images].map((img) =>
            img.complete ? Promise.resolve() : img.decode().catch(() => {})
          )
        );
      });

      const hero = page.locator("#hero");
      await expect(hero).toBeVisible();

      // 1. Assert zero horizontal overflow
      const dimensions = await page.evaluate(() => ({
        viewportWidth: window.innerWidth,
        scrollWidth: document.documentElement.scrollWidth,
        bodyScrollWidth: document.body.scrollWidth,
      }));
      expect(dimensions.scrollWidth).toBe(dimensions.viewportWidth);
      expect(dimensions.bodyScrollWidth).toBe(dimensions.viewportWidth);

      // 2. Assert critical heading is visible
      const heading = page.locator("#hero-heading");
      await expect(heading).toBeVisible();
    });
  }
});

test.describe("Mobile Navigation Drawer Interaction", () => {
  test("hamburger menu opens drawer, locks scroll, and closes on Escape", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/");
    await page.evaluate(() => document.fonts.ready);

    const hamburger = page.locator("button[aria-controls='mobile-primary-navigation']");
    await expect(hamburger).toBeVisible();
    await expect(hamburger).toHaveAttribute("aria-expanded", "false");

    // Click hamburger to open
    await hamburger.click();
    await expect(hamburger).toHaveAttribute("aria-expanded", "true");

    const drawer = page.locator("#mobile-primary-navigation");
    await expect(drawer).toBeVisible();

    // Assert body scroll is locked
    const isScrollLocked = await page.evaluate(() => document.body.style.overflow === "hidden");
    expect(isScrollLocked).toBe(true);

    // Press Escape to close
    await page.keyboard.press("Escape");
    await expect(hamburger).toHaveAttribute("aria-expanded", "false");

    // Assert body scroll is restored
    const isScrollRestored = await page.evaluate(() => document.body.style.overflow !== "hidden");
    expect(isScrollRestored).toBe(true);
  });
});
