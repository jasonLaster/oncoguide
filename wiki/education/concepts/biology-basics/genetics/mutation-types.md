---
title: "Mutation types: what changed in the DNA?"
type: "concept"
domain: "biology-basics/genetics"
summary: "A DNA variant describes a difference in sequence or copy structure; its biological effect is a separate question."
glossary_anchor: "mutation-types"
aliases: ["mutation types", "SNV", "single-nucleotide variant", "indel", "CNV", "CNA", "SV"]
level: "foundation"
sensitive: false
tags: ["education", "biology-basics"]
updated: "2026-10-09"
source_checked: "2026-10-09"
reviewed: "pending"
reviewed_by: ""
review_status: "Source-checked; expert and learner review pending"
prerequisites: ["[[wiki/education/concepts/biology-basics/genetics/central-dogma]]"]
used_by: ["[[wiki/education/designing-a-vaccine/04-how-to-read-a-neoantigen-design-board]]","[[wiki/education/guides/from-variant-to-drug/01-authenticate-and-attribute-the-finding]]","[[wiki/education/guides/from-variant-to-drug/index]]","[[wiki/education/molecular-profiling/01-dna-the-blueprint]]","[[wiki/education/multi-omics-foundations/05-splicing-and-dna-repair]]","[[wiki/education/reading-a-tumor/omics-and-multi-omics]]"]
---

# Mutation types: what changed in the DNA?

## In one sentence

A DNA variant describes a difference in sequence or copy structure; its biological effect is a separate question.

## The intuition

Editing a recipe can change one letter, remove a word, duplicate a page or join two recipes. The size of the edit tells us what happened to the text. It does not tell us how the dish will taste. DNA changes work similarly, though a cell's response is much more complicated than cooking.

## How it works

A **single-nucleotide variant (SNV)** changes one DNA base. An **insertion or deletion (indel)** adds or removes sequence. A **copy-number alteration (CNA)** changes how many copies of a region are present. A **structural variant (SV)** changes the arrangement of larger segments, such as a deletion, inversion or rearrangement. The categories can overlap: a structural deletion also changes copy number.

Consequences depend on where the change sits. In a protein-coding sequence, a **missense** change alters an amino acid. A **nonsense** change introduces an early stop. A **synonymous** change preserves the encoded amino acid, though some can still affect RNA processing. A **frameshift** changes the grouping of the coding sequence into three-base units. An indel is not automatically a frameshift: location and net coding-length change matter.

A change near a splice boundary can affect which RNA segments are joined. A rearrangement may create a fusion between genes. Neither a splice prediction nor a DNA fusion proves that the proposed RNA or protein is produced. [HGVS variant nomenclature](https://hgvs-nomenclature.org/stable/) separates observed changes from predicted consequences.

## Why it matters in cancer

A sequence change can activate growth, disable a safeguard, create a candidate immune target or have little relevant effect. Interpretation needs the exact change, reference sequence and evidence for its consequence. The gene name alone is too coarse.

## Worked example

A fictional report lists a one-base change, a three-base coding deletion and a gain containing several genes. These describe different edits. The coding deletion may remove one amino acid without shifting the reading frame. The gain does not identify which neighboring gene matters. Each finding needs its own consequence question.

## Common confusions

- **Variant** describes a difference; **pathogenic** is an evidence-based classification for a stated disease context.
- **Predicted damaging** does not mean observed protein damage or drug sensitivity.
- A stop substitution is not necessarily a frameshift.
- “Not found” can mean outside the assay's coverage, below detection or truly absent in the tested material.

## How it is measured

Sequencing compares reads with a specified reference. Copy and structural analyses use additional evidence, such as read depth and fragment arrangement. Different assays detect different change classes. A report should retain its genome build, transcript version, tested regions and quality limits.

## Related concepts

- [[wiki/education/concepts/biology-basics/genetics/central-dogma|DNA, RNA and protein]]
- [[wiki/education/concepts/measurement/sequencing-basics/panel-exome-genome|Panel, exome and genome sequencing]]
- [[wiki/education/concepts/cancer-biology/what-cancer-is/oncogene-and-tumor-suppressor|Cancer-driving gene roles]]

## Sources and scope

Source check: October 9, 2026. This page explains change classes; expert and learner review remain pending.

- [NHGRI mutation definition](https://www.genome.gov/genetics-glossary/Mutation).
- [HGVS nomenclature recommendations](https://hgvs-nomenclature.org/stable/).

<!-- BEGIN GENERATED USED IN -->
## Used in

- [Read a neoantigen design board](/wiki/education/designing-a-vaccine/04-how-to-read-a-neoantigen-design-board)
- [Authenticate and attribute the finding](/wiki/education/guides/from-variant-to-drug/01-authenticate-and-attribute-the-finding)
- [From a variant to a drug claim](/wiki/education/guides/from-variant-to-drug/index)
- [Read a DNA assay as a coverage-and-confidence claim](/wiki/education/molecular-profiling/01-dna-the-blueprint)
- [Follow a splice change toward repair function](/wiki/education/multi-omics-foundations/05-splicing-and-dna-repair)
- [Understand multi-omics, one question at a time](/wiki/education/reading-a-tumor/omics-and-multi-omics)
<!-- END GENERATED USED IN -->
