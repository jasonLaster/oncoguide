---
title: "Building an engineered T cell"
tags: [education, CAR-T, T-cells, DNA, RNA, receptors]
type: "guide-lesson"
guide: "engineered-cell-therapy"
step: 3
minutes: 10
objectives: ["Separate cell, gene, message and receptor.", "Explain CAR recognition and signaling."]
prerequisites: ["[[wiki/education/concepts/biology-basics/genetics/central-dogma]]", "[[wiki/education/concepts/therapeutics/cell-therapies/car-anatomy]]", "[[wiki/education/concepts/immunology/t-cells/t-cell-receptor]]"]
sensitive: false
source_checked: "2026-10-08"
reviewed: "pending"
reviewed_by: ""
review_status: "Source-checked; expert and learner review pending"
updated: "2026-10-08"
---

# Building an engineered T cell

**Before you start:** [DNA, RNA and protein](/wiki/education/concepts/biology-basics/genetics/central-dogma), [chimeric antigen receptor (CAR)](/wiki/education/concepts/therapeutics/cell-therapies/car-anatomy), [T-cell receptor (TCR)](/wiki/education/concepts/immunology/t-cells/t-cell-receptor).

**Start with a living cell, give it instructions for a new receptor, then ask what that receptor enables it to do.** These are three different things: the cell, the genetic instructions, and the protein made from those instructions.

This is the first lesson in the [[wiki/education/cellular-therapies/index|in vivo CAR-T learning path]]. No prior immunology is required. “Solid tumors” means cancers that form masses in tissues, including breast and lung cancers; “solid-state tumors” is not the usual biological term.

## From instructions to a receptor

<img src="https://4pdxqyvytfd88yy1.public.blob.vercel-storage.com/sites/diana/files/wiki/education/cellular-therapies/images/instructions-to-car-light.png" alt="genetic instructions become a CAR on a T cell diagram" data-theme-pair>

*Genetic instructions must become a functional surface receptor before the cell can use it.*

View full-size: [light illustration](https://4pdxqyvytfd88yy1.public.blob.vercel-storage.com/sites/diana/files/wiki/education/cellular-therapies/images/instructions-to-car-light.png) · [dark illustration](https://4pdxqyvytfd88yy1.public.blob.vercel-storage.com/sites/diana/files/wiki/education/cellular-therapies/images/instructions-to-car-dark.png).

| Building block | Plain-language meaning | In an engineered T cell |
|---|---|---|
| **Cell** | A living unit with a membrane and internal machinery | The T cell does the moving, sensing, multiplying, and killing |
| **DNA** | A molecule that stores genetic information | A delivered DNA sequence can encode a CAR |
| **Gene** | A sequence containing instructions for a functional product | The CAR gene specifies the receptor protein |
| **mRNA** | A working message that ribosomes can read | It carries instructions for making the CAR protein |
| **Protein** | A folded molecular tool | The CAR itself is a protein, not a gene or a cell |
| **Membrane** | The cell's outer boundary | The CAR spans it, connecting recognition outside to signaling inside |

For a protein-coding gene, **transcription** makes RNA from DNA; **translation** uses RNA to build protein. Delivering mRNA can start at the translation step. The cell then folds and transports the receptor to its surface. Finding the delivered genetic sequence is therefore not enough: we also need to measure whether functional receptor reaches the membrane. [3]

Read more about [[wiki/education/molecular-profiling/01-dna-the-blueprint|DNA]] and [[wiki/education/molecular-profiling/02-rna-the-activity-layer|RNA]].

## What a T cell normally does

A T cell is one kind of immune cell. CD8 T cells can kill infected or abnormal cells; CD4 T cells can coordinate immune responses, and some CD4 populations restrain them. These are useful starting categories, not a complete map of T-cell behavior.

A conventional alpha-beta **T-cell receptor (TCR)** usually recognizes a peptide displayed by a [human leukocyte antigen (HLA) molecule](/wiki/education/concepts/immunology/antigen-presentation/hla). A conventional **CAR** recognizes a chosen accessible surface antigen directly. Engineering a CAR changes the recognition machinery; it does not erase the cell's other receptors or make it a simple on/off machine.

The existing [[wiki/education/cellular-therapies/02-car-tcr-til-comparison|CAR/TCR/tumor-infiltrating lymphocyte (TIL) comparison]] explains that recognition split in depth. [1]

## The three parts of a CAR

| Part | Where it sits | Its job |
|---|---|---|
| **Binding region** | Outside the T cell | Binds a particular feature, or epitope, on the chosen antigen |
| **Hinge and membrane anchor** | Near and across the membrane | Position the binding region and connect the receptor across the boundary |
| **Signaling regions** | Inside the T cell | Convert binding into activation; common designs combine CD3-zeta with a costimulatory region such as CD28 or 4-1BB |

An **antigen** is something immune recognition can be directed against. An **epitope** is the particular part recognized. An **antibody** is a binding protein; many CARs borrow an antibody-derived binding region. The CAR is not an antibody drug floating in blood: it is attached to a living cell. [1,2]

Binding can help assemble an immune contact site and trigger release of killing molecules. But antigen density, binding geometry, cell state, and inhibitory signals all influence whether contact produces effective killing. [1,2]

## Recognition, activation, and support

The “three signals” model is a teaching aid for understanding T-cell responses:

1. **Recognition:** what is being recognized?
2. **Costimulation:** what additional signals support activation?
3. **Cytokine signals:** what influences growth, survival, and specialization?

Many CARs incorporate recognition and costimulatory functions in one receptor. Cytokine receptors supply another set of inputs. This is not a universal three-button checklist: signals interact, and a previously activated cell differs from a naive cell. A CAR and an added cytokine receptor remain distinct molecular components. [4]

## Try it: identify the missing step

**Scenario:** A laboratory detects CAR DNA in a sample, but the cells do not kill antigen-positive cancer cells. Has the CAR worked?

**Answer:** We cannot tell yet. Check which cells contain the DNA, whether they make CAR RNA and surface protein, whether the receptor binds its target, and whether the cells signal and kill. A successful delivery measurement does not establish a successful therapeutic response.

**Explain it back:** Complete this sentence: “The vector carries ___; the ribosome makes ___; the T cell does ___.”

**One possible answer:** Genetic instructions; receptor protein; the biological work, including movement and killing when appropriately activated.

## Explain it back

“Which claim was measured, and which next step remains untested?” Name one measurement from this lesson and the limit beside it.

## Takeaway and next step

**A receptor is a molecular tool installed in a living cell. Its presence and its useful function must be demonstrated separately.**

Next: [[wiki/education/cellular-therapies/06-in-vivo-delivery|How to engineer T cells inside the body]].

## Sources and scope

Foundational teaching checked September 15, 2026. Diagrams simplify molecular shapes and are not experimental results.

1. [NCI: CAR T cells, engineering immune cells to treat cancer](https://www.cancer.gov/about-cancer/treatment/research/car-t-cells).
2. [FDA: Considerations for the development of CAR T-cell products, January 2024](https://www.fda.gov/regulatory-information/search-fda-guidance-documents/considerations-development-chimeric-antigen-receptor-car-t-cell-products).

3. [NHGRI: RNA fact sheet](https://www.genome.gov/about-genomics/educational-resources/fact-sheets/ribonucleic-acid-fact-sheet).
4. [Curtsinger et al., 2003: Signal 3 determines tolerance versus full activation of naive CD8 T cells](https://pmc.ncbi.nlm.nih.gov/articles/PMC2193970/). Experimental basis for separating proliferation from effector function; not a universal rule for every engineered T-cell state.

<!-- Local illustration sources: [source](./images/instructions-to-car-light.png) [source](./images/instructions-to-car-dark.png) -->
