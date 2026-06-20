---
title: "클라우드컴퓨팅 기말대비 마스터키트 Vol.1-B"
category: academic
tags: [exam, Cloud, 3-1, finals, Vol1, VariantB]
---

# 📑 클라우드컴퓨팅 마스터키트 Vol.1-B (비교 및 함정 타파)
**버전**: Vol. 1-B (비교 및 함정 타파)
**시험 범위**: Lecture 09 ~ 20
**사용법**: 인쇄 후 직접 펜으로 빈칸을 채우거나 문제를 풀며 암기 상태를 점검하세요.

---

## Part 1. 보안 및 책임 공유 모델 (O/X)
1. **(  )** AWS 책임 공유 모델에서, 클라우드 내부의 데이터 보안과 방화벽 설정은 AWS의 책임이다.
2. **(  )** 암호화 기술 중 대칭키 방식은 암호화와 복호화에 서로 다른 키를 사용한다.
3. **(  )** DDoS 공격을 방어하기 위해서는 대역폭 확장뿐만 아니라 침입 차단 시스템(IPS) 등의 다단계 방어가 필요하다.
4. **(  )** MFA(Multi-Factor Authentication)는 비밀번호 외에 추가적인 인증 수단을 사용하여 보안성을 높이는 기법이다.

## Part 2. OpenStack vs AWS 서비스 매칭
다음 OpenStack 컴포넌트와 기능이 유사한 AWS 서비스를 연결하시오.

| OpenStack | AWS 서비스 |
| :--- | :--- |
| (5) Nova | (A) EBS (Elastic Block Store) |
| (6) Cinder | (B) VPC (Virtual Private Cloud) |
| (7) Neutron | (C) EC2 (Elastic Compute Cloud) |
| (8) Swift | (D) S3 (Simple Storage Service) |

## Part 3. 클라우드 아키텍처 비교
9. **가상 머신(VM) vs 컨테이너**: 게스트 OS를 포함하여 격리성이 뛰어나지만 부팅이 느린 기술은 `[        ]`이고, 호스트 커널을 공유하여 빠르고 가벼운 기술은 `[        ]`이다.
10. **Scale-up vs Scale-out**: 단일 서버의 CPU/RAM 성능을 높이는 방식은 `[        ]`이고, 서버의 대수를 늘려 처리 능력을 확장하는 방식은 `[        ]`이다.
11. **CapEx vs OpEx**: 데이터 센터 건물을 짓고 서버를 대량 구매하는 초기 투자 비용은 `[        ]`에 해당하며, 클라우드 월 이용료는 `[        ]`에 해당한다.

## Part 4. 클라우드 마이그레이션 전략
12. 기존 애플리케이션의 코드를 수정하지 않고 그대로 클라우드 VM으로 옮기는 전략은 `[        ]` (Lift-and-Shift)이다.
13. 클라우드 환경에 맞게 애플리케이션 구조를 완전히 다시 설계하여 개발하는 전략은 `[        ]`이다.

---

<div style="page-break-before: always;"></div>

## 🔑 정답 (Vol.1-B)

1. **X** (데이터와 방화벽 설정은 **고객**의 책임임)
2. **X** (서로 다른 키를 쓰는 것은 **비대칭키/공개키** 방식임)
3. **O**
4. **O**
5. **(5)-(C)** | 6. **(6)-(A)** | 7. **(7)-(B)** | 8. **(8)-(D)**
6. VM / 컨테이너 | 10. Scale-up / Scale-out | 11. CapEx / OpEx | 12. Rehosting (리호스팅) | 13. Refactoring (리팩토링) / Re-architecting
