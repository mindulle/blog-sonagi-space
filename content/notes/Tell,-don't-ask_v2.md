---
title: Tell, don't ask
tags: [concept, software-design-architecture]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/software-design-architecture/content/tell-dont-ask@0rGdh72HjqPZa2bCbY9Gz.md
---

# Tell, Don’t Ask

The Tell, Don’t Ask principle emphasizes that objects should be told what to do rather than being queried for their state and having decisions made externally. This promotes encapsulation and reduces coupling by keeping logic within the objects that own the data.

Key Concepts
------------

*   Instead of pulling data out of objects to make decisions, push the behavior into the object itself.
*   Objects should be responsible for their own logic and state management.

Asking style (bad):

    if (user.profile.isComplete()) {
        // allow checkout
    }
    

Telling style (good):

    if (user.canCheckout()) {
        // allow checkout
    }

Visit the following resources to learn more:

- [@article@Tell, Don't Ask](https://martinfowler.com/bliki/TellDontAsk.html)

## 관련 로드맵
- [[software-design-architecture|software-design-architecture]]
