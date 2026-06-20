---
title: Configuration Sets
tags: [concept, aws]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/aws/content/configuration-sets@4svXYQYmqjUZU39z8OyhD.md
---

# Configuration Sets

Configuration Sets in SES (Simple Email Service) of AWS (Amazon Web Services) allow you to publish email sending events. These sets are used to group together similar rules that you can apply to emails you send using AWS SES. You can apply a configuration set to an email by including it in the heade
rs of the email. It can be used to specify the dedicated sending IP pools, configure the message delivery parameters, and to enable open and click tracking. AWS SES sends information about each email 
sent with the set to CloudWatch and Kinesis Firehose which can be later utilized for further analysis or to manage your customer interactions more effectively.

Visit the following resources to learn more:

- [@official@SES](https://docs.aws.amazon.com/ses/latest/dg/using-configuration-sets.html)


## 관련 로드맵
- [[AWS|aws]]
