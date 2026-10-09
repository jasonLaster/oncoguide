#!/usr/bin/env bash
set -euo pipefail
renderer_sha="$(node -p 'require("./renderer.lock.json").commit')"
if [[ ! "$renderer_sha" =~ ^[0-9a-f]{40}$ ]]; then echo "Expected a pinned renderer commit" >&2; exit 1; fi
# Vercel can restore generated renderer files without their Git metadata.
# Rebuild that disposable cache; preserve an unexpected local directory.
if [[ -e .renderer && ! -d .renderer/.git ]]; then
  if [[ "${VERCEL:-}" == "1" && ! -L .renderer ]]; then
    rm -rf .renderer
  else
    echo "Renderer path is not a Git checkout; preserve it before preparing the reader" >&2
    exit 1
  fi
fi
if [[ ! -d .renderer/.git ]]; then
  git clone --filter=blob:none --no-checkout https://github.com/jasonLaster/oncobase.git .renderer
elif [[ -n "$(git -C .renderer status --porcelain)" ]]; then
  echo "Renderer has local changes; preserve them before preparing the pinned reader" >&2; exit 1
fi
git -C .renderer fetch origin "$renderer_sha"
git -C .renderer checkout --detach "$renderer_sha"
(
  cd .renderer
  bun install --frozen-lockfile
  bun --cwd packages/smart-table build
)
