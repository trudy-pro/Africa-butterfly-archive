# East Africa Butterfly Archive 🦋

**Historical development archive — final source not yet uploaded.**

This repository preserves successive prototype implementations of **African Butterfly Archive**, an experimental digital archive developed for both a **touchscreen installation** and a publicly accessible website. The final published website is at [Africa Butterfly Archive](https://africa-butterfly-archive.netlify.app/), but the matching final source code has not yet been included.

## Project objective

Natural-history archives are often presented as static collections. African Butterfly Archive explores how digital and spatial media can transform an archive into a dynamic, participatory experience.

Through simple scientific observations and visual representations of **wing patterns, colours, habitats and migrations**, the project invites non-scientists to discover African butterflies and explore how natural histories can be organised, perceived and remembered.

The broader ambition is to make natural-history information more accessible and support collective participation in learning, memory and open science.

## Touchscreen installation and website

**The project was presented as an interactive touchscreen installation**, alongside its web-based experience. Rather than only looking at a display, visitors could approach the screen, touch butterfly images and explore species using visual characteristics such as colours, wings and habitats.

The touchscreen was both a visual display and an interactive surface, making navigation personal, physical and playful. The website extended the archive beyond the installation setting.

**Participation was part of the design concept:** visitors were envisioned as contributors who could submit found butterflies for classification and inclusion in the archive. Historical source snapshots include a contribution page, but an end-to-end working upload, classification and publication workflow has not been independently verified.

The installation explored the intersection of **nature, memory and technology** and the possibility of a living archive that visitors actively explore and help shape.

## Browse development versions

| Version | What it documents | Source |
|---|---|---|
| [Version 1](../../tree/version-1) | Initial HTML/CSS/JavaScript prototype | Historical snapshot |
| [Version 2](../../tree/version-2) | React-based archive, migration work and assets | Historical snapshot |
| [Version 3](../../tree/version-3) | Refined archive and migration-related UI | Historical snapshot |
| [Version 4](../../tree/version-4) | `archive-butterflies.zip` — preserved butterfly source and assets | Archive snapshot; completeness not verified |
| [Version 5](../../tree/version-5) | `assets.zip` — supplementary code and assets snapshot | Experimental snapshot; completeness not verified |
| Version 6 — final | Actual deployed application source | Not yet uploaded |

The tags preserve original snapshot contents. Compare them with GitHub's **Compare** view; they were committed retrospectively and do not claim original development timestamps.

## Supporting experiments

- [`experiment-assets-snapshot`](../../tree/experiment-assets-snapshot) — original branch retained as the source of Version 5.
- [`experiment-archive-assets`](../../tree/experiment-archive-assets) — original branch retained as the source of Version 4.

Versions 4 and 5 are identified from the supplied archives. These are **version labels**, not proof of complete runnable applications or a verified development sequence. The remaining `experiment-assets-snapshot` is identified as Version 5.

## Run locally

Use one version by checking out its Git tag:

```bash
git checkout version-3
python3 -m http.server 8080
```

Then open http://localhost:8080/. Some features may rely on external services; local verification is still required.

## Documentation

- [Project concept and touchscreen installation](docs/INSTALLATION.md)

- [Development history](docs/EVOLUTION.md)
- [Source inventory](docs/SOURCES.md)

## Status

**Archive in progress.** The final Netlify source will be added to `main` after it is supplied and verified. For now `main` contains the Version 3 snapshot plus this documentation.

This is a source and design archive, not a claim that every snapshot is production-ready.
