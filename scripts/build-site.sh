#!/usr/bin/env bash
set -euo pipefail
content_dir="$(pwd)"
renderer_sha="$(node -p 'require("./renderer.lock.json").commit')"
if [[ ! "$renderer_sha" =~ ^[0-9a-f]{40}$ ]]; then echo "Expected a pinned renderer commit" >&2; exit 1; fi
if [[ ! -d .renderer/.git ]]; then git clone --filter=blob:none --no-checkout https://github.com/jasonLaster/oncobase.git .renderer; fi
git -C .renderer fetch origin "$renderer_sha"
git -C .renderer checkout --detach "$renderer_sha"
cd .renderer
bun install --frozen-lockfile
bun --cwd packages/smart-table build
ONCOGUIDE_CONTENT_DIR="$content_dir" ONCOGUIDE_APP_SHA="$renderer_sha" bun --cwd apps/oncoguide build
