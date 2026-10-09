---
title: Cell identity, state, and subtype
tags: [education, epithelial, lineage, TNBC, EMT]
---

# Cell identity, state, and subtype

Three questions often appear in the same paragraph: **what kind of cell is this, what is it doing, and how is the cancer classified?** They describe different things.

## Identity and state

<img src="/api/file?path=wiki%2Feducation%2Fmulti-omics-foundations%2Fimages%2Fcell-family-state-and-classification-light.png" alt="cell family activity state and classification cartoon" data-theme-pair>

<!-- Cartoon source: [generation prompt](/api/file?path=wiki%2Feducation%2Fimages%2Fprompts%2Fcell-family-state-and-classification.txt) -->

<!-- Theme asset: [dark variant](/api/file?path=wiki%2Feducation%2Fmulti-omics-foundations%2Fimages%2Fcell-family-state-and-classification-dark.png) -->

*We can describe a cell’s family and current activity separately. Receptor tests and RNA classifiers also answer different questions.*

| Term | Meaning | What the label alone cannot establish |
|---|---|---|
| **Malignant** | Cancerous | A specific treatment sensitivity |
| **Lineage** | A cell family and its developmental relationships | The exact ancestral cell of an individual tumor |
| **Progenitor** | A less mature cell able to give rise to more specialized descendants | That a progenitor-like cancer cell is a normal stem cell |
| **Differentiation** | Becoming more specialized in structure or function | How aggressive a cancer is from one RNA label |
| **Cell state / program** | A coordinated pattern of activity, such as proliferation or hormone response | A permanent identity; states can change |
| **Marker** | A feature used to help identify or characterize cells | A unique identity from one gene |
| **Cluster** | A computational group of similar measured profiles | A proven cell type or clone |

Normal breast atlases distinguish luminal hormone-responsive, luminal secretory, and basal/myoepithelial populations, with further states within them. **Luminal-progenitor-like** means resemblance to a less mature luminal program. It is an expression comparison, not a direct observation of the tumor's birth. [Human breast atlas](https://pmc.ncbi.nlm.nih.gov/articles/PMC11443819/)

## Why “basal” and “luminal” are confusing

**Basal** can refer to the outer epithelial layer of normal breast structures. **Basal-like** can also name a tumor expression subtype. **Luminal** can describe normal lining cells, while **luminal A/B** names tumor expression classes commonly associated with hormone-receptor-positive biology.

**TNBC** is a clinical receptor category: estrogen receptor, progesterone receptor, and HER2 testing are negative under their clinical criteria. **PAM50** is a classifier based on expression of 50 genes. [NCI: clinical receptor classification](https://www.cancer.gov/types/breast/diagnosis/breast-cancer-biomarker-tests) A lineage-like RNA state is another description again. A basal-like tumor can resemble luminal progenitors; primary research in BRCA1 carriers illustrates this distinction. It does not establish the origin of every TNBC. [Lim et al., Nature Medicine](https://pubmed.ncbi.nlm.nih.gov/19648928/)

The October 4 review's luminal-progenitor-like result therefore does not reclassify Diana's clinical TNBC as hormone-receptor-positive cancer.

## Epithelial and mesenchymal features

**Mesenchymal** describes connective-tissue-associated features. **Epithelial–mesenchymal transition (EMT)** describes changes in adhesion, organization, and motility programs; cells can have mixed features. **E-cadherin** participates in cell adhesion. **Keratins** are structural proteins often used as epithelial markers. **Vimentin** is associated with mesenchymal features but also occurs in normal supporting cells.

[EMT definitions and intermediate states](https://www.nature.com/articles/s41580-020-0237-9) provide the framework for describing those changes.

A high vimentin signal in a whole biopsy cannot tell us whether cancer cells adopted an EMT-like program or whether the sample contained many stromal cells. The October 4 review uses cell-specific comparisons to address this mixture problem; one marker still does not prove invasion, metastatic behavior, or drug resistance. [Report findings and qualifications](https://github.com/jasonLaster/oncoomics/blob/6c4e5438ca135835f0d5196df6f1fea42c243036/results/diana_multiomic_review_20261004/step16-problems-report/problems_report.md)

## Say it in your own words

**“TNBC describes the clinical receptor tests. Luminal-progenitor-like describes an RNA pattern in the cancer cells. Those labels answer different questions and can coexist.”**

**Check yourself:** Do two nuclei in one RNA cluster necessarily belong to the same genetic clone? **No.** Similar activity is different from shared acquired DNA changes. Next: [[wiki/education/multi-omics-foundations/03-reading-rna-counts|reading RNA counts]].
