---
title: Messages vs Streams
tags: [concept, data-engineer]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/data-engineer/content/messages-vs-streams@IZvL-1Xi0R9IuwJ30FDm4.md
---

# Messages vs Streams

Messages and Streams are often used interchange‐ably but a subtle but essential differences exists between the two. A message is raw data communicated across two or more systems. Messages are discrete and singular signals in an event-driven system.

By contrast, a stream is an append-only log of event records. As events occur, streams are accumulated in an ordered sequence, using a timestamp or an ID to record events order. Streams are used when you need to analyze what happened over many events. Because of the append-only nature of streams, re
cords in a stream are persisted over a long retention window—often weeks or months—allowing for complex operations on records such as aggregations on multiple records or the ability to rewind to a poi
nt in time within the stream.

## 관련 로드맵
- [[data-engineer|data-engineer]]
