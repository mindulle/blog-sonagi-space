/**
 * Figma Automation Script: 33-create-growth-glyphs-and-specimen-label-ssot.js
 * Task: BLOG-8 [Figma] 돌 틈의 표본실 조형 시스템 & 4단계 생장 선화 에칭 에셋 구축
 * Target File: blog-sonagi-space (Key: lQnGrSsBkyCCckHBjftEMH)
 *
 * Requirements:
 * 1. 4단계 생장 글리프 2px 벡터 선화 드로잉 (Botanical Etchings):
 *    - 1단계 Seed: 단단한 겨울 씨앗
 *    - 2단계 Sprout: 돌 틈을 뚫고 돋아난 여린 떡잎
 *    - 3단계 Rosette: 비바람을 견디는 톱니형 민들레 본잎 (Serrated Leaf)
 *    - 4단계 Pappus: 만개하여 바람에 날아갈 준비를 마친 황금빛 솜털 홀씨
 *    - 규격: 24/48/96px 크기별 광학 보정, 2px 단일 스트로크, round cap, pathLength=1 정규화 SVG
 * 2. 식물학 표본실 라벨 컴포넌트 (<SpecimenLabel>):
 *    - Specimen No. SNG-2026-001 / Harvest Date 2026.11.12 / Habitat: Cloudflare Workers / Stage: Sprout
 *    - JetBrains Mono tabular 서체 기반, 한지 마운트 띠 장식, 4px 코너 라운딩, The True 2px Stem
 * 3. Local Components 등록 및 Showcase 정본 배치:
 *    - Page 'Local Components' (32:28):
 *      - Component Set: GrowthGlyph (Stage=Seed|Sprout|Rosette|Pappus, Size=24|48|96)
 *      - Component Set: SpecimenLabel (Variant=Card|Plate|Tag, Stage=Seed|Sprout|Rosette|Pappus)
 *    - Page '🌿 Digital Garden & The Gardener' (94:423):
 *      - BLOG-8 Herbarium Showcase Frame (Dark & Light verification)
 */

return new Promise(async (resolve) => {
  try {
    console.log(
      '🌿 [BLOG-8 SSOT] Building Botanical Herbarium Components & Etching Assets...'
    );

    // 1. Load Fonts
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
      localColl.modes[1].modeId;

    const tokenDefs = [
      {
        name: 'bg/base',
        light: { r: 251 / 255, g: 251 / 255, b: 250 / 255, a: 1 },
        dark: { r: 18 / 255, g: 21 / 255, b: 29 / 255, a: 1 },
      },
      {
        name: 'bg/surface',
        light: { r: 1, g: 1, b: 1, a: 1 },
        dark: { r: 27 / 255, g: 32 / 255, b: 44 / 255, a: 1 },
      },
      {
        name: 'bg/elevated',
        light: { r: 1, g: 1, b: 1, a: 1 },
        dark: { r: 36 / 255, g: 43 / 255, b: 59 / 255, a: 1 },
      },
      {
        name: 'bg/overlay',
        light: { r: 244 / 255, g: 244 / 255, b: 245 / 255, a: 1 },
        dark: { r: 31 / 255, g: 38 / 255, b: 53 / 255, a: 1 },
      },
      {
        name: 'brand/primary',
        light: { r: 154 / 255, g: 88 / 255, b: 0 / 255, a: 1 },
        dark: { r: 255 / 255, g: 200 / 255, b: 55 / 255, a: 1 },
      },
      {
        name: 'border/default',
        light: { r: 228 / 255, g: 228 / 255, b: 231 / 255, a: 1 },
        dark: { r: 44 / 255, g: 53 / 255, b: 71 / 255, a: 1 },
      },
      {
        name: 'border/subtle',
        light: { r: 244 / 255, g: 244 / 255, b: 245 / 255, a: 1 },
        dark: { r: 31 / 255, g: 38 / 255, b: 53 / 255, a: 1 },
      },
      {
        name: 'border/strong',
        light: { r: 154 / 255, g: 88 / 255, b: 0 / 255, a: 1 },
        dark: { r: 255 / 255, g: 200 / 255, b: 55 / 255, a: 1 },
      },
      {
        name: 'text/primary',
        light: { r: 24 / 255, g: 24 / 255, b: 27 / 255, a: 1 },
        dark: { r: 241 / 255, g: 245 / 255, b: 249 / 255, a: 1 },
      },
      {
        name: 'text/secondary',
        light: { r: 82 / 255, g: 82 / 255, b: 91 / 255, a: 1 },
        dark: { r: 148 / 255, g: 163 / 255, b: 184 / 255, a: 1 },
      },
      {
        name: 'text/muted',
        light: { r: 113 / 255, g: 113 / 255, b: 122 / 255, a: 1 },
        dark: { r: 100 / 255, g: 116 / 255, b: 139 / 255, a: 1 },
      },
    ];

    const localVars = await figma.variables.getLocalVariablesAsync();
    const varMap = new Map();
    localVars
      .filter((v) => v.variableCollectionId === localColl.id)
      .forEach((v) => varMap.set(v.name, v));

    for (const td of tokenDefs) {
      let v = varMap.get(td.name);
      if (!v) {
        v = figma.variables.createVariable(td.name, localColl, 'COLOR');
        varMap.set(td.name, v);
      }
      v.setValueForMode(lightModeId, td.light);
      v.setValueForMode(darkModeId, td.dark);
    }

    const vBrandPri = varMap.get('brand/primary');
    const vBgBase = varMap.get('bg/base');
    const vBgSurface = varMap.get('bg/surface');
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

    // 3. SVG Glyphs Definitions
    const svgDatabase = {
      Seed: {
        24: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#ffc837" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M 4 21 L 10 20 L 14 20 L 20 21" /><path d="M 12 12 C 10 14 10 18 12 20 C 14 18 14 14 12 12 Z" /><path d="M 12 13 L 12 19" /><path d="M 12 12 L 12 6" /><path d="M 12 6 L 7 3" /><path d="M 12 6 L 12 2" /><path d="M 12 6 L 17 3" /></svg>`,
        48: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none" stroke="#ffc837" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M 8 43 L 18 40 L 24 41 L 30 40 L 40 43" /><path d="M 19 44 L 24 41 L 29 44" /><path d="M 24 41 L 24 46" /><path d="M 24 24 C 20 27 20 35 24 39 C 28 35 28 27 24 24 Z" /><path d="M 24 25 L 24 37" /><path d="M 22 27 C 21 30 21 34 23 37" /><path d="M 26 27 C 27 30 27 34 25 37" /><path d="M 22 24 L 26 24" /><path d="M 24 24 L 24 11" /><path d="M 24 11 L 13 6" /><path d="M 24 11 L 18 4" /><path d="M 24 11 L 24 3" /><path d="M 24 11 L 30 4" /><path d="M 24 11 L 35 6" /><path d="M 16 8 L 17 6" /><path d="M 32 8 L 31 6" /></svg>`,
        96: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" fill="none" stroke="#ffc837" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M 16 86 L 36 80 L 48 82 L 60 80 L 80 86" /><path d="M 38 88 L 48 82 L 58 88" /><path d="M 48 82 L 48 91" /><path d="M 28 84 L 34 82" /><path d="M 68 84 L 62 82" /><path d="M 48 48 C 40 54 40 70 48 78 C 56 70 56 54 48 48 Z" /><path d="M 48 50 L 48 75" /><path d="M 44 53 C 42 60 42 68 46 75" /><path d="M 52 53 C 54 60 54 68 50 75" /><path d="M 43 54 L 39 51" /><path d="M 53 54 L 57 51" /><path d="M 44 60 L 40 58" /><path d="M 52 60 L 56 58" /><path d="M 44 48 L 52 48" /><path d="M 48 48 L 48 22" /><path d="M 48 22 L 24 12" /><path d="M 48 22 L 32 8" /><path d="M 48 22 L 41 5" /><path d="M 48 22 L 48 4" /><path d="M 48 22 L 55 5" /><path d="M 48 22 L 64 8" /><path d="M 48 22 L 72 12" /><path d="M 30 15 L 32 11" /><path d="M 66 15 L 64 11" /><path d="M 37 12 L 40 9" /><path d="M 59 12 L 56 9" /><path d="M 44 10 L 46 7" /><path d="M 52 10 L 50 7" /></svg>`,
      },
      Sprout: {
        24: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#ffc837" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M 3 21 L 9 19 L 12 21 L 15 19 L 21 21" /><path d="M 12 21 L 12 23" /><path d="M 12 19 C 11.5 15 12.5 13 12 10" /><path d="M 12 11 C 9 9 5 10 5 13 C 5 16 10 15 12 12" /><path d="M 12 11 C 15 9 19 10 19 13 C 19 16 14 15 12 12" /><path d="M 12 9 L 12 5" /></svg>`,
        48: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none" stroke="#ffc837" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M 6 42 L 18 38 L 24 41 L 30 38 L 42 42" /><path d="M 24 41 L 24 46" /><path d="M 12 40 L 16 43" /><path d="M 36 40 L 32 43" /><path d="M 24 39 C 23 31 25 26 24 20" /><path d="M 24 23 C 18 19 10 20 10 26 C 10 32 20 31 24 25" /><path d="M 15 26 L 21 25" /><path d="M 24 23 C 30 19 38 20 38 26 C 38 32 28 31 24 25" /><path d="M 33 26 L 27 25" /><path d="M 24 19 L 24 10" /><path d="M 24 14 L 21 12" /><path d="M 24 12 L 27 10" /></svg>`,
        96: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" fill="none" stroke="#ffc837" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M 12 84 L 36 76 L 48 81 L 60 76 L 84 84" /><path d="M 48 81 L 48 92" /><path d="M 34 82 L 48 81 L 62 82" /><path d="M 22 80 L 30 86" /><path d="M 74 80 L 66 86" /><path d="M 48 78 C 46 62 50 52 48 40" /><path d="M 47 62 L 49 62" /><path d="M 48 46 C 36 38 20 40 20 52 C 20 64 40 62 48 50" /><path d="M 28 52 C 36 50 42 50 48 48" /><path d="M 32 46 L 36 49" /><path d="M 30 57 L 35 54" /><path d="M 48 46 C 60 38 76 40 76 52 C 76 64 56 62 48 50" /><path d="M 68 52 C 60 50 54 50 48 48" /><path d="M 64 46 L 60 49" /><path d="M 66 57 L 61 54" /><path d="M 48 38 L 48 18" /><path d="M 48 26 L 42 22 L 48 19 L 54 22 L 48 26" /><path d="M 48 18 L 48 12" /><path d="M 48 15 L 45 13" /><path d="M 48 15 L 51 13" /></svg>`,
      },
      Rosette: {
        24: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#ffc837" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M 12 22 L 12 3" /><path d="M 12 3 L 8 7 L 10 8 L 7 12 L 9 13 L 6 17 L 12 21" /><path d="M 12 3 L 16 7 L 14 8 L 17 12 L 15 13 L 18 17 L 12 21" /><path d="M 5 21 C 8 19 10 20 12 21" /><path d="M 19 21 C 16 19 14 20 12 21" /></svg>`,
        48: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none" stroke="#ffc837" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M 6 43 L 24 41 L 42 43" /><path d="M 24 41 L 24 5" /><path d="M 24 5 L 17 11 L 20 13 L 14 20 L 18 22 L 12 30 L 17 32 L 11 38 L 24 41" /><path d="M 24 5 L 31 11 L 28 13 L 34 20 L 30 22 L 36 30 L 31 32 L 37 38 L 24 41" /><path d="M 24 12 L 18 11" /><path d="M 24 12 L 30 11" /><path d="M 24 21 L 15 20" /><path d="M 24 21 L 33 20" /><path d="M 24 31 L 13 30" /><path d="M 24 31 L 35 30" /><path d="M 24 37 C 16 35 10 37 7 41 L 11 41" /><path d="M 24 37 C 32 35 38 37 41 41 L 37 41" /></svg>`,
        96: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" fill="none" stroke="#ffc837" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M 12 86 L 48 83 L 84 86" /><path d="M 36 85 L 48 83 L 60 85" /><path d="M 48 84 L 48 10" /><path d="M 48 10 L 40 18 L 44 21" /><path d="M 48 10 L 56 18 L 52 21" /><path d="M 44 21 L 34 29 L 39 32" /><path d="M 52 21 L 62 29 L 57 32" /><path d="M 48 24 L 37 28" /><path d="M 48 24 L 59 28" /><path d="M 39 32 L 28 42 L 34 45" /><path d="M 57 32 L 68 42 L 62 45" /><path d="M 48 37 L 31 41" /><path d="M 48 37 L 65 41" /><path d="M 34 45 L 24 58 L 31 61" /><path d="M 62 45 L 72 58 L 65 61" /><path d="M 48 51 L 27 57" /><path d="M 48 51 L 69 57" /><path d="M 31 61 L 22 75 L 48 83" /><path d="M 65 61 L 74 75 L 48 83" /><path d="M 48 67 L 25 73" /><path d="M 48 67 L 71 73" /><path d="M 48 76 C 32 72 20 76 14 84 L 22 84" /><path d="M 48 76 C 64 72 76 76 82 84 L 74 84" /><path d="M 30 76 L 22 81" /><path d="M 66 76 L 74 81" /></svg>`,
      },
      Pappus: {
        24: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#ffc837" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M 12 21 L 12 17" /><path d="M 12 17 L 12 10" /><path d="M 12 10 L 5 6" /><path d="M 12 10 L 8 4" /><path d="M 12 10 L 12 3" /><path d="M 12 10 L 16 4" /><path d="M 12 10 L 19 6" /><path d="M 6 6 Q 12 3 18 6" /><path d="M 18 10 L 21 8" /><path d="M 21 8 L 22 6" /></svg>`,
        48: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none" stroke="#ffc837" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M 24 44 L 24 35" /><path d="M 21 35 C 21 33 27 33 27 35 Z" /><path d="M 24 33 L 12 28" /><path d="M 24 33 L 15 22" /><path d="M 24 33 L 20 17" /><path d="M 24 33 L 24 15" /><path d="M 24 33 L 28 17" /><path d="M 24 33 L 33 22" /><path d="M 24 33 L 36 28" /><path d="M 13 28 C 12 20 18 15 24 15 C 30 15 36 20 35 28" /><path d="M 20 17 L 19 14" /><path d="M 24 15 L 24 12" /><path d="M 28 17 L 29 14" /><path d="M 37 16 L 34 20" /><path d="M 37 16 L 41 11" /><path d="M 41 11 L 36 8" /><path d="M 41 11 L 41 6" /><path d="M 41 11 L 46 8" /></svg>`,
        96: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" fill="none" stroke="#ffc837" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M 48 88 L 48 68" /><path d="M 42 70 C 44 67 52 67 54 70" /><path d="M 41 68 C 41 64 55 64 55 68 Z" /><path d="M 43 72 L 40 76" /><path d="M 53 72 L 56 76" /><path d="M 48 64 L 22 55" /><path d="M 48 64 L 27 42" /><path d="M 48 64 L 35 32" /><path d="M 48 64 L 42 26" /><path d="M 48 64 L 48 24" /><path d="M 48 64 L 54 26" /><path d="M 48 64 L 61 32" /><path d="M 48 64 L 69 42" /><path d="M 48 64 L 74 55" /><path d="M 23 55 C 22 38 34 24 48 24 C 62 24 74 38 73 55" /><path d="M 35 32 L 32 28" /><path d="M 42 26 L 40 21" /><path d="M 48 24 L 48 18" /><path d="M 54 26 L 56 21" /><path d="M 61 32 L 64 28" /><path d="M 27 42 L 23 39" /><path d="M 69 42 L 73 39" /><path d="M 72 30 L 68 37" /><path d="M 72 30 L 78 20" /><path d="M 78 20 L 70 14" /><path d="M 78 20 L 78 11" /><path d="M 78 20 L 86 14" /><path d="M 78 20 L 84 18" /><path d="M 78 20 L 72 17" /><path d="M 86 10 L 89 5" /><path d="M 89 5 L 85 2" /><path d="M 89 5 L 93 2" /></svg>`,
      },
    };

    // 4. Navigate to Local Components Page
    await figma.loadAllPagesAsync();
    const localCompPage = figma.root.children.find((p) =>
      p.name.includes('Local Components')
    );
    if (!localCompPage) {
      throw new Error('Local Components page not found in document!');
    }
    await figma.setCurrentPageAsync(localCompPage);

    // Clean up prior BLOG-8 temporary frames if any
    const existingSection = localCompPage.findOne(
      (n) => n.type === 'SECTION' && n.name.includes('BLOG-8')
    );
    if (existingSection) existingSection.remove();

    const sec = figma.createSection();
    sec.name = '🌿 BLOG-8 Botanical Herbarium Master Components';
    sec.x = 0;
    sec.y = 800; // Position below existing components
    localCompPage.appendChild(sec);

    // 5. Create GrowthGlyph Component Set
    console.log('🌱 Creating GrowthGlyph Component Set...');
    const stages = ['Seed', 'Sprout', 'Rosette', 'Pappus'];
    const sizes = [24, 48, 96];
    const glyphComponents = [];

    let curX = 40;
    let curY = 40;

    for (const st of stages) {
      for (const sz of sizes) {
        const svgCode = svgDatabase[st][sz];
        const svgNode = figma.createNodeFromSvg(svgCode);
        const comp = figma.createComponent();
        comp.name = `Stage=${st}, Size=${sz}`;
        comp.resize(sz, sz);
        comp.fills = [];
        comp.x = curX;
        comp.y = curY;

        // Move vectors into component and bind stroke
        while (svgNode.children.length > 0) {
          const child = svgNode.children[0];
          comp.appendChild(child);
          if ('strokes' in child) {
            bindStroke(
              child,
              vBrandPri,
              { r: 255 / 255, g: 200 / 255, b: 55 / 255 },
              2
            );
          }
        }
        svgNode.remove();

        sec.appendChild(comp);
        glyphComponents.push(comp);
        curX += sz + 32;
      }
      curX = 40;
      curY += 130;
    }

    const growthGlyphSet = figma.combineAsVariants(glyphComponents, sec);
    growthGlyphSet.name = 'GrowthGlyph';
    growthGlyphSet.x = 40;
    growthGlyphSet.y = 60;

    // Arrange GrowthGlyph variants in a clean 4-row x 3-col grid
    let startX = 40;
    let startY = 60;
    let rowY = startY;
    for (let r = 0; r < stages.length; r++) {
      let colX = startX;
      const st = stages[r];
      for (let c = 0; c < sizes.length; c++) {
        const sz = sizes[c];
        const v = glyphSetChildrenFind(glyphComponents, st, sz);
        if (v) {
          v.x = colX;
          v.y = rowY + (96 - sz) / 2;
        }
        colX += sz + 48;
      }
      rowY += 96 + 40;
    }
    growthGlyphSet.resizeWithoutConstraints(400, rowY - startY + 40);

    function glyphSetChildrenFind(comps, st, sz) {
      return comps.find((c) => c.name === `Stage=${st}, Size=${sz}`);
    }

    // 6. Create SpecimenLabel Component Set
    console.log('🏷️ Creating SpecimenLabel Component Set...');
    const labelVariants = ['Card', 'Plate', 'Tag'];
    const labelComponents = [];

    function createGlyphInstance(stage, size = 24) {
      const match = glyphComponents.find(
        (c) => c.name === `Stage=${stage}, Size=${size}`
      );
      if (match) {
        return match.createInstance();
      }
      const f = figma.createFrame();
      f.resize(size, size);
      return f;
    }

    let ly = growthGlyphSet.y + growthGlyphSet.height + 80;

    for (const vType of labelVariants) {
      for (const st of stages) {
        const comp = figma.createComponent();
        comp.name = `Variant=${vType}, Stage=${st}`;
        comp.layoutMode = 'VERTICAL';
        comp.cornerRadius = 4;
        comp.clipsContent = false;

        if (vType === 'Tag') {
          comp.layoutMode = 'HORIZONTAL';
          comp.primaryAxisSizingMode = 'AUTO';
          comp.counterAxisSizingMode = 'AUTO';
          comp.counterAxisAlignItems = 'CENTER';
          comp.paddingLeft = 10;
          comp.paddingRight = 10;
          comp.paddingTop = 4;
          comp.paddingBottom = 4;
          comp.itemSpacing = 8;
          bindFill(comp, vBgSurface, { r: 27 / 255, g: 32 / 255, b: 44 / 255 });
          bindStroke(
            comp,
            vBorder,
            { r: 44 / 255, g: 53 / 255, b: 71 / 255 },
            1
          );

          comp.appendChild(createGlyphInstance(st, 24));

          const txtNo = figma.createText();
          txtNo.fontName = F.monoBold;
          txtNo.characters = 'SNG-2026-001';
          txtNo.fontSize = 11;
          bindFill(txtNo, vBrandPri, {
            r: 255 / 255,
            g: 200 / 255,
            b: 55 / 255,
          });
          comp.appendChild(txtNo);

          const div = figma.createText();
          div.fontName = F.mono;
          div.characters = '|';
          div.fontSize = 11;
          bindFill(div, vBorder, { r: 44 / 255, g: 53 / 255, b: 71 / 255 });
          comp.appendChild(div);

          const txtDate = figma.createText();
          txtDate.fontName = F.mono;
          txtDate.characters = '2026.11.12';
          txtDate.fontSize = 11;
          bindFill(txtDate, vTextSec, {
            r: 148 / 255,
            g: 163 / 255,
            b: 184 / 255,
          });
          comp.appendChild(txtDate);
        } else if (vType === 'Plate') {
          comp.resize(460, 96);
          comp.layoutMode = 'HORIZONTAL';
          comp.primaryAxisSizingMode = 'FIXED';
          comp.counterAxisSizingMode = 'AUTO';
          comp.counterAxisAlignItems = 'CENTER';
          comp.paddingLeft = 16;
          comp.paddingRight = 16;
          comp.paddingTop = 14;
          comp.paddingBottom = 14;
          comp.itemSpacing = 16;
          bindFill(comp, vBgSurface, { r: 27 / 255, g: 32 / 255, b: 44 / 255 });
          bindStroke(
            comp,
            vBorderStrong,
            { r: 255 / 255, g: 200 / 255, b: 55 / 255 },
            2
          );

          const washiStrip = figma.createFrame();
          washiStrip.name = 'Washi Strip Accent';
          washiStrip.resize(64, 4);
          washiStrip.cornerRadius = 2;
          bindFill(washiStrip, vBrandPri, {
            r: 255 / 255,
            g: 200 / 255,
            b: 55 / 255,
          });
          // We can append glyph box
          const gBox = figma.createFrame();
          gBox.resize(48, 48);
          gBox.cornerRadius = 4;
          gBox.layoutMode = 'HORIZONTAL';
          gBox.primaryAxisAlignItems = 'CENTER';
          gBox.counterAxisAlignItems = 'CENTER';
          bindFill(gBox, vBgOverlay, { r: 31 / 255, g: 38 / 255, b: 53 / 255 });
          bindStroke(
            gBox,
            vBorderSubtle,
            { r: 31 / 255, g: 38 / 255, b: 53 / 255 },
            1
          );
          gBox.appendChild(createGlyphInstance(st, 24));
          comp.appendChild(gBox);

          const midCol = figma.createFrame();
          midCol.layoutMode = 'VERTICAL';
          midCol.primaryAxisSizingMode = 'AUTO';
          midCol.counterAxisSizingMode = 'AUTO';
          midCol.itemSpacing = 2;
          midCol.layoutGrow = 1;
          midCol.fills = [];

          const tSpec = figma.createText();
          tSpec.fontName = F.monoBold;
          tSpec.characters = 'SNG-2026-001 • ' + st.toUpperCase();
          tSpec.fontSize = 11;
          bindFill(tSpec, vBrandPri, {
            r: 255 / 255,
            g: 200 / 255,
            b: 55 / 255,
          });
          midCol.appendChild(tSpec);

          const tTit = figma.createText();
          tTit.fontName = F.uiBold;
          tTit.characters = '돌 틈의 표본실';
          tTit.fontSize = 14;
          bindFill(tTit, vTextPri, {
            r: 241 / 255,
            g: 245 / 255,
            b: 249 / 255,
          });
          midCol.appendChild(tTit);

          const tSci = figma.createText();
          tSci.fontName = F.mono;
          tSci.characters = 'Taraxacum platycarpum';
          tSci.fontSize = 11;
          bindFill(tSci, vTextMuted, {
            r: 100 / 255,
            g: 116 / 255,
            b: 139 / 255,
          });
          midCol.appendChild(tSci);
          comp.appendChild(midCol);

          const rightCol = figma.createFrame();
          rightCol.layoutMode = 'VERTICAL';
          rightCol.primaryAxisSizingMode = 'AUTO';
          rightCol.counterAxisSizingMode = 'AUTO';
          rightCol.counterAxisAlignItems = 'MAX';
          rightCol.itemSpacing = 2;
          rightCol.fills = [];

          const tHab = figma.createText();
          tHab.fontName = F.mono;
          tHab.characters = 'Cloudflare Workers';
          tHab.fontSize = 11;
          bindFill(tHab, vTextSec, {
            r: 148 / 255,
            g: 163 / 255,
            b: 184 / 255,
          });
          rightCol.appendChild(tHab);

          const tDt = figma.createText();
          tDt.fontName = F.mono;
          tDt.characters = '2026.11.12';
          tDt.fontSize = 10;
          bindFill(tDt, vTextMuted, {
            r: 100 / 255,
            g: 116 / 255,
            b: 139 / 255,
          });
          rightCol.appendChild(tDt);
          comp.appendChild(rightCol);
        } else {
          // Card Variant
          comp.resize(360, 260);
          comp.primaryAxisSizingMode = 'AUTO';
          comp.counterAxisSizingMode = 'FIXED';
          comp.paddingLeft = 24;
          comp.paddingRight = 24;
          comp.paddingTop = 24;
          comp.paddingBottom = 20;
          comp.itemSpacing = 16;
          bindFill(comp, vBgSurface, { r: 27 / 255, g: 32 / 255, b: 44 / 255 });
          bindStroke(
            comp,
            vBorderStrong,
            { r: 255 / 255, g: 200 / 255, b: 55 / 255 },
            2
          );

          // Top Header Row
          const topRow = figma.createFrame();
          topRow.layoutMode = 'HORIZONTAL';
          topRow.primaryAxisSizingMode = 'FIXED';
          topRow.counterAxisSizingMode = 'AUTO';
          topRow.counterAxisAlignItems = 'CENTER';
          topRow.primaryAxisAlignItems = 'SPACE_BETWEEN';
          topRow.layoutAlign = 'STRETCH';
          topRow.fills = [];

          const headerCol = figma.createFrame();
          headerCol.layoutMode = 'VERTICAL';
          headerCol.primaryAxisSizingMode = 'AUTO';
          headerCol.counterAxisSizingMode = 'AUTO';
          headerCol.itemSpacing = 2;
          headerCol.fills = [];

          const tagTop = figma.createText();
          tagTop.fontName = F.monoBold;
          tagTop.characters = 'HERBARIUM SPECIMEN SHEET';
          tagTop.fontSize = 10;
          bindFill(tagTop, vBrandPri, {
            r: 255 / 255,
            g: 200 / 255,
            b: 55 / 255,
          });
          headerCol.appendChild(tagTop);

          const mainTit = figma.createText();
          mainTit.fontName = F.uiBold;
          mainTit.characters = '돌 틈의 표본실';
          mainTit.fontSize = 16;
          bindFill(mainTit, vTextPri, {
            r: 241 / 255,
            g: 245 / 255,
            b: 249 / 255,
          });
          headerCol.appendChild(mainTit);

          const sciTit = figma.createText();
          sciTit.fontName = F.mono;
          sciTit.characters = 'Taraxacum platycarpum Dahlst.';
          sciTit.fontSize = 11;
          bindFill(sciTit, vTextMuted, {
            r: 100 / 255,
            g: 116 / 255,
            b: 139 / 255,
          });
          headerCol.appendChild(sciTit);
          topRow.appendChild(headerCol);

          const iconBox = figma.createFrame();
          iconBox.resize(48, 48);
          iconBox.cornerRadius = 4;
          iconBox.layoutMode = 'HORIZONTAL';
          iconBox.primaryAxisAlignItems = 'CENTER';
          iconBox.counterAxisAlignItems = 'CENTER';
          bindFill(iconBox, vBgOverlay, {
            r: 31 / 255,
            g: 38 / 255,
            b: 53 / 255,
          });
          bindStroke(
            iconBox,
            vBorderSubtle,
            { r: 31 / 255, g: 38 / 255, b: 53 / 255 },
            1
          );
          iconBox.appendChild(createGlyphInstance(st, 24));
          topRow.appendChild(iconBox);
          comp.appendChild(topRow);

          // Divider
          const divLine = figma.createFrame();
          divLine.layoutAlign = 'STRETCH';
          divLine.resize(100, 1);
          bindFill(divLine, vBorderSubtle, {
            r: 31 / 255,
            g: 38 / 255,
            b: 53 / 255,
          });
          comp.appendChild(divLine);

          // Metadata Grid (2 columns)
          const metaGrid = figma.createFrame();
          metaGrid.layoutMode = 'VERTICAL';
          metaGrid.primaryAxisSizingMode = 'AUTO';
          metaGrid.counterAxisSizingMode = 'AUTO';
          metaGrid.layoutAlign = 'STRETCH';
          metaGrid.itemSpacing = 10;
          metaGrid.fills = [];

          const row1 = figma.createFrame();
          row1.layoutMode = 'HORIZONTAL';
          row1.primaryAxisSizingMode = 'FIXED';
          row1.counterAxisSizingMode = 'AUTO';
          row1.primaryAxisAlignItems = 'SPACE_BETWEEN';
          row1.layoutAlign = 'STRETCH';
          row1.fills = [];

          const colNo = figma.createFrame();
          colNo.layoutMode = 'VERTICAL';
          colNo.itemSpacing = 2;
          colNo.fills = [];
          const lNo = figma.createText();
          lNo.fontName = F.mono;
          lNo.characters = 'SPECIMEN NO.';
          lNo.fontSize = 9;
          bindFill(lNo, vTextMuted, {
            r: 100 / 255,
            g: 116 / 255,
            b: 139 / 255,
          });
          colNo.appendChild(lNo);
          const vNo = figma.createText();
          vNo.fontName = F.monoBold;
          vNo.characters = 'SNG-2026-001';
          vNo.fontSize = 13;
          bindFill(vNo, vBrandPri, { r: 255 / 255, g: 200 / 255, b: 55 / 255 });
          colNo.appendChild(vNo);
          row1.appendChild(colNo);

          const colDt = figma.createFrame();
          colDt.layoutMode = 'VERTICAL';
          colDt.itemSpacing = 2;
          colDt.counterAxisAlignItems = 'MAX';
          colDt.fills = [];
          const lDt = figma.createText();
          lDt.fontName = F.mono;
          lDt.characters = 'HARVEST DATE';
          lDt.fontSize = 9;
          bindFill(lDt, vTextMuted, {
            r: 100 / 255,
            g: 116 / 255,
            b: 139 / 255,
          });
          colDt.appendChild(lDt);
          const vDt = figma.createText();
          vDt.fontName = F.mono;
          vDt.characters = '2026.11.12';
          vDt.fontSize = 12;
          bindFill(vDt, vTextPri, { r: 241 / 255, g: 245 / 255, b: 249 / 255 });
          colDt.appendChild(vDt);
          row1.appendChild(colDt);
          metaGrid.appendChild(row1);

          const row2 = figma.createFrame();
          row2.layoutMode = 'HORIZONTAL';
          row2.primaryAxisSizingMode = 'FIXED';
          row2.counterAxisSizingMode = 'AUTO';
          row2.primaryAxisAlignItems = 'SPACE_BETWEEN';
          row2.layoutAlign = 'STRETCH';
          row2.fills = [];

          const colSt = figma.createFrame();
          colSt.layoutMode = 'VERTICAL';
          colSt.itemSpacing = 2;
          colSt.fills = [];
          const lSt = figma.createText();
          lSt.fontName = F.mono;
          lSt.characters = 'STAGE';
          lSt.fontSize = 9;
          bindFill(lSt, vTextMuted, {
            r: 100 / 255,
            g: 116 / 255,
            b: 139 / 255,
          });
          colSt.appendChild(lSt);
          const vSt = figma.createText();
          vSt.fontName = F.mono;
          vSt.characters = st;
          vSt.fontSize = 12;
          bindFill(vSt, vTextPri, { r: 241 / 255, g: 245 / 255, b: 249 / 255 });
          colSt.appendChild(vSt);
          row2.appendChild(colSt);

          const colHab = figma.createFrame();
          colHab.layoutMode = 'VERTICAL';
          colHab.itemSpacing = 2;
          colHab.counterAxisAlignItems = 'MAX';
          colHab.fills = [];
          const lHab = figma.createText();
          lHab.fontName = F.mono;
          lHab.characters = 'HABITAT';
          lHab.fontSize = 9;
          bindFill(lHab, vTextMuted, {
            r: 100 / 255,
            g: 116 / 255,
            b: 139 / 255,
          });
          colHab.appendChild(lHab);
          const vHab = figma.createText();
          vHab.fontName = F.mono;
          vHab.characters = 'Cloudflare Workers';
          vHab.fontSize = 12;
          bindFill(vHab, vTextPri, {
            r: 241 / 255,
            g: 245 / 255,
            b: 249 / 255,
          });
          colHab.appendChild(vHab);
          row2.appendChild(colHab);
          metaGrid.appendChild(row2);

          comp.appendChild(metaGrid);

          // Footer
          const botRow = figma.createFrame();
          botRow.layoutMode = 'HORIZONTAL';
          botRow.primaryAxisSizingMode = 'FIXED';
          botRow.counterAxisSizingMode = 'AUTO';
          botRow.primaryAxisAlignItems = 'SPACE_BETWEEN';
          botRow.layoutAlign = 'STRETCH';
          botRow.paddingTop = 8;
          botRow.fills = [];
          bindStroke(
            botRow,
            vBorderSubtle,
            { r: 31 / 255, g: 38 / 255, b: 53 / 255 },
            1
          );
          botRow.strokeAlign = 'INSIDE';

          const curText = figma.createText();
          curText.fontName = F.mono;
          curText.characters = 'CURATOR: The Gardener';
          curText.fontSize = 10;
          bindFill(curText, vTextMuted, {
            r: 100 / 255,
            g: 116 / 255,
            b: 139 / 255,
          });
          botRow.appendChild(curText);

          const mdsText = figma.createText();
          mdsText.fontName = F.mono;
          mdsText.characters = 'MDS v0.1.0 SSOT';
          mdsText.fontSize = 9;
          bindFill(mdsText, vBrandPri, {
            r: 255 / 255,
            g: 200 / 255,
            b: 55 / 255,
          });
          botRow.appendChild(mdsText);
          comp.appendChild(botRow);
        }

        sec.appendChild(comp);
        labelComponents.push(comp);
      }
    }

    const specimenLabelSet = figma.combineAsVariants(labelComponents, sec);
    specimenLabelSet.name = 'SpecimenLabel';
    specimenLabelSet.x = 40;
    specimenLabelSet.y = growthGlyphSet.y + growthGlyphSet.height + 60;

    // Arrange SpecimenLabel variants in clean rows (Tags, Plates, Cards)
    let currentY = 40;
    let tagX = 40;
    for (const st of stages) {
      const tag = labelComponents.find(
        (c) => c.name === `Variant=Tag, Stage=${st}`
      );
      if (tag) {
        tag.x = tagX;
        tag.y = currentY;
        tagX += tag.width + 24;
      }
    }
    currentY += 80;

    let plateX = 40;
    for (const st of stages) {
      const plate = labelComponents.find(
        (c) => c.name === `Variant=Plate, Stage=${st}`
      );
      if (plate) {
        plate.x = plateX;
        plate.y = currentY;
        plateX += plate.width + 32;
      }
    }
    currentY += 140;

    let cardX = 40;
    for (const st of stages) {
      const card = labelComponents.find(
        (c) => c.name === `Variant=Card, Stage=${st}`
      );
      if (card) {
        card.resize(400, card.height);
        card.x = cardX;
        card.y = currentY;
        cardX += card.width + 32;
      }
    }
    currentY += 340;

    specimenLabelSet.resizeWithoutConstraints(
      Math.max(tagX, plateX, cardX) + 40,
      currentY + 40
    );

    if (localColl && darkModeId) {
      sec.setExplicitVariableModeForCollection(localColl, darkModeId);
    }

    sec.resizeWithoutConstraints(
      Math.max(growthGlyphSet.width, specimenLabelSet.width) + 80,
      specimenLabelSet.y + specimenLabelSet.height + 80
    );

    figma.viewport.scrollAndZoomIntoView([sec]);
    console.log(
      '✅ [BLOG-8 SSOT] Botanical Herbarium components registered successfully!'
    );

    resolve({
      status: 'SUCCESS',
      sectionId: sec.id,
      growthGlyphSetId: growthGlyphSet.id,
      specimenLabelSetId: specimenLabelSet.id,
      glyphVariantsCount: glyphComponents.length,
      labelVariantsCount: labelComponents.length,
    });
  } catch (err) {
    console.error('❌ Error in BLOG-8 Herbarium automation:', err);
    resolve({ status: 'ERROR', error: String(err) });
  }
});
