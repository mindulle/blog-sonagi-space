---
title: HTTP / HTTPs
tags: [concept, ios]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/ios/content/http--https@GjY5qCU1rjB0D58qHQtAR.md
---

# HTTP / HTTPs

HTTP (Hypertext Transfer Protocol) and HTTPS (HTTP Secure) are fundamental protocols for data communication on the internet, extensively used in iOS app networking. HTTP facilitates request-response interactions between clients and servers, defining how messages are formatted and transmitted. HTTPS 
extends HTTP by encrypting the data exchange using SSL/TLS protocols, ensuring secure communication. In iOS development, URLSession handles both HTTP and HTTPS requests seamlessly, automatically manag
ing the encryption for HTTPS connections. Developers typically use HTTPS for all network communications to protect user data and maintain privacy. iOS enforces App Transport Security (ATS) by default, requiring secure connections for network requests. When working with web APIs, iOS apps use these p
rotocols to fetch data, submit forms, upload files, and perform various other network operations. Understanding HTTP methods (GET, POST, PUT, DELETE, etc.), status codes, and headers is crucial for ef
fective API integration and troubleshooting in iOS app development.

Learn more from the following resources:

- [@official@URLSession](https://developer.apple.com/documentation/foundation/urlsession)
- [@article@Mastering URLSession in Swift](https://elamir.medium.com/mastering-urlsession-in-swift-a-comprehensive-guide-d3a3aa740f6e)

## 관련 로드맵
- [[ios|ios]]


---
## 상세 내용 (Merged from 20_Wiki/_concepts/HTTP  HTTPS.md)

# HTTP / HTTPS

HTTP (Hypertext Transfer Protocol) is the foundation of data communication on the web. It defines how messages are formatted and transmitted between a web server and a browser. HTTPS (HTTP Secure) is the secure version of HTTP, where the communication is encrypted using Transport Layer Security (TLS
) or Secure Sockets Layer (SSL). This encryption protects the data being transferred from eavesdropping and tampering.

Visit the following resources to learn more:

- [@article@An Overview of HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview)
- [@article@What is HTTPS?](https://www.cloudflare.com/en-gb/learning/ssl/what-is-https/)

## 관련 로드맵
- [[cyber-security|cyber-security]]
