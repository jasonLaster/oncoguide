---
title: "How a personalized vaccine is manufactured"
type: "guide-lesson"
guide: "personalized-cancer-vaccine"
step: 7
minutes: 14
objectives: ["Separate RNA synthesis, purification, formulation and batch release.", "Compare RNA-LPX and RNA-LNP study products without transferring their protocols.", "Distinguish potency, traceability and comparability evidence at a manufacturing handoff."]
prerequisites: ["[[wiki/education/concepts/engineering-and-manufacturing/nucleic-acid-design/mrna-construct-anatomy]]", "[[wiki/education/concepts/engineering-and-manufacturing/nucleic-acid-design/in-vitro-transcription]]", "[[wiki/education/concepts/engineering-and-manufacturing/delivery-vehicles/rna-lipoplex]]", "[[wiki/education/concepts/engineering-and-manufacturing/cmc-and-quality/gmp-and-batch-release]]"]
sensitive: false
tags: ["education", "lesson"]
updated: "2026-10-10"
source_checked: "2026-10-10"
reviewed: "pending"
reviewed_by: ""
review_status: "Source-checked; expert and learner review pending"
---

# How a personalized vaccine is manufactured

**Personalization chooses what to encode; manufacturing turns the design into a defined product that can be tested and released.** This is step seven of the [vaccine guide](/wiki/education/guides/personalized-cancer-vaccine/index).

**Before you start:** [Messenger RNA (mRNA) construct anatomy](/wiki/education/concepts/engineering-and-manufacturing/nucleic-acid-design/mrna-construct-anatomy) describes the message. [In vitro transcription](/wiki/education/concepts/engineering-and-manufacturing/nucleic-acid-design/in-vitro-transcription) explains RNA synthesis. [RNA-lipoplex](/wiki/education/concepts/engineering-and-manufacturing/delivery-vehicles/rna-lipoplex) introduces one formulation. [Good manufacturing practice (GMP)](/wiki/education/concepts/engineering-and-manufacturing/cmc-and-quality/gmp-and-batch-release) explains process quality controls; [batch release](/wiki/education/concepts/engineering-and-manufacturing/cmc-and-quality/batch-release) describes lot disposition.

## Where this step sits

The target windows and message have been specified. The next task is to make the exact product, with a controlled route from approved design to administered lot. Quality, access authorization and evidence of benefit answer different questions.

## The intuition: a recipe is the beginning

A kitchen needs more than ingredient names: preparation, handling and criteria for a usable batch matter too. A vaccine adds biological activity and a defined delivery formulation. The analogy stops at clinical benefit. Consistent production does not prove that the encoded targets are useful or that the treatment helps patients.

## The format changes the factory

| Format | What is manufactured | A question that remains |
|---|---|---|
| Synthetic peptide | Defined amino-acid chains plus their formulation | How will antigen-presenting cells process or load them and prime a response? |
| mRNA with [lipid nanoparticles (LNPs)](/wiki/education/concepts/engineering-and-manufacturing/delivery-vehicles/lipid-nanoparticle) | RNA and a specified particle formulation | Which cells translate the message after the intended route? |
| [RNA-lipoplex (RNA-LPX)](/wiki/education/concepts/engineering-and-manufacturing/delivery-vehicles/rna-lipoplex) | RNA complexed with specified lipids | How do this composition and route affect expression and sensing? |
| DNA or a viral vector | A DNA-containing product or engineered vector | Which cells express the cassette, for how long, and with what vector-specific risks? |

[Solid-phase peptide synthesis (SPPS)](/wiki/education/concepts/engineering-and-manufacturing/cmc-and-quality/peptide-synthesis-spps) assembles selected amino-acid chains on a support, then releases and purifies them. RNA manufacture instead produces instructions. Neither format dispenses with identity, purity, stability, handling and functional testing.

## Follow RNA from template to formulated lot

```mermaid
flowchart TD
  A[Approved sequence and specification] --> B[DNA template]
  B --> C[In vitro transcription]
  C --> D[Purification and RNA testing]
  D --> E[Defined delivery formulation]
  E --> F[Aseptic fill and product release]
  F --> G[Controlled transport and protocol administration]
```

*Each arrow is a handoff with specifications, rather than a promise that a sequence file becomes a usable vial.*

[In vitro transcription](/wiki/education/concepts/engineering-and-manufacturing/nucleic-acid-design/in-vitro-transcription) uses enzymes to make RNA outside living cells. The DNA is the manufacturing pattern, not the intended payload of a conventional mRNA vaccine. The approved design specifies the cap, untranslated regions, coding sequence, poly(A) strategy and chemical building blocks.

[Modified nucleosides](/wiki/education/concepts/engineering-and-manufacturing/nucleic-acid-design/modified-nucleosides) can change sensing and translation, but are not a universal requirement for cancer RNA vaccines. Chemistry, sequence and purification are separate decisions.

Purification addresses residual DNA, proteins, incomplete RNA and [double-stranded RNA impurities](/wiki/education/concepts/engineering-and-manufacturing/nucleic-acid-design/dsrna-impurities-and-purification). Ask what each method removes and what each assay detects. Changing RNA chemistry and removing unwanted double-stranded RNA solve different problems. A purity result cannot establish integrity or sterility by itself.

Formulation then defines how the RNA is packaged and delivered. Particle composition, RNA amount and integrity, particle properties and relevant biological activity belong to that product's specification. Aseptic filling, storage and transport preserve the material until administration. Shelf life and allowable storage excursions come from product-specific stability evidence.

## Worked comparison: three published RNA-vaccine protocols

All three examples below encode personalized antigens. They differ in formulation, route, cancer setting and treatment sequence. Some papers call lipoplexes nanoparticles; inspect the actual formulation rather than relying on the label alone. Read each row as a study record, not as a dosing recommendation.

| Study product and population | Formulation and route | Published protocol context | What the comparison can establish |
|---|---|---|---|
| **TNBC-MERIT**, early-stage triple-negative breast cancer after standard treatment | Non-nucleoside-modified uridine RNA; **RNA-LPX, intravenous** | Phase I, single arm; the personalized course used eight administrations, with six weekly followed by two every other week | Feasibility and immune-response findings in this setting; it does not isolate recurrence-prevention benefit |
| **Autogene cevumeran**, Rojas et al., resected pancreatic ductal adenocarcinoma | Uridine RNA; **RNA-LPX, intravenous** | Phase I, single arm; surgery followed by atezolizumab, vaccine priming, chemotherapy and a later vaccine booster | Immune-response and clinical associations within a combined treatment sequence; it cannot isolate vaccine benefit |
| **mRNA-4157/V940**, KEYNOTE-942, completely resected high-risk melanoma | **RNA-LNP, intramuscular**; the category name does not disclose an interchangeable chemical recipe | Randomized phase IIb; vaccine up to nine administrations every three weeks plus pembrolizumab versus pembrolizumab alone | Tests adding this product to this treatment backbone in this population; it does not compare LPX with LNP |

The TNBC-MERIT paper describes two RNA strands, each encoding up to ten selected target windows. This architecture is a specific [multi-epitope design](/wiki/education/concepts/engineering-and-manufacturing/nucleic-acid-design/multi-epitope-constructs), not a requirement for every RNA vaccine. Its methods explicitly use ordinary uridine. The pancreatic study also uses an RNA-lipoplex approach, but its cancer and combined treatment sequence differ.

KEYNOTE-942 supplies the randomized melanoma comparison and intramuscular schedule. A primary V940 protocol abstract explicitly describes LNP encapsulation. Neither “mRNA” nor “LNP” supplies the complete lipid composition, cap, RNA chemistry, impurity limits or stability specification. Do not fill missing details from a different vaccine's methods.

A TNBC-MERIT run-in subgroup also received a bridging shared-antigen vaccine. This is another reason to read the actual participant protocol when interpreting a schedule. Cross-trial percentages cannot tell us which formulation is intrinsically more effective, and these examples do not establish equivalence of routes or manufacturing processes.

## Four reviews answer different questions

A [contract development and manufacturing organization (CDMO)](/wiki/education/concepts/engineering-and-manufacturing/cmc-and-quality/cdmo-role) can perform agreed development, manufacturing or testing activities. Name who owns the design, approves changes and reviews quality. Outsourcing an activity does not erase applicable responsibilities.

| Review | Question |
|---|---|
| Antigen and construct | Does the exact design encode plausible, appropriately specific targets? |
| Handoff and change control | Which version is approved, and what happens after a proposed edit? |
| Manufacturing and release | Does this lot meet its identity, purity, potency, sterility and formulation criteria? |
| Clinical and regulatory | Who owns the protocol, authorization, administration and adverse-event monitoring? |

[Chain of identity and custody](/wiki/education/concepts/engineering-and-manufacturing/cell-manufacturing/chain-of-identity-and-custody) connects the intended recipient, construct version, lot and handoffs. A passing assay on a wrongly assigned vial cannot repair that connection.

[Potency assays](/wiki/education/concepts/engineering-and-manufacturing/cmc-and-quality/potency-assays) test relevant biological activity. An expression assay may address part of an RNA product's mechanism. It does not prove peptide presentation, tumor recognition or clinical benefit.

A fictional manufacturer shortens a spacer to improve production. The team records a controlled revision, reassesses affected biology and connects the released lot to the final specification. A “manufacturability edit” can still change antigen processing. [Manufacturing comparability](/wiki/education/concepts/engineering-and-manufacturing/cmc-and-quality/manufacturing-comparability) asks whether earlier evidence remains relevant after a change. Matching RNA amounts and passing routine release limits alone may miss important differences.

Use [platform versus personalized components](/wiki/education/concepts/engineering-and-manufacturing/cmc-and-quality/platform-vs-personalized-components) to locate the change: a patient-specific sequence and a shared formulation raise different review questions.

### Worked panel: same RNA mass, different display signal

A fictional team keeps the target-window labels and formulation, but shortens an encoded spacer. Version 2 is a revised **construct**, even if the reason was easier manufacture. Read the attributes separately before arguing that earlier evidence still applies.

**All numbers below are invented.** Before → after means version 1 → version 2. A, B and C are three independently prepared matched material pairs, not people or doses. Each signal entry is the mean of two technical wells from that preparation. The RNA amount describes the prepared material, not an administered dose.

The reporter is a stipulated expression surrogate, not a validated measure of target-B display. The display assay reports relative cell-surface target-B peptide–[human leukocyte antigen (HLA)](/wiki/education/concepts/immunology/antigen-presentation/hla) signal in one defined laboratory model.

| Matched pair | RNA amount (mg), before → after | Reporter activity (arbitrary units), before → after | Target-B display signal (arbitrary units), before → after |
|---|---|---|---|
| A | 1 → 1 | 100 → 104 | 9 → 3 |
| B | 1 → 1 | 98 → 101 | 8 → 3 |
| C | 1 → 1 | 102 → 100 | 10 → 4 |

**Fictional assay notes:** Both versions use the same formulation, cell model, test methods and observation time. Test inputs are matched by RNA mass. Within each signal assay, normalization to viable cells and a common reference is unchanged. No-RNA and no-target-B controls are described as background; reference material gives its expected signal. These are stipulated qualitative control notes, not supplied raw control results.

**What is missing:** Raw wells and controls, assay precision and range, detection/quantification limits, prespecified comparison bounds and product-release limits. The two arbitrary-unit scales are separate: reporter 100 and display 9 are not commensurate measurements. Compare before with after within each assay and its fixed normalization.

**1. Which attributes changed in each pair?**

**One answer:** Reported RNA mass is unchanged. Reporter changes are +4, +3 and −2 units: about +4.0%, +3.1% and −2.0%. Display changes are −6, −5 and −6 units: decreases of 66.7%, 62.5% and 60.0%. For a decrease, calculate `(before − after) / before × 100` separately for each pair. All three pairs show a reported display-signal drop worth investigating. Nearby reporter values do not establish equivalence or matched target-B display.

**2. What makes the pairs and controls interpretable?**

**One answer:** There are three independent preparation pairs. Two technical wells check measurement repeatability; they do not turn three preparations into six independent ones. Ask for the actual background, specificity and reference-control records, viable-cell normalization and method performance. Equal mass also need not mean equal RNA molecule counts after a length change. Length, integrity and appropriate input normalization matter before claiming matched molecular exposure. The short control notes do not establish that either assay is fully validated.

**3. What bridge is needed before carrying earlier evidence forward?**

**One answer:** This is a design edit, not a process-only change. If the team wants to reuse earlier design/function evidence, it needs an explicit justification for the altered construct alongside any manufacturing review. A process bridge alone does not cover the changed message. Investigate whether the display result reflects altered processing/display or assay/input effects, using relevant characterization and functional comparisons. State comparison criteria in advance and justify them for the intended use. The table supplies neither those criteria nor release limits. It cannot decide lot disposition, prove that the spacer caused the difference, or determine whether further nonclinical or clinical studies are needed. [Manufacturing comparability](/wiki/education/concepts/engineering-and-manufacturing/cmc-and-quality/manufacturing-comparability) and [potency assays](/wiki/education/concepts/engineering-and-manufacturing/cmc-and-quality/potency-assays) explain the separate evidence questions.

**4. Would a justified bridge prove natural tumor recognition or benefit?**

**One answer:** No. A laboratory comparison can support only its defined activities and conditions. Natural tumor peptide display, recognition by the relevant T cells and clinical benefit require their own evidence. This assay model supplies none of those outcomes. Even a convincing bridge to an earlier laboratory result cannot turn that earlier result into proof of patient benefit.

**5. Can this panel rank RNA-LPX versus RNA-LNP or supply handling instructions?**

**One answer:** No. It compares two fictional versions under one stipulated formulation. It has no head-to-head formulation comparison, clinical outcomes or stability/handling evidence. Keep the published product cards attached to their own formulations, routes and protocols. A reporter result cannot supply a different product's handling or stability requirements.

*Exercise source check: October 11, 2026. The [Q5E final guideline, 2005](https://www.fda.gov/media/71489/download) provides manufacturing-comparison principles within its stated cell-culture protein/polypeptide scope. Using those principles here is an analogy, not an RNA-product regulatory determination. The [U.S. Food and Drug Administration (FDA) vaccine chemistry, manufacturing and controls (CMC) guidance, 1999](https://www.fda.gov/media/73614/download) concerns license applications; the [FDA therapeutic cancer-vaccine guidance, 2011](https://www.fda.gov/media/82312/download) concerns investigational clinical studies. None supplies limits for this toy panel. Expert and learner review remain pending.*

## Read the quality handoff

Separate the [GMP quality system](/wiki/education/concepts/engineering-and-manufacturing/cmc-and-quality/gmp-and-batch-release) from the [chemistry, manufacturing and controls (CMC) evidence package](/wiki/education/concepts/engineering-and-manufacturing/cmc-and-quality/chemistry-manufacturing-and-controls), a [certificate of analysis](/wiki/education/concepts/engineering-and-manufacturing/cmc-and-quality/certificate-of-analysis) and the [batch-release decision](/wiki/education/concepts/engineering-and-manufacturing/cmc-and-quality/batch-release). They connect, but answer different questions.

**Try it:** A fictional lot report lists acceptable RNA identity and purity results. A transport excursion is still being assessed. Does the report alone resolve whether this lot can be used?

**One answer:** No. The results support their named tests. The quality function must also assess the relevant records and handling information before disposition. Release, hold and rejection are different outcomes; none independently establishes clinical benefit.

## What can go wrong at this step

A batch may have the correct sequence but inadequate integrity or functional activity. A new formulation may change which cells translate the message. A storage excursion needs an assessed disposition. Timelines also include testing, review, queue time and failed-lot handling; no universal sequence-to-vial duration applies.

## Try it

A fictional RNA-LNP product passes its identity test. Its team borrows an intravenous RNA-LPX study's handling instructions and claims that nondetectable dsRNA means the lot is sterile. Identify two unsupported transfers.

**Answer:** Formulation and route do not justify borrowing handling or stability requirements. A dsRNA assay answers one impurity question, not microbial sterility. Use the product's own validated specifications and complete release criteria.

**Second card:** A fictional team moves manufacture to a new facility. The final RNA amount is unchanged. Is that enough to bridge the process?

**Answer:** No. Assess the properties the change could affect, including impurities, formulation, activity and stability. The relevant evidence depends on the actual change and product.

## Explain it back

“Shared targets do not make products interchangeable because ___; a passing release panel does not prove ___.”

One answer: “RNA design, chemistry, formulation, route and protocol can differ; tumor recognition or clinical benefit.”

## Takeaway

**Compare the exact message, formulation, route and protocol, then keep product quality separate from evidence that patients benefit.**

**Next:** [Dose and measure response](/wiki/education/guides/personalized-cancer-vaccine/08-dosing-and-measuring-response).

## Sources and scope

Protocol source check: October 9, 2026; manufacturing-role, peptide-synthesis and quality-handoff additions checked October 10, 2026. Expert and learner review pending. Published protocols describe studies, not recommendations for dose, schedule or access. Practice cards are fictional; no head-to-head LPX-versus-LNP benefit comparison is supplied.

- [Sahin et al., 2026: TNBC-MERIT primary study and manufacturing methods](https://www.nature.com/articles/s41586-025-10004-2).
- [Rojas et al., 2023: autogene cevumeran pancreatic-cancer study and protocol](https://www.nature.com/articles/s41586-023-06063-y).
- [Weber et al., 2024: randomized KEYNOTE-942 melanoma trial](https://pubmed.ncbi.nlm.nih.gov/38246194/).
- [AACR primary protocol abstract CT251, 2025: V940 formulation and route](https://doi.org/10.1158/1538-7445.AM2025-CT251) — a formulation description, not outcome evidence for KEYNOTE-942.
- [Karikó et al., 2011: experimental purification and translation of mRNA](https://pubmed.ncbi.nlm.nih.gov/21890902/).
- [FDA: vaccine chemistry, manufacturing and controls guidance](https://www.fda.gov/media/73614/download).
- [FDA, 2016: contract manufacturing and quality agreements](https://www.fda.gov/media/86193/download) — commercial scope; investigational-work limits are explained in the linked CDMO concept.
- [Primary neoantigen peptide-synthesis study, 2020](https://www.nature.com/articles/s41598-019-56943-5) — synthesis and purification, not clinical efficacy.
