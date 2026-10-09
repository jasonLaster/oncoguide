---
title: "Read a DNA assay as a coverage-and-confidence claim"
type: "guide-lesson"
guide: "what-multi-omics-tells-us"
step: 9
minutes: 10
objectives: ["Match a DNA question to assay coverage and detectable change classes.", "Separate authentic sequence evidence from biological consequence."]
prerequisites: ["[[wiki/education/concepts/biology-basics/genetics/mutation-types]]", "[[wiki/education/concepts/biology-basics/genetics/germline-vs-somatic]]", "[[wiki/education/concepts/measurement/sequencing-basics/panel-exome-genome]]", "[[wiki/education/concepts/measurement/sequencing-basics/variant-allele-fraction-and-cancer-cell-fraction]]"]
sensitive: false
tags: ["education", "multi-omics"]
updated: "2026-10-09"
source_checked: "2026-10-09"
reviewed: "pending"
reviewed_by: ""
review_status: "Source-checked; expert and learner review pending"
---

# Read a DNA assay as a coverage-and-confidence claim

**A DNA assay describes sequence and copy evidence in its tested material. Coverage and confidence come before the treatment story.**

**Before you start:** [[wiki/education/concepts/biology-basics/genetics/mutation-types|Mutation types]] names the edits. [[wiki/education/concepts/biology-basics/genetics/germline-vs-somatic|Germline versus somatic]] names their origin. [[wiki/education/concepts/measurement/sequencing-basics/panel-exome-genome|Panel, exome and genome sequencing]] names coverage. [[wiki/education/concepts/measurement/sequencing-basics/variant-allele-fraction-and-cancer-cell-fraction|Variant allele fraction (VAF) versus cancer cell fraction (CCF)]] names the mixture problem.

## Where this step sits

This is step 9 of [[wiki/education/reading-a-tumor/omics-and-multi-omics|Understand multi-omics]]. A result table is a set of claims about observed sequence. Before interpreting what a change could do, check whether this assay could measure it reliably.

## Match the question to the tested regions

A targeted panel samples predefined regions. An exome assay focuses on selected exonic regions and sometimes nearby splice boundaries. A genome assay examines a broader sequence landscape. These categories differ in scope, but scope is only one part of performance.

For each candidate finding, ask whether the exact region and change class were in the assay's validated scope. A panel might detect a known alteration deeply and reliably. A broader research assay might discover a rearrangement outside that panel. Neither result automatically supersedes every feature of the other.

## Build a small assay card

| Field | What to record |
|---|---|
| Input | Tissue or blood, preparation and sampled region |
| Coverage | Targeted regions and usable observations at the location |
| Change classes | Sequence substitutions, indels, copy changes and rearrangements actually analyzed |
| Normal comparison | Matched normal, tumor-only inference or another design |
| Output | Exact reference, variant notation, sequence support and copy-model uncertainty |
| Validation | Research discovery or a clinical assay validated for the intended use |

Extraction uses finite material. Fixed tissue can suit validated DNA workflows, but preservation, damage and input requirements vary. Do not infer a universal tissue amount from the assay's broad label.

## Confidence has several parts

Software **PASS** means a call meets specified filters. Agreement between callers can reduce some errors, but shared alignments can preserve shared artifacts. Independent fragments, a suitable normal comparison, mapping review and reproducibility add different kinds of support.

Average depth does not guarantee depth at a specific position. A “not found” result needs its tested scope and detection limits. Read support can be affected by contamination or damaged material. The strongest report tells the reader which limitations apply to this call.

## A worked finding: mutation plus copy loss

A fictional tumor has a splice-site change in repair gene R and loss of the other parental region. Its normal comparison does not show the variant within the assay's scope. A copy-aware model estimates that the retained cancer-cell copies carry it.

Together, these observations support a somatic, potentially two-copy-disruption hypothesis. They do not show which RNA products were made or whether useful protein remains. If phase or copy-state alternatives are unresolved, preserve those alternatives before drawing the stronger mechanism.

The next assay should test the proposed consequence. A splice question calls for suitable RNA-junction evidence. A predicted fusion calls for the relevant transcript or protein question. A copy gain calls for expression, localization or functional investigation as appropriate.

## What can go wrong at this step

- Equating a predicted damaging change with a functional loss.
- Calling a research copy model a perfectly measured cell count.
- Declaring a gene normal when its relevant change class was not assayed.
- Replacing a clinical hereditary test with tumor-only inference.

A useful sentence is: “This assay supports this specific DNA finding within this tested scope.” It leaves room for the next biological question without making the first finding sound weak.

## Try it

A tumor panel is negative, but it does not examine the intron containing a proposed rearrangement. Has it disproved the rearrangement?

**Answer:** No. Its negative result excludes qualifying findings within its actual scope. Another appropriately validated method is needed for the untested question.

## Explain it back

“Before I interpret a DNA change, I check ______. Then I ask whether ______ was measured.”

One answer: “region, change class, support and reference; the proposed RNA, protein or functional consequence.”

## Takeaway

**A credible DNA finding is the beginning of a consequence test, rather than its conclusion.**

**Next:** [[wiki/education/molecular-profiling/02-rna-the-activity-layer|Use RNA to test the message and its source]].

## Sources and scope

Source check: October 9, 2026. The examples are fictional and teach interpretation rather than a treatment choice. Expert and learner review remain pending.

- [NHGRI DNA-sequencing fact sheet](https://www.genome.gov/about-genomics/fact-sheets/DNA-Sequencing-Fact-Sheet).
- [Carter et al., purity and copy-aware DNA inference](https://pmc.ncbi.nlm.nih.gov/articles/PMC4383288/).
- [HGVS exact variant descriptions](https://hgvs-nomenclature.org/stable/).
