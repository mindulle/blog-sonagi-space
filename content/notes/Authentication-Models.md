---
title: Authentication Models
tags: [concept, postgresql-dba]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/postgresql-dba/content/authentication-models@gb75xOcAr-q8TcA6_l1GZ.md
---

# Authentication Models

PostgreSQL supports various authentication models to control access, including trust (no password, for secure environments), password-based (md5 and scram-sha-256 for hashed passwords), GSSAPI and SSPI (Kerberos for secure single sign-on), LDAP (centralized user management), certificate-based (SSL c
ertificates for strong authentication), PAM (leveraging OS-managed authentication), Ident (verifying OS user names), and RADIUS (centralized authentication via RADIUS servers). These methods are confi
gured in the `pg_hba.conf` file, specifying the appropriate authentication method for different combinations of databases, users, and client addresses, ensuring flexible and secure access control.

Learn more from the following resources:

- [@official@Authentication Methods](https://www.postgresql.org/docs/current/auth-methods.html)
- [@article@An Introduction to Authorization and Authentication in PostgreSQL](https://www.prisma.io/dataguide/postgresql/authentication-and-authorization/intro-to-authn-and-authz)


## 관련 로드맵
- [[postgresql-dba|postgresql-dba]]
