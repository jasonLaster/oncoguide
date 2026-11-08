---
title: "Agretopicity"
type: concept
domain: immunology/antigen-presentation
level: advanced
sensitive: false
tags: [education, immunology]
updated: 2026-11-08
source_checked: 2026-11-08
reviewed: "pending"
reviewed_by: ""
review_status: "Source-checked; expert and learner review pending"
glossary_anchor: agretopicity
aliases: [agretopicity, differential agretopicity index, DAI, differential agretopic index, differential binding affinity]
summary: "Agretopicity is how much better or worse a mutated peptide binds its human leukocyte antigen (HLA) molecule than the normal version of the same peptide does, used to rank candidate neoantigens."
prerequisites:
  - "[[wiki/education/concepts/immunology/antigen-presentation/hla]]"
  - "[[wiki/education/concepts/immunology/antigen-presentation/neoantigen]]"
  - "[[wiki/education/concepts/immunology/antigen-presentation/binding-presentation-and-recognition]]"
used_by: ["[[wiki/education/guides/personalized-cancer-vaccine/04-reading-a-design-board]]"]
---

# Agretopicity

## In one sentence

Agretopicity is how much better or worse a mutated peptide binds its human leukocyte antigen (HLA) molecule than the normal version of the same peptide does, used to rank candidate neoantigens.

## The intuition

Two different things can make a mutated peptide a good immune target. It can be **displayed** well, and it can be **unfamiliar** to the immune system. Agretopicity is an attempt to measure both at once with a single comparison.

Picture the [HLA](/wiki/education/concepts/immunology/antigen-presentation/hla) groove as a slot and the peptide as a card that has to sit in it. A tumor mutation changes one letter of the card. Often that barely matters: the card fitted before and fits now. Sometimes it creates a new anchor — a letter at a position the groove grips — so a card that previously fell out now sits firmly. That case is interesting twice over: the mutated peptide gets displayed, and the normal version was never displayed well enough for [self-tolerance](/wiki/education/concepts/immunology/antigen-presentation/self-similarity-and-tolerance) to have trained T cells to ignore it.

The analogy breaks in one important way. The "fit" is a prediction from software, not a measurement of the slot, and two tools can disagree about the same card.

## How it works

[Neoantigen](/wiki/education/concepts/immunology/antigen-presentation/neoantigen) prediction software estimates, for each candidate peptide, how tightly it would bind each of a person's HLA molecules. Agretopicity compares two such estimates:

1. The **mutant** peptide, carrying the tumor's altered amino acid.
2. Its **wild-type counterpart**, the same peptide window from the normal genome.

The commonest formulation is the **differential agretopic index (DAI)**, reported as the numerical difference between the two predicted binding scores. A peptide whose mutant form is predicted to bind much better than the wild-type form has high agretopicity. Some groups use a ratio instead of a difference, and sign conventions differ between papers, so a DAI value cannot be compared across pipelines without reading each one's definition.

Two distinct biological ideas sit behind the measure:

- **A new anchor residue.** When the mutation falls at a groove-contacting position, it can convert a non-presented peptide into a presented one. Duan and colleagues found that neoepitopes mutated to create new anchor residues, together with greater predicted rigidity of the peptide–MHC complex, identified protective neoepitopes with relatively high accuracy in mouse tumor models [1].
- **Escape from tolerance.** A peptide the thymus never displayed cannot have had its reactive T cells deleted, so high agretopicity is a proxy for an intact T-cell repertoire against that target.

A high-DAI peptide need not be a strong binder in absolute terms: in mouse tumors, Duan and colleagues reported protective neoepitopes whose measured affinity for the mouse class I molecule H-2K<sup>d</sup> was orders of magnitude weaker than the conventional 500-nanomolar threshold [1]. That is part of the argument for ranking on the mutant-versus-wild-type comparison rather than on absolute predicted affinity.

## Why it matters in cancer

- It changes which candidates reach a vaccine or engineered-receptor design. A ranking that uses only absolute predicted binding will favor peptides that the wild-type protein also presents, which are exactly the ones most likely to be tolerated or to be shared with healthy tissue.
- It is one column on a [neoantigen design board](/wiki/education/guides/personalized-cancer-vaccine/04-reading-a-design-board), alongside expression, clonality and measured presentation. It is not a substitute for any of them.
- It is cheap. Agretopicity is computed from sequence and prediction alone, so it costs no tissue — unlike [immunopeptidomics](/wiki/education/concepts/measurement/proteins-and-spatial/immunopeptidomics), which measures what is actually displayed.

## What the evidence shows

Established binding biology, animal experiments and human data say different things here, so they are kept apart.

| Rung | What has been shown | What it does not establish |
|---|---|---|
| Mechanism | A mutation at an anchor position can create presentation where there was none; this is standard HLA binding biology | That any particular predicted change occurs for a given peptide |
| Mouse models | New anchor residues plus predicted complex rigidity identified protective neoepitopes "with relatively high accuracy" in Duan and colleagues' mouse tumor models [1] | A validated clinical ranking rule |
| Retrospective human cohorts | Mean DAI correlated with overall survival in 3 of 5 cohorts, with evidence of superiority over non-synonymous mutational burden and neoantigen burden [2] | That raising DAI in a design causes better outcomes |
| Prospective clinical use | Not established | — |

The human evidence comes mainly from Ghorani and colleagues, who computed DAI across advanced lung-cancer and melanoma cohorts: 66 lung adenocarcinomas and 72 melanomas from The Cancer Genome Atlas, plus three immunotherapy-treated cohorts (melanoma, 131 patients in total; non-small-cell lung cancer, 31) [2]. Two findings are worth carrying:

- The effect appeared for the mean DAI of **clonal** peptides, not subclonal ones [2] — consistent with the general principle that a target present in only part of the tumor is a weaker target.
- Mean DAI, but not mutational or neoantigen burden, correlated with markers of immune infiltration (melanoma, P = 0.027; lung adenocarcinoma, P = 0.024) [2].

The association was not uniform. In the melanoma cohort from The Cancer Genome Atlas it only bordered significance (P = 0.068), while it reached significance in an immunotherapy-treated melanoma cohort (P = 0.003) [2]. The authors describe their findings as supporting DAI as a determinant of peptide immunogenicity and call for further datasets and clinical studies. These are retrospective correlations with survival, in cancers other than breast cancer, not a demonstration that selecting on DAI improves a vaccine.

The largest systematic effort to find which peptide features predict immunogenicity is the Tumor Neoantigen Selection Alliance consortium study: 608 predicted epitopes assessed for T-cell binding in patient-matched samples, validated on a further 310, yielding a model that filtered out 98% of non-immunogenic peptides at a precision above 0.70 [3]. The consortium reported that its model integrates peptide features linked to presentation and recognition, but which features entered it — and whether a mutant-versus-wild-type comparison was among them — is not stated in the abstract, so this page does not claim the consortium either supported or rejected agretopicity.

## Common confusions

- **Agretopicity is not immunogenicity.** It is a predicted property of a peptide–HLA pair. Immunogenicity is a measured T-cell response. Prediction, presentation and recognition are [three separate questions](/wiki/education/concepts/immunology/antigen-presentation/binding-presentation-and-recognition).
- **Agretopicity is not absolute binding strength.** A peptide can bind weakly and still have high agretopicity, because the comparison is with its own wild-type version.
- **High DAI is not the same as low self-similarity.** Self-similarity asks how much the peptide resembles normal human sequence overall; agretopicity asks specifically about predicted HLA binding of the mutant versus the wild type.
- **A ratio and a difference are different numbers.** Papers use both, with differing sign conventions. Read the pipeline's definition before comparing values.
- **It says nothing about class II.** The published work concerns HLA class I. Papers often write MHC (major histocompatibility complex) where this wiki writes HLA; they are the same system, and HLA is the human name for it.

## How it is measured

There is no assay for agretopicity. It is computed: a binding-prediction tool scores the mutant and wild-type peptide for each of the patient's alleles from [HLA typing](/wiki/education/concepts/immunology/antigen-presentation/hla-typing-and-nomenclature), and the two scores are combined into a difference or ratio. The number therefore inherits every limitation of the predictor and of the typing. Whether the peptide is actually displayed is a separate measurement — immunopeptidomics — and whether T cells respond to it is another one again.

## In Diana's case

Agretopicity is one of the ranking columns a personalized-vaccine design board may show. [The vaccine evidence page](/wiki/treatment/therapeutics/cancer-vaccines) and [the molecular profile](/wiki/care/molecular-profile) own what any specific design or report contains.

## Related concepts

- [Neoantigen](/wiki/education/concepts/immunology/antigen-presentation/neoantigen) — what the altered sequence has to become to matter
- [Binding, presentation and recognition](/wiki/education/concepts/immunology/antigen-presentation/binding-presentation-and-recognition) — the three gates agretopicity speaks to only the first of
- [Self-similarity and tolerance](/wiki/education/concepts/immunology/antigen-presentation/self-similarity-and-tolerance) — the related but distinct "is it too much like me?" question
- [HLA typing and nomenclature](/wiki/education/concepts/immunology/antigen-presentation/hla-typing-and-nomenclature) — the allele list every prediction depends on
- [Immunopeptidome](/wiki/education/concepts/immunology/antigen-presentation/immunopeptidome) — what is actually displayed, measured rather than predicted

## Sources

Source check: November 8, 2026. Abstracts were read through PubMed's E-utilities; full texts were not opened, and each citation's publication type was checked so that no retracted paper is cited. Expert and learner review pending.

1. Duan F, Duitama J, Al Seesi S, et al. Genomic and bioinformatic profiling of mutational neoepitopes reveals new rules to predict anticancer immunogenicity. *J Exp Med.* 2014;211(11):2231–2248. [PMID 25245761](https://pubmed.ncbi.nlm.nih.gov/25245761/), doi 10.1084/jem.20141308 — the paper that names the differential agretopic index as the difference in predicted binding scores between mutated and unmutated sequences. The abstract reports protective neoepitopes identified by new anchor residues and complex rigidity, and affinities far weaker than the 500-nanomolar threshold; it does not state the subtraction order or give a cohort size, so neither is asserted here.
2. Ghorani E, Rosenthal R, McGranahan N, et al. Differential binding affinity of mutated peptides for MHC class I is a predictor of survival in advanced lung cancer and melanoma. *Ann Oncol.* 2018;29(1):271–279. [PMID 29361136](https://pubmed.ncbi.nlm.nih.gov/29361136/), doi 10.1093/annonc/mdx687 — the retrospective cohort evidence, cohort sizes, the clonal-versus-subclonal result and the immune-infiltration correlations quoted above.
3. Wells DK, van Buuren MM, Dang KK, et al; Tumor Neoantigen Selection Alliance. Key parameters of tumor epitope immunogenicity revealed through a consortium approach improve neoantigen prediction. *Cell.* 2020;183(3):818–834.e13. [PMID 33038342](https://pubmed.ncbi.nlm.nih.gov/33038342/), doi 10.1016/j.cell.2020.09.015 — 608 epitopes assessed for T-cell binding, 310 in validation, and the model's reported filtering and precision. The abstract does not name which features entered the model.

<!-- BEGIN GENERATED USED IN -->
## Used in

- [Read a neoantigen design board](/wiki/education/guides/personalized-cancer-vaccine/04-reading-a-design-board)
<!-- END GENERATED USED IN -->
