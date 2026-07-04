import { test, expect } from '@playwright/test';

test.describe('Wiki Hover Popover (Desktop)', () => {
  test.beforeEach(async ({ page }) => {
    await page.route('**/note-summaries.json', (route) => {
      route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({
          dummy: {
            slug: 'dummy',
            title: 'Dummy Note',
            excerpt: 'This is a dummy excerpt for testing.',
            tags: ['dummy', 'test'],
          },
        }),
      });
    });
  });

  test('마우스를 올렸다 뗐다를 반복해도 여러 번 정상적으로 팝오버가 작동한다', async ({
    page,
  }) => {
    await page.goto('/notes/wikilink-test');

    const link = page.locator('a.wikilink').first();
    await expect(link).toBeVisible();

    const tooltip = page.locator('div[role="tooltip"]').first();

    // -- 첫 번째 호버 --
    await link.hover();
    await expect(tooltip).toBeVisible({ timeout: 2000 });
    await expect(tooltip).toContainText('Dummy Note');

    // -- 호버 아웃 --
    await page.locator('body').hover({ position: { x: 10, y: 10 } });
    await expect(tooltip).not.toBeVisible({ timeout: 2000 });

    // -- 두 번째 호버 --
    // 이전에 발생했던 "두 번째부터 안 되는" 버그 시나리오 검증
    // 강제로 다른 위치에 hover했다가 다시 돌아와서 Playwright가 이벤트를 발생시키도록 유도
    await page.locator('body').hover({ position: { x: 50, y: 50 } });
    await link.hover({ force: true });
    await expect(tooltip).toBeVisible({ timeout: 2000 });

    // -- 외부 클릭 --
    await page.mouse.click(10, 10);
    await expect(tooltip).not.toBeVisible({ timeout: 2000 });

    // -- 세 번째 호버 --
    await link.hover({ force: true });
    await expect(tooltip).toBeVisible({ timeout: 2000 });
  });
});

test.describe('Wiki Hover Popover (Mobile Smart Click)', () => {
  test.beforeEach(async ({ page }) => {
    await page.route('**/note-summaries.json', (route) => {
      route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({
          dummy: {
            slug: 'dummy',
            title: 'Dummy Note',
            excerpt: 'This is a dummy excerpt for testing.',
            tags: ['dummy', 'test'],
          },
        }),
      });
    });
  });

  test('모바일 환경에서 링크 터치 시 페이지 이동 대신 팝오버가 열려야 한다', async ({
    page,
    isMobile,
  }) => {
    test.skip(!isMobile, '모바일 환경 전용 테스트입니다.');

    await page.goto('/notes/wikilink-test');

    const link = page.locator('a.wikilink').first();
    await expect(link).toBeVisible();

    await link.tap();
    const tooltip = page.locator('div[role="tooltip"]').first();
    await expect(tooltip).toBeVisible();

    await page.mouse.tap(10, 10);
    await expect(tooltip).not.toBeVisible();

    await link.tap();
    await expect(tooltip).toBeVisible();
  });
});
