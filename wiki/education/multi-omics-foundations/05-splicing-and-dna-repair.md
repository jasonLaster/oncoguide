---
title: "Follow a splice change toward repair function"
type: "guide-lesson"
guide: "what-multi-omics-tells-us"
step: 6
minutes: 10
objectives: ["Trace a splice-site finding from DNA to actual RNA products.", "Distinguish a repair-history scar from current repair function."]
prerequisites: ["[[wiki/education/concepts/biology-basics/genetics/central-dogma]]", "[[wiki/education/concepts/biology-basics/genetics/mutation-types]]", "[[wiki/education/concepts/cancer-biology/what-cancer-is/oncogene-and-tumor-suppressor]]"]
sensitive: false
tags: ["education", "multi-omics"]
updated: "2026-10-09"
source_checked: "2026-10-09"
reviewed: "pending"
reviewed_by: ""
review_status: "Source-checked; expert and learner review pending"
---

# Follow a splice change toward repair function

**DNA can suggest a disrupted message. RNA tests the message, protein tests the product, and a controlled assay tests current repair function.**

**Before you start:** [[wiki/education/concepts/biology-basics/genetics/central-dogma|DNA → RNA → protein]] establishes the layers. [[wiki/education/concepts/biology-basics/genetics/mutation-types|Mutation types]] distinguishes a splice change from a frameshift or stop. [[wiki/education/concepts/cancer-biology/what-cancer-is/oncogene-and-tumor-suppressor|Tumor suppressors]] explains why losing a safeguard can matter.

## Where this step sits

This is step 6 of [[wiki/education/reading-a-tumor/omics-and-multi-omics|Understand multi-omics]]. You can still find a damaged instruction sheet in a workshop. Its presence does not prove that workers can follow it. Detectable RNA similarly does not establish an intact protein product.

## Splicing edits the message

[RNA splicing](/wiki/education/concepts/biology-basics/genetics/splicing) joins retained segments into a processed message. The concept explains exons, introns, splice boundaries and the ways processing can change. Here, use that vocabulary to choose the next measurement rather than predict one protein outcome from a DNA label.

Imagine a fictional report with a donor-site variant and detectable gene-level RNA. There are at least two questions: which RNA products are present, and how much of each was captured? A junction joining the usual retained segments supports one product; a junction skipping a segment supports another. Their coexistence is possible. Neither observation alone shows whether a useful protein remains.

| Layer | A useful question | What must remain separate |
|---|---|---|
| DNA | Is the processing-boundary finding technically credible? | Prediction of a consequence. |
| RNA | Which junctions and transcript products are actually observed? | Total gene signal and normal protein production. |
| Protein | Which forms and amounts does the assay distinguish? | A stain's signal and intact biological function. |

A skipped segment does not automatically establish a frameshift or complete loss. A shortened message may have several possible consequences. The practical skill is to ask which observation distinguishes them and what the assay can miss.

## Decode what the notation establishes

A `c.` description uses a coding-DNA reference. A `p.` description refers to protein. A plus or minus near an exon position can describe an intronic location. A complete name needs a reference sequence and version; genomic coordinates also need a genome build.

For teaching, imagine a fictional variant named `c.200+1G>A` on a stated transcript. It lies just inside an intron at a donor boundary. That location suggests a processing question. It does not by itself specify the exact skipped segment, protein or degree of remaining function.

## Repair scars and repair now

[DNA damage and repair](/wiki/education/concepts/cancer-biology/genome-instability-and-repair/dna-damage-and-repair-overview) includes double-strand breaks, where both strands of the DNA backbone are broken. [Homologous recombination (HR)](/wiki/education/concepts/cancer-biology/genome-instability-and-repair/homologous-recombination-and-hrd) repairs certain DNA breaks using a matching template; homologous recombination deficiency (HRD) describes impaired function. A [genomic scar](/wiki/education/concepts/cancer-biology/genome-instability-and-repair/genomic-scars) records accumulated damage history, which can differ from present function.

Different scar methods summarize different features. The scar concept defines loss of heterozygosity (LOH), telomeric allelic imbalance (TAI), and large-scale transitions (LST), including the original LST segment-size and filtering rules. Those method rules differ from a validated clinical score cutoff. [Mutational signatures](/wiki/education/concepts/cancer-biology/genome-instability-and-repair/mutational-signatures) provide another kind of pattern; none should be treated as the same measurement.

A research **RAD51-foci assay** examines clusters of a repair protein under defined conditions. Interpretation requires suitable cells, evidence of relevant damage and controls. A low result in a poorly cycling or unsuitable sample may not establish repair failure.

## A worked chain: what would strengthen the story?

A fictional repair gene has a splice-site change. RNA shows an abnormal junction. That strengthens the message-processing claim. Tissue staining then shows reduced R signal in malignant cells. That adds a cell-specific protein observation, but does not establish whether intact R remains: the answer depends on which forms the antibody and assay distinguish. Finally, a controlled repair assay indicates impaired repair in a suitable model.

Each step answers a new question. A high scar score can add historical context; it cannot substitute for the current functional experiment. Even a persuasive repair mechanism does not establish a drug's clinical eligibility or benefit in every disease setting.

## What can go wrong at this step

- Reading detectable gene-level RNA as proof of a normal transcript.
- Calling every exon skip a frameshift.
- Treating a scar threshold from one assay as interchangeable with another.
- Treating poor assay conditions as evidence of defective repair.

## Try it

An old tumor has a strong repair scar, but a later sample shows restored repair in a suitable assay. Must the scar be false?

**Answer:** No. The scar can record earlier damage while present function differs. Check specimen timing and method before declaring a contradiction.

## Explain it back

“The splice prediction asks ______; the RNA junction shows ______; the scar records ______; the functional assay tests ______.”

One answer: “what might happen; what message was made; accumulated repair history; current behavior under its conditions.”

## Takeaway

**A DNA prediction, a transcript product, a genomic scar and current repair function are four distinct pieces of evidence.**

**Next:** [[wiki/education/multi-omics-foundations/06-immune-presence-and-recognition|Separate immune presence from tumor recognition]].

## Sources and scope

Source check: October 9, 2026. The examples are fictional and teach interpretation rather than a treatment choice. Expert and learner review remain pending.

- [HGVS RNA-splicing nomenclature](https://archive.hgvs-nomenclature.org/recommendations/RNA/variant/splicing/).
- [Cruz et al., RAD51 primary functional study](https://pubmed.ncbi.nlm.nih.gov/29635390/).
- [HGVS predicted versus observed consequences](https://hgvs-nomenclature.org/stable/).
