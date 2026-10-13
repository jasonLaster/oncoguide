---
title: "Theranostics: connecting a diagnostic test to a therapy"
type: "concept"
domain: "therapeutics/local-therapies"
summary: "Theranostics connects a diagnostic test and a related treatment through a shared target, with evidence that the test meaningfully informs that treatment."
glossary_anchor: "theranostics"
aliases: ["theranostics", "theranostic pair", "diagnostic-therapeutic pair"]
level: "intermediate"
prerequisites:
  - "[[wiki/education/concepts/measurement/imaging/target-pet-and-theranostic-imaging]]"
  - "[[wiki/education/concepts/therapeutics/antibody-based/radioligand-therapy]]"
used_by: ["[[wiki/education/local-treatment-modalities/04-decision-questions]]","[[wiki/education/targeted-therapy-modalities/01-mechanism]]"]
sensitive: false
tags: ["education", "therapeutics"]
updated: "2026-10-10"
source_checked: "2026-10-10"
reviewed: "pending"
reviewed_by: ""
review_status: "Source-checked; expert and learner review pending"
---

# Theranostics: connecting a diagnostic test to a therapy

## In one sentence

Theranostics connects a diagnostic test and a related treatment through a shared target, with evidence that the test meaningfully informs that treatment.

## The intuition

Imagine checking a delivery route before sending a different load along it. The test journey can tell you something useful. It cannot guarantee that the second vehicle will travel identically or that its load will accomplish the job. You need evidence connecting the journeys.

**Before you start:** [Target PET and theranostic imaging](/wiki/education/concepts/measurement/imaging/target-pet-and-theranostic-imaging) explains tracer uptake. [Radioligand therapy](/wiki/education/concepts/therapeutics/antibody-based/radioligand-therapy) explains targeting vectors, attachment chemistry and radioactive payloads. Here we focus on radioactive diagnostic–therapy pairs, a common use of theranostics.

## How it works

A diagnostic tracer makes a target-related distribution visible. The related therapeutic product carries an isotope suited to treatment. The pair may share a targeting molecule, or use different molecules with a supported relationship to the same target. *Matched* does not necessarily mean chemically identical.

Changing the targeting molecule, chelator, isotope or administered mass can change behavior. A small ligand and an antibody directed at the same protein may have very different clearance and tissue penetration. Even closely related products need evidence appropriate to the claim. [FDA's radiopharmaceutical development guidance](https://www.fda.gov/media/129547/download) discusses biodistribution, time-integrated activity and bridging between related products.

Keep four questions separate:

| Question | Evidence needed |
|---|---|
| Is the diagnostic signal present? | The specified tracer, acquisition method and interpretation rule. |
| Does it inform this therapy? | Evidence connecting the exact test to the therapeutic product in the relevant setting. |
| What exposure reaches tumor and normal tissue? | Product distribution, retention and absorbed-dose evidence. |
| Does the treatment improve a meaningful outcome? | Clinical studies with a defined population, comparator and endpoint. |

A negative scan does not establish that every cancer cell lacks the target. Small lesions, heterogeneous expression and assay sensitivity can limit detection. A positive scan may show an accessible target while other lesions have little uptake.

## Why it matters in cancer

Theranostics can make selection more specific than the name of a cancer alone. It still does not erase disease-setting boundaries.

For a dated regulatory example, in **July 2026**, the US Food and Drug Administration approved lutetium Lu 177 vipivotide tetraxetan with androgen receptor pathway inhibitor therapy for adults with **prostate-specific membrane antigen (PSMA)-positive metastatic androgen pathway modulation-naïve or -sensitive prostate cancer**. The notice specifies selection using gallium Ga 68 gozetotide or another approved PSMA positron emission tomography (PET) product. [The FDA notice defines that population and pairing](https://www.fda.gov/drugs/resources-information-approved-drugs/fda-approves-lutetium-lu-177-vipivotide-tetraxetan-androgen-receptor-pathway-inhibitor-therapy). It does not establish approval or efficacy for another cancer with a target-positive scan.

## How the pair is assessed

Record the exact diagnostic and therapeutic products, target, disease setting and test threshold. Ask what specimen or imaging preparation is required and whether the rule was clinically validated for that pair.

Scan uptake may be reported as standardized uptake value, a normalized imaging quantity. Administered activity uses megabecquerels or gigabecquerels. **Dosimetry** estimates deposited radiation energy per tissue mass, in gray. These quantities cannot substitute for one another.

Absorbed-dose evidence matters, but individual serial dosimetry is not required for every established regimen. The **2023 European Association of Nuclear Medicine and Society of Nuclear Medicine and Molecular Imaging guideline** describes fixed standard activities for the then-approved lutetium-177–PSMA-617 setting and says individual dosimetry is not mandatory for in-label use. It also describes substantial variation and uncertain benefit from dosimetry-guided personalization. [That guideline is product- and setting-specific](https://link.springer.com/article/10.1007/s00259-023-06255-8), rather than a universal rule.

## Common confusions

- **Same target does not establish a validated pair.** Molecules, timing and selection rules matter.
- **Bright uptake does not prove adequate treatment dose.** Persistence and normal-tissue exposure need consideration.
- **Approved does not mean eligible or available.** The indication, clinical assessment and delivery pathway are separate.
- **A paired scan does not guarantee benefit.** It informs a treatment question; it does not answer every question.

## Try it

**Fictional example:** Tracer A and therapeutic antibody B recognize target M. A produces a bright scan. No study connects A's selection rule to B's distribution or outcomes. Is this already a validated theranostic pair?

**Answer:** No. There is a plausible shared-target pairing and a diagnostic observation. Product-specific bridging and clinical evidence remain missing. The scan alone cannot certify B's safety, dose or benefit.

## Explain it back

“Theranostics connects a test to treatment when ______.”

One possible answer: “the test-to-treatment relationship is supported for the actual products and clinical setting.”

## Takeaway

**A useful theranostic pair needs a demonstrated bridge from diagnostic signal to the specific treatment question.**

## Related concepts

- [Immuno-PET](/wiki/education/concepts/measurement/imaging/immuno-pet)
- [Companion diagnostics](/wiki/education/concepts/access-and-regulation/approval/companion-diagnostics)
- [On-target, off-tumor toxicity](/wiki/education/concepts/therapeutics/toxicities-and-supportive-care/on-target-off-tumor-toxicity)

## Sources and scope

Source-checked October 10, 2026. Expert and learner review remain pending. The approval example is dated and bounded; this is not a current product inventory.

1. [FDA: Oncology therapeutic radiopharmaceuticals, August 2019](https://www.fda.gov/media/129547/download). Targeted nonclinical biodistribution, dosimetry and bridging sections checked.
2. [FDA: July 31, 2026 lutetium Lu 177 vipivotide tetraxetan approval notice](https://www.fda.gov/drugs/resources-information-approved-drugs/fda-approves-lutetium-lu-177-vipivotide-tetraxetan-androgen-receptor-pathway-inhibitor-therapy). Substantive notice checked for population, combination and diagnostic selection; no cross-cancer indication inferred.
3. [Kratochwil et al.: Joint EANM/SNMMI procedure guideline, 2023](https://link.springer.com/article/10.1007/s00259-023-06255-8). Full public guideline accessible; definitions, selection and dosimetry sections checked for that prostate-cancer product context.

<!-- BEGIN GENERATED USED IN -->
## Used in

- [Read a proposal through five questions](/wiki/education/local-treatment-modalities/04-decision-questions)
- [Separate the address from the killing mechanism](/wiki/education/targeted-therapy-modalities/01-mechanism)
<!-- END GENERATED USED IN -->
