---
title: "클라우드컴퓨팅 기말대비 마스터키트 Vol.1"
category: academic
tags: [exam, Cloud, 3-1, finals, Vol1]
---

# ☁️ 클라우드컴퓨팅 마스터키트 Vol.1 (기초 개념)
**버전**: Vol. 1 (기본 개념 빈칸 채우기 & 기본 아키텍처)
**시험 범위**: Lecture 09 ~ 20 (클라우드 보안, OpenStack, 마이그레이션, 퍼블릭 클라우드, 비용/SLA)
**사용법**: 인쇄 후 직접 펜으로 빈칸을 채워가며 암기 상태를 점검하세요.

---

## Part 1. 클라우드 보안 기초 개념 (Lecture 09-11)
1. 클라우드 보안에서 데이터 자체를 보호하기 위한 가장 기본적인 매커니즘으로, 데이터를 암호문으로 변환하는 기술을 `[        ]`(Encryption)이라 한다.
2. 클라우드 사용자와 서비스 제공자 간의 인증 프로세스를 단일화하여 한 번의 로그인으로 여러 서비스를 이용하게 해주는 시스템은 `[        ]`(SSO, Single Sign-On)이다.
3. 악의적인 공격자가 네트워크에 대량의 트래픽을 발생시켜 클라우드 자원을 고갈시키는 공격은 `[        ]`(DDoS)이다.

## Part 2. OpenStack 핵심 컴포넌트 매칭 (Lecture 10)
4. 가상 머신(VM) 인스턴스의 프로비저닝과 관리를 담당하는 컴퓨트(Compute) 서비스: `[        ]`
5. 가상 네트워크, 라우터, 로드밸런서 등을 제공하는 네트워크(Network) 서비스: `[        ]`
6. 가상 머신에 연결할 수 있는 블록 기반의 저장 공간을 제공하는 볼륨(Volume) 서비스: `[        ]`
7. 클라우드 내의 모든 서비스에 대한 인증 및 권한 부여를 담당하는 Identity 서비스: `[        ]`

## Part 3. 퍼블릭 클라우드 서비스 매핑 (Lecture 14-15)
8. AWS의 가상 서버 호스팅 서비스(IaaS)의 이름은 `[        ]`(EC2) 이다.
9. AWS의 완전 관리형 관계형 데이터베이스 서비스의 약자는 `[        ]`(RDS) 이다.
10. 정적 웹 사이트 호스팅이나 무제한 데이터 백업에 쓰이는 AWS 객체 스토리지 서비스는 `[        ]`(S3) 이다.
11. Microsoft Azure에서 서버리스 코드를 실행할 수 있게 해주는 FaaS(Function as a Service) 제품 이름은 `[        ]` 이다.

## Part 4. SLA와 비용 모델 (Lecture 19-20)
11-5. [과제 06 연계] OpenStack 실습에서, `vCPU 1, RAM 512MB, Disk 5GB` 스펙으로 생성한 사용자 정의 인스턴스 템플릿의 명칭(OpenStack 용어)은 `[        ]`(Flavor) 이다.
11-6. [퀴즈 06 기출] 제품: 가상 서버, 4-core CPU, 16GB RAM, 100GB HDD를 대여하는 클라우드 서비스 모델은 `[        ]`(IaaS) 이다.
12. 클라우드 서비스 사업자(CSP)와 고객 간에 합의하는 '서비스 수준 협약'의 영문 약자는 `[        ]`(SLA)이다.
13. 초기 자본 투자(CapEx) 대신, 자원을 사용한 만큼만 비용을 지불하는 클라우드의 경제적 모델을 `[        ]` (OpEx / Pay-as-you-go) 방식이라 한다.

---

<div style="page-break-before: always;"></div>

## 🔑 정답 (Vol.1)

1. 암호화 (Encryption)
2. SSO (Single Sign-On)
3. DDoS (Distributed Denial of Service)
4. Nova
5. Neutron
6. Cinder
7. Keystone
8. EC2 (Elastic Compute Cloud)
9. RDS (Relational Database Service)
10. S3 (Simple Storage Service)
11. Azure Functions
11-5. Flavor (플레이버)
11-6. IaaS (Infrastructure as a Service)
12. SLA (Service Level Agreement)
13. 종량제 과금 (Pay-as-you-go) 또는 운영 비용(OpEx)
