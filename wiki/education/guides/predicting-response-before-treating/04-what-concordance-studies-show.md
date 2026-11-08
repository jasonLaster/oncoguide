---
title: "What real concordance studies show"
type: "guide-lesson"
guide: "predicting-response-before-treating"
step: 4
minutes: 14
objectives: ["Read a published model-versus-patient study as a funnel from offered patients to agreeing results.", "Summarize what organoid, slice and xenograft studies have shown, with their denominators.", "Explain why agreement studies and guided-treatment studies have not yet shown clinical utility in solid tumors."]
prerequisites: ["[[wiki/education/concepts/measurement/functional-models/pdx-vs-organoid-vs-tumor-fragment]]", "[[wiki/education/concepts/measurement/functional-models/how-a-model-earns-trust]]", "[[wiki/education/concepts/evidence-and-statistics/tests-and-prediction/ppv-and-base-rates]]"]
sensitive: false
tags: ["education", "functional-models"]
updated: "2026-11-08"
source_checked: "2026-11-08"
reviewed: "pending"
reviewed_by: ""
review_status: "Source-checked; expert and learner review pending"
---

# What real concordance studies show

**Patient-derived models often agree with how patients responded, but in small, selected groups, for some drugs and not others; no study has yet shown that choosing solid-tumor treatment by a model helps patients.**

**Before you start:** The [PDX, organoid or fragment comparison](/wiki/education/concepts/measurement/functional-models/pdx-vs-organoid-vs-tumor-fragment) sets out what each living model keeps and how long it takes. [How a model earns trust](/wiki/education/concepts/measurement/functional-models/how-a-model-earns-trust) separates agreement from usefulness. [Predictive values and base rates](/wiki/education/concepts/evidence-and-statistics/tests-and-prediction/ppv-and-base-rates) explains why the same test can look better or worse in different groups.

## Where this step sits

This is step 4 of [Understand what a tumor model can predict](/wiki/education/guides/predicting-response-before-treating/index). Lesson 3 read one breast study closely. This lesson lines up the larger published record, so you know what a typical claim rests on.

## Read every study as a funnel

A headline percentage sits at the bottom of a funnel. Write down four counts before reading it:

1. **Offered:** patients whose tissue was sent for a model.
2. **Model obtained:** how many gave a working organoid, slice or graft.
3. **Compared:** how many model results were checked against a patient outcome.
4. **Agreed:** how many matched.

Then ask which outcome was used (scan shrinkage, progression, survival), in which patients (often heavily pretreated, metastatic disease) and for which drugs. The percentage applies only to the compared group.

## What the published record shows

| Model | Study and population | Funnel | Agreement |
|---|---|---|---|
| Tumor slices | [Ladan 2023](https://pmc.ncbi.nlm.nih.gov/articles/PMC10542784/): breast cancer before chemotherapy | 30 biopsies with tumor → 23 usable → 20 compared | 15 of 20 (75%) matched MRI response; no tumor called resistant |
| Organoids | [Vlachogiannis 2018](https://pmc.ncbi.nlm.nih.gov/articles/PMC6112415/): heavily pretreated metastatic colorectal and gastroesophageal cancers in early-phase trials | Organoids grew from 70% of adequately cellular biopsies; 21 drug–patient comparisons | Sensitivity 100%, specificity 93%, positive predictive value (PPV) 88%, negative predictive value (NPV) 100% |
| Organoids | [Ooft 2019](https://pubmed.ncbi.nlm.nih.gov/31597751/): 61 people with metastatic colorectal cancer | Biopsy of one lesion, tested against standard chemotherapy; organoid responses compared with patient responses in 29 people, 10 to 12 per regimen ([Wensink 2021](https://pmc.ncbi.nlm.nih.gov/articles/PMC8042051/) tally) | Predicted the biopsied lesion's response in more than 80% of people given irinotecan-based treatment, but **failed** for 5-fluorouracil plus oxaliplatin |
| Organoids | [Boilève 2024](https://pubmed.ncbi.nlm.nih.gov/38866343/): pretreated advanced pancreatic cancer | 87 enrolled → 54 organoids (62%) → 34 evaluable; mean 6.8 weeks to a result | Sensitivity 83.3%, specificity 92.9% |
| Xenografts | [Izumchenko 2017](https://pmc.ncbi.nlm.nih.gov/articles/PMC5834154/): mixed solid tumors | 1,163 implanted → 578 grew (49%); 92 patients with 129 treatments compared | 112 of 129 (87%) matched; sensitivity 96%, specificity 70% |
| Pooled organoid studies | [Wensink 2021](https://pmc.ncbi.nlm.nih.gov/articles/PMC8042051/): systematic review of 17 publications; colorectal cancer was the most common (5 of 17) | Pooled establishment about 68% | Pooled sensitivity 81%, specificity 74%; the authors say these are likely overestimates |

Five patterns stand out:

- **The funnel shrinks.** In the pancreatic study, the 34 evaluable patients were 39% of the 87 enrolled.
- **Agreement depends on the drug.** The same colorectal organoids tracked irinotecan but not oxaliplatin-based treatment.
- **Populations are narrow.** Most studies used metastatic, pretreated disease, and most were in gastrointestinal cancers, not breast.
- **Outcomes are mostly scans.** Agreement with tumor shrinkage or progression is not agreement with survival.
- **Published studies lean positive.** Small studies with weak results are less likely to be published, which is one reason the pooled review called its own estimates high.

## What happened when treatment followed the model

Agreement asks whether the model matched what happened. Utility asks whether choosing treatment by the model makes people do better. Those are different studies.

| Study | What was done | Result |
|---|---|---|
| SENSOR ([Ooft 2021](https://pubmed.ncbi.nlm.nih.gov/33887686/)), metastatic colorectal cancer | Organoids screened against 8 drugs; patients treated with an organoid-selected drug after standard treatment failed | 54 eligible → 31 organoids → 25 screened → 19 showed a drug response → 6 treated. None of the 6 had an objective response |
| EXALT ([Kornauth 2022](https://pubmed.ncbi.nlm.nih.gov/34635570/)), advanced blood cancers | Image-based drug testing on patient cells guided treatment | 143 enrolled, 56 treated by the test; 30 of 56 (54%) had progression-free survival at least 1.3 times longer than on their previous therapy |

EXALT is encouraging, but it compared each person with their own previous treatment, not with a randomized control group, and blood cancers are easier to sample and test than solid tumors. The 2021 systematic review found no randomized trial of organoid-guided treatment ([Wensink 2021](https://pmc.ncbi.nlm.nih.gov/articles/PMC8042051/)), and none reporting benefit in solid tumors was found for this lesson.

A single success story is a different kind of evidence. One report described a person with metastatic triple-negative breast cancer whose xenograft and organoid models pointed to an approved drug, followed by a complete response ([Guillen 2022](https://pubmed.ncbi.nlm.nih.gov/35221336/)). It shows that the workflow can run within real care. It cannot show how often the approach helps, because there is no comparison.

## What can go wrong at this step

- The headline uses the compared group and hides failed models; keep the [denominator](/wiki/education/concepts/evidence-and-statistics/reasoning-tools/denominators-and-conditional-probability).
- A result from one drug is assumed to transfer to another.
- A result in pretreated metastatic disease is applied to early cancer, or to a decision after surgery.
- Agreement is described as accuracy, or as proof the model improves care.
- One person's response is treated as evidence for everyone.

## Try it

A clinic says its organoid test "predicts response with 88% accuracy" and cites the Vlachogiannis study. Your relative has early triple-negative breast cancer after surgery. What should you ask?

**Answer:** The 88% is a positive predictive value from 21 comparisons in heavily pretreated metastatic gastrointestinal cancers. Ask how many patients that was, how many biopsies failed to grow, which drugs were tested, and whether any study has been done in early breast cancer after surgery. Then ask whether choosing treatment by the test has been compared with standard choice. For solid tumors, no such randomized result exists yet.

## Explain it back

"A published concordance figure applies to ___, measured against ___, for ___; it does not show ___."

**One possible answer:** "the patients whose models grew and were compared; a scan or progression outcome; the drugs tested; that choosing treatment by the model helps."

## Takeaway

**Read the funnel, the drug and the population before the percentage, and treat agreement as a reason for a trial, not a reason to change care.**

**Next:** Revisit [the course map](/wiki/education/guides/predicting-response-before-treating/index), or [judge a test's validation claim](/wiki/education/guides/judging-a-test-or-vendor-claim/02-read-the-validation).

## Sources and scope

Source check: November 8, 2026, against primary abstracts and, for Ladan, Vlachogiannis, Izumchenko and Wensink, the full text. A PubMed search on November 8, 2026 found no randomized trial reporting benefit from model-guided treatment in solid tumors. General education, not a testing recommendation. Expert and learner review remain pending.

- [Ladan et al., 2023](https://pmc.ncbi.nlm.nih.gov/articles/PMC10542784/) — breast slices; 15 of 20 concordant (PMID 37777518).
- [Vlachogiannis et al., 2018](https://pmc.ncbi.nlm.nih.gov/articles/PMC6112415/) — gastrointestinal organoids; 21 comparisons (PMID 29472484).
- [Ooft et al., 2019](https://pubmed.ncbi.nlm.nih.gov/31597751/) and [Ooft et al., 2021 (SENSOR)](https://pubmed.ncbi.nlm.nih.gov/33887686/) — colorectal organoid prediction and organoid-guided treatment.
- [Boilève et al., 2024](https://pubmed.ncbi.nlm.nih.gov/38866343/) — pancreatic organoids, 34 evaluable.
- [Izumchenko et al., 2017](https://pmc.ncbi.nlm.nih.gov/articles/PMC5834154/) — xenografts, 112 of 129 matched (PMID 28945830).
- [Wensink et al., 2021](https://pmc.ncbi.nlm.nih.gov/articles/PMC8042051/) — systematic review and pooled analysis (PMID 33846504).
- [Kornauth et al., 2022](https://pubmed.ncbi.nlm.nih.gov/34635570/) — EXALT, functional testing in blood cancers; [Guillen et al., 2022](https://pubmed.ncbi.nlm.nih.gov/35221336/) — breast xenograft and organoid platform with one case.
