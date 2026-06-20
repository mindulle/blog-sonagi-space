---
title: arp
tags: [concept, cyber-security]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/cyber-security/content/arp@hkO3Ga6KctKODr4gos6qX.md
---

# ARP Troubleshooting

Address Resolution Protocol (ARP) is a protocol used to map an IP address to a physical machine address, also known as a Media Access Control (MAC) address, on a local network. When a device wants to communicate with another device on the same network, it uses ARP to find the MAC address associated 
with the destination's IP address. Problems with ARP can lead to communication failures and network connectivity issues, requiring specific tools and techniques for diagnosis and resolution.

Visit the following resources to learn more:

- [@article@ARP - Wikipedia](https://en.wikipedia.org/wiki/Address_Resolution_Protocol)
- [@article@What is Address Resolution Protocol?](https://www.fortinet.com/resources/cyberglossary/what-is-arp)
- [@video@ARP Explained](https://www.youtube.com/watch?v=cn8Zxh9bPio)

## 관련 로드맵
- [[cyber-security|cyber-security]]


---
## 상세 내용 (Merged from 20_Wiki/_concepts/ARP.md)

# ARP

**ARP** or **Address Resolution Protocol** is a protocol used to map an IP address to a physical address on the network, such as a MAC address. A device uses ARP when it needs to forward a packet to another device on the same network but only has the IP address. ARP broadcasts a request packet to al
l devices on the local network to find who owns the IP address. The device with the matching IP address replies with its MAC address. ARP maintains a cache of previously resolved addresses to minimize
 traffic. It is an essential protocol in network communication, but it also exposes certain security vulnerabilities like ARP spoofing.

## 관련 로드맵
- [[server-side-game-developer|server-side-game-developer]]
