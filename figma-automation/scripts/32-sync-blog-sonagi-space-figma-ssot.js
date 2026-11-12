/**
 * Figma Automation Script: 32-sync-blog-sonagi-space-figma-ssot.js
 * Task: BLOG-4 [Figma] 디지털 정원 & The Gardener 에세이/RSS 위젯 blog-sonagi-space 정본 배치 (Final SSOT)
 * Target File: blog-sonagi-space (Key: lQnGrSsBkyCCckHBjftEMH)
 *
 * Requirements & Core Architecture:
 * 1. Local 'MDS v0.1.0 Colors' Collection 구축:
 *    - 원격 라이브러리 캐시 지연으로 인한 붉은 팥죽색/초콜릿색(#47211b) 왜곡을 원천 해결.
 *    - Light (Warm Paper #fbfbfa, White #ffffff, Bronze Gold #b86a04) & Dark (Obsidian #12151d, Amber #ffc837) 로컬 컬렉션 선언.
 * 2. 03. About (Philosophy & Ecosystem) 페이지 (Desktop 46:604):
 *    - The Gardener 인트로 & 에디토리얼 타이틀
 *    - [[The Gardener]] 핵심 집필 철학 에세이 스포트라이트 카드 (Evergreen 배지, 2px Stem)
 *    - 3대 핵심 철학 (Thinking in Public, Everything as Code, Interconnected Knowledge) 346px 균등 분할
 *    - 4대 생태계 허브 (MDS, Portfolio, Garden, Blog) 530px 2x2 반응형 카드 그리드
 *    - RssSubscribeWidget (Card 규격) 장착
 * 3. Local Components 페이지:
 *    - RssSubscribeWidget Component Set (Variant=Card, Variant=Compact)
 *    - GrowthBadge Component Set (Status=Seed, Status=Sapling, Status=Evergreen)
 *    - HoverPreview (Tooltip State) Component
 * 4. Landing / Unified Detail 전역 버튼 & 카드 리바인딩 완료.
 */

return new Promise(async (resolve) => {
  try {
    console.log(
      '🚀 [BLOG-4 SSOT Final] Syncing blog-sonagi-space with Local MDS v0.1.0 Collection...'
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
    };

    // 2. Fetch or Create Local MDS v0.1.0 Colors Collection
    const colls = await figma.variables.getLocalVariableCollectionsAsync();
    let localColl = colls.find((c) => c.name === 'MDS v0.1.0 Colors');
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
        light: { r: 184 / 255, g: 106 / 255, b: 4 / 255, a: 1 },
        dark: { r: 255 / 255, g: 200 / 255, b: 55 / 255, a: 1 },
      },
      {
        name: 'brand/primary',
        light: { r: 184 / 255, g: 106 / 255, b: 4 / 255, a: 1 },
        dark: { r: 255 / 255, g: 200 / 255, b: 55 / 255, a: 1 },
      },
      {
        name: 'brand/primary-hover',
        light: { r: 158 / 255, g: 90 / 255, b: 3 / 255, a: 1 },
        dark: { r: 255 / 255, g: 214 / 255, b: 102 / 255, a: 1 },
      },
      {
        name: 'text/inverse',
        light: { r: 1, g: 1, b: 1, a: 1 },
        dark: { r: 18 / 255, g: 21 / 255, b: 29 / 255, a: 1 },
      },
      {
        name: 'state/success',
        light: { r: 22 / 255, g: 101 / 255, b: 52 / 255, a: 1 },
        dark: { r: 74 / 255, g: 222 / 255, b: 128 / 255, a: 1 },
      },
      {
        name: 'state/info',
        light: { r: 37 / 255, g: 99 / 255, b: 235 / 255, a: 1 },
        dark: { r: 96 / 255, g: 165 / 255, b: 250 / 255, a: 1 },
      },
      {
        name: 'state/warning',
        light: { r: 133 / 255, g: 77 / 255, b: 14 / 255, a: 1 },
        dark: { r: 250 / 255, g: 204 / 255, b: 21 / 255, a: 1 },
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

    const vBgBase = varMap.get('bg/base');
    const vBgSurface = varMap.get('bg/surface');
    const vBorder = varMap.get('border/default');
    const vTextPri = varMap.get('text/primary');
    const vTextSec = varMap.get('text/secondary');
    const vBrandPri = varMap.get('brand/primary');
    const vTextInverse = varMap.get('text/inverse');

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

    // 3. Official Components
    const bSuccessPill = await figma.getNodeByIdAsync('33:10');
    const bInfoPill = await figma.getNodeByIdAsync('32:31');
    const bInfoLabel = await figma.getNodeByIdAsync('33:8');
    const bWarningPill = await figma.getNodeByIdAsync('33:14');

    const btnPriMd = await figma.getNodeByIdAsync('21:189');
    const btnSecMd = await figma.getNodeByIdAsync('21:191');
    const btnPriSm = await figma.getNodeByIdAsync('21:209');
    const btnSecSm = await figma.getNodeByIdAsync('21:211');

    // Resolve the published core icon masters by name at runtime. The node ids
    // in this sync script are intentionally kept for the existing MDS controls,
    // but icon masters can be re-published and receive new session ids.
    const iconNameAliases = new Map([
      ['External-link', ['External-link', 'External Link', 'Arrow-up-right']],
      ['Rss', ['Rss', 'RSS']],
    ]);

    function findCoreIcon(name) {
      const aliases = iconNameAliases.get(name) || [name];
      return (
        figma.root.findAll(
          (n) =>
            n.type === 'COMPONENT' &&
            aliases.some(
              (alias) =>
                n.name === `❖ Icon/${alias}` ||
                n.name === `Icon/${alias}` ||
                n.name === alias
            )
        )[0] || null
      );
    }

    function fillIconWrapper(wrapper, iconName) {
      if (!wrapper || wrapper.type !== 'INSTANCE') return false;
      const master = findCoreIcon(iconName);
      const nested = wrapper.findAll((n) => n.type === 'INSTANCE')[0];
      if (!master || !nested || typeof nested.swapComponent !== 'function') {
        return false;
      }
      try {
        nested.swapComponent(master);
        nested.name = `Core Icon • ${iconName}`;
        return true;
      } catch (error) {
        console.warn(`Could not fill Icon Wrapper with ${iconName}:`, error);
        return false;
      }
    }

    function createBadge(label, color = 'info', variant = 'pill') {
      let master = bInfoPill;
      if (color === 'success') master = bSuccessPill;
      else if (color === 'warning') master = bWarningPill;
      else if (variant === 'label') master = bInfoLabel;

      const inst = master.createInstance();
      const txt = inst.findOne((n) => n.type === 'TEXT');
      if (txt) txt.characters = label;
      return inst;
    }

    function createBtn(label, type = 'primary', size = 'md', icon = 'none') {
      let master = btnPriMd;
      if (type === 'secondary' && size === 'md') master = btnSecMd;
      else if (type === 'primary' && size === 'sm') master = btnPriSm;
      else if (type === 'secondary' && size === 'sm') master = btnSecSm;

      const inst = master.createInstance();
      const txt = inst.findOne(
        (n) => n.type === 'TEXT' && (n.name === 'Continue' || n.characters)
      );
      if (txt) txt.characters = label;
      const icons = inst.findAll(
        (n) => n.type === 'INSTANCE' && n.name === 'Icon Wrapper'
      );
      if (icons.length >= 2) {
        icons[0].visible = icon === 'copy' || icon === 'rss';
        icons[1].visible = icon === 'arrow' || icon === 'ext';
        const iconName =
          icon === 'copy'
            ? 'Copy'
            : icon === 'rss'
              ? 'Rss'
              : icon === 'ext'
                ? 'External-link'
                : 'Arrow-right';
        const active = icon === 'copy' || icon === 'rss' ? icons[0] : icons[1];
        fillIconWrapper(active, iconName);
      }
      return inst;
    }

    function createHugRow(
      itemSpacing = 8,
      alignItems = 'CENTER',
      justify = 'MIN'
    ) {
      const row = figma.createFrame();
      row.layoutMode = 'HORIZONTAL';
      row.primaryAxisSizingMode = 'AUTO';
      row.counterAxisSizingMode = 'AUTO';
      row.counterAxisAlignItems = alignItems;
      if (justify === 'SPACE_BETWEEN') {
        row.primaryAxisAlignItems = 'SPACE_BETWEEN';
        row.primaryAxisSizingMode = 'FIXED';
        row.layoutAlign = 'STRETCH';
      } else {
        row.primaryAxisAlignItems = justify;
      }
      row.itemSpacing = itemSpacing;
      row.fills = [];
      return row;
    }

    function createHugCol(itemSpacing = 8) {
      const col = figma.createFrame();
      col.layoutMode = 'VERTICAL';
      col.primaryAxisSizingMode = 'AUTO';
      col.counterAxisSizingMode = 'AUTO';
      col.itemSpacing = itemSpacing;
      col.fills = [];
      return col;
    }

    // 4. Update 03. About Page
    await figma.loadAllPagesAsync();
    const aboutPage = figma.root.children.find((p) =>
      p.name.includes('03. About')
    );
    await figma.setCurrentPageAsync(aboutPage);

    const desktop = aboutPage.findOne((n) => n.name === 'About (Desktop)');
    const contentCont = desktop.findOne((n) => n.name === 'Content Container');

    while (contentCont.children.length > 0) {
      contentCont.children[0].remove();
    }

    contentCont.layoutMode = 'VERTICAL';
    contentCont.primaryAxisSizingMode = 'AUTO';
    contentCont.counterAxisSizingMode = 'FIXED';
    contentCont.counterAxisAlignItems = 'CENTER';
    contentCont.paddingTop = 64;
    contentCont.paddingBottom = 80;
    contentCont.itemSpacing = 64;
    desktop.primaryAxisSizingMode = 'AUTO';

    desktop.setExplicitVariableModeForCollection(localColl, darkModeId);
    bindFill(desktop, vBgBase, { r: 18 / 255, g: 21 / 255, b: 29 / 255 });

    const mainCont = figma.createFrame();
    mainCont.name = 'Editorial Centered Container (max-w-[1080px])';
    mainCont.resize(1080, 100);
    mainCont.layoutMode = 'VERTICAL';
    mainCont.primaryAxisSizingMode = 'AUTO';
    mainCont.counterAxisSizingMode = 'FIXED';
    mainCont.itemSpacing = 48;
    mainCont.fills = [];
    contentCont.appendChild(mainCont);

    // 1. Hero
    const heroBox = createHugCol(20);
    heroBox.name = '1. Hero / Gardener Intro';
    heroBox.layoutAlign = 'STRETCH';

    const heroBadgeRow = createHugRow(8);
    heroBadgeRow.appendChild(createBadge('🌱 The Gardener', 'success', 'pill'));
    heroBadgeRow.appendChild(createBadge('Digital Garden', 'info', 'label'));
    heroBadgeRow.appendChild(createBadge('MDS v0.1.0 SSOT', 'info', 'label'));
    heroBox.appendChild(heroBadgeRow);

    const heroTitle = figma.createText();
    heroTitle.fontName = F.display;
    heroTitle.characters =
      '쏟아지는 영감의 씨앗을 심고,\n유기적인 사유의 숲을 가꿉니다.';
    heroTitle.fontSize = 44;
    heroTitle.lineHeight = { value: 125, unit: 'PERCENT' };
    bindFill(heroTitle, vTextPri, { r: 241 / 255, g: 245 / 255, b: 249 / 255 });
    heroTitle.textAutoResize = 'HEIGHT';
    heroTitle.layoutAlign = 'STRETCH';
    heroBox.appendChild(heroTitle);

    const heroDesc = figma.createText();
    heroDesc.fontName = F.uiReg;
    heroDesc.characters =
      '소나기 스페이스(Sonagi Space)는 시간순으로 휘발되는 기존 블로그(Stream)의 한계를 넘어, 시간이 지남에 따라 진화하고 교차 수분되는 지식 정원(Digital Garden)입니다. 정원사는 완결된 지식의 권위자가 아닌, 불완전한 생각의 씨앗을 열린 공간에서 가꾸고 돌보는 관리자입니다.';
    heroDesc.fontSize = 17;
    heroDesc.lineHeight = { value: 165, unit: 'PERCENT' };
    bindFill(heroDesc, vTextSec, { r: 148 / 255, g: 163 / 255, b: 184 / 255 });
    heroDesc.textAutoResize = 'HEIGHT';
    heroDesc.layoutAlign = 'STRETCH';
    heroBox.appendChild(heroDesc);
    mainCont.appendChild(heroBox);

    // 2. Spotlight
    const essaySpotlight = createHugCol(16);
    essaySpotlight.name = '2. Core Essay Spotlight • [[The Gardener]]';
    essaySpotlight.layoutAlign = 'STRETCH';

    const ehRow = createHugRow(0, 'CENTER', 'SPACE_BETWEEN');
    const ehTitle = figma.createText();
    ehTitle.fontName = F.uiBold;
    ehTitle.characters = '정원사 집필 철학 에세이';
    ehTitle.fontSize = 24;
    bindFill(ehTitle, vTextPri, { r: 241 / 255, g: 245 / 255, b: 249 / 255 });
    ehRow.appendChild(ehTitle);
    ehRow.appendChild(createBadge('Evergreen', 'success', 'pill'));
    essaySpotlight.appendChild(ehRow);

    const essayCard = figma.createFrame();
    essayCard.name = 'Essay Card (Official True 2px Stem)';
    essayCard.layoutMode = 'VERTICAL';
    essayCard.primaryAxisSizingMode = 'AUTO';
    essayCard.counterAxisSizingMode = 'FIXED';
    essayCard.paddingLeft = 32;
    essayCard.paddingRight = 32;
    essayCard.paddingTop = 28;
    essayCard.paddingBottom = 28;
    essayCard.cornerRadius = 4;
    essayCard.itemSpacing = 20;
    bindFill(essayCard, vBgSurface, { r: 27 / 255, g: 32 / 255, b: 44 / 255 });
    bindStroke(
      essayCard,
      vBrandPri,
      { r: 255 / 255, g: 200 / 255, b: 55 / 255 },
      2
    );
    essayCard.layoutAlign = 'STRETCH';

    const ecMeta = figma.createText();
    ecMeta.fontName = F.mono;
    ecMeta.characters = '[[The Gardener]] • 정원사의 헌법';
    ecMeta.fontSize = 13;
    bindFill(ecMeta, vBrandPri, { r: 255 / 255, g: 200 / 255, b: 55 / 255 });
    essayCard.appendChild(ecMeta);

    const ecHeading = figma.createText();
    ecHeading.fontName = F.serif;
    ecHeading.characters = 'The Gardener: 디지털 정원사의 철학과 집필 원칙';
    ecHeading.fontSize = 26;
    bindFill(ecHeading, vTextPri, { r: 241 / 255, g: 245 / 255, b: 249 / 255 });
    essayCard.appendChild(ecHeading);

    const ecQuote = figma.createText();
    ecQuote.fontName = F.uiReg;
    ecQuote.characters =
      '“정원은 완성을 목표로 하지 않는다. 그것은 지속적인 보살핌과 변화의 과정 그 자체다.” 완벽주의의 덫(Perfection Trap)에서 벗어나, 생각의 씨앗(Seed)부터 상록수(Evergreen)에 이르는 생명주기와 위키링크 백링크를 통한 양방향 지식 네트워크의 멘탈 모델을 기술한 에세이입니다.';
    ecQuote.fontSize = 15;
    ecQuote.lineHeight = { value: 165, unit: 'PERCENT' };
    bindFill(ecQuote, vTextSec, { r: 148 / 255, g: 163 / 255, b: 184 / 255 });
    ecQuote.textAutoResize = 'HEIGHT';
    ecQuote.layoutAlign = 'STRETCH';
    essayCard.appendChild(ecQuote);

    const ecFooter = createHugRow(0, 'CENTER', 'SPACE_BETWEEN');
    ecFooter.paddingTop = 16;
    bindStroke(ecFooter, vBorder, { r: 44 / 255, g: 53 / 255, b: 71 / 255 }, 1);
    ecFooter.strokeAlign = 'INSIDE';

    const tagList = createHugRow(8);
    ['Philosophy', 'Writing', 'MDS', 'Backlinks'].forEach((t) => {
      tagList.appendChild(createBadge(t, 'info', 'label'));
    });
    ecFooter.appendChild(tagList);
    ecFooter.appendChild(
      createBtn('에세이 전문 읽기', 'primary', 'md', 'arrow')
    );
    essayCard.appendChild(ecFooter);
    essaySpotlight.appendChild(essayCard);
    mainCont.appendChild(essaySpotlight);

    // 3. Core Philosophy
    const philoSection = createHugCol(16);
    philoSection.name = '3. Core Garden Philosophy (3대 철학 카드)';
    philoSection.layoutAlign = 'STRETCH';

    const phHead = createHugCol(4);
    const phTitle = figma.createText();
    phTitle.fontName = F.uiBold;
    phTitle.characters = 'Core Garden Philosophy';
    phTitle.fontSize = 24;
    bindFill(phTitle, vTextPri, { r: 241 / 255, g: 245 / 255, b: 249 / 255 });
    const phSub = figma.createText();
    phSub.fontName = F.uiReg;
    phSub.characters = '정원을 경작하며 지키는 세 가지 기본 원칙입니다.';
    phSub.fontSize = 14;
    bindFill(phSub, vTextSec, { r: 148 / 255, g: 163 / 255, b: 184 / 255 });
    phHead.appendChild(phTitle);
    phHead.appendChild(phSub);
    philoSection.appendChild(phHead);

    const phGrid = figma.createFrame();
    phGrid.layoutMode = 'HORIZONTAL';
    phGrid.primaryAxisSizingMode = 'FIXED';
    phGrid.counterAxisSizingMode = 'AUTO';
    phGrid.itemSpacing = 20;
    phGrid.fills = [];
    phGrid.layoutAlign = 'STRETCH';
    philoSection.appendChild(phGrid);

    const phCards = [
      {
        tag: 'TRANSPARENCY',
        icon: '🌱',
        title: '1. Thinking in Public',
        desc: '완벽해질 때까지 서랍 속에 사유를 숨겨두지 않습니다. 거친 생각의 씨앗(Seed)부터 세상과 호흡하며 비판과 피드백을 통해 튼튼한 상록수(Evergreen)로 키워나갑니다.',
      },
      {
        tag: 'INTEGRITY',
        icon: '⚡',
        title: '2. Everything as Code',
        desc: '디자인 토큰부터 인프라, 위키 역참조 그래프까지 모든 지식과 인터페이스를 투명하고 재현 가능한 코드로 선언합니다. 단 하나의 진실 공급원(SSOT) 원칙을 수호합니다.',
      },
      {
        tag: 'NETWORK',
        icon: '🕸️',
        title: '3. Interconnected Knowledge',
        desc: '고립된 글은 생명력을 잃습니다. 위키링크([[]])와 자동 백링크를 통해 디자인 시스템, 실제 프로젝트, 그리고 기술적 에세이가 거미줄처럼 양방향으로 연결되어 서로를 강화합니다.',
      },
    ];

    phCards.forEach((c) => {
      const card = figma.createFrame();
      card.layoutMode = 'VERTICAL';
      card.primaryAxisSizingMode = 'AUTO';
      card.counterAxisSizingMode = 'FIXED';
      card.resize(346, 100);
      card.paddingLeft = 24;
      card.paddingRight = 24;
      card.paddingTop = 24;
      card.paddingBottom = 24;
      card.cornerRadius = 4;
      card.itemSpacing = 14;
      bindFill(card, vBgSurface, { r: 27 / 255, g: 32 / 255, b: 44 / 255 });
      bindStroke(card, vBorder, { r: 44 / 255, g: 53 / 255, b: 71 / 255 }, 2);

      const topRow = createHugRow(0, 'CENTER', 'SPACE_BETWEEN');
      const icNode = figma.createText();
      icNode.fontName = F.uiBold;
      icNode.characters = c.icon;
      icNode.fontSize = 20;
      topRow.appendChild(icNode);
      topRow.appendChild(createBadge(c.tag, 'info', 'label'));
      card.appendChild(topRow);

      const tNode = figma.createText();
      tNode.fontName = F.uiBold;
      tNode.characters = c.title;
      tNode.fontSize = 17;
      bindFill(tNode, vTextPri, { r: 241 / 255, g: 245 / 255, b: 249 / 255 });
      card.appendChild(tNode);

      const dNode = figma.createText();
      dNode.fontName = F.uiReg;
      dNode.characters = c.desc;
      dNode.fontSize = 13;
      dNode.lineHeight = { value: 160, unit: 'PERCENT' };
      bindFill(dNode, vTextSec, { r: 148 / 255, g: 163 / 255, b: 184 / 255 });
      dNode.textAutoResize = 'HEIGHT';
      dNode.layoutAlign = 'STRETCH';
      card.appendChild(dNode);

      phGrid.appendChild(card);
    });
    mainCont.appendChild(philoSection);

    // 4. Ecosystem
    const ecoSection = createHugCol(16);
    ecoSection.name = '4. Interconnected Ecosystem (4대 생태계 허브)';
    ecoSection.layoutAlign = 'STRETCH';
    mainCont.appendChild(ecoSection);

    const ecoHead = createHugCol(4);
    const ecoTitle = figma.createText();
    ecoTitle.fontName = F.uiBold;
    ecoTitle.characters = 'Interconnected Ecosystem';
    ecoTitle.fontSize = 24;
    bindFill(ecoTitle, vTextPri, { r: 241 / 255, g: 245 / 255, b: 249 / 255 });
    const ecoSub = figma.createText();
    ecoSub.fontName = F.uiReg;
    ecoSub.characters =
      '소나기 스페이스를 구성하는 4대 축과 유기적 양방향 링크 체계입니다.';
    ecoSub.fontSize = 14;
    bindFill(ecoSub, vTextSec, { r: 148 / 255, g: 163 / 255, b: 184 / 255 });
    ecoHead.appendChild(ecoTitle);
    ecoHead.appendChild(ecoSub);
    ecoSection.appendChild(ecoHead);

    const ecoGrid = createHugCol(20);
    ecoGrid.layoutAlign = 'STRETCH';
    ecoSection.appendChild(ecoGrid);

    const row1 = figma.createFrame();
    row1.layoutMode = 'HORIZONTAL';
    row1.primaryAxisSizingMode = 'FIXED';
    row1.counterAxisSizingMode = 'AUTO';
    row1.itemSpacing = 20;
    row1.fills = [];
    row1.layoutAlign = 'STRETCH';

    const row2 = figma.createFrame();
    row2.layoutMode = 'HORIZONTAL';
    row2.primaryAxisSizingMode = 'FIXED';
    row2.counterAxisSizingMode = 'AUTO';
    row2.itemSpacing = 20;
    row2.fills = [];
    row2.layoutAlign = 'STRETCH';

    const ecoHubs = [
      {
        badge: 'Design System',
        url: 'design.sonagi.space',
        title: 'MDS (Mindulle Design System)',
        desc: 'W3C 표준 JSON 기반의 NPM 토큰 패키지(@mindulle/tokens)와 Tailwind CSS 기반 React 컴포넌트 시스템. 블로그의 모든 시각적 의미론을 규정하는 원천입니다.',
        btn: 'MDS 공식 문서 둘러보기',
        row: row1,
      },
      {
        badge: 'Projects & Portfolio',
        url: '/projects',
        title: 'Portfolio & Artifacts',
        desc: '실제 사용자와 만나는 프로덕트 디자인과 소프트웨어 엔지니어링 산출물. 화면 뒤에 숨은 사유의 과정과 아키텍처적 가설은 정원의 노트들과 양방향으로 연결되어 있습니다.',
        btn: '프로젝트 아카이브 보기',
        row: row1,
      },
      {
        badge: 'Knowledge Base',
        url: '/notes',
        title: 'Digital Garden & Graph',
        desc: '카테고리별 필터와 위키 호버 팝오버, 지식 그래프가 결합된 사유의 공간입니다. 각 노트를 넘나들며 생각의 맥락을 입체적으로 탐색할 수 있습니다.',
        btn: '정원 탐색하기',
        row: row2,
      },
      {
        badge: 'Editorial Articles',
        url: '/blog',
        title: 'Curated Articles',
        desc: '정원에서 검증된 상록수 글들과 구조화된 시리즈들을 아티클 형태로 정제하여 발행하는 편집 공간입니다.',
        btn: '블로그 글 목록 보기',
        row: row2,
      },
    ];

    ecoHubs.forEach((hub) => {
      const card = figma.createFrame();
      card.layoutMode = 'VERTICAL';
      card.primaryAxisSizingMode = 'AUTO';
      card.counterAxisSizingMode = 'FIXED';
      card.resize(530, 100);
      card.primaryAxisAlignItems = 'SPACE_BETWEEN';
      card.paddingLeft = 24;
      card.paddingRight = 24;
      card.paddingTop = 24;
      card.paddingBottom = 24;
      card.cornerRadius = 4;
      card.itemSpacing = 16;
      bindFill(card, vBgSurface, { r: 27 / 255, g: 32 / 255, b: 44 / 255 });
      bindStroke(card, vBorder, { r: 44 / 255, g: 53 / 255, b: 71 / 255 }, 2);

      const topPart = createHugCol(12);
      topPart.layoutAlign = 'STRETCH';

      const metaRow = createHugRow(0, 'CENTER', 'SPACE_BETWEEN');
      metaRow.appendChild(createBadge(hub.badge, 'info', 'label'));

      const uTxt = figma.createText();
      uTxt.fontName = F.mono;
      uTxt.characters = hub.url;
      uTxt.fontSize = 11;
      bindFill(uTxt, vTextSec, { r: 148 / 255, g: 163 / 255, b: 184 / 255 });
      metaRow.appendChild(uTxt);
      topPart.appendChild(metaRow);

      const hTitle = figma.createText();
      hTitle.fontName = F.uiBold;
      hTitle.characters = hub.title;
      hTitle.fontSize = 18;
      bindFill(hTitle, vTextPri, { r: 241 / 255, g: 245 / 255, b: 249 / 255 });
      topPart.appendChild(hTitle);

      const hDesc = figma.createText();
      hDesc.fontName = F.uiReg;
      hDesc.characters = hub.desc;
      hDesc.fontSize = 13;
      hDesc.lineHeight = { value: 160, unit: 'PERCENT' };
      bindFill(hDesc, vTextSec, { r: 148 / 255, g: 163 / 255, b: 184 / 255 });
      hDesc.textAutoResize = 'HEIGHT';
      hDesc.layoutAlign = 'STRETCH';
      topPart.appendChild(hDesc);

      card.appendChild(topPart);
      card.appendChild(createBtn(hub.btn, 'secondary', 'sm', 'arrow'));
      hub.row.appendChild(card);
    });
    ecoGrid.appendChild(row1);
    ecoGrid.appendChild(row2);

    // 5. RssSubscribeWidget
    const rssCard = figma.createFrame();
    rssCard.name = 'RssSubscribeWidget (Card Spec)';
    rssCard.layoutMode = 'VERTICAL';
    rssCard.primaryAxisSizingMode = 'AUTO';
    rssCard.counterAxisSizingMode = 'FIXED';
    rssCard.resize(1080, 100);
    rssCard.paddingLeft = 32;
    rssCard.paddingRight = 32;
    rssCard.paddingTop = 28;
    rssCard.paddingBottom = 28;
    rssCard.cornerRadius = 4;
    rssCard.itemSpacing = 20;
    bindFill(rssCard, vBgSurface, { r: 27 / 255, g: 32 / 255, b: 44 / 255 });
    bindStroke(rssCard, vBorder, { r: 44 / 255, g: 53 / 255, b: 71 / 255 }, 2);
    rssCard.layoutAlign = 'STRETCH';

    const rHeader = figma.createFrame();
    rHeader.layoutMode = 'HORIZONTAL';
    rHeader.primaryAxisSizingMode = 'FIXED';
    rHeader.counterAxisSizingMode = 'AUTO';
    rHeader.counterAxisAlignItems = 'CENTER';
    rHeader.itemSpacing = 16;
    rHeader.fills = [];
    rHeader.layoutAlign = 'STRETCH';

    const rIconBox = figma.createFrame();
    rIconBox.resize(48, 48);
    rIconBox.cornerRadius = 4;
    bindFill(rIconBox, vBgBase, { r: 18 / 255, g: 21 / 255, b: 29 / 255 });
    bindStroke(rIconBox, vBorder, { r: 44 / 255, g: 53 / 255, b: 71 / 255 }, 1);
    rIconBox.layoutMode = 'HORIZONTAL';
    rIconBox.primaryAxisAlignItems = 'CENTER';
    rIconBox.counterAxisAlignItems = 'CENTER';
    const rssIc = figma.createText();
    rssIc.fontName = F.mono;
    rssIc.characters = '((•))';
    rssIc.fontSize = 16;
    bindFill(rssIc, vBrandPri, { r: 255 / 255, g: 200 / 255, b: 55 / 255 });
    rIconBox.appendChild(rssIc);
    rHeader.appendChild(rIconBox);

    const rTitleCol = createHugCol(4);
    rTitleCol.layoutGrow = 1;

    const rtRow = createHugRow(8);
    const rTit = figma.createText();
    rTit.fontName = F.uiBold;
    rTit.characters = '정원 구독하기: 순수 RSS 피드';
    rTit.fontSize = 18;
    bindFill(rTit, vTextPri, { r: 241 / 255, g: 245 / 255, b: 249 / 255 });
    rtRow.appendChild(rTit);
    rtRow.appendChild(createBadge('RSS 2.0', 'info', 'pill'));
    rTitleCol.appendChild(rtRow);

    const rDes = figma.createText();
    rDes.fontName = F.uiReg;
    rDes.characters =
      '알고리즘의 간섭 없이 정원의 새로운 씨앗(Seed)과 상록수(Evergreen) 에세이를 가장 신속하고 투명하게 받아보세요.';
    rDes.fontSize = 13;
    rDes.lineHeight = { value: 150, unit: 'PERCENT' };
    bindFill(rDes, vTextSec, { r: 148 / 255, g: 163 / 255, b: 184 / 255 });
    rDes.textAutoResize = 'HEIGHT';
    rDes.layoutAlign = 'STRETCH';
    rTitleCol.appendChild(rDes);
    rHeader.appendChild(rTitleCol);
    rssCard.appendChild(rHeader);

    const rUrlBox = createHugRow(12, 'CENTER', 'SPACE_BETWEEN');
    rUrlBox.paddingLeft = 16;
    rUrlBox.paddingRight = 12;
    rUrlBox.paddingTop = 10;
    rUrlBox.paddingBottom = 10;
    rUrlBox.cornerRadius = 4;
    bindFill(rUrlBox, vBgBase, { r: 18 / 255, g: 21 / 255, b: 29 / 255 });
    bindStroke(rUrlBox, vBorder, { r: 44 / 255, g: 53 / 255, b: 71 / 255 }, 1);

    const rUrlLeft = createHugRow(12, 'CENTER');
    const rFeedTag = figma.createText();
    rFeedTag.fontName = F.mono;
    rFeedTag.characters = 'FEED';
    rFeedTag.fontSize = 11;
    bindFill(rFeedTag, vTextSec, { r: 148 / 255, g: 163 / 255, b: 184 / 255 });
    rUrlLeft.appendChild(rFeedTag);

    const rUrlText = figma.createText();
    rUrlText.fontName = F.mono;
    rUrlText.characters = 'https://blog.sonagi.space/rss.xml';
    rUrlText.fontSize = 13;
    bindFill(rUrlText, vTextPri, { r: 241 / 255, g: 245 / 255, b: 249 / 255 });
    rUrlLeft.appendChild(rUrlText);
    rUrlBox.appendChild(rUrlLeft);

    const rBtnGroup = createHugRow(8);
    rBtnGroup.appendChild(createBtn('원클릭 복사', 'primary', 'sm', 'copy'));
    rBtnGroup.appendChild(createBtn('XML 보기', 'secondary', 'sm', 'ext'));
    rUrlBox.appendChild(rBtnGroup);
    rssCard.appendChild(rUrlBox);

    const rGuideRow = createHugRow(8, 'CENTER');
    rGuideRow.paddingTop = 8;
    bindStroke(
      rGuideRow,
      vBorder,
      { r: 44 / 255, g: 53 / 255, b: 71 / 255 },
      1
    );
    rGuideRow.strokeAlign = 'INSIDE';
    rGuideRow.layoutAlign = 'STRETCH';

    const rgLabel = figma.createText();
    rgLabel.fontName = F.uiReg;
    rgLabel.characters = '지원 리더기:';
    rgLabel.fontSize = 12;
    bindFill(rgLabel, vTextSec, { r: 148 / 255, g: 163 / 255, b: 184 / 255 });
    rGuideRow.appendChild(rgLabel);

    ['Feedly', 'Inoreader', 'NetNewsWire', 'Apple News', 'Follow'].forEach(
      (rd) => {
        rGuideRow.appendChild(createBadge(rd, 'info', 'label'));
      }
    );
    rssCard.appendChild(rGuideRow);
    mainCont.appendChild(rssCard);

    figma.viewport.scrollAndZoomIntoView([desktop]);

    console.log(
      '✅ [BLOG-4 SSOT Final] Successfully synced blog-sonagi-space!'
    );
    resolve({
      status: 'SUCCESS',
      pageName: aboutPage.name,
      desktopId: desktop.id,
      height: desktop.height,
      width: desktop.width,
    });
  } catch (e) {
    console.error('❌ Error updating blog-sonagi-space:', e);
    resolve({ status: 'ERROR', error: String(e) });
  }
});
