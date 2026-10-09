---
title: "How a personalized vaccine is manufactured"
type: "guide-lesson"
sensitive: false
tags: [education]
updated: "2026-10-08"
review_status: "Source-checked; expert and learner review pending"
guide: "personalized-cancer-vaccine"
step: 7
objectives: ["Separate construct specification, formulation and batch release."]
prerequisites: ["[[wiki/education/concepts/engineering-and-manufacturing/nucleic-acid-design/mrna-construct-anatomy]]", "[[wiki/education/concepts/engineering-and-manufacturing/delivery-vehicles/lipid-nanoparticle]]"]
reviewed: "pending"
reviewed_by: ""
minutes: 10
source_checked: "2026-10-08"
---

# How a personalized vaccine is manufactured

**Before you start:** [mRNA construct anatomy](/wiki/education/concepts/engineering-and-manufacturing/nucleic-acid-design/mrna-construct-anatomy), [lipid nanoparticle (LNP)](/wiki/education/concepts/engineering-and-manufacturing/delivery-vehicles/lipid-nanoparticle).

**Personalization chooses the antigen sequence; manufacturing must turn that sequence into a defined, tested product.** Delivery chemistry, route and quality controls differ between platforms.

**Before you start:** [[wiki/education/designing-a-vaccine/02-hla-and-antigen-presentation|Antigen presentation]] explains how cells display protein fragments. Here, the question is how a product supplies those fragments or instructions for making them.

## The format changes the factory

| Format | What is made | How the antigen reaches the immune system | A limit to keep in view |
|---|---|---|---|
| Synthetic peptide | Short amino-acid chains, usually purified separately | Antigen-presenting cells take up or load peptide; adjuvants support priming | Formulation and peptide length affect processing and response |
| mRNA with lipid nanoparticles | Coding RNA plus a defined delivery formulation | Cells take up RNA and translate the encoded antigen | Particle composition, RNA chemistry and route are product-specific |
| RNA-lipoplex | RNA complexed with lipids using a different formulation architecture | Delivery can target antigen-presenting compartments after intravenous administration | Do not assume it behaves like an intramuscular COVID-vaccine LNP |
| DNA or viral vector | DNA or an engineered vector encoding antigen | Cells produce antigen following delivery | Expression, delivery and vector immunity differ from RNA |

**Autogene cevumeran (BNT122) and the TNBC-MERIT RNA vaccine use intravenously delivered RNA-lipoplex formulations.** They should not be described as intramuscular LNP products. Some other personalized RNA programs use LNPs. Shared use of RNA does not establish interchangeable chemistry, dose, route or schedule.

## Peptide manufacture

Solid-phase peptide synthesis grows a chain on a support through repeated coupling and deprotection steps. Purification separates the desired sequence from incomplete products and impurities. Identity, purity and stability must then be checked. The formulation also specifies adjuvant, dose, container and handling.

Peptide-drug manufacture is a useful analogy, but “the same factory as Ozempic” overstates it: therapeutic peptides can use chemical, recombinant or hybrid production processes and distinct modifications. A shared synthesis principle does not guarantee that a facility can release a multi-peptide investigational vaccine.

## RNA manufacture

```mermaid
flowchart LR
  A[Approved sequence and specification] --> B[DNA template]
  B --> C[In-vitro transcription]
  C --> D[Purification and RNA testing]
  D --> E[Product-specific delivery formulation]
  E --> F[Aseptic fill and release testing]
  F --> G[Controlled transport and administration]
```

*Every step has a specification; a sequence file alone is not a released drug.*

The DNA template encodes the intended RNA. In-vitro transcription makes RNA using an enzyme. The product’s design determines its cap, untranslated regions, coding sequence, poly(A) strategy and whether modified nucleotides are used. Modified uridine is not a universal requirement for cancer RNA vaccines.

Purification removes residual template, enzymes, truncated products and unwanted double-stranded RNA. Formulation protects and delivers RNA, but its performance depends on lipid composition, particle properties, payload and route. Changing the formulation can change which cells translate the message and what inflammatory response occurs.

Aseptic filling and the storage plan preserve the product through administration. Shelf life and permissible pauses come from product-specific stability data, not a generic “RNA lasts six months” rule.

## Four different reviews

| Review | Question |
|---|---|
| Antigen/design | Are the intended antigens plausible, sufficiently tumor-specific, expressed and safely presented? |
| Handoff/change control | Is the exact sequence and specification version approved, and who may change it? |
| Manufacturing/release | Does the batch meet identity, purity, potency, sterility and formulation requirements? |
| Clinical/regulatory | Who owns the investigational protocol, access authorization, dosing and adverse-event monitoring? |

A clean batch can contain an ineffective design. A promising design can fail manufacturing. Regulatory authorization, batch release and evidence of benefit are separate gates. Timelines include design, material procurement, queue time, production, failed-lot handling, testing and review; no universal sequence-to-vial duration applies.

## A worked handoff

A designer sends a sequence. The manufacturer proposes a spacer change to improve production. The team needs a controlled revision, renewed biological assessment where appropriate, a final approved specification and a record tying the released lot to it. “Manufacturability edit” does not mean the biological meaning stayed unchanged.

RNA and peptide vaccine trials differ in cancer, burden, antigen selection, adjuvant and combination treatment. Cross-trial response percentages cannot establish that one platform is universally more immunogenic or more effective. Long peptides can support both class I and class II responses; they do not inherently require separate products for each.

## Try it

Two vaccines encode the same targets, but one is IV RNA-lipoplex and the other IM RNA-LNP. Can the first trial’s schedule and safety data be assigned to the second?

**Answer:** No. The exact formulation, route, dose and clinical context need their own evidence.

## Explain it back

“Sequence design determines what to teach; formulation determines delivery; release tests check the product; the clinical study tests benefit.”

## Takeaway

**A shared antigen or RNA label does not make two vaccine products interchangeable.**

**Next:** [Dose and measure response](/wiki/education/guides/personalized-cancer-vaccine/08-dosing-and-measuring-response).

## Sources and scope

Source check: October 8, 2026; no product or schedule is recommended here. Expert and learner review pending.

- [TNBC-MERIT primary study and methods](https://www.nature.com/articles/s41586-025-10004-2).
- [Autogene cevumeran pancreatic-cancer study](https://www.nature.com/articles/s41586-023-06063-y).
- [FDA investigational-drug access requirements](https://www.ecfr.gov/current/title-21/chapter-I/subchapter-D/part-312/subpart-I/section-312.310).
