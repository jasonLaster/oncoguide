---
title: "ADC (antibody-drug conjugate)"
type: "concept"
domain: "therapeutics/antibody-based"
summary: "An antibody-drug conjugate links a targeting antibody to a drug payload so binding and product-specific processing can deliver chemical damage."
glossary_anchor: "adc"
aliases: ["ADC", "antibody-drug conjugate", "antibody-drug conjugate"]
level: "foundation"
prerequisites: ["[[wiki/education/concepts/immunology/antibodies-and-b-cells/antibody-structure]]", "[[wiki/education/concepts/therapeutics/chemotherapy/chemotherapy]]"]
used_by: ["[[wiki/education/guides/aiming-a-drug-at-a-surface-target/index]]","[[wiki/education/targeted-therapy-modalities/01-mechanism]]","[[wiki/education/targeted-therapy-modalities/02-timing]]","[[wiki/education/targeted-therapy-modalities/06-comparisons]]","[[wiki/education/targeted-therapy-modalities/index]]"]
sensitive: false
tags: ["education", "therapeutics"]
updated: "2026-10-09"
source_checked: "2026-10-09"
reviewed: "pending"
reviewed_by: ""
review_status: "Source-checked; expert and learner review pending"
---

# ADC (antibody-drug conjugate)

## In one sentence

An antibody-drug conjugate links a targeting antibody to a drug payload so binding and product-specific processing can deliver chemical damage.

## The intuition

Think of an addressed package with cargo inside. The antibody helps find an address; the linker attaches the cargo; the payload supplies a chemical effect. Finding the address does not prove the package reached the right room or that its cargo became usable. The analogy also has a limit: real molecules circulate, change, and encounter healthy tissues. Delivery is not perfectly confined to the intended recipient.

## How it works

This page focuses on cytotoxic antibody-drug conjugates (ADCs), whose payloads damage cells. Their three components do connected but different jobs:

| Component | Main job | A question it leaves open |
|---|---|---|
| Antibody | Recognize an accessible molecular feature, or epitope | Can the product reach and bind it on living cells? |
| Linker | Attach the payload and help govern processing | Where and when does active payload become available? |
| Payload | Disrupt a susceptible cellular process | Does enough active material reach its site of action? |

For many products, target binding is followed by **internalization**, movement into the cell. Processing then generates active payload or an active breakdown product. The details depend on the linker and product: a noncleavable linker can require degradation of the antibody rather than cleavage of the linker itself. Internalization and release are separate events.

The active material may still need to leave an intracellular compartment. The lysosome is a cellular compartment that digests material. Primary experiments with trastuzumab emtansine showed that a protein in its membrane, the transporter SLC46A3, can move an active breakdown product into the cytoplasm. This is an example of a delivery bottleneck, not a universal marker for every ADC.

Some released payloads can cross cell membranes and affect nearby cells, a **bystander effect**. Ogitani and colleagues demonstrated this for a particular payload and conjugate in mixed preclinical models. Other payloads behave differently. Bystander killing does not mean distant tumors are automatically reached, or that the treatment has trained a lasting immune response.

## Why it matters in cancer

A surface protein can serve as a delivery address even if cancer does not depend on its signaling for survival. The relevant question is whether the full product delivers an effective insult at a usable exposure.

[Target heterogeneity](/wiki/education/concepts/cancer-biology/what-cancer-is/tumor-heterogeneity), processing, payload sensitivity, and exposure can each limit activity. Healthy-tissue expression and exposure to unconjugated payload can contribute to harm. Sharing an antibody target does not make two ADCs equivalent.

## Worked example

Two fictional tumor models bind an ADC against surface protein M. Both take antibody-associated material into the cell. In Model A, an assay detects the active payload product and a later survival assay shows fewer living cells. In Model B, little active product is detected and survival is unchanged.

The result supports a difference after binding, under the tested conditions. It does not prove which processing step explains it. Compare processing and transport, add controls, and test payload sensitivity separately. An antibody fluorescence image alone cannot answer all three questions.

## Common confusions

- **Target staining versus usable delivery:** a tissue stain is not a complete test of live-cell access, trafficking, or payload action.
- **Internalization versus release:** material inside the cell may still be attached, trapped, or inactive.
- **Targeted versus tumor-exclusive:** correct binding can occur on healthy tissue too.
- **New payload versus solved resistance:** the new product must be tested against the actual bottleneck.
- **Bystander effect versus systemic immunity:** local chemical exposure and an immune response are different mechanisms.

## How it is measured

Complementary assays examine binding, trafficking, active payload or breakdown products, and cell survival. Pharmacology studies may separately measure conjugated antibody, total antibody, and unconjugated payload. [Immunohistochemistry](/wiki/education/concepts/measurement/pathology-readouts/immunohistochemistry) measures a tissue protein signal; a validated assay may have a product-specific clinical role, but its meaning cannot be transferred to every ADC.

## Related concepts

- [Antibody structure](/wiki/education/concepts/immunology/antibodies-and-b-cells/antibody-structure)
- [Chemotherapy](/wiki/education/concepts/therapeutics/chemotherapy/chemotherapy)
- [On-target, off-tumor toxicity](/wiki/education/concepts/therapeutics/toxicities-and-supportive-care/on-target-off-tumor-toxicity)

## Sources and scope

Source check: October 9, 2026. Cytotoxic ADC mechanisms; expert and learner review remain pending. Preclinical examples do not establish clinical benefit or a resistance biomarker.

- [FDA, 2024: clinical pharmacology considerations for ADCs](https://www.fda.gov/media/155997/download) — components, product-specific exposure, and measurement.
- [Tomabechi and colleagues, 2022: transport of an active trastuzumab emtansine breakdown product](https://pubmed.ncbi.nlm.nih.gov/36741448/) — a specific lysosomal transport mechanism.
- [Ogitani and colleagues, 2016: bystander killing in mixed preclinical models](https://pubmed.ncbi.nlm.nih.gov/27166974/) — a payload-dependent effect with a defined scope.
- [Primary SLC46A3 resistance and rescue experiments, 2018](https://pubmed.ncbi.nlm.nih.gov/30131388/) — processing-related resistance for studied noncleavable conjugates.

<!-- BEGIN GENERATED USED IN -->
## Used in

- [Aiming a drug at a surface target](/wiki/education/guides/aiming-a-drug-at-a-surface-target/index)
- [Separate the address from the killing mechanism](/wiki/education/targeted-therapy-modalities/01-mechanism)
- [Follow delivery, exposure, and the treatment clock](/wiki/education/targeted-therapy-modalities/02-timing)
- [Compare formats with evidence and normal-tissue risk](/wiki/education/targeted-therapy-modalities/06-comparisons)
- [Targeted therapy mechanisms and comparisons](/wiki/education/targeted-therapy-modalities/index)
<!-- END GENERATED USED IN -->
