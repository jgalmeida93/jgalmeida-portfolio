#!/usr/bin/env bash
# Regenera o PDF do currículo a partir de cv/cv.html para public/jonas-almeida-cv.pdf.
# Requer o Google Chrome (impressão headless para PDF).
#
# Uso:  bash cv/build.sh
# Em outro SO, defina CHROME apontando para o binário do Chrome/Chromium.
set -euo pipefail

DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
CHROME="${CHROME:-/Applications/Google Chrome.app/Contents/MacOS/Google Chrome}"
OUT="$DIR/../public/jonas-almeida-cv.pdf"

"$CHROME" \
  --headless=new --disable-gpu --no-pdf-header-footer \
  --virtual-time-budget=6000 --run-all-compositor-stages-before-draw \
  --print-to-pdf="$OUT" \
  "file://$DIR/cv.html"

echo "Wrote $OUT"
