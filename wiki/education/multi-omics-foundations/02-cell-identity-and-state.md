---
title: "Separate cell identity from cell state"
type: "guide-lesson"
guide: "what-multi-omics-tells-us"
step: 3
minutes: 8
objectives: ["Distinguish cell lineage, current activity and clinical classification.", "Explain why an RNA cluster is not automatically a genetic clone."]
prerequisites: ["[[wiki/education/concepts/cancer-biology/what-cancer-is/tumor-heterogeneity]]", "[[wiki/education/concepts/measurement/transcriptomics/bulk-rna-seq]]"]
sensitive: false
tags: ["education", "multi-omics"]
updated: "2026-10-09"
source_checked: "2026-10-09"
reviewed: "pending"
reviewed_by: ""
review_status: "Source-checked; expert and learner review pending"
---

# Separate cell identity from cell state

**What kind of cell is it, what is it doing, and how is the cancer classified? These are three different questions.**

**Before you start:** [[wiki/education/concepts/cancer-biology/what-cancer-is/tumor-heterogeneity|Tumor heterogeneity]] includes genetic and state differences. [[wiki/education/concepts/measurement/transcriptomics/bulk-rna-seq|Bulk RNA sequencing]] shows why cell mixture affects expression labels.

## Where this step sits

This is step 3 of [[wiki/education/reading-a-tumor/omics-and-multi-omics|Understand multi-omics]]. A person's job title does not tell you what they are doing this minute. A cell's family also differs from its current activity. This distinction makes a long expression report easier to read.

## Name the identity, then the activity

**Lineage** describes a cell family and its developmental relationships. **Differentiation** describes specialization. A **progenitor** is a less mature cell that can produce more specialized descendants. A cancer cell can resemble a progenitor program without being a normal stem cell.

A **cell state** describes a pattern of activity, such as division, stress response or secretion. A **marker** is a feature used to help identify or characterize cells. It may be useful without being unique to one cell family.

A computational **cluster** groups similar measured profiles. Clusters depend on assay resolution, chosen features and analysis settings. They can reveal important structure without proving a separate lineage or clone.

| Label | Question it answers | What it does not establish |
|---|---|---|
| Epithelial | Which broad cell family? | Malignancy |
| Malignant | Is there evidence this cell is cancerous? | A specific treatment response |
| Proliferating | Is a cell-division program prominent? | Permanent identity |
| Luminal-progenitor-like | What reference program does the RNA resemble? | The exact cell the tumor began in |
| RNA cluster | Which profiles were grouped together? | Shared acquired DNA ancestry |

## Clinical classification has its own evidence

[Triple-negative breast cancer (TNBC)](/wiki/education/concepts/breast-cancer/receptors-and-subtypes/tnbc) names a clinical receptor classification. Its validated tissue tests are not replaced by an RNA resemblance label.

[PAM50](/wiki/education/concepts/breast-cancer/receptors-and-subtypes/intrinsic-subtype) supplies an intrinsic expression label. Intrinsic expression subtypes, normal-cell reference programs and receptor categories describe related biology through different measurements. **Basal** can name a normal outer epithelial population, while **basal-like** names an expression pattern in cancer. **Luminal** can describe a normal lining cell without making the tumor hormone-receptor-positive.

The names feel contradictory only if we treat them as answering the same question. A receptor-negative cancer can resemble a luminal-progenitor RNA program. That resemblance does not demonstrate hormone dependence or rewrite a signed clinical diagnosis.

## A worked example: one marker, two explanations

Imagine high vimentin RNA in a mixed specimen. **Vimentin** is associated with mesenchymal features and is also expressed by supporting cells. **Epithelial–mesenchymal transition (EMT)** describes changes in epithelial organization and related motility programs; mixed and intermediate states can occur.

The bulk signal could come from fibroblasts or from altered programs in cancer cells. Cell-specific measurements help distinguish these explanations. Even then, one marker does not establish invasion, metastatic behavior or drug resistance.

Now imagine two cancer cells fall in the same RNA cluster. They may have similar activity but different acquired mutations. Conversely, cells from the same genetic clone can use different programs. Genetic ancestry and transcriptional similarity need separate evidence.

## What can go wrong at this step

- Turning “resembles” into “originated from.”
- Turning one marker into a definitive cell identity.
- Turning an expression subtype into a treatment indication.
- Counting each RNA cluster as a genetically distinct clone.

Keep the evidence type in the sentence: “The RNA resembles this program” is clearer than “The tumor is this cell.”

## Try it

A report describes malignant cells as luminal-progenitor-like, while clinical receptor testing is triple-negative. Must one result be wrong?

**Answer:** No. One describes an RNA resemblance and the other a clinical receptor category. Check both methods, but the labels can coexist.

## Explain it back

“Identity tells me ______; state tells me ______; clinical classification tells me ______.”

One answer: “the cell family; its current measured program; the category defined by validated clinical tests.”

## Takeaway

**A cell family, an activity pattern and a clinical diagnosis deserve separate labels.**

**Next:** [[wiki/education/multi-omics-foundations/03-reading-rna-counts|Read RNA counts without counting proteins]].

## Sources and scope

Source check: October 9, 2026. The examples are fictional and teach interpretation rather than a treatment choice. Expert and learner review remain pending.

- [Kumar et al., human breast cell families and states](https://www.nature.com/articles/s41586-023-06252-9).
- [Lim et al., primary BRCA1-carrier progenitor study](https://pubmed.ncbi.nlm.nih.gov/19648928/).
- [EMT research definitions](https://www.nature.com/articles/s41580-020-0237-9).
