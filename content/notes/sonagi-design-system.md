---
title: 소나기 디자인 시스템 소개
tags:
  - design-system
  - ui
  - ux
  - component
created: '2025-10-20'
category: design
coverImage: >-
  https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&h=630&fit=crop
status: evergreen
published: true
publishedDate: '2025-10-20'
---

# 소나기 디자인 시스템 소개

**소나기(Sonagi)**는 '소나기처럼 청량한' 디자인 경험을 제공하는 디자인 시스템입니다. 비가 내린 후의 맑고 깨끗한 느낌을 디지털 제품에 담았습니다.

## 디자인 철학

### 🌧️ 청량함 (Freshness)

비 온 뒤의 맑은 공기처럼, 깔끔하고 상쾌한 UI를 추구합니다.

### 💧 명료함 (Clarity)

빗방울처럼 투명하고 명확한 인터페이스를 지향합니다.

### 🌈 조화로움 (Harmony)

자연스러운 색상과 균형잡힌 레이아웃으로 조화를 이룹니다.

## 색상 시스템

### Primary Color - 청량한 블루

```css
/* 소나기 블루 */
--primary-50: #E8F4F8;
--primary-100: #C5E4EF;
--primary-500: #3DA8CC;  /* Main */
--primary-600: #379AC3;
--primary-900: #19599C;
```

**사용 가이드:**
- Primary-500: 주요 액션 버튼, 링크
- Primary-600: Hover 상태
- Primary-50: 배경, 하이라이트

### Neutral Colors

```css
/* 중립 색상 */
--neutral-50: #F9FAFB;
--neutral-100: #F3F4F6;
--neutral-500: #6B7280;
--neutral-900: #111827;
```

### Semantic Colors

```css
/* 시맨틱 색상 */
--success: #10B981;  /* 성공 */
--warning: #F59E0B;  /* 경고 */
--error: #EF4444;    /* 에러 */
```

## 타이포그래피

### 폰트 패밀리

```css
/* 본문 */
--font-sans: 'Pretendard', -apple-system, system-ui, sans-serif;

/* 코드 */
--font-mono: 'JetBrains Mono', 'Fira Code', monospace;
```

### 타이포그래피 스케일

```css
/* Heading */
--text-4xl: 2.25rem;  /* 36px */
--text-3xl: 1.875rem; /* 30px */
--text-2xl: 1.5rem;   /* 24px */
--text-xl: 1.25rem;   /* 20px */

/* Body */
--text-base: 1rem;    /* 16px */
--text-sm: 0.875rem;  /* 14px */
--text-xs: 0.75rem;   /* 12px */
```

### Line Height

```css
--leading-tight: 1.25;
--leading-normal: 1.5;
--leading-relaxed: 1.75;
```

## Spacing System

8px 기반의 일관된 간격 시스템:

```css
--spacing-1: 0.25rem;  /* 4px */
--spacing-2: 0.5rem;   /* 8px */
--spacing-3: 0.75rem;  /* 12px */
--spacing-4: 1rem;     /* 16px */
--spacing-6: 1.5rem;   /* 24px */
--spacing-8: 2rem;     /* 32px */
--spacing-12: 3rem;    /* 48px */
--spacing-16: 4rem;    /* 64px */
```

## 컴포넌트

### Button

```tsx
// Primary Button
<Button variant="primary" size="medium">
  Click me
</Button>

// Secondary Button
<Button variant="secondary" size="medium">
  Cancel
</Button>

// Ghost Button
<Button variant="ghost" size="small">
  Learn more
</Button>
```

**Variants:**
- `primary`: 주요 액션
- `secondary`: 보조 액션
- `ghost`: 최소 강조

**Sizes:**
- `small`: 12px padding
- `medium`: 16px padding
- `large`: 20px padding

### Card

```tsx
<Card variant="elevated">
  <Card.Header>
    <Card.Title>Card Title</Card.Title>
    <Card.Subtitle>Subtitle</Card.Subtitle>
  </Card.Header>
  <Card.Body>
    Content goes here...
  </Card.Body>
  <Card.Footer>
    <Button variant="primary">Action</Button>
  </Card.Footer>
</Card>
```
```

**Variants:**
- `elevated`: 그림자 효과
- `outlined`: 테두리
- `flat`: 평면

### Input

```tsx
<Input
  label="Email"
  type="email"
  placeholder="your@email.com"
  helperText="We'll never share your email"
  error={errorMessage}
/>
```

**Features:**
- Label 지원
- Error 상태
- Helper text
- Icon 삽입 가능

### Badge

```tsx
<Badge variant="primary">New</Badge>
<Badge variant="success">Active</Badge>
<Badge variant="warning">Pending</Badge>
<Badge variant="error">Error</Badge>
```

## 반응형 디자인

### Breakpoints

```css
/* Mobile First */
--breakpoint-sm: 640px;   /* Tablet */
--breakpoint-md: 768px;   /* Desktop */
--breakpoint-lg: 1024px;  /* Large Desktop */
--breakpoint-xl: 1280px;  /* Extra Large */
```

### 사용 예시

```tsx
<div className="
  px-4 md:px-8 lg:px-12
  text-base md:text-lg lg:text-xl
">
  반응형 콘텐츠
</div>
```

## 다크 모드

소나기는 기본적으로 다크 모드를 지원합니다.

### 구현

```tsx
// ThemeProvider
<html className={theme}>
  <body>
    {children}
  </body>
</html>
```

### CSS Variables

```css
/* Light Mode */
:root {
  --background: #FFFFFF;
  --foreground: #111827;
}

/* Dark Mode */
.dark {
  --background: #111827;
  --foreground: #F9FAFB;
}
```

## 애니메이션

### Transition Timing

```css
--transition-fast: 150ms;
--transition-base: 200ms;
--transition-slow: 300ms;
```

### Easing Functions

```css
--ease-in: cubic-bezier(0.4, 0, 1, 1);
--ease-out: cubic-bezier(0, 0, 0.2, 1);
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
```

### 사용 예시

```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.3 }}
>
  Animated Content
</motion.div>
```

## 접근성 (A11y)

### 색상 대비

모든 텍스트는 WCAG AA 기준(4.5:1) 이상의 대비를 유지합니다.

```css
/* Good */
color: #111827;  /* on white background */
color: #F9FAFB;  /* on dark background */

/* Bad */
color: #9CA3AF;  /* on white - 대비 부족 */
```

### Focus States

모든 인터랙티브 요소는 명확한 focus 상태를 가집니다.

```css
button:focus-visible {
  outline: 2px solid var(--primary-500);
  outline-offset: 2px;
}
```

### ARIA Labels

```tsx
<button aria-label="Close menu">
  <X />
</button>

<nav aria-label="Main navigation">
  {/* nav items */}
</nav>
```

## 실전 예제

### 블로그 포스트 카드

```tsx
<Card variant="elevated" className="group hover:shadow-xl">
  <Link href={`/blog/${post.slug}`}>
    <Image
      src={post.coverImage}
      alt={post.title}
      className="group-hover:scale-105 transition"
    />
  </Link>
  
  <Card.Header>
    <Badge variant="secondary">{post.category}</Badge>
    <Card.Title>{post.title}</Card.Title>
    <Card.Subtitle>{post.description}</Card.Subtitle>
  </Card.Header>
  
  <Card.Footer>
    <time>{post.date}</time>
    <span>{post.readingTime} min read</span>
  </Card.Footer>
</Card>
```
```

## 마무리

소나기 디자인 시스템은 계속 진화하고 있습니다. 여러분의 프로젝트에서도 청량한 경험을 만들어보세요!

**다음 포스트 예고:** 소나기 디자인 시스템으로 실전 프로젝트 만들기
