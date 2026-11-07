const habitats = {
  All: { ringColor: "#94a3b8", dotColor: "#000000", label: "All" },
  Forest: { ringColor: "#047857", dotColor: "#047857", label: "Forest" },
  Meadow: { ringColor: "#d97706", dotColor: "#f97316", label: "Meadow" },
  Wetland: { ringColor: "#3b82f6", dotColor: "#3b82f6", label: "Wetland" },
  Garden: { ringColor: "#f43f5e", dotColor: "#ec4899", label: "Garden" },
  Mountain: { ringColor: "#64748b", dotColor: "#64748b", label: "Mountain" },
  Unknown: { ringColor: "#d4d4d8", dotColor: "#cbd5e1", label: "Unknown" },
};

const fills = [
  "#3b82f6", "#ef4444", "#fdba74", "#fbbf24", "#fef08a",
  "#15803d", "#047857", "#ffffff", "#d6d3d1", "#ef6b4a",
  "#e5b479", "#f5a623", "#f04d4f", "#f1783d", "#a6d2be",
  "#f5b38c", "#9eb8ef",
];

const habitatKeys = Object.keys(habitats).filter((habitat) => habitat !== "All");

const wingPatternOptions = [
  { label: "Spots", icon: "●" },
  { label: "Stripes", icon: "▬" },
  { label: "Eyespots", icon: "◉" },
  { label: "Scales", icon: "◇" },
  { label: "Solid", icon: "■" },
];

const wingColourOptions = [
  { label: "Blue", color: "#3b82f6" },
  { label: "Orange", color: "#f97316" },
  { label: "Yellow", color: "#fde047" },
  { label: "Coloured", gradient: "linear-gradient(135deg, #3b82f6, #ef4444 48%, #fde047)" },
  { label: "White", color: "#ffffff" },
  { label: "Green", color: "#22c55e" },
  { label: "Purple", color: "#a855f7" },
  { label: "Red", color: "#ef4444" },
];

const mimicryOptions = [
  { label: "Mimics another", icon: "🦋" },
  { label: "A model", icon: "🦋" },
  { label: "No mimicry", icon: "🦋" },
];

const migrationOptions = [
  { label: "Migratory", icon: "✈️" },
  { label: "Resident", icon: "🏠" },
  { label: "Partial Migrant", icon: "↔" },
];

const positions = [
  [24, 23, 42], [21, 31, 54], [26, 38, 34], [22, 47, 36], [28, 55, 38],
  [25, 64, 40], [31, 72, 58], [27, 79, 36], [34, 85, 42], [39, 92, 34],
  [36, 19, 32], [42, 27, 48], [38, 35, 42], [44, 48, 64], [42, 61, 44],
  [47, 73, 36], [53, 80, 44], [50, 89, 50], [56, 23, 42], [60, 33, 56],
  [58, 43, 34], [63, 52, 48], [61, 64, 40], [67, 73, 36], [70, 83, 52],
  [75, 18, 40], [78, 29, 34], [74, 40, 50], [80, 49, 34], [78, 59, 46],
  [85, 68, 34], [83, 78, 44], [30, 14, 36], [46, 14, 44], [65, 13, 42],
  [22, 68, 34], [35, 68, 34], [50, 68, 38], [66, 68, 44], [84, 56, 46],
  [20, 84, 40], [32, 78, 32], [44, 83, 38], [60, 90, 36], [73, 93, 44],
  [88, 38, 34], [89, 49, 38], [89, 72, 34], [31, 49, 46], [72, 62, 32],
  [18, 18, 34], [18, 39, 30], [18, 51, 32], [19, 76, 34], [20, 90, 30],
  [29, 44, 28], [34, 33, 30], [37, 58, 34], [45, 18, 30], [48, 94, 34],
  [55, 15, 32], [57, 37, 30], [58, 70, 28], [62, 78, 32], [69, 46, 30],
  [71, 57, 34], [76, 24, 28], [81, 15, 32], [86, 88, 30], [91, 28, 34],
];

const specimenImages = [
  "https://images.unsplash.com/photo-1564513345574-53ef1e0c82b6?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1452570053594-1b985d6ea890?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1474446932499-f997536d4e95?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1462275646964-a0e3386b89fa?auto=format&fit=crop&w=1200&q=80",
];

function makeButterflies() {
  const titles = ["African Leaf Pattern", "Savanna Wing Structure", "Wetland Edge Marking", "Forest Vein Study", "Mountain Light Form"];
  const latinNames = ["Parmelia sulcata", "Papilio demodocus", "Bicyclus anynana", "Junonia oenone", "Colotis danae"];

  return positions.map(([top, left, size], index) => ({
    id: index + 1,
    name: `Specimen ${String(index + 1).padStart(2, "0")}`,
    title: titles[index % titles.length],
    latinName: latinNames[index % latinNames.length],
    top,
    left,
    size,
    fillColor: fills[(index * 5 + 2) % fills.length],
    habitat: habitatKeys[(index * 7 + 1) % habitatKeys.length],
    completeness: 45 + ((index * 13) % 50),
    delay: (index % 9) * 0.12,
    drift: 4 + (index % 5) * 1.6,
    image: specimenImages[index % specimenImages.length],
    sectionLabel: "Scientific Display",
    paragraphOne: "This specimen showcases the intricate vein patterns found in East African butterfly wings, demonstrating nature's remarkable structural design and color transformation.",
    paragraphTwo: "The wing's natural patterning reveals underlying rhythms of adaptation and habitat signaling, creating a unique intersection of biology, taxonomy, and visual culture.",
    originLabel: "Origin",
    originValue: "Natural formation",
    wingPattern: wingPatternOptions[index % wingPatternOptions.length].label,
    wingColour: wingColourOptions[index % wingColourOptions.length].label,
    mimicry: mimicryOptions[index % mimicryOptions.length].label,
    migration: migrationOptions[index % migrationOptions.length].label,
  }));
}

const state = {
  butterflies: makeButterflies(),
  filter: "All",
  selected: null,
  hovered: null,
  armedSpecimenId: null,
  trail: [],
  query: "",
  aboutOpen: true,
  visualKeyOpen: false,
  filterOpen: false,
  trailOpen: false,
  activeFilters: {
    wingPatterns: new Set(),
    wingColours: new Set(),
    mimicry: new Set(),
    migration: new Set(),
  },
};

const els = {
  searchInput: document.getElementById("searchInput"),
  resetFilterButton: document.getElementById("resetFilterButton"),
  openFilterButton: document.getElementById("openFilterButton"),
  nodeLayer: document.getElementById("nodeLayer"),
  trailLayer: document.getElementById("trailLayer"),
  previewLayer: document.getElementById("previewLayer"),
  openAboutButton: document.getElementById("openAboutButton"),
  openKeyButton: document.getElementById("openKeyButton"),
  openTrailButton: document.getElementById("openTrailButton"),
  trailDots: document.getElementById("trailDots"),
  trailText: document.getElementById("trailText"),
  clearTrailButton: document.getElementById("clearTrailButton"),
  modalRoot: document.getElementById("modalRoot"),
};

function activeFilterCount() {
  return (
    state.activeFilters.wingPatterns.size +
    state.activeFilters.wingColours.size +
    state.activeFilters.mimicry.size +
    state.activeFilters.migration.size
  );
}

function getVisibleButterflies() {
  const q = state.query.trim().toLowerCase();

  return state.butterflies.filter((butterfly) => {
    const matchesHabitat = state.filter === "All" || butterfly.habitat === state.filter;

    const matchesQuery =
      !q ||
      butterfly.name.toLowerCase().includes(q) ||
      butterfly.habitat.toLowerCase().includes(q) ||
      butterfly.title.toLowerCase().includes(q) ||
      butterfly.wingPattern.toLowerCase().includes(q) ||
      butterfly.wingColour.toLowerCase().includes(q) ||
      butterfly.mimicry.toLowerCase().includes(q) ||
      butterfly.migration.toLowerCase().includes(q);

    const matchesWingPattern = state.activeFilters.wingPatterns.size === 0 || state.activeFilters.wingPatterns.has(butterfly.wingPattern);
    const matchesWingColour = state.activeFilters.wingColours.size === 0 || state.activeFilters.wingColours.has(butterfly.wingColour);
    const matchesMimicry = state.activeFilters.mimicry.size === 0 || state.activeFilters.mimicry.has(butterfly.mimicry);
    const matchesMigration = state.activeFilters.migration.size === 0 || state.activeFilters.migration.has(butterfly.migration);

    return matchesHabitat && matchesQuery && matchesWingPattern && matchesWingColour && matchesMimicry && matchesMigration;
  });
}

function render() {
  renderNodes();
  renderTrail();
  renderPreview();
  renderControls();
  renderModals();
}

function renderNodes() {
  const visible = getVisibleButterflies();

  els.nodeLayer.innerHTML = visible.map((butterfly) => {
    const touchSize = Math.max(butterfly.size + 28, 64);
    const isSelected = state.selected?.id === butterfly.id;

    return `
      <button
        class="node-button"
        type="button"
        data-id="${butterfly.id}"
        aria-label="${butterfly.name}, ${butterfly.habitat}, ${butterfly.completeness}% complete"
        style="
          top:${butterfly.top}%;
          left:${butterfly.left}%;
          width:${touchSize}px;
          height:${touchSize}px;
          margin-left:${-touchSize / 2}px;
          margin-top:${-touchSize / 2}px;
          --drift:${butterfly.drift}px;
          animation-duration:${4 + (butterfly.id % 6) * 0.45}s;
          animation-delay:${butterfly.delay}s;
        "
      >
        <span
          class="node-core"
          style="
            width:${butterfly.size}px;
            height:${butterfly.size}px;
            --ring:${habitats[butterfly.habitat].ringColor};
            --fill:${butterfly.fillColor};
          "
        ></span>
        ${isSelected ? `<span class="node-halo"></span>` : ""}
      </button>
    `;
  }).join("");

  els.nodeLayer.querySelectorAll("[data-id]").forEach((button) => {
    const butterfly = state.butterflies.find((item) => item.id === Number(button.dataset.id));

    button.addEventListener("mouseenter", () => {
      state.hovered = butterfly;
      renderPreview();
    });

    button.addEventListener("mouseleave", () => {
      state.hovered = null;
      renderPreview();
    });

    button.addEventListener("focus", () => {
      state.hovered = butterfly;
      renderPreview();
    });

    button.addEventListener("blur", () => {
      state.hovered = null;
      renderPreview();
    });

    button.addEventListener("click", () => selectButterfly(butterfly));
  });
}

function selectButterfly(butterfly) {
  state.hovered = butterfly;
  state.trail = [...state.trail.slice(-13), butterfly];

  if (state.armedSpecimenId === butterfly.id) {
    state.hovered = null;
    state.armedSpecimenId = null;
    state.selected = butterfly;
  } else {
    state.armedSpecimenId = butterfly.id;
  }

  render();
}

function renderPreview() {
  if (!state.hovered || state.selected) {
    els.previewLayer.innerHTML = "";
    return;
  }

  const specimen = state.hovered;
  els.previewLayer.innerHTML = `
    <div class="preview-circle" style="top:${specimen.top}%;left:${specimen.left}%;">
      <img src="${specimen.image}" alt="" />
    </div>
  `;
}

function renderTrail() {
  if (state.trail.length < 2) {
    els.trailLayer.innerHTML = "";
    return;
  }

  const dots = [];

  for (let index = 1; index < state.trail.length; index += 1) {
    const from = state.trail[index - 1];
    const to = state.trail[index];
    const dx = to.left - from.left;
    const dy = to.top - from.top;
    const distance = Math.sqrt(dx * dx + dy * dy);
    const count = Math.max(5, Math.floor(distance / 2.3));

    for (let step = 1; step < count; step += 1) {
      const t = step / count;
      dots.push({
        top: from.top + dy * t,
        left: from.left + dx * t,
        size: 4 + ((step + index) % 3),
        opacity: (0.28 + t * 0.55) * (index === state.trail.length - 1 ? 1 : 0.62),
      });
    }
  }

  els.trailLayer.innerHTML = dots.map((dot) => `
    <span
      class="trail-dot"
      style="
        top:${dot.top}%;
        left:${dot.left}%;
        width:${dot.size}px;
        height:${dot.size}px;
        opacity:${dot.opacity};
      "
    ></span>
  `).join("");
}

function renderControls() {
  const count = activeFilterCount();
  els.resetFilterButton.textContent = count > 0 ? `${count} Filters` : state.filter;

  const hasTrail = state.trail.length > 1;
  const visibleDots = Math.max(5, Math.min(state.trail.length, 8));

  els.trailDots.innerHTML = Array.from({ length: visibleDots }).map((_, index) => `
    <span class="status-dot ${hasTrail && index < Math.min(state.trail.length, visibleDots) ? "active" : ""}"></span>
  `).join("");

  els.trailText.textContent = hasTrail ? `Trail: ${state.trail.length} stops` : "Touch butterflies to build a trail";
  els.clearTrailButton.disabled = !hasTrail;
}

function renderModals() {
  const output = [];

  if (state.aboutOpen) output.push(aboutModal());
  if (state.visualKeyOpen) output.push(visualKeyModal());
  if (state.filterOpen) output.push(filterModal());
  if (state.selected) output.push(specimenModal(state.selected));
  if (state.trailOpen) output.push(trailModal());

  els.modalRoot.innerHTML = output.join("");

  els.modalRoot.querySelectorAll("[data-close]").forEach((button) => {
    button.addEventListener("click", closePanelModals);
  });

  els.modalRoot.querySelectorAll(".modal-backdrop").forEach((backdrop) => {
    backdrop.addEventListener("click", (event) => {
      if (event.target === backdrop) closePanelModals();
    });
  });

  els.modalRoot.querySelectorAll("[data-filter-group]").forEach((button) => {
    button.addEventListener("click", () => {
      toggleFilter(button.dataset.filterGroup, button.dataset.filterValue);
    });
  });

  const reset = els.modalRoot.querySelector("[data-reset-filters]");
  if (reset) reset.addEventListener("click", resetAllFilters);

  const specimenClose = els.modalRoot.querySelector("[data-close-specimen]");
  if (specimenClose) {
    specimenClose.addEventListener("click", () => {
      state.selected = null;
      render();
    });
  }

  const clear = els.modalRoot.querySelector("[data-clear-trail]");
  if (clear) clear.addEventListener("click", clearTrail);

  els.modalRoot.querySelectorAll("[data-trail-select]").forEach((button) => {
    button.addEventListener("click", () => {
      const butterfly = state.butterflies.find((item) => item.id === Number(button.dataset.trailSelect));
      state.trailOpen = false;
      selectButterfly(butterfly);
    });
  });
}

function closePanelModals() {
  state.aboutOpen = false;
  state.visualKeyOpen = false;
  state.filterOpen = false;
  state.trailOpen = false;
  state.selected = null;
  render();
}

function resetAllFilters() {
  state.filter = "All";
  state.query = "";
  els.searchInput.value = "";
  state.activeFilters = {
    wingPatterns: new Set(),
    wingColours: new Set(),
    mimicry: new Set(),
    migration: new Set(),
  };
  render();
}

function toggleFilter(group, value) {
  const set = state.activeFilters[group];
  if (set.has(value)) set.delete(value);
  else set.add(value);
  render();
}

function clearTrail() {
  state.trail = [];
  state.selected = null;
  state.trailOpen = false;
  render();
}

function shell({ align, className, titleId, content }) {
  return `
    <div class="modal-backdrop ${align}">
      <section class="modal-panel ${className}" role="dialog" aria-modal="true" aria-labelledby="${titleId}">
        <button class="modal-close" type="button" data-close aria-label="Close dialog">×</button>
        ${content}
      </section>
    </div>
  `;
}

function aboutModal() {
  return shell({
    align: "left",
    className: "about-modal",
    titleId: "about-title",
    content: `
      <h2 id="about-title">About the archive</h2>
      <p class="about-copy">
        This an evolving archive of butterfly records. You will explore connections through colour, habitat, completeness and discovery. Journey through the vibrant world of East African butterflies, where each wing pattern tells a story millions of years in the making amd color is never accidental it is strategy.These delicate creatures, with wings painted in nature's most vibrant palette, represent millions of years of adaptation to one of Earth's most diverse ecosystems.
      </p>
      <div class="about-metrics">
        ${aboutMetric("records", "⌘", "70", "Records")}
        ${aboutMetric("habitats", "⌂", "6", "Habitats")}
        ${aboutMetric("complete", "◎", "68%", "Avg. completeness")}
      </div>
      <div class="about-footer">Touch any circle to explore. Your path is saved as black breadcrumb dots.</div>
    `,
  });
}

function aboutMetric(type, icon, value, label) {
  return `
    <div class="about-metric">
      <div class="metric-icon ${type}">${icon}</div>
      <div>
        <div class="metric-value">${value}</div>
        <div class="metric-label">${label}</div>
      </div>
    </div>
  `;
}

function visualKeyModal() {
  const pills = [
    ["Forest", habitats.Forest.dotColor],
    ["Meadow", habitats.Meadow.dotColor],
    ["Wetland", habitats.Wetland.dotColor],
    ["Garden", habitats.Garden.dotColor],
    ["Mountain", habitats.Mountain.dotColor],
    ["Unknown", habitats.Unknown.dotColor],
  ].map(([label, color]) => `
    <span class="legend-pill"><span class="legend-dot" style="background:${color}"></span>${label}</span>
  `).join("");

  return shell({
    align: "right",
    className: "visual-modal",
    titleId: "visual-title",
    content: `
      <h2 id="visual-title">Visual key</h2>
      <div class="key-rows">
        <div class="key-row">
          <span class="key-symbol fill-symbol"></span>
          <div><div class="key-title">Fill = butterfly appearance</div><div class="key-detail">Dominant wing colour</div></div>
        </div>
        <div class="key-row">
          <span class="key-symbol ring-symbol"></span>
          <div><div class="key-title">Ring = habitat</div><div class="key-detail">Where the species lives</div></div>
        </div>
        <div class="key-row">
          <span class="key-symbol black-dots-symbol">••••</span>
          <div><div class="key-title">Black dots = navigation history</div><div class="key-detail">Your path through the archive</div></div>
        </div>
      </div>
      <div class="legend-pills">
        <span class="legend-pill all">All</span>
        ${pills}
      </div>
    `,
  });
}

function filterModal() {
  return shell({
    align: "right",
    className: "filter-modal",
    titleId: "filter-title",
    content: `
      <div class="filter-header">
        <h2 id="filter-title">Filters</h2>
        <button class="reset-filter" type="button" data-reset-filters>Reset Filters</button>
      </div>

      <div class="filter-sections">
        ${filterSection("Butterfly Wing Patterns", wingPatternOptions, "wingPatterns")}
        ${filterSection("Wing Colour", wingColourOptions, "wingColours", "colour")}
        ${filterSection("Mimicry", mimicryOptions, "mimicry")}
        ${filterSection("Migration Seasons", migrationOptions, "migration")}
      </div>
    `,
  });
}

function filterSection(title, options, group, type = "icon") {
  return `
    <section>
      <h3 class="filter-section-title">${title}</h3>
      <div class="filter-chip-grid">
        ${options.map((option) => filterChip(option, group, type)).join("")}
      </div>
    </section>
  `;
}

function filterChip(option, group, type) {
  const active = state.activeFilters[group].has(option.label);

  const symbol = type === "colour"
    ? `<span class="color-symbol" style="background:${option.gradient || option.color || "#fff"}"></span>`
    : `<span class="chip-symbol">${option.icon}</span>`;

  return `
    <button class="filter-chip ${active ? "active" : ""}" type="button" data-filter-group="${group}" data-filter-value="${option.label}">
      ${symbol}
      <span>${option.label}</span>
    </button>
  `;
}

function specimenModal(specimen) {
  return `
    <div class="modal-backdrop specimen-backdrop">
      <section class="specimen-panel" role="dialog" aria-modal="true" aria-labelledby="specimen-title">
        <button class="specimen-close" type="button" data-close-specimen aria-label="Close specimen details">×</button>
        <div class="specimen-image-circle">
          <img src="${specimen.image}" alt="${specimen.name}" />
        </div>
        <div class="specimen-info-circle">
          <div>
            <div class="science-icons">
              <span class="science-icon">☘</span>
              <span class="science-icon">i</span>
              <span class="science-icon">⌖</span>
            </div>
            <div class="science-label">${specimen.sectionLabel}</div>
            <h2 id="specimen-title" class="specimen-title">${specimen.title}</h2>
            <div class="latin-name">${specimen.latinName}</div>
            <p class="specimen-copy">${specimen.paragraphOne}</p>
            <p class="specimen-copy">${specimen.paragraphTwo}</p>
            <div class="origin-label">${specimen.originLabel}: ${specimen.originValue}</div>
            <div class="specimen-meta">${specimen.name} · ${specimen.habitat} · ${specimen.completeness}% complete</div>
          </div>
        </div>
      </section>
    </div>
  `;
}

function trailModal() {
  const hasTrail = state.trail.length > 0;
  const list = hasTrail
    ? `<div class="trail-list">${state.trail.map((item, index) => `
      <button class="trail-item" type="button" data-trail-select="${item.id}">
        <span class="trail-number">${index + 1}</span>
        <span class="trail-specimen-dot" style="--ring:${habitats[item.habitat].ringColor};--fill:${item.fillColor}"></span>
        <span>
          <span class="trail-title">${item.name}</span>
          <span class="trail-subtitle">${item.habitat} · ${item.completeness}% complete</span>
        </span>
        <span class="trail-arrow">›</span>
      </button>
    `).join("")}</div>`
    : `<div class="trail-empty">
      <div>
        <div class="trail-empty-dots"><span class="trail-empty-dot"></span><span class="trail-empty-dot"></span><span class="trail-empty-dot"></span></div>
        <div class="trail-empty-title">No trail yet</div>
        <div class="trail-empty-subtitle">Touch butterfly circles to create your first navigation path.</div>
      </div>
    </div>`;

  return shell({
    align: "center",
    className: "trail-modal",
    titleId: "trail-title",
    content: `
      <h2 id="trail-title">Navigation trail</h2>
      <p class="trail-intro">These are the butterflies you have touched. Tap any stop to revisit it, or clear the trail to start a new path.</p>
      <div class="trail-list-shell">${list}</div>
      <div class="trail-modal-footer">
        <div class="trail-saved-count"><span class="black-mini-dot"></span>${state.trail.length} ${state.trail.length === 1 ? "stop" : "stops"} saved</div>
        <button class="clear-button" type="button" data-clear-trail ${hasTrail ? "" : "disabled"}>Clear trail</button>
      </div>
    `,
  });
}

els.searchInput.addEventListener("input", (event) => {
  state.query = event.target.value;
  render();
});

els.resetFilterButton.addEventListener("click", resetAllFilters);

els.openFilterButton.addEventListener("click", () => {
  state.filterOpen = true;
  render();
});

els.openAboutButton.addEventListener("click", () => {
  state.aboutOpen = true;
  render();
});

els.openKeyButton.addEventListener("click", () => {
  state.visualKeyOpen = true;
  render();
});

els.openTrailButton.addEventListener("click", () => {
  state.trailOpen = true;
  render();
});

els.clearTrailButton.addEventListener("click", clearTrail);

render();
