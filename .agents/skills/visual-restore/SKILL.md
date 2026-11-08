---
name: visual-restore
description: "Run evidence-based visual restoration of web pages from screenshots or HTML design references, including fixed-viewport rendering, visual comparison, iterative repair, and explicit blocking when evidence is missing."
---

# Visual Restore

Use this skill when the user asks to reproduce, port, match, or pixel-tune a web design from a screenshot, Figma frame, Claude artifact, standalone HTML design, or another rendered reference.

The goal is a verified visual match, not a plausible implementation. Treat the rendered reference and its manifest as the source of truth. Use the browser to produce fresh evidence after every meaningful repair.

## Required workflow

1. Read the project and the visual reference before editing.
2. Read `references/visual-restore-workflow.md` for the evidence contract and stop conditions.
3. Confirm the reference URL or screenshot, exact viewport, device scale factor, scroll position, fonts, assets, and stable animation state. Record unknowns before implementation.
4. Inspect the existing design source for CSS variables, reset rules, font loading, pseudo-elements, absolute/fixed layers, JavaScript state, and external assets. Do not assume the visible HTML is the whole visual system.
5. Implement the smallest coherent slice of the page.
6. Render it in a real browser at the declared viewport. Prefer the Playwright CLI wrapper when available. Wait for fonts, images, and the declared stable state before capturing evidence.
7. Compare the fresh render against the reference using screenshot evidence plus DOM geometry and computed styles. Check console errors and required network failures.
8. Repair at most three high-confidence, high-impact differences per iteration. Keep the change localized and render again.
9. Continue until the completion gate passes, or stop with `BLOCKED` when an evidence gap prevents a reliable decision.

## Evidence and uncertainty

- Label decisions `HIGH`, `MEDIUM`, or `LOW` confidence.
- Never silently invent a missing font, icon, image, copy string, interaction state, or breakpoint.
- If source and reference conflict, preserve the conflict as an unresolved question instead of choosing whichever is convenient.
- Do not declare success because the code structure looks reasonable or because one viewport looks close.
- Do not use a single pixel-diff score as the only verdict; combine screenshot comparison with layout and computed-style checks.

When blocked, report:

```text
BLOCKED
Missing evidence: ...
Affected area: ...
Why it prevents a reliable decision: ...
One focused question: ...
```

## Scope and side effects

- Keep reference screenshots, reports, and temporary browser artifacts under the user-designated temporary directory or `output/playwright/`; do not add them to production assets unless requested.
- Do not commit, push, deploy, or change unrelated files unless the user separately asks.
- Preserve existing project design-system conventions after the reference has been understood.

## Supporting reference

Read [visual-restore-workflow.md](references/visual-restore-workflow.md) when executing the full loop, setting up a manifest, defining report output, or deciding whether to stop.
