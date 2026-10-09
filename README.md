# OncoGuide

Public cancer education, rendered at https://oncoguide.cc by the Next.js app in [Oncobase](https://github.com/jasonLaster/oncobase/tree/main/apps/oncoguide).

This initial release copies the existing education Markdown verbatim. Original Diana pages remain available; references outside education continue to point to Diana. All committed material is public. Do not commit private drafts or raw source captures here.

Edit Markdown under `wiki/education/`. Keep existing lesson paths stable, preserve citations, and include both files for illustrations marked `data-theme-pair`. Assets are local files; the build translates legacy links without modifying Markdown. Content changes trigger validation and a deployment of the dedicated app.

`provenance.json` records the source revision and initial file hashes. It is an import receipt, not a requirement that future edits retain the original hash. Public visibility does not grant a new reuse license; retain existing credits and attribution.

The Vercel project `oncoguide` builds this content with the exact Oncobase revision
in `renderer.lock.json`. Content PRs receive site previews and run GitHub checks;
merges to `main` deploy to `oncoguide.cc`. To release an updated reader, update the
renderer lock to a verified Oncobase commit. Application source stays in Oncobase;
this repository contains Markdown, media and the small build/CI configuration.

Run `bash scripts/build-site.sh` locally with Git, Node and Bun 1.3.12 installed.
Then run `bun --cwd .renderer/apps/oncoguide test:e2e` to check the exported site.
CI checks direct lesson routes, aliases, metadata, reading without JavaScript,
search, light/dark themes, mobile navigation, and every rendered image. The build
fails on missing assets (including inferred dark companions), unresolved education
links, private markers, LFS pointers or excessive client JavaScript.

The original Diana education copy remains independently editable. This release
does not synchronize edits between repositories or redirect Diana's URLs.
