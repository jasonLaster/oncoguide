---
title: "Clinical actionability and evidence tiers"
type: concept
domain: evidence-and-statistics/biomarkers
summary: "Clinical actionability asks whether a finding supports a specific medical decision in the relevant disease and treatment setting."
glossary_anchor: actionability
aliases: ["actionability", "ESCAT", "OncoKB", "levels of evidence and actionability tiers"]
prerequisites: ["[[wiki/education/concepts/measurement/computational-analysis/analytical-validity-clinical-validity-and-utility]]", "[[wiki/education/concepts/evidence-and-statistics/biomarkers/prognostic-vs-predictive]]"]
reviewed: "pending"
reviewed_by: ""
level: foundation
sensitive: false
tags: [education, measurement]
used_by: ["[[wiki/education/guides/accessing-experimental-therapy/index]]","[[wiki/education/guides/aiming-a-drug-at-a-surface-target/index]]","[[wiki/education/guides/from-variant-to-drug/01-authenticate-and-attribute-the-finding]]","[[wiki/education/guides/from-variant-to-drug/03-check-clinical-evidence-and-access]]","[[wiki/education/guides/from-variant-to-drug/index]]","[[wiki/education/guides/judging-a-test-or-vendor-claim/01-write-the-exact-claim]]","[[wiki/education/guides/judging-a-test-or-vendor-claim/03-connect-evidence-to-a-decision]]","[[wiki/education/guides/judging-a-test-or-vendor-claim/index]]","[[wiki/education/guides/reading-pathology-and-surgery-results/03-build-the-next-question]]","[[wiki/education/guides/reading-pathology-and-surgery-results/index]]","[[wiki/education/guides/start-here/03-connect-treatment-and-evidence]]","[[wiki/education/guides/start-here/index]]","[[wiki/education/local-treatment-modalities/04-decision-questions]]","[[wiki/education/molecular-profiling/05-functional-drug-response]]","[[wiki/education/molecular-profiling/07-from-data-to-care-plan]]","[[wiki/education/multi-omics-foundations/07-comparisons-and-evidence]]","[[wiki/education/reading-a-tumor/omics-and-multi-omics]]","[[wiki/education/targeted-therapy-modalities/04-decision-questions]]","[[wiki/education/targeted-therapy-modalities/06-comparisons]]"]
updated: "2026-10-10"
source_checked: "2026-10-10"
review_status: "Source-checked; expert and learner review pending"
---

# Clinical actionability and evidence tiers

## In one sentence

Clinical actionability asks whether a finding supports a specific medical decision in the relevant disease and treatment setting.

## The intuition

A map can identify a possible route without proving that it is suitable or open for today's journey. An evidence annotation is similar: it summarizes a defined claim. The actual decision still needs the finding's reliability, disease setting, intervention, eligibility and access.

The analogy stops at the map. Evidence tiers are formal frameworks with different rules; their labels cannot be swapped by intuition.

## How it works

First separate [measurement, clinical meaning and utility](/wiki/education/concepts/measurement/computational-analysis/analytical-validity-clinical-validity-and-utility). A variant can be genuinely present and biologically consequential while evidence for a matched drug remains weak. “Pathogenic” is not synonymous with treatment-sensitive. Target engagement, response and survival are different claims.

**ESCAT**, the European Society for Medical Oncology Scale for Clinical Actionability of molecular Targets, grades evidence for genomic targets. Its original 2018 framework has six broad categories:

| ESCAT tier | Broad evidence category |
|---|---|
| I | Ready for routine clinical implementation |
| II | Investigational target with likely benefit needing further evidence |
| III | Clinical benefit shown in another tumor type or for similar targets |
| IV | Preclinical evidence |
| V | Evidence supporting co-targeting approaches |
| X | Insufficient evidence for actionability |

Subtiers and the actual dated assessment matter. Tier V is a defined co-targeting category, not permission to invent any combination, and X does not prove that a target can never become useful.

**OncoKB** has a different annotation system for a biomarker–drug–cancer context. Its therapeutic response levels distinguish 1 (FDA-recognized biomarker for an FDA-approved drug in that indication), 2 (standard-care guideline-supported biomarker for an FDA-approved drug in that indication), 3A (compelling clinical evidence in that indication), 3B (standard-care or investigational evidence in another indication), and 4 (compelling biological evidence). Separate R1/R2 levels address resistance: standard-care and compelling clinical resistance evidence, respectively.

These summaries describe the checked framework definitions, not a current inventory of therapies. ESCAT and OncoKB are **not numerical crosswalks**. A tier-I label cannot automatically be rewritten as OncoKB level 1. Read the original annotation, assessment date, tumor type, alteration, drug, evidence and framework version.

## Why it matters in cancer

A database annotation does not establish that a person meets a label or trial's full inclusion criteria. A [companion diagnostic](/wiki/education/concepts/access-and-regulation/approval/companion-diagnostics) has a specified therapy-linked intended use; another assay is not automatically equivalent. Formulation, treatment line, prior therapies, safety and current availability add separate questions. High evidence quality does not eliminate those gates.

## How evidence is assessed

Write the proposed decision in a sentence. Confirm the exact finding and source, then ask whether the evidence concerns the same disease, treatment setting and outcome. Preserve the publication/annotation version. A research signature, a predicted variant effect and an evidence tier must retain their distinct meanings.

## Common confusions

- “Actionable” may mean worth researching, trial-matched, standard care or something else; ask which claim is intended.
- A low evidence tier is not a measured personal response probability.
- Trial eligibility and actual access require their own current checks.

## Try it

A fictional report quotes OncoKB level 3B for an alteration–drug pair and calls it established standard treatment in the reported tumor type. What is missing?

**Answer:** Level 3B concerns evidence in another indication. The report needs evidence and an appropriate assessment in the current disease/setting, plus the decision's eligibility and safety context. It cannot promote the annotation by dropping its indication.

## Explain it back

Why should an evidence tier always travel with its framework, version and cancer context?

## Takeaway

Evidence tiers organize claims. They do not make a clinical decision on their own.

## Related concepts

- [prognostic vs predictive](/wiki/education/concepts/evidence-and-statistics/biomarkers/prognostic-vs-predictive)
- [companion diagnostics](/wiki/education/concepts/access-and-regulation/approval/companion-diagnostics)

## Sources and scope

Source check: October 10, 2026. Fictional report; expert and learner review remain pending. No current drug-availability inventory is asserted.

- [Mateo et al. 2018 ESCAT framework](https://doi.org/10.1093/annonc/mdy263) — original broad tier definitions; not a complete current target listing.
- [OncoKB official therapeutic levels](https://www.oncokb.org/content/files/levelOfEvidence/V2/LevelsOfEvidence.pdf) — checked response and resistance definitions; the annotation date/version must accompany actual use.
- [FDA companion diagnostics](https://www.fda.gov/medical-devices/in-vitro-diagnostics/companion-diagnostics) — therapy-linked intended-use scope.

<!-- BEGIN GENERATED USED IN -->
## Used in

- [Understand access to an experimental therapy](/wiki/education/guides/accessing-experimental-therapy/index)
- [Aiming a drug at a surface target](/wiki/education/guides/aiming-a-drug-at-a-surface-target/index)
- [Authenticate and attribute the finding](/wiki/education/guides/from-variant-to-drug/01-authenticate-and-attribute-the-finding)
- [Check clinical evidence and access](/wiki/education/guides/from-variant-to-drug/03-check-clinical-evidence-and-access)
- [From a variant to a drug claim](/wiki/education/guides/from-variant-to-drug/index)
- [Write the exact claim before judging it](/wiki/education/guides/judging-a-test-or-vendor-claim/01-write-the-exact-claim)
- [Connect evidence to a decision](/wiki/education/guides/judging-a-test-or-vendor-claim/03-connect-evidence-to-a-decision)
- [Judge a test or company claim](/wiki/education/guides/judging-a-test-or-vendor-claim/index)
- [Build the next question](/wiki/education/guides/reading-pathology-and-surgery-results/03-build-the-next-question)
- [Read pathology and surgery results](/wiki/education/guides/reading-pathology-and-surgery-results/index)
- [Connect treatment jobs with evidence](/wiki/education/guides/start-here/03-connect-treatment-and-evidence)
- [Start here: read the biology, then the evidence](/wiki/education/guides/start-here/index)
- [Read a proposal through five questions](/wiki/education/local-treatment-modalities/04-decision-questions)
- [Test a mechanism in a living model](/wiki/education/molecular-profiling/05-functional-drug-response)
- [Build an integrated claim without skipping the clinical question](/wiki/education/molecular-profiling/07-from-data-to-care-plan)
- [Choose the comparison before interpreting the signal](/wiki/education/multi-omics-foundations/07-comparisons-and-evidence)
- [What does multi-omics tell us about a tumor?](/wiki/education/reading-a-tumor/omics-and-multi-omics)
- [Questions for a targeted-therapy proposal](/wiki/education/targeted-therapy-modalities/04-decision-questions)
- [Compare formats with evidence and normal-tissue risk](/wiki/education/targeted-therapy-modalities/06-comparisons)
<!-- END GENERATED USED IN -->
