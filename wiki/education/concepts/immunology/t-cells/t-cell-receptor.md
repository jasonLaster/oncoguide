---
title: "TCR (T-cell receptor)"
type: "concept"
domain: "immunology/t-cells"
summary: "A conventional alpha-beta T-cell receptor recognizes a peptide together with the human leukocyte antigen molecule displaying it."
glossary_anchor: "tcr"
aliases: ["TCR","T-cell receptor","CDR3"]
prerequisites: ["[[wiki/education/concepts/immunology/antigen-presentation/hla]]"]
used_by: ["[[wiki/education/guides/accessing-experimental-therapy/05-sequence-the-work]]","[[wiki/education/guides/aiming-a-drug-at-a-surface-target/01-mechanism]]","[[wiki/education/guides/aiming-a-drug-at-a-surface-target/03-comparisons]]","[[wiki/education/guides/aiming-a-drug-at-a-surface-target/index]]","[[wiki/education/guides/engineered-cell-therapy/02-choosing-a-target]]","[[wiki/education/guides/engineered-cell-therapy/03-engineered-t-cell-building-blocks]]","[[wiki/education/guides/engineered-cell-therapy/08-reading-cell-therapy-evidence]]","[[wiki/education/guides/engineered-cell-therapy/09-car-tcr-til-comparison]]","[[wiki/education/guides/engineered-cell-therapy/index]]","[[wiki/education/guides/how-the-immune-system-fights-cancer/01-how-a-t-cell-sees-a-cancer-cell]]","[[wiki/education/guides/how-the-immune-system-fights-cancer/02-start-a-response]]","[[wiki/education/guides/how-the-immune-system-fights-cancer/06-find-the-failed-step]]","[[wiki/education/guides/how-the-immune-system-fights-cancer/08-measure-a-response]]","[[wiki/education/guides/how-the-immune-system-fights-cancer/09-read-a-tcr-sequencing-report]]","[[wiki/education/guides/how-the-immune-system-fights-cancer/index]]","[[wiki/education/guides/judging-a-test-or-vendor-claim/04-ask-product-specific-questions]]","[[wiki/education/guides/personalized-cancer-vaccine/01-why-vaccination-can-help]]","[[wiki/education/guides/personalized-cancer-vaccine/03-hla-and-presentation]]","[[wiki/education/guides/personalized-cancer-vaccine/04-reading-a-design-board]]","[[wiki/education/guides/personalized-cancer-vaccine/05-measuring-presentation-and-response]]","[[wiki/education/guides/personalized-cancer-vaccine/08-dosing-and-measuring-response]]","[[wiki/education/guides/personalized-cancer-vaccine/index]]","[[wiki/education/guides/start-here/02-follow-immune-recognition]]","[[wiki/education/guides/start-here/index]]","[[wiki/education/guides/what-multi-omics-tells-us/07-map-cells-and-immune-context]]"]
level: "foundation"
sensitive: false
tags: ["education", "immunology"]
updated: 2026-10-10
source_checked: 2026-10-10
reviewed: "pending"
reviewed_by: ""
review_status: "Source-checked; expert and learner review pending"
---

# TCR (T-cell receptor)

## In one sentence

A conventional alpha-beta T-cell receptor recognizes a peptide together with the human leukocyte antigen molecule displaying it.

## The intuition

The receptor inspects both a fragment and its holder. [Human leukocyte antigen (HLA)](/wiki/education/concepts/immunology/antigen-presentation/hla) holds the peptide in a groove; a conventional T-cell receptor (TCR) contacts that combined surface. The peptide does not sit in a separate TCR peptide pocket.

The reader analogy has a limit: one receptor can recognize more than one peptide–HLA combination, and recognition alone does not specify what the cell will do.

## How it works

<img src="./images/tcr-paired-chains-and-cd3-contact-v1-light.svg" alt="A cutaway shows paired TCR alpha and beta recognition chains crossing the T-cell membrane beside separate CD3 signaling partners. Rose CDR3 and other contact loops face a peptide held by HLA on the target cell; no TCR peptide pocket is shown. Contact is not a safety or killing test." data-theme-pair="./images/tcr-paired-chains-and-cd3-contact-v1-dark.svg" />

*The paired TCR contacts peptide and HLA together, while CD3 carries signals. Both chains and other contact regions matter; this schematic is not a cross-reactivity or safety test.*

Most conventional [T cells](/wiki/education/concepts/immunology/t-cells/t-cell) carry an **alpha** and a **beta** chain. Each contributes a variable region near the binding surface and a constant region closer to the membrane. Together, the two chains form the recognition surface; testing or sequencing one chain does not reproduce the complete receptor.

The variable regions contain **complementarity-determining regions (CDRs)**, loops involved in contact with the displayed target. The third region, **CDR3**, is highly variable because it spans gene-segment junctions formed during [V(D)J recombination](/wiki/education/concepts/biology-basics/genetics/vdj-recombination). CDR3 is important for peptide contacts, but its sequence alone is not a complete specificity code: other receptor regions, the partner chain and the HLA context also matter.

The alpha-beta recognition chains assemble with **cluster of differentiation 3 (CD3)** signaling proteins. These transmit signals into the cell. [CD4 or CD8 co-receptors](/wiki/education/concepts/immunology/t-cells/cd4-vs-cd8) can support the encounter with class II or class I HLA, respectively. The receptor, signaling complex and supporting signal context have different jobs.

**Cross-reactivity** means one receptor can recognize multiple targets. Controlled experiments have demonstrated recognition across peptide and HLA contexts for particular receptors. This does not mean an arbitrary receptor recognizes every HLA allele or that a stronger binder is automatically safer. Each target and healthy-tissue interaction needs appropriate testing.

```mermaid
flowchart TD
  A["Peptide plus HLA"] --> B["Paired alpha-beta<br/>recognition surface"]
  B --> C["CD3 signaling<br/>with cellular context"]
  C --> D["Measure the response"]
```

*Contact with a display is upstream of a measured cellular response.*

## Why it matters in cancer

Vaccination can activate or expand cells with receptors generated before the vaccine encounter; it does not normally rewrite mature TCRs. Engineered TCR therapy introduces selected receptor sequences. In either case, candidate recognition must be connected to naturally presenting tumor cells, useful function and healthy-tissue safety.

## How it is measured

[TCR sequencing](/wiki/education/concepts/measurement/immune-monitoring/tcr-sequencing) reports sampled sequences and abundance under a stated clonotype definition. Paired alpha-beta sequencing gives a more complete receptor identity than beta-only data. [Peptide–HLA multimers](/wiki/education/concepts/measurement/immune-monitoring/peptide-hla-multimer-staining) test binding under reagent conditions; stimulation assays test a cellular response. [Cytotoxicity assays](/wiki/education/concepts/measurement/immune-monitoring/functional-cytotoxicity-assays) test defined target interactions. Include irrelevant targets, appropriate HLA controls and target-only viability controls for the claim being tested.

## Common confusions

- A CDR3 sequence or a receptor abundance change does not name the target by itself.
- One receptor can recognize more than one peptide–HLA target.
- Peptide-loaded test cells can bypass steps needed for natural tumor presentation.
- Binding, activation, killing and clinical benefit are separate outcomes.

## Try it

A fictional expanded beta-chain sequence is matched to two cells with different alpha chains. One reconstructed pair responds to a peptide-loaded test cell. Have you shown that both original cells kill an untreated tumor?

**Answer:** No. The experiment supports the tested pair's response in that peptide-loading context. The second pair needs its own testing, and naturally presenting tumor recognition and target-cell death remain separate questions.

## Explain it back

Explain why CDR3 is informative without being a complete answer to “what does this receptor recognize?”

## Takeaway

Interpret a TCR as a paired recognition system in a specific peptide–HLA and cellular context.

## Related concepts

- [T-cell repertoire](/wiki/education/concepts/immunology/t-cells/t-cell-repertoire)
- [T-cell priming](/wiki/education/concepts/immunology/t-cells/t-cell-priming-three-signals)
- [TCR-T](/wiki/education/concepts/therapeutics/cell-therapies/tcr-t)

## Sources and scope

Source-checked October 10, 2026. The reconstructed-receptor example is fictional. These are structural and recognition mechanisms, not a treatment recommendation. Expert and learner review remain pending.

- [Janeway et al.: antigen recognition by T cells](https://www.ncbi.nlm.nih.gov/books/NBK27098/) — textbook variable domains, contact loops and co-receptors.
- [Dong et al., 2019: human TCR–CD3 complex](https://pubmed.ncbi.nlm.nih.gov/31461748/) — primary structural study.
- [Hansen et al., 2007: TCR cross-reactivity](https://pubmed.ncbi.nlm.nih.gov/17559580/) — particular receptor and peptide/HLA experiments, not a universal cross-reactivity rate.
- [Ruggiero et al., 2015: receptor repertoire sequencing](https://www.nature.com/articles/ncomms9081) — primary sequencing method and receptor-junction analysis.

<!-- BEGIN GENERATED USED IN -->
## Used in

- [Sequence the work and respect what cannot be undone](/wiki/education/guides/accessing-experimental-therapy/05-sequence-the-work)
- [Separate the address from the killing mechanism](/wiki/education/guides/aiming-a-drug-at-a-surface-target/01-mechanism)
- [Compare formats with evidence and normal-tissue risk](/wiki/education/guides/aiming-a-drug-at-a-surface-target/03-comparisons)
- [Aiming a drug at a surface target](/wiki/education/guides/aiming-a-drug-at-a-surface-target/index)
- [Choose a target with a usable safety window](/wiki/education/guides/engineered-cell-therapy/02-choosing-a-target)
- [Building an engineered T cell](/wiki/education/guides/engineered-cell-therapy/03-engineered-t-cell-building-blocks)
- [Reading cell-therapy evidence](/wiki/education/guides/engineered-cell-therapy/08-reading-cell-therapy-evidence)
- [Compare immune-cell recognition systems](/wiki/education/guides/engineered-cell-therapy/09-car-tcr-til-comparison)
- [How engineered immune cells can attack a solid tumor](/wiki/education/guides/engineered-cell-therapy/index)
- [How a T cell sees a cancer cell](/wiki/education/guides/how-the-immune-system-fights-cancer/01-how-a-t-cell-sees-a-cancer-cell)
- [How dendritic cells help start a T-cell response](/wiki/education/guides/how-the-immune-system-fights-cancer/02-start-a-response)
- [Find the step an immune response can lose](/wiki/education/guides/how-the-immune-system-fights-cancer/06-find-the-failed-step)
- [Measure each part of a T-cell response](/wiki/education/guides/how-the-immune-system-fights-cancer/08-measure-a-response)
- [Read a T-cell receptor sequencing report](/wiki/education/guides/how-the-immune-system-fights-cancer/09-read-a-tcr-sequencing-report)
- [Why the immune system doesn't just kill a tumor, and what checkpoint inhibitors change](/wiki/education/guides/how-the-immune-system-fights-cancer/index)
- [Ask the questions a therapy format demands](/wiki/education/guides/judging-a-test-or-vendor-claim/04-ask-product-specific-questions)
- [Why a personalized cancer vaccine can help](/wiki/education/guides/personalized-cancer-vaccine/01-why-vaccination-can-help)
- [HLA and antigen presentation in vaccine design](/wiki/education/guides/personalized-cancer-vaccine/03-hla-and-presentation)
- [Read a neoantigen design board](/wiki/education/guides/personalized-cancer-vaccine/04-reading-a-design-board)
- [Measure presentation, binding and response](/wiki/education/guides/personalized-cancer-vaccine/05-measuring-presentation-and-response)
- [Dose a vaccine and measure its response](/wiki/education/guides/personalized-cancer-vaccine/08-dosing-and-measuring-response)
- [How a personalized cancer vaccine is designed](/wiki/education/guides/personalized-cancer-vaccine/index)
- [Follow the route to immune recognition](/wiki/education/guides/start-here/02-follow-immune-recognition)
- [Start here: triple-negative breast cancer in 30 minutes](/wiki/education/guides/start-here/index)
- [Add geography and immune context](/wiki/education/guides/what-multi-omics-tells-us/07-map-cells-and-immune-context)
<!-- END GENERATED USED IN -->
