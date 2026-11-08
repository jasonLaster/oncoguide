---
title: "The genetic code: codons, start and stop signals, and the reading frame"
type: concept
domain: biology-basics/genetics
level: foundation
sensitive: false
tags: [education, biology-basics]
updated: 2026-11-08
source_checked: 2026-11-08
reviewed: "pending"
reviewed_by: ""
review_status: "Source-checked; expert and learner review pending"
glossary_anchor: genetic-code
aliases: [genetic code, codon, codons, start codon, stop codon, reading frame, open reading frame, triplet code]
summary: "The genetic code is the set of rules a cell uses to read a messenger RNA three letters at a time, one codon per amino acid, starting at an AUG start codon and ending at a stop codon."
prerequisites:
  - "[[wiki/education/concepts/biology-basics/genetics/central-dogma]]"
  - "[[wiki/education/concepts/biology-basics/molecules/rna-and-mrna]]"
used_by: ["[[wiki/education/guides/from-variant-to-drug/01-authenticate-and-attribute-the-finding]]","[[wiki/education/guides/from-variant-to-drug/index]]"]
---

# The genetic code: codons, start and stop signals, and the reading frame

## In one sentence

The genetic code is the set of rules a cell uses to read a messenger RNA three letters at a time, one codon per amino acid, starting at an AUG start codon and ending at a stop codon.

## The intuition

Imagine a sentence written only in three-letter words with no spaces: THECATSAWTHEDOG. Read from the first letter, it makes sense. Start one letter late, or lose one letter in the middle, and every later word becomes nonsense: HEC ATS AWT. The cell reads its messages the same way. It must start in the right place, and it then counts in threes until it reaches a stop word. The analogy has a limit: the cell's dictionary has many synonyms, so many single-letter changes do not change the meaning at all.

## How it works

A [messenger RNA (mRNA)](/wiki/education/concepts/biology-basics/molecules/rna-and-mrna) is written in four letters: A, U, G and C. (In DNA, T takes the place of U.) A **codon** is a group of three letters. Four letters taken three at a time give 64 codons:

- **61 codons specify amino acids.** There are only 20 amino acids, so most have two to six codons. Methionine (AUG) and tryptophan (UGG) have one each. Often the third letter can change without changing the amino acid.
- **3 codons mean stop:** UAA, UAG and UGA. No amino acid matches them; the ribosome releases the finished protein.
- **AUG usually means start.** The ribosome scans the message from its front end and begins at the first AUG in a suitable context, so newly made proteins begin with methionine, which may later be trimmed off.

The start codon fixes the **reading frame**: the message is read as consecutive, non-overlapping triplets from that point. An **open reading frame** is a stretch that runs from a start codon to a stop codon.

Two 1961 experiments laid this out. Crick and colleagues used mutations in a bacterial virus to show that the code is read in triplets from a fixed starting point, and that adding or removing one or two letters scrambles everything downstream while removing three restores sense [1]. Nirenberg and Matthaei showed that an artificial message of repeated U letters made a chain of phenylalanine, decoding the first codon, UUU [2].

The code is nearly universal: bacteria, plants and people use the same table. Human mitochondria, which make 13 of their own proteins, are an exception. There, UGA means tryptophan instead of stop, AUA means methionine, and AGA and AGG act as stops [3].

## What a single change can do

These are real human variants, written in the standard notation used on genetic reports: "c." numbers the coding DNA letter, and "p." names the protein change.

| Kind of change | At the codon | Real example | Consequence |
|---|---|---|---|
| **Missense** | One letter swaps one amino acid | TP53 c.524G>A, p.Arg175His: CGC (arginine) becomes CAC (histidine) [4] | A full-length protein with one wrong amino acid; ClinVar classifies this common TP53 change as pathogenic |
| **Frameshift** | Losing 2 letters shifts every later codon | BRCA1 c.68_69del (also called 185delAG), p.Glu23fs [5] | New amino acids, then an early stop; the message is often destroyed |
| **Nonsense** | One letter creates a stop | For example, UGG (tryptophan) becomes UGA (stop) | A shortened protein, or a message destroyed by [nonsense-mediated decay](/wiki/education/concepts/biology-basics/genetics/nonsense-mediated-decay) |
| **Synonymous** | One letter changes, same amino acid | For example, GAA and GAG both mean glutamate | Usually no protein change, though it can still affect [splicing](/wiki/education/concepts/biology-basics/genetics/splicing) |
| **In-frame deletion** | Losing 3 letters removes one codon | — | One amino acid missing; the rest of the frame is intact |

In protein notation, "fs" means frameshift and "Ter" or "*" means a stop. [Mutation types](/wiki/education/concepts/biology-basics/genetics/mutation-types) names the full set of edit classes.

## Why it matters in cancer

- **Reading a tumor or germline report.** Most cancer variants are reported as codon-level changes. Knowing whether a change is missense, frameshift or nonsense tells you whether a full-length protein is still made, the first step toward judging function.
- **Losing a tumor suppressor.** Frameshift and nonsense changes are the common way inherited BRCA1 and BRCA2 variants disable the gene, as with the BRCA1 variant above [5].
- **Getting the frame back.** A tumor can escape PARP inhibitors and platinum through a second change that restores the BRCA reading frame. See [BRCA reversion mutations](/wiki/education/concepts/cancer-biology/genome-instability-and-repair/brca-reversion-mutations).
- **New targets for the immune system.** A frameshift makes a run of amino acids found nowhere in the normal body. Mismatch-repair-deficient tumors make many such changes. In a study of 86 people with these tumors across 12 cancer types, the immune checkpoint drug pembrolizumab, a PD-1 blocker, produced responses in 53%; the tumor peptides that T cells recognized in a responding patient all came from frameshifts [6]. See [neoantigens](/wiki/education/concepts/immunology/antigen-presentation/neoantigen).

## Common confusions

- **Codon versus gene.** A codon is three letters; a gene holds hundreds of codons plus regulatory and noncoding sequence.
- **Synonymous versus silent.** A synonymous change keeps the amino acid but is not always without effect.
- **Frameshift versus nonsense.** A nonsense change creates a stop at that codon; a frameshift changes the downstream codons and usually reaches a stop some distance later.
- **DNA versus RNA letters.** Reports number DNA letters (with T); the ribosome reads RNA (with U). They describe the same sequence.

## Try it

A report lists BRCA1 c.68_69del. How many letters were lost, and why does that matter more than losing three?

<details><summary>Show answer</summary>

Two letters, positions 68 and 69. Two is not a multiple of three, so every codon after the deletion is read in a shifted frame, the amino acids change and an early stop soon appears. Losing three letters would remove a single amino acid and keep the rest of the frame, which often leaves a working protein.

</details>

## Explain it back

"The ribosome starts at ___, reads ___ letters at a time, and stops at UAA, UAG or ___; adding or losing a number of letters that is not a multiple of three causes a ___."

**One possible answer:** an AUG codon; three; UGA; frameshift.

## Takeaway

**Cells read a message in threes from an AUG start, so the position of the start, the stops and every insertion or deletion decides which protein is made.**

## Related concepts

- [Central dogma](/wiki/education/concepts/biology-basics/genetics/central-dogma) places translation in the DNA-to-protein chain.
- [Mutation types](/wiki/education/concepts/biology-basics/genetics/mutation-types)
- [Nonsense-mediated decay](/wiki/education/concepts/biology-basics/genetics/nonsense-mediated-decay)
- [Codon optimization](/wiki/education/concepts/engineering-and-manufacturing/nucleic-acid-design/codon-optimization) uses synonymous codons in engineered messages.

## Sources and scope

Source-checked against primary papers, NCBI and ClinVar records. Expert and learner review pending. General education; variant examples illustrate notation, not any person's result.

1. [Crick and colleagues, *Nature* 1961](https://pubmed.ncbi.nlm.nih.gov/13882203/): a triplet code read from a fixed start.
2. [Nirenberg and Matthaei, *PNAS* 1961](https://pubmed.ncbi.nlm.nih.gov/14479932/): poly-U directs phenylalanine.
3. [NCBI, the genetic codes, tables 1 and 2](https://www.ncbi.nlm.nih.gov/Taxonomy/Utils/wprintgc.cgi), with [Anderson and colleagues, *Nature* 1981](https://pubmed.ncbi.nlm.nih.gov/7219534/): the standard and vertebrate mitochondrial codes.
4. [ClinVar, TP53 c.524G>A (p.Arg175His)](https://www.ncbi.nlm.nih.gov/clinvar/variation/12374/).
5. [ClinVar, BRCA1 c.68_69del (p.Glu23fs)](https://www.ncbi.nlm.nih.gov/clinvar/variation/17662/).
6. [Le and colleagues, *Science* 2017](https://pubmed.ncbi.nlm.nih.gov/28596308/): mismatch-repair deficiency and PD-1 blockade.

<!-- BEGIN GENERATED USED IN -->
## Used in

- [Authenticate and attribute the finding](/wiki/education/guides/from-variant-to-drug/01-authenticate-and-attribute-the-finding)
- [From a variant to a drug claim](/wiki/education/guides/from-variant-to-drug/index)
<!-- END GENERATED USED IN -->
