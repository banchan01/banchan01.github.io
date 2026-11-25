---
title: "Hambook Stocks"
description: "모의 투자로 주식 시장을 경험해 볼 수 있는 가상 주식 투자 웹 서비스"
---

가상 주식 투자 서비스의 **백엔드 아키텍처**와 **배포** 파이프라인을 개발했습니다.<br/>
V1/V2를 개선한 세 번째 버전의 프로젝트입니다. <br/>
<a href="https://hambook-stocks.me/" target="_blank" style="color: #2563eb; text-decoration: underline; text-underline-offset: 4px; display: inline-flex; align-items: center; gap: 4px;"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 16px; height: 16px;"><path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" /></svg>웹사이트 방문</a>

<br/>

## 주요 작업
- 프로젝트 아이디어 기획과 팀 운영을 이끌었습니다.
- **REST API**와 **MySQL 구조**를 설계하고 구현했습니다.
- Redis 캐싱을 적용해 **GPT API 비용을 줄였습니다**.
- 주가 데이터의 DB 부하를 줄이기 위해 WebSocket을 도입했습니다.
- AWS EC2에 Docker로 **서비스를 배포**했습니다.

<br/>

## 배운 점
- 갈등을 먼저 나서서 조율하고 참여를 이끌어 내는 것이 팀 결속의 핵심입니다.
- 지금 규모에 맞는 기술을 쓰고, 성장에 맞춰 리팩터링해야 합니다.
- 데이터 무결성을 지키려면 임계 구역 관리가 반드시 필요합니다.
