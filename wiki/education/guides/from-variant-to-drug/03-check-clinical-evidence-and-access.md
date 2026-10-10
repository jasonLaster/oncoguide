---
title: "Check clinical evidence and access"
type: "guide-lesson"
guide: "from-variant-to-drug"
step: 3
minutes: 16
objectives: ["Match a drug claim to the studied disease, biomarker, treatment setting, and outcome.", "Distinguish mechanistic support, randomized benefit, indication criteria, and practical access.", "Write a qualified conclusion and identify the next clinical-evidence question."]
prerequisites: ["[[wiki/education/concepts/evidence-and-statistics/biomarkers/actionability]]", "[[wiki/education/concepts/evidence-and-statistics/biomarkers/prognostic-vs-predictive]]", "[[wiki/education/concepts/measurement/computational-analysis/analytical-validity-clinical-validity-and-utility]]"]
sensitive: false
tags: ["education", "molecular-interpretation"]
updated: 2026-10-10
source_checked: "2026-10-09"
reviewed: "pending"
reviewed_by: ""
review_status: "Source-checked; expert and learner review pending"
---

# Check clinical evidence and access

**A molecular match becomes clinically useful only when the evidence fits the actual disease and treatment question. Eligibility and access are additional gates.**

**Before you start:** [Clinical actionability](/wiki/education/concepts/evidence-and-statistics/biomarkers/actionability) asks whether a finding supports a specific decision. [Prognostic versus predictive biomarkers](/wiki/education/concepts/evidence-and-statistics/biomarkers/prognostic-vs-predictive) separates outcome association from differences in treatment effect. [Validity and utility](/wiki/education/concepts/measurement/computational-analysis/analytical-validity-clinical-validity-and-utility) separates measuring correctly from helping patients.

## Where this step sits

This is step 3 of [From a variant to a drug claim](/wiki/education/guides/from-variant-to-drug/index). [Step 1](/wiki/education/guides/from-variant-to-drug/01-authenticate-and-attribute-the-finding) authenticated the finding. [Step 2](/wiki/education/guides/from-variant-to-drug/02-connect-repair-biology-to-parp-sensitivity) connected repair biology to a model response. Now test whether the clinical evidence answers the intended question.

## Turn the hypothesis into an answerable question

“Could this drug work?” is an understandable question, but it hides several different comparisons. Write the proposed use with six fields: disease, biomarker, setting, intervention, comparator, and outcome.

For example: “In early breast cancer after initial treatment, does adding drug D improve recurrence or survival outcomes for patients with biomarker B, compared with the relevant care?”

**Adjuvant** treatment is given after initial local treatment to reduce recurrence risk. **Metastatic** disease has spread to distant sites. Shrinking measurable metastatic tumors and reducing recurrence after surgery are different outcomes. A study of one setting cannot directly answer the other.

## Read the population before the headline

Check the study's exact inclusion criteria, prior treatments, biomarker assay, and whether the relevant subgroup was large enough to interpret. “BRCA-altered” can conceal germline and somatic findings, different genes, or variants with different classifications.

A single-arm study follows a treatment group without a randomized comparator. It can provide a useful [response-rate signal](/wiki/education/concepts/evidence-and-statistics/endpoints/response-rates), but it cannot by itself isolate the treatment's comparative benefit. A [cross-trial comparison](/wiki/education/concepts/evidence-and-statistics/reasoning-tools/cross-trial-comparison) with a different cohort leaves a separate comparability question. Randomization helps compare groups under a specified treatment strategy. Neither design automatically applies to an unstudied biomarker or setting.

The SHIVA randomized study tested one molecular-matching strategy in refractory advanced cancers. Its results did not establish that matching pathway names to drugs was generally superior to conventional treatment in that tested setting. This limits that strategy; it does not invalidate every precision treatment. [Le Tourneau 2015](https://pubmed.ncbi.nlm.nih.gov/26342236/).

## A real comparison of evidence boundaries

The PARP example makes the distinction concrete. The table describes named studies, not a current treatment recommendation.

| Evidence | Population and question | Boundary |
|---|---|---|
| OlympiA randomized trial | High-risk early breast cancer with qualifying germline BRCA1/2 variants; adjuvant olaparib versus placebo after initial therapy | It does not directly establish benefit for somatic-only early breast cancer. |
| TBCRC 048 and its expansion cohorts | Metastatic breast cancer with specified germline PALB2 or somatic BRCA1/2 alterations; olaparib response | A metastatic response study does not establish adjuvant recurrence benefit. |
| A functional tumor model | A particular model at a particular drug exposure | It does not establish patient benefit, safe exposure, or indication eligibility. |

[OlympiA 2022](https://pubmed.ncbi.nlm.nih.gov/36228963/), [TBCRC 048 2020](https://pubmed.ncbi.nlm.nih.gov/33119476/), [expansion-cohort publication 2026](https://pubmed.ncbi.nlm.nih.gov/41604601/).

The 2025 U.S. Food and Drug Administration (FDA) olaparib label's early breast cancer indication requires a qualifying germline BRCA alteration, high-risk disease without human epidermal growth factor receptor 2 (HER2) overexpression, prior chemotherapy, and indication-specific patient selection. A genomic scar or somatic-only finding does not replace that germline criterion. Other cancer indications use different biomarker rules. [FDA label, sections 1.4 and 2.1](https://www.accessdata.fda.gov/drugsatfda_docs/label/2025/208558s031lbl.pdf).

## A worked example: keep the missing evidence visible

A fictional early-breast-cancer patient has a credible somatic repair-gene alteration, a compatible scar, and a laboratory model with a drug response. An article reports responses in metastatic patients with a related biomarker.

The careful conclusion has three parts. The biology supports a treatment hypothesis. The metastatic study supplies an adjacent clinical signal. Direct adjuvant evidence for this patient's actual biomarker remains a separate question.

A trial might explicitly study that gap. The next task is to read its protocol and confirm that the specific setting and biomarker are accepted. A molecular resemblance cannot substitute for the trial's criteria.

## Access needs its own check

An indication defines a specified approved use. **Off-label** use involves an approved medicine outside that use; it does not mean the use is proven. A trial has eligibility rules and actual site availability. Both can change, so verify them when a real decision is being considered.

**Expanded access** is a regulated route for investigational products outside a trial under defined conditions. It depends on clinical judgment, product availability and sponsor cooperation, and applicable regulatory and review requirements. A registry listing or pathway rationale does not guarantee supply. [FDA expanded-access guidance, April 2026](https://www.fda.gov/regulatory-information/search-fda-guidance-documents/expanded-access-investigational-drugs-treatment-use-questions-and-answers).

[Accessing experimental therapy](/wiki/education/guides/accessing-experimental-therapy/index) develops these checks. The purpose here is to keep evidence, eligibility, and access as distinct conclusions.

## What can go wrong at this step

A treatment effect in another disease can be transferred without justification. A subgroup response can be quoted without its population or comparator. A target-engagement result can be presented as efficacy. A permissive access route can be treated as evidence that treatment is appropriate.

Write an **evidence ledger**, a short table recording each observation, its source, the conclusion it supports, and the remaining gap. [The shared care-plan lesson](/wiki/education/molecular-profiling/07-from-data-to-care-plan) supplies a model. The [variant-to-benefit chain](/wiki/education/concepts/evidence-and-statistics/reasoning-tools/evidence-chain-variant-to-benefit) makes those links explicit. An untested use leaves [an evidence gap](/wiki/education/concepts/evidence-and-statistics/biomarkers/absence-of-evidence), rather than proving benefit or proving failure. A transparent “unknown” is more useful than a chain whose weakest link is hidden.

## Try it

A drug is approved for biomarker B in metastatic disease A. A laboratory model from early disease C with a related biomarker responds. May the team call the proposed adjuvant use label-supported and proven?

<details>
<summary>Show the answer</summary>

No. The label is disease- and setting-specific. The model supports a hypothesis in its experimental conditions. The team needs relevant clinical evidence, a precise eligibility check, and a practical access assessment. A research trial may be a route for studying the unresolved use.

</details>

## Explain it back

“A pathway match supports ___; a relevant clinical study supports ___; eligibility and access determine ___.”

One possible answer: “a mechanism-based hypothesis; the observed outcomes in its population and design; whether a specified route is available to the actual patient.”

## Takeaway

**A qualified drug claim names the supporting biology, the clinical population, and the evidence and access gaps that remain.**

**Next:** [Read cancer evidence](/wiki/education/guides/reading-cancer-evidence/index), or revisit [the full three-step map](/wiki/education/guides/from-variant-to-drug/index).

## Sources and scope

Source check: 2026-10-09. General education; worked scenarios are fictional. Named studies and labels illustrate their specified populations and evidence boundaries. Expert and learner review pending.

- [Le Tourneau 2015: the SHIVA molecular-matching randomized trial](https://pubmed.ncbi.nlm.nih.gov/26342236/).
- [Geyer 2022: OlympiA overall-survival analysis](https://pubmed.ncbi.nlm.nih.gov/36228963/).
- [Tung 2020: TBCRC 048 metastatic olaparib study](https://pubmed.ncbi.nlm.nih.gov/33119476/).
- [Tung 2026: TBCRC 048 expansion cohorts](https://pubmed.ncbi.nlm.nih.gov/41604601/).
- [FDA olaparib prescribing information, revised July 2025](https://www.accessdata.fda.gov/drugsatfda_docs/label/2025/208558s031lbl.pdf).
- [FDA expanded-access guidance, April 2026](https://www.fda.gov/regulatory-information/search-fda-guidance-documents/expanded-access-investigational-drugs-treatment-use-questions-and-answers).
