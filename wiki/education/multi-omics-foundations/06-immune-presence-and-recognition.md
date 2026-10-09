---
title: Immune presence and tumor recognition
tags: [education, HLA, B2M, interferon, antigen-presentation]
---

# Immune presence and tumor recognition

An immune-rich tissue sample tells us immune cells are present. Whether those cells can recognize and kill the malignant cells is a separate question.

## Antigens and presentation

<img src="/api/file?path=wiki%2Feducation%2Fmulti-omics-foundations%2Fimages%2Fimmune-presence-presentation-and-recognition-light.png" alt="immune presence peptide presentation and T cell recognition cartoon" data-theme-pair>

<!-- Cartoon source: [generation prompt](/api/file?path=wiki%2Feducation%2Fimages%2Fprompts%2Fimmune-presence-presentation-and-recognition.txt) -->

<!-- Theme asset: [dark variant](/api/file?path=wiki%2Feducation%2Fmulti-omics-foundations%2Fimages%2Fimmune-presence-presentation-and-recognition-dark.png) -->

*Three separate questions about the same tissue. Immune-cell presence does not by itself establish presentation, recognition, or killing.*

An **antigen** is something the immune system can recognize. A **neoantigen** is a new antigen arising from a tumor-specific change. For many CD8 T-cell targets, the relevant object is a short protein fragment, or **peptide**, displayed by an HLA class I molecule.

**HLA** is the human version of the major histocompatibility complex, **MHC**. **HLA-I** includes HLA-A, HLA-B, and HLA-C. **B2M**, beta-2-microglobulin, helps form the class I complex. **Antigen-processing machinery (APM)** includes proteins that generate, transport, and load peptides. These steps connect protein production to surface display. [Antigen processing and presentation](https://www.ncbi.nlm.nih.gov/books/NBK459467/)

The evidence ladder is:

**Authentic tumor change → expressed RNA → protein/peptide generation → HLA presentation → T-cell recognition → tumor killing → clinical benefit.**

Evidence at one step does not establish the later steps. **Immunopeptidomics** measures recovered HLA-bound peptides; it does not itself prove a useful T-cell response. **Immunogenicity** means capacity to provoke an immune response, which differs from expression or predicted binding.

## What a gene copy or RNA score can tell us

**HLA haplotype loss** removes one inherited set of HLA alleles, potentially changing the available peptide display. **Single-copy B2M loss** leaves one copy and does not automatically abolish protein or presentation. Expression, assembly, loading, and localization still matter. Primary lung-cancer research illustrates allele-specific HLA loss as an escape mechanism; it does not establish escape in every tumor. [McGranahan et al.](https://pmc.ncbi.nlm.nih.gov/articles/PMC5720478/)

**Interferons (IFNs)** are signaling proteins. Type I includes IFN-alpha/beta; **IFN-gamma** is type II. An **interferon-response module** measures a related RNA program. A low baseline score does not prove the cell cannot respond to stimulation. IFN-gamma can induce antigen-presentation components, but transcription and assembled surface complexes remain separate measurements. [Primary interferon/assembly experiment](https://pmc.ncbi.nlm.nih.gov/articles/PMC400829/)

## The surrounding immune vocabulary

| Term | Plain-language meaning | Interpretation limit |
|---|---|---|
| **sTILs** | Stromal tumor-infiltrating lymphocytes; pathology scores lymphocytes in the relevant stromal area | A percentage of stromal area under scoring rules, not the fraction of all cells that are T cells |
| **Plasma cells** | Antibody-secreting cells derived from B cells | Their presence does not identify what the antibodies recognize |
| **IgA / IgG** | Different antibody classes | An antibody-class RNA signal does not prove tumor-specific activity |
| **Chemokine** | A signal affecting cell movement and recruitment | A ligand's presence does not establish where responding cells moved |
| **CXCL12** | A chemokine involved in cell positioning and interactions | A stromal RNA signal is not a direct measurement of T-cell exclusion |

[International TILs Working Group scoring recommendations](https://pmc.ncbi.nlm.nih.gov/articles/PMC6267863/) define the stromal area used for sTIL assessment.

The October 4 review distinguishes immune-rich surrounding tissue from lower tumor-cell APM modules and withdraws its computational sTIL estimate. The pathology measurements from different specimens remain separate. [Report qualifications](https://github.com/jasonLaster/oncoomics/blob/6c4e5438ca135835f0d5196df6f1fea42c243036/results/diana_multiomic_review_20261004/step16-problems-report/problems_report.md)

## Say it in your own words

**“There are immune cells in the sample. To say they recognize the cancer, we also need evidence that the tumor displays the relevant target and that T cells respond to it.”**

**Check yourself:** Does an expressed mutation prove an immunogenic neoantigen? **No.** Processing, presentation, and recognition still need evidence. Continue to [[wiki/education/multi-omics-foundations/07-comparisons-and-evidence|comparisons and the evidence ladder]], or [[wiki/education/designing-a-vaccine/02-hla-and-antigen-presentation|the HLA lesson]] for depth.
