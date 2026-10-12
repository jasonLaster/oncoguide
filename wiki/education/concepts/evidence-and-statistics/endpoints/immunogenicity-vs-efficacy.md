---
title: "Immunogenicity versus efficacy"
type: comparison
domain: evidence-and-statistics/endpoints
aliases: []
summary: "Immunogenicity concerns an immune response to an intervention, while clinical efficacy concerns its effect on a defined clinical endpoint in a specified population and comparison."
level: intermediate
sensitive: false
tags: [education, comparison]
prerequisites:
  - "[[wiki/education/concepts/measurement/immune-monitoring/elispot]]"
  - "[[wiki/education/concepts/evidence-and-statistics/study-design/trial-phases-and-randomization]]"
used_by: []
reviewed: pending
reviewed_by: ""
expert_review: pending
learner_review: pending
---

# Immunogenicity versus efficacy

Immunogenicity concerns an immune response to an intervention, while clinical efficacy concerns its effect on a defined clinical endpoint in a specified population and comparison.

## What the questions share

Both help evaluate an intervention. They ask about different outcomes. An immune result can justify further investigation without settling whether adding the intervention improves patients' outcomes. Here the example is a therapeutic cancer vaccine, rather than a vaccine against infection.

## The axis is the outcome being claimed

```text
ONE INTERVENTION

IMMUNE RESPONSE
What changed in the
specified immune test?

CLINICAL EFFECT
What did adding it change
in the clinical endpoint?
```

*Two question cards, with their own measurements and comparison needs.*

## Compare the evidence requirements

| Question | Immunogenicity | Clinical efficacy |
|---|---|---|
| What is measured? | A specified immune response, such as antigen-stimulated secretion | A defined clinical endpoint, such as recurrence over stated follow-up |
| What context must travel? | Specimen, stimulus, timing, handling, controls and denominator | Population, intervention components, comparator, endpoint, starting time and follow-up |
| What does a positive result support? | The measured response under those conditions; attribution still needs suitable design | The intervention-effect claim supported by the study and its uncertainty |
| What is the tempting shortcut? | “An immune signal proves recurrence prevention” | “An outcome change proves the measured clone caused it” |
| What else needs assessment? | Natural tumor recognition, location and function when relevant | Harms, missing data and the meaning of the endpoint for patients |

The [enzyme-linked immunospot (ELISpot) assay](/wiki/education/concepts/measurement/immune-monitoring/elispot) measures secretion under defined stimulation. Supplied peptide and laboratory expansion can change what it reveals. A repertoire-frequency change alone does not establish antigen specificity or a vaccine-induced functional response. A weak blood test can also miss responses elsewhere.

An **endpoint** is a prespecified outcome and its measurement rule. A clinical-efficacy result is not automatically a direct measure of patient benefit: some endpoints are surrogate measures, whose relevance needs evidence in that setting. Keep harms and uncertainty alongside any benefit claim.

## Which question can each result answer?

Use immune assays to examine the specified response. To estimate added clinical effect, use a suitable clinical study for that endpoint. For a vaccine added to standard care, comparison with the same standard care without the vaccine addresses the addition. Randomization can strengthen attribution; endpoint definitions, follow-up and assessment quality still matter. Mechanistic tests remain necessary to identify which immune process caused an effect.

## Common confusions

Positive blood responses can coexist with recurrence. Recurrence does not erase an observed immune response, and that response does not prove recurrence prevention. **Circulating tumor DNA (ctDNA)** is tumor-derived DNA in blood; its [assay result](/wiki/education/concepts/measurement/liquid-biopsy/ctdna-units) is not itself an immune measurement. If standard care and a vaccine were both given, disappearance of a detectable signal does not isolate the vaccine's contribution.

An unresolved efficacy comparison means the added effect remains uncertain. It is not evidence that the effect is zero.

## Try it: use the existing paired examples

Read [the fictional positive-assay-and-recurrence example](/wiki/education/guides/personalized-cancer-vaccine/08-dosing-and-measuring-response#worked-example-a-positive-assay-and-a-recurrence), then [the standard-care-plus-vaccine attribution task and answer](/wiki/education/guides/personalized-cancer-vaccine/08-dosing-and-measuring-response#try-it).

The first shows why an immune observation and recurrence can both be true. The second asks what a tumor-DNA result can attribute to the vaccine. Keep the answer's clinical comparison open, including endpoint, timing and harms. No effect size can be calculated from those fictional observations.

## Explain it back

“The immune test establishes ____. Added clinical efficacy still needs ____.”

One possible answer: “a response under its stated conditions; a suitable comparison of defined clinical outcomes, with follow-up, uncertainty and harms.”

## Takeaway

**An immune response and an added clinical effect are separate claims that need separate evidence.**

## Related concepts

Continue with [measuring T-cell engagement](/wiki/education/reading-a-tumor/measuring-t-cell-engagement#try-it) for a clone-and-tumor-DNA attribution answer, and [trial design](/wiki/education/concepts/evidence-and-statistics/study-design/trial-phases-and-randomization) for comparison logic.

## Sources and scope

Source check: October 12, 2026. The linked public examples and answers are retained unchanged. Selected passages on product design and immune assays in Ott's primary paper, and selected endpoint/design sections of the FDA's 2018 guidance, were read. No new clinical efficacy estimates or cartoons are added. Independent peer, expert and learner review pending.

- [Ott et al., 2017](https://pubmed.ncbi.nlm.nih.gov/28678778/): phase I melanoma vaccine study; immune measurements in a specific assay and treatment setting, not an added-benefit comparison for all vaccines.
- [FDA, 2018: Clinical Trial Endpoints for the Approval of Cancer Drugs and Biologics](https://www.fda.gov/media/71195/download): clinical benefit, surrogate endpoints and study-design considerations, particularly sections II, III.A and IV.A. Used for general evidence-reading distinctions, not current regulatory or treatment advice.
