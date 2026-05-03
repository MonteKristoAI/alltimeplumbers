#!/usr/bin/env bash
# Download every image asset from alltimeplumbers.com /wp-content/uploads/
# into clients/alltimeplumbers/assets/source/ preserving filenames.
#
# Run:
#   cd clients/alltimeplumbers/assets/source
#   bash download.sh

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

BASE="https://alltimeplumbers.com/wp-content/uploads"
UA="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.4 Safari/605.1.15"

# Image inventory from Firecrawl scrape of homepage + services + gallery + reviews
URLS=(
  # Logos + favicon
  "$BASE/ATPLogo.png"
  "$BASE/ATPLogoFooter-e1761595185929.png"
  "$BASE/ATPFavIcon.png"
  "$BASE/White24-e1761595270917.png"

  # Header + footer chrome
  "$BASE/phone-icon.png"
  "$BASE/phone-icon-1.png"
  "$BASE/map-pin.png"
  "$BASE/google-brand.png"

  # Service hero icons
  "$BASE/WaterHeaterIcon.png"
  "$BASE/GasIcon.png"
  "$BASE/PlumbingIcon.png"

  # Commercial-section illustrations
  "$BASE/New-Construction-Plumbing.png"
  "$BASE/Realtor-and-Property-Management-Inspections.png"
  "$BASE/Sewer-Line-and-Camera-Inspections.png"

  # Social icons (gallery page)
  "$BASE/2022/08/yelp-logo-icon.png"
  "$BASE/2022/08/yelp-logo-icon-150x150.png"
  "$BASE/2022/08/facebook-icon-logo.png"
  "$BASE/2022/08/facebook-icon-logo-150x150.png"
  "$BASE/2022/08/google.png"
  "$BASE/2022/08/google-150x150.png"
)

mkdir -p logos icons illustrations social chrome

ok=0
fail=0
for url in "${URLS[@]}"; do
  fname="${url##*/}"
  printf '  %-60s ' "$fname"
  if curl -sSL -A "$UA" --max-time 30 -o "$fname" "$url" 2>/dev/null; then
    if [ -s "$fname" ]; then
      echo "OK"
      ok=$((ok+1))
    else
      echo "FAIL (empty)"
      rm -f "$fname"
      fail=$((fail+1))
    fi
  else
    echo "FAIL (curl)"
    fail=$((fail+1))
  fi
done

# Light organization
mv ATPLogo.png ATPLogoFooter-*.png ATPFavIcon.png White24-*.png logos/ 2>/dev/null || true
mv WaterHeaterIcon.png GasIcon.png PlumbingIcon.png icons/ 2>/dev/null || true
mv New-Construction-Plumbing.png Realtor-and-Property-Management-Inspections.png Sewer-Line-and-Camera-Inspections.png illustrations/ 2>/dev/null || true
mv yelp-*.png facebook-*.png google.png google-150x150.png social/ 2>/dev/null || true
mv phone-icon*.png map-pin.png google-brand.png chrome/ 2>/dev/null || true

echo
echo "Downloaded: $ok ok, $fail failed"
echo "Output -> $SCRIPT_DIR (logos/ icons/ illustrations/ social/ chrome/)"
