# Visual Restore Workflow Reference

## Inputs

Use a manifest with these fields:

```json
{
  "name": "homepage",
  "url": "http://127.0.0.1:3000/",
  "viewports": [
    {
      "name": "desktop",
      "width": 1440,
      "height": 900,
      "deviceScaleFactor": 1,
      "scrollY": 0,
      "reference": "reference/desktop-1440x900.png"
    }
  ],
  "settleMs": 700,
  "waitForFonts": true,
  "ignoreSelectors": ["[data-visual-ignore]"]
}
```

Do not compare renders captured with different viewport sizes, zoom levels, device scale factors, font-loading states, scroll positions, or animation frames.

## Browser evidence

Use the Playwright CLI wrapper from the installed Playwright skill when available:

```bash
export CODEX_HOME="${CODEX_HOME:-$HOME/.codex}"
export PWCLI="$CODEX_HOME/skills/playwright/scripts/playwright_cli.sh"

"$PWCLI" --session visual-restore open http://127.0.0.1:3000/ --headed
"$PWCLI" --session visual-restore snapshot
"$PWCLI" --session visual-restore screenshot
"$PWCLI" --session visual-restore console error
"$PWCLI" --session visual-restore network
```

For a custom renderer or comparator, keep generated artifacts in `output/playwright/` or the user-specified temporary directory. The renderer must wait for `document.fonts.ready`, required image loads, and the configured settle period.

## Required checks

Record these for every viewport and iteration:

1. Fresh screenshot.
2. Page URL and title.
3. Console errors and required network failures.
4. Font and image readiness.
5. Bounding boxes for important regions, preferably marked with `data-visual-id`.
6. Computed styles for typography, colors, spacing, borders, radius, shadow, and positioning.
7. The five largest differences from the reference.

Fix differences in this order:

1. Missing resources, runtime errors, and wrong route.
2. Page width, section height, and major positions.
3. Font family, weight, size, line height, wrapping, and baseline.
4. Image crop, icon geometry, color, border, radius, and shadow.
5. Motion and hover details.

Repair no more than three high-confidence issues per iteration. Render again before making another batch.

## Stop conditions

Return `BLOCKED` and stop editing if:

- an exact font, image, icon, or interaction state is missing;
- source and reference disagree;
- viewport, scroll position, or animation state is unknown;
- a fresh screenshot cannot be produced;
- a required external resource fails;
- two consecutive iterations do not reduce the measured differences;
- a repair fixes one region but introduces a clear regression elsewhere.

When blocked, return `UNKNOWN` for the unresolved decision, explain the missing evidence and affected area, and ask one focused question. Do not generate a substitute asset or guess a value silently.

## Completion gate

Return `PASS` only when:

- no high-severity difference remains;
- required fonts and images load;
- no required console or network error remains;
- desktop and mobile viewports have been checked;
- the final render is no worse than the previous render;
- all low-confidence assumptions are confirmed or explicitly accepted.

## Report shape

```json
{
  "status": "fail",
  "iteration": 1,
  "viewport": "desktop",
  "highSeverity": [],
  "unknowns": [],
  "regressions": [],
  "evidence": {
    "screenshot": "current/desktop-1440x900.png",
    "overlay": "reports/desktop-1440x900-overlay.png"
  }
}
```
