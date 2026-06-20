Introduction
============

The Declaration Files section is designed to teach you how to write a
high-quality TypeScript Declaration File. We need to assume basic
familiarity with the TypeScript language in order to get started.

If you haven't already, you should read the [TypeScript
Handbook](../2/basic-types) to familiarize yourself with basic concepts,
especially types and modules.

The most common case for learning how .d.ts files work is that you're
typing an npm package with no types. In that case, you can jump straight
to [Modules .d.ts](templates/module-d-ts).

The Declaration Files section is broken down into the following
sections.

We are often faced with writing a declaration file when we only have
examples of the underlying library to guide us. The [Declaration
Reference](by-example) section shows many common API patterns and how to
write declarations for each of them. This guide is aimed at the
TypeScript novice who may not yet be familiar with every language
construct in TypeScript.

The [Library Structures](library-structures) guide helps you understand
common library formats and how to write a proper declaration file for
each format. If you're editing an existing file, you probably don't need
to read this section. Authors of new declaration files are strongly
encouraged to read this section to properly understand how the format of
the library influences the writing of the declaration file.

In the Template section you'll find a number of declaration files that
serve as a useful starting point when writing a new file. If you already
know what your structure is, see the d.ts Template section in the
sidebar.

Many common mistakes in declaration files can be easily avoided. The
[Do's and Don'ts](do-s-and-don-ts) section identifies common errors,
describes how to detect them, and how to fix them. Everyone should read
this section to help themselves avoid common mistakes.

For seasoned authors interested in the underlying mechanics of how
declaration files work, the [Deep Dive](deep-dive) section explains many
advanced concepts in declaration writing, and shows how to leverage
these concepts to create cleaner and more intuitive declaration files.

The [Publishing](publishing) section explains how to publish your
declaration files to an npm package, and shows how to manage your
dependent packages.

For JavaScript library users, the [Consumption](consumption) section
offers a few simple steps to locate and install corresponding
declaration files.

 
© 2012-2023 Microsoft\
Licensed under the Apache License, Version 2.0.\
https://www.typescriptlang.org/docs/handbook/declaration-files/introduction.html>



---
## 상세 내용 (Merged from 20_Wiki/Develop/References/typescript/modules/introduction.md)
Modules - Introduction
======================

This document is divided into four sections:

1.  The first section develops the [**theory**](theory) behind how
    TypeScript approaches modules. If you want to be able to write the
    correct module-related compiler options for any situation, reason
    about how to integrate TypeScript with other tools, or understand
    how TypeScript processes dependency packages, this is the place to
    start. While there are guides and reference pages on these topics,
    building an understanding of these fundamentals will make reading
    the guides easier, and give you a mental framework for dealing with
    real-world problems not specifically covered here.
2.  The [**guides**](guides/choosing-compiler-options) show how to
    accomplish specific real-world tasks, starting with picking the
    right compilation settings for a new project. The guides are a good
    place to start both for beginners who want to get up and running as
    quickly as possible and for experts who already have a good grasp of
    the theory but want concrete guidance on a complicated task.
3.  The [**reference**](reference) section provides a more detailed look
    at the syntaxes and configurations presented in previous sections.
4.  The [**appendices**](appendices/esm-cjs-interop) cover complicated
    topics that deserve additional explanation in more detail than the
    theory or reference sections allow.

 
© 2012-2023 Microsoft\
Licensed under the Apache License, Version 2.0.\
https://www.typescriptlang.org/docs/handbook/modules/introduction.html>



---
## 상세 내용 (Merged from 20_Wiki/_concepts/Introduction.md)

# Introduction

AWS (Amazon Web Services) offers a broad set of global cloud-based products including compute, storage, databases, analytics, networking, mobile, developer tools, management tools, IoT, security, and enterprise applications: on-demand, available in seconds, with pay-as-you-go pricing. From data ware
housing to deployment tools, directories to content delivery, over 200 AWS services are available. New services can be provisioned quickly, without the upfront fixed expense. This allows enterprises, 
start-ups, small and medium-sized businesses, and customers in the public sector to access the building blocks they need to respond quickly to changing business requirements. This whitepaper provides you with an overview of the benefits of the AWS Cloud and introduces you to the services that make u
p the platform.

Learn more from the following links:

- [@official@AWS Documentation](https://docs.aws.amazon.com/)
- [@official@Introduction of AWS](https://docs.aws.amazon.com/whitepapers/latest/aws-overview/introduction.html)
- [@article@How to Create an AWS Account](https://grapplingdev.com/tutorials/how-to-create-aws-account)
- [@video@AWS Tutorial for Beginners](https://www.youtube.com/watch?v=zA8guDqfv40)


## 관련 로드맵
- [[AWS|aws]]
