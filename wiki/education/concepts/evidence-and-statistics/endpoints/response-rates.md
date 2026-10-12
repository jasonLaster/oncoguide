---
title: "Response rates: ORR, CBR and DCR"
type: concept
domain: evidence-and-statistics/endpoints
summary: "Response rates are proportions of a defined study population meeting specified tumor-response or disease-control criteria within the protocol's assessment rules."
glossary_anchor: response-rates
aliases: [response rates, objective response rate, overall response rate, ORR, clinical benefit rate, CBR, disease control rate, DCR]
level: foundation
prerequisites:
  - "[[wiki/education/concepts/measurement/imaging/response-criteria]]"
  - "[[wiki/education/concepts/evidence-and-statistics/effect-measures/confidence-interval]]"
used_by: ["[[wiki/education/cellular-therapies/09-reading-cell-therapy-evidence]]","[[wiki/education/guides/engineered-cell-therapy/10-read-a-research-product-study]]","[[wiki/education/guides/from-variant-to-drug/03-check-clinical-evidence-and-access]]","[[wiki/education/guides/reading-cancer-evidence/01-name-the-comparison-and-endpoint]]","[[wiki/education/guides/reading-cancer-evidence/index]]"]
sensitive: false
tags: [education, evidence-and-statistics]
updated: 2026-10-10
source_checked: 2026-10-10
reviewed: pending
reviewed_by: ""
review_status: "Source-checked; expert and learner review pending"
---

# Response rates: ORR, CBR and DCR

## In one sentence

Response rates are proportions of a defined study population meeting specified tumor-response or disease-control criteria within the protocol's assessment rules.

## The intuition

A headline percentage is a fraction with its label partly hidden. Before comparing two percentages, recover three things: what counted, who was counted and when. A larger fraction can result from a broader definition or a smaller denominator rather than a better treatment.

## How it works

[Response Evaluation Criteria in Solid Tumours (RECIST)](/wiki/education/concepts/measurement/imaging/response-criteria) supplies rules for assessing overall disease. **Complete response (CR)** and **partial response (PR)** are defined response categories. **Stable disease (SD)** means the overall assessment does not meet response or progression criteria under the applicable rules; it is not necessarily unchanged size.

| Label | Usual components | Definition to recover |
|---|---|---|
| **Objective response rate (ORR)**, sometimes called overall response rate | CR plus PR | Criteria, confirmation and analysis population |
| **Disease control rate (DCR)** | Often CR, PR and SD | Assessment time and any minimum duration required for SD |
| **Clinical benefit rate (CBR)** | Often CR, PR and qualifying durable SD | Exact duration rule and which categories qualify |

CBR and DCR are not universal definitions. Their names also do not prove symptom, quality-of-life or survival benefit. Stable disease can be valuable, but in a single-arm study some stability may reflect the disease's untreated course. ORR excludes SD. [FDA oncology endpoint guidance, 2018](https://www.fda.gov/media/71195/download).

“Confirmed” response means a later assessment meets the required confirmation rules. An initial qualifying scan can contribute to an unconfirmed rate while failing to become confirmed. RECIST 1.1 requires confirmation in nonrandomized trials whose primary endpoint is response; protocols and other designs have their own specified rules. Preserve the reported distinction. [Eisenhauer et al., 2009](https://recist.eortc.org/recist/wp-content/uploads/sites/14/2025/12/RECISTGuidelines.pdf).

## Why it matters in cancer

Two [androgen-receptor](/wiki/education/concepts/cancer-biology/signaling-pathways/androgen-receptor-signaling) research studies illustrate endpoint variation. Gucalp's 2013 advanced, hormone-receptor-negative breast-cancer trial defined CBR using CR, PR or SD lasting more than six months. Traina's 2018 advanced, androgen-receptor-expressing [triple-negative breast-cancer](/wiki/education/concepts/breast-cancer/receptors-and-subtypes/tnbc) trial used CBR at 16 weeks as its primary endpoint and also reported a 24-week endpoint. Those clocks are not interchangeable. [Gucalp et al., 2013](https://pubmed.ncbi.nlm.nih.gov/23965901/), [Traina et al., 2018](https://pubmed.ncbi.nlm.nih.gov/29373071/).

The latter reported both all-enrolled and a specified evaluable subgroup, with different biomarker and assessment requirements. Removing people without follow-up assessments can raise a rate. Keep the analysis population and handling of missing assessments attached; neither denominator should quietly replace the other.

## The readout card

The unit is usually **responding participants / specified participants**, expressed as a percentage with a [confidence interval (CI)](/wiki/education/concepts/evidence-and-statistics/effect-measures/confidence-interval). Record measurable-disease requirements, response criteria, scan schedule, reviewer, confirmation, data cutoff and missing-data rules. A lesion-level response rate has a lesion denominator and cannot be relabeled as a patient-level rate.

**Duration of response** asks how long response persists under a defined start, event and censoring rule. It adds information that ORR alone lacks. It is not the same as [progression-free survival](/wiki/education/concepts/evidence-and-statistics/endpoints/survival-endpoints) in the full study population.

## Common confusions

- A 30% ORR means 30% met the response definition, not that every tumor shrank by 30%.
- Adding SD changes the endpoint; it does not increase ORR.
- Best response over follow-up differs from disease status at one fixed visit.
- A response signal does not establish comparative survival benefit. [Surrogate endpoints](/wiki/education/concepts/evidence-and-statistics/endpoints/surrogate-endpoints) explains that bridge.

## Try it

In a fictional 20-person study, two have confirmed CR, four confirmed PR and eight SD at week 8. Only three of those eight retain qualifying SD through week 24. Everyone has complete assessments. Its protocol defines DCR at week 8 as CR + PR + SD, and CBR as confirmed CR + PR or SD lasting at least 24 weeks.

What are the three rates?

**Answer:** ORR is 6/20 = 30%; week-8 DCR is 14/20 = 70%; protocol-defined CBR is 9/20 = 45%. None alone establishes survival benefit. These definitions belong to this invented protocol.

<img src="./images/response-rates-participants-and-clocks-v1-light.svg" alt="Three independent charts repeat the same 20 fictional participant markers. Six confirmed complete or partial responses count for objective response rate, 30%; those six plus eight stable-disease cases count for week-8 disease control, 70%; the six responses plus only three stable-disease cases qualifying through week 24 count for the protocol-defined clinical benefit rate, 45%. All 20 have complete assessments; excluded markers remain in every denominator. The 24-week threshold applies only to the stable-disease branch." width="780" height="1500" data-theme-pair>

*The same 20 fictional participants give three answers: confirmed CR + PR = 6/20 (30%); week-8 CR + PR + SD = 14/20 (70%); confirmed CR + PR or SD lasting at least 24 weeks = 9/20 (45%). The 24-week rule applies to SD in this invented protocol. Excluded participants stay in the denominator; this chart supplies no individual trajectory or survival-benefit estimate.*

## Explain it back

“This percentage counts ___ out of ___ using ___.” One answer: “confirmed complete or partial responses; all 20 participants; the stated criteria and confirmation rules.”

## Takeaway

**Read the numerator, denominator, time and confirmation rule before the headline percentage.**

## Related concepts

[Response criteria](/wiki/education/concepts/measurement/imaging/response-criteria) explains the lesion-level measurements behind overall categories. [Cross-trial comparison](/wiki/education/concepts/evidence-and-statistics/reasoning-tools/cross-trial-comparison) explains why percentages from different studies do not create a direct comparison.

## Sources and scope

Source check: October 10, 2026. Fictional arithmetic; named studies illustrate endpoint and population definitions, not current access or treatment recommendations. Expert and learner review pending.

- [FDA, December 2018: oncology clinical-trial endpoint guidance](https://www.fda.gov/media/71195/download) — ORR, SD and response durability.
- [Eisenhauer et al., 2009: primary RECIST 1.1 guideline](https://recist.eortc.org/recist/wp-content/uploads/sites/14/2025/12/RECISTGuidelines.pdf) — overall response, confirmation and protocol rules.
- [Gucalp et al., 2013: bicalutamide phase II study](https://pubmed.ncbi.nlm.nih.gov/23965901/) — the abstract's explicit CBR definition in selected advanced breast cancer.
- [Traina et al., 2018: enzalutamide phase II study](https://pubmed.ncbi.nlm.nih.gov/29373071/) — distinct timepoints and analysis populations in advanced disease.

<!-- BEGIN GENERATED USED IN -->
## Used in

- [Reading cell-therapy evidence](/wiki/education/cellular-therapies/09-reading-cell-therapy-evidence)
- [Read a research-product study without losing the denominator](/wiki/education/guides/engineered-cell-therapy/10-read-a-research-product-study)
- [Check clinical evidence and access](/wiki/education/guides/from-variant-to-drug/03-check-clinical-evidence-and-access)
- [Name the comparison and endpoint](/wiki/education/guides/reading-cancer-evidence/01-name-the-comparison-and-endpoint)
- [Read trial claims and survival statistics](/wiki/education/guides/reading-cancer-evidence/index)
<!-- END GENERATED USED IN -->
