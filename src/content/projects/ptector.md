---
title: "Ptector"
description: "A Chrome extension for detecting phishing URLs using ML model"
tags: ["Chrome Extension", "ML", "Python"]
image: "/assets/img/combined_cat.jpg"
github: "https://github.com/banchan01/Ptector"
order: 3
---

Designed and optimized the **ML model** for a phishing URL detection Chrome extension as part of a Computer Networks course project.<br/>
Collaborated in a 5-member team with international peers.

<br/>

## What I Did

- Implemented and compared CNN, DNN, and Random Forest models for phishing URL detection.
- Trained a CNN on raw URLs and achieved **92% accuracy**.
- Switched to a feature-based DNN and improved accuracy to **95%**.
- Applied **feature importance–based selection** and evaluated a Random Forest model, achieving **94% accuracy** with faster inference.

<div class="graph-carousel">
  <img src="/assets/img/model-rf-1.png" alt="Feature Selection Graph 1" />
  <img src="/assets/img/model-rf-2.png" alt="Feature Selection Graph 2" />
  <img src="/assets/img/model-rf-3.png" alt="Feature Selection Graph 3" />
  <img src="/assets/img/model-rf-4.png" alt="Feature Selection Graph 4" />
  <img src="/assets/img/model-rf-5.png" alt="Feature Selection Graph 5" />
</div>
<p class="text-center mt-2">
  <a href="/assets/report/testing_of_model.pdf" download class="text-sm text-slate-500 font-medium hover:text-emerald-600 transition-colors inline-flex items-center gap-1 group">
    Feature-Selection Process report
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 group-hover:animate-bounce">
      <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
    </svg>
  </a>
</p>

- Connected the trained model to a Chrome extension through a backend API.

<br/>

## Insights

- Dataset size, data quality, and feature selection had a larger impact on performance than model complexity.
- Model selection required balancing accuracy and inference speed under limited data conditions.
- Clear role ownership and regular result sharing were necessary for effective team experiments.
