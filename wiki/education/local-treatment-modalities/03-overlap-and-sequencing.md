---
title: "Ask what a combination trial actually proved"
type: guide-lesson
guide: local-therapy-and-the-immune-system
step: 3
minutes: 16
objectives: ["Keep a combination trial's population, treatment sequence and endpoint attached to its result.", "Distinguish a distant response from evidence that adding local treatment improves outcomes."]
prerequisites: ["[[wiki/education/local-treatment-modalities/02-timing]]", "[[wiki/education/concepts/evidence-and-statistics/endpoints/survival-endpoints]]", "[[wiki/education/concepts/evidence-and-statistics/study-design/trial-phases-and-randomization]]"]
sensitive: false
tags: [education, local-treatment, evidence]
updated: "2026-10-13"
source_checked: 2026-10-09
reviewed: pending
reviewed_by: ""
review_status: "Source-checked; expert and learner review pending"
---

# Ask what a combination trial actually proved

**You will learn to read a local-plus-systemic treatment result without turning it into a universal combination rule.** Review [survival endpoints](/wiki/education/concepts/evidence-and-statistics/endpoints/survival-endpoints) and [trial phases and randomization](/wiki/education/concepts/evidence-and-statistics/study-design/trial-phases-and-randomization) first. They explain what counts as an event and how a comparison is built.

## The intuition: keep the label on the evidence

A promising result is like a parcel addressed to a particular setting. Changing the cancer, disease history or treatment sequence changes the address. Before using a study to support a proposal, write down who entered, what each group received and what was measured.

[Local ablation](/wiki/education/concepts/therapeutics/local-therapies/ablation), [stereotactic body radiation therapy (SBRT)](/wiki/education/concepts/therapeutics/local-therapies/sbrt) and [immune-checkpoint inhibitors](/wiki/education/concepts/therapeutics/immunotherapy/immune-checkpoint-inhibitor) are different components. A trial of their combination does not automatically prove that an immune mechanism caused its clinical result.

## Four study cards

Use the [survival-endpoint concept](/wiki/education/concepts/evidence-and-statistics/endpoints/survival-endpoints) to check each clock, event rule and assessment. A [cross-trial comparison](/wiki/education/concepts/evidence-and-statistics/reasoning-tools/cross-trial-comparison) must also carry differences in populations and methods; these cards cannot rank technologies from separate headlines.

| Study | Population and comparison | What the result supports | Boundary to carry with it |
|---|---|---|---|
| BOOSTER, 2025 | Advanced non-small-cell lung cancer with limited residual disease after a response to checkpoint treatment; ablation plus continued immunotherapy versus continued immunotherapy | A progression-free survival signal for the tested strategy in this selected phase-2 setting | This was probe-based ablation, not an SBRT trial, and not a breast-cancer trial |
| PACIFIC, five-year report 2022 | Unresectable stage-III non-small-cell lung cancer without progression after concurrent platinum-based chemotherapy and radiation; durvalumab consolidation versus placebo | Sustained progression-free and overall survival benefit for that sequence | It did not require SBRT or test whether shrinkage elsewhere was an abscopal effect |
| CURB, 2024 | Oligoprogressive metastatic breast cancer or non-small-cell lung cancer; standard care with or without SBRT to progressing sites | Progression-free survival improvement was seen in the lung cohort; the breast cohort did not show a significant improvement | A lung result cannot be assigned to breast cancer; the breast cohort does not establish every subtype's effect precisely |
| NRG-BR002, full report 2026 | Oligometastatic breast cancer with a controlled primary and no progression on first-line systemic treatment; systemic treatment with or without metastasis-directed ablation, mainly SBRT | The phase-2 comparison did not demonstrate improved progression-free survival; no significant overall survival difference was detected | The planned phase-3 portion did not proceed; this does not erase symptom-relief or other established local-treatment goals |

BOOSTER measured its primary progression-free survival from immunotherapy initiation, before later ablation. That clock and enrollment below the planned sample size matter when comparing headlines or generalizing its estimate. [BOOSTER full report](https://www.nature.com/articles/s41392-025-02460-z.pdf).

The cards summarize the primary reports linked below. In NRG-BR002, “metastasis-directed ablation” included SBRT or surgery; it does not mean the probe-based heating or freezing used in BOOSTER. NRG-BR002 is cited here as a [full journal report](https://ascopubs.org/doi/10.1200/JCO-26-00201). Publication format matters because a [conference abstract and a full paper](/wiki/education/concepts/evidence-and-statistics/study-design/abstract-vs-peer-reviewed) allow different amounts of inspection.

## A distant response is a narrower observation

For radiation, an [abscopal effect](/wiki/education/concepts/immunology/tumor-immunology/abscopal-effect) concerns tumor response outside the irradiated field. For ablation, describe a distant or abscopal-like response and name the procedure. When a systemic drug is also being given, that observation alone cannot isolate local treatment's added contribution.

For example, [Ho and colleagues' 2020 single-arm study](https://pubmed.ncbi.nlm.nih.gov/31747077/) of radiation plus pembrolizumab in metastatic triple-negative breast cancer reported responses in unirradiated lesions. The primary endpoint was response at week 13. There were three responses among all 17 enrolled participants and three among nine assessed then. Eight participants died from progression before that assessment. Without a randomized drug-only group, it could not establish how much radiation added.

**Calculate, then explain:** use the [denominator concept](/wiki/education/concepts/evidence-and-statistics/reasoning-tools/denominators-and-conditional-probability) to calculate `3 ÷ 17 × 100` and `3 ÷ 9 × 100`. Which group does each fraction describe? Has the treatment become more effective when the denominator changes?

**Answer:** The fractions are **17.6% of all enrolled participants** and **33.3% of those assessed at week 13**, rounded to one decimal place. They describe the same three responses in different groups within one small study. Restricting the denominator to those assessed leaves out eight early progression deaths. It changes the question, not the treatment's effect. The larger percentage cannot replace the enrolled-participant result or estimate radiation's added benefit; the missing randomized comparator remains missing.

A [case report](/wiki/education/concepts/evidence-and-statistics/study-design/case-reports-and-n-of-1) may show what happened to one person. An [observational comparison](/wiki/education/concepts/evidence-and-statistics/study-design/observational-studies-and-confounding) can be distorted by who was selected for local treatment. [Preclinical evidence](/wiki/education/concepts/evidence-and-statistics/study-design/preclinical-evidence) can explain why to test a strategy. These designs answer useful but different questions.

## Worked example: local success, uncertain added benefit

**Fictional study.** Investigators randomize people receiving the same systemic drug to add local treatment or continue the drug alone. Treated lesions are well controlled in the add-on group. New lesions elsewhere occur in both groups. The progression-free survival comparison has a wide [confidence interval](/wiki/education/concepts/evidence-and-statistics/effect-measures/confidence-interval) spanning effects in both directions.

The defensible report is: “Local control was achieved; the study leaves the size and direction of the added progression-free survival effect uncertain.” Neither “local treatment failed at everything” nor “the procedure created systemic immunity” follows. Pain, quality of life, overall survival and harms would need their own measurements.

## Common failure modes

Watch for an unnamed “benefit,” an omitted comparator, or a switch from lung to breast cancer midway through a claim. Also watch for a nonrandomized comparison of freezing versus heating inside a trial whose randomization addressed ablation versus no ablation. The original randomization does not make every subgroup comparison randomized.

## Try it

A fictional summary says: “PACIFIC proves focused radiation should always precede checkpoint treatment to generate an abscopal response.” Identify three overextensions.

**Answer:** PACIFIC tested a specific unresectable stage-III lung-cancer sequence after concurrent chemoradiation. It did not require SBRT, establish a universal order across cancers, or identify abscopal response as the explanation for survival benefit.

## Explain it back

Choose one study card. Say its population, comparison and endpoint aloud, then add one sentence explaining what it cannot establish.

## Takeaway

Keep local control, distant response and patient outcomes separate. A combination result belongs to the strategy and population actually studied.

Next: [read a proposal through five questions](/wiki/education/local-treatment-modalities/04-decision-questions).

## Sources and scope

Focused denominator check: October 13, 2026; Ho’s primary abstract read via Europe PMC after PubMed access failed. No new full-text reading is claimed; the other study cards retain their earlier source-check scope. Expert and learner review remain pending.

Source check: 2026-10-09. The worked study is fictional; the named clinical trials are real. Expert and learner review pending.

- [Yang et al., 2025: BOOSTER](https://pubmed.ncbi.nlm.nih.gov/41213939/) — randomized phase-2 ablation after an immunotherapy response in lung cancer.
- [Spigel et al., 2022: PACIFIC five-year outcomes](https://pubmed.ncbi.nlm.nih.gov/35108059/) — consolidation after concurrent chemoradiation in unresectable stage-III lung cancer.
- [Tsai et al., 2024: CURB](https://pubmed.ncbi.nlm.nih.gov/38104577/) — breast and lung oligoprogression; separate the cohorts.
- [Chmura et al., 2026: NRG-BR002](https://ascopubs.org/doi/10.1200/JCO-26-00201) — full randomized report published October 7, 2026.
- [Ho et al., 2020: radiation plus pembrolizumab](https://pubmed.ncbi.nlm.nih.gov/31747077/) — small single-arm metastatic triple-negative breast-cancer study.
