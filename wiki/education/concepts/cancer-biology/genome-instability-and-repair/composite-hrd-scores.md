---
title: "Composite HRD scores"
type: concept
domain: cancer-biology/genome-instability-and-repair
level: intermediate
sensitive: false
tags: [education, DNA-repair]
updated: 2026-11-08
source_checked: 2026-11-08
reviewed: "pending"
reviewed_by: ""
review_status: "Source-checked; expert and learner review pending"
glossary_anchor: composite-hrd-scores
aliases: [composite HRD score, HRD score, HRD sum, genomic instability score, GIS, LOH-TAI-LST score, HRD cutoff, HRD threshold]
summary: "A composite homologous recombination deficiency (HRD) score adds several chromosome-scale genomic scars into one number whose meaning depends on the assay, the cutoff and the population in which that cutoff was tested."
prerequisites:
  - "[[wiki/education/concepts/cancer-biology/genome-instability-and-repair/genomic-scars]]"
  - "[[wiki/education/concepts/cancer-biology/genome-instability-and-repair/homologous-recombination-and-hrd]]"
used_by: ["[[wiki/education/guides/from-variant-to-drug/02-connect-repair-biology-to-parp-sensitivity]]","[[wiki/education/guides/from-variant-to-drug/index]]"]
---

# Composite HRD scores

## In one sentence

A composite homologous recombination deficiency (HRD) score adds several chromosome-scale genomic scars into one number whose meaning depends on the assay, the cutoff and the population in which that cutoff was tested.

## The intuition

A credit score squeezes years of history into one number. It is useful because it is simple, but a score from one bureau is not on another bureau's scale, and it describes the past rather than what you can pay today. A composite HRD score works the same way. It summarizes damage a tumor's chromosomes have accumulated, using one laboratory's rules. The analogy breaks in one place: a credit bureau sets one cutoff for everyone, while an HRD cutoff only means something for the drug and cancer in which it was tested.

## How it works

[Homologous recombination (HR)](/wiki/education/concepts/cancer-biology/genome-instability-and-repair/homologous-recombination-and-hrd) repairs broken DNA by copying a matching template. When it fails, cells fall back on rougher repair, and large chromosome segments are lost, gained or rearranged. [Genomic scars](/wiki/education/concepts/cancer-biology/genome-instability-and-repair/genomic-scars) explains the three counts in detail:

| Count | What it adds up |
|---|---|
| Loss of heterozygosity (LOH) | Regions longer than 15 megabases (million bases) where one parent's copy has been lost |
| Telomeric allelic imbalance (TAI) | Imbalanced regions that run to a chromosome end |
| Large-scale state transitions (LST) | Breaks between neighboring segments that are each at least 10 megabases long |

**The sum.** In the best-known composite, the score is the unweighted sum of the three counts. Telli and colleagues applied it to three trials of platinum-containing chemotherapy before surgery for triple-negative breast cancer (TNBC) [1].

**The cutoff.** The threshold of 42 was not chosen to predict a drug response. It is the 5th percentile of scores among BRCA1- or BRCA2-deficient breast and ovarian tumors in a separate training set, so it was designed to catch about 95% of tumors known to lack BRCA function [1]. "HR deficient" in that work meant a score of at least 42 **or** a BRCA1/2 mutation.

**Other scales.** Not every "HRD score" is this sum. The niraparib trial PRIMA used a commercial genomic instability score (GIS) with the same cutoff of 42 [2]. The rucaparib trial ARIEL2 instead measured the percentage of the genome with LOH, with a prespecified cutoff of 14% [3]. Sequence-based tools such as HRDetect combine [mutational signatures](/wiki/education/concepts/cancer-biology/genome-instability-and-repair/mutational-signatures) into a probability [4]. The same word can therefore label a count, a percentage or a probability.

## What the cutoff has and has not predicted

Each row is a different population and question. Read the result with its row.

| Study | Population and treatment | Result for "HR deficient" by the score |
|---|---|---|
| Telli 2016 [1] | Early TNBC, platinum-containing chemotherapy before surgery | More likely to have minimal residual disease ([residual cancer burden, RCB](/wiki/education/concepts/breast-cancer/surgery-and-pathology-results/residual-cancer-burden), 0 or I): odds ratios 4.96 and 10.18 in the two cohorts |
| GeparSixto [5] | 193 early TNBC; chemotherapy with or without carboplatin | Higher [pathologic complete response (pCR)](/wiki/education/concepts/breast-cancer/surgery-and-pathology-results/pcr) overall; carboplatin raised pCR from 33.9% to 63.5% if HR deficient and 20.0% to 29.6% if not, but the difference between groups was not significant (P = .33) |
| TNT [6] | 376 advanced TNBC; carboplatin versus docetaxel | A high score did **not** pick out who did better on carboplatin; a germline BRCA1/2 mutation did (response 68% versus 33%) |
| PAOLA-1 [7, 8] | 806 newly diagnosed advanced ovarian cancers; olaparib or placebo added to bevacizumab | HRD-positive by a commercial test: progression hazard ratio 0.33. HRD-negative, in an exploratory analysis: hazard ratio 1.00, meaning no detectable benefit |
| PRIMA [2] | 733 newly diagnosed advanced ovarian cancers; niraparib versus placebo | Larger benefit if HRD-positive (hazard ratio 0.43), but benefit in the overall population too |

Two lessons come out of the table. First, a score can be **prognostic of response** to platinum without being **predictive of extra benefit** from adding it ([prognostic versus predictive](/wiki/education/concepts/evidence-and-statistics/biomarkers/prognostic-vs-predictive)): GeparSixto's authors concluded that the score predicted response but not carboplatin benefit [5]. Second, a cutoff that selects patients well for one drug in ovarian cancer does not transfer automatically to breast cancer or another drug.

## Why it matters in cancer

- **PARP inhibitor labels.** In ovarian cancer, olaparib with bevacizumab is approved for HRD-positive tumors, defined by a BRCA mutation and/or genomic instability on a named companion test [8]. In early breast cancer, the adjuvant olaparib label requires a germline BRCA variant instead; a high scar score does not substitute [8].
- **Reading a report.** A number on a report means little without its assay, scale, cutoff and the study behind that cutoff.

## Common confusions

- **One score versus another.** A 45 on one laboratory's scale is not a 45 on another's. Compare a result only with the cutoff validated for that same assay.
- **Past versus present.** A scar records history. After a [BRCA reversion](/wiki/education/concepts/cancer-biology/genome-instability-and-repair/brca-reversion-mutations), or loss of 53BP1 (a protein that limits the DNA-end processing HR needs), repair can return while the old scars, and a high score, remain.
- **Sensitivity cutoff versus response cutoff.** The 42 threshold was set to catch about 95% of BRCA-deficient tumors, not to divide responders from non-responders. By design, some deficient tumors fall below it.

## How it is measured

Tumor DNA is compared with known variable sites across the genome to estimate copy number and allele balance. Software segments the genome, estimates purity and ploidy, then applies each counting rule. Low tumor content, degraded DNA and wrong ploidy estimates can all move the score. A direct test of present repair, such as RAD51 foci, answers a different question.

## Try it

A report gives a composite score of 48 from laboratory X. A paper says laboratory Y's cutoff of 42 predicted response to platinum in early TNBC. Can you call the tumor "HRD-positive for platinum"?

<details><summary>Show answer</summary>

Not from that comparison. The scale and cutoff belong to laboratory Y, so laboratory X's 48 needs X's own validated cutoff. Even on the right scale, the cutoff was tested for response to a particular regimen, and in GeparSixto and TNT it did not identify who gained extra benefit from carboplatin.

</details>

## Explain it back

"A composite HRD score adds ___, ___ and ___; its cutoff only means something for the ___ in which it was tested."

**One possible answer:** loss of heterozygosity, telomeric allelic imbalance and large-scale state transitions; assay, drug and cancer population.

## Takeaway

**A composite HRD score is one laboratory's summary of past chromosome damage, so read it with its assay, its cutoff and the trial behind that cutoff.**

## Related concepts

- [Genomic scars](/wiki/education/concepts/cancer-biology/genome-instability-and-repair/genomic-scars) defines each count.
- [BRCA reversion mutations](/wiki/education/concepts/cancer-biology/genome-instability-and-repair/brca-reversion-mutations) explain why scars can outlast the defect.
- [PARP inhibitors and trapping](/wiki/education/concepts/therapeutics/targeted-small-molecules/parp-inhibitors-and-trapping)
- [Platinum agents](/wiki/education/concepts/therapeutics/chemotherapy/platinum-agents)

## Sources and scope

Source-checked against PubMed abstracts, the Telli 2016 full text and the current U.S. labels. Expert and learner review pending. General education, not a test interpretation.

1. [Telli and colleagues, *Clinical Cancer Research* 2016](https://pubmed.ncbi.nlm.nih.gov/26957554/): the summed score, the 42 cutoff as the 5th percentile in BRCA-deficient tumors, and platinum response in three TNBC trials.
2. [González-Martín and colleagues, *NEJM* 2019 (PRIMA)](https://pubmed.ncbi.nlm.nih.gov/31562799/), with the [niraparib label](https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=b7f675e2-159c-490c-b6f4-3f16d9492b7d) defining HRD-positive as a tumor BRCA mutation or a GIS of 42 or more.
3. [Swisher and colleagues, *Lancet Oncology* 2017 (ARIEL2)](https://pubmed.ncbi.nlm.nih.gov/27908594/): genomic LOH with a 14% cutoff.
4. [Davies and colleagues, *Nature Medicine* 2017](https://pubmed.ncbi.nlm.nih.gov/28288110/): HRDetect.
5. [Loibl and colleagues, *Annals of Oncology* 2018 (GeparSixto)](https://pubmed.ncbi.nlm.nih.gov/30335131/).
6. [Tutt and colleagues, *Nature Medicine* 2018 (TNT)](https://pubmed.ncbi.nlm.nih.gov/29713086/).
7. [Ray-Coquard and colleagues, *NEJM* 2019 (PAOLA-1)](https://pubmed.ncbi.nlm.nih.gov/31851799/).
8. [Olaparib prescribing information, DailyMed, revised July 2025](https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=741ff3e3-dc1a-45a6-84e5-2481b27131aa): PAOLA-1 HRD-negative hazard ratio 1.00 and the indication definitions.

<!-- BEGIN GENERATED USED IN -->
## Used in

- [Connect repair biology to PARP sensitivity](/wiki/education/guides/from-variant-to-drug/02-connect-repair-biology-to-parp-sensitivity)
- [From a variant to a drug claim](/wiki/education/guides/from-variant-to-drug/index)
<!-- END GENERATED USED IN -->
