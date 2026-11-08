---
title: "Start with genes, RNA and protein"
type: "guide-lesson"
guide: "what-multi-omics-tells-us"
step: 1
minutes: 8
objectives: ["Distinguish a gene, its RNA message and its protein product.", "Explain why evidence at one molecular layer does not establish the next."]
prerequisites: ["[[wiki/education/concepts/biology-basics/genetics/central-dogma]]"]
sensitive: false
tags: ["education", "multi-omics"]
updated: "2026-11-08"
source_checked: "2026-11-08"
reviewed: "pending"
reviewed_by: ""
review_status: "Source-checked; expert and learner review pending"
---

# Start with genes, RNA and protein

**DNA, RNA and protein are different things to measure. A change in one layer starts a question about the next.**

**Before you start:** [[wiki/education/concepts/biology-basics/genetics/central-dogma|Central dogma]] explains information flow from a protein-coding gene to its message and product. No other biology is assumed.

## Where this step sits

This is step 1 of [What does multi-omics tell us about a tumor?](/wiki/education/guides/what-multi-omics-tells-us/index) Start here if a report's long words make it hard to see the story. You do not need to memorize every gene. You need a few sturdy distinctions.

## Three layers, three questions

[DNA (deoxyribonucleic acid)](/wiki/education/concepts/biology-basics/molecules/dna) stores the sequence of a [gene](/wiki/education/concepts/biology-basics/molecules/gene); a sequence finding leaves its use open.

[RNA (ribonucleic acid) and messenger RNA (mRNA)](/wiki/education/concepts/biology-basics/molecules/rna-and-mrna) describe captured messages and other RNA products, rather than a count of finished tools.

A [protein](/wiki/education/concepts/biology-basics/molecules/protein-and-peptide) is the product whose form, location and function need their own measurements.

The recipe analogy helps: DNA is the stored recipe, RNA a working copy and protein a tool or product made from the instructions. A cell is more than a kitchen, though. It controls which recipes are copied, which messages persist and which products are used.

<img src="../../multi-omics-foundations/images/three-layers-three-questions-light.png" alt="DNA as a recipe book, RNA as a working copy and protein as a product, with open questions about whether the product was made, reached the right place and is working" data-theme-pair>

*This cartoon follows a protein-coding gene. The arrows show information flow; each product and its function still need their own evidence.*

| Layer | A good first question | A question it leaves open |
|---|---|---|
| DNA | Is this sequence or copy change present? | Was its message made? |
| RNA | Which messages or transcript forms were captured? | Was the relevant protein made? |
| Protein | Is this product present in the relevant cells and place? | Is it working, and does it matter? |

*The useful chain is sequence → message → product; each arrow needs evidence when the consequence matters.*

## Words that describe a measurement

**Expression** means a gene's information is being used to produce an RNA or protein product. A report must say which product it measured. “The gene is high” is not enough.

A **transcript** is an RNA product. An **isoform** is a particular version of a transcript or protein. A gene can produce several versions through different processing. A gene-level count can conceal that difference.

**Activity** means a process is doing something. **Abundance** means how much of something is present. A full toolbox does not tell us which tool is in use. For the same reason, protein abundance and function need different readouts.

## Follow a real receptor: HER2

[Human epidermal growth factor receptor 2 (HER2)](/wiki/education/concepts/breast-cancer/receptors-and-subtypes/her2) is a receptor protein made from the *ERBB2* gene. Each layer asks its own HER2 question:

- **DNA:** does the tumor carry extra copies of *ERBB2* (amplification)? In situ hybridization (ISH) or sequencing can count them.
- **RNA:** how much *ERBB2* message was captured from the sample?
- **Protein:** is HER2 on the cancer-cell membrane? [Immunohistochemistry (IHC)](/wiki/education/concepts/measurement/pathology-readouts/immunohistochemistry) scores this from 0 to 3+.

In HER2-positive cancer the layers usually agree: extra gene copies, abundant message and dense membrane protein. They are still separate measurements. The clinical HER2 score counts only membrane staining in invasive cancer cells, because antibody medicines such as trastuzumab bind the part of HER2 outside the cell. A stain inside the cell, or a high RNA value from a mixed sample, does not answer that question ([American Society of Clinical Oncology and College of American Pathologists (ASCO/CAP), 2023](https://www.cap.org/cap-guidelines/her2-testing-in-breast-cancer-2023-guideline-update/)).

Now consider *PIK3CA*, which encodes part of an enzyme inside the cell. A *PIK3CA* mutation found in DNA raises a different next question: is the signaling pathway it feeds more active, and does blocking it change growth? Surface location is not the issue. The right next assay follows the proposed mechanism.

## What can go wrong at this step

- Calling a DNA change “active” when no consequence was measured.
- Reading “high expression” without checking whether it means RNA or protein.
- Treating every RNA molecule as a protein-coding message.
- Assuming a detectable protein is intact, correctly located or essential.

You can avoid these errors with a small habit: name the physical object after every measurement. Say “RNA messages,” “membrane stain” or “repair response,” rather than just “signal.”

## Try it

A report detects many messages for enzyme E. Which claim is supported: abundant captured RNA, abundant protein, or a high rate of the enzyme's reaction?

**Answer:** Abundant captured RNA, under that assay's conditions. Protein measurement and a functional readout address the other claims. The RNA result gives a reason to investigate them.

## Explain it back

“DNA tells us about ______. RNA tells us about ______. Protein testing asks ______.”

One answer: “stored sequence; captured messages; what product was made, where it is and what it does.”

## Takeaway

**Always name the layer you measured before naming the consequence you hope it explains.**

**Next:** [See what is inside a tissue sample](/wiki/education/guides/what-multi-omics-tells-us/02-what-is-inside-a-tissue-sample).

## Sources and scope

Source check: November 8, 2026. The HER2 example follows the ASCO/CAP scoring rule; the enzyme exercise is fictional. The page teaches interpretation rather than a treatment choice. Expert and learner review remain pending.

- [NHGRI RNA fact sheet](https://www.genome.gov/about-genomics/educational-resources/fact-sheets/ribonucleic-acid-fact-sheet).
- [NHGRI transcription](https://www.genome.gov/genetics-glossary/Transcription).
- [ASCO/CAP HER2 testing guideline, 2023 update](https://www.cap.org/cap-guidelines/her2-testing-in-breast-cancer-2023-guideline-update/): IHC scoring of membrane staining and the integrated IHC/ISH workup.
