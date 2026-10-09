# Protein — expression and activation

Protein measurements ask what was made, where it is, and whether relevant machinery is active. Different assays answer different parts of that question. RNA is useful evidence about messages; it cannot directly establish the protein's abundance, location, or function.

<img src="/api/file?path=wiki%2Feducation%2Fmolecular-profiling%2Fimages%2Fprotein-construction-site-light.png" alt="Protein machinery made from RNA instructions" data-theme-pair>

## Four questions to keep separate

| Question | Useful measurement | Limit |
|---|---|---|
| **Is protein present?** | IHC, immunofluorescence, targeted or broader mass spectrometry | A bulk total may include normal and malignant cells |
| **Which cells and location?** | Tissue staining with cell identification and localization | A membrane, cytoplasmic, or nuclear signal can have different implications |
| **Is a signaling component activated?** | Appropriate phospho-specific assay, including RPPA or phospho-IHC | One modification does not establish a whole pathway or drug dependency |
| **Does the tumor depend on it?** | Suitable perturbation and functional testing | A model's response still needs reproducibility and clinical context |

**Phosphorylation** adds a phosphate group to a protein and can alter signaling; its effect depends on the protein and site. **RPPA**, reverse-phase protein array, measures selected proteins using antibodies against spotted sample lysates. It can measure total or phosphorylated forms when the panel includes suitable antibodies. It does not preserve tissue location.

A surface target used to deliver an ADC does not need to be the tumor's essential growth driver. Its presence, accessibility, distribution, normal-tissue expression, and drug mechanism matter. A signaling inhibitor asks a different dependency question. See [[wiki/education/multi-omics-foundations/07-comparisons-and-evidence|targets, selectivity, and dependence]].

## IHC and tissue location

**IHC**, immunohistochemistry, uses antibodies to stain proteins in tissue. Pathologists score the relevant cells, intensity, fraction, and location according to the particular assay. **Immunofluorescence (IF)** uses fluorescent labeling; multiplex IF studies multiple markers in a tissue map.

Clinical ER, PR, and HER2 tests classify breast cancers under defined criteria. Negative classification does not always mean literally zero molecules. HER2 RNA, total protein, membrane staining, and DNA amplification are related measurements with different clinical definitions. [NCI: breast biomarker tests](https://www.cancer.gov/types/breast/diagnosis/breast-cancer-biomarker-tests)

A **tumor mask** is an image-based assignment of the malignant compartment. Epithelial markers can help construct it, but normal epithelium also expresses epithelial markers; morphology and additional evidence matter. A tissue measurement must identify which cells were scored.

## Targeted proteomics

**Mass spectrometry** identifies or quantifies molecules using their physical signatures. A **targeted panel** measures predefined proteins; absence from its output can mean the marker was not assayed. Diana's mProbe OncoOmics report is targeted proteomics, distinct from the Oncoomics computational report collection.

**amol/µg** means attomoles of the measured analyte per microgram of assayed protein. It is a bulk abundance unit, not molecules per malignant cell or per cell surface. **LOQ**, limit of quantification, is the assay's reliable quantification boundary. **ND**, not detected, should be read with the method and threshold; it does not mean biological absence.

The October 4 integration uses TROP-2 total protein as supporting target-presence evidence while keeping membrane localization separate. It also treats bulk vimentin as a mixture signal that cannot identify malignant versus stromal origin. For current values and specimen attribution, use [[wiki/omics/oncoomics-proteomics-integration|the integrated protein interpretation]] and [[wiki/omics/specimen-to-sample-map|the specimen map]].

## Isoforms and access

An **isoform** is a particular version of an RNA or protein, often produced through alternative processing. A gene-level CD44 signal does not specify the CD44v6 protein isoform. Likewise, a PSMA signal needs cell localization before assigning it to cancer cells rather than vessels. RNA abundance alone cannot make those assignments. [October 4 integrated targets](https://github.com/jasonLaster/oncoomics/blob/6c4e5438ca135835f0d5196df6f1fea42c243036/results/diana_multiomic_review_20261004/step14-integrated-targets/integrated_targets_report.md)

## Immunopeptidomics

Immunopeptidomics measures peptides recovered from HLA complexes. It addresses presentation more directly than gene expression or a binding prediction. Recovery depends on the material, assay sensitivity, and analysis; a detected peptide still needs a recognition/function question. Continue to [[wiki/education/designing-a-vaccine/03-immunopeptidomics|the detailed lesson]] and [[wiki/education/multi-omics-foundations/06-immune-presence-and-recognition|the immune evidence ladder]].

## Say it in your own words

**“Protein presence, surface location, pathway activation, and dependence are different measurements. I want the one that answers the proposed treatment mechanism.”**

**Check yourself:** If a bulk protein panel detects a receptor, has it proved that an antibody can bind it on cancer cells? **No.** The right cell and accessible location still need evidence.

Next: [[wiki/education/molecular-profiling/04-spatial-biology|spatial biology]] or [[wiki/education/molecular-profiling/05-functional-drug-response|functional response]]. Return to [[wiki/education/molecular-profiling/index|the course]].
