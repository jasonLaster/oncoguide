---
title: "BRCA reversion mutations"
type: concept
domain: cancer-biology/genome-instability-and-repair
level: intermediate
sensitive: false
tags: [education, DNA-repair, resistance]
updated: 2026-11-08
source_checked: 2026-11-08
reviewed: "pending"
reviewed_by: ""
review_status: "Source-checked; expert and learner review pending"
glossary_anchor: brca-reversion-mutations
aliases: [BRCA reversion, BRCA reversion mutation, reversion mutation, secondary BRCA mutation, restoration mutation]
summary: "A BRCA reversion mutation is a second change in a tumor's already-damaged BRCA1 or BRCA2 gene that restores a working protein, bringing back homologous recombination repair and making the tumor resistant to PARP inhibitors and platinum chemotherapy."
prerequisites:
  - "[[wiki/education/concepts/cancer-biology/genome-instability-and-repair/brca1-and-brca2]]"
  - "[[wiki/education/concepts/biology-basics/genetics/genetic-code]]"
  - "[[wiki/education/concepts/cancer-biology/what-cancer-is/clonal-evolution]]"
used_by: ["[[wiki/education/guides/from-variant-to-drug/02-connect-repair-biology-to-parp-sensitivity]]","[[wiki/education/guides/from-variant-to-drug/index]]"]
---

# BRCA reversion mutations

## In one sentence

A BRCA reversion mutation is a second change in a tumor's already-damaged BRCA1 or BRCA2 gene that restores a working protein, bringing back homologous recombination repair and making the tumor resistant to PARP inhibitors and platinum chemotherapy.

## The intuition

Picture a sentence garbled by one missing letter: every word after it reads as nonsense. A second edit, a deleted letter nearby or a cut that removes the garbled stretch, can make the rest of the sentence readable again, even if a few words are lost. The sentence still carries the scar of both edits, but it works. The analogy has one limit: the cell does not "fix" the gene on purpose. Treatment kills the cells that cannot repair DNA, and the rare cells that happen to carry a restoring change survive and grow.

## How it works

Many tumors with an inherited BRCA1 or BRCA2 variant lose the remaining working copy, so they cannot perform [homologous recombination (HR)](/wiki/education/concepts/cancer-biology/genome-instability-and-repair/homologous-recombination-and-hrd). That is why they respond to platinum drugs and [PARP inhibitors](/wiki/education/concepts/therapeutics/targeted-small-molecules/parp-inhibitors-and-trapping), which create damage that needs HR to fix.

A reversion restores the protein in one of several ways:

| Route | What happens to the gene | Example |
|---|---|---|
| Back to the original | The mutated letters change back to the normal sequence | Uncommon [3] |
| Second frameshift | A new insertion or deletion nearby restores the [reading frame](/wiki/education/concepts/biology-basics/genetics/genetic-code), leaving a short altered stretch | Common |
| Deletion around the mutation | A deletion removes the mutation and its neighbors in a multiple of three letters, keeping the frame | Common; most reported reversions are deletions under 100 bases [3] |
| Splice or exon change | A new splice-site change makes the cell skip the damaged exon, producing a shorter but working protein | Shown for BRCA1 in ovarian cancer and models [7] |

Because treatment kills HR-deficient cells, any cell carrying a reversion gains a large survival advantage, and that branch outgrows the rest. This is [clonal evolution](/wiki/education/concepts/cancer-biology/what-cancer-is/clonal-evolution) under drug selection. Different metastases can evolve different reversions, so one patient can carry several at once.

The first clinical descriptions came in 2008. In BRCA2-mutant cell lines, secondary mutations that restored the reading frame caused resistance to both cisplatin and a PARP inhibitor, and the same kind of change appeared in recurrent platinum-resistant ovarian cancers [1]. Reversion deletions are often flanked by short repeated sequences (microhomology), a fingerprint of error-prone end joining, especially microhomology-mediated end joining ([NHEJ and MMEJ](/wiki/education/concepts/cancer-biology/genome-instability-and-repair/nhej-and-mmej)) [2].

## How often reversions are found

Frequencies depend on the cancer, the prior treatment and the test, so read each number with its group.

| Study | Group | Reversions found |
|---|---|---|
| Lin 2019 [4] | Ovarian cancer starting rucaparib, blood test before treatment | 18% (2 of 11) if platinum-refractory, 13% (5 of 38) if platinum-resistant, 2% (1 of 48) if platinum-sensitive |
| Tobalina 2021 [2] | 327 published patients whose BRCA-mutant cancer progressed on platinum or a PARP inhibitor (234 ovarian, 27 breast) | 26% (86 patients) |
| Weigelt 2017 [5] | 19 ovarian and 5 breast cancers after platinum or PARP inhibitors, blood test | 21% of ovarian, 2 of 5 breast; often several reversions per patient |
| Waks 2020 [6] | 8 metastatic BRCA-mutant breast cancers biopsied before and after resistance | 4 of 8 |

Reversions also predict poor response. In Lin 2019, people without a detectable reversion before rucaparib had median progression-free survival of 9.0 months, against 1.8 months with one (hazard ratio 0.12) [4].

## Why it matters in cancer

- **Resistance to the drugs BRCA tumors respond to best.** A reversion explains why a tumor that responded to platinum or olaparib stops responding, and why it may then resist the other drug too [1].
- **It is not the only route back.** In Waks 2020, two of the eight patients had no reversion but acquired changes expected to restore repair, loss of 53BP1 or gain of MRE11A, both of which increase DNA-end processing [6].
- **Scars outlast it.** The tumor keeps its old [genomic scars](/wiki/education/concepts/cancer-biology/genome-instability-and-repair/genomic-scars), so a high [composite homologous recombination deficiency (HRD) score](/wiki/education/concepts/cancer-biology/genome-instability-and-repair/composite-hrd-scores) can coexist with restored repair. In Waks 2020, RAD51 foci, a direct readout of present repair, returned in every patient with a reversion [6].
- **Research directions.** Because many reversions carry an end-joining fingerprint, Tobalina's authors proposed that drugs blocking that repair route might delay reversions [2]; polymerase theta (Polθ), an enzyme of that route, is one candidate target. That is a hypothesis, not established treatment.

## Common confusions

- **Germline versus tumor.** A reversion arises in the tumor. A blood germline test still shows the inherited variant.
- **Reversion versus "the variant was wrong."** The original variant was real; the tumor added a second change.
- **One biopsy versus the whole tumor.** A biopsy of one site can miss a reversion present elsewhere. Blood tests can show several at once.
- **Restored protein versus normal protein.** A reverted protein may be shorter or slightly altered and still work well enough to cause resistance.

## How it is measured

Tumor tissue sequencing at progression can find a reversion in the sampled site. [Circulating tumor DNA (ctDNA)](/wiki/education/concepts/measurement/liquid-biopsy/cfdna-vs-ctdna), tumor DNA shed into blood, can capture reversions from several metastases in one draw [4, 5]. The test must read the whole gene region around the original variant and detect deletions and splice changes; a panel that checks only known hotspots can miss them. A functional test such as RAD51 foci asks whether repair is actually working.

## Try it

A woman with an inherited two-letter BRCA1 deletion, a frameshift, responds to a PARP inhibitor for a year, then progresses. A blood test finds a new one-letter deletion a few letters from the original variant. What is the likeliest explanation, and what should a new scar score show?

<details><summary>Show answer</summary>

Together the two deletions remove three letters, so the reading frame is restored after a short altered stretch. That makes it a likely reversion that brings back BRCA1 function and explains resistance. (A separate six-letter deletion would not do this: two plus six is eight letters, still not a multiple of three.) The scar score would probably still be high, because scars record the tumor's earlier history. A functional test such as RAD51 foci, not the scar score, would show restored repair.

</details>

## Explain it back

"A reversion restores ___ by a second change, so the tumor regains ___ and stops responding to ___."

**One possible answer:** a working BRCA protein, often by restoring the reading frame; homologous recombination repair; PARP inhibitors and platinum.

## Takeaway

**A BRCA reversion is the tumor's second edit that undoes the first, restoring repair and resistance while leaving the old scars in place.**

## Related concepts

- [BRCA1 and BRCA2](/wiki/education/concepts/cancer-biology/genome-instability-and-repair/brca1-and-brca2)
- [The genetic code](/wiki/education/concepts/biology-basics/genetics/genetic-code) explains reading frames.
- [Genomic scars](/wiki/education/concepts/cancer-biology/genome-instability-and-repair/genomic-scars)
- [Clonal evolution](/wiki/education/concepts/cancer-biology/what-cancer-is/clonal-evolution)

## Sources and scope

Source-checked against PubMed abstracts. Expert and learner review pending. General education, not a test interpretation.

1. [Sakai and colleagues, *Nature* 2008](https://pubmed.ncbi.nlm.nih.gov/18264087/), with [Edwards and colleagues, *Nature* 2008](https://pubmed.ncbi.nlm.nih.gov/18264088/): secondary BRCA2 mutations restore the reading frame and cause platinum and PARP-inhibitor resistance.
2. [Tobalina and colleagues, *Annals of Oncology* 2021](https://pubmed.ncbi.nlm.nih.gov/33091561/): meta-analysis of 327 patients; microhomology and end-joining.
3. [Pettitt and colleagues, *Cancer Discovery* 2020](https://pubmed.ncbi.nlm.nih.gov/32699032/): more than 300 reversions; most are deletions under 100 bases.
4. [Lin and colleagues, *Cancer Discovery* 2019](https://pubmed.ncbi.nlm.nih.gov/30425037/): reversions in cell-free DNA and rucaparib outcomes in ovarian cancer.
5. [Weigelt and colleagues, *Clinical Cancer Research* 2017](https://pubmed.ncbi.nlm.nih.gov/28765325/): polyclonal reversions in cell-free DNA of breast and ovarian cancers.
6. [Waks and colleagues, *Annals of Oncology* 2020](https://pubmed.ncbi.nlm.nih.gov/32245699/): reversion and non-reversion resistance in metastatic breast cancer.
7. [Nesic and colleagues, *Molecular Cancer* 2024](https://pubmed.ncbi.nlm.nih.gov/39103848/): BRCA1 secondary splice-site mutations cause exon skipping and PARP-inhibitor resistance.

<!-- BEGIN GENERATED USED IN -->
## Used in

- [Connect repair biology to PARP sensitivity](/wiki/education/guides/from-variant-to-drug/02-connect-repair-biology-to-parp-sensitivity)
- [From a variant to a drug claim](/wiki/education/guides/from-variant-to-drug/index)
<!-- END GENERATED USED IN -->
