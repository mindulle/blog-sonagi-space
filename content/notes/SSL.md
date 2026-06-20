---
title: SSL
tags: [concept, server-side-game-developer]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/server-side-game-developer/content/ssl@PSvPjaVtko71BeIA-hYqf.md
---

# SSL

Secure Sockets Layer (SSL) is a security protocol which provides encrypted communication between a web browser and a web server. This protocol operates via a process where the SSL certificate, held by the web server, creates two cryptographic keys - a Public Key and a Private Key. The public key is 
placed into a Certificate Signing Request (CSR) - a file also containing detailed information about the web server and your organization. A certificate authority then validates these details and issue
 an SSL certificate for your web server. This SSL certificate contains the new, unique public key for your web's session data. When a browser connects to this web server and the SSL handshake is complete, an encrypted SSL session is established via the protocols of symmetric cryptography. It's notew
orthy to mention that even though SSL has been succeeded by Transport Layer Security (TLS), people still refer to these certificates as SSL.

## 관련 로드맵
- [[server-side-game-developer|server-side-game-developer]]
