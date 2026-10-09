---
title: "See what is inside a tissue sample"
type: "guide-lesson"
guide: "what-multi-omics-tells-us"
step: 2
minutes: 8
objectives: ["Distinguish normal epithelial cells from malignant cells.", "Explain why a tissue measurement can include normal neighbors."]
prerequisites: ["[[wiki/education/concepts/biology-basics/genetics/central-dogma]]", "[[wiki/education/concepts/cancer-biology/what-cancer-is/tumor-heterogeneity]]"]
sensitive: false
tags: ["education", "multi-omics"]
updated: "2026-10-09"
source_checked: "2026-10-09"
reviewed: "pending"
reviewed_by: ""
review_status: "Source-checked; expert and learner review pending"
---

# See what is inside a tissue sample

**A tumor specimen is a piece of tissue, not a jar of pure cancer cells. Know the neighbors before interpreting its signal.**

**Before you start:** [[wiki/education/concepts/biology-basics/genetics/central-dogma|Genes, messages and products]] separates the measured layers. [[wiki/education/concepts/cancer-biology/what-cancer-is/tumor-heterogeneity|Tumor heterogeneity]] explains why one sampled region may not represent every cancer cell.

## Where this step sits

This is step 2 of [[wiki/education/reading-a-tumor/omics-and-multi-omics|Understand multi-omics]]. The word **epithelial**, pronounced *eh-pih-THEE-lee-ul*, describes cells that form linings and glands. **Epithelium** is the tissue they form. Both normal breast cells and many breast-cancer cells belong to this family. **Carcinoma** is cancer arising from epithelial cells; epithelial by itself does not mean malignant.

## Picture the breast duct from the inside out

The **lumen** is the hollow space. **Luminal** means facing that space. A normal breast duct has inner luminal epithelial cells, an outer myoepithelial layer and a basement membrane. **Myoepithelial** cells have contractile features. The **basement membrane** is a thin support boundary beneath the epithelium.

Outside those structures sits **stroma**, supporting tissue containing connective material, vessels and neighboring cells. **Fibroblasts** build and remodel extracellular material. **Endothelial** cells line blood vessels. Immune cells can also occupy this neighborhood.

These are normal architectural descriptions. A tumor can disrupt the organization. A pathologist interprets whether malignant cells have invaded surrounding tissue; a molecular epithelial label alone cannot answer that question.

## The sample is a neighborhood

| Component | What it can contribute to a molecular report |
|---|---|
| Malignant epithelial cells | Cancer-cell messages, proteins and acquired DNA changes |
| Normal epithelial cells | Many of the same lineage markers and normal tissue functions |
| Fibroblasts and other supporting cells | Matrix, signaling and connective-tissue programs |
| Vessel cells | Vascular markers and proteins |
| Immune cells | Antibody, inflammation and immune-response messages |

A bulk assay combines contributions from the piece it receives. The amount of RNA contributed need not be proportional to the number of cells. A small population with abundant messages can make a visible contribution.

An analyst may try to enrich malignant cells or assign individual cells to groups. Those steps can help, but the resulting label needs evidence. Cell appearance, multiple markers, acquired DNA changes and copy patterns can support malignancy. One epithelial marker cannot distinguish normal lining cells from cancer.

## A worked example: choose the normal neighbor

A fictional gene is high in cancer cells and low in fibroblasts. The first interpretation is “higher than fibroblasts.” That is an accurate comparison if the measurements are sound.

Now measure normal luminal epithelial cells. The gene is similarly high there. The stronger statement “cancer-selective” no longer follows. The original contrast mainly captured an epithelial-versus-supporting-cell difference.

If the normal epithelial group is tiny or contaminated, the result becomes less certain. We should say the normal comparison is unresolved, rather than declaring either selectivity or perfect equality. A useful next step is a better matched comparator, with compatible preparation and clear cell labels.

## What can go wrong at this step

- Treating “tumor sample” as meaning every measured cell is malignant.
- Using fibroblasts as the only normal comparison for an epithelial target.
- Reading a basement-membrane drawing as a diagnostic image of an individual tumor.
- Assuming a computational tumor mask cannot include normal epithelium.

A **tumor mask** is an image-based assignment of a region or cells to the malignant compartment. It is an analysis aid, not a substitute for validating that assignment.

## Try it

A tissue profile contains a strong antibody-production signal. Does that establish that the cancer cells produce antibodies?

**Answer:** No. Plasma cells and other immune populations can supply that RNA. The next question is which cells produced the signal, using a suitable cell-specific or spatial measurement.

## Explain it back

“Epithelial describes a ______. To call a cell malignant, I need ______. To interpret a bulk signal, I need ______.”

One answer: “normal cell family; additional evidence of cancer; the sample's cell mixture.”

## Takeaway

**The right molecular question starts with the right cells and the right normal comparison.**

**Next:** [[wiki/education/multi-omics-foundations/02-cell-identity-and-state|Separate cell identity from cell state]].

## Sources and scope

Source check: October 9, 2026. The examples are fictional and teach interpretation rather than a treatment choice. Expert and learner review remain pending.

- [Kumar et al., primary human breast atlas](https://www.nature.com/articles/s41586-023-06252-9).
- [NCI SEER epithelial tissue](https://training.seer.cancer.gov/anatomy/cells_tissues_membranes/tissues/epithelial.html).
- [NCI stroma](https://www.cancer.gov/publications/dictionaries/cancer-terms/def/stroma).
