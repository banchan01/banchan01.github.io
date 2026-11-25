---
title: "Tesy"
description: "AI 기반 영어 학습 서비스 & 텔레그램 대화 도우미"
---

개인적으로 겪던 영어 학습의 어려움을 해결하려고 풀스택 영어 학습 플랫폼을 만들었습니다. **React.js** 프론트엔드와 **Ruby on Rails** 백엔드부터 **Docker** 기반 배포까지 모두 담당했습니다.

<div style="display: flex; flex-direction: column; gap: 8px; margin-top: 12px;">
<a href="https://tesybot.site/" target="_blank" style="color: #2563eb; text-decoration: underline; text-underline-offset: 4px; display: inline-flex; align-items: center; gap: 4px;"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 16px; height: 16px;"><path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" /></svg>웹사이트 방문</a>
<a href="https://t.me/TESY2_bot" target="_blank" style="color: #2563eb; text-decoration: underline; text-underline-offset: 4px; display: inline-flex; align-items: center; gap: 4px;"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 16px; height: 16px;"><path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" /></svg>텔레그램 봇</a>
</div>
<br/>

## 주요 작업

- **프로젝트 전체 설계**: 문제를 정의하고, 학습 방법론을 설계하고, 해결 방안을 기획했습니다.
- **데이터베이스 스키마**를 설계하고, API를 효율적으로 쓰기 위한 **Redis 캐싱 전략**을 구현했습니다.
- **텔레그램 기반 인증** 시스템을 직접 개발했습니다.
- 퀴즈 생성 로직을 레벤슈타인 거리 알고리즘에서 **Gemini API**로 개선했습니다.
- **디바운싱**을 적용해 중복 API 호출을 줄이고 토큰 사용량을 최적화했습니다.

<br/>

## 배운 점

- 프론트엔드에서 기능이 복잡해질수록 **Redux**가 상태 관리를 크게 단순하게 만들어 줍니다.
- **혼자 전체를 맡아 보며** 설계 결정의 무게를 배웠습니다. 신중한 계획이 프로젝트 성패를 바로 좌우합니다.
- 성능을 높이고 외부 API 비용을 줄이려면 효과적인 **캐싱 전략**이 필수입니다.
