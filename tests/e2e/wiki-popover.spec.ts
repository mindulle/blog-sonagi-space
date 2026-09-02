import { test, expect } from '@chromatic-com/playwright';

test.describe('Wiki Hover Popover (Desktop)', () => {
  test('마우스를 올렸다 뗐다를 반복해도 여러 번 정상적으로 팝오버가 작동한다', async ({
    page,
  }) => {
    await page.goto('/notes/wikilink-test');

    // 참고: 디자인 시스템 리스킨(PR #33) 이후 정상 해석된 위키링크는
    // Tailwind 유틸리티 클래스로 스타일링되며 `wikilink` 클래스를 더 이상
    // 갖지 않는다 (끊어진 링크만 레거시 `wikilink broken` 클래스를 유지).
    // 그래서 클래스 기반 셀렉터 대신 항상 부여되는 data-slug로 특정 링크를 지정한다.
    const link = page.locator('a[data-slug="Architecture"]').first();
    await expect(link).toBeVisible();

    const tooltip = page.locator('[role="tooltip"]').first();

    // -- 첫 번째 호버 --
    await link.hover();
    await expect(tooltip).toBeVisible({ timeout: 2000 });
    // 서버 액션으로 동작하므로 실제 제목인 'Architecture'가 불러와짐
    await expect(tooltip).toContainText('Architecture');

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
  test('모바일 환경에서 링크 터치 시 페이지 이동 대신 팝오버가 열려야 한다', async ({
    page,
    isMobile,
  }) => {
    test.skip(
      true,
      '디자인 시스템 연동 후 모바일 스마트클릭 기능이 미지원 상태입니다.'
    );

    await page.goto('/notes/wikilink-test');

    const link = page.locator('a[data-slug="Architecture"]').first();
    await expect(link).toBeVisible();

    await link.tap();
    const tooltip = page.locator('[role="tooltip"]').first();
    await expect(tooltip).toBeVisible();

    await page.mouse.click(10, 10);
    await expect(tooltip).not.toBeVisible();

    await link.tap();
    await expect(tooltip).toBeVisible();
  });
});
