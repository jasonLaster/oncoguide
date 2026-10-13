---
title: "Read a neoantigen design board"
type: "guide-lesson"
sensitive: false
tags: ["education", "lesson"]
updated: 2026-10-13
source_checked: 2026-10-10
reviewed: "pending"
reviewed_by: ""
review_status: "Source-checked; expert and learner review pending"
minutes: 15
guide: "personalized-cancer-vaccine"
step: 4
objectives: ["Distinguish candidate count from independent coverage.", "Read the evidence and uncertainty behind each rank."]
prerequisites: ["[[wiki/education/concepts/immunology/antigen-presentation/neoantigen]]", "[[wiki/education/concepts/immunology/antigen-presentation/antigen-processing-machinery]]", "[[wiki/education/concepts/immunology/antigen-presentation/hla]]", "[[wiki/education/concepts/immunology/t-cells/t-cell-receptor]]"]
---

# Read a neoantigen design board

**A design board records evidence for each candidate and the reasons for selecting a set.** A numerical score cannot turn a missing measurement into a demonstrated mechanism. This is step four of the [vaccine guide](/wiki/education/guides/personalized-cancer-vaccine/index).

**Before you start:** [Neoantigens](/wiki/education/concepts/immunology/antigen-presentation/neoantigen) are candidate targets from altered sequence. [Antigen-processing machinery](/wiki/education/concepts/immunology/antigen-presentation/antigen-processing-machinery) generates displayable fragments. [Human leukocyte antigen (HLA)](/wiki/education/concepts/immunology/antigen-presentation/hla) and [T-cell receptors (TCRs)](/wiki/education/concepts/immunology/t-cells/t-cell-receptor) have different jobs.

## Where this step sits

Tumor/normal comparison and HLA assessment provide inputs. The board now compares targets before the final construct is written. It should preserve uncertainty rather than hide it inside a single rank.

## The intuition: read a ledger, not a leaderboard

One candidate may have stronger expression evidence; another may cover more tumor cells. A third may depend on an uncertain prediction for a poorly represented allele. Combining these into a score requires justified weights and validation for the task.

## Keep the biological objects separate

A tumor event supplies altered sequence. A longer **source window** encodes surrounding amino acids. Processing may produce a shorter [epitope](/wiki/education/concepts/immunology/antigen-presentation/antigen-and-epitope), the particular fragment recognized. The true target for a conventional TCR is a peptide–HLA pair.

One event can produce several windows or peptide–HLA pairs. Ten windows from one event are therefore different from ten independent tumor alterations. Similarly, several alleles may still share a [beta-2 microglobulin (B2M)](/wiki/education/concepts/immunology/antigen-presentation/b2m) dependency.

### Ask what sequence actually changed

A [mutation label](/wiki/education/concepts/biology-basics/genetics/mutation-types) is not an encoded peptide. A simple stop-gain changes a codon into a stop signal; it does not insert a new amino acid at that position. If the upstream sequence is unchanged, it does not by itself specify a new mutant peptide sequence. A frameshift can instead change the downstream amino-acid sequence before translation stops. Reconstruct the relevant [ribonucleic acid (RNA)](/wiki/education/concepts/biology-basics/molecules/rna-and-mrna) transcript and translated sequence rather than treating every truncating event as the same target.

Imagine two fictional rows: M ends an otherwise unchanged protein early, while N shifts the reading frame and creates a new tail. N supplies a candidate altered sequence; M's stop label alone does not. Neither row establishes that a cancer cell displays a recognized peptide.

Premature stops can also trigger [nonsense-mediated RNA decay](/wiki/education/concepts/biology-basics/genetics/nonsense-mediated-decay), which reduces some altered transcripts. Its efficiency depends on transcript context. Ask for mutant RNA support and downstream presentation and recognition evidence; a decay prediction is another model output, not a universal exclusion rule.

## The evidence ladder

| Rung | What it supports | What it leaves open |
|---|---|---|
| Tumor/normal sequence comparison | A credible tumor-specific event | Expression and display |
| Mutant RNA support | The altered transcript was sampled | Protein and processing |
| Processing or binding prediction | A model-based candidate | Actual surface presentation |
| Measured HLA-associated peptide | Presentation in the sampled preparation | Cell origin, recognition and safety |
| Controlled T-cell response | Activity under those test conditions | Natural tumor recognition and clinical benefit |
| Controlled tumor-cell recognition or killing | Function against tested targets | Distribution, durability and benefit in patients |
| Clinical outcome with a suitable comparison | Benefit estimate in that population | Transfer to another product or setting |

A recovered [immunopeptidome](/wiki/education/concepts/immunology/antigen-presentation/immunopeptidome) subset needs cell, HLA class, time and assay context. Non-detection requires coverage and sensitivity context. Artificial peptide loading can bypass natural processing. The board should name exactly what was tested, with method and version.

### Keep the score's meaning attached

For [binding predictions](/wiki/education/concepts/measurement/computational-analysis/binding-prediction), distinguish affinity estimates from eluted-ligand ranks. Suppose fictional candidate K has a 0.4% eluted-ligand rank and L has a predicted competitive-binding **half-maximal inhibitory concentration (IC50)** of 40 nanomolar. Their numbers cannot establish an order: rank and predicted assay concentration have different units and tasks. IC50 is not automatically an equilibrium binding constant. Request matched outputs, allele names and model versions before comparing them. A percentile rank is not a probability of benefit.

## Worked example: a ten-row candidate board

These rows are invented. Use them to practise asking questions, not to compute a clinical ranking. “Supported” and “uncertain” summarize evidence categories; they are not validated scoring weights.

| Row | Source event | Display route | Strongest support | Open question |
|---|---|---|---|---|
| A | Event 1 | HLA allele X | Credible alteration and mutant RNA | Display only predicted |
| B | Event 1 | HLA allele X | Alternate peptide window predicted | Does it add independent coverage beyond A? |
| C | Event 2 | HLA allele X | HLA-associated peptide identified | Cancer-cell origin and recognition |
| D | Event 3 | HLA allele Y | Peptide-stimulated response | Natural tumor recognition |
| E | Event 4 | HLA allele Y | Broad tumor-cell fraction supported | RNA support is weak |
| F | Event 5 | HLA allele Z | RNA and display prediction agree | Alteration may cover a small subclone |
| G | Event 6 | Class-II route | Peptide-responsive helper population | Which cells present it and in what context? |
| H | Event 7 | HLA allele Y | Credible tumor-specific sequence | Similar healthy sequence needs specificity testing |
| I | Event 8 | HLA allele Z | Strong computational rank | Predictor validation for this allele is limited |
| J | Event 9 | HLA allele X | Controlled tumor-cell recognition | Healthy-tissue specificity and durability |

Start by grouping shared dependencies. A and B come from one event and use one allele. C and J use that allele too. If allele X is lost, adding B does not rescue that branch. [HLA loss of heterozygosity](/wiki/education/concepts/measurement/sequencing-basics/hla-loh) explains this allele-specific finding. Y and Z diversify allele dependence, but class-I routes can still share B2M and processing requirements.

Next ask which uncertainty the next assay should reduce. D suggests a natural tumor-recognition experiment. C needs cell-of-origin and recognition evidence. H needs [self-similarity and tolerance](/wiki/education/concepts/immunology/antigen-presentation/self-similarity-and-tolerance) work: a tumor-specific sequence does not establish receptor selectivity over healthy targets. E and F raise expression and tumor-coverage questions before any automatic rank can be trusted.

Now imagine only one experiment can run this week. Choose a candidate, state the uncertainty, and explain what a positive **and** negative result would mean. Several choices can be reasonable because resource allocation depends on the actual goal. There is no universal A-to-J order hidden in this table.

One defensible answer is to test D against naturally presenting tumor cells, with relevant controls. A positive result would connect peptide responsiveness to those tested tumor cells. A negative result would prompt examination of processing, display, cell state and assay adequacy. Neither result alone estimates patient benefit.

A broad tumor-cell fraction is also an estimate, not a direct photograph of every cell. [Variant allele fraction and cancer-cell fraction](/wiki/education/concepts/measurement/sequencing-basics/variant-allele-fraction-and-cancer-cell-fraction) depend on tumor purity, copy number and the altered copy count. Do not label a target truncal merely because it has a high raw read fraction.

## What can go wrong at this step

A board can double-count correlated windows, conceal normal-tissue similarity or overinterpret a rare-allele predictor. A weighted ensemble needs appropriate held-out evaluation; agreement among models is not itself validation.

Selecting class-I and class-II candidates can support different response components. It does not guarantee useful recognition or overcome complete shared presentation failure. [Immunodominance](/wiki/education/concepts/immunology/t-cells/immunodominance) can concentrate the measured response on a few encoded targets. [Epitope spreading](/wiki/education/concepts/immunology/t-cells/epitope-spreading) may extend detected recognition to unencoded targets, but is an observed immune finding rather than a substitute for demonstrating clinical benefit. Record selection reasons, exclusions, model versions, manual overrides and the approved construct version.

## Try it

A board adds ten peptide windows, all from one alteration and all restricted to one lost HLA allele. Has coverage improved?

**Answer:** The candidate count increased, but the added targets still share the missing display route. Count and independent biological coverage differ.

**Re-read A–J after a changed report:** For this fictional comparison, assume X, Y and Z are classical HLA class-I alleles. Report 1 finds loss of X in the tested tumor population. Report 2 instead finds impaired B2M-supported class-I display across X, Y and Z. Which rows need reassessment for the reported failure in each case?

**Answer:** Report 1 directly challenges A, B, C and J, which depend on X. It does not establish failure of the Y or Z routes. Report 2 challenges every class-I row: A–F and H–J. Diversifying those alleles does not remove their shared display requirement. G uses a [class-II route](/wiki/education/concepts/immunology/antigen-presentation/hla), so its dependency must be assessed separately, including which cells present the peptide and its helper response. G is not an established rescue for the product. Neither report closes any row's original open question or supplies a clinical ranking.
## Explain it back

“A candidate’s evidence establishes ___ while leaving ___ unresolved.” One answer: “a named measurement or prediction; the later steps not tested.”

## Takeaway

**Choose and audit targets by their evidence and failure dependencies, not just their count or score.**

**Next:** [Measure displayed peptides](/wiki/education/designing-a-vaccine/03-immunopeptidomics).

## Sources and scope

Source check: October 10, 2026; expert and learner review pending. The ten-row candidate example is fictional. Company-specific ranking remains in its owner bundle.

- [Primary HLA presentation dataset](https://www.nature.com/articles/s41587-019-0322-9).
- [Wells et al., primary neoantigen-prediction benchmark](https://pubmed.ncbi.nlm.nih.gov/33038342/) — measured binding/recognition support has task-specific scope.
- [TNBC-MERIT clinical example](https://www.nature.com/articles/s41586-025-10004-2).
- [Official NetMHCpan-4.1 output documentation](https://services.healthtech.dtu.dk/services/NetMHCpan-4.1/), for prediction tasks and score interpretation. The linked concepts carry the primary sources for tolerance, immunodominance and spreading.
- [Lindeboom et al., transcript-context rules for nonsense-mediated decay](https://www.nature.com/articles/ng.3664), derived from matched cancer exomes and transcriptomes.
- [Litchfield et al., frameshift expression and immune recognition](https://www.nature.com/articles/s41467-020-17526-5), including melanoma cohorts and functional screens; this does not validate a specific candidate or predict vaccine benefit in TNBC.
