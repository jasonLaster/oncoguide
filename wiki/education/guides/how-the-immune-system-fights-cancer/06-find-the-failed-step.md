---
title: "Find the step an immune response can lose"
type: "guide-lesson"
guide: "how-the-immune-system-fights-cancer"
step: 6
minutes: 10
objectives: ["Name the main immune-escape classes and the step each removes.", "Locate immune failure at target, display, access or cell function.", "Explain why a plausible bypass needs its own safety and clinical evidence."]
prerequisites: ["[[wiki/education/concepts/immunology/tumor-immunology/immune-escape]]", "[[wiki/education/concepts/immunology/tumor-immunology/cancer-immunity-cycle]]", "[[wiki/education/concepts/immunology/innate-and-unconventional-cells/nk-cell-and-missing-self]]", "[[wiki/education/concepts/therapeutics/immunotherapy/immune-checkpoint-inhibitor]]", "[[wiki/education/concepts/cancer-biology/what-cancer-is/immunoediting]]"]
sensitive: false
tags: ["education", "immunology"]
updated: 2026-11-08
source_checked: 2026-11-07
reviewed: "pending"
reviewed_by: ""
review_status: "Source-checked; expert and learner review pending"
---

# Find the step an immune response can lose

**An immune response can lose its target, its display route, its access or its ability to act. Name the failed step before proposing a way around it.**

A treatment mechanism can sound elegant and still meet a roadblock. That is frustrating, but it gives us a useful reading habit: trace the route and ask which link the evidence actually tests.

**Before you start:** [Immune escape](/wiki/education/concepts/immunology/tumor-immunology/immune-escape) names the category. [The cancer-immunity cycle](/wiki/education/concepts/immunology/tumor-immunology/cancer-immunity-cycle) supplies the map. [Natural killer (NK) cells and missing self](/wiki/education/concepts/immunology/innate-and-unconventional-cells/nk-cell-and-missing-self) explains a different recognition system. [Checkpoint inhibitors](/wiki/education/concepts/therapeutics/immunotherapy/immune-checkpoint-inhibitor) explain an intervention on immune regulation.

## Where this step sits

This is lesson 6 of [the immune-system guide](/wiki/education/guides/how-the-immune-system-fights-cancer/index). We use the earlier five steps to interpret failure rather than treating [drug resistance](/wiki/education/concepts/therapeutics/how-drugs-work/drug-resistance) as one mechanism.

**Target → display → recognition → access and function → possible killing.**

## Follow the route the therapy requires

A conventional [T-cell receptor (TCR)](/wiki/education/concepts/immunology/t-cells/t-cell-receptor) reads a peptide together with its [human leukocyte antigen (HLA)](/wiki/education/concepts/immunology/antigen-presentation/hla) holder. A tumor can lose the antigen, lose the relevant holder or change the machinery that generates display. These are different failures.

A [chimeric antigen receptor (CAR)](/wiki/education/concepts/therapeutics/cell-therapies/car-anatomy) aimed at an accessible surface target usually uses a different recognition route. That can avoid the particular peptide–HLA dependency. It does not avoid target loss, poor access, suppressed function or healthy tissue carrying the target.

The comparison is about requirements, not a ranking of therapies. Each finished product must show that its own route works in the intended setting.

## Place immune treatments at their actual step

An immune checkpoint inhibitor blocks one inhibitory interaction, such as [programmed cell death protein 1 (PD-1) with programmed death-ligand 1 (PD-L1)](/wiki/education/concepts/immunology/immune-regulation/immune-checkpoint), or cytotoxic T-lymphocyte-associated protein 4 (CTLA-4). [Lesson 7](/wiki/education/guides/how-the-immune-system-fights-cancer/07-what-checkpoint-inhibitors-change) covers what that changes, and the [checkpoint sites-of-action comparison](/wiki/education/concepts/immunology/immune-regulation/immune-checkpoint#checkpoint-sites-of-action) compares the checkpoints. Measuring one receptor does not establish that its pathway causes the functional limitation.

Neither intervention installs a new target receptor or rebuilds a lost HLA holder. That matters when reading a proposed combination:

| Intervention | Input it tries to change | Requirement still open |
|---|---|---|
| Checkpoint blockade | A particular inhibitory interaction | Suitable recognition and cells able to respond |
| [Treatment vaccine](/wiki/education/guides/personalized-cancer-vaccine/index) | Target-directed priming and response | Natural tumor display and useful function |
| [Cytokine therapy](/wiki/education/concepts/therapeutics/immunotherapy/cytokine-therapy) | Signals affecting cell growth or function | Target specificity and a safe response |
| [Engineered cells](/wiki/education/guides/engineered-cell-therapy/index) | The responders and their recognition route | Target availability, access and safe activity |

The table describes intended jobs, not guaranteed outcomes. Combinations also add safety questions, such as [immune-related adverse events](/wiki/education/concepts/therapeutics/toxicities-and-supportive-care/immune-related-adverse-event).

## A worked example: the target remains, the holder changes

Imagine a fictional tumor still makes protein A. An engineered TCR recognizes a fragment of A only when HLA allele X displays it. A later sample shows loss of X.

More copies of the same TCR do not restore the missing holder. Adding more target peptides that all depend on X may not solve the shared problem either. A retained HLA allele might support another recognition route, but that requires new evidence of display, recognition and safety.

Now change the scenario. Instead of a gene deletion, the sample shows reduced display under one condition. Expression can change without permanent deletion. Reversibility becomes a testable question. The report should distinguish a sequence change from a protein-expression observation.

[Interferons](/wiki/education/concepts/immunology/the-immune-system/interferons) are signals that can change presentation programs. Low baseline expression and inability to respond to a signal are different findings. A controlled stimulation test can investigate inducibility; it does not automatically repair a deleted display dependency or prove tumor killing. The [controlled IFNγ example](/wiki/education/concepts/immunology/tumor-immunology/immune-escape#worked-example-test-the-missing-response) separates baseline display from inducibility.

In the cited selected metastatic-melanoma series, Janus kinase (JAK) defects affected interferon responses, while a [beta-2-microglobulin (B2M)](/wiki/education/concepts/immunology/antigen-presentation/b2m) defect affected class-I display. Tested JAK-knockout melanoma cells still supported recognition by the chosen antigen-specific TCR. **Signal-response loss is not automatically recognition loss.** Keep that model and the small series attached to the claim; do not use it as a frequency estimate for breast cancer.

## Name the main escape classes

Tumors that survive immune pressure use a small number of documented routes. This survival is the last phase of [immunoediting](/wiki/education/concepts/cancer-biology/what-cancer-is/immunoediting). Each class removes a different step from the earlier lessons:

| Escape class | Step it removes | What to test | What the label alone cannot tell you |
|---|---|---|---|
| Antigen loss | The target protein or mutation (lesson 1) | Target expression across regions and sites | Whether every site lost it |
| HLA loss | One inherited set of HLA molecules, and the peptides only they displayed (lesson 1) | Allele-specific copy number and HLA protein | Which retained allele could display another target |
| Presentation-machinery loss | All class I display, through defects in B2M, the transporter associated with antigen processing (TAP) or the proteasome (lesson 1) | Surface class I protein; both copies of the gene | Whether the loss is permanent or reversible |
| Lost interferon response | Interferon-induced display and growth arrest, through JAK1 or JAK2 loss | A controlled interferon stimulation test | Whether baseline recognition is lost |
| Exclusion | Entry into cancer-cell nests ([lesson 3](/wiki/education/guides/how-the-immune-system-fights-cancer/03-reach-the-tumor)) | Where T cells sit: stroma or nests | Which barrier is causal |
| Suppressive cells and signals | Function after entry: [regulatory T cells](/wiki/education/concepts/immunology/t-cells/regulatory-t-cells), suppressive [macrophage states](/wiki/education/concepts/immunology/innate-and-unconventional-cells/macrophage-states), [adenosine and indoleamine 2,3-dioxygenase (IDO)](/wiki/education/concepts/immunology/immune-regulation/adenosine-and-ido) | Cell identity plus a functional suppression test | Whether removing one signal restores killing |
| Adaptive PD-L1 and exhaustion | Function after recognition ([lesson 5](/wiki/education/guides/how-the-immune-system-fights-cancer/05-t-cell-states)) | Where PD-L1 sits; the exhaustion program; a controlled response test | Whether one checkpoint drug reverses it |

How common are these? HLA loss of heterozygosity is among the best counted. Across 83,644 tumors of many types profiled by one commercial genomic test, 17% had lost one inherited copy of at least one HLA class I gene ([Montesion et al., 2021](https://pubmed.ncbi.nlm.nih.gov/33127846/)). That is a pan-cancer figure; this lesson does not give a breast-specific rate. The [immune-escape concept](/wiki/education/concepts/immunology/tumor-immunology/immune-escape#how-it-works) gives an example study for each class.

Several classes can coexist, and different sites can have different bottlenecks. [Clonal evolution](/wiki/education/concepts/cancer-biology/what-cancer-is/clonal-evolution) explains changes in related cancer-cell populations. Finding a change in resistant tissue starts a causal question; earlier samples and functional comparisons help investigate it. A change in the surrounding [tumor microenvironment](/wiki/education/concepts/cancer-biology/tumor-microenvironment/tumor-microenvironment), such as macrophage state, is a different finding from a change in the malignant clone.

## What can go wrong at this step

The tempting shortcut is a rescue story: “This system failed, so the other system will work.” Losing one HLA allele does not guarantee NK killing. Missing-self recognition depends on the balance of activating and inhibitory [NK-cell receptors](/wiki/education/concepts/immunology/innate-and-unconventional-cells/nk-cell-receptors), the NK population and its environment. A bypass aimed at a protein that healthy tissue also carries adds its own safety question.

Another shortcut is a combination diagram. Two arrows aimed at different obstacles may represent a reasonable hypothesis. They do not establish useful sequencing, safe dosing or clinical benefit together. A combination can also share a failure point or increase toxicity.

Finally, a blood marker does not identify an escape mechanism by itself. It can signal a change in sampled tumor material without explaining target loss, access or cell state. Mechanism testing and disease assessment answer different questions.

## Try it

Three target peptides are added to a design. All require the same HLA allele, which the tested cancer cells have lost. Does the larger target count establish broader effective coverage?

**Answer:** No. The three candidates share a display dependency. Broader effective coverage would require validated targets using a functioning recognition route, not merely more entries on a list.

**Compare two failures:** In two fictional cancer-cell models, compare earlier and later samples with compatible assays and matched drug exposure. In model A, the source antigen, peptide–HLA display and recognition by the tested TCR remain intact, but the same cytotoxic drug causes less cell death. In model B, the required peptide–HLA display is lost, while the measured response to that drug is unchanged. Where did each route fail?

**Answer:** A supports reduced drug response under those conditions. Intact recognition does not explain the drug failure; drug handling or downstream death responses remain causal questions. B supports failure of the tested immune recognition route, without showing resistance to the drug. The observations locate different requirements. They do not identify a complete mechanism, establish every immune route's behavior or select a replacement treatment.

## Explain it back

“A proposed bypass must show ___, then ___.”

One possible answer: “that it avoids the measured failure; that the new route works safely and has appropriate clinical evidence.”

## Takeaway

**A different route creates a new set of testable requirements; it is not an automatic rescue.**

**Next:** [What checkpoint inhibitors change](/wiki/education/guides/how-the-immune-system-fights-cancer/07-what-checkpoint-inhibitors-change).

## Sources and scope

Source check: October 10, 2026. General immune-escape reasoning; the allele-loss scenario is fictional. Expert and learner review remain pending.

The October 10 focused update checked checkpoint contacts and the melanoma functional experiments; linked concepts carry their exact source and model boundaries. The escape-class table and the HLA loss figure were added and source-checked November 8, 2026.

- [Chen and Mellman, 2013: the cancer-immunity cycle](https://pubmed.ncbi.nlm.nih.gov/23890059/).
- [Montesion et al., 2021: HLA class I loss of heterozygosity across 83,644 tumors](https://pubmed.ncbi.nlm.nih.gov/33127846/) — pan-cancer prevalence from a commercial genomic database; not a breast-specific rate.
- [Zaretsky et al., 2016: acquired resistance in melanoma](https://pubmed.ncbi.nlm.nih.gov/27433843/) — a small mechanistic study in a specific cancer setting, not a universal frequency estimate.
- [Kärre et al., 1986: missing-self recognition in mouse lymphoma](https://pubmed.ncbi.nlm.nih.gov/3951539/).
- [NCI: T-cell transfer therapy](https://www.cancer.gov/about-cancer/treatment/types/immunotherapy/t-cell-transfer-therapy).
- [Qureshi et al., 2011: CTLA-4 regulates supporting ligands](https://pubmed.ncbi.nlm.nih.gov/21474713/) — a mechanistic experiment, not a clinical combination comparison.
- [Brahmer et al., 2021: Society for Immunotherapy of Cancer guideline on checkpoint-related adverse events](https://pmc.ncbi.nlm.nih.gov/articles/PMC8237720/).
