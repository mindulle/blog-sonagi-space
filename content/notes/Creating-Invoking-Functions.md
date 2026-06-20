---
title: Creating / Invoking Functions
tags: [concept, aws]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/aws/content/creating--invoking-functions@SdCNevKjyhFcreMSWY6BT.md
---

# Creating / Invoking Functions

To create a Lambda function in AWS, navigate to the AWS Management Console, select "Lambda" under "Compute" and then "Create function". Specify the function name, execution role and runtime environment. Once the function is created, you can write or paste the code into the inline editor. To invoke a
 Lambda function, you can either do it manually, via an API gateway, or schedule it. Manually invoking can be done by selecting your function in the AWS console, then "Test", add the event JSON and "T
est" again. If set up with an API gateway, it'll be triggered when the endpoints are hit. Scheduling involves using AWS Cloudwatch to trigger the functions periodically.

Visit the following resources to learn more:

- [@official@Create Your First Lambda Function](https://docs.aws.amazon.com/lambda/latest/dg/getting-started.html)
- [@video@First AWS Lambda Function](https://www.youtube.com/watch?v=e1tkFsFOBHA)


## 관련 로드맵
- [[AWS|aws]]
