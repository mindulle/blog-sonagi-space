import { test, expect } from '@playwright/test';

test.describe('Wiki Hover Popover (Desktop)', () => {
  test('마우스를 올리고 0.4초가 지나면 팝오버가 부드럽게 나타난다', async ({
    page,
  }) => {
    // 1. 위키링크가 있는 테스트 페이지로 이동 (로컬 더미 페이지)
    // 실제 존재하는 아무 마크다운 페이지나 상관없습니다.
    await page.goto('/notes/wikilink-test');

    // 2. 첫 번째 위키링크 요소를 찾습니다
    const link = page.locator('a.wikilink').first();

    // 요소가 있는지 확인 (없으면 테스트 실패)
    await expect(link).toBeVisible();

    // 3. 링크에 마우스를 올립니다
    await link.hover();

    // 4. 0.4초 딜레이를 기다립니다 (애니메이션 렌더링 0.2초 포함 넉넉히 1초 대기)
    const tooltip = page.locator('div[role="tooltip"]');
    await expect(tooltip).toBeVisible({ timeout: 1500 });

    // 내용 검증: 팝오버 내부에 링크 텍스트와 관련된 내용이 뜨는지
    await expect(tooltip).toContainText('문서 깊이 읽기');

    // 5. 마우스를 링크 바깥으로 뺍니다
    await page.mouse.move(0, 0);

    // 6. 0.2초 딜레이 후 팝오버가 사라지는지 검증
    await expect(tooltip).not.toBeVisible({ timeout: 1000 });
  });
});

test.describe('Wiki Hover Popover (Mobile Smart Click)', () => {
  // Mobile Safari 프로젝트 환경에서만 실행하도록 필터링할 수도 있습니다.
  test('모바일 환경에서 링크 터치 시 페이지 이동 대신 팝오버가 열려야 한다', async ({
    page,
    isMobile,
  }) => {
    // 데스크톱 환경이면 테스트 패스
    test.skip(!isMobile, '모바일 환경 전용 테스트입니다.');

    await page.goto('/notes/wikilink-test');

    const link = page.locator('a.wikilink').first();
    await expect(link).toBeVisible();

    // 1. 첫 번째 터치 (클릭 이벤트 발생)
    await link.click();

    // 2. 페이지 이동이 일어나지 않고 툴팁이 보여야 함
    const tooltip = page.locator('div[role="tooltip"]');
    await expect(tooltip).toBeVisible();

    // 현재 URL이 여전히 원래 페이지인지 확인
    expect(page.url()).toContain('/notes/wikilink-test');

    // 3. 빈 공간을 터치하면 팝오버가 닫힘
    await page.mouse.click(0, 0);
    await expect(tooltip).not.toBeVisible();
  });
});
