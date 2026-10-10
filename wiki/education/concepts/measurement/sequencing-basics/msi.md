---
title: "Microsatellite instability and mismatch repair"
type: "concept"
domain: "measurement/sequencing-basics"
aliases: ["MSI", "MSI-H", "MSI-high", "microsatellite instability"]
summary: "Microsatellite instability is alteration of short repeated DNA sequences; mismatch-repair deficiency is impaired correction of DNA copying errors that can produce that pattern."
level: "intermediate"
prerequisites: ["[[wiki/education/concepts/biology-basics/molecules/dna]]", "[[wiki/education/concepts/measurement/pathology-readouts/immunohistochemistry]]"]
used_by: ["[[wiki/education/molecular-profiling/01-dna-the-blueprint]]"]
glossary_anchor: "msi"
sensitive: false
tags: ["education", "measurement"]
updated: "2026-10-10"
source_checked: "2026-10-10"
reviewed: "pending"
reviewed_by: ""
review_status: "Source-checked; expert and learner review pending"
---

# Microsatellite instability and mismatch repair

## In one sentence

Microsatellite instability is alteration of short repeated DNA sequences; mismatch-repair deficiency is impaired correction of DNA copying errors that can produce that pattern.

## The intuition

Repeated letters are easy to miscopy: a run of six can accidentally become five or seven. Cells have proofreading machinery that catches certain copying errors. The analogy has limits: a repeat-length test measures the resulting DNA pattern, while a protein stain examines components of the repair machinery. They do not inspect the same thing.

## How it works

**Microsatellites** are short repeated [DNA](/wiki/education/concepts/biology-basics/molecules/dna) sequences. **Microsatellite instability (MSI)** describes altered repeats in tumor DNA. **Mismatch repair (MMR)** corrects certain base-pairing errors and small copying insertions or deletions. **Deficient mismatch repair (dMMR)** can allow repeat changes to accumulate. [NCI: MSI](https://www.cancer.gov/publications/dictionaries/cancer-terms/def/msi).

Two common approaches ask different questions:

| Approach | Direct observation | Interpretation boundary |
|---|---|---|
| DNA repeat testing by polymerase chain reaction (PCR), which amplifies selected DNA, or validated sequencing | Instability across specified repeat sites | A method-defined DNA pattern, not identification of every possible repair defect |
| [Immunohistochemistry (IHC)](/wiki/education/concepts/measurement/pathology-readouts/immunohistochemistry) | Presence or loss of staining for repair proteins, commonly MLH1, PMS2, MSH2 and MSH6 | Protein staining pattern; requires internal controls and appropriate tumor evaluation |

**MSI-high (MSI-H)** means the assay's instability criteria are met. **Microsatellite stable (MSS)** means its stability criteria are met. An inadequate or indeterminate specimen should keep that label rather than silently become MSS. Likewise, visible repair-protein staining does not demonstrate every aspect of functional repair.

The College of American Pathologists (CAP) guideline recommends different testing approaches across cancer types. For cancers outside its better-established settings, it calls for validation in the specific cancer type; a sequencing assay validated for colorectal cancer is not automatically validated for breast cancer. It also expressly rejects [tumor mutational burden](/wiki/education/concepts/measurement/sequencing-basics/tumor-mutational-burden) as a surrogate for MMR status. [CAP recommendations](https://www.cap.org/wp-content/uploads/documents/mmr-msi-summary-recommendations.pdf).

## Why it matters in cancer

MMR/MSI testing can support certain treatment and inherited-risk questions, but each needs its own interpretation. A tumor finding does not alone diagnose **Lynch syndrome**, an inherited cancer-predisposition condition. Some colorectal tumors acquire reduced MLH1 through [DNA methylation](/wiki/education/concepts/biology-basics/genetics/epigenetics-and-methylation); clinical hereditary-risk evaluation distinguishes possible causes. [NCI genetics PDQ](https://www.cancer.gov/types/colorectal/hp/colorectal-genetics-pdq).

The U.S. pembrolizumab label includes a specific MSI-H/dMMR indication with disease-setting, prior-treatment and test requirements. That connection is a reason to measure accurately, not a promise that every MSI-H cancer responds or that an exploratory result establishes eligibility. [FDA label, section 1.8](https://www.accessdata.fda.gov/drugsatfda_docs/label/2026/125514s194lbl.pdf).

## Assay card

| Field | What to retain |
|---|---|
| Measures and method | Repeat instability by DNA testing, or repair-protein staining by IHC; record which question was tested |
| Input and tissue cost | Validated tumor specimen; IHC uses sections and DNA extraction consumes material. Requirements and controls differ |
| Output and units | MSI-H/MSS/indeterminate and sometimes an assay-defined unstable-site fraction; IHC patterns by named protein |
| Thresholds | Method- and cancer-specific criteria; no universal instability percentage or staining shortcut applies to every assay |
| Failure modes | Low tumor content, degraded material, insufficient informative repeats, failed controls or misleading staining |
| Validation limits | Discordance requires review of specimens, controls and methods. Neither assay alone is a germline diagnosis or response guarantee |

## Common confusions

- **MSI versus dMMR:** a DNA consequence and a repair defect are related, but distinct observations.
- **MMR versus [homologous recombination deficiency (HRD)](/wiki/education/concepts/cancer-biology/genome-instability-and-repair/homologous-recombination-and-hrd):** these concern different repair processes.
- **Stable versus mutation-free:** MSS does not mean there are no somatic mutations.
- **Tumor finding versus inherited syndrome:** acquired and inherited causes need separation.

## Try it

A fictional sample has intact IHC controls and retained repair-protein staining. Its DNA MSI test is indeterminate because few usable tumor molecules were recovered. Can the report conclude “confirmed MSS”?

**Answer:** No. Retained staining and an indeterminate DNA test must retain their separate results. The cause of the inadequate DNA result and the validated follow-up workflow need review.

## Explain it back

“An MSI test examines ______; MMR IHC examines ______.”

One answer: “repeat-sequence patterns; staining for specified repair proteins in the sampled tissue.”

## Takeaway

**Keep the DNA pattern, repair-protein evidence and clinical question attached to their own validated methods.**

## Related concepts

- [Germline versus somatic](/wiki/education/concepts/biology-basics/genetics/germline-vs-somatic).
- [Analytical validity, clinical validity and utility](/wiki/education/concepts/measurement/computational-analysis/analytical-validity-clinical-validity-and-utility).

## Sources and scope

Source check: October 10, 2026. Assay comparison and clinical boundaries; the example is fictional. Expert and learner review remain pending.

- [NCI: microsatellite instability](https://www.cancer.gov/publications/dictionaries/cancer-terms/def/msi).
- [CAP 2022: MMR/MSI testing recommendations, including cancer-specific validation and the TMB boundary](https://www.cap.org/wp-content/uploads/documents/mmr-msi-summary-recommendations.pdf).
- [NCI: colorectal cancer genetics PDQ, MMR and MLH1 methylation sections](https://www.cancer.gov/types/colorectal/hp/colorectal-genetics-pdq).
- [FDA: 2026 pembrolizumab label, section 1.8](https://www.accessdata.fda.gov/drugsatfda_docs/label/2026/125514s194lbl.pdf).

<!-- BEGIN GENERATED USED IN -->
## Used in

- [Read a DNA assay as a coverage-and-confidence claim](/wiki/education/molecular-profiling/01-dna-the-blueprint)
<!-- END GENERATED USED IN -->
