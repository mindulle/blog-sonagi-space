---
title: ReAct (Reason + Act)
tags: [concept, ai-agents]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/ai-agents/content/react-reason--act@53xDks6JQ33fHMa3XcuCd.md
---

# ReAct (Reason + Act)

ReAct is an agent pattern that makes a model alternate between two simple steps: Reason and Act. First, the agent writes a short thought that sums up what it knows and what it should try next. Then it performs an action such as calling an API, running code, or searching a document. The result of tha
t action is fed back, giving the agent fresh facts to think about. This loop repeats until the task is done. By showing its thoughts in plain text, the agent can be inspected, debugged, and even corre
cted on the fly. The clear split between thinking and doing also cuts wasted moves and guides the model toward steady progress. ReAct works well with large language models because they can both generate the chain of thoughts and choose the next tool in the very same response.

Visit the following resources to learn more:

- [@official@ReAct: Synergizing Reasoning and Acting in Language Models](https://react-lm.github.io/)
- [@article@ReAct Systems: Enhancing LLMs with Reasoning and Action](https://learnprompting.org/docs/agents/react)

## 관련 로드맵
- [[AI Agents|AI Agents]]
