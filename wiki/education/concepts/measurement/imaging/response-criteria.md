---
title: "Response criteria: RECIST and iRECIST"
type: "concept"
domain: "measurement/imaging"
aliases: ["RECIST", "RECIST 1.1", "iRECIST", "response criteria", "iUPD", "iCPD"]
summary: "Response criteria apply predefined imaging rules to selected lesions and other disease findings, producing trial response categories that do not by themselves establish tissue clearance or treatment benefit."
glossary_anchor: "response-criteria"
level: "intermediate"
prerequisites: ["[[wiki/education/concepts/measurement/imaging/pet-ct]]"]
used_by: ["[[wiki/education/guides/local-therapy-and-the-immune-system/07-read-an-injected-treatment-study]]","[[wiki/education/guides/treating-early-tnbc/02-read-timing-around-surgery]]","[[wiki/education/molecular-profiling/ctdna-ppm-and-mri]]"]
sensitive: false
tags: ["education", "measurement", "imaging"]
source_checked: "2026-10-10"
reviewed: "pending"
reviewed_by: ""
review_status: "Source-checked; expert and learner review pending"
---

# Response criteria: RECIST and iRECIST

## In one sentence

Response criteria apply predefined imaging rules to selected lesions and other disease findings, producing trial response categories that do not by themselves establish tissue clearance or treatment benefit.

## The intuition

Think of measuring a changing landscape with a shared ruler and a written rulebook. The rulebook allows different readers and trials to use the same definitions. It does not make the ruler capture every feature of the landscape.

In cancer studies, a response category summarizes specified observations. It is different from a personal prognosis, a tissue diagnosis or an automatic instruction about treatment.

## How it works

### RECIST 1.1

**Response Evaluation Criteria in Solid Tumours (RECIST) 1.1** primarily uses anatomical measurements. At baseline, readers select up to five measurable **target lesions**, with at most two per organ. The sum uses longest diameters for ordinary targets and short-axis measurements for qualifying lymph nodes, in millimeters (mm). Target selection and minimum measurable sizes follow the guideline; not every visible abnormality qualifies.

Other disease is recorded as **non-target disease**. New lesions are assessed separately. The target sum therefore is not total tumor volume or every lesion in the body.

For target lesions, **partial response (PR)** requires at least a 30% decrease from the **baseline sum**. Target-lesion **progressive disease (PD)** requires at least a 20% increase from the smallest sum recorded on study, called the **nadir**, together with at least a 5 mm absolute increase. Baseline itself is the reference for progression if it remains the smallest sum.

Unequivocal non-target progression or an unequivocal new malignant lesion can establish overall progression even when the target sum shrinks. **Stable disease (SD)** is not enough shrinkage for PR or enough increase for PD under the applicable rules. Overall categories combine target, non-target and new-lesion findings. [Primary RECIST 1.1 guideline](https://recist.eortc.org/recist/wp-content/uploads/sites/14/2025/12/RECISTGuidelines.pdf).

## What iRECIST adds

**iRECIST**, the immune-response adaptation of RECIST, was developed for trials testing immunotherapeutics. Apparent progression is initially recorded as **immune unconfirmed progressive disease (iUPD)**. A later assessment may establish **immune confirmed progressive disease (iCPD)** or, under the framework's rules, another response category.

This handles possible **pseudoprogression**: apparent worsening followed by response. It does not assume that growth or new lesions are pseudoprogression.

In trials permitting treatment beyond iUPD, the framework calls for reassessment generally 4–8 weeks later and continued treatment only in clinically stable participants under the protocol. Stability includes no relevant deterioration in performance, disease-related symptoms or need for intensified symptom management. iRECIST organizes trial data; clinical decisions still require the treating team and participant. The label iUPD is not permission to continue therapy automatically. [Primary iRECIST paper](https://pmc.ncbi.nlm.nih.gov/articles/PMC5648544/) and [RECIST Working Group clarifications](https://recist.eortc.org/irecist/).

## Why it matters in cancer

A study's reported **objective response rate** depends on its response definition, assessment schedule, confirmation rules and analyzed population. A response does not itself establish a survival benefit; that requires an appropriate clinical outcome comparison.

**Complete response (CR)** is an imaging category with specified disappearance and nodal rules. It does not establish [pathologic complete response (pCR)](/wiki/education/concepts/breast-cancer/surgery-and-pathology-results/pcr), which requires tissue assessment, or exclude microscopic disease.

Likewise, a lower [PET uptake value](/wiki/education/concepts/measurement/imaging/pet-ct) is not automatically a RECIST partial response. Metabolic and anatomical criteria measure different features.

## How it is measured

Record the framework and version, selected lesions, baseline sum, nadir, current sum, dates, non-target findings and new lesions. Comparable acquisition and reliable identification of the same lesions matter. Missing or equivocal findings require the protocol's rules, not an invented reassuring category.

## Common confusions

- **Baseline versus nadir:** PR and target-lesion PD use different reference sums.
- **Target sum versus total cancer:** selection leaves other disease outside the sum.
- **Shrinking targets versus overall response:** new or non-target disease can change the category.
- **iUPD versus proven pseudoprogression:** confirmation and clinical context remain necessary.

## Try it

In a fictional trial, the target sum starts at 100 mm, falls to 60 mm, then rises to 73 mm. Assume comparable measurements, no new lesions and no non-target progression. Is “still 27% below baseline” enough to rule out target-lesion PD?

**Answer:** No. The rise from the nadir is 13 mm, or 13/60 ≈ 21.7%. It meets both the 20% relative and 5 mm absolute RECIST target-progression requirements. This arithmetic illustrates classification; it supplies no treatment decision. A different question—PR—would use baseline.

## Explain it back

“Before interpreting a response label, I need the ___, the reference ___ and the findings outside ___.”

One answer: “criteria version; measurement; the target sum.”

## Takeaway

A response category is a rule-based summary. Keep its reference measurement, full disease assessment and clinical meaning visible.

## Related concepts

- [Clinical endpoints](/wiki/education/concepts/evidence-and-statistics/endpoints/survival-endpoints): outcome definitions beyond a response label.
- [Clinical validity and utility](/wiki/education/concepts/measurement/computational-analysis/analytical-validity-clinical-validity-and-utility): an informative measure is not automatically a beneficial decision rule.

## Sources and scope

Source check: October 10, 2026. General trial measurement and fictional arithmetic; expert and learner review remain pending. This is an introduction, not a replacement for protocol-specific assessment or clinical judgment.

- [Eisenhauer et al. (2009), RECIST 1.1](https://recist.eortc.org/recist/wp-content/uploads/sites/14/2025/12/RECISTGuidelines.pdf): selection, dimensions, reference sums and overall response.
- [Seymour et al. (2017), iRECIST](https://pmc.ncbi.nlm.nih.gov/articles/PMC5648544/): unconfirmed progression, reassessment and clinical stability.
- [RECIST Working Group, iRECIST clarifications](https://recist.eortc.org/irecist/): data handling versus patient management and confirmation scenarios.

<!-- BEGIN GENERATED USED IN -->
## Used in

- [Read an injected-treatment study](/wiki/education/guides/local-therapy-and-the-immune-system/07-read-an-injected-treatment-study)
- [Read timing around surgery](/wiki/education/guides/treating-early-tnbc/02-read-timing-around-surgery)
- [Compare blood results with imaging](/wiki/education/molecular-profiling/ctdna-ppm-and-mri)
<!-- END GENERATED USED IN -->
