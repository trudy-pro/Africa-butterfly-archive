
const { useMemo, useState } = React;

const AnimatePresence = ({ children }) => children;
const motion = new Proxy({}, {
  get: (_target, tag) =>
    React.forwardRef(({ initial, animate, exit, transition, layoutId, ...props }, ref) =>
      React.createElement(tag, { ...props, ref })
    ),
});

function SearchIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </svg>
  );
}

function SlidersIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 6h10" />
      <path d="M18 6h2" />
      <path d="M4 12h3" />
      <path d="M11 12h9" />
      <path d="M4 18h12" />
      <circle cx="16" cy="6" r="2" />
      <circle cx="9" cy="12" r="2" />
      <circle cx="18" cy="18" r="2" />
    </svg>
  );
}

function CloseIcon({ size = 34 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

function EraserIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m7 21-4-4 10-10 4 4-10 10Z" />
      <path d="m17 7 2-2a2.8 2.8 0 0 1 4 4l-2 2" />
      <path d="M14 20h7" />
      <path d="m5 19 4-4" />
    </svg>
  );
}

function KeyIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="7.5" cy="14.5" r="4.5" />
      <path d="M11 11 21 1" />
      <path d="m16 6 2 2" />
      <path d="m18 4 2 2" />
    </svg>
  );
}

function InfoIcon() {
  return <span className="text-[24px] font-black leading-none" aria-hidden="true">i</span>;
}

function LeafIcon() {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M11 20A7 7 0 0 1 4 13C4 7 10 4 20 4c0 10-3 16-9 16Z" />
      <path d="M8 12c2 0 4-1 6-3" />
    </svg>
  );
}

function CircleInfoIcon() {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="8" />
      <path d="M12 8h.01" />
      <path d="M11 12h1v5h1" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 21s-6-5.2-6-10a6 6 0 1 1 12 0c0 4.8-6 10-6 10Z" />
      <circle cx="12" cy="11" r="2" />
    </svg>
  );
}

function TrashIcon({ size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 6h18" />
      <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      <path d="M19 6 18 21H6L5 6" />
      <path d="M10 11v6" />
      <path d="M14 11v6" />
    </svg>
  );
}

function ClearXIcon() {
  return (
    <span className="grid h-4 w-4 place-items-center rounded-[4px] border-2 border-current text-[11px] leading-none" aria-hidden="true">
      ×
    </span>
  );
}

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
  { label: "Black", color: "#1f2937" },
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
  [16, 58, 28], [24, 12, 30], [27, 93, 28], [40, 11, 32], [43, 96, 30],
  [52, 52, 28], [64, 12, 30], [68, 95, 32], [88, 55, 28], [92, 76, 30],
];

const uploadedButterflyProfiles = [
  { image: "assets/archive-butterflies/butterfly-01.jpg", wingColour: "Orange" },
  { image: "assets/archive-butterflies/butterfly-10.jpg", wingColour: "Coloured" },
  { image: "assets/archive-butterflies/butterfly-11.jpg", wingColour: "white" },
  { image: "assets/archive-butterflies/butterfly-12.jpg", wingColour: "Coloured" },
  { image: "assets/archive-butterflies/butterfly-13.jpg", wingColour: "Black" },
  { image: "assets/archive-butterflies/butterfly-14.jpg", wingColour: "Black" },
  { image: "assets/archive-butterflies/butterfly-15.jpg", wingColour: "Yellow" },
  { image: "assets/archive-butterflies/butterfly-16.jpg", wingColour: "black" },
  { image: "assets/archive-butterflies/butterfly-17.jpg", wingColour: "White" },
  { image: "assets/archive-butterflies/butterfly-18.jpg", wingColour: "Coloured" },
  { image: "assets/archive-butterflies/butterfly-19.jpg", wingColour: "Coloured" },
  { image: "assets/archive-butterflies/butterfly-02.jpg", wingColour: "Orange" },
  { image: "assets/archive-butterflies/butterfly-20.jpg", wingColour: "Coloured" },
  { image: "assets/archive-butterflies/butterfly-21.jpg", wingColour: "Orange" },
  { image: "assets/archive-butterflies/butterfly-22.jpg", wingColour: "brown" },
  { image: "assets/archive-butterflies/butterfly-23.png", wingColour: "Green" },
  { image: "assets/archive-butterflies/butterfly-24.png", wingColour: "White" },
  { image: "assets/archive-butterflies/butterfly-25.png", wingColour: "Coloured" },
  { image: "assets/archive-butterflies/butterfly-26.png", wingColour: "Orange" },
  { image: "assets/archive-butterflies/butterfly-27.png", wingColour: "White" },
  { image: "assets/archive-butterflies/butterfly-28.png", wingColour: "Green" },
  { image: "assets/archive-butterflies/butterfly-29.png", wingColour: "Orange" },
  { image: "assets/archive-butterflies/butterfly-03.jpg", wingColour: "Green" },
  { image: "assets/archive-butterflies/butterfly-30.png", wingColour: "Coloured" },
  { image: "assets/archive-butterflies/butterfly-32.jpg", wingColour: "Coloured" },
  { image: "assets/archive-butterflies/butterfly-04.jpg", wingColour: "Orange" },
  { image: "assets/archive-butterflies/butterfly-05.jpg", wingColour: "Orange" },
  { image: "assets/archive-butterflies/butterfly-51.jpg", wingColour: "Orange" },
  { image: "assets/archive-butterflies/butterfly-06.jpg", wingColour: "Green" },
  { image: "assets/archive-butterflies/butterfly-07.jpg", wingColour: "Red" },
  { image: "assets/archive-butterflies/butterfly-08.jpg", wingColour: "Coloured" },
  { image: "assets/archive-butterflies/butterfly-09.jpg", wingColour: "Orange" },
  { image: "assets/archive-butterflies/butterfly-31.jpg", wingColour: "Coloured" },
  { image: "assets/archive-butterflies/butterfly-33.jpg", wingColour: "Green" },
  { image: "assets/archive-butterflies/butterfly-33.jpg", wingColour: "Orange" },
  { image: "assets/archive-butterflies/butterfly-34.jpg", wingColour: "White" },
  { image: "assets/archive-butterflies/butterfly-35.jpg", wingColour: "Black" },
  { image: "assets/archive-butterflies/butterfly-36.jpg", wingColour: "Orange" },
  { image: "assets/archive-butterflies/butterfly-37.jpg", wingColour: "Coloured" },
  { image: "assets/archive-butterflies/butterfly-38.jpg", wingColour: "Blue" },
  { image: "assets/archive-butterflies/butterfly-39.jpg", wingColour: "Coloured" },
  { image: "assets/archive-butterflies/butterfly-40.jpg", wingColour: "Coloured" },
  { image: "assets/archive-butterflies/butterfly-41.jpg", wingColour: "Yellow" },
  { image: "assets/archive-butterflies/butterfly-42.jpg", wingColour: "Blue" },
  { image: "assets/archive-butterflies/butterfly-43.jpg", wingColour: "White" },
  { image: "assets/archive-butterflies/butterfly-44.jpg", wingColour: "Green" },
  { image: "assets/archive-butterflies/butterfly-46.jpg", wingColour: "Green" },
  { image: "assets/archive-butterflies/butterfly-47.jpg", wingColour: "Green" },
  { image: "assets/archive-butterflies/butterfly-48.jpg", wingColour: "Orange" },
  { image: "assets/archive-butterflies/butterfly-49.jpg", wingColour: "Green" },
  { image: "assets/archive-butterflies/butterfly-50.jpg", wingColour: "Coloured" },
  { image: "assets/archive-butterflies/butterfly-57.jpg", wingColour: "Yellow" },
];

const uploadNamePools = {
  Orange: ["Sunset Leaf", "Ember Glider", "Amber Drift", "Copper Wisp", "Tangerine Ray", "Apricot Veil", "Citrine Wing", "Ochre Spark", "Saffron Breeze"],
  Green: ["Emerald Surge", "Meadow Whisper", "Jade Float", "Mint Wing", "Verdant Glide", "Fern Mirror", "Moss Flicker", "Olive Span"],
  Red: ["Crimson Spark", "Ruby Sail", "Scarlet Flicker", "Garnet Pulse", "Cerise Wing", "Flame Serenade", "Burgundy Bloom"],
  Coloured: ["Prism Bloom", "Spectrum Wing", "Rainbow Veil", "Aurora Glide", "Kaleidoscope Drift", "Polychrome Wisp"],
  Yellow: ["Golden Ribbon", "Lemon Flicker", "Sunbeam Glide"],
  White: ["Ivory Mist", "Pearl Wing", "Snow Lace"],
  Blue: ["Azure Veil", "Cobalt Wave", "Sapphire Drift"],
  Purple: ["Violet Halo", "Amethyst Sail", "Lilac Whisper"],
  Black: ["Shadow Glide", "Onyx Wing", "Raven Sail"],
};

const uploadHabitatPools = {
  Orange: ["Garden", "Forest", "Meadow"],
  Green: ["Meadow", "Wetland", "Garden"],
  Red: ["Forest", "Mountain", "Garden"],
  Coloured: ["Unknown", "Garden", "Forest"],
  Yellow: ["Meadow", "Garden", "Wetland"],
  White: ["Wetland", "Forest", "Mountain"],
  Blue: ["Mountain", "Wetland", "Forest"],
  Purple: ["Forest", "Mountain", "Garden"],
  Black: ["Forest", "Mountain", "Unknown"],
};

const uploadColourPatterns = {
  Orange: ["Stripes", "Spots", "Eyespots"],
  Green: ["Spots", "Stripes", "Solid"],
  Red: ["Spots", "Eyespots", "Scales"],
  Coloured: ["Scales", "Spots", "Stripes"],
  Yellow: ["Spots", "Stripes"],
  White: ["Spots", "Stripes"],
  Blue: ["Eyespots", "Stripes", "Spots"],
  Black: ["Spots", "Scales", "Stripes"],
  Purple: ["Spots", "Scales", "Stripes"],
};

const butterflyProfiles = [
  { name: "Monarch Flower", latinName: "Danaus reference form", habitat: "Garden", wingColour: "Orange", wingPattern: "Stripes", image: "assets/archive-butterflies/butterfly-01.jpg" },
  { name: "Golden Leafwing", latinName: "Cethosia reference form", habitat: "Forest", wingColour: "Orange", wingPattern: "Stripes", image: "assets/archive-butterflies/butterfly-02.jpg" },
  { name: "Amber Leafwing", latinName: "Anaea reference form", habitat: "Forest", wingColour: "Orange", wingPattern: "Eyespots", image: "assets/archive-butterflies/butterfly-03.jpg" },
  { name: "Map Hairstreak", latinName: "Cigaritis reference form", habitat: "Meadow", wingColour: "Green", wingPattern: "Stripes", image: "assets/archive-butterflies/butterfly-04.jpg" },
  { name: "White Grass Jewel", latinName: "Leptosia reference form", habitat: "Wetland", wingColour: "White", wingPattern: "Stripes", image: "assets/archive-butterflies/butterfly-05.jpg" },
  { name: "Scarlet Mosaic", latinName: "Telipna reference form", habitat: "Forest", wingColour: "Red", wingPattern: "Spots", image: "assets/archive-butterflies/butterfly-06.jpg" },
  { name: "Slate Charaxes", latinName: "Charaxes reference form", habitat: "Mountain", wingColour: "Blue", wingPattern: "Eyespots", image: "assets/archive-butterflies/butterfly-07.jpg" },
  { name: "Black Pie", latinName: "Taraka reference form", habitat: "Forest", wingColour: "White", wingPattern: "Spots", image: "assets/archive-butterflies/butterfly-08.jpg" },
  { name: "Lemon Emigrant", latinName: "Catopsilia reference form", habitat: "Garden", wingColour: "Green", wingPattern: "Spots", image: "assets/archive-butterflies/butterfly-09.jpg" },
  { name: "Brown Pansy", latinName: "Junonia reference form", habitat: "Forest", wingColour: "Orange", wingPattern: "Scales", image: "assets/archive-butterflies/butterfly-10.jpg" },
  { name: "Dead Leaf", latinName: "Kallima reference form", habitat: "Forest", wingColour: "Orange", wingPattern: "Solid", image: "assets/archive-butterflies/butterfly-11.jpg" },
  { name: "Tailed Charaxes", latinName: "Polyura reference form", habitat: "Forest", wingColour: "Green", wingPattern: "Eyespots", image: "assets/archive-butterflies/butterfly-12.jpg" },
  { name: "Blue Pansy", latinName: "Junonia orithya reference form", habitat: "Garden", wingColour: "Red", wingPattern: "Eyespots", image: "assets/archive-butterflies/butterfly-13.jpg" },
  { name: "Rock Ringlet", latinName: "Erebia reference form", habitat: "Mountain", wingColour: "Orange", wingPattern: "Eyespots", image: "assets/archive-butterflies/butterfly-14.jpg" },
  { name: "Wood Emperor", latinName: "Apatura reference form", habitat: "Mountain", wingColour: "Blue", wingPattern: "Eyespots", image: "assets/archive-butterflies/butterfly-15.jpg" },
  { name: "Lime Swallowtail", latinName: "Papilio reference form", habitat: "Garden", wingColour: "Yellow", wingPattern: "Spots", image: "assets/archive-butterflies/butterfly-16.jpg" },
  { name: "Clouded Yellow", latinName: "Colias reference form", habitat: "Meadow", wingColour: "Yellow", wingPattern: "Spots", image: "assets/archive-butterflies/butterfly-17.jpg" },
  { name: "Meadow Brown", latinName: "Maniola reference form", habitat: "Meadow", wingColour: "Green", wingPattern: "Solid", image: "assets/archive-butterflies/butterfly-18.jpg" },
  { name: "Great Eggfly", latinName: "Hypolimnas reference form", habitat: "Garden", wingColour: "White", wingPattern: "Spots", image: "assets/archive-butterflies/butterfly-19.jpg" },
  { name: "Plain Tiger Pair", latinName: "Danaus reference pair", habitat: "Garden", wingColour: "Orange", wingPattern: "Spots", image: "assets/archive-butterflies/butterfly-20.jpg" },
  { name: "Pale Sergeant", latinName: "Athyma reference form", habitat: "Forest", wingColour: "White", wingPattern: "Stripes", image: "assets/archive-butterflies/butterfly-21.jpg" },
  { name: "Desert White", latinName: "Pontia reference form", habitat: "Mountain", wingColour: "White", wingPattern: "Spots", image: "assets/archive-butterflies/butterfly-22.jpg" },
  { name: "Purple Emperor", latinName: "Apatura reference form", habitat: "Forest", wingColour: "Blue", wingPattern: "Eyespots", image: "assets/archive-butterflies/butterfly-23.png" },
  { name: "Mud-Puddling Whites", latinName: "Pieridae reference group", habitat: "Wetland", wingColour: "White", wingPattern: "Stripes", image: "assets/archive-butterflies/butterfly-24.png" },
  { name: "Tiny Pierrot", latinName: "Tarucus reference form", habitat: "Mountain", wingColour: "White", wingPattern: "Spots", image: "assets/archive-butterflies/butterfly-25.png" },
  { name: "White Orange-tip", latinName: "Hebomoia reference form", habitat: "Garden", wingColour: "White", wingPattern: "Stripes", image: "assets/archive-butterflies/butterfly-26.png" },
  { name: "Yellow Jezebel", latinName: "Delias reference form", habitat: "Garden", wingColour: "Yellow", wingPattern: "Spots", image: "assets/archive-butterflies/butterfly-27.png" },
  { name: "Common Crow", latinName: "Euploea reference form", habitat: "Forest", wingColour: "White", wingPattern: "Spots", image: "assets/archive-butterflies/butterfly-28.png" },
  { name: "Psyche White", latinName: "Leptosia reference form", habitat: "Wetland", wingColour: "White", wingPattern: "Solid", image: "assets/archive-butterflies/butterfly-29.png" },
  { name: "Meadow Ringlet", latinName: "Ypthima reference form", habitat: "Meadow", wingColour: "Orange", wingPattern: "Eyespots", image: "assets/archive-butterflies/butterfly-30.png" },
  ...uploadedButterflyProfiles.map((upload, index) => {
    const patterns = uploadColourPatterns[upload.wingColour] || wingPatternOptions.map((option) => option.label);
    const names = uploadNamePools[upload.wingColour] || ["Uploaded Wing"];
    const habitatPool = uploadHabitatPools[upload.wingColour] || habitatKeys;
    const name = `${names[index % names.length]} ${index + 1}`;
    const habitat = habitatPool[index % habitatPool.length];
    return {
      name,
      latinName: `Uploadia ${upload.wingColour.toLowerCase()} ${index + 1}`,
      habitat,
      wingColour: upload.wingColour,
      wingPattern: patterns[index % patterns.length],
      image: upload.image,
      title: `${upload.wingColour} capture`,
      sectionLabel: "Uploaded archive",
      paragraphOne: `This butterfly was added from an uploaded image and assigned to the ${upload.wingColour.toLowerCase()} wing colour filter.`,
      paragraphTwo: `The record has a custom habitat label of ${habitat.toLowerCase()} and reflects the uploaded image's colour profile.`,
      originLabel: "Source",
      originValue: "Uploaded image",
      mimicry: mimicryOptions[index % mimicryOptions.length].label,
      migration: migrationOptions[(index + 1) % migrationOptions.length].label,
    };
  }),
];

function colourFamilyForFill(fillColor) {
  if (["#3b82f6", "#9eb8ef"].includes(fillColor)) return "Blue";
  if (["#ef4444", "#f04d4f"].includes(fillColor)) return "Red";
  if (["#15803d", "#047857", "#a6d2be"].includes(fillColor)) return "Green";
  if (["#ffffff", "#d6d3d1"].includes(fillColor)) return "White";
  if (["#fdba74", "#fbbf24", "#fef08a", "#e5b479", "#f5a623"].includes(fillColor)) return "Yellow";
  if (["#ef6b4a", "#f1783d", "#f5b38c"].includes(fillColor)) return "Orange";
  if (fillColor === "#a855f7") return "Purple";
  return "Orange";
}

function makeButterflies() {
  const pools = butterflyProfiles.reduce((groups, profile) => {
    groups[profile.wingColour] = [...(groups[profile.wingColour] || []), profile];
    return groups;
  }, {});
  const poolIndexes = {};

  return positions.map(([top, left, size], index) => {
    const fillColor = fills[(index * 5 + 2) % fills.length];
    const family = colourFamilyForFill(fillColor);
    const pool = pools[family] || butterflyProfiles;
    const poolIndex = poolIndexes[family] || 0;
    const profile = pool[poolIndex % pool.length];
    poolIndexes[family] = poolIndex + 1;

    return {
      id: index + 1,
      name: `${profile.name} ${String(index + 1).padStart(2, "0")}`,
      title: profile.title,
      latinName: profile.latinName,
      top,
      left,
      size,
      fillColor,
      habitat: habitatKeys[(index * 7 + 1) % habitatKeys.length],
      completeness: 45 + ((index * 13) % 50),
      delay: (index % 9) * 0.12,
      drift: 4 + (index % 5) * 1.6,
      image: profile.image,
      sectionLabel: "Butterfly Display",
      paragraphOne: `${profile.name} is represented with one of the local butterfly files while the node keeps its original archive colour.`,
      paragraphTwo: `This butterfly is classified as ${profile.wingColour.toLowerCase()} with ${profile.wingPattern.toLowerCase()} markings for the colour and wing-pattern filters.`,
      originLabel: "Origin",
      originValue: "Local butterfly file",
      wingPattern: profile.wingPattern,
      wingColour: profile.wingColour,
      mimicry: mimicryOptions[index % mimicryOptions.length].label,
      migration: migrationOptions[index % migrationOptions.length].label,
    };
  });
}

function ModalShell({ children, onClose, className = "", labelledBy, align = "center" }) {
  const alignmentClass = align === "left" ? "items-center justify-start" : align === "right" ? "items-center justify-end" : "items-center justify-center";
  const x = align === "left" ? -28 : align === "right" ? 28 : 0;

  return (
    <motion.div
      className={`fixed inset-0 z-[100] flex ${alignmentClass} bg-black/10 p-3 sm:p-5 md:p-8`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.section
        role="dialog"
        aria-modal="true"
        aria-labelledby={labelledBy}
        className={`relative max-h-[92vh] overflow-auto bg-white shadow-[0_34px_80px_rgba(0,0,0,0.40)] ${className}`}
        initial={{ opacity: 0, x, y: align === "center" ? 20 : 0, scale: 0.97 }}
        animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
        exit={{ opacity: 0, x, y: align === "center" ? 20 : 0, scale: 0.97 }}
        transition={{ duration: 0.2 }}
        onClick={(event) => event.stopPropagation()}
      >
        <button type="button" onClick={onClose} aria-label="Close dialog" className="absolute right-4 top-4 z-10 grid min-h-12 min-w-12 place-items-center rounded-full text-slate-400 transition active:scale-95 md:right-7 md:top-7 md:min-h-[64px] md:min-w-[64px]">
          <CloseIcon />
        </button>
        {children}
      </motion.section>
    </motion.div>
  );
}

function FilterChip({ option, group, activeFilters, onToggle, type = "icon" }) {
  const selected = activeFilters[group].has(option.label);

  return (
    <button
      type="button"
      onClick={() => onToggle(group, option.label)}
      className={`inline-flex min-h-[52px] items-center gap-3 rounded-full border-[2px] px-5 text-[17px] font-medium transition active:scale-95 sm:min-h-[58px] sm:text-[21px] md:min-h-[62px] md:gap-4 md:border-[3px] md:px-7 md:text-[30px] ${selected ? "border-slate-400 bg-slate-50 text-slate-950 shadow-inner" : "border-slate-200 bg-white text-slate-700"}`}
    >
      {type === "colour" ? (
        <span className="h-6 w-6 rounded-full border-2 border-slate-200 md:h-8 md:w-8" style={{ background: option.gradient || option.color }} />
      ) : (
        <span className="min-w-6 text-center text-[20px] leading-none md:min-w-8 md:text-[28px]">{option.icon}</span>
      )}
      <span>{option.label}</span>
    </button>
  );
}

function FilterSection({ title, options, group, activeFilters, onToggle, type }) {
  return (
    <section>
      <h3 className="mb-4 text-[20px] font-semibold leading-tight text-slate-600 sm:text-[24px] md:mb-7 md:text-[31px]">{title}</h3>
      <div className="flex flex-wrap gap-3 md:gap-5">
        {options.map((option) => (
          <FilterChip key={option.label} option={option} group={group} activeFilters={activeFilters} onToggle={onToggle} type={type} />
        ))}
      </div>
    </section>
  );
}

function AdvancedFilterModal({ activeFilters, onToggle, onReset, onClose }) {
  return (
    <ModalShell onClose={onClose} labelledBy="advanced-filter-title" align="right" className="mr-0 w-full max-w-[720px] rounded-[26px] px-6 pb-8 pt-16 sm:rounded-[30px] sm:px-10 sm:pb-10 md:mr-5 md:rounded-[34px] md:px-[54px] md:pb-[56px] md:pt-[72px] lg:mr-7">
      <div className="mb-9 flex items-center justify-between gap-4 pr-14 md:mb-[58px] md:gap-6 md:pr-20">
        <h2 id="advanced-filter-title" className="m-0 text-[34px] font-normal leading-none tracking-[-0.03em] text-black md:text-[40px]">Filters</h2>
        <button type="button" onClick={onReset} className="min-h-[54px] rounded-[18px] border-2 border-slate-200 bg-white px-4 text-[16px] font-semibold text-black transition active:scale-95 sm:px-6 sm:text-[20px] md:min-h-[68px] md:rounded-[20px] md:px-8 md:text-[30px]">
          Reset Filters
        </button>
      </div>
      <div className="space-y-10 md:space-y-[68px]">
        <FilterSection title="Butterfly Wing Patterns" options={wingPatternOptions} group="wingPatterns" activeFilters={activeFilters} onToggle={onToggle} />
        <FilterSection title="Wing Colour" options={wingColourOptions} group="wingColours" activeFilters={activeFilters} onToggle={onToggle} type="colour" />
        <FilterSection title="Mimicry" options={mimicryOptions} group="mimicry" activeFilters={activeFilters} onToggle={onToggle} />
        <FilterSection title="Migration Seasons" options={migrationOptions} group="migration" activeFilters={activeFilters} onToggle={onToggle} />
      </div>
    </ModalShell>
  );
}

function AboutMetric({ icon, value, label, tint, iconColor }) {
  return (
    <div className="flex items-center gap-5 md:gap-9">
      <div className={`grid h-14 w-14 shrink-0 place-items-center rounded-full md:h-[84px] md:w-[84px] ${tint} ${iconColor}`}>{icon}</div>
      <div>
        <div className="text-[34px] font-bold leading-none tracking-tight text-slate-950 md:text-[48px]">{value}</div>
        <div className="mt-2 text-[22px] leading-none text-slate-600 md:mt-4 md:text-[36px]">{label}</div>
      </div>
    </div>
  );
}

function StatIcon({ type }) {
  const icons = { records: "⌘", habitats: "⌂", completeness: "◎" };
  return <span className="text-[24px] leading-none md:text-[30px]" aria-hidden="true">{icons[type]}</span>;
}

function AboutArchiveModal({ onClose }) {
  return (
    <ModalShell onClose={onClose} labelledBy="info-archive-title" align="left" className="ml-0 w-full max-w-[620px] rounded-[24px] px-7 pb-10 pt-16 sm:px-10 sm:pb-12 md:ml-5 md:rounded-[28px] md:px-[54px] md:pb-[112px] md:pt-[70px] lg:ml-7">
      <h2 id="info-archive-title" className="pr-14 text-[36px] font-bold leading-tight tracking-tight text-slate-950 sm:text-[42px] md:pr-16 md:text-[48px]">Info archive</h2>
      <p className="mt-8 text-[22px] leading-[1.36] tracking-[-0.02em] text-slate-600 sm:text-[28px] md:mt-[62px] md:text-[39px]">
        This an evolving archive of butterfly records. You will explore connections through colour, habitat, completeness and discovery. Journey through the vibrant world of East African butterflies, where each wing pattern tells a story millions of years in the making and color is never accidental; it is strategy.
      </p>
      <div className="mt-10 space-y-8 md:mt-[76px] md:space-y-[56px]">
        <AboutMetric icon={<StatIcon type="records" />} value="81" label="Records" tint="bg-emerald-50" iconColor="text-emerald-700" />
        <AboutMetric icon={<StatIcon type="habitats" />} value="6" label="Habitats" tint="bg-orange-50" iconColor="text-orange-700" />
        <AboutMetric icon={<StatIcon type="completeness" />} value="68%" label="Avg. completeness" tint="bg-slate-100" iconColor="text-slate-600" />
      </div>
      <div className="mt-10 border-t border-slate-200 pt-8 text-[22px] leading-[1.22] tracking-[-0.02em] text-slate-500 sm:text-[28px] md:mt-[84px] md:pt-[44px] md:text-[37px]">
        Touch any circle to explore. Your catches are saved as curved archive lines.
      </div>
    </ModalShell>
  );
}

function HabitatCircleMenu({ activeHabitat, onSelect }) {
  const items = [
    { label: "Forest", left: "50%", top: "9%" },
    { label: "Meadow", left: "82%", top: "25%" },
    { label: "Wetland", left: "82%", top: "69%" },
    { label: "Garden", left: "50%", top: "86%" },
    { label: "Mountain", left: "18%", top: "69%" },
    { label: "Unknown", left: "18%", top: "25%" },
  ];

  return (
    <div className="relative mx-auto h-[360px] w-full max-w-[520px] md:h-[560px] md:max-w-[720px]" aria-label="Habitat filter menu">
      <button
        type="button"
        onClick={() => onSelect("All")}
        className={`absolute left-1/2 top-1/2 z-10 grid h-[92px] w-[92px] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full text-[22px] font-bold transition active:scale-95 md:h-[132px] md:w-[132px] md:text-[30px] ${
          activeHabitat === "All" ? "bg-black text-white" : "bg-stone-100 text-slate-700"
        }`}
      >
        All
      </button>

      {items.map((item) => {
        const active = activeHabitat === item.label;

        return (
          <button
            key={item.label}
            type="button"
            onClick={() => onSelect(item.label)}
            className={`absolute z-20 grid h-[88px] w-[88px] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full px-2 text-center text-[13px] font-bold leading-tight transition active:scale-95 md:h-[128px] md:w-[128px] md:text-[19px] ${
              active ? "bg-black text-white" : "bg-stone-100 text-slate-700"
            }`}
            style={{ left: item.left, top: item.top }}
            aria-pressed={active}
          >
            <span
              className="mb-1 h-3.5 w-3.5 rounded-full md:mb-2 md:h-5 md:w-5"
              style={{ backgroundColor: habitats[item.label].dotColor }}
            />
            <span>{item.label}</span>
          </button>
        );
      })}
    </div>
  );
}

function VisualKeyModal({ activeHabitat, onSelectHabitat, onClose }) {
  return (
    <ModalShell onClose={onClose} labelledBy="habitat-menu-title" align="center" className="w-full max-w-[980px] rounded-[26px] px-5 pb-8 pt-16 sm:px-8 md:rounded-[34px] md:px-12 md:pb-12 md:pt-16">
      <h2 id="habitat-menu-title" className="sr-only">Habitat menu</h2>
      <HabitatCircleMenu activeHabitat={activeHabitat} onSelect={onSelectHabitat} />
    </ModalShell>
  );
}

function SpecimenScientificModal({ specimen, onClose }) {
  if (!specimen) return null;

  return (
    <motion.div className="fixed inset-0 z-[120] flex items-center justify-center overflow-hidden bg-white/92 p-4 md:p-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
      <motion.section role="dialog" aria-modal="true" aria-labelledby="specimen-detail-title" className="relative h-[min(88vh,830px)] w-full max-w-[1280px] overflow-visible" initial={{ opacity: 0, y: 24, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 24, scale: 0.96 }} transition={{ duration: 0.22 }} onClick={(event) => event.stopPropagation()}>
        <button type="button" onClick={onClose} aria-label="Close specimen details" className="absolute right-3 top-3 z-40 grid h-16 w-16 place-items-center rounded-full bg-white text-slate-400 shadow-[0_16px_40px_rgba(15,23,42,0.14)] transition active:scale-95"><CloseIcon size={30} /></button>
        <div
          className="absolute left-1/2 top-8 z-10 h-[min(72vw,430px)] w-[min(72vw,430px)] -translate-x-1/2 overflow-hidden rounded-full border-[18px] bg-emerald-700 shadow-[0_28px_72px_rgba(15,23,42,0.18)] md:left-0 md:top-1/2 md:h-[min(72vw,760px)] md:w-[min(72vw,760px)] md:-translate-x-0 md:-translate-y-1/2 md:border-[28px]"
          style={{ borderColor: specimen.ringColor || "#047857" }}
        >
          <img src={specimen.image} alt={specimen.name} className="h-full w-full object-cover" />
        </div>
        <div className="absolute bottom-3 right-1/2 z-20 grid h-[min(88vw,430px)] w-[min(88vw,430px)] translate-x-1/2 place-items-center rounded-full bg-white px-10 py-10 text-center shadow-[0_30px_80px_rgba(15,23,42,0.18)] md:right-0 md:top-1/2 md:h-[min(48vw,520px)] md:w-[min(48vw,520px)] md:-translate-y-1/2 md:translate-x-0 md:px-14 md:py-12">
          <div>
            <div className="hidden justify-center gap-3 md:flex"><span className="grid h-12 w-12 place-items-center rounded-full bg-emerald-600 text-white"><LeafIcon /></span><span className="grid h-12 w-12 place-items-center rounded-full bg-emerald-600 text-white"><CircleInfoIcon /></span><span className="grid h-12 w-12 place-items-center rounded-full bg-emerald-600 text-white"><PinIcon /></span></div>
            <div className="mt-0 text-[12px] font-bold uppercase tracking-[0.16em] text-emerald-600 md:mt-7 md:text-[13px]">{specimen.sectionLabel}</div>
            <h2 id="specimen-detail-title" className="mt-2 text-[20px] font-bold uppercase tracking-tight text-slate-800 md:text-[24px]">{specimen.title}</h2>
            <div className="mt-2 text-[16px] italic text-slate-500 md:text-[18px]">{specimen.latinName}</div>
            <p className="mx-auto mt-5 max-w-[340px] text-[13px] leading-[1.4] text-slate-600 md:mt-7 md:text-[16px] md:leading-[1.45]">{specimen.paragraphOne}</p>
            <p className="mx-auto mt-4 max-w-[340px] text-[13px] leading-[1.4] text-slate-600 md:mt-5 md:text-[16px] md:leading-[1.45]">{specimen.paragraphTwo}</p>
            <div className="mt-5 text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-400 md:mt-7 md:text-[13px]">{specimen.originLabel}: {specimen.originValue}</div>
            <div className="mt-3 text-[13px] font-medium text-slate-500 md:mt-5 md:text-[15px]">{specimen.name} · {specimen.habitat} · {specimen.completeness}% complete</div>
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
}

function FloatingModalButtons({ onAbout, onKey }) {
  return (
    <>
      <div className="absolute bottom-20 left-3 z-40 md:bottom-6 md:left-6">
        <button
          type="button"
          onClick={onAbout}
          className="grid h-[54px] w-[54px] place-items-center rounded-full border border-stone-200 bg-white text-slate-950 shadow-[0_14px_36px_rgba(61,48,32,0.14)] transition active:scale-95 md:h-[58px] md:w-[58px]"
          aria-label="Open info archive"
          title="Info archive"
        >
          <InfoIcon />
        </button>
      </div>

      <div className="absolute bottom-20 right-3 z-40 md:bottom-6 md:right-6">
        <button
          type="button"
          onClick={onKey}
          className="grid h-[54px] w-[54px] place-items-center rounded-full border border-stone-200 bg-white text-slate-950 shadow-[0_14px_36px_rgba(61,48,32,0.14)] transition active:scale-95 md:h-[58px] md:w-[58px]"
          aria-label="Open habitat menu"
          title="Habitat menu"
        >
          <KeyIcon />
        </button>
      </div>
    </>
  );
}

function TrailBreadcrumbs({ trail }) {
  if (trail.length < 2) return null;

  const buildCurve = (from, to, index) => {
    const x1 = from.left;
    const y1 = from.top;
    const x2 = to.left;
    const y2 = to.top;

    const dx = x2 - x1;
    const dy = y2 - y1;

    const midX = (x1 + x2) / 2;
    const midY = (y1 + y2) / 2;

    const direction = index % 2 === 0 ? 1 : -1;

    const curveStrength = Math.max(5, Math.min(16, Math.abs(dx) * 0.18 + Math.abs(dy) * 0.12));

    const controlX = midX + direction * curveStrength;
    const controlY = midY - direction * curveStrength * 0.85;

    return `M ${x1} ${y1} Q ${controlX} ${controlY} ${x2} ${y2}`;
  };

  return (
    <div className="pointer-events-none absolute inset-0 z-30">
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full overflow-visible"
      >
        {trail.slice(1).map((item, index) => {
          const from = trail[index];
          const to = item;
          const d = buildCurve(from, to, index);

          return (
            <g key={`${from.id}-${to.id}-${index}`}>
              <motion.path
                d={d}
                fill="none"
                stroke="rgba(0,0,0,0.22)"
                strokeWidth="0.11"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
              />

              <motion.path
                d={d}
                fill="none"
                stroke="rgba(0,0,0,0.10)"
                strokeWidth="0.06"
                strokeLinecap="round"
                strokeDasharray="0"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.55, ease: "easeOut", delay: 0.03 }}
              />
            </g>
          );
        })}
      </svg>
    </div>
  );
}

function HoverSpecimenPreview({ specimen }) {
  if (!specimen) return null;

  return (
    <motion.div className="pointer-events-none absolute z-40 hidden -translate-x-1/2 -translate-y-1/2 rounded-full border-[12px] bg-orange-500 shadow-[0_22px_55px_rgba(15,23,42,0.18)] md:block" style={{ top: `${specimen.top}%`, left: `${specimen.left}%`, width: 220, height: 220, borderColor: specimen.ringColor || "#f97316" }} initial={{ opacity: 0, scale: 0.65 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.65 }} transition={{ type: "spring", stiffness: 280, damping: 22 }}>
      <img src={specimen.image} alt="" className="h-full w-full rounded-full object-cover" draggable="false" />
    </motion.div>
  );
}

function ButterflyCircle({ butterfly, selected, hidden, onSelect, onPreviewStart, onPreviewEnd }) {
  const touchSize = Math.max(butterfly.size + 28, 64);

  return (
    <motion.button
      aria-label={`${butterfly.name}, ${butterfly.habitat}, ${butterfly.completeness}% complete`}
      className={`absolute z-20 grid place-items-center rounded-full touch-manipulation outline-none ring-offset-4 transition-opacity focus-visible:ring-4 focus-visible:ring-emerald-200 ${hidden ? "pointer-events-none opacity-10" : "opacity-100"}`}
      style={{ top: `${butterfly.top}%`, left: `${butterfly.left}%`, width: touchSize, height: touchSize, marginLeft: -touchSize / 2, marginTop: -touchSize / 2, WebkitTapHighlightColor: "transparent" }}
      initial={{ opacity: 0, scale: 0.2 }}
      animate={{ opacity: hidden ? 0.1 : 1, scale: selected ? 1.08 : 1, y: [0, -butterfly.drift, 0, butterfly.drift * 0.35, 0] }}
      transition={{ opacity: { duration: 0.25 }, scale: { type: "spring", stiffness: 240, damping: 18 }, y: { duration: 4 + (butterfly.id % 6) * 0.45, repeat: Infinity, ease: "easeInOut", delay: butterfly.delay } }}
      whileTap={{ scale: 0.92 }}
      onHoverStart={() => onPreviewStart(butterfly)}
      onHoverEnd={onPreviewEnd}
      onFocus={() => onPreviewStart(butterfly)}
      onBlur={onPreviewEnd}
      onClick={() => onSelect(butterfly)}
    >
      <span
        className="butterfly-bounce rounded-full border-[4px]"
        style={{
          width: butterfly.size,
          height: butterfly.size,
          borderColor: butterfly.ringColor || habitats[butterfly.habitat].ringColor,
          backgroundColor: butterfly.fillColor,
          boxShadow: "0 10px 24px rgba(61,48,32,0.10)",
          "--bounce-distance": `${Math.max(8, butterfly.drift * 2.2)}px`,
          "--bounce-duration": `${1.3 + (butterfly.id % 7) * 0.13}s`,
          "--bounce-delay": `${(butterfly.id % 11) * -0.12}s`,
        }}
      />
      {selected && <motion.span layoutId="selectedHalo" className="absolute inset-[4px] rounded-full border-[3px] border-black/10 bg-white/15" />}
    </motion.button>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<EastAfricaButterflyArchive />);

function TrailControls({ trailCount, onClear, onOpen }) {
  const hasCatches = trailCount > 0;

  return (
    <motion.div
      className="absolute bottom-4 left-1/2 z-40 flex max-w-[calc(100vw-24px)] -translate-x-1/2 items-center gap-2 rounded-full border border-stone-200 bg-white px-3 py-2 shadow-[0_18px_45px_rgba(0,0,0,0.22)] backdrop-blur sm:gap-3 sm:px-4 sm:py-3 md:bottom-5 md:gap-4 md:px-5 md:py-3"
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      role="status"
      aria-live="polite"
    >
      <button
        type="button"
        onClick={onOpen}
        className={`grid h-11 w-11 shrink-0 place-items-center rounded-full text-[24px] font-black leading-none transition active:scale-95 sm:h-12 sm:w-12 sm:text-[28px] md:h-14 md:w-14 md:text-[34px] ${
          hasCatches ? "bg-[#14843a] text-white" : "bg-slate-100 text-slate-400"
        }`}
        aria-label="Open caught butterflies"
      >
        {trailCount}
      </button>

      <button
        type="button"
        onClick={onOpen}
        className="max-w-[130px] truncate whitespace-nowrap rounded-full px-1 text-[15px] font-semibold tracking-[-0.02em] text-black transition active:scale-95 sm:max-w-none sm:text-[17px] md:text-[20px]"
      >
        Catching: {trailCount} caught
      </button>

      <button
        type="button"
        onClick={onClear}
        disabled={!hasCatches}
        className={`inline-flex min-h-10 shrink-0 items-center gap-2 rounded-full px-3 text-[14px] font-semibold tracking-[-0.02em] transition active:scale-95 sm:min-h-11 sm:px-4 sm:text-[15px] md:min-h-12 md:px-5 md:text-[16px] ${
          hasCatches ? "bg-slate-100 text-slate-700" : "cursor-not-allowed bg-slate-100 text-slate-400"
        }`}
        aria-label="Clear caught butterflies"
      >
        <span className="grid h-6 w-6 place-items-center rounded-[7px] border-[2px] border-current text-[16px] leading-none md:h-7 md:w-7 md:text-[18px]">
          ×
        </span>
        <span className="hidden sm:inline">Clear catches</span>
        <span className="sm:hidden">Clear</span>
      </button>
    </motion.div>
  );
}

function TrailHistoryModal({ trail, onClose, onClear, onSelect }) {
  const uniqueTrail = trail.filter((item, index, items) => items.findIndex((candidate) => candidate.id === item.id) === index);
  const hasTrail = uniqueTrail.length > 0;

  return (
    <ModalShell
      onClose={onClose}
      labelledBy="trail-history-title"
      align="center"
      className="w-[calc(100vw-36px)] max-w-[560px] rounded-[24px] px-[22px] pb-[20px] pt-[30px] sm:px-[28px] sm:pb-[24px] sm:pt-[34px]"
    >
      <div className="border-b border-slate-100 pb-[18px] pr-10">
        <h2 id="trail-history-title" className="text-[24px] font-bold leading-tight tracking-tight text-slate-950 sm:text-[28px]">
          Your Butterfly Collection
        </h2>
        <p className="mt-[10px] max-w-[460px] text-[15px] leading-[1.45] text-slate-400 sm:text-[17px]">
          These are the butterflies you have caught. Tap any butterfly to revisit it, or clear your catches to start again.
        </p>
      </div>

      <div className="bg-white">
        {hasTrail ? (
          <div className="max-h-[48vh] overflow-auto">
            {uniqueTrail.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  onSelect(item);
                  onClose();
                }}
                className="grid w-full grid-cols-[62px_1fr_18px] items-center gap-[12px] border-b border-slate-100 py-[12px] text-left transition active:scale-[0.99] hover:bg-stone-50 sm:grid-cols-[70px_1fr_20px] sm:gap-[14px]"
              >
                <span
                  className="h-[56px] w-[56px] overflow-hidden rounded-full border-[4px] bg-stone-100 sm:h-[62px] sm:w-[62px]"
                  style={{ borderColor: item.ringColor || habitats[item.habitat].ringColor }}
                >
                  <img src={item.image} alt="" className="h-full w-full object-cover" draggable="false" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-[17px] font-bold leading-tight text-slate-950 sm:text-[19px]">{item.name}</span>
                  <span className="mt-1 block truncate text-[14px] text-slate-400 sm:text-[15px]">
                    {item.habitat} · {item.completeness}% complete
                  </span>
                  <span className="mt-2 block h-1.5 overflow-hidden rounded-full bg-slate-100">
                    <span className="block h-full rounded-full bg-[#aebdac]" style={{ width: `${item.completeness}%` }} />
                  </span>
                </span>
                <span className="text-[26px] font-light leading-none text-slate-300" aria-hidden="true">›</span>
              </button>
            ))}
          </div>
        ) : (
          <div className="grid min-h-[180px] place-items-center border-b border-slate-100 p-[18px] text-center">
            <div>
              <div className="mx-auto mb-[12px] text-[30px] font-black leading-none text-slate-300" aria-hidden="true">〰</div>
              <div className="text-[18px] font-bold text-slate-950">No butterflies caught yet</div>
              <div className="mt-[10px] text-[14px] text-slate-400">Touch butterfly circles to catch your first butterfly.</div>
            </div>
          </div>
        )}
      </div>

      <div className="mt-[16px] flex flex-wrap items-center justify-between gap-[12px]">
        <div className="flex items-center gap-2 text-[15px] font-medium text-slate-500 sm:text-[17px]">
          <span className="text-[20px] leading-none" aria-hidden="true">🦋</span>
          ~{uniqueTrail.length} {uniqueTrail.length === 1 ? "butterfly" : "butterflies"} caught
        </div>
        <button
          type="button"
          onClick={onClear}
          disabled={!hasTrail}
          className={`inline-flex min-h-11 items-center gap-2 rounded-full px-[16px] text-[14px] font-medium transition active:scale-95 sm:px-[18px] ${
            hasTrail ? "bg-[#fff1f1] text-[#ff5a63]" : "cursor-not-allowed bg-[#f3f5fa] text-slate-500"
          }`}
        >
          <ClearXIcon />
          Clear catches
        </button>
      </div>
    </ModalShell>
  );
}

function EastAfricaButterflyArchive() {
  const butterflies = useMemo(() => makeButterflies(), []);
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState(null);
  const [hovered, setHovered] = useState(null);
  const [armedSpecimenId, setArmedSpecimenId] = useState(null);
  const [trail, setTrail] = useState([]);
  const [filterModalOpen, setFilterModalOpen] = useState(false);
  const [activeFilters, setActiveFilters] = useState({
    wingPatterns: new Set(),
    wingColours: new Set(),
    mimicry: new Set(),
    migration: new Set(),
  });
  const [aboutOpen, setAboutOpen] = useState(true);
  const [visualKeyOpen, setVisualKeyOpen] = useState(false);
  const [trailHistoryOpen, setTrailHistoryOpen] = useState(false);
  const [query, setQuery] = useState("");

  const activeFilterCount =
    activeFilters.wingPatterns.size +
    activeFilters.wingColours.size +
    activeFilters.mimicry.size +
    activeFilters.migration.size;

  const toggleAdvancedFilter = (group, value) => {
    setActiveFilters((current) => {
      const next = {
        wingPatterns: new Set(current.wingPatterns),
        wingColours: new Set(current.wingColours),
        mimicry: new Set(current.mimicry),
        migration: new Set(current.migration),
      };

      if (next[group].has(value)) next[group].delete(value);
      else next[group].add(value);

      return next;
    });
  };

  const resetAllFilters = () => {
    setFilter("All");
    setQuery("");
    setActiveFilters({
      wingPatterns: new Set(),
      wingColours: new Set(),
      mimicry: new Set(),
      migration: new Set(),
    });
  };

  const visibleButterflies = butterflies.filter((butterfly) => {
    const matchesFilter = filter === "All" || butterfly.habitat === filter;
    const q = query.trim().toLowerCase();

    const matchesQuery =
      !q ||
      butterfly.name.toLowerCase().includes(q) ||
      butterfly.habitat.toLowerCase().includes(q) ||
      butterfly.title.toLowerCase().includes(q) ||
      butterfly.wingPattern.toLowerCase().includes(q) ||
      butterfly.wingColour.toLowerCase().includes(q) ||
      butterfly.mimicry.toLowerCase().includes(q) ||
      butterfly.migration.toLowerCase().includes(q);

    const matchesWingPattern = activeFilters.wingPatterns.size === 0 || activeFilters.wingPatterns.has(butterfly.wingPattern);
    const matchesWingColour = activeFilters.wingColours.size === 0 || activeFilters.wingColours.has(butterfly.wingColour);
    const matchesMimicry = activeFilters.mimicry.size === 0 || activeFilters.mimicry.has(butterfly.mimicry);
    const matchesMigration = activeFilters.migration.size === 0 || activeFilters.migration.has(butterfly.migration);

    return matchesFilter && matchesQuery && matchesWingPattern && matchesWingColour && matchesMimicry && matchesMigration;
  });

  const handleSelect = (butterfly) => {
    setHovered(butterfly);
    setTrail((current) => [...current.slice(-13), butterfly]);

    if (armedSpecimenId === butterfly.id) {
      setHovered(null);
      setArmedSpecimenId(null);
      setSelected(butterfly);
      return;
    }

    setArmedSpecimenId(butterfly.id);
  };

  const clearTrail = () => {
    setTrail([]);
    setSelected(null);
  };

  return (
    <main className="relative h-screen min-h-[680px] overflow-hidden bg-white font-sans text-slate-950 md:min-h-[780px]">
      <header className="absolute inset-x-0 top-0 z-50 grid h-[82px] grid-cols-[1fr_auto] items-center border-b border-stone-200 bg-white/92 px-4 backdrop-blur md:h-[96px] md:px-6">
        <div className="font-serif text-[20px] font-medium tracking-tight text-slate-950 md:text-[25px]">
          Butterfly archive
        </div>

        <div className="relative flex items-center justify-end gap-3">
          <label className="hidden h-[56px] w-[300px] items-center gap-3 rounded-full border border-stone-200 bg-white px-5 text-stone-400 shadow-sm lg:flex">
            <SearchIcon />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search species, habitat..."
              className="h-full w-full bg-transparent text-[16px] text-slate-800 outline-none placeholder:text-stone-400"
              aria-label="Search species or habitat"
            />
          </label>

          <button
            type="button"
            className="min-h-[48px] min-w-[68px] rounded-full bg-[#4b6e40] px-5 text-[15px] font-bold text-white shadow-[0_6px_14px_rgba(47,76,39,0.24)] transition active:scale-95 md:min-h-[56px] md:min-w-[86px] md:px-7 md:text-[17px]"
            onClick={resetAllFilters}
            aria-label="Reset filters"
          >
            {activeFilterCount > 0 ? `${activeFilterCount} Filters` : filter}
          </button>

          <button
            type="button"
            className="grid h-12 w-12 place-items-center rounded-full bg-[#eaf2e9] text-[#4b6e40] shadow-sm transition active:scale-95 md:h-[56px] md:w-[56px]"
            aria-label="Open filter menu"
            aria-expanded={filterModalOpen}
            onClick={() => setFilterModalOpen(true)}
          >
            <SlidersIcon />
          </button>
        </div>
      </header>

      <div className="absolute left-1/2 top-[116px] z-10 hidden -translate-x-1/2 text-[21px] font-medium text-[#8aa0c1] md:block">
        81 Species
      </div>

      <section className="absolute inset-0 pt-[82px] md:pt-[96px]" aria-label="Interactive butterfly archive map">
        <div className="absolute inset-0">
          <TrailBreadcrumbs trail={trail} />
          <AnimatePresence>{hovered && !selected && <HoverSpecimenPreview specimen={hovered} />}</AnimatePresence>
          {visibleButterflies.map((butterfly) => (
            <ButterflyCircle
              key={butterfly.id}
              butterfly={butterfly}
              selected={selected?.id === butterfly.id}
              hidden={false}
              onSelect={handleSelect}
              onPreviewStart={setHovered}
              onPreviewEnd={() => setHovered(null)}
            />
          ))}
        </div>
      </section>

      <TrailControls trailCount={trail.length} onClear={clearTrail} onOpen={() => setTrailHistoryOpen(true)} />
      <FloatingModalButtons onAbout={() => setAboutOpen(true)} onKey={() => setVisualKeyOpen(true)} />

      <AnimatePresence>{aboutOpen && <AboutArchiveModal onClose={() => setAboutOpen(false)} />}</AnimatePresence>
      <AnimatePresence>
        {visualKeyOpen && (
          <VisualKeyModal
            activeHabitat={filter}
            onSelectHabitat={(habitat) => {
              setFilter(habitat);
              setVisualKeyOpen(false);
            }}
            onClose={() => setVisualKeyOpen(false)}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {filterModalOpen && (
          <AdvancedFilterModal
            activeFilters={activeFilters}
            onToggle={toggleAdvancedFilter}
            onReset={resetAllFilters}
            onClose={() => setFilterModalOpen(false)}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {selected && (
          <SpecimenScientificModal
            specimen={selected}
            onClose={() => {
              setSelected(null);
              setArmedSpecimenId(null);
            }}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {trailHistoryOpen && (
          <TrailHistoryModal
            trail={trail}
            onClose={() => setTrailHistoryOpen(false)}
            onClear={clearTrail}
            onSelect={(item) => {
              setSelected(item);
              setHovered(null);
              setArmedSpecimenId(null);
            }}
          />
        )}
      </AnimatePresence>
    </main>
  );
}
