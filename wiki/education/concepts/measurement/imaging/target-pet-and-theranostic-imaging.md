---
title: "Target PET and theranostic imaging"
type: "concept"
domain: "measurement/imaging"
aliases: ["target PET", "target-directed PET", "theranostic imaging"]
summary: "Target-directed PET maps a specified tracer's distribution around a molecular target, while theranostic use requires evidence connecting that imaging result to a particular therapeutic product and setting."
glossary_anchor: "target-pet-and-theranostic-imaging"
level: "intermediate"
prerequisites: ["[[wiki/education/concepts/measurement/imaging/pet-ct]]", "[[wiki/education/concepts/biology-basics/signaling/ligand-and-receptor]]"]
used_by: ["[[wiki/education/local-treatment-modalities/05-tissue-and-sample-budget]]"]
sensitive: false
tags: ["education", "measurement", "imaging"]
source_checked: "2026-10-10"
reviewed: "pending"
reviewed_by: ""
review_status: "Source-checked; expert and learner review pending"
---

# Target PET and theranostic imaging

## In one sentence

Target-directed PET maps a specified tracer's distribution around a molecular target, while theranostic use requires evidence connecting that imaging result to a particular therapeutic product and setting.

## The intuition

Imagine testing whether a labeled key can reach and bind a lock. A visible signal tells you something about that key's journey and interaction. It does not tell you that every lock was reached, that all locks belong to cancer cells or that another key carrying treatment cargo will work.

Here, the “key” is a molecular tracer. The analogy is about access and recognition, not guaranteed binding or benefit.

## How it works

[PET](/wiki/education/concepts/measurement/imaging/pet-ct) detects a positron-emitting radioactive label. A target-directed **radiotracer** combines that label with a molecule chosen for a target-associated interaction. Name both parts: the targeting molecule or **vector**, and the radioactive isotope. Some designs also use a chelator, a chemical structure holding a radioactive metal, and a linker joining components.

A vector may be a small molecule, [peptide](/wiki/education/concepts/biology-basics/molecules/protein-and-peptide) or [antibody](/wiki/education/concepts/immunology/antibodies-and-b-cells/antibody-structure). It can recognize an accessible surface feature or, for suitable molecules, an intracellular target. The target need not be exclusive to malignant cells; stromal or normal-tissue targets also contribute to distribution.

Uptake reflects delivery, accessible target, binding and retention together with clearance and background activity. **Target availability** means what the tracer can interact with under those conditions. An RNA measurement or total-protein result cannot, by itself, specify it. [Joint PSMA PET technical guideline](https://doi.org/10.1007/s00259-022-06089-w).

## From imaging to theranostics

[Theranostics](/wiki/education/concepts/therapeutics/local-therapies/theranostics) connects a diagnostic result to a related therapeutic strategy. The therapeutic owner explains that bridge; here the question is what the particular image can establish. In [radioligand therapy](/wiki/education/concepts/therapeutics/antibody-based/radioligand-therapy), the treatment delivers radiation from its chosen radionuclide.

For a concrete mechanism example, gallium-68-labeled PSMA ligands can produce PET images, while lutetium-177-labeled PSMA ligands deliver mainly beta-particle radiation. **PSMA** means prostate-specific membrane antigen. That example concerns a particular target and studied prostate-cancer setting; the name does not establish a breast-cancer therapy or access route.

A shared target does not make imaging and therapy identical products. The vector, label, administered molecular mass, retention and radiation properties can differ. Product-specific evidence must connect the scan to the proposed use. A single PET image cannot establish the therapeutic absorbed dose or improvement in a clinical outcome. [Joint radioligand-therapy guideline](https://doi.org/10.1007/s00259-023-06255-8).

## Why it matters in cancer

A target scan may reveal differences among visible lesions. That can be useful when one tissue sample cannot represent all disease. Yet a low-uptake lesion may reflect limited access, low available target, size, background or the acquisition protocol. A high-uptake lesion may include uptake outside malignant cells.

Keep three questions separate: **Was tracer detected? Was the relevant target sufficiently available? Does a particular treatment have a useful benefit–harm balance in this setting?** Each needs its own evidence. [Clinical actionability](/wiki/education/concepts/evidence-and-statistics/biomarkers/actionability) connects a measurement to a justified clinical use.

## How it is measured

**Input:** an exact tracer, administered activity and molecular mass, examination timing and body coverage. **Output:** distribution and uptake measures in identified regions. Activity uses megabecquerels (MBq); [standardized uptake values](/wiki/education/concepts/measurement/imaging/pet-ct) summarize normalized uptake. Molecular mass may use micrograms or milligrams, depending on the product.

**Dosimetry** estimates absorbed radiation dose, measured in gray (Gy), meaning joules per kilogram of tissue. It depends on activity over time, radiation emissions and where energy is deposited. Administered MBq, a single SUV and absorbed Gy are different quantities. Serial measurements or validated models may contribute to dosimetry; a bright image is not itself a dose calculation. [FDA radiopharmaceutical-development guidance](https://www.fda.gov/media/129547/download).

## Common confusions

- **Protein presence versus tracer access:** specimen evidence and in-body binding answer different questions.
- **Uptake versus therapeutic dose:** distribution at one time does not describe all subsequent radiation delivery.
- **Shared target versus interchangeable products:** changing vector or isotope can change behavior.
- **A negative scan versus absent disease:** microscopic or poorly visualized disease can remain.

## Try it

A fictional target-M PET tracer binds a small molecule to isotope A. A proposed therapy uses an antibody against M and isotope B. A brochure says, “PET positivity proves the antibody will deliver an effective dose.” What is missing?

**Answer:** The scan supports distribution of the tested tracer. The antibody has a different delivery and clearance history; isotope B adds different emissions and decay. Evidence about the actual therapeutic product's distribution, tissue dose, safety and clinical outcomes is still needed. Even sharing M does not close those gaps.

## Explain it back

“The image tracks ___; therapeutic dose requires ___; benefit requires ___.”

One answer: “the specified tracer; an appropriate absorbed-dose assessment; clinical evidence fitting the product and setting.”

## Takeaway

Match the tracer to the imaging claim and the therapeutic product to its own dose, safety and outcome evidence.

## Related concepts

- [Immuno-PET](/wiki/education/concepts/measurement/imaging/immuno-pet): antibody-based vectors and format-dependent distribution.
- [Radiation therapy basics](/wiki/education/concepts/therapeutics/local-therapies/radiation-therapy-basics): radiation dose is different from activity or target expression.

## Sources and scope

Source check: October 10, 2026. General mechanism education and fictional practice; expert and learner review remain pending. Prostate-target examples illustrate principles, without a current approval inventory, breast-cancer eligibility claim or treatment recommendation.

- [Fendler et al. (2023), PSMA PET guideline 2.0](https://doi.org/10.1007/s00259-022-06089-w): exact tracers, distribution and interpretation pitfalls in prostate imaging.
- [Kratochwil et al. (2023), PSMA radioligand-therapy guideline](https://doi.org/10.1007/s00259-023-06255-8): isotope/vector distinctions, studied treatment context and dosimetry.
- [FDA (2019), Oncology therapeutic radiopharmaceuticals: nonclinical studies and labeling](https://www.fda.gov/media/129547/download): nonclinical biodistribution, time-integrated activity and dose estimation, rather than a clinical treatment protocol.

<!-- BEGIN GENERATED USED IN -->
## Used in

- [Match each measurement to its claim](/wiki/education/local-treatment-modalities/05-tissue-and-sample-budget)
<!-- END GENERATED USED IN -->
