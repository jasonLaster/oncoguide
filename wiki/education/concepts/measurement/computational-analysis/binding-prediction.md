---
title: "Binding prediction"
type: concept
domain: measurement/computational-analysis
summary: "Binding prediction estimates a molecular interaction from a model; it does not directly measure peptide display, immune recognition or treatment benefit."
glossary_anchor: binding-prediction
aliases: [binding prediction, predicted affinity, peptide-HLA prediction]
level: intermediate
prerequisites: ["[[wiki/education/concepts/immunology/antigen-presentation/hla]]", "[[wiki/education/concepts/immunology/antigen-presentation/antigen-and-epitope]]"]
used_by: ["[[wiki/education/designing-a-vaccine/02-hla-and-antigen-presentation]]","[[wiki/education/designing-a-vaccine/04-how-to-read-a-neoantigen-design-board]]"]
reviewed: pending
reviewed_by: ""
sensitive: false
tags: [education, measurement]
updated: 2026-10-09
source_checked: 2026-10-09
review_status: "Source-checked; expert and learner review pending"
---

# Binding prediction

## In one sentence

Binding prediction estimates a molecular interaction from a model; it does not directly measure peptide display, immune recognition or treatment benefit.

## The intuition

A model can help shortlist keys that might fit a lock. It cannot show that the key was actually made, reached the lock, turned it or opened the desired door. Each of those claims needs additional evidence.

For a vaccine candidate, the “key” is a peptide and the “lock” is a particular [human leukocyte antigen (HLA)](/wiki/education/concepts/immunology/antigen-presentation/hla) molecule. Keep that pair attached to the score.

## How it works

Peptide–HLA models learn relationships from experimental data. Some outputs predict **binding affinity**; others predict likelihood of naturally eluted ligands, using presentation datasets. These related tasks have different labels and training data. An eluted-ligand score is not simply a binding measurement with another name.

Two common outputs need careful reading:

| Output | How to interpret it | What it does not establish |
| --- | --- | --- |
| Predicted affinity in nanomolar units | Lower values usually indicate stronger predicted binding for that output | An experimentally measured affinity or a functional T-cell response |
| Percentile rank | A lower rank places the candidate nearer the model's stronger-scoring reference peptides | A percent chance of tumor killing or the fraction of tumor cells covered |

Record the model and version, allele, peptide length, prediction task, units, reference ranking and threshold. A score from one column cannot be directly compared with a different output because both numbers happen to be small. Performance can vary with allele coverage and how closely the candidate resembles the training setting.

Even a well-supported binding prediction leaves downstream questions: Is the source expressed? Is this peptide processed and displayed? Does a relevant T-cell receptor ([TCR](/wiki/education/concepts/immunology/t-cells/t-cell-receptor)) recognize the peptide–HLA pair? Are healthy targets spared? Models can support prioritization while those claims remain unproved.

## Why it matters in cancer

Large candidate lists need computational triage. The useful habit is to label each score by what it predicts and connect it to experiments that test the remaining chain. Thresholds are selection rules for a specified workflow, rather than biological guarantees.

## Worked example

Candidate A has an eluted-ligand rank of 0.4%. Candidate B has a predicted binding affinity of 40 nanomolar. Their numbers alone do not tell us which is better: the columns estimate different things.

Request matched outputs for the relevant allele and method. If both later receive favorable scores, they remain candidates. A display assay and tumor-recognition experiment can change the assessment even when the original prediction was technically correct for its task.

## Common confusions

- A 0.4% rank does not mean a 99.6% chance of benefit.
- Predicted affinity is not measured affinity.
- Binding, natural presentation and T-cell recognition are different endpoints.
- A threshold cannot compensate for using the wrong allele or an unsupported prediction task.

## Related concepts

- [HLA typing and nomenclature](/wiki/education/concepts/immunology/antigen-presentation/hla-typing-and-nomenclature)
- [Immunopeptidomics](/wiki/education/concepts/measurement/proteins-and-spatial/immunopeptidomics)
- [Immunodominance](/wiki/education/concepts/immunology/t-cells/immunodominance)

## Sources and scope

Source-checked October 9, 2026. The example is fictional. NetMHCpan-4.1 is a documented example, rather than a claim about which software version or model is currently best. Expert and learner review remain pending.

- [Official NetMHCpan-4.1 documentation](https://services.healthtech.dtu.dk/services/NetMHCpan-4.1/), for affinity and eluted-ligand outputs, percentile ranks and configurable thresholds.
- [Reynisson and colleagues: NetMHCpan-4.1 and NetMHCIIpan-4.0](https://pubmed.ncbi.nlm.nih.gov/32406916/), the primary model-development paper.
- [Sarkizova and colleagues: HLA presentation modeling](https://www.nature.com/articles/s41587-019-0322-9), a primary allele-specific presentation dataset and modeling study.
- [Wells and colleagues: neoantigen immunogenicity benchmarks](https://pubmed.ncbi.nlm.nih.gov/33038342/), a primary experimental benchmark separating candidate predictions from immune recognition.

<!-- BEGIN GENERATED USED IN -->
## Used in

- [HLA and antigen presentation in vaccine design](/wiki/education/designing-a-vaccine/02-hla-and-antigen-presentation)
- [Read a neoantigen design board](/wiki/education/designing-a-vaccine/04-how-to-read-a-neoantigen-design-board)
<!-- END GENERATED USED IN -->
