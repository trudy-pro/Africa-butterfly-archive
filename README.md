# East Africa Butterfly Archive 🦋

**Historical development archive — final source not yet uploaded.**

This repository preserves successive prototype implementations of an interactive East African butterfly archive. The final published website is at [Africa Butterfly Archive](https://africa-butterfly-archive.netlify.app/), but the matching final source code has not yet been included.

## Browse development versions

| Version | What it documents | Source |
|---|---|---|
| [Version 1](../../tree/version-1) | Initial HTML/CSS/JavaScript prototype | Historical snapshot |
| [Version 2](../../tree/version-2) | React-based archive, migration work and assets | Historical snapshot |
| [Version 3](../../tree/version-3) | Refined archive and migration-related UI | Historical snapshot |
| [Version 4](../../tree/version-4) | `archive-butterflies.zip` — preserved butterfly source and assets | Archive snapshot; completeness not verified |
| Version 5 | Not yet identified | Pending review |
| Version 6 — final | Actual deployed application source | Not yet uploaded |

The tags preserve original snapshot contents. Compare them with GitHub's **Compare** view; they were committed retrospectively and do not claim original development timestamps.

## Supporting experiments

- [`experiment-assets-snapshot`](../../tree/experiment-assets-snapshot) — supplied small supporting assets/source archive.
- [`experiment-archive-assets`](../../tree/experiment-archive-assets) — original branch retained as the source of Version 4.

Version 4 is now identified as the uploaded `archive-butterflies.zip` snapshot. This establishes its **version label**, but does not yet prove that it is a complete runnable application or chronologically newer than Version 3. The remaining `experiment-assets-snapshot` is still unassigned.

## Run locally

Use one version by checking out its Git tag:

```bash
git checkout version-3
python3 -m http.server 8080
```

Then open http://localhost:8080/. Some features may rely on external services; local verification is still required.

## Documentation

- [Development history](docs/EVOLUTION.md)
- [Source inventory](docs/SOURCES.md)

## Status

**Archive in progress.** The final Netlify source will be added to `main` after it is supplied and verified. For now `main` contains the Version 3 snapshot plus this documentation.

This is a source and design archive, not a claim that every snapshot is production-ready.
