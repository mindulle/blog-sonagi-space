---
title: WikiLink Test
date: 2025-01-01
tags: [wikilink, test]
category: dev
description: Testing custom wiki link resolution
---

# WikiLink Test

This note tests the custom wiki link resolution logic.

## Direct Links
- [[Architecture|Architecture]] (Same directory, if exists)
- [[getting-started|Getting Started]] (Should resolve to /notes/dev/getting-started)
- [[broken-link]] (Should be red/broken)

## Aliased Links
- [[getting-started|Start Here]] (Should show as "Start Here")

## Case Insensitivity
- [[getting-started|getting started]] (Should resolve)
- [[getting-started|GETTING STARTED]] (Should resolve)
