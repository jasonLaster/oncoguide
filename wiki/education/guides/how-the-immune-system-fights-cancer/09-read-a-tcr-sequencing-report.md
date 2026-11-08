---
title: "Read a T-cell receptor sequencing report"
type: "guide-lesson"
guide: "how-the-immune-system-fights-cancer"
step: 9
minutes: 10
objectives: ["Read each section of a T-cell receptor sequencing report and say what it measures.", "Separate relative enrichment, absolute expansion and antigen specificity.", "Name the follow-up test a claimed tumor-reactive clone still needs."]
prerequisites: ["[[wiki/education/concepts/immunology/t-cells/t-cell-receptor]]", "[[wiki/education/concepts/immunology/t-cells/t-cell-repertoire]]", "[[wiki/education/concepts/measurement/immune-monitoring/tcr-sequencing]]", "[[wiki/education/concepts/measurement/immune-monitoring/tcr-clonality-metrics]]"]
sensitive: false
tags: ["education", "immunology"]
updated: 2026-11-08
source_checked: 2026-11-08
reviewed: "pending"
reviewed_by: ""
review_status: "Source-checked; expert and learner review pending"
---

# Read a T-cell receptor sequencing report

**A [T-cell receptor (TCR)](/wiki/education/concepts/immunology/t-cells/t-cell-receptor) sequencing report is an inventory: it lists which receptor sequences were found in a sample and how common each was. It tells you who was sampled and how often, not what any receptor recognizes.**

**Before you start:**

- [T-cell receptor](/wiki/education/concepts/immunology/t-cells/t-cell-receptor): reads a peptide on [human leukocyte antigen (HLA)](/wiki/education/concepts/immunology/antigen-presentation/hla), as in [lesson 1](/wiki/education/guides/how-the-immune-system-fights-cancer/01-how-a-t-cell-sees-a-cancer-cell).
- [The T-cell repertoire](/wiki/education/concepts/immunology/t-cells/t-cell-repertoire): the collection of receptors in a population at one time.
- [TCR sequencing](/wiki/education/concepts/measurement/immune-monitoring/tcr-sequencing): the assay, with its assay card.
- [Clonality metrics](/wiki/education/concepts/measurement/immune-monitoring/tcr-clonality-metrics): one-number summaries of how uneven a repertoire is.

## Where this step sits

This is lesson 9, the last lesson of [the immune-system guide](/wiki/education/guides/how-the-immune-system-fights-cancer/index). [Lesson 8](/wiki/education/guides/how-the-immune-system-fights-cancer/08-measure-a-response) matched each immune claim to a measurement. This lesson reads one of those measurements from top to bottom.

**Sample → receptor rule → depth → frequencies → summaries → tracking → annotations → what still needs testing.**

## Read the report from top to bottom

Most reports, from research labs or commercial services, contain the same sections. Each answers a narrower question than its headline suggests.

| Report section | What it tells you | Question to ask |
|---|---|---|
| Sample and input | Blood or tissue; DNA or RNA as the starting material; how much went in | Is the comparison sample the same type and amount? RNA counts also reflect how much receptor each cell makes |
| Chain and clonotype rule | Whether only the beta chain was read or alpha and beta were paired; whether "same receptor" means the same CDR3 (the most variable receptor region) at the nucleotide or amino-acid level, with or without the same gene segments | Do two reports use the same rule? A shared beta chain can sit beside different alpha chains |
| Depth | Total templates or cells read and the number of distinct clonotypes | Could a rare clone have been missed by chance? |
| Top clones | Each clonotype's share of the sample | Is this a share of sampled receptors, or a count of cells? |
| Diversity and clonality | One number for how evenly receptors are spread | See [clonality metrics](/wiki/education/concepts/measurement/immune-monitoring/tcr-clonality-metrics): a more uneven repertoire is not proof of a tumor response |
| Tracking and overlap | Which clonotypes appear in two time points or two tissues | Was a change tested statistically, or only compared by eye? |
| Annotations | Matches to public databases of receptors with known targets | Was the match exact, and on which HLA type? |

Databases such as VDJdb collect receptor sequences whose targets were shown in experiments ([Shugay et al., 2018](https://pubmed.ncbi.nlm.nih.gov/28977646/)). A database match is a lead. Most receptors in a person have no match, and a match found with one HLA type may not apply to another.

The diversity is enormous: sequencing millions of beta chains from two adults found at least four times more beta-chain diversity than earlier estimates ([Robins et al., 2009](https://pubmed.ncbi.nlm.nih.gov/19706884/)). So any one sample is a small window, and absence of a clone from a sample is weak evidence that it is absent from the body.

## Expansion needs a comparison and a test

A rising share is not the same as more cells. If one clone's share rises from 0.1% to 2% of sampled receptors, either that clone grew, others shrank, or both. Telling them apart needs total T-cell counts and matched sampling.

Calling a clone "expanded" also needs statistics. In three pairs of identical twins given the yellow fever vaccine, a statistical model that accounted for sampling noise identified 600 to 1,700 responding clones per person, which three independent assays then confirmed ([Pogorelyy et al., 2018](https://pubmed.ncbi.nlm.nih.gov/30459272/)). A single before-and-after fold change for a rare clone can be noise.

## A worked example: one promising clone

Invented numbers for learning. A report on blood drawn before and after a vaccine shows:

| Clone | Before | After | In tumor sample |
|---|---|---|---|
| A | 0.1% | 2.0% | 0.5% |
| B | 3.0% | 3.1% | Not found |

Clone A's share rose twentyfold, and the same sequence appears in tumor. That makes A a good candidate. It does not yet establish that A recognizes the vaccine peptide, recognizes tumor cells or kills them. Clone B is large but stable and absent from tumor; a dominant, stable blood clone can be a response to a common virus such as cytomegalovirus.

The next tests follow from [lesson 8](/wiki/education/guides/how-the-immune-system-fights-cancer/08-measure-a-response): pair A's alpha and beta chains in single cells ([Han et al., 2014](https://pubmed.ncbi.nlm.nih.gov/24952902/)), test those cells against the intended peptide on the right HLA, then test natural tumor recognition. A confirmed receptor could later feed [engineered T-cell receptor therapy (TCR-T)](/wiki/education/concepts/therapeutics/cell-therapies/tcr-t), which needs its own safety testing.

## What can go wrong when reading a report

- **A big blood clone is read as a tumor response.** Many large clones respond to common viruses.
- **Blood–tumor overlap is read as recognition.** A shared clone can be a bystander in tumor.
- **Read counts are read as cell counts.** RNA-based counts also reflect how much receptor RNA each cell makes.
- **Two reports with different clonotype rules are compared directly.** The same receptor can be split or merged differently.
- **Culture is ignored.** Growing cells before sequencing can favor some clones.
- **Cross-reactivity is forgotten.** One receptor can recognize more than one peptide–HLA pair ([Hansen et al., 2007](https://pubmed.ncbi.nlm.nih.gov/17559580/)).

## Try it

A clone expands after dosing but fails the intended-peptide stimulation test. Can its sequence be called a tumor-specific therapeutic receptor?

**Answer:** No. Expansion identifies a candidate; failed or inconclusive specificity testing leaves its target unresolved.

**Can you join these results?** In a fictional report, bulk beta-chain sequencing finds sequence B more often in blood after treatment. A separately prepared, peptide-stimulated cell mixture releases a cytokine. No alpha–beta pairing or link between B and the responding cells is reported. Has one full receptor been assigned a target?

**Answer:** No. The beta-chain result identifies an enriched sequence under that assay's denominator; the response belongs to the separately tested mixture. Connecting them needs paired alpha–beta identity from the responding cells, then a controlled test of that receptor against its peptide–HLA. Even then, a tested target does not exclude cross-reactivity, prove tumor killing or show clinical benefit.

## Explain it back

"A TCR sequencing report tells me ___; to call a clone tumor-reactive I also need ___."

**One possible answer:** "which receptor sequences were sampled and their shares; a controlled test showing that the paired receptor recognizes a tumor peptide on the right HLA, and then tumor cells."

## Takeaway

**Read a receptor report as an inventory of sampled sequences; specificity, expansion in cell numbers and tumor killing each need their own evidence.**

**Next:** you have finished the guide. Return to [the guide overview](/wiki/education/guides/how-the-immune-system-fights-cancer/index), or see how engineered cells change the recognition rules in [compare immune-cell recognition systems](/wiki/education/guides/engineered-cell-therapy/09-car-tcr-til-comparison).

## Sources and scope

Source-checked November 8, 2026, against PubMed abstracts. A general report-reading lesson; the report and numbers are invented. Expert and learner review pending.

- [Robins et al., 2009: T-cell receptor beta-chain diversity](https://pubmed.ncbi.nlm.nih.gov/19706884/) — single-molecule sequencing of blood from two adults.
- [Han et al., 2014: linking receptor sequence to cell phenotype in single cells](https://pubmed.ncbi.nlm.nih.gov/24952902/).
- [Pogorelyy et al., 2018: statistical tracking of vaccine-responding clones](https://pubmed.ncbi.nlm.nih.gov/30459272/) — yellow fever vaccination in three twin pairs.
- [Shugay et al., 2018: VDJdb, receptors with known antigen specificity](https://pubmed.ncbi.nlm.nih.gov/28977646/).
- [Hansen et al., 2007: cross-reactivity of a single T-cell receptor](https://pubmed.ncbi.nlm.nih.gov/17559580/) — one autoimmune receptor studied in detail.
