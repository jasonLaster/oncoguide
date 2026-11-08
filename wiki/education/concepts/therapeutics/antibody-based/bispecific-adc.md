---
title: "Bispecific ADC"
type: "concept"
domain: "therapeutics/antibody-based"
summary: "A bispecific ADC is an antibody-drug conjugate whose antibody binds two different targets, or two separate sites on one target, to change which cells it reaches and how well it is taken inside them."
glossary_anchor: "bispecific-adc"
aliases: ["bispecific ADC", "bispecific antibody-drug conjugate", "biparatopic ADC", "biparatopic", "dual-targeting ADC"]
level: "advanced"
prerequisites:
  - "[[wiki/education/concepts/therapeutics/antibody-based/antibody-drug-conjugate]]"
  - "[[wiki/education/concepts/immunology/antibodies-and-b-cells/antibody-structure]]"
  - "[[wiki/education/concepts/engineering-and-manufacturing/binders/affinity-epitope-and-developability]]"
used_by: ["[[wiki/education/guides/aiming-a-drug-at-a-surface-target/04-match-the-payload-to-the-failure]]","[[wiki/education/guides/aiming-a-drug-at-a-surface-target/05-read-a-new-payload-strategy]]","[[wiki/education/guides/aiming-a-drug-at-a-surface-target/06-choose-a-target]]","[[wiki/education/guides/aiming-a-drug-at-a-surface-target/index]]"]
sensitive: false
tags: ["education", "therapeutics"]
updated: "2026-11-07"
source_checked: "2026-11-07"
reviewed: "pending"
reviewed_by: ""
review_status: "Source-checked; expert and learner review pending"
---

# Bispecific ADC

## In one sentence

A bispecific ADC is an antibody-drug conjugate whose antibody binds two different targets, or two separate sites on one target, to change which cells it reaches and how well it is taken inside them.

## The intuition

A letter addressed only by street number gets lost when the number is smudged. Add a second line, the building name, and it arrives more often. A bispecific ADC gives the delivery vehicle two ways to recognize the right cell. The analogy breaks in two ways: a second address can also match more of the wrong buildings, and for these drugs, getting **inside** the building matters as much as finding it.

## How it works

An ordinary [antibody-drug conjugate (ADC)](/wiki/education/concepts/therapeutics/antibody-based/antibody-drug-conjugate) has two identical arms that bind one site, called an [epitope](/wiki/education/concepts/immunology/antigen-presentation/antigen-and-epitope), on one protein. Engineered formats change that:

| Format | What the arms bind | Main intended gain | Example |
|---|---|---|---|
| **Bispecific** | Two different proteins | Reach cells that carry either target; favor cells carrying both | Conjugates against epidermal growth factor receptor (EGFR) and its relative HER3, such as izalontamab brengitecan [1] |
| **Biparatopic** | Two separate sites on the same protein | Cluster the target, speeding uptake and breakdown inside the cell | A conjugate against two sites on [human epidermal growth factor receptor 2 (HER2)](/wiki/education/concepts/breast-cancer/receptors-and-subtypes/her2) that outperformed trastuzumab emtansine (T-DM1) in resistant models [2] |
| **Trafficking partner** | The tumor target plus a fast-internalizing protein | Drag a slowly internalized target into the cell | HER2 linked to prolactin receptor in breast cancer models [3] |

Three mechanisms explain most of the design logic:

1. **Coverage.** Tumors are patchy; see [tumor heterogeneity](/wiki/education/concepts/cancer-biology/what-cancer-is/tumor-heterogeneity). If either target lets the conjugate bind, fewer cells escape.
2. **Avidity.** Two weaker arms can bind tightly only where both targets sit together. Tuning each arm's strength can favor tumor cells over healthy cells that carry just one target. This is a design aim, not a guaranteed property.
3. **Internalization.** Cross-linking surface proteins can trigger uptake and delivery to the lysosome, where most payloads are released. A biparatopic HER2 antibody clustered the receptor and increased its uptake and degradation [2]; linking HER2 to the rapidly internalized prolactin receptor improved HER2-ADC killing [3].

The payload can be any class. Several of the leading bispecific ADCs in breast cancer trials carry a [topoisomerase I (TOP1) inhibitor](/wiki/education/concepts/therapeutics/chemotherapy/topoisomerase-i-inhibitors) [4].

## Why it matters in cancer

- **A new format can beat chemotherapy without a new payload.** A randomized phase 3 trial in China enrolled 418 people with advanced triple-negative breast cancer after one or two prior lines, including a taxane; it excluded anyone who had received a TOP1-payload ADC. The EGFR×HER3 bispecific izalontamab brengitecan, which carries a TOP1 payload, lengthened progression-free survival (median 8.5 versus 3.1 months) and overall survival (hazard ratio 0.60 at an interim analysis) compared with chemotherapy, as reported at the 2026 ASCO meeting (abstract LBA1003) and not yet peer-reviewed. Severe drops in blood counts were frequent [1, 5]. The trial did not compare it with an existing TOP1 ADC, so it does not measure how much the format itself adds.
- **Low expression of each target may matter less**, because binding can come from either arm. How far this extends to patients with low levels of both targets is not established.
- **Testing becomes harder.** Which target should be measured, by which assay, and does either level predict benefit? Selection rules for bispecific ADCs are largely undeveloped.

## Common confusions

- **Biparatopic is a special kind of bispecific.** Bispecific means two different binding sites; biparatopic means both sites are on the same protein.
- **A bispecific ADC is not a T-cell engager.** A [T-cell engager](/wiki/education/concepts/therapeutics/antibody-based/t-cell-engager) uses its second arm to recruit an immune cell; a bispecific ADC uses both arms to find and enter the tumor cell and relies on its payload to kill.
- **Two targets are not two payloads.** A bispecific ADC with one TOP1 payload still meets TOP1 resistance; see [cross-resistance between ADCs](/wiki/education/concepts/therapeutics/antibody-based/adc-cross-resistance).
- **More binding can mean more harm.** Healthy tissues carrying either target can be hit; see [on-target, off-tumor toxicity](/wiki/education/concepts/therapeutics/toxicities-and-supportive-care/on-target-off-tumor-toxicity).

## How it is measured

Each target's expression is measured separately, usually by [immunohistochemistry](/wiki/education/concepts/measurement/pathology-readouts/immunohistochemistry). Binding strength of each arm, internalization rate and payload release are laboratory measurements of the product. Clinical trials so far mostly enroll patients without requiring either target, so the link between expression and benefit remains open.

## In Diana's case

Whether her tumor's target proteins fit any bispecific design is a care question owned by [her molecular profile](/wiki/care/molecular-profile).

## Related concepts

- [Antibody-drug conjugate](/wiki/education/concepts/therapeutics/antibody-based/antibody-drug-conjugate)
- [Target versus therapeutic format](/wiki/education/concepts/therapeutics/antibody-based/target-vs-chassis)
- [ADC payload classes](/wiki/education/concepts/therapeutics/antibody-based/adc-payload-classes)
- [Affinity, epitope and developability](/wiki/education/concepts/engineering-and-manufacturing/binders/affinity-epitope-and-developability)
- [T-cell engager](/wiki/education/concepts/therapeutics/antibody-based/t-cell-engager)

## Sources and scope

Source check: November 7, 2026. Mechanisms from preclinical models; one randomized clinical example limited to its population and interim analysis. Expert and learner review remain pending.

1. [PANKU-Breast02 (NCT06382142) registry record](https://clinicaltrials.gov/study/NCT06382142) — design, population and comparator for izalontamab brengitecan in previously treated advanced TNBC.
2. [Li et al., 2016](https://pubmed.ncbi.nlm.nih.gov/26766593/) — biparatopic HER2 ADC: receptor clustering, internalization and activity in T-DM1-resistant models.
3. [Andreev et al., 2017](https://pubmed.ncbi.nlm.nih.gov/28108597/) — HER2×prolactin receptor bispecific antibodies and ADCs; internalization and killing in breast cancer cells.
4. [Ji et al., 2026: Recent advances in bispecific antibody-drug conjugates for breast cancer therapy](https://pubmed.ncbi.nlm.nih.gov/41579215/) — review of formats and clinical programs.
5. [ASCO 2026 conference report, LBA1003](https://www.cancernetwork.com/view/izalontamab-brengitecan-improves-os-pfs-in-advanced-metastatic-tnbc) — reported efficacy and safety; peer-reviewed publication not yet located.

<!-- BEGIN GENERATED USED IN -->
## Used in

- [Match the payload to the failure](/wiki/education/guides/aiming-a-drug-at-a-surface-target/04-match-the-payload-to-the-failure)
- [Read a new payload strategy](/wiki/education/guides/aiming-a-drug-at-a-surface-target/05-read-a-new-payload-strategy)
- [Choose a target worth aiming at](/wiki/education/guides/aiming-a-drug-at-a-surface-target/06-choose-a-target)
- [Aiming a drug at a surface target](/wiki/education/guides/aiming-a-drug-at-a-surface-target/index)
<!-- END GENERATED USED IN -->
