---
title: "ADC payload toxicities"
type: "concept"
domain: "therapeutics/toxicities-and-supportive-care"
summary: "ADC payload toxicities are side effects of antibody-drug conjugates that follow the drug they carry more than the protein they target, because payload released in blood or taken up by healthy cells harms tissues the antibody was never aimed at."
glossary_anchor: "adc-payload-toxicity"
aliases: ["ADC toxicity", "ADC side effects", "payload toxicity", "payload-driven toxicity", "ADC class toxicities"]
level: "intermediate"
prerequisites:
  - "[[wiki/education/concepts/therapeutics/antibody-based/antibody-drug-conjugate]]"
  - "[[wiki/education/concepts/therapeutics/antibody-based/adc-payload-classes]]"
used_by: ["[[wiki/education/guides/aiming-a-drug-at-a-surface-target/04-match-the-payload-to-the-failure]]","[[wiki/education/guides/aiming-a-drug-at-a-surface-target/index]]","[[wiki/education/targeted-therapy-modalities/02-timing]]"]
sensitive: false
tags: ["education", "therapeutics"]
updated: "2026-11-07"
source_checked: "2026-11-07"
reviewed: "pending"
reviewed_by: ""
review_status: "Source-checked; expert and learner review pending"
---

# ADC payload toxicities

## In one sentence

ADC payload toxicities are side effects of antibody-drug conjugates that follow the drug they carry more than the protein they target, because payload released in blood or taken up by healthy cells harms tissues the antibody was never aimed at.

## The intuition

If a courier service carries weed killer, lawns along the route suffer whichever house the parcels are addressed to. Change the addresses and the damage pattern stays the same; change the cargo and it changes. An antibody-drug conjugate (ADC) behaves similarly: its side-effect profile looks most like the chemotherapy class it carries. The analogy breaks because the address still matters sometimes, when healthy tissue carries the target too.

## How it works

Three routes put payload where it was not aimed:

1. **Early release.** Some linkers let a little payload go in the blood, and free payload then acts like ordinary chemotherapy. See [ADC conjugation chemistry](/wiki/education/concepts/therapeutics/antibody-based/adc-conjugation-chemistry).
2. **Uptake by healthy cells without the target.** Some healthy cells take up circulating antibodies, including ADCs, without needing the target, and then release the payload inside themselves [9].
3. **The target on healthy tissue.** Normal cells that carry the target are hit directly; see [on-target, off-tumor toxicity](/wiki/education/concepts/therapeutics/toxicities-and-supportive-care/on-target-off-tumor-toxicity).

A pooled analysis of ADC trials found that the most common serious effects grouped by payload: low blood counts and nerve damage with MMAE, low platelets and liver injury with DM1, and eye toxicity with MMAF. The authors concluded these effects were likely off-target and payload-related [1]. Labels show the same pattern:

| Payload (class) | Example on a US label | Labeled toxicity that stands out | Numbers from the label |
|---|---|---|---|
| **SN-38** (topoisomerase I) | Sacituzumab govitecan | Boxed warning: neutropenia and diarrhea | Neutropenia 64% (grade 3–4, 48%); diarrhea 62% (grade 3–4, 10%), across label trials [2] |
| **DXd** (topoisomerase I) | Trastuzumab deruxtecan | Boxed warning: interstitial lung disease | Lung disease 12%, fatal 0.9%, at the 5.4 mg/kg dose across label trials [3] |
| **DXd** (topoisomerase I) | Datopotamab deruxtecan | Warnings: lung disease, eye-surface toxicity, mouth sores | In 841 people with breast cancer, lung disease 3.0% (fatal 0.2%); across 1,365 people with lung or breast cancer, stomatitis 63%, eye effects 38% [4] |
| **DM1** (microtubule) | Trastuzumab emtansine | Boxed warning: liver toxicity; warning: low platelets | Low platelets in 494 of 1,624 people (grade 3 or higher, 145) [5] |
| **MMAE** (microtubule) | Brentuximab vedotin; tisotumab vedotin | Nerve damage; boxed eye warning for tisotumab vedotin | Peripheral neuropathy 62% with brentuximab vedotin alone [6] |
| **DM4** (microtubule) | Mirvetuximab soravtansine | Boxed warning: eye toxicity | Eye effects 59% (grade 3, 11%) in ovarian cancer [7] |
| **MMAF** (microtubule) | Belantamab mafodotin | Boxed warning: corneal toxicity | 83% needed a dose change for eye effects in its trial [8] |

Rates come from different trials and populations and cannot be compared head to head. The label for each drug says so.

**Two payload-specific details matter clinically.** SN-38 is inactivated by the liver enzyme UGT1A1; people with two copies of the reduced-function UGT1A1\*28 variant have more neutropenia on sacituzumab govitecan [2]; see [topoisomerase I inhibitors](/wiki/education/concepts/therapeutics/chemotherapy/topoisomerase-i-inhibitors). And the lung disease seen with deruxtecan products is not shared equally across the class: its rate differs between trastuzumab deruxtecan and datopotamab deruxtecan, and its mechanism is unsettled; see [pneumonitis](/wiki/education/concepts/therapeutics/toxicities-and-supportive-care/pneumonitis).

## Why it matters in cancer

- **Switching target rarely switches side effects.** A second ADC with the same payload class brings a similar toxicity profile, which matters when the first caused lasting harm such as neuropathy.
- **Prior toxicity can close a door.** The datopotamab deruxtecan trials excluded people with a history of lung disease that needed steroids [4], so pneumonitis from an earlier drug can affect eligibility.
- **Supportive care is payload-specific.** Growth-factor support for SN-38 neutropenia, eye exams or lubricating drops for several ADCs, and lung monitoring for deruxtecan products are written into the labels; see [neutropenia and G-CSF](/wiki/education/concepts/therapeutics/toxicities-and-supportive-care/neutropenia-and-g-csf).
- **Toxicity sets the dose ceiling.** It limits how much ADC can be given, and so narrows the [therapeutic index](/wiki/education/concepts/therapeutics/how-drugs-work/therapeutic-index).

## Common confusions

- **Targeted does not mean side-effect-free.** Most ADC side effects come from payload outside the tumor.
- **Same payload class is not same rate.** Linker, loading and dose change how often an effect occurs.
- **A label rate is not a personal risk.** Rates describe trial populations with specific eligibility rules.
- **Payload toxicity is not on-target, off-tumor toxicity.** The first follows the drug; the second follows where the target sits in healthy tissue. Both can occur with one ADC.

## How it is measured

Trials grade side effects with the National Cancer Institute's Common Terminology Criteria for Adverse Events (CTCAE), from grade 1 (mild) to grade 5 (death). Lung disease in deruxtecan trials was adjudicated by an independent committee. Free payload in blood is measured separately from intact ADC, which helps link exposure to toxicity.

## Related concepts

- [ADC payload classes](/wiki/education/concepts/therapeutics/antibody-based/adc-payload-classes)
- [ADC conjugation chemistry](/wiki/education/concepts/therapeutics/antibody-based/adc-conjugation-chemistry)
- [On-target, off-tumor toxicity](/wiki/education/concepts/therapeutics/toxicities-and-supportive-care/on-target-off-tumor-toxicity)
- [Pneumonitis](/wiki/education/concepts/therapeutics/toxicities-and-supportive-care/pneumonitis)
- [Neutropenia and G-CSF](/wiki/education/concepts/therapeutics/toxicities-and-supportive-care/neutropenia-and-g-csf)
- [Therapeutic index](/wiki/education/concepts/therapeutics/how-drugs-work/therapeutic-index)

## Sources and scope

Source check: November 7, 2026. Label rates are from pooled trial populations named in each label and are not comparable across drugs; no management advice is given. Expert and learner review remain pending.

1. [Masters et al., 2018: Clinical toxicity of antibody drug conjugates, a meta-analysis of payloads](https://pubmed.ncbi.nlm.nih.gov/29027591/).
2. [Sacituzumab govitecan prescribing information](https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=57a597d2-03f0-472e-b148-016d7169169d), boxed warning and sections 5.1, 5.2 and 5.5.
3. [Trastuzumab deruxtecan prescribing information](https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=7e67e73e-ddf4-4e4d-8b50-09d7514910b6), boxed warning and section 5.1.
4. [Datopotamab deruxtecan prescribing information](https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=2950227c-6230-4ca4-a135-46e44d9424a0), sections 5.1–5.3 and 6.1.
5. [Trastuzumab emtansine prescribing information](https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=23f3c1f4-0fc8-4804-a9e3-04cf25dd302e), boxed warning and section 5.7.
6. [Brentuximab vedotin prescribing information](https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=3904f8dd-1aef-3490-e48f-bd55f32ed67f), section 5.1; [tisotumab vedotin prescribing information](https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=c9fe3f32-4219-466e-acb9-3f609b4f4df1), boxed warning.
7. [Mirvetuximab soravtansine prescribing information](https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=00c424b5-6ccd-48ab-9e88-1986451120e2), boxed warning and section 5.1.
8. [Belantamab mafodotin prescribing information](https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=aef7c34c-fef8-407c-99c0-a68aded53c60), boxed warning.
9. [Drago, Modi and Chandarlapaty, 2021](https://pubmed.ncbi.nlm.nih.gov/33558752/) — review of ADC design, including target-independent uptake and toxicity.

<!-- BEGIN GENERATED USED IN -->
## Used in

- [Match the payload to the failure](/wiki/education/guides/aiming-a-drug-at-a-surface-target/04-match-the-payload-to-the-failure)
- [Aiming a drug at a surface target](/wiki/education/guides/aiming-a-drug-at-a-surface-target/index)
- [Follow delivery, exposure, and the treatment clock](/wiki/education/targeted-therapy-modalities/02-timing)
<!-- END GENERATED USED IN -->
