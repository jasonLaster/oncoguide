---
title: "Measure presentation, binding and response"
type: "guide-lesson"
guide: "personalized-cancer-vaccine"
step: 5
minutes: 12
objectives: ["Identify which question each immune assay answers.", "Separate binding, cytokine response, receptor identity and target-cell death.", "Explain why a positive peptide test does not establish natural tumor recognition."]
prerequisites: ["[[wiki/education/concepts/immunology/antigen-presentation/hla]]", "[[wiki/education/concepts/measurement/proteins-and-spatial/immunopeptidomics]]", "[[wiki/education/concepts/measurement/immune-monitoring/flow-cytometry]]", "[[wiki/education/concepts/measurement/immune-monitoring/elispot]]", "[[wiki/education/concepts/measurement/immune-monitoring/functional-cytotoxicity-assays]]"]
sensitive: false
tags: ["education", "lesson"]
updated: 2026-10-10
source_checked: 2026-10-10
reviewed: "pending"
reviewed_by: ""
review_status: "Source-checked; expert and learner review pending"
---

# Measure presentation, binding and response

**Three useful immune measurements can agree without proving the final clinical claim.** Read each result as an answer to a specific question. This is step five of the [vaccine guide](/wiki/education/guides/personalized-cancer-vaccine/index).

**Before you start:** [Human leukocyte antigen (HLA)](/wiki/education/concepts/immunology/antigen-presentation/hla) displays protein fragments. [Immunopeptidomics](/wiki/education/concepts/measurement/proteins-and-spatial/immunopeptidomics) identifies recovered fragments. [Flow cytometry](/wiki/education/concepts/measurement/immune-monitoring/flow-cytometry) measures features of prepared cells. [Enzyme-linked immunospot (ELISpot)](/wiki/education/concepts/measurement/immune-monitoring/elispot) records secretion-associated spots. [Functional cytotoxicity assays](/wiki/education/concepts/measurement/immune-monitoring/functional-cytotoxicity-assays) test target-cell death.

## Where this step sits

You have a candidate board with evidence and open questions. Before treating a score as a target, ask what an experiment could add. The aim is to reduce a named uncertainty, not simply collect more positive-looking graphs.

## The intuition: ask the experiment a smaller question

Suppose a candidate has a credible mutation and a promising binding prediction. You might reasonably feel excited. Now pause and ask: was the peptide actually recovered with HLA? Can a receptor bind it? Do cells respond? Each question deserves its own evidence.

The short methods pages explain how the assays work. Here we connect their outputs. A measurement can be useful even when it leaves the next step open; that is how an evidence chain becomes more informative.

## Three assays, three questions

<img src="./images/three-assays-three-questions-light.png" alt="Three independent panels showing peptide identification, peptide-HLA multimer binding and stimulated cell secretion, with tumor killing and patient benefit left as separate questions" data-theme-pair>

*Presentation, binding and secretion each answer one question; none alone establishes patient benefit. The ELISpot panel is schematic: in the assay, cells incubate on the capture membrane.*

| Measurement | The question it answers | What remains open |
|---|---|---|
| Immunopeptidomics | Which HLA-associated peptides were identified in this preparation? | Cell of origin, completeness, recognition and function |
| [Peptide–HLA multimer staining](/wiki/education/concepts/measurement/immune-monitoring/peptide-hla-multimer-staining) | Which sampled cells bound this specified reagent? | Activation, natural tumor recognition and safe killing |
| Peptide-stimulated ELISpot | Did sampled cells release the measured molecule after stimulation? | Which receptors responded and whether naturally presenting tumor cells are recognized |
| Controlled tumor-cell assay | Did the cells recognize or affect the tested tumor cells under defined conditions? | Tissue safety, access, persistence and patient benefit |

These are complementary experiments, not interchangeable substitutes. Not every study uses all of them. Read the peptide sequence, allele, cell preparation, controls and analysis method before comparing the answers.

## Keep the sample and denominator attached

Blood tests often use [peripheral blood mononuclear cells (PBMCs)](/wiki/education/concepts/measurement/immune-monitoring/peripheral-blood-mononuclear-cells), a prepared mixture of circulating immune cells. Processing and freezing can affect recovery and responses. Blood is also a different compartment from the tumor.

A multimer result measured by flow needs a stated parent population. “Percent of sampled T cells” differs from “percent of all recovered cells.” ELISpot needs its input-cell denominator, background and positivity rules. Changing those rules or expanding cells in culture can change the comparison even when the intended peptide stays the same.

## Add cell identity and function without skipping a step

[Intracellular cytokine staining (ICS)](/wiki/education/concepts/measurement/immune-monitoring/intracellular-cytokine-staining) can assign a defined-stimulus cytokine response to stained cell populations. It adds information that a secretion spot alone usually lacks. Multiple positive cytokine stains describe the measured response program; they do not establish target-cell death.

A [T-cell receptor (TCR)](/wiki/education/concepts/immunology/t-cells/t-cell-receptor) is the cell's molecular reader. [TCR sequencing](/wiki/education/concepts/measurement/immune-monitoring/tcr-sequencing) supplies receptor identities. [Clonality metrics](/wiki/education/concepts/measurement/immune-monitoring/tcr-clonality-metrics) summarize their sampled distribution. Standard ICS or ELISpot does not supply those sequences. Connecting a responding population to a particular receptor needs a compatible identification experiment, rather than placing two unrelated assay results side by side.

A cytotoxicity assay brings the question to specified target cells. Check target-only survival, effector-to-target ratio, incubation time and appropriate antigen or presentation controls. Reduced growth or metabolic signal alone is not necessarily killing.

## Natural presentation changes the question

Adding synthetic peptide to cells can provide abundant target without asking the tumor to make or process it. That helps test a response, but can bypass a weak biological step. A positive result after artificial loading needs a separate bridge to natural tumor recognition.

The [immunopeptidome](/wiki/education/concepts/immunology/antigen-presentation/immunopeptidome) is the biological repertoire in a defined cell/HLA/time context. An immunopeptidomics list is a recovered subset. Record the capture reagent, class-I or class-II scope, sequence database and identification-confidence rules. A computational allele assignment is different from directly isolating that allele.

For HLA-associated peptide identification, mixed tissue adds another issue: the peptide may come from cancer, immune or stromal cells. Whole-cell extraction can also recover intracellular HLA complexes. Detection therefore supports the sampled preparation, without proving cancer-cell surface display or tumor exclusivity. Recovery and identification are incomplete, so non-detection needs sensitivity context.

The [T-cell receptor](/wiki/education/concepts/immunology/t-cells/t-cell-receptor) is only part of a responding cell. Its state and signaling matter too. A binding reagent can label cells whose functional behavior differs, while a secretion assay may miss cells that use another response program. Naturally presenting cancer-cell tests strengthen the recognition bridge; they still do not establish comprehensive healthy-tissue safety or patient benefit.

## Worked example: an evidence notebook

Here is an invented experiment. No line is a personal treatment rule.

1. **Peptide A is identified in a mixed-tissue HLA preparation.** Record the identification confidence and ask which cells supplied it.
2. **An A–HLA multimer labels blood cells.** Record the allele, staining controls and denominator. These cells bind the test reagent.
3. **Post-dose cells make more spots when stimulated with A.** Check background, viability and whether the cells were expanded in culture first.
4. **A receptor sequence becomes more frequent in the PBMC preparation.** That establishes relative enrichment under the counting rules, not which cells made the spots or whether their absolute number grew.
5. **Recognition of naturally presenting tumor cells is not yet tested.** Keep this line visible. Several positive readouts do not fill it in.

The next experiment should address that gap. If a controlled tumor-cell test is positive, the evidence becomes stronger for that target under those conditions. Healthy-tissue specificity and clinical benefit still require their own evidence.

## What can go wrong at this step

A negative assay can reflect poor sample quality, incomplete recovery or the wrong reagent. A positive assay can reflect background, artificial loading or culture selection. Check the controls before interpreting either.

Matched methods also matter over time. A clone can become a larger share of the repertoire because other clones declined. Keep specimen handling, absolute-count information when available, method version and analysis rules tied to each result.

## Try it

A candidate was not detected by immunopeptidomics, but peptide-loaded cells trigger a strong ELISpot response. Does this prove that the tumor naturally displays it?

**Answer:** No. The response supports activity against the test stimulus. Non-detection may be biological or technical, and artificial loading bypasses natural presentation. A suitable natural-presentation experiment would address the unresolved question.

## Explain it back

“This assay measured ___ under ___; it has not yet established ___.” One answer: “secretion after peptide stimulation; those laboratory conditions; safe recognition of naturally presenting tumor cells.”

## Takeaway

**Name the measured step, then keep the untested steps visible.**

**Next:** [Write the vaccine message](/wiki/education/guides/personalized-cancer-vaccine/06-writing-the-message).

## Sources and scope

Source check: October 10, 2026. Assay teaching and a fictional example; expert and learner review pending.

- [HLA-peptide isolation and identification protocol](https://www.nature.com/articles/s41596-019-0133-y).
- [Primary antigen-specific T-cell labeling study](https://pubmed.ncbi.nlm.nih.gov/8810254/).
- [Peptide-specific ELISpot protocol](https://pmc.ncbi.nlm.nih.gov/articles/PMC8410284/).
- [Primary neoantigen prediction/recognition benchmark](https://pubmed.ncbi.nlm.nih.gov/33038342/).
- [Maecker et al., 2005: standardization of cytokine flow cytometry](https://pubmed.ncbi.nlm.nih.gov/15978127/). Primary assay-standardization study; response assignment depends on the protocol and gates.
- [Rabinovich et al., 2019: flow-based cytotoxicity assay](https://pubmed.ncbi.nlm.nih.gov/31525367/). Primary method with specified effector–target systems and controls.
