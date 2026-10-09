# OncoGuide

Public cancer education, rendered at https://oncoguide.cc by the Next.js app in [Oncobase](https://github.com/jasonLaster/oncobase/tree/main/apps/oncoguide).

The shared curriculum copies committed Diana education Markdown verbatim. Original Diana pages remain available; references outside education continue to point to Diana. All committed material is public. Do not commit private drafts or raw source captures here.

Author shared education in `diana-tnbc/obsidian/wiki/education/`, then use the [content consistency skill](.agents/skills/sync-education-content/SKILL.md) to update this copy. Keep existing lesson paths stable, preserve citations, and include both files for illustrations marked `data-theme-pair`. Assets are local files; the build translates legacy links without modifying Markdown. Content changes trigger validation and a deployment of the dedicated app.

`provenance.json` preserves the initial import. `content-sync.json` records the current committed source and hashes of active Markdown, referenced assets and associated prompts. Retired media keeps its original revision separately. Build validation rejects unexplained drift; independent destination edits must be reconciled before a transfer. Public visibility does not grant a new reuse license; retain existing credits and attribution.

The Vercel project `oncoguide` builds this content with the exact Oncobase revision
in `renderer.lock.json`. Content PRs receive site previews and run GitHub checks;
merges to `main` deploy to `oncoguide.cc`. To release an updated reader, update the
renderer lock to a verified Oncobase commit. Application source stays in Oncobase;
this repository contains Markdown, media and the small build/CI configuration.

Run `bash scripts/build-site.sh` locally with Git, Node and Bun 1.3.12 installed.
Then run `bun run test:reader` to check the exported site against the current content. The content repo owns these checks; pinned application smoke fixtures can refer to illustrations that have since been retired.
CI checks direct lesson routes, aliases, metadata, reading without JavaScript,
search, light/dark themes, mobile navigation, and every rendered image. The build
fails on missing assets (including inferred dark companions), unresolved education
links, private markers, LFS pointers or excessive client JavaScript.

The sync helper compares source, destination and the last imported baseline; it never silently overwrites an independent edit. Run `bun run check:content-consistency` for local receipt validation, or `bun scripts/education-content-sync.ts check --source <diana-repo> --ref <commit>` to compare with a selected source revision. This workflow does not redirect or remove Diana's URLs.
