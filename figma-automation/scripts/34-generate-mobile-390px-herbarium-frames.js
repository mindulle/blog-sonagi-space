/**
 * Figma Automation Script: 34-generate-mobile-390px-herbarium-frames.js
 * Task: [BLOG-17] 모바일 390px 전용 식물 표본실 반응형 설계 & Figma 모바일 정본 시안 배치
 * Target File: blog-sonagi-space (Key: lQnGrSsBkyCCckHBjftEMH)
 *
 * Requirements:
 * 1. 390px 모바일 전용 정본 시안 2종 작화:
 *    - Frame 1: 01 /about (Mobile 390px) • The Herbarium Register Monograph
 *    - Frame 2: 02 /notes (Mobile 390px) • The Herbarium Specimen Cabinet
 * 2. 조형 규격 및 물질성:
 *    - The True 2px Stem (골드 악센트 테두리), 4px 절제된 코너 라운딩
 *    - 한지 마운트 띠 장식, 표본실 음각 압인 씰(HerbariumSeal), 린넨 마운트 탭
 *    - 모바일 본문 가독 폭 358px 확보 (좌우 패딩 16px)
 *    - 엄지 영역(Thumb zone)을 고려한 터치 타겟(최소 44px)
 * 3. 배치 위치:
 *    - Page '🌿 Digital Garden & The Gardener' (94:423)
 *    - Section '📱 BLOG-17 Mobile 390px Herbarium Reference Frames (About & Garden)'
 */

return new Promise(async (resolve) => {
  try {
    console.log(
      '📱 [BLOG-17] Generating Mobile 390px Herbarium Reference Frames...'
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

    // 2. Variable Tokens Setup
    const colls = await figma.variables.getLocalVariableCollectionsAsync();
    let localColl =
      colls.find((c) => c.name === 'MDS v0.1.0 Colors') ||
      colls.find((c) => c.name === 'Colors');
    const darkModeId =
      localColl.modes.find((m) => m.name === 'Dark')?.modeId ||
      localColl.modes[1].modeId;

    const allVars = await figma.variables.getLocalVariablesAsync();
    const varMap = new Map();
    allVars
      .filter((v) => v.variableCollectionId === localColl.id)
      .forEach((v) => varMap.set(v.name, v));

    const vBrandPri = varMap.get('brand/primary');
    const vBgBase = varMap.get('bg/base');
    const vBgSurface = varMap.get('bg/surface');
    const vBgElevated = varMap.get('bg/elevated');
    const vBgOverlay = varMap.get('bg/overlay');
    const vBorder = varMap.get('border/default');
    const vBorderSubtle = varMap.get('border/subtle');
    const vBorderStrong = varMap.get('border/strong');
    const vTextPri = varMap.get('text/primary');
    const vTextSec = varMap.get('text/secondary');
    const vTextMuted = varMap.get('text/muted');

    function bindFill(node, variable, fallbackColor) {
      if (variable) {
        node.fills = [
          figma.variables.setBoundVariableForPaint(
            { type: 'SOLID', color: fallbackColor },
            'color',
            variable
          ),
        ];
      } else {
        node.fills = [{ type: 'SOLID', color: fallbackColor }];
      }
    }

    function bindStroke(node, variable, fallbackColor, weight = 1) {
      if (variable) {
        node.strokes = [
          figma.variables.setBoundVariableForPaint(
            { type: 'SOLID', color: fallbackColor },
            'color',
            variable
          ),
        ];
      } else {
        node.strokes = [{ type: 'SOLID', color: fallbackColor }];
      }
      node.strokeWeight = weight;
    }

    // 3. Find Master Components on Local Components Page
    await figma.loadAllPagesAsync();
    const localCompPage = figma.root.children.find((p) =>
      p.name.includes('Local Components')
    );
    const glyphSet = localCompPage.findOne(
      (n) => n.type === 'COMPONENT_SET' && n.name === 'GrowthGlyph'
    );
    const labelSet = localCompPage.findOne(
      (n) => n.type === 'COMPONENT_SET' && n.name === 'SpecimenLabel'
    );
    const bSuccessPill = await figma.getNodeByIdAsync('33:10');
    const bInfoPill = await figma.getNodeByIdAsync('32:31');
    const bWarningPill = await figma.getNodeByIdAsync('33:14');

    function getGlyphInst(stage, size = 24) {
      if (glyphSet) {
        const v = glyphSet.children.find(
          (c) => c.name === `Stage=${stage}, Size=${size}`
        );
        if (v) return v.createInstance();
      }
      const f = figma.createFrame();
      f.resize(size, size);
      return f;
    }

    function getLabelInst(variant, stage) {
      if (labelSet) {
        const v = labelSet.children.find(
          (c) => c.name === `Variant=${variant}, Stage=${stage}`
        );
        if (v) return v.createInstance();
      }
      const f = figma.createFrame();
      f.resize(358, 200);
      return f;
    }

    // 4. Target Page & Section Setup
    const targetPage = figma.root.children.find((p) =>
      p.name.includes('Digital Garden')
    );
    await figma.setCurrentPageAsync(targetPage);

    // Clean up existing BLOG-17 section if any
    const existingSec = targetPage.findOne(
      (n) => n.type === 'SECTION' && n.name.includes('BLOG-17')
    );
    if (existingSec) existingSec.remove();

    const sec = figma.createSection();
    sec.name =
      '📱 BLOG-17 Mobile 390px Herbarium Reference Frames (About & Garden)';
    sec.x = 0;
    sec.y = 1900;
    targetPage.appendChild(sec);
    sec.setExplicitVariableModeForCollection(localColl, darkModeId);

    // Helper: Create Mobile GNB Header (56px height)
    function createMobileGNB() {
      const gnb = figma.createFrame();
      gnb.name = 'Mobile GNB Header (56px)';
      gnb.resize(390, 56);
      gnb.layoutMode = 'HORIZONTAL';
      gnb.primaryAxisSizingMode = 'FIXED';
      gnb.counterAxisSizingMode = 'AUTO';
      gnb.counterAxisAlignItems = 'CENTER';
      gnb.primaryAxisAlignItems = 'SPACE_BETWEEN';
      gnb.paddingLeft = 16;
      gnb.paddingRight = 16;
      bindFill(gnb, vBgSurface, { r: 27 / 255, g: 32 / 255, b: 44 / 255 });
      bindStroke(
        gnb,
        vBorderSubtle,
        { r: 31 / 255, g: 38 / 255, b: 53 / 255 },
        1
      );
      gnb.layoutAlign = 'STRETCH';

      // Logo
      const logoText = figma.createText();
      logoText.fontName = F.uiBold;
      logoText.characters = 'sonagi.';
      logoText.fontSize = 20;
      bindFill(logoText, vTextPri, {
        r: 241 / 255,
        g: 245 / 255,
        b: 249 / 255,
      });
      gnb.appendChild(logoText);

      // Icons
      const actions = figma.createFrame();
      actions.layoutMode = 'HORIZONTAL';
      actions.primaryAxisSizingMode = 'AUTO';
      actions.counterAxisSizingMode = 'AUTO';
      actions.counterAxisAlignItems = 'CENTER';
      actions.itemSpacing = 16;
      actions.fills = [];

      const searchIc = figma.createText();
      searchIc.fontName = F.mono;
      searchIc.characters = '⌕';
      searchIc.fontSize = 18;
      bindFill(searchIc, vTextSec, {
        r: 148 / 255,
        g: 163 / 255,
        b: 184 / 255,
      });
      actions.appendChild(searchIc);

      const themeIc = figma.createText();
      themeIc.fontName = F.mono;
      themeIc.characters = '☀';
      themeIc.fontSize = 16;
      bindFill(themeIc, vBrandPri, { r: 255 / 255, g: 200 / 255, b: 55 / 255 });
      actions.appendChild(themeIc);

      const menuIc = figma.createText();
      menuIc.fontName = F.mono;
      menuIc.characters = '☰';
      menuIc.fontSize = 20;
      bindFill(menuIc, vTextPri, { r: 241 / 255, g: 245 / 255, b: 249 / 255 });
      actions.appendChild(menuIc);

      gnb.appendChild(actions);
      return gnb;
    }

    // ─────────────────────────────────────────────────────────────
    // FRAME 1: 01 /about (Mobile 390px)
    // ─────────────────────────────────────────────────────────────
    const aboutMob = figma.createFrame();
    aboutMob.name =
      '01 /about (Mobile 390px) • The Herbarium Register Monograph';
    aboutMob.resize(390, 100);
    aboutMob.layoutMode = 'VERTICAL';
    aboutMob.primaryAxisSizingMode = 'AUTO';
    aboutMob.counterAxisSizingMode = 'FIXED';
    aboutMob.itemSpacing = 0;
    aboutMob.x = 40;
    aboutMob.y = 40;
    bindFill(aboutMob, vBgBase, { r: 18 / 255, g: 21 / 255, b: 29 / 255 });
    aboutMob.setExplicitVariableModeForCollection(localColl, darkModeId);
    aboutMob.appendChild(createMobileGNB());

    const aboutContent = figma.createFrame();
    aboutContent.name = 'Mobile Content Container (390px)';
    aboutContent.layoutMode = 'VERTICAL';
    aboutContent.primaryAxisSizingMode = 'AUTO';
    aboutContent.counterAxisSizingMode = 'FIXED';
    aboutContent.paddingLeft = 16;
    aboutContent.paddingRight = 16;
    aboutContent.paddingTop = 24;
    aboutContent.paddingBottom = 40;
    aboutContent.itemSpacing = 24;
    aboutContent.layoutAlign = 'STRETCH';
    aboutContent.fills = [];
    aboutMob.appendChild(aboutContent);

    // Monograph Folio (The Herbarium Register)
    const folio = figma.createFrame();
    folio.name = 'Archival Monograph Folio (358px)';
    folio.layoutMode = 'VERTICAL';
    folio.primaryAxisSizingMode = 'AUTO';
    folio.counterAxisSizingMode = 'FIXED';
    folio.paddingLeft = 18;
    folio.paddingRight = 18;
    folio.paddingTop = 24;
    folio.paddingBottom = 24;
    folio.cornerRadius = 4;
    folio.itemSpacing = 20;
    folio.layoutAlign = 'STRETCH';
    bindFill(folio, vBgSurface, { r: 27 / 255, g: 32 / 255, b: 44 / 255 });
    bindStroke(
      folio,
      vBorderStrong,
      { r: 255 / 255, g: 200 / 255, b: 55 / 255 },
      2
    ); // The True 2px Stem
    aboutContent.appendChild(folio);

    // Washi Tape Accent at Top
    const washi = figma.createFrame();
    washi.name = 'Washi Tape Strip';
    washi.resize(112, 10);
    washi.cornerRadius = 2;
    washi.layoutAlign = 'CENTER';
    bindFill(washi, vBrandPri, { r: 255 / 255, g: 200 / 255, b: 55 / 255 });
    folio.appendChild(washi);

    // Folio Header: Badge, Title, Seal
    const fHeader = figma.createFrame();
    fHeader.layoutMode = 'VERTICAL';
    fHeader.primaryAxisSizingMode = 'AUTO';
    fHeader.counterAxisSizingMode = 'AUTO';
    fHeader.itemSpacing = 8;
    fHeader.layoutAlign = 'STRETCH';
    fHeader.fills = [];

    const regBadge = figma.createFrame();
    regBadge.layoutMode = 'HORIZONTAL';
    regBadge.paddingLeft = 8;
    regBadge.paddingRight = 8;
    regBadge.paddingTop = 3;
    regBadge.paddingBottom = 3;
    regBadge.cornerRadius = 2;
    bindFill(regBadge, vBgOverlay, { r: 31 / 255, g: 38 / 255, b: 53 / 255 });
    bindStroke(
      regBadge,
      vBorderSubtle,
      { r: 31 / 255, g: 38 / 255, b: 53 / 255 },
      1
    );
    const rbt = figma.createText();
    rbt.fontName = F.monoBold;
    rbt.characters = 'HERBARIUM REGISTRATION • SNG-SPACE';
    rbt.fontSize = 9;
    bindFill(rbt, vBrandPri, { r: 255 / 255, g: 200 / 255, b: 55 / 255 });
    regBadge.appendChild(rbt);
    fHeader.appendChild(regBadge);

    const fTit = figma.createText();
    fTit.fontName = F.uiBold;
    fTit.characters = '돌 틈의 표본실 (The Herbarium in the Crevice)';
    fTit.fontSize = 22;
    fTit.lineHeight = { value: 130, unit: 'PERCENT' };
    bindFill(fTit, vTextPri, { r: 241 / 255, g: 245 / 255, b: 249 / 255 });
    fTit.textAutoResize = 'HEIGHT';
    fTit.layoutAlign = 'STRETCH';
    fHeader.appendChild(fTit);

    const fSci = figma.createText();
    fSci.fontName = F.mono;
    fSci.characters = 'Taraxacum platycarpum Dahlst. (토종 야생 민들레)';
    fSci.fontSize = 11;
    bindFill(fSci, vTextMuted, { r: 100 / 255, g: 116 / 255, b: 139 / 255 });
    fHeader.appendChild(fSci);

    // Curator Seal box
    const sealBox = figma.createFrame();
    sealBox.layoutMode = 'HORIZONTAL';
    sealBox.primaryAxisAlignItems = 'CENTER';
    sealBox.counterAxisAlignItems = 'CENTER';
    sealBox.layoutAlign = 'STRETCH';
    sealBox.paddingTop = 8;
    sealBox.paddingBottom = 8;
    sealBox.fills = [];
    const sealInst = figma.createFrame();
    sealInst.resize(64, 64);
    sealInst.cornerRadius = 32;
    bindStroke(
      sealInst,
      vBrandPri,
      { r: 255 / 255, g: 200 / 255, b: 55 / 255 },
      2
    );
    sealInst.layoutMode = 'VERTICAL';
    sealInst.primaryAxisAlignItems = 'CENTER';
    sealInst.counterAxisAlignItems = 'CENTER';
    sealInst.itemSpacing = 2;
    sealInst.fills = [];
    const st1 = figma.createText();
    st1.fontName = F.monoBold;
    st1.characters = 'HERBARIUM';
    st1.fontSize = 7;
    bindFill(st1, vBrandPri, { r: 255 / 255, g: 200 / 255, b: 55 / 255 });
    sealInst.appendChild(st1);
    const st2 = figma.createText();
    st2.fontName = F.mono;
    st2.characters = '🌱';
    st2.fontSize = 14;
    sealInst.appendChild(st2);
    const st3 = figma.createText();
    st3.fontName = F.mono;
    st3.characters = 'SNG-2026';
    st3.fontSize = 6;
    bindFill(st3, vBrandPri, { r: 255 / 255, g: 200 / 255, b: 55 / 255 });
    sealInst.appendChild(st3);
    sealBox.appendChild(sealInst);
    fHeader.appendChild(sealBox);
    folio.appendChild(fHeader);

    // Taxonomy 2x2 Matrix
    const fMatrix = figma.createFrame();
    fMatrix.layoutMode = 'VERTICAL';
    fMatrix.primaryAxisSizingMode = 'AUTO';
    fMatrix.counterAxisSizingMode = 'AUTO';
    fMatrix.layoutAlign = 'STRETCH';
    fMatrix.itemSpacing = 8;
    fMatrix.paddingTop = 12;
    fMatrix.paddingBottom = 12;
    bindStroke(
      fMatrix,
      vBorderSubtle,
      { r: 31 / 255, g: 38 / 255, b: 53 / 255 },
      1
    );
    fMatrix.strokeAlign = 'INSIDE';

    const mr1 = figma.createFrame();
    mr1.layoutMode = 'HORIZONTAL';
    mr1.primaryAxisSizingMode = 'FIXED';
    mr1.counterAxisSizingMode = 'AUTO';
    mr1.primaryAxisAlignItems = 'SPACE_BETWEEN';
    mr1.layoutAlign = 'STRETCH';
    mr1.fills = [];
    const mTax = figma.createText();
    mTax.fontName = F.mono;
    mTax.characters = 'TAX: Asteraceae';
    mTax.fontSize = 10;
    bindFill(mTax, vTextSec, { r: 148 / 255, g: 163 / 255, b: 184 / 255 });
    mr1.appendChild(mTax);
    const mHab = figma.createText();
    mHab.fontName = F.mono;
    mHab.characters = 'HAB: Rock Crevice';
    mHab.fontSize = 10;
    bindFill(mHab, vTextSec, { r: 148 / 255, g: 163 / 255, b: 184 / 255 });
    mr1.appendChild(mHab);
    fMatrix.appendChild(mr1);

    const mr2 = figma.createFrame();
    mr2.layoutMode = 'HORIZONTAL';
    mr2.primaryAxisSizingMode = 'FIXED';
    mr2.counterAxisSizingMode = 'AUTO';
    mr2.primaryAxisAlignItems = 'SPACE_BETWEEN';
    mr2.layoutAlign = 'STRETCH';
    mr2.fills = [];
    const mRule = figma.createText();
    mRule.fontName = F.mono;
    mRule.characters = 'RULE: The True 2px Stem';
    mRule.fontSize = 10;
    bindFill(mRule, vBrandPri, { r: 255 / 255, g: 200 / 255, b: 55 / 255 });
    mr2.appendChild(mRule);
    const mCur = figma.createText();
    mCur.fontName = F.mono;
    mCur.characters = 'BY: The Gardener';
    mCur.fontSize = 10;
    bindFill(mCur, vTextSec, { r: 148 / 255, g: 163 / 255, b: 184 / 255 });
    mr2.appendChild(mCur);
    fMatrix.appendChild(mr2);
    folio.appendChild(fMatrix);

    // Manifesto Quote
    const quoteBox = figma.createFrame();
    quoteBox.layoutMode = 'VERTICAL';
    quoteBox.paddingLeft = 14;
    quoteBox.paddingRight = 14;
    quoteBox.paddingTop = 14;
    quoteBox.paddingBottom = 14;
    quoteBox.cornerRadius = 2;
    quoteBox.layoutAlign = 'STRETCH';
    bindFill(quoteBox, vBgOverlay, { r: 31 / 255, g: 38 / 255, b: 53 / 255 });
    bindStroke(
      quoteBox,
      vBrandPri,
      { r: 255 / 255, g: 200 / 255, b: 55 / 255 },
      2
    );
    const qTxt = figma.createText();
    qTxt.fontName = F.uiMed;
    qTxt.characters =
      '“정원은 완성을 목표로 하지 않는다. 그것은 지속적인 보살핌과 변화의 과정 그 자체다.”';
    qTxt.fontSize = 13;
    qTxt.lineHeight = { value: 155, unit: 'PERCENT' };
    bindFill(qTxt, vTextPri, { r: 241 / 255, g: 245 / 255, b: 249 / 255 });
    qTxt.textAutoResize = 'HEIGHT';
    qTxt.layoutAlign = 'STRETCH';
    quoteBox.appendChild(qTxt);
    folio.appendChild(quoteBox);

    // 4 Botanical Plates (Plates I-IV)
    const platesHeader = figma.createText();
    platesHeader.fontName = F.monoBold;
    platesHeader.characters = 'BOTANICAL ETCHING PLATES (I ~ IV)';
    platesHeader.fontSize = 10;
    bindFill(platesHeader, vBrandPri, {
      r: 255 / 255,
      g: 200 / 255,
      b: 55 / 255,
    });
    folio.appendChild(platesHeader);

    const plateDefs = [
      {
        id: 'Seed',
        num: 'I',
        ko: '단단한 겨울 씨앗',
        desc: '세로 능선(Ribs)의 단단한 수과. 가설의 시작.',
      },
      {
        id: 'Sprout',
        num: 'II',
        ko: '돌 틈의 여린 떡잎',
        desc: '암반을 뚫고 솟은 주걱형 떡잎과 실험 코드.',
      },
      {
        id: 'Rosette',
        num: 'III',
        ko: '사자이빨 본잎',
        desc: '지면에 납작 엎드린 역방향 톱니와 검증된 논리.',
      },
      {
        id: 'Pappus',
        num: 'IV',
        ko: '비상하는 황금 홀씨',
        desc: '대중의 사유로 비행하는 상록의 지식 자산.',
      },
    ];

    for (const p of plateDefs) {
      const pBox = figma.createFrame();
      pBox.layoutMode = 'HORIZONTAL';
      pBox.counterAxisAlignItems = 'CENTER';
      pBox.paddingLeft = 12;
      pBox.paddingRight = 12;
      pBox.paddingTop = 12;
      pBox.paddingBottom = 12;
      pBox.itemSpacing = 12;
      pBox.cornerRadius = 4;
      pBox.layoutAlign = 'STRETCH';
      bindFill(pBox, vBgOverlay, { r: 31 / 255, g: 38 / 255, b: 53 / 255 });
      bindStroke(
        pBox,
        vBorderSubtle,
        { r: 31 / 255, g: 38 / 255, b: 53 / 255 },
        1
      );

      pBox.appendChild(getGlyphInst(p.id, 48));

      const pTextCol = figma.createFrame();
      pTextCol.layoutMode = 'VERTICAL';
      pTextCol.itemSpacing = 2;
      pTextCol.layoutGrow = 1;
      pTextCol.fills = [];

      const pTop = figma.createText();
      pTop.fontName = F.monoBold;
      pTop.characters = `PLATE ${p.num} • ${p.id.toUpperCase()}`;
      pTop.fontSize = 10;
      bindFill(pTop, vBrandPri, { r: 255 / 255, g: 200 / 255, b: 55 / 255 });
      pTextCol.appendChild(pTop);

      const pKo = figma.createText();
      pKo.fontName = F.uiBold;
      pKo.characters = p.ko;
      pKo.fontSize = 13;
      bindFill(pKo, vTextPri, { r: 241 / 255, g: 245 / 255, b: 249 / 255 });
      pTextCol.appendChild(pKo);

      const pDesc = figma.createText();
      pDesc.fontName = F.uiReg;
      pDesc.characters = p.desc;
      pDesc.fontSize = 11;
      pDesc.lineHeight = { value: 140, unit: 'PERCENT' };
      bindFill(pDesc, vTextSec, { r: 148 / 255, g: 163 / 255, b: 184 / 255 });
      pDesc.textAutoResize = 'HEIGHT';
      pDesc.layoutAlign = 'STRETCH';
      pTextCol.appendChild(pDesc);

      pBox.appendChild(pTextCol);
      folio.appendChild(pBox);
    }

    // Touch-friendly action buttons
    const actBox = figma.createFrame();
    actBox.layoutMode = 'VERTICAL';
    actBox.itemSpacing = 8;
    actBox.layoutAlign = 'STRETCH';
    actBox.fills = [];

    const btn1 = figma.createFrame();
    btn1.resize(322, 44);
    btn1.cornerRadius = 4;
    btn1.layoutMode = 'HORIZONTAL';
    btn1.primaryAxisAlignItems = 'CENTER';
    btn1.counterAxisAlignItems = 'CENTER';
    bindFill(btn1, vBrandPri, { r: 255 / 255, g: 200 / 255, b: 55 / 255 });
    const b1t = figma.createText();
    b1t.fontName = F.uiBold;
    b1t.characters = '정원사에게 전갈 보내기';
    b1t.fontSize = 13;
    bindFill(b1t, vBgBase, { r: 18 / 255, g: 21 / 255, b: 29 / 255 });
    btn1.appendChild(b1t);
    actBox.appendChild(btn1);

    const btn2 = figma.createFrame();
    btn2.resize(322, 44);
    btn2.cornerRadius = 4;
    btn2.layoutMode = 'HORIZONTAL';
    btn2.primaryAxisAlignItems = 'CENTER';
    btn2.counterAxisAlignItems = 'CENTER';
    bindFill(btn2, vBgOverlay, { r: 31 / 255, g: 38 / 255, b: 53 / 255 });
    bindStroke(btn2, vBorder, { r: 44 / 255, g: 53 / 255, b: 71 / 255 }, 1);
    const b2t = figma.createText();
    b2t.fontName = F.uiBold;
    b2t.characters = 'RSS 피드 구독 (/rss.xml)';
    b2t.fontSize = 13;
    bindFill(b2t, vTextPri, { r: 241 / 255, g: 245 / 255, b: 249 / 255 });
    btn2.appendChild(b2t);
    actBox.appendChild(btn2);

    folio.appendChild(actBox);
    sec.appendChild(aboutMob);

    // ─────────────────────────────────────────────────────────────
    // FRAME 2: 02 /notes (Mobile 390px)
    // ─────────────────────────────────────────────────────────────
    const notesMob = figma.createFrame();
    notesMob.name = '02 /notes (Mobile 390px) • The Herbarium Specimen Cabinet';
    notesMob.resize(390, 100);
    notesMob.layoutMode = 'VERTICAL';
    notesMob.primaryAxisSizingMode = 'AUTO';
    notesMob.counterAxisSizingMode = 'FIXED';
    notesMob.itemSpacing = 0;
    notesMob.x = 470;
    notesMob.y = 40;
    bindFill(notesMob, vBgBase, { r: 18 / 255, g: 21 / 255, b: 29 / 255 });
    notesMob.setExplicitVariableModeForCollection(localColl, darkModeId);
    notesMob.appendChild(createMobileGNB());

    const notesContent = figma.createFrame();
    notesContent.name = 'Mobile Notes Content (390px)';
    notesContent.layoutMode = 'VERTICAL';
    notesContent.primaryAxisSizingMode = 'AUTO';
    notesContent.counterAxisSizingMode = 'FIXED';
    notesContent.paddingLeft = 16;
    notesContent.paddingRight = 16;
    notesContent.paddingTop = 24;
    notesContent.paddingBottom = 40;
    notesContent.itemSpacing = 20;
    notesContent.layoutAlign = 'STRETCH';
    notesContent.fills = [];
    notesMob.appendChild(notesContent);

    // Notes Header
    const nHead = figma.createFrame();
    nHead.layoutMode = 'VERTICAL';
    nHead.primaryAxisSizingMode = 'AUTO';
    nHead.counterAxisSizingMode = 'AUTO';
    nHead.itemSpacing = 8;
    nHead.layoutAlign = 'STRETCH';
    nHead.fills = [];

    const nBadge = figma.createFrame();
    nBadge.layoutMode = 'HORIZONTAL';
    nBadge.paddingLeft = 8;
    nBadge.paddingRight = 8;
    nBadge.paddingTop = 3;
    nBadge.paddingBottom = 3;
    nBadge.cornerRadius = 2;
    bindFill(nBadge, vBgSurface, { r: 27 / 255, g: 32 / 255, b: 44 / 255 });
    bindStroke(
      nBadge,
      vBorderSubtle,
      { r: 31 / 255, g: 38 / 255, b: 53 / 255 },
      1
    );
    const nbt = figma.createText();
    nbt.fontName = F.monoBold;
    nbt.characters = 'HERBARIUM ARCHIVE • 15 SPECIMENS';
    nbt.fontSize = 9;
    bindFill(nbt, vBrandPri, { r: 255 / 255, g: 200 / 255, b: 55 / 255 });
    nBadge.appendChild(nbt);
    nHead.appendChild(nBadge);

    const nTit = figma.createText();
    nTit.fontName = F.uiBold;
    nTit.characters = '돌 틈의 표본실 (The Herbarium)';
    nTit.fontSize = 24;
    bindFill(nTit, vTextPri, { r: 241 / 255, g: 245 / 255, b: 249 / 255 });
    nHead.appendChild(nTit);

    const nSub = figma.createText();
    nSub.fontName = F.uiReg;
    nSub.characters = '척박한 암반의 틈새에서 채집된 지식 표본과 사유의 기록.';
    nSub.fontSize = 13;
    bindFill(nSub, vTextSec, { r: 148 / 255, g: 163 / 255, b: 184 / 255 });
    nHead.appendChild(nSub);
    notesContent.appendChild(nHead);

    // Tier 1: 4-Stage Botanical Etching Filter Buttons (Symmetrical Mobile 2x2 Grid)
    const stageCabinet = figma.createFrame();
    stageCabinet.name = 'Tier 1: Stage Filter Rack (358px)';
    stageCabinet.layoutMode = 'VERTICAL';
    stageCabinet.itemSpacing = 8;
    stageCabinet.paddingLeft = 14;
    stageCabinet.paddingRight = 14;
    stageCabinet.paddingTop = 14;
    stageCabinet.paddingBottom = 14;
    stageCabinet.cornerRadius = 4;
    stageCabinet.layoutAlign = 'STRETCH';
    bindFill(stageCabinet, vBgSurface, {
      r: 27 / 255,
      g: 32 / 255,
      b: 44 / 255,
    });
    bindStroke(
      stageCabinet,
      vBorder,
      { r: 44 / 255, g: 53 / 255, b: 71 / 255 },
      1
    );

    // Full width "All" Button
    const allBtn = figma.createFrame();
    allBtn.layoutMode = 'HORIZONTAL';
    allBtn.primaryAxisSizingMode = 'FIXED';
    allBtn.counterAxisSizingMode = 'AUTO';
    allBtn.primaryAxisAlignItems = 'SPACE_BETWEEN';
    allBtn.counterAxisAlignItems = 'CENTER';
    allBtn.paddingLeft = 12;
    allBtn.paddingRight = 12;
    allBtn.paddingTop = 8;
    allBtn.paddingBottom = 8;
    allBtn.cornerRadius = 4;
    allBtn.layoutAlign = 'STRETCH';
    bindFill(allBtn, vBgOverlay, { r: 31 / 255, g: 38 / 255, b: 53 / 255 });
    bindStroke(
      allBtn,
      vBrandPri,
      { r: 255 / 255, g: 200 / 255, b: 55 / 255 },
      1
    );
    const abt = figma.createText();
    abt.fontName = F.monoBold;
    abt.characters = '전체 표본 (All Specimens)';
    abt.fontSize = 11;
    bindFill(abt, vBrandPri, { r: 255 / 255, g: 200 / 255, b: 55 / 255 });
    allBtn.appendChild(abt);
    const abc = figma.createText();
    abc.fontName = F.mono;
    abc.characters = '15';
    abc.fontSize = 10;
    bindFill(abc, vTextMuted, { r: 100 / 255, g: 116 / 255, b: 139 / 255 });
    allBtn.appendChild(abc);
    stageCabinet.appendChild(allBtn);

    // 2x2 Grid of 4 Stage Glyphs
    const gridRow1 = figma.createFrame();
    gridRow1.layoutMode = 'HORIZONTAL';
    gridRow1.itemSpacing = 8;
    gridRow1.layoutAlign = 'STRETCH';
    gridRow1.fills = [];

    const gridRow2 = figma.createFrame();
    gridRow2.layoutMode = 'HORIZONTAL';
    gridRow2.itemSpacing = 8;
    gridRow2.layoutAlign = 'STRETCH';
    gridRow2.fills = [];

    const mobStages = [
      { id: 'Seed', count: 2, row: gridRow1 },
      { id: 'Sprout', count: 1, row: gridRow1 },
      { id: 'Rosette', count: 1, row: gridRow2 },
      { id: 'Pappus', count: 11, row: gridRow2 },
    ];

    for (const ms of mobStages) {
      const sBtn = figma.createFrame();
      sBtn.layoutMode = 'HORIZONTAL';
      sBtn.primaryAxisSizingMode = 'FIXED';
      sBtn.counterAxisSizingMode = 'AUTO';
      sBtn.counterAxisAlignItems = 'CENTER';
      sBtn.primaryAxisAlignItems = 'SPACE_BETWEEN';
      sBtn.paddingLeft = 10;
      sBtn.paddingRight = 10;
      sBtn.paddingTop = 8;
      sBtn.paddingBottom = 8;
      sBtn.cornerRadius = 4;
      sBtn.layoutGrow = 1;
      bindFill(sBtn, vBgOverlay, { r: 31 / 255, g: 38 / 255, b: 53 / 255 });
      bindStroke(
        sBtn,
        vBorderSubtle,
        { r: 31 / 255, g: 38 / 255, b: 53 / 255 },
        1
      );

      const sLeft = figma.createFrame();
      sLeft.layoutMode = 'HORIZONTAL';
      sLeft.counterAxisAlignItems = 'CENTER';
      sLeft.itemSpacing = 6;
      sLeft.fills = [];
      sLeft.appendChild(getGlyphInst(ms.id, 24));
      const sText = figma.createText();
      sText.fontName = F.monoBold;
      sText.characters = ms.id;
      sText.fontSize = 11;
      bindFill(sText, vTextPri, { r: 241 / 255, g: 245 / 255, b: 249 / 255 });
      sLeft.appendChild(sText);
      sBtn.appendChild(sLeft);

      const sCnt = figma.createText();
      sCnt.fontName = F.mono;
      sCnt.characters = String(ms.count);
      sCnt.fontSize = 10;
      bindFill(sCnt, vTextMuted, { r: 100 / 255, g: 116 / 255, b: 139 / 255 });
      sBtn.appendChild(sCnt);
      ms.row.appendChild(sBtn);
    }

    stageCabinet.appendChild(gridRow1);
    stageCabinet.appendChild(gridRow2);
    notesContent.appendChild(stageCabinet);

    // Search input
    const sInput = figma.createFrame();
    sInput.layoutMode = 'HORIZONTAL';
    sInput.primaryAxisSizingMode = 'FIXED';
    sInput.counterAxisSizingMode = 'AUTO';
    sInput.counterAxisAlignItems = 'CENTER';
    sInput.paddingLeft = 12;
    sInput.paddingRight = 12;
    sInput.paddingTop = 10;
    sInput.paddingBottom = 10;
    sInput.cornerRadius = 4;
    sInput.layoutAlign = 'STRETCH';
    bindFill(sInput, vBgSurface, { r: 27 / 255, g: 32 / 255, b: 44 / 255 });
    bindStroke(sInput, vBorder, { r: 44 / 255, g: 53 / 255, b: 71 / 255 }, 1);
    const siTxt = figma.createText();
    siTxt.fontName = F.mono;
    siTxt.characters = '⌕  Search specimen docket...';
    siTxt.fontSize = 11;
    bindFill(siTxt, vTextMuted, { r: 100 / 255, g: 116 / 255, b: 139 / 255 });
    sInput.appendChild(siTxt);
    notesContent.appendChild(sInput);

    // Sample Specimen Docket Cards (2 cards on mobile)
    const docketData = [
      {
        slug: 'The-Gardener',
        title: 'The Gardener: 디지털 정원사의 철학과 집필 원칙',
        stage: 'Pappus',
        excerpt:
          '완벽주의의 덫에서 벗어나 생각의 씨앗부터 상록수에 이르는 생명주기와 위키링크...',
        tags: '#philosophy #writing',
        date: '2026.11.12',
      },
      {
        slug: 'design-system-shape-color-semantics',
        title: 'MDS 조형 헌법: The True 2px Stem & 4px Radius',
        stage: 'Pappus',
        excerpt:
          'W3C 표준 JSON 토큰과 Figma Local Variables 1:1 매핑. 안개와 기만을 배제한...',
        tags: '#design-system #tokens',
        date: '2026.11.12',
      },
    ];

    for (const d of docketData) {
      const card = figma.createFrame();
      card.name = `Specimen Docket • ${d.slug}`;
      card.layoutMode = 'VERTICAL';
      card.primaryAxisSizingMode = 'AUTO';
      card.counterAxisSizingMode = 'FIXED';
      card.paddingLeft = 16;
      card.paddingRight = 16;
      card.paddingTop = 16;
      card.paddingBottom = 16;
      card.cornerRadius = 4;
      card.itemSpacing = 12;
      card.layoutAlign = 'STRETCH';
      bindFill(card, vBgSurface, { r: 27 / 255, g: 32 / 255, b: 44 / 255 });
      bindStroke(card, vBorder, { r: 44 / 255, g: 53 / 255, b: 71 / 255 }, 2); // 2px True Stem

      // Top row
      const cr1 = figma.createFrame();
      cr1.layoutMode = 'HORIZONTAL';
      cr1.primaryAxisSizingMode = 'FIXED';
      cr1.counterAxisSizingMode = 'AUTO';
      cr1.primaryAxisAlignItems = 'SPACE_BETWEEN';
      cr1.counterAxisAlignItems = 'CENTER';
      cr1.layoutAlign = 'STRETCH';
      cr1.fills = [];

      const cSlug = figma.createText();
      cSlug.fontName = F.monoBold;
      cSlug.characters = `[[${d.slug}]]`;
      cSlug.fontSize = 11;
      bindFill(cSlug, vBrandPri, { r: 255 / 255, g: 200 / 255, b: 55 / 255 });
      cr1.appendChild(cSlug);

      const cGlyphRow = figma.createFrame();
      cGlyphRow.layoutMode = 'HORIZONTAL';
      cGlyphRow.counterAxisAlignItems = 'CENTER';
      cGlyphRow.itemSpacing = 4;
      cGlyphRow.fills = [];
      cGlyphRow.appendChild(getGlyphInst(d.stage, 24));
      cr1.appendChild(cGlyphRow);
      card.appendChild(cr1);

      // Title
      const cTit = figma.createText();
      cTit.fontName = F.uiBold;
      cTit.characters = d.title;
      cTit.fontSize = 15;
      cTit.lineHeight = { value: 140, unit: 'PERCENT' };
      bindFill(cTit, vTextPri, { r: 241 / 255, g: 245 / 255, b: 249 / 255 });
      cTit.textAutoResize = 'HEIGHT';
      cTit.layoutAlign = 'STRETCH';
      card.appendChild(cTit);

      // Excerpt
      const cExc = figma.createText();
      cExc.fontName = F.uiReg;
      cExc.characters = d.excerpt;
      cExc.fontSize = 12;
      cExc.lineHeight = { value: 150, unit: 'PERCENT' };
      bindFill(cExc, vTextSec, { r: 148 / 255, g: 163 / 255, b: 184 / 255 });
      cExc.textAutoResize = 'HEIGHT';
      cExc.layoutAlign = 'STRETCH';
      card.appendChild(cExc);

      // Footer
      const cFoot = figma.createFrame();
      cFoot.layoutMode = 'HORIZONTAL';
      cFoot.primaryAxisSizingMode = 'FIXED';
      cFoot.counterAxisSizingMode = 'AUTO';
      cFoot.primaryAxisAlignItems = 'SPACE_BETWEEN';
      cFoot.paddingTop = 8;
      cFoot.layoutAlign = 'STRETCH';
      cFoot.fills = [];
      bindStroke(
        cFoot,
        vBorderSubtle,
        { r: 31 / 255, g: 38 / 255, b: 53 / 255 },
        1
      );
      cFoot.strokeAlign = 'INSIDE';

      const cTags = figma.createText();
      cTags.fontName = F.mono;
      cTags.characters = d.tags;
      cTags.fontSize = 10;
      bindFill(cTags, vTextMuted, { r: 100 / 255, g: 116 / 255, b: 139 / 255 });
      cFoot.appendChild(cTags);

      const cDt = figma.createText();
      cDt.fontName = F.mono;
      cDt.characters = d.date;
      cDt.fontSize = 10;
      bindFill(cDt, vTextMuted, { r: 100 / 255, g: 116 / 255, b: 139 / 255 });
      cFoot.appendChild(cDt);
      card.appendChild(cFoot);

      notesContent.appendChild(card);
    }

    sec.appendChild(notesMob);

    // Resize Section
    const maxH = Math.max(aboutMob.height, notesMob.height) + 80;
    sec.resizeWithoutConstraints(900, maxH);
    figma.viewport.scrollAndZoomIntoView([sec]);

    console.log(
      '✅ [BLOG-17] Successfully generated Mobile 390px Herbarium Reference Frames!'
    );
    resolve({
      status: 'SUCCESS',
      sectionId: sec.id,
      aboutFrameId: aboutMob.id,
      notesFrameId: notesMob.id,
      aboutHeight: aboutMob.height,
      notesHeight: notesMob.height,
    });
  } catch (err) {
    console.error('❌ Error in BLOG-17 Mobile automation:', err);
    resolve({ status: 'ERROR', error: String(err) });
  }
});
