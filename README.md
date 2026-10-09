# OncoGuide

Public cancer education, rendered at https://oncoguide.cc by the Next.js app in [Oncobase](https://github.com/jasonLaster/oncobase/tree/main/apps/oncoguide).

This initial release copies the existing education Markdown verbatim. Original Diana pages remain available; references outside education continue to point to Diana. All committed material is public. Do not commit private drafts or raw source captures here.

Edit Markdown under `wiki/education/`. Keep existing lesson paths stable, preserve citations, and include both files for illustrations marked `data-theme-pair`. Assets are local files; the build translates legacy links without modifying Markdown. Content changes trigger validation and a deployment of the dedicated app.

`provenance.json` records the source revision and initial file hashes. It is an import receipt, not a requirement that future edits retain the original hash. Public visibility does not grant a new reuse license; retain existing credits and attribution.
