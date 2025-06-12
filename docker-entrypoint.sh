#!/bin/bash
# @Author: jankincai
# @Date:   2025-06-12 14:50:21
# @Last Modified by:   jankincai
# @Last Modified time: 2025-06-12 15:14:31
set -e

if [[ ! -d "/app/docs/.vitepress" ]]; then
    bun add -D vitepress@v2.0.0-alpha.5
    npx vitepress init
fi

bun run docs:dev -- --host 0.0.0.0
