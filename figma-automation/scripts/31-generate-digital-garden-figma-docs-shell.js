/**
 * Figma Automation Script: 31-generate-digital-garden-figma-docs-shell.js
 * Task: BLOG-4 [Figma] 디지털 정원 & The Gardener 에세이/RSS 위젯 Figma Docs Shell 시안 배치 (True Color SSOT v4)
 *
 * Requirements & Core Fixes:
 * 1. Design System First: Sonagi Design System V3 공식 Badge, Button, HoverPreview 인스턴스 100% 바인딩.
 * 2. True Color SSOT & Variable Modes:
 *    - 프레임 최상단에 `frame.setExplicitVariableModeForCollection(colorColl, darkId)` 강제 할당.
 *    - `figma.variables.setBoundVariableForPaint(paint, "color", variable)` 정규 바인딩 API 적용.
 *    - 다크 모드 캔버스에서 Badge, Button, HoverPreview가 눈부신 파스텔(라이트 모드)이 아닌 딥 다크 모드로 100% 자동 전환.
 * 3. AutoLayout Widths & HUG Sizing:
 *    - 3-Column 카드 그리드: 정확히 346px 너비 균등 분할 (`(1080 - 40) / 3`)
 *    - 2-Column 허브 그리드: 정확히 530px 너비 균등 분할 (`(1080 - 20) / 2`)
 *    - RssSubscribeWidget 헤더: `titleCol`에 `layoutGrow = 1` 및 `des.layoutAlign = STRETCH` 부여로 세로 붕괴 완벽 차단.
 * 4. 1440px 뷰포트 내 1080px 중앙 정렬 에디토리얼 컨테이너 아키텍처.
 * 5. 공식 Core Icon 컴포넌트를 버튼의 Icon Wrapper에 주입하고, 9개 아이콘
 *    specimen을 3x3 고정 셀 그리드로 배치한다. 아이콘 수가 늘어나도 셀 폭은
 *    부모 폭에서 gap을 제외해 자동 계산되므로 임의의 100x100 기본 프레임에
 *    의존하지 않는다.
 */

return new Promise(async (resolve) => {
  try {
    console.log(
      '🚀 [BLOG-4 True Color SSOT] Binding Dark Variable Mode & setBoundVariableForPaint across all nodes...'
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

    // 2. Fetch Local Variable Collections & Modes
    const colls = await figma.variables.getLocalVariableCollectionsAsync();
    const colorColl = colls.find((c) => c.name === 'Colors');
    const darkId = colorColl.modes.find((m) => m.name === 'Dark')?.modeId;
    const lightId = colorColl.modes.find((m) => m.name === 'Light')?.modeId;

    const allVars = await figma.variables.getLocalVariablesAsync();
    const varMap = new Map();
    allVars.forEach((v) => varMap.set(v.name.toLowerCase(), v));
    const getVar = (name) => varMap.get(name.toLowerCase());

    const CDark = {
      bgBase: { r: 18 / 255, g: 21 / 255, b: 29 / 255 }, // #12151d
      bgSurface: { r: 27 / 255, g: 32 / 255, b: 44 / 255 }, // #1b202c
      bgElevated: { r: 36 / 255, g: 43 / 255, b: 59 / 255 }, // #242b3b
      bgOverlay: { r: 31 / 255, g: 38 / 255, b: 53 / 255 }, // #1f2635
      borderDefault: { r: 44 / 255, g: 53 / 255, b: 71 / 255 }, // #2c3547
      borderSubtle: { r: 31 / 255, g: 38 / 255, b: 53 / 255 }, // #1f2635
      borderStrong: { r: 255 / 255, g: 200 / 255, b: 55 / 255 }, // #ffc837
      textPrimary: { r: 241 / 255, g: 245 / 255, b: 249 / 255 }, // #f1f5f9
      textSecondary: { r: 148 / 255, g: 163 / 255, b: 184 / 255 }, // #94a3b8
      textMuted: { r: 100 / 255, g: 116 / 255, b: 139 / 255 }, // #64748b
      brandPrimary: { r: 255 / 255, g: 200 / 255, b: 55 / 255 }, // #ffc837
    };

    const CLight = {
      bgBase: { r: 251 / 255, g: 251 / 255, b: 250 / 255 }, // #fbfbfa
      bgSurface: { r: 255 / 255, g: 255 / 255, b: 255 / 255 }, // #ffffff
      bgElevated: { r: 255 / 255, g: 255 / 255, b: 255 / 255 }, // #ffffff
      bgOverlay: { r: 244 / 255, g: 244 / 255, b: 245 / 255 }, // #f4f4f5
      borderDefault: { r: 228 / 255, g: 228 / 255, b: 231 / 255 }, // #e4e4e7
      borderSubtle: { r: 244 / 255, g: 244 / 255, b: 245 / 255 }, // #f4f4f5
      borderStrong: { r: 184 / 255, g: 106 / 255, b: 4 / 255 }, // #b86a04
      textPrimary: { r: 24 / 255, g: 24 / 255, b: 27 / 255 }, // #18181b
      textSecondary: { r: 82 / 255, g: 82 / 255, b: 91 / 255 }, // #52525b
      textMuted: { r: 113 / 255, g: 113 / 255, b: 122 / 255 }, // #71717a
      brandPrimary: { r: 184 / 255, g: 106 / 255, b: 4 / 255 }, // #b86a04
    };

    function bindFill(node, varName, fallbackColor) {
      const v = getVar(varName);
      if (v) {
        node.fills = [
          figma.variables.setBoundVariableForPaint(
            { type: 'SOLID', color: fallbackColor },
            'color',
            v
          ),
        ];
      } else {
        node.fills = [{ type: 'SOLID', color: fallbackColor }];
      }
    }

    function bindStroke(node, varName, fallbackColor, weight = 1) {
      const v = getVar(varName);
      if (v) {
        node.strokes = [
          figma.variables.setBoundVariableForPaint(
            { type: 'SOLID', color: fallbackColor },
            'color',
            v
          ),
        ];
      } else {
        node.strokes = [{ type: 'SOLID', color: fallbackColor }];
      }
      node.strokeWeight = weight;
    }

    // 3. Official Component Masters
    const bSuccessPill = await figma.getNodeByIdAsync('198:1698');
    const bSuccessLabel = await figma.getNodeByIdAsync('198:1700');
    const bInfoPill = await figma.getNodeByIdAsync('198:1694');
    const bInfoLabel = await figma.getNodeByIdAsync('198:1696');
    const bWarningPill = await figma.getNodeByIdAsync('198:1702');
    const bWarningLabel = await figma.getNodeByIdAsync('198:1704');

    const btnPriMd = await figma.getNodeByIdAsync('159:406');
    const btnSecMd = await figma.getNodeByIdAsync('159:410');
    const btnPriSm = await figma.getNodeByIdAsync('174:383');
    const btnSecSm = await figma.getNodeByIdAsync('174:387');

    const hpMaster = await figma.getNodeByIdAsync('225:4');

    // Core icons are library-dependent, so resolve them by name at runtime rather
    // than baking session-specific node ids into this script. This also keeps the
    // specimen usable when the design-system library publishes another icon.
    const coreIconNames = [
      'Arrow-right',
      'Arrow-left',
      'Check',
      'Copy',
      'External-link',
      'Link',
      'Menu',
      'Rss',
      'Search',
    ];
    const iconNameAliases = new Map([
      ['External-link', ['External-link', 'External Link', 'Arrow-up-right']],
      ['Rss', ['Rss', 'RSS']],
    ]);

    function findCoreIcon(name) {
      const aliases = iconNameAliases.get(name) || [name];
      const nodes = figma.root.findAll(
        (n) =>
          n.type === 'COMPONENT' &&
          aliases.some(
            (alias) =>
              n.name === `❖ Icon/${alias}` ||
              n.name === `Icon/${alias}` ||
              n.name === alias
          )
      );
      return nodes[0] || null;
    }

    function fillIconWrapper(wrapper, iconName) {
      if (!wrapper || wrapper.type !== 'INSTANCE') return false;
      const master = findCoreIcon(iconName);
      if (!master) return false;
      const nested = wrapper.findAll((n) => n.type === 'INSTANCE')[0];
      if (!nested || typeof nested.swapComponent !== 'function') return false;
      try {
        nested.swapComponent(master);
        nested.name = `Core Icon • ${iconName}`;
        return true;
      } catch (error) {
        console.warn(`Could not fill Icon Wrapper with ${iconName}:`, error);
        return false;
      }
    }

    function createInstBadge(label, color = 'info', variant = 'pill') {
      let master = bInfoPill;
      if (color === 'success')
        master = variant === 'pill' ? bSuccessPill : bSuccessLabel;
      else if (color === 'warning')
        master = variant === 'pill' ? bWarningPill : bWarningLabel;
      else master = variant === 'pill' ? bInfoPill : bInfoLabel;

      if (!master) {
        const f = figma.createFrame();
        f.name = label;
        return f;
      }
      const inst = master.createInstance();
      const txt = inst.findOne((n) => n.type === 'TEXT');
      if (txt) {
        txt.characters = label;
      }
      return inst;
    }

    function createInstButton(
      label,
      type = 'primary',
      size = 'md',
      icon = 'none'
    ) {
      let master = btnPriMd;
      if (type === 'secondary' && size === 'md') master = btnSecMd;
      else if (type === 'primary' && size === 'sm') master = btnPriSm;
      else if (type === 'secondary' && size === 'sm') master = btnSecSm;

      const inst = master.createInstance();
      const txt = inst.findOne(
        (n) => n.type === 'TEXT' && (n.name === 'Continue' || n.characters)
      );
      if (txt) {
        txt.characters = label;
      }
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

    // 4. Setup Target Page & Section
    await figma.loadAllPagesAsync();
    let page = figma.root.children.find(
      (p) => p.name === '🌿 Digital Garden & The Gardener'
    );
    if (!page) {
      page = figma.createPage();
      page.name = '🌿 Digital Garden & The Gardener';
    }
    await figma.setCurrentPageAsync(page);

    let section = page.findOne(
      (n) =>
        n.type === 'SECTION' &&
        n.name === 'BLOG-4 Digital Garden & The Gardener SSOT'
    );
    if (section) {
      section.remove();
    }
    section = figma.createSection();
    section.name = 'BLOG-4 Digital Garden & The Gardener SSOT';
    section.x = 0;
    section.y = 0;

    function createPageShell(name, width = 1440, mode = 'dark') {
      const C = mode === 'dark' ? CDark : CLight;
      const frame = figma.createFrame();
      frame.name = name;
      frame.resize(width, 100);
      bindFill(frame, 'bg/base', C.bgBase);
      frame.layoutMode = 'VERTICAL';
      frame.primaryAxisSizingMode = 'AUTO';
      frame.counterAxisSizingMode = 'FIXED';
      frame.counterAxisAlignItems = 'CENTER';
      frame.paddingTop = 64;
      frame.paddingBottom = 80;
      frame.itemSpacing = 40;

      if (colorColl) {
        const modeId = mode === 'dark' ? darkId : lightId;
        if (modeId) {
          try {
            frame.setExplicitVariableModeForCollection(colorColl, modeId);
          } catch (e) {
            console.warn('Could not set mode on frame:', e);
          }
        }
      }

      const container = figma.createFrame();
      container.name = 'Container (max-w-[1080px] Editorial Centered)';
      container.resize(1080, 100);
      container.layoutMode = 'VERTICAL';
      container.primaryAxisSizingMode = 'AUTO';
      container.counterAxisSizingMode = 'FIXED';
      container.itemSpacing = 48;
      container.fills = [];
      frame.appendChild(container);

      return { frame, container };
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

    // FRAME 1: 01 /about
    const { frame: aboutFrame, container: aboutCont } = createPageShell(
      '01 /about • Gardener Profile & Philosophy (Dark)',
      1440,
      'dark'
    );
    aboutFrame.x = 40;
    aboutFrame.y = 40;
    section.appendChild(aboutFrame);

    const heroBox = createHugCol(20);
    heroBox.name = '1. Hero / Gardener Intro';
    heroBox.layoutAlign = 'STRETCH';

    const heroBadgeRow = createHugRow(8);
    heroBadgeRow.appendChild(
      createInstBadge('🌱 The Gardener', 'success', 'pill')
    );
    heroBadgeRow.appendChild(
      createInstBadge('Digital Garden', 'info', 'label')
    );
    heroBadgeRow.appendChild(
      createInstBadge('MDS v0.1.0 SSOT', 'info', 'label')
    );
    heroBox.appendChild(heroBadgeRow);

    const heroTitle = figma.createText();
    heroTitle.fontName = F.display;
    heroTitle.characters =
      '쏟아지는 영감의 씨앗을 심고,\n유기적인 사유의 숲을 가꿉니다.';
    heroTitle.fontSize = 44;
    heroTitle.lineHeight = { value: 125, unit: 'PERCENT' };
    bindFill(heroTitle, 'text/primary', CDark.textPrimary);
    heroTitle.textAutoResize = 'HEIGHT';
    heroTitle.layoutAlign = 'STRETCH';
    heroBox.appendChild(heroTitle);

    const heroDesc = figma.createText();
    heroDesc.fontName = F.uiReg;
    heroDesc.characters =
      '소나기 스페이스(Sonagi Space)는 시간순으로 휘발되는 기존 블로그(Stream)의 한계를 넘어, 시간이 지남에 따라 진화하고 교차 수분되는 지식 정원(Digital Garden)입니다. 정원사는 완결된 지식의 권위자가 아닌, 불완전한 생각의 씨앗을 열린 공간에서 가꾸고 돌보는 관리자입니다.';
    heroDesc.fontSize = 17;
    heroDesc.lineHeight = { value: 165, unit: 'PERCENT' };
    bindFill(heroDesc, 'text/secondary', CDark.textSecondary);
    heroDesc.textAutoResize = 'HEIGHT';
    heroDesc.layoutAlign = 'STRETCH';
    heroBox.appendChild(heroDesc);
    aboutCont.appendChild(heroBox);

    const essaySpotlight = createHugCol(16);
    essaySpotlight.name = '2. Core Essay Spotlight • [[The Gardener]]';
    essaySpotlight.layoutAlign = 'STRETCH';

    const ehRow = createHugRow(0, 'CENTER', 'SPACE_BETWEEN');
    const ehTitle = figma.createText();
    ehTitle.fontName = F.uiBold;
    ehTitle.characters = '정원사 집필 철학 에세이';
    ehTitle.fontSize = 24;
    bindFill(ehTitle, 'text/primary', CDark.textPrimary);
    ehRow.appendChild(ehTitle);
    ehRow.appendChild(createInstBadge('Evergreen', 'success', 'pill'));
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
    bindFill(essayCard, 'bg/surface', CDark.bgSurface);
    bindStroke(essayCard, 'border/strong', CDark.borderStrong, 2);
    essayCard.layoutAlign = 'STRETCH';

    const ecMeta = figma.createText();
    ecMeta.fontName = F.mono;
    ecMeta.characters = '[[The Gardener]] • 정원사의 헌법';
    ecMeta.fontSize = 13;
    bindFill(ecMeta, 'brand/primary', CDark.brandPrimary);
    essayCard.appendChild(ecMeta);

    const ecHeading = figma.createText();
    ecHeading.fontName = F.serif;
    ecHeading.characters = 'The Gardener: 디지털 정원사의 철학과 집필 원칙';
    ecHeading.fontSize = 26;
    bindFill(ecHeading, 'text/primary', CDark.textPrimary);
    essayCard.appendChild(ecHeading);

    const ecQuote = figma.createText();
    ecQuote.fontName = F.uiReg;
    ecQuote.characters =
      '“정원은 완성을 목표로 하지 않는다. 그것은 지속적인 보살핌과 변화의 과정 그 자체다.” 완벽주의의 덫(Perfection Trap)에서 벗어나, 생각의 씨앗(Seed)부터 상록수(Evergreen)에 이르는 생명주기와 위키링크 백링크를 통한 양방향 지식 네트워크의 멘탈 모델을 기술한 에세이입니다.';
    ecQuote.fontSize = 15;
    ecQuote.lineHeight = { value: 165, unit: 'PERCENT' };
    bindFill(ecQuote, 'text/secondary', CDark.textSecondary);
    ecQuote.textAutoResize = 'HEIGHT';
    ecQuote.layoutAlign = 'STRETCH';
    essayCard.appendChild(ecQuote);

    const ecFooter = createHugRow(0, 'CENTER', 'SPACE_BETWEEN');
    ecFooter.paddingTop = 16;
    bindStroke(ecFooter, 'border/subtle', CDark.borderSubtle, 1);
    ecFooter.strokeAlign = 'INSIDE';

    const tagList = createHugRow(8);
    ['Philosophy', 'Writing', 'MDS', 'Backlinks'].forEach((t) => {
      tagList.appendChild(createInstBadge(t, 'info', 'label'));
    });
    ecFooter.appendChild(tagList);
    ecFooter.appendChild(
      createInstButton('에세이 전문 읽기', 'primary', 'md', 'arrow')
    );
    essayCard.appendChild(ecFooter);
    essaySpotlight.appendChild(essayCard);
    aboutCont.appendChild(essaySpotlight);

    const philoSection = createHugCol(16);
    philoSection.name = '3. Core Garden Philosophy (3대 철학 카드)';
    philoSection.layoutAlign = 'STRETCH';

    const phHead = createHugCol(4);
    const phTitle = figma.createText();
    phTitle.fontName = F.uiBold;
    phTitle.characters = 'Core Garden Philosophy';
    phTitle.fontSize = 24;
    bindFill(phTitle, 'text/primary', CDark.textPrimary);
    const phSub = figma.createText();
    phSub.fontName = F.uiReg;
    phSub.characters = '정원을 경작하며 지키는 세 가지 기본 원칙입니다.';
    phSub.fontSize = 14;
    bindFill(phSub, 'text/secondary', CDark.textSecondary);
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
      bindFill(card, 'bg/surface', CDark.bgSurface);
      bindStroke(card, 'border/default', CDark.borderDefault, 2);

      const topRow = createHugRow(0, 'CENTER', 'SPACE_BETWEEN');
      const icNode = figma.createText();
      icNode.fontName = F.uiBold;
      icNode.characters = c.icon;
      icNode.fontSize = 20;
      topRow.appendChild(icNode);
      topRow.appendChild(createInstBadge(c.tag, 'info', 'label'));
      card.appendChild(topRow);

      const tNode = figma.createText();
      tNode.fontName = F.uiBold;
      tNode.characters = c.title;
      tNode.fontSize = 17;
      bindFill(tNode, 'text/primary', CDark.textPrimary);
      card.appendChild(tNode);

      const dNode = figma.createText();
      dNode.fontName = F.uiReg;
      dNode.characters = c.desc;
      dNode.fontSize = 13;
      dNode.lineHeight = { value: 160, unit: 'PERCENT' };
      bindFill(dNode, 'text/secondary', CDark.textSecondary);
      dNode.textAutoResize = 'HEIGHT';
      dNode.layoutAlign = 'STRETCH';
      card.appendChild(dNode);

      phGrid.appendChild(card);
    });
    aboutCont.appendChild(philoSection);

    const ecoSection = createHugCol(16);
    ecoSection.name = '4. Interconnected Ecosystem (4대 생태계 허브)';
    ecoSection.layoutAlign = 'STRETCH';
    aboutCont.appendChild(ecoSection);

    const ecoHead = createHugCol(4);
    const ecoTitle = figma.createText();
    ecoTitle.fontName = F.uiBold;
    ecoTitle.characters = 'Interconnected Ecosystem';
    ecoTitle.fontSize = 24;
    bindFill(ecoTitle, 'text/primary', CDark.textPrimary);
    const ecoSub = figma.createText();
    ecoSub.fontName = F.uiReg;
    ecoSub.characters =
      '소나기 스페이스를 구성하는 4대 축과 유기적 양방향 링크 체계입니다.';
    ecoSub.fontSize = 14;
    bindFill(ecoSub, 'text/secondary', CDark.textSecondary);
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
      bindFill(card, 'bg/surface', CDark.bgSurface);
      bindStroke(card, 'border/default', CDark.borderDefault, 2);

      const topPart = createHugCol(12);
      topPart.layoutAlign = 'STRETCH';

      const metaRow = createHugRow(0, 'CENTER', 'SPACE_BETWEEN');
      metaRow.appendChild(createInstBadge(hub.badge, 'info', 'label'));

      const uTxt = figma.createText();
      uTxt.fontName = F.mono;
      uTxt.characters = hub.url;
      uTxt.fontSize = 11;
      bindFill(uTxt, 'text/muted', CDark.textMuted);
      metaRow.appendChild(uTxt);
      topPart.appendChild(metaRow);

      const hTitle = figma.createText();
      hTitle.fontName = F.uiBold;
      hTitle.characters = hub.title;
      hTitle.fontSize = 18;
      bindFill(hTitle, 'text/primary', CDark.textPrimary);
      topPart.appendChild(hTitle);

      const hDesc = figma.createText();
      hDesc.fontName = F.uiReg;
      hDesc.characters = hub.desc;
      hDesc.fontSize = 13;
      hDesc.lineHeight = { value: 160, unit: 'PERCENT' };
      bindFill(hDesc, 'text/secondary', CDark.textSecondary);
      hDesc.textAutoResize = 'HEIGHT';
      hDesc.layoutAlign = 'STRETCH';
      topPart.appendChild(hDesc);

      card.appendChild(topPart);
      card.appendChild(createInstButton(hub.btn, 'secondary', 'sm', 'arrow'));
      hub.row.appendChild(card);
    });
    ecoGrid.appendChild(row1);
    ecoGrid.appendChild(row2);

    // FRAME 2: 02 Component • RssSubscribeWidget
    const { frame: rssFrame, container: rssCont } = createPageShell(
      '02 Component • RssSubscribeWidget (Card & Compact 2종 규격)',
      1440,
      'dark'
    );
    rssFrame.x = 1520;
    rssFrame.y = 40;
    section.appendChild(rssFrame);

    const rssSecTitle = createHugCol(6);
    rssSecTitle.layoutAlign = 'STRETCH';
    const rst = figma.createText();
    rst.fontName = F.display;
    rst.characters = 'RssSubscribeWidget Spec & Modes';
    rst.fontSize = 28;
    bindFill(rst, 'text/primary', CDark.textPrimary);
    const rsd = figma.createText();
    rsd.fontName = F.uiReg;
    rsd.characters =
      '소음 없는 순수 RSS 2.0 구독 위젯. Card 규격 및 Compact 인라인 바 2종 명세와 라이트/다크 테마 검증.';
    rsd.fontSize = 14;
    bindFill(rsd, 'text/secondary', CDark.textSecondary);
    rssSecTitle.appendChild(rst);
    rssSecTitle.appendChild(rsd);
    rssCont.appendChild(rssSecTitle);

    function buildPerfectRssCard(mode = 'dark', width = 1080) {
      const C = mode === 'dark' ? CDark : CLight;
      const card = figma.createFrame();
      card.name = 'RssSubscribeWidget (Card) [' + mode.toUpperCase() + ']';
      card.layoutMode = 'VERTICAL';
      card.primaryAxisSizingMode = 'AUTO';
      card.counterAxisSizingMode = 'FIXED';
      card.resize(width, 100);
      card.paddingLeft = 32;
      card.paddingRight = 32;
      card.paddingTop = 28;
      card.paddingBottom = 28;
      card.cornerRadius = 4;
      card.itemSpacing = 20;
      bindFill(card, 'bg/surface', C.bgSurface);
      bindStroke(card, 'border/default', C.borderDefault, 2);
      card.layoutAlign = 'STRETCH';

      const header = figma.createFrame();
      header.layoutMode = 'HORIZONTAL';
      header.primaryAxisSizingMode = 'FIXED';
      header.counterAxisSizingMode = 'AUTO';
      header.counterAxisAlignItems = 'CENTER';
      header.itemSpacing = 16;
      header.fills = [];
      header.layoutAlign = 'STRETCH';

      const iconBox = figma.createFrame();
      iconBox.resize(48, 48);
      iconBox.cornerRadius = 4;
      bindFill(iconBox, 'bg/overlay', C.bgOverlay);
      bindStroke(iconBox, 'border/subtle', C.borderSubtle, 1);
      iconBox.layoutMode = 'HORIZONTAL';
      iconBox.primaryAxisAlignItems = 'CENTER';
      iconBox.counterAxisAlignItems = 'CENTER';
      const rssIc = figma.createText();
      rssIc.fontName = F.mono;
      rssIc.characters = '((•))';
      rssIc.fontSize = 16;
      bindFill(rssIc, 'brand/primary', C.brandPrimary);
      iconBox.appendChild(rssIc);
      header.appendChild(iconBox);

      const titleCol = createHugCol(4);
      titleCol.layoutGrow = 1;

      const tRow = createHugRow(8);
      const tit = figma.createText();
      tit.fontName = F.uiBold;
      tit.characters = '정원 구독하기: 순수 RSS 피드';
      tit.fontSize = 18;
      bindFill(tit, 'text/primary', C.textPrimary);
      tRow.appendChild(tit);
      tRow.appendChild(createInstBadge('RSS 2.0', 'info', 'pill'));
      titleCol.appendChild(tRow);

      const des = figma.createText();
      des.fontName = F.uiReg;
      des.characters =
        '알고리즘의 간섭 없이 정원의 새로운 씨앗(Seed)과 상록수(Evergreen) 에세이를 가장 신속하고 투명하게 받아보세요.';
      des.fontSize = 13;
      des.lineHeight = { value: 150, unit: 'PERCENT' };
      bindFill(des, 'text/secondary', C.textSecondary);
      des.textAutoResize = 'HEIGHT';
      des.layoutAlign = 'STRETCH';
      titleCol.appendChild(des);
      header.appendChild(titleCol);
      card.appendChild(header);

      const urlBox = createHugRow(12, 'CENTER', 'SPACE_BETWEEN');
      urlBox.paddingLeft = 16;
      urlBox.paddingRight = 12;
      urlBox.paddingTop = 10;
      urlBox.paddingBottom = 10;
      urlBox.cornerRadius = 4;
      bindFill(urlBox, 'bg/base', C.bgBase);
      bindStroke(urlBox, 'border/subtle', C.borderSubtle, 1);

      const urlLeft = createHugRow(12, 'CENTER');
      const feedTag = figma.createText();
      feedTag.fontName = F.mono;
      feedTag.characters = 'FEED';
      feedTag.fontSize = 11;
      bindFill(feedTag, 'text/muted', C.textMuted);
      urlLeft.appendChild(feedTag);

      const urlText = figma.createText();
      urlText.fontName = F.mono;
      urlText.characters = 'https://blog.sonagi.space/rss.xml';
      urlText.fontSize = 13;
      bindFill(urlText, 'text/primary', C.textPrimary);
      urlLeft.appendChild(urlText);
      urlBox.appendChild(urlLeft);

      const btnGroup = createHugRow(8);
      btnGroup.appendChild(
        createInstButton('원클릭 복사', 'primary', 'sm', 'copy')
      );
      btnGroup.appendChild(
        createInstButton('XML 보기', 'secondary', 'sm', 'ext')
      );
      urlBox.appendChild(btnGroup);
      card.appendChild(urlBox);

      const guideRow = createHugRow(8, 'CENTER');
      guideRow.paddingTop = 8;
      bindStroke(guideRow, 'border/subtle', C.borderSubtle, 1);
      guideRow.strokeAlign = 'INSIDE';
      guideRow.layoutAlign = 'STRETCH';

      const gLabel = figma.createText();
      gLabel.fontName = F.uiReg;
      gLabel.characters = '지원 리더기:';
      gLabel.fontSize = 12;
      bindFill(gLabel, 'text/muted', C.textMuted);
      guideRow.appendChild(gLabel);

      ['Feedly', 'Inoreader', 'NetNewsWire', 'Apple News', 'Follow'].forEach(
        (rd) => {
          guideRow.appendChild(createInstBadge(rd, 'info', 'label'));
        }
      );
      card.appendChild(guideRow);

      return card;
    }

    function buildPerfectRssCompact(mode = 'dark', width = 1080) {
      const C = mode === 'dark' ? CDark : CLight;
      const bar = createHugRow(14, 'CENTER', 'SPACE_BETWEEN');
      bar.name = 'RssSubscribeWidget (Compact) [' + mode.toUpperCase() + ']';
      bar.resize(width, 100);
      bar.paddingLeft = 20;
      bar.paddingRight = 16;
      bar.paddingTop = 14;
      bar.paddingBottom = 14;
      bar.cornerRadius = 4;
      bindFill(bar, 'bg/surface', C.bgSurface);
      bindStroke(bar, 'border/default', C.borderDefault, 2);

      const left = createHugRow(14, 'CENTER');
      const icBox = figma.createFrame();
      icBox.resize(36, 36);
      icBox.cornerRadius = 4;
      bindFill(icBox, 'bg/overlay', C.bgOverlay);
      icBox.layoutMode = 'HORIZONTAL';
      icBox.primaryAxisAlignItems = 'CENTER';
      icBox.counterAxisAlignItems = 'CENTER';
      const ic = figma.createText();
      ic.fontName = F.mono;
      ic.characters = 'RSS';
      ic.fontSize = 11;
      bindFill(ic, 'brand/primary', C.brandPrimary);
      icBox.appendChild(ic);
      left.appendChild(icBox);

      const textCol = createHugCol(2);
      const tit = figma.createText();
      tit.fontName = F.uiBold;
      tit.characters = 'RSS Feed (Subtle Inline Bar)';
      tit.fontSize = 13;
      bindFill(tit, 'text/primary', C.textPrimary);
      textCol.appendChild(tit);
      const url = figma.createText();
      url.fontName = F.mono;
      url.characters = 'https://blog.sonagi.space/rss.xml';
      url.fontSize = 11;
      bindFill(url, 'text/muted', C.textMuted);
      textCol.appendChild(url);
      left.appendChild(textCol);
      bar.appendChild(left);

      const right = createHugRow(8);
      right.appendChild(createInstButton('URL 복사', 'primary', 'sm', 'copy'));
      right.appendChild(createInstButton('XML', 'secondary', 'sm', 'ext'));
      bar.appendChild(right);

      return bar;
    }

    rssCont.appendChild(buildPerfectRssCard('dark', 1080));
    rssCont.appendChild(buildPerfectRssCompact('dark', 1080));

    const lightContainer = figma.createFrame();
    lightContainer.name = 'Light Mode Specimen Block (Warm Paper #fbfbfa)';
    lightContainer.layoutMode = 'VERTICAL';
    lightContainer.primaryAxisSizingMode = 'AUTO';
    lightContainer.counterAxisSizingMode = 'FIXED';
    lightContainer.resize(1080, 100);
    lightContainer.paddingLeft = 24;
    lightContainer.paddingRight = 24;
    lightContainer.paddingTop = 24;
    lightContainer.paddingBottom = 24;
    lightContainer.cornerRadius = 4;
    lightContainer.itemSpacing = 20;
    bindFill(lightContainer, 'bg/base', CLight.bgBase);
    bindStroke(lightContainer, 'border/default', CLight.borderDefault, 2);
    lightContainer.layoutAlign = 'STRETCH';

    if (colorColl && lightId) {
      try {
        lightContainer.setExplicitVariableModeForCollection(colorColl, lightId);
      } catch (e) {}
    }

    const lcTitle = figma.createText();
    lcTitle.fontName = F.uiBold;
    lcTitle.characters =
      '☀️ Light Theme Verification (Warm Paper #fbfbfa & Amber/Brown #b86a04)';
    lcTitle.fontSize = 14;
    bindFill(lcTitle, 'text/primary', CLight.textPrimary);
    lightContainer.appendChild(lcTitle);

    lightContainer.appendChild(buildPerfectRssCard('light', 1028));
    lightContainer.appendChild(buildPerfectRssCompact('light', 1028));
    rssCont.appendChild(lightContainer);

    // FRAME 3: 03 /notes
    const { frame: gardenFrame, container: gardenCont } = createPageShell(
      '03 /notes • Digital Garden Grid, Maturity Badges & Hover Popover',
      1440,
      'dark'
    );
    gardenFrame.x = 3000;
    gardenFrame.y = 40;
    section.appendChild(gardenFrame);

    const gardenHead = createHugCol(6);
    gardenHead.layoutAlign = 'STRETCH';
    const ght = figma.createText();
    ght.fontName = F.display;
    ght.characters = 'Digital Garden (/notes) & Wikilink Popover State';
    ght.fontSize = 28;
    bindFill(ght, 'text/primary', CDark.textPrimary);
    const ghd = figma.createText();
    ghd.fontName = F.uiReg;
    ghd.characters =
      '씨앗(Seed), 묘목(Sapling), 상록수(Evergreen) 성숙도 시스템과 양방향 위키링크 호버 팝오버(Hover Popover) 인터랙션 상태.';
    ghd.fontSize = 14;
    bindFill(ghd, 'text/secondary', CDark.textSecondary);
    gardenHead.appendChild(ght);
    gardenHead.appendChild(ghd);
    gardenCont.appendChild(gardenHead);

    const badgeBar = createHugRow(20, 'CENTER');
    badgeBar.name = 'Maturity Badges Specimen Bar';
    badgeBar.paddingLeft = 24;
    badgeBar.paddingRight = 24;
    badgeBar.paddingTop = 16;
    badgeBar.paddingBottom = 16;
    badgeBar.cornerRadius = 4;
    bindFill(badgeBar, 'bg/surface', CDark.bgSurface);
    bindStroke(badgeBar, 'border/default', CDark.borderDefault, 2);
    badgeBar.layoutAlign = 'STRETCH';

    const bbTitle = figma.createText();
    bbTitle.fontName = F.mono;
    bbTitle.characters = 'GROWTH MATURITY STAGES:';
    bbTitle.fontSize = 12;
    bindFill(bbTitle, 'brand/primary', CDark.brandPrimary);
    badgeBar.appendChild(bbTitle);
    badgeBar.appendChild(createInstBadge('🌱 Seed', 'warning', 'pill'));
    badgeBar.appendChild(createInstBadge('🌿 Sapling', 'info', 'pill'));
    badgeBar.appendChild(createInstBadge('🌲 Evergreen', 'success', 'pill'));

    const bbNote = figma.createText();
    bbNote.fontName = F.uiReg;
    bbNote.characters =
      '• 불완전한 생각의 씨앗 ➔ 정제 중인 묘목 ➔ 상록수 에세이 생명주기';
    bbNote.fontSize = 12;
    bindFill(bbNote, 'text/muted', CDark.textMuted);
    badgeBar.appendChild(bbNote);
    gardenCont.appendChild(badgeBar);

    const gridRow = figma.createFrame();
    gridRow.name = 'Digital Garden Notes Grid';
    gridRow.layoutMode = 'HORIZONTAL';
    gridRow.primaryAxisSizingMode = 'FIXED';
    gridRow.counterAxisSizingMode = 'AUTO';
    gridRow.itemSpacing = 20;
    gridRow.fills = [];
    gridRow.layoutAlign = 'STRETCH';

    const noteCardsData = [
      {
        slug: 'The-Gardener',
        title: 'The Gardener: 디지털 정원사의 철학과 집필 원칙',
        badge: 'Evergreen',
        badgeColor: 'success',
        excerpt:
          '완벽주의의 덫(Perfection Trap)에서 벗어나 불완전한 생각의 씨앗(Seed)부터 상록수에 이르는 생명주기와 위키링크 백링크를 통한 양방향 지식 네트워크의 멘탈 모델.',
        tags: ['philosophy', 'digital-garden', 'writing'],
      },
      {
        slug: 'design-system-shape-color-semantics',
        title: 'MDS 조형 헌법: The True 2px Stem & 4px Radius',
        badge: 'Evergreen',
        badgeColor: 'success',
        excerpt:
          'W3C 표준 JSON 토큰과 Figma Local Variables 1:1 매핑. 안개와 기만을 배제하고 척박한 환경에서도 살아남는 민들레 조형 시스템.',
        tags: ['design-system', 'tokens', 'figma'],
      },
      {
        slug: 'everything-as-code-pipeline',
        title: 'Everything as Code: 인프라와 지식의 코드화',
        badge: 'Sapling',
        badgeColor: 'info',
        excerpt:
          '클라우드플레어 서버리스 엣지와 옵시디언 마크다운 파이프라인. 단 하나의 진실 공급원(SSOT)을 통해 무결성을 증명하는 아키텍처.',
        tags: ['architecture', 'cloudflare', 'ssot'],
      },
    ];

    noteCardsData.forEach((item) => {
      const nCard = figma.createFrame();
      nCard.name = 'NoteCard • ' + item.slug;
      nCard.layoutMode = 'VERTICAL';
      nCard.primaryAxisSizingMode = 'AUTO';
      nCard.counterAxisSizingMode = 'FIXED';
      nCard.resize(346, 100);
      nCard.primaryAxisAlignItems = 'SPACE_BETWEEN';
      nCard.paddingLeft = 24;
      nCard.paddingRight = 24;
      nCard.paddingTop = 24;
      nCard.paddingBottom = 24;
      nCard.cornerRadius = 4;
      nCard.itemSpacing = 16;
      bindFill(nCard, 'bg/surface', CDark.bgSurface);
      bindStroke(nCard, 'border/default', CDark.borderDefault, 2);

      const top = createHugCol(12);
      top.layoutAlign = 'STRETCH';

      const header = createHugRow(0, 'CENTER', 'SPACE_BETWEEN');
      const slugTxt = figma.createText();
      slugTxt.fontName = F.mono;
      slugTxt.characters = '[[' + item.slug + ']]';
      slugTxt.fontSize = 11;
      bindFill(slugTxt, 'brand/primary', CDark.brandPrimary);
      header.appendChild(slugTxt);
      header.appendChild(createInstBadge(item.badge, item.badgeColor, 'pill'));
      top.appendChild(header);

      const titleTxt = figma.createText();
      titleTxt.fontName = F.uiBold;
      titleTxt.characters = item.title;
      titleTxt.fontSize = 16;
      titleTxt.lineHeight = { value: 140, unit: 'PERCENT' };
      bindFill(titleTxt, 'text/primary', CDark.textPrimary);
      titleTxt.textAutoResize = 'HEIGHT';
      titleTxt.layoutAlign = 'STRETCH';
      top.appendChild(titleTxt);

      const excTxt = figma.createText();
      excTxt.fontName = F.uiReg;
      excTxt.characters = item.excerpt;
      excTxt.fontSize = 13;
      excTxt.lineHeight = { value: 150, unit: 'PERCENT' };
      bindFill(excTxt, 'text/secondary', CDark.textSecondary);
      excTxt.textAutoResize = 'HEIGHT';
      excTxt.layoutAlign = 'STRETCH';
      top.appendChild(excTxt);
      nCard.appendChild(top);

      const tagBox = createHugRow(6);
      item.tags.forEach((t) =>
        tagBox.appendChild(createInstBadge('#' + t, 'info', 'label'))
      );
      nCard.appendChild(tagBox);

      gridRow.appendChild(nCard);
    });
    gardenCont.appendChild(gridRow);

    const popoverSection = figma.createFrame();
    popoverSection.name = 'Wikilink Hover Popover State (Interactive Specimen)';
    popoverSection.layoutMode = 'VERTICAL';
    popoverSection.primaryAxisSizingMode = 'AUTO';
    popoverSection.counterAxisSizingMode = 'FIXED';
    popoverSection.paddingLeft = 32;
    popoverSection.paddingRight = 32;
    popoverSection.paddingTop = 28;
    popoverSection.paddingBottom = 28;
    popoverSection.cornerRadius = 4;
    popoverSection.itemSpacing = 24;
    bindFill(popoverSection, 'bg/surface', CDark.bgSurface);
    bindStroke(popoverSection, 'border/strong', CDark.borderStrong, 2);
    popoverSection.layoutAlign = 'STRETCH';

    const popHead = createHugRow(0, 'CENTER', 'SPACE_BETWEEN');
    const pht = figma.createText();
    pht.fontName = F.uiBold;
    pht.characters = '위키링크 호버 팝오버(Hover Popover) 상태 UI';
    pht.fontSize = 18;
    bindFill(pht, 'text/primary', CDark.textPrimary);
    popHead.appendChild(pht);
    popHead.appendChild(
      createInstBadge(
        'Official HoverPreview Instance • 300ms Motion SSOT',
        'info',
        'label'
      )
    );
    popoverSection.appendChild(popHead);

    const demoArea = figma.createFrame();
    demoArea.name = 'Popover Demo Stage';
    demoArea.layoutMode = 'VERTICAL';
    demoArea.primaryAxisSizingMode = 'AUTO';
    demoArea.counterAxisSizingMode = 'FIXED';
    demoArea.primaryAxisAlignItems = 'CENTER';
    demoArea.counterAxisAlignItems = 'CENTER';
    demoArea.paddingTop = 32;
    demoArea.paddingBottom = 36;
    demoArea.itemSpacing = 20;
    demoArea.cornerRadius = 4;
    bindFill(demoArea, 'bg/base', CDark.bgBase);
    bindStroke(demoArea, 'border/subtle', CDark.borderSubtle, 1);
    demoArea.layoutAlign = 'STRETCH';

    if (hpMaster) {
      const officialHP = hpMaster.createInstance();
      officialHP.name = 'HoverPreview (Dark Mode Bound)';
      officialHP.layoutAlign = 'CENTER';
      officialHP.resize(360, officialHP.height);
      bindFill(officialHP, 'bg/elevated', CDark.bgElevated);
      bindStroke(officialHP, 'border/strong', CDark.borderStrong, 2);

      const tNode = officialHP.findOne(
        (n) =>
          n.name === '디자인 시스템 기초' ||
          n.characters === '디자인 시스템 기초'
      );
      if (tNode) {
        tNode.characters = 'The Gardener (디지털 정원사의 헌법)';
        bindFill(tNode, 'text/primary', CDark.textPrimary);
      }
      const eNode = officialHP.findOne(
        (n) =>
          n.name.includes('디자인 시스템은 일관된') ||
          n.characters.includes('디자인 시스템은 일관된')
      );
      if (eNode) {
        eNode.characters =
          '디지털 정원사의 철학과 집필 원칙: 불완전한 사유의 씨앗을 대중 앞에 꺼내어 교차 수분하고 양방향 지식 그래프로 수렴시키는 멘탈 모델.';
        eNode.textAutoResize = 'HEIGHT';
        eNode.layoutAlign = 'STRETCH';
        bindFill(eNode, 'text/secondary', CDark.textSecondary);
      }
      demoArea.appendChild(officialHP);
    }

    const sentenceRow = createHugRow(6, 'CENTER');
    const preTxt = figma.createText();
    preTxt.fontName = F.uiReg;
    preTxt.characters = '우리는 완결된 권위자가 아닌';
    preTxt.fontSize = 15;
    bindFill(preTxt, 'text/secondary', CDark.textSecondary);
    sentenceRow.appendChild(preTxt);

    const linkPill = createHugRow(0);
    linkPill.paddingLeft = 8;
    linkPill.paddingRight = 8;
    linkPill.paddingTop = 3;
    linkPill.paddingBottom = 3;
    linkPill.cornerRadius = 4;
    bindFill(linkPill, 'bg/overlay', CDark.bgOverlay);
    bindStroke(linkPill, 'brand/primary', CDark.brandPrimary, 1);

    const linkTxt = figma.createText();
    linkTxt.fontName = F.uiBold;
    linkTxt.characters = '[[The Gardener]]';
    linkTxt.fontSize = 15;
    bindFill(linkTxt, 'brand/primary', CDark.brandPrimary);
    linkPill.appendChild(linkTxt);
    sentenceRow.appendChild(linkPill);

    const postTxt = figma.createText();
    postTxt.fontName = F.uiReg;
    postTxt.characters = '의 태도로 열린 지식을 수확합니다.';
    postTxt.fontSize = 15;
    bindFill(postTxt, 'text/secondary', CDark.textSecondary);
    sentenceRow.appendChild(postTxt);
    demoArea.appendChild(sentenceRow);

    popoverSection.appendChild(demoArea);
    gardenCont.appendChild(popoverSection);

    // Core Icon Grid: a scalable 3x3 specimen, intentionally independent from
    // the page cards. Each cell has an explicit width derived from the parent so
    // adding a fourth row never reintroduces the historic 52px column collapse.
    const iconFrame = figma.createFrame();
    iconFrame.name = '04 /core-icons • Scalable 9 Icon Grid';
    iconFrame.x = 4480;
    iconFrame.y = 40;
    iconFrame.resize(1440, 100);
    iconFrame.layoutMode = 'VERTICAL';
    iconFrame.primaryAxisSizingMode = 'AUTO';
    iconFrame.counterAxisSizingMode = 'FIXED';
    iconFrame.counterAxisAlignItems = 'CENTER';
    iconFrame.paddingTop = 64;
    iconFrame.paddingBottom = 80;
    iconFrame.itemSpacing = 32;
    bindFill(iconFrame, 'bg/base', CDark.bgBase);
    if (colorColl && darkId)
      iconFrame.setExplicitVariableModeForCollection(colorColl, darkId);

    const iconCont = figma.createFrame();
    iconCont.name = 'Container (max-w-[1080px] Core Icon Grid)';
    iconCont.resize(1080, 100);
    iconCont.layoutMode = 'VERTICAL';
    iconCont.primaryAxisSizingMode = 'AUTO';
    iconCont.counterAxisSizingMode = 'AUTO';
    iconCont.itemSpacing = 20;
    iconCont.fills = [];
    iconFrame.appendChild(iconCont);

    const iconTitle = figma.createText();
    iconTitle.fontName = F.uiBold;
    iconTitle.characters = 'Core Icons • 3×3 Scalable Grid';
    iconTitle.fontSize = 24;
    bindFill(iconTitle, 'text/primary', CDark.textPrimary);
    iconCont.appendChild(iconTitle);

    for (let rowIndex = 0; rowIndex < 3; rowIndex += 1) {
      const row = figma.createFrame();
      row.name = `Core Icon Grid Row ${rowIndex + 1}`;
      row.layoutMode = 'HORIZONTAL';
      row.primaryAxisSizingMode = 'FIXED';
      row.counterAxisSizingMode = 'AUTO';
      row.resize(1080, 96);
      row.itemSpacing = 16;
      row.layoutAlign = 'STRETCH';
      row.fills = [];

      for (let colIndex = 0; colIndex < 3; colIndex += 1) {
        const iconName = coreIconNames[rowIndex * 3 + colIndex];
        const cell = figma.createFrame();
        cell.name = `Core Icon Cell • ${iconName}`;
        cell.layoutMode = 'VERTICAL';
        cell.primaryAxisSizingMode = 'AUTO';
        cell.counterAxisSizingMode = 'AUTO';
        cell.counterAxisAlignItems = 'CENTER';
        cell.itemSpacing = 8;
        cell.paddingTop = 16;
        cell.paddingBottom = 16;
        cell.paddingLeft = 16;
        cell.paddingRight = 16;
        cell.resize((1080 - 16 * 2) / 3, 96);
        cell.layoutGrow = 1;
        bindFill(cell, 'bg/surface', CDark.bgSurface);
        bindStroke(cell, 'border/default', CDark.borderDefault, 1);

        const master = findCoreIcon(iconName);
        if (master) {
          const instance = master.createInstance();
          instance.name = `Core Icon • ${iconName}`;
          cell.appendChild(instance);
        }
        const label = figma.createText();
        label.fontName = F.mono;
        label.characters = iconName;
        label.fontSize = 11;
        bindFill(label, 'text/secondary', CDark.textSecondary);
        cell.appendChild(label);
        row.appendChild(cell);
      }
      iconCont.appendChild(row);
    }
    section.appendChild(iconFrame);

    await figma.loadAllPagesAsync();
    const maxH =
      Math.max(
        aboutFrame.height,
        rssFrame.height,
        gardenFrame.height,
        iconFrame.height
      ) + 120;
    section.resizeWithoutConstraints(6000, maxH);
    figma.viewport.scrollAndZoomIntoView([section]);

    console.log('✅ [BLOG-4 True Color SSOT] Completed!');
    resolve({
      status: 'SUCCESS',
      sectionId: section.id,
      frames: [
        { name: aboutFrame.name, id: aboutFrame.id },
        { name: rssFrame.name, id: rssFrame.id },
        { name: gardenFrame.name, id: gardenFrame.id },
        { name: iconFrame.name, id: iconFrame.id },
      ],
    });
  } catch (err) {
    console.error('❌ Error in True Color SSOT generation:', err);
    resolve({ status: 'ERROR', error: String(err) });
  }
});
