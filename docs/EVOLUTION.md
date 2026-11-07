# Design and engineering evolution

This document records five labelled historical stages of the **East Africa Butterfly Archive**. The version labels represent archived source snapshots, **not** the dates the work was originally created or committed to GitHub.

The currently deployed final application has **not yet been added** to this repository. The `main` branch contains the Version 3 application code plus documentation.

## Context: touchscreen installation

This was not exclusively a web application. The project was also realised as a **touchscreen installation**, in which visitors engaged directly with butterfly imagery and explored species through visual characteristics. Its companion website extended the archive beyond the installation environment.

The installation aimed to make natural-history exploration playful and accessible to non-specialists. Collective participation, including submitting found butterflies, formed part of the wider design concept; the actual implementation of the complete contribution workflow still requires verification.

See [Project concept and touchscreen installation](INSTALLATION.md).

## Version comparison

| | Version 1 | Version 2 | Version 3 | `main` |
|---|---|---|---|---|
| **Approach** | HTML/CSS/JavaScript prototype | React rebuild | Refined React app | Version 3 app with additional documentation |
| **Files** | 5 | 107 | 129 | 131 |
| **Approximate source size** | 46 KB | 73 MB | 134 MB | 134 MB |
| **Main implementation** | `index.html`, `script.js`, `styles.css` | `index.html` loads `app.jsx`, using CDN-hosted React, Tailwind CSS and Babel | Substantial changes to `app.jsx` (~1,150 lines changed) | App code unchanged from Version 3 |
| **Pages and interactions** | Map, filters, About, Key and navigation trail | Archive plus migration display | Archive plus a contribution form (`contribute.html`) | Same as Version 3 |
| **Butterfly imagery** | No butterfly image collection | 81 images added | 11 additional images; 69 image files replaced | Same as Version 3 |
| **Migration exploration** | Not included | Initial migration files, including `butterfly-migration/public/` and `botswana.js` | Additional `revised migration/` display (~1,600 lines) | Same as Version 3 |
| **Device support** | Desktop-oriented | Desktop-oriented | Touch-screen-oriented changes indicated by source version label | Same as Version 3 |
| **Deployment configuration** | No hosting configuration in snapshot | `netlify.toml` added | Netlify configuration present | Same as Version 3 |
| **Documentation** | Basic README | Updated README | Updated README | Expanded README, `docs/EVOLUTION.md`, `docs/SOURCES.md` |

Counts and approximate sizes are from the supplied repository comparison; they describe the snapshots rather than measured UX or performance outcomes.

## Version 1 — Initial prototype

**Technology:** HTML, CSS and JavaScript.

The initial version focused on an exploratory map interface with filters, About and Key sections, and a navigation trail. It established the first approach to navigating butterfly-related information before the application was rebuilt.

**Design questions for retrospective documentation:** What worked in the map-first navigation? Which limitations led to a change in structure or technology? These motivations have not yet been documented.

[Browse Version 1](../../tree/version-1)

## Version 2 — React rebuild and image archive

**Technology:** React with JSX, Tailwind CSS and Babel loaded from CDNs.

The application was reconstructed around a React-based archive. This stage added a collection of butterfly images and an initial migration display.

### Changes from Version 1

- **108 files changed** in the comparison.
- The earlier `script.js` and `styles.css` were removed as part of the transition.
- **81 butterfly images** were added.
- Migration-related source files and Netlify configuration appeared.

This is a major **implementation and information-presentation change**, not simply a styling update. The precise design reasons still need to be recorded from original notes or the creator's recollection.

[Browse Version 2](../../tree/version-2) · [Compare Version 1 → Version 2](../../compare/version-1...version-2)

## Version 3 — Refinement, contribution and touch interaction

The third version substantially updated the React application and expanded the available interactions.

### Changes from Version 2

- **97 files changed** in the comparison.
- `app.jsx` underwent extensive changes (approximately **1,150 changed lines**).
- A separate **`contribute.html`** page was added for butterfly-note submissions.
- A new **`revised migration/`** display was introduced.
- **11 butterfly images** were added and **69 existing image files** replaced.
- Source labels indicate **touch-screen-oriented refinements**; the project was also realised as a touchscreen installation, although the specific installed build has not yet been matched to a version tag.

The increased archive size does not by itself prove that images are higher-resolution; the image formats and dimensions would need to be inspected separately.

[Browse Version 3](../../tree/version-3) · [Compare Version 2 → Version 3](../../compare/version-2...version-3)

## Version 4 — Archive assets and code snapshot

**Source:** `archive-butterflies.zip`, preserved on the [`version-4`](../../tree/version-4) branch. The original [`experiment-archive-assets`](../../tree/experiment-archive-assets) branch remains available as a duplicate reference to the supplied snapshot.

The uploaded archive contains butterfly assets and supporting code under `archive-butterflies/`. It has been identified by the project creator as **Version 4**. It has not yet been verified as a complete standalone application, and no specific new features or comparative improvements are claimed for it without further inspection.

[Browse Version 4](../../tree/version-4)

## Version 5 — Supporting source and assets snapshot

**Source:** `assets.zip`, preserved on the [`version-5`](../../tree/version-5) branch. The original [`experiment-assets-snapshot`](../../tree/experiment-assets-snapshot) branch remains available for traceability.

This snapshot contains supplementary frontend code and assets. It is now labelled **Version 5** in the archive. Its completeness and precise code differences from Version 4 have not been established, so the documentation does not claim new functionality or a verified chronological progression.

[Browse Version 5](../../tree/version-5)

## Current `main` branch

The application code on `main` matches Version 3. Its additional changes are documentation files, including this history and a source inventory.

[Browse current `main`](../../tree/main) · [Compare Version 3 → main](../../compare/version-3...main)

## Additional experimental snapshots

The two additional archives are labelled: `archive-butterflies.zip` as Version 4 and `assets.zip` as Version 5. Their original experimental branches remain for traceability.

- [Version 5 source archive (original branch)](../../tree/experiment-assets-snapshot)
- [Version 4 source archive (original branch)](../../tree/experiment-archive-assets)

The exact code differences and chronological relationships of Versions 4 and 5 to earlier versions still require verification.

## What comes next

- Add labelled screenshots showing the actual UI in Versions 1, 2 and 3.
- Document the design reasoning behind the React rebuild, migration visualisation, contribution flow and touch-screen changes.
- Add photographs of the touchscreen installation, its display specifications if available, and the exact application version shown.
- Note verified usability findings or technical outcomes where evidence is available.
- Add the source corresponding to the final [Netlify application](https://africa-butterfly-archive.netlify.app/) when available and verified; only then designate its release as final.

**A note on history:** These snapshots were assembled retrospectively. GitHub comparisons establish code differences between preserved versions, not the dates or motivations of the original development work.
