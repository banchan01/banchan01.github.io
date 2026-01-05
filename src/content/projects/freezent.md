---
title: "Freezent"
description: "A multi-agent system for stock price manipulation detection."
tags: ["DL", "Backend", "Crawling"]
image: "/assets/img/freezent.png"
github: "https://github.com/banchan01/Freezent"
order: 1
---

Developed **analysis modules** for a stock price manipulation detection agent system using regulatory filings and market data, and trained **DL model**.<br/>

<br/>

## What I Did

- Led **problem definition** and analysis of stock price manipulation factors.
- Trained an **LSTM-AE model** for time-series anomaly detection on stock prices and trading volumes.
- Performed correlation-based **feature selection** on time-series market data.
- Built data pipelines to **crawl** and **preprocess** market, news, and regulatory data (KRX, Infostockdaily, DART).
- Implemented analysis modules including free-float ratio computation, third-party capital increase identification.

<br/>

## Insights

- Reviewing existing libraries early helps mitigate risks from crawling policy changes.
- Proper handling of missing values is critical for reliable time-series modeling.
- Choosing between on-demand crawling and pre-crawled storage involves clear performance trade-offs.
- Agent-based systems require explicitly defined decision logic and analysis flow.
- Early root-cause analysis and system-level design significantly reduce later debugging costs.