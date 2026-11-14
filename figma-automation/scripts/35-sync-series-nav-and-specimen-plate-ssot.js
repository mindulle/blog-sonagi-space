/**
 * Figma Automation Script: 35-sync-series-nav-and-specimen-plate-ssot.js
 * Task: [BLOG-13] 시리즈 네비게이션(SeriesNav) 하단 단일화, 빈 박스 결함 수정 & SpecimenLabel Plate 정본 동기화
 * Target File: blog-sonagi-space (Key: lQnGrSsBkyCCckHBjftEMH)
 *
 * Requirements & Core Deliverables:
 * 1. SeriesNav Component Set (Desktop 680px & Mobile 358px):
 *    - 3 States (First Post 1/6, Middle Post 3/6, Last Post 6/6)
 *    - Balanced 50:50 button layout:
 *      * First: [시리즈 목록 (Secondary)] + [다음 글 → (Primary)]
 *      * Middle: [← 이전 글 (Secondary)] + [다음 글 → (Primary)]
 *      * Last: [← 이전 글 (Secondary)] + [전체 시리즈 목록 → (Primary)]
 *    - Dual Mode: Light Mode (Warm Paper / Bronze Gold #b86a04) & Dark Mode (Deep Obsidian / Amber Gold #ffc837)
 *    - Eradicates empty <div class="flex-1"></div> glitch.
 * 2. SpecimenLabel (Plate Variant) Component:
 *    - The True 4px Left Stem (border-left: 4px solid var(--mds-color-brand-primary))
 *    - Top Washi tape strip accent (96x10)
 *    - Clear taxonomy, accession number (SNG-xxxx), and collection metadata
 * 3. Desktop Sidebar Clean Layout (No duplicate Series TOC):
 *    - Unified sidebar hierarchy: [Table of Contents -> LocalGraph -> Backlinks -> Tags]
 * 4. Section Placement:
 *    - Page '🌿 Digital Garden & The Gardener'
 *    - Section: '🧭 BLOG-13 SeriesNav & Specimen Plate SSOT (Desktop & Mobile)'
 */

return new Promise(async (resolve) => {
  try {
    console.log(
      '🧭 [BLOG-13 SSOT] Syncing SeriesNav and Specimen Plate to Figma...'
    );

    // 1. Parallel Font Loading
    const fonts = [
      { family: 'Inter', style: 'Regular' },
      { family: 'Inter', style: 'Medium' },
      { family: 'Inter', style: 'Bold' },
      { family: 'Pretendard', style: 'Regular' },
      { family: 'Pretendard', style: 'Medium' },
      { family: 'Pretendard', style: 'SemiBold' },
      { family: 'Pretendard', style: 'Bold' },
      { family: 'JetBrains Mono', style: 'Regular' },
      { family: 'JetBrains Mono', style: 'Bold' },
      { family: 'Noto Serif KR', style: 'Bold' },
      { family: 'Cormorant Garamond', style: 'Bold' },
    ];
    await Promise.allSettled(fonts.map((f) => figma.loadFontAsync(f)));

    const F = {
      display: { family: 'Noto Serif KR', style: 'Bold' },
      serif: { family: 'Cormorant Garamond', style: 'Bold' },
      uiBold: { family: 'Pretendard', style: 'Bold' },
      uiSemi: { family: 'Pretendard', style: 'SemiBold' },
      uiMed: { family: 'Pretendard', style: 'Medium' },
      uiReg: { family: 'Pretendard', style: 'Regular' },
      mono: { family: 'JetBrains Mono', style: 'Regular' },
      monoBold: { family: 'JetBrains Mono', style: 'Bold' },
    };

    // 2. Variable Tokens Setup & Resolution
    const colls = await figma.variables.getLocalVariableCollectionsAsync();
    let localColl =
      colls.find((c) => c.name === 'MDS v0.1.0 Colors') ||
      colls.find((c) => c.name === 'Colors');
    if (!localColl) {
      localColl = figma.variables.createVariableCollection('MDS v0.1.0 Colors');
      localColl.renameMode(localColl.modes[0].modeId, 'Light');
      localColl.addMode('Dark');
    }

    const lightModeId =
      localColl.modes.find((m) => m.name === 'Light')?.modeId ||
      localColl.modes[0].modeId;
    const darkModeId =
      localColl.modes.find((m) => m.name === 'Dark')?.modeId ||
      localColl.modes[1]?.modeId ||
      lightModeId;

    const vars = await figma.variables.getLocalVariablesAsync();
    const getVar = (name, fallbackLight, fallbackDark) => {
      let v = vars.find((x) => x.name === name);
      if (!v) {
        v = figma.variables.createVariable(name, localColl, 'COLOR');
        v.setValueForMode(lightModeId, fallbackLight);
        v.setValueForMode(darkModeId, fallbackDark);
      }
      return v;
    };

    const vBrandPrimary = getVar(
      'color/brand-primary',
      { r: 184 / 255, g: 106 / 255, b: 4 / 255 }, // #b86a04 Bronze Gold
      { r: 255 / 255, g: 200 / 255, b: 55 / 255 } // #ffc837 Amber Gold
    );
    const vBgBase = getVar(
      'color/background-base',
      { r: 251 / 255, g: 251 / 255, b: 250 / 255 }, // #fbfbfa Warm Paper
      { r: 18 / 255, g: 21 / 255, b: 29 / 255 } // #12151d Deep Obsidian
    );
    const vBgSurface = getVar(
      'color/background-surface',
      { r: 1, g: 1, b: 1 },
      { r: 27 / 255, g: 32 / 255, b: 44 / 255 } // #1b202c
    );
    const vBgElevated = getVar(
      'color/background-elevated',
      { r: 1, g: 1, b: 1 },
      { r: 36 / 255, g: 43 / 255, b: 59 / 255 } // #242b3b
    );
    const vBgOverlay = getVar(
      'color/background-overlay',
      { r: 244 / 255, g: 244 / 255, b: 245 / 255 }, // #f4f4f5
      { r: 31 / 255, g: 38 / 255, b: 53 / 255 } // #1f2635
    );
    const vTextPrimary = getVar(
      'color/text-primary',
      { r: 24 / 255, g: 24 / 255, b: 27 / 255 },
      { r: 241 / 255, g: 245 / 255, b: 249 / 255 }
    );
    const vTextSecondary = getVar(
      'color/text-secondary',
      { r: 82 / 255, g: 82 / 255, b: 91 / 255 },
      { r: 148 / 255, g: 163 / 255, b: 184 / 255 }
    );
    const vTextMuted = getVar(
      'color/text-muted',
      { r: 113 / 255, g: 113 / 255, b: 122 / 255 },
      { r: 100 / 255, g: 116 / 255, b: 139 / 255 }
    );
    const vBorderDefault = getVar(
      'color/border-default',
      { r: 228 / 255, g: 228 / 255, b: 231 / 255 },
      { r: 44 / 255, g: 53 / 255, b: 71 / 255 }
    );
    const vBorderSubtle = getVar(
      'color/border-subtle',
      { r: 244 / 255, g: 244 / 255, b: 245 / 255 },
      { r: 31 / 255, g: 38 / 255, b: 53 / 255 }
    );

    const bindFill = (node, v, fallback) => {
      const paint = { type: 'SOLID', color: fallback };
      node.fills = [
        figma.variables.setBoundVariableForPaint(paint, 'color', v),
      ];
    };
    const bindStroke = (node, v, fallback, weight = 1) => {
      const paint = { type: 'SOLID', color: fallback };
      node.strokes = [
        figma.variables.setBoundVariableForPaint(paint, 'color', v),
      ];
      node.strokeWeight = weight;
    };

    // 3. Find or Create Target Page
    await figma.loadAllPagesAsync();
    let targetPage =
      figma.root.children.find((p) => p.name.includes('Digital Garden')) ||
      figma.currentPage;
    figma.currentPage = targetPage;

    // 4. Create Section for BLOG-13 SSOT
    let sec = targetPage.findOne(
      (n) => n.type === 'SECTION' && n.name.includes('BLOG-13')
    );
    if (sec) sec.remove();

    sec = figma.createSection();
    sec.name = '🧭 BLOG-13 SeriesNav & Specimen Plate SSOT (Desktop & Mobile)';
    sec.x = 2600;
    sec.y = 0;

    // Helper: Create SeriesNav Frame
    const createSeriesNavInstance = (mode, width, postIndex, totalPosts) => {
      const modeId = mode === 'Dark' ? darkModeId : lightModeId;
      const isFirst = postIndex === 1;
      const isLast = postIndex === totalPosts;

      const frame = figma.createFrame();
      frame.name = `SeriesNav • ${mode} • ${width}px • (${postIndex}/${totalPosts})`;
      frame.setExplicitVariableModeForCollection(localColl, modeId);
      frame.layoutMode = 'VERTICAL';
      frame.primaryAxisSizingMode = 'AUTO';
      frame.counterAxisSizingMode = 'FIXED';
      frame.resize(width, 100);
      frame.itemSpacing = 0;
      frame.cornerRadius = 16;
      bindFill(frame, vBgElevated, { r: 1, g: 1, b: 1 });
      bindStroke(frame, vBorderDefault, { r: 0.9, g: 0.9, b: 0.9 }, 1);

      // Header
      const header = figma.createFrame();
      header.layoutMode = 'VERTICAL';
      header.primaryAxisSizingMode = 'AUTO';
      header.counterAxisSizingMode = 'FIXED';
      header.layoutAlign = 'STRETCH';
      header.paddingLeft = 24;
      header.paddingRight = 24;
      header.paddingTop = 20;
      header.paddingBottom = 16;
      header.itemSpacing = 6;
      header.fills = [];
      bindStroke(header, vBorderSubtle, { r: 0.95, g: 0.95, b: 0.95 }, 1);

      const seriesTag = figma.createText();
      seriesTag.fontName = F.monoBold;
      seriesTag.characters = 'SERIES';
      seriesTag.fontSize = 11;
      bindFill(seriesTag, vBrandPrimary, { r: 0.7, g: 0.4, b: 0 });
      header.appendChild(seriesTag);

      const titleRow = figma.createFrame();
      titleRow.layoutMode = 'HORIZONTAL';
      titleRow.primaryAxisSizingMode = 'AUTO';
      titleRow.counterAxisSizingMode = 'AUTO';
      titleRow.itemSpacing = 8;
      titleRow.fills = [];

      const seriesTitle = figma.createText();
      seriesTitle.fontName = F.uiBold;
      seriesTitle.characters = '픽셀 퍼펙트 UI 엔지니어링 가이드';
      seriesTitle.fontSize = 17;
      bindFill(seriesTitle, vTextPrimary, { r: 0.1, g: 0.1, b: 0.1 });
      titleRow.appendChild(seriesTitle);

      const seriesOrder = figma.createText();
      seriesOrder.fontName = F.uiReg;
      seriesOrder.characters = `(${postIndex}/${totalPosts})`;
      seriesOrder.fontSize = 14;
      bindFill(seriesOrder, vTextSecondary, { r: 0.4, g: 0.4, b: 0.4 });
      titleRow.appendChild(seriesOrder);
      header.appendChild(titleRow);
      frame.appendChild(header);

      // Entries list sample
      const listFrame = figma.createFrame();
      listFrame.layoutMode = 'VERTICAL';
      listFrame.primaryAxisSizingMode = 'AUTO';
      listFrame.counterAxisSizingMode = 'FIXED';
      listFrame.layoutAlign = 'STRETCH';
      listFrame.paddingLeft = 16;
      listFrame.paddingRight = 16;
      listFrame.paddingTop = 12;
      listFrame.paddingBottom = 12;
      listFrame.itemSpacing = 6;
      listFrame.fills = [];

      const sampleTitles = [
        '1. 픽셀 퍼펙트의 새로운 정의: 장인의 눈대중에서 수학적 시스템으로',
        '2. UI Typography Criteria: 서체 렌더링 수치 공식',
        '3. Figma 오토레이아웃과 CSS Flexbox의 완벽한 1:1 매칭 가이드',
        '4. 디자인 토큰: Figma Variables와 CSS의 완벽한 동기화',
        '5. 모던 디자인 핸드오프: 스펙 시트가 필요 없는 파이프라인',
      ];

      sampleTitles.slice(0, 3).forEach((titleText, idx) => {
        const item = figma.createFrame();
        item.layoutMode = 'HORIZONTAL';
        item.primaryAxisSizingMode = 'AUTO';
        item.counterAxisSizingMode = 'AUTO';
        item.layoutAlign = 'STRETCH';
        item.paddingLeft = 12;
        item.paddingRight = 12;
        item.paddingTop = 8;
        item.paddingBottom = 8;
        item.cornerRadius = 8;
        const isCurrent = idx + 1 === postIndex;

        if (isCurrent) {
          bindFill(item, vBgSurface, { r: 0.98, g: 0.98, b: 0.98 });
          bindStroke(item, vBorderSubtle, { r: 0.9, g: 0.9, b: 0.9 }, 1);
        } else {
          item.fills = [];
        }

        const t = figma.createText();
        t.fontName = isCurrent ? F.uiBold : F.uiMed;
        t.characters = titleText;
        t.fontSize = 13;
        t.textAutoResize = 'WIDTH_AND_HEIGHT';
        bindFill(t, isCurrent ? vTextPrimary : vTextSecondary, {
          r: 0.3,
          g: 0.3,
          b: 0.3,
        });
        item.appendChild(t);
        listFrame.appendChild(item);
      });
      frame.appendChild(listFrame);

      // Buttons Footer (Option 1: 50:50 Balanced Grid)
      const footer = figma.createFrame();
      footer.layoutMode = 'HORIZONTAL';
      footer.primaryAxisSizingMode = 'FIXED';
      footer.counterAxisSizingMode = 'AUTO';
      footer.layoutAlign = 'STRETCH';
      footer.paddingLeft = 24;
      footer.paddingRight = 24;
      footer.paddingTop = 18;
      footer.paddingBottom = 18;
      footer.itemSpacing = 16;
      bindFill(footer, vBgSurface, { r: 0.98, g: 0.98, b: 0.98 });
      bindStroke(footer, vBorderSubtle, { r: 0.9, g: 0.9, b: 0.9 }, 1);

      // Left Button
      const btnLeft = figma.createFrame();
      btnLeft.layoutMode = 'HORIZONTAL';
      btnLeft.primaryAxisSizingMode = 'FIXED';
      btnLeft.counterAxisSizingMode = 'FIXED';
      btnLeft.primaryAxisAlignItems = 'CENTER';
      btnLeft.counterAxisAlignItems = 'CENTER';
      btnLeft.layoutGrow = 1;
      btnLeft.resize(100, 48);
      btnLeft.cornerRadius = 8;
      btnLeft.fills = [];
      bindStroke(btnLeft, vBorderDefault, { r: 0.8, g: 0.8, b: 0.8 }, 1);

      const btnLeftText = figma.createText();
      btnLeftText.fontName = F.uiSemi;
      btnLeftText.characters = isFirst ? '시리즈 목록' : '← 이전 글';
      btnLeftText.fontSize = 14;
      bindFill(btnLeftText, vTextPrimary, { r: 0.1, g: 0.1, b: 0.1 });
      btnLeft.appendChild(btnLeftText);
      footer.appendChild(btnLeft);

      // Right Button
      const btnRight = figma.createFrame();
      btnRight.layoutMode = 'HORIZONTAL';
      btnRight.primaryAxisSizingMode = 'FIXED';
      btnRight.counterAxisSizingMode = 'FIXED';
      btnRight.primaryAxisAlignItems = 'CENTER';
      btnRight.counterAxisAlignItems = 'CENTER';
      btnRight.layoutGrow = 1;
      btnRight.resize(100, 48);
      btnRight.cornerRadius = 8;
      bindFill(btnRight, vBrandPrimary, { r: 0.7, g: 0.4, b: 0 });

      const btnRightText = figma.createText();
      btnRightText.fontName = F.uiSemi;
      btnRightText.characters = isLast ? '전체 시리즈 목록 →' : '다음 글 →';
      btnRightText.fontSize = 14;
      btnRightText.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
      btnRight.appendChild(btnRightText);
      footer.appendChild(btnRight);

      frame.appendChild(footer);
      return frame;
    };

    // Helper: Create Specimen Plate Frame
    const createSpecimenPlateInstance = (mode, width) => {
      const modeId = mode === 'Dark' ? darkModeId : lightModeId;

      const plate = figma.createFrame();
      plate.name = `SpecimenPlate • ${mode} • ${width}px`;
      plate.setExplicitVariableModeForCollection(localColl, modeId);
      plate.layoutMode = 'HORIZONTAL';
      plate.primaryAxisSizingMode = 'FIXED';
      plate.counterAxisSizingMode = 'AUTO';
      plate.counterAxisAlignItems = 'CENTER';
      plate.resize(width, 92);
      plate.paddingLeft = 20;
      plate.paddingRight = 20;
      plate.paddingTop = 16;
      plate.paddingBottom = 16;
      plate.itemSpacing = 16;
      plate.cornerRadius = 4;
      bindFill(plate, vBgSurface, { r: 1, g: 1, b: 1 });
      bindStroke(plate, vBorderDefault, { r: 0.88, g: 0.88, b: 0.88 }, 1);

      // 4px Stem on the left
      const stem = figma.createFrame();
      stem.name = 'Stem-4px';
      stem.resize(4, 60);
      stem.cornerRadius = 2;
      bindFill(stem, vBrandPrimary, { r: 0.7, g: 0.4, b: 0 });
      plate.appendChild(stem);

      // Content Box
      const content = figma.createFrame();
      content.layoutMode = 'VERTICAL';
      content.primaryAxisSizingMode = 'AUTO';
      content.counterAxisSizingMode = 'FIXED';
      content.layoutGrow = 1;
      content.itemSpacing = 4;
      content.fills = [];

      // Metadata row
      const metaRow = figma.createFrame();
      metaRow.layoutMode = 'HORIZONTAL';
      metaRow.primaryAxisSizingMode = 'AUTO';
      metaRow.counterAxisSizingMode = 'AUTO';
      metaRow.itemSpacing = 8;
      metaRow.fills = [];

      const tagBadge = figma.createFrame();
      tagBadge.layoutMode = 'HORIZONTAL';
      tagBadge.paddingLeft = 6;
      tagBadge.paddingRight = 6;
      tagBadge.paddingTop = 2;
      tagBadge.paddingBottom = 2;
      tagBadge.cornerRadius = 2;
      bindFill(tagBadge, vBgOverlay, { r: 0.95, g: 0.95, b: 0.95 });

      const tagText = figma.createText();
      tagText.fontName = F.monoBold;
      tagText.characters = 'SNG-COMPONEN';
      tagText.fontSize = 11;
      bindFill(tagText, vBrandPrimary, { r: 0.7, g: 0.4, b: 0 });
      tagBadge.appendChild(tagText);
      metaRow.appendChild(tagBadge);

      const stageText = figma.createText();
      stageText.fontName = F.mono;
      stageText.characters = 'Stage IV: Pappus (비상 홀씨)';
      stageText.fontSize = 11;
      bindFill(stageText, vTextMuted, { r: 0.4, g: 0.4, b: 0.4 });
      metaRow.appendChild(stageText);
      content.appendChild(metaRow);

      // Title
      const title = figma.createText();
      title.fontName = F.uiBold;
      title.characters =
        '모던 디자인 핸드오프: 스펙 시트가 필요 없는 파이프라인';
      title.fontSize = 15;
      bindFill(title, vTextPrimary, { r: 0.1, g: 0.1, b: 0.1 });
      content.appendChild(title);

      // Taxonomy
      const taxonomy = figma.createText();
      taxonomy.fontName = F.serif;
      taxonomy.characters = 'Taraxacum platycarpum Dahlst.';
      taxonomy.fontSize = 12;
      bindFill(taxonomy, vTextSecondary, { r: 0.4, g: 0.4, b: 0.4 });
      content.appendChild(taxonomy);
      plate.appendChild(content);

      // Right Metadata column
      const rightMeta = figma.createFrame();
      rightMeta.layoutMode = 'VERTICAL';
      rightMeta.primaryAxisSizingMode = 'AUTO';
      rightMeta.counterAxisSizingMode = 'AUTO';
      rightMeta.itemSpacing = 4;
      rightMeta.fills = [];

      const habitat = figma.createText();
      habitat.fontName = F.mono;
      habitat.characters = 'HABITAT: Crevice';
      habitat.fontSize = 11;
      bindFill(habitat, vTextSecondary, { r: 0.4, g: 0.4, b: 0.4 });
      rightMeta.appendChild(habitat);

      const harvest = figma.createText();
      harvest.fontName = F.mono;
      harvest.characters = 'DATE: 2026.09.13';
      harvest.fontSize = 11;
      bindFill(harvest, vTextMuted, { r: 0.5, g: 0.5, b: 0.5 });
      rightMeta.appendChild(harvest);
      plate.appendChild(rightMeta);

      return plate;
    };

    // 5. Layout Instances inside Section
    let curX = 40;
    let curY = 40;

    // SeriesNav Desktop (Light & Dark)
    const navLightLast = createSeriesNavInstance('Light', 680, 5, 5);
    navLightLast.x = curX;
    navLightLast.y = curY;
    sec.appendChild(navLightLast);

    const navDarkLast = createSeriesNavInstance('Dark', 680, 5, 5);
    navDarkLast.x = curX + 720;
    navDarkLast.y = curY;
    sec.appendChild(navDarkLast);

    // Specimen Plate Desktop (Light & Dark)
    const plateLight = createSpecimenPlateInstance('Light', 680);
    plateLight.x = curX;
    plateLight.y = curY + 360;
    sec.appendChild(plateLight);

    const plateDark = createSpecimenPlateInstance('Dark', 680);
    plateDark.x = curX + 720;
    plateDark.y = curY + 360;
    sec.appendChild(plateDark);

    // Mobile Frames (358px)
    const navMobFirst = createSeriesNavInstance('Light', 358, 1, 5);
    navMobFirst.x = curX;
    navMobFirst.y = curY + 500;
    sec.appendChild(navMobFirst);

    const navMobDark = createSeriesNavInstance('Dark', 358, 5, 5);
    navMobDark.x = curX + 400;
    navMobDark.y = curY + 500;
    sec.appendChild(navMobDark);

    sec.resizeWithoutConstraints(1500, 920);
    figma.viewport.scrollAndZoomIntoView([sec]);

    console.log(
      '✅ [BLOG-13] SeriesNav and Specimen Plate SSOT successfully generated in Figma!'
    );
    resolve({
      status: 'SUCCESS',
      sectionId: sec.id,
      frames: [navLightLast.id, navDarkLast.id, plateLight.id, plateDark.id],
    });
  } catch (err) {
    console.error('❌ Error in BLOG-13 SSOT sync:', err);
    resolve({ status: 'ERROR', error: String(err) });
  }
});
