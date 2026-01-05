---
title: "SPP — Stock Price Predictor"
description: "머신러닝 회귀 알고리즘을 활용한 주가 예측 및 추세 분석 연구 프로젝트입니다."
tags: ["ML", "Linear Regression", "Logistic Regression"]
image: "https://placehold.co/800x400/f59e0b/ffffff?text=Stock+Predictor"
draft: true
order: 4
---

주가는 무작위로 움직이는 것처럼 보이지만, 그 속에는 데이터로 설명 가능한 추세가 존재합니다. SPP는 기본적인 **선형 및 로지스틱 회귀 알고리즘**을 활용하여 개별 종목의 단기 변동성을 예측하고, 복잡한 딥러닝 모델 없이도 유의미한 투자 지표를 도출할 수 있는지 연구한 프로젝트입니다.

<br/>

## What I Did

### 1. 기술적 지표를 활용한 특성 공학 (Feature Engineering)
주가 데이터(시가, 종가)만으로는 예측에 한계가 있었습니다. 이를 극복하기 위해 이동 평균선, RSI, 모멘텀 등 **기술적 지표(Technical Indicators)**를 계산하여 새로운 학습 Feature로 추가했습니다. 단순 가격 정보에 의존하던 기존 모델 대비 예측 오차율을 획기적으로 낮출 수 있었습니다.

### 2. MAPE 기반 성능 검증
예측 모델의 객관적인 성능 평가를 위해 **MAPE(Mean Absolute Percentage Error)**를 도입했습니다. Train/Test 데이터를 시계열 순서대로 엄격하게 분리하여 검증한 결과, 테스트 셋에서 MAPE 0.02(2%)라는 유의미한 정확도를 달성하며 단기 추세 예측 가능성을 확인했습니다.

<br/>

## Insights

> "특성 공학(Feature Engineering)은 모델 아키텍처보다 중요하다."

데이터 전처리와 어떤 특징(Feature)을 넣느냐가 모델의 성능을 결정짓는 핵심임을 깨달았습니다. 또한 무조건 복잡한 최신 딥러닝 모델을 사용하는 것보다, 문제의 본질에 맞는 '설명 가능한(Explainable)' 통계적 모델이 연구 단계에서는 더 가치 있을 수 있다는 교훈을 얻었습니다.
