
const { useMemo, useState } = React;

const AnimatePresence = ({ children }) => children;
const motion = new Proxy({}, {
  get: (_target, tag) =>
    React.forwardRef(({ initial, animate, exit, transition, layoutId, ...props }, ref) =>
      React.createElement(tag, { ...props, ref })
    ),
});

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

function ClearXIcon() {
  return (
    <span className="grid h-4 w-4 place-items-center rounded-[4px] border-2 border-current text-[11px] leading-none" aria-hidden="true">
      ×
    </span>
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

function ClueIcon({ type }) {
  const paths = {
    dark: <path d="M17.2 5.8c-4.9.7-9.3 4.1-10.8 8.6-.5 1.6.8 3.1 2.5 2.9 2.2-.2 4.2-1 5.8-2.3-.9-.6-1.3-1.5-1.1-2.5.3-1.4 1.5-2.3 3.5-2.8 1.1-.3 1.8-1.2 1.7-2.3-.1-1-.8-1.7-1.6-1.6Z" />,
    band: (
      <>
        <path d="M4.5 11.7c2.4-3 5.8-3.7 8.2-.2 2.4-3.5 5.8-2.8 8.2.2-2.1 4.1-6 4.5-8.2.7-2.2 3.8-6.1 3.4-8.2-.7Z" />
        <path d="M10 12.2c.8.6 1.7.9 2.7.9s1.9-.3 2.7-.9" fill="none" stroke="#2d322d" strokeWidth="1.3" />
      </>
    ),
    swallowtail: <path d="M5.2 7.9c4.3 1.1 7.1 3.3 8.7 6.3 1.9-1.7 4.3-2.7 7-2.5-1.3 2.1-2.8 3.4-4.6 4l2.4 3.2-4.9-1.3-2.2 3.8-1.2-5.1c-2.4-.8-4.1-2.5-5.2-5.2Z" />,
    patch: (
      <>
        <circle cx="12" cy="12" r="7" fill="none" stroke="currentColor" strokeWidth="3" />
        <circle cx="12" cy="12" r="3.2" />
      </>
    ),
    redEye: (
      <>
        <circle cx="12" cy="12" r="7" fill="none" stroke="currentColor" strokeWidth="3" />
        <circle cx="12" cy="12" r="3.2" fill="#e74b4b" />
      </>
    ),
    orangeDot: <circle cx="12" cy="12" r="6" fill="#f1783d" />,
    checkered: (
      <>
        <path d="M6 6h12v12H6Z" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M6 6h4v4H6Z" />
        <path d="M14 6h4v4h-4Z" />
        <path d="M10 10h4v4h-4Z" />
        <path d="M6 14h4v4H6Z" />
        <path d="M14 14h4v4h-4Z" />
      </>
    ),
    shimmer: (
      <>
        <circle cx="12" cy="12" r="4" fill="#8b5cf6" />
        <path d="M12 3.5v4" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <path d="M12 16.5v4" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <path d="M3.5 12h4" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <path d="M16.5 12h4" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <path d="m6 6 2.8 2.8" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <path d="m15.2 15.2 2.8 2.8" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <path d="m18 6-2.8 2.8" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <path d="m8.8 15.2-2.8 2.8" fill="none" stroke="currentColor" strokeWidth="1.8" />
      </>
    ),
    forest: (
      <>
        <path d="M8 18V9" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M16 18V6" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="m8 7-4 6h8Z" />
        <path d="m16 4-5 8h10Z" />
        <path d="M4 19h17" fill="none" stroke="currentColor" strokeWidth="2" />
      </>
    ),
    search: (
      <>
        <circle cx="10" cy="10" r="5.5" fill="none" stroke="currentColor" strokeWidth="2.5" />
        <path d="m14 14 5 5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      </>
    ),
    variable: (
      <>
        <path d="M4.5 11.7c2.4-3 5.8-3.7 8.2-.2 2.4-3.5 5.8-2.8 8.2.2-2.1 4.1-6 4.5-8.2.7-2.2 3.8-6.1 3.4-8.2-.7Z" />
        <circle cx="8" cy="8" r="1.2" fill="#2d322d" />
        <circle cx="16.5" cy="16" r="1.2" fill="#2d322d" />
      </>
    ),
    unknown: (
      <>
        <path d="M12 4 20 7v6c0 4.2-3.3 6.9-8 8-4.7-1.1-8-3.8-8-8V7Z" />
        <path d="M10 10.2a2.2 2.2 0 0 1 4.2.9c0 1.8-2.2 1.9-2.2 3.4" fill="none" stroke="#2d322d" strokeWidth="1.7" strokeLinecap="round" />
        <circle cx="12" cy="17.8" r=".8" fill="#2d322d" />
      </>
    ),
    meadow: (
      <>
        <path d="M4 18h16" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M7 18 11 8l4 10 3-6 3 6" fill="none" stroke="currentColor" strokeWidth="2" />
      </>
    ),
    mountain: (
      <>
        <path d="M3.5 18.5h17" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M5.5 18.5 11 8l3.5 6 2-3.2 4 7.7" fill="none" stroke="currentColor" strokeWidth="2" />
      </>
    ),
    wetland: (
      <>
        <path d="M5 18h14" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M7 18c0-4 1-7 3-10" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M12 18V5" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M17 18c0-4-1-7-3-10" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M8 20c2-1 6-1 8 0" fill="none" stroke="currentColor" strokeWidth="1.6" />
      </>
    ),
  };

  return (
    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#2d322d] text-white" aria-hidden="true">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        {paths[type]}
      </svg>
    </span>
  );
}

function FlowerIcon() {
  return (
    <svg width="34" height="34" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M24 42V19" />
      <path d="M16 42h19" />
      <path d="M24 29c-5-6-9-7-13-5 1 6 5 8 13 5Z" />
      <path d="M24 25c4-6 8-8 13-6-1 6-5 9-13 6Z" />
      <circle cx="18" cy="15" r="4" />
      <circle cx="12" cy="18" r="3" />
      <circle cx="30" cy="13" r="4" />
      <circle cx="36" cy="17" r="3" />
    </svg>
  );
}

function GrassIcon({ size = 34 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M7 42h34" />
      <path d="M14 42c-1-9 1-17 6-24" />
      <path d="M24 42c0-12 2-22 7-31" />
      <path d="M32 42c1-9 3-16 8-22" />
      <path d="M19 26c-4-3-7-4-11-2 2 4 5 6 10 6" />
      <path d="M29 25c4-4 7-5 11-4-1 4-4 7-10 8" />
      <path d="M24 32c-3-4-6-6-10-5 1 4 4 7 10 8" />
    </svg>
  );
}

function MountainIcon({ size = 34 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 39h38" />
      <path d="M8 39 21 14l8 13 4-7 11 19" />
      <path d="M17 22h8" />
      <path d="m29 27 4-7" />
      <path d="M12 39c4-4 8-6 13-6s8 2 12 6" />
    </svg>
  );
}

function WetlandIcon({ size = 34 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M8 38c7-3 25-3 32 0" />
      <path d="M12 42c6-2 18-2 24 0" />
      <path d="M15 36c0-10 2-18 6-25" />
      <path d="M24 36V8" />
      <path d="M33 36c0-10-2-18-6-25" />
      <path d="M14 18h5" />
      <path d="M29 18h5" />
      <path d="M20 25c-4-3-7-4-11-2" />
      <path d="M28 25c4-3 7-4 11-2" />
    </svg>
  );
}

function ForestIcon({ size = 34 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M15 40V21" />
      <path d="M31 40V15" />
      <path d="M15 11 7 25h16Z" />
      <path d="m15 20-10 16h20Z" />
      <path d="M31 7 22 23h18Z" />
      <path d="m31 19-11 18h22Z" />
      <path d="M6 42h36" />
      <path d="M13 38c-4-4-7-5-10-4 1 4 4 6 9 6" />
      <path d="M22 38c4-5 8-7 13-6-1 5-5 8-12 8" />
    </svg>
  );
}

function UnknownHabitatIcon({ size = 34 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M7 16h14l4 5h16v18H7Z" />
      <path d="M20 28a4 4 0 1 1 6.8 2.9c-1.8 1.7-3.2 2.7-3.2 5" />
      <path d="M23.6 39h.01" />
    </svg>
  );
}

function KeyIcon() {
  return (
    <img src="assets/archive-butterflies/map-legend-icon.svg" alt="" className="h-6 w-6" aria-hidden="true" />
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

function ButterflyOutlineIcon() {
  return (
    <svg width="29" height="29" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M15.5 15.7C10 8.4 5.5 5.7 3.1 8.3.7 10.9 3.4 18.9 9.7 18.7c2.7-.1 4.5-1.3 5.8-3Z" />
      <path d="M16.5 15.7c5.5-7.3 10-10 12.4-7.4 2.4 2.6-.3 10.6-6.6 10.4-2.7-.1-4.5-1.3-5.8-3Z" />
      <path d="M15.4 17.1c-4.9 1.9-7.5 4.8-6.5 7.2 1.1 2.6 5.7 1.8 7.1-3.3" />
      <path d="M16.6 17.1c4.9 1.9 7.5 4.8 6.5 7.2-1.1 2.6-5.7 1.8-7.1-3.3" />
      <path d="M16 14.8v7.4" />
      <path d="M13.5 12.4 11.7 9.7" />
      <path d="m18.5 12.4 1.8-2.7" />
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

const wingColourNodeFills = {
  Blue: "#3b82f6",
  Orange: "#f97316",
  Yellow: "#fde047",
  Coloured: "linear-gradient(135deg, #6366f1, #ec4899)",
  White: "#ffffff",
  Green: "#22c55e",
  Purple: "#a855f7",
  Red: "#ef4444",
  Brown: "#92400e",
  Black: "#1f2937",
};

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
  { label: "Coloured", gradient: "linear-gradient(135deg, #6366f1, #ec4899)" },
  { label: "White", color: "#ffffff" },
  { label: "Green", color: "#22c55e" },
  { label: "Purple", color: "#a855f7" },
  { label: "Brown", color: "#92400e" },
  { label: "Red", color: "#ef4444" },
  { label: "Black", color: "#1f2937" },
];

const habitatFilterOptions = habitatKeys.map((habitat) => ({
  label: habitat,
  color: habitats[habitat].dotColor,
}));

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

const butterflyMigrationInteractivePath = "/assets/archive-butterflies/revised%20migration/display.html";

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

const numberedButterflyWingColours = [
  { image: "assets/archive-butterflies/butterfly-01.jpg", wingColour: "Orange" },
  { image: "assets/archive-butterflies/butterfly-02.jpg", wingColour: "Orange" },
  { image: "assets/archive-butterflies/butterfly-03.jpg", wingColour: "White" },
  { image: "assets/archive-butterflies/butterfly-04.jpg", wingColour: "Black" },
  { image: "assets/archive-butterflies/butterfly-05.jpg", wingColour: "Yellow" },
  { image: "assets/archive-butterflies/butterfly-06.jpg", wingColour: "White" },
  { image: "assets/archive-butterflies/butterfly-07.jpg", wingColour: "White" },
  { image: "assets/archive-butterflies/butterfly-08.jpg", wingColour: "White" },
  { image: "assets/archive-butterflies/butterfly-09.jpg", wingColour: "Blue" },
  { image: "assets/archive-butterflies/butterfly-10.jpg", wingColour: "Yellow" },
  { image: "assets/archive-butterflies/butterfly-11.jpg", wingColour: "White" },
  { image: "assets/archive-butterflies/butterfly-12.jpg", wingColour: "Orange" },
  { image: "assets/archive-butterflies/butterfly-13.jpg", wingColour: "Green" },
  { image: "assets/archive-butterflies/butterfly-14.jpg", wingColour: "Black" },
  { image: "assets/archive-butterflies/butterfly-15.jpg", wingColour: "Coloured" },
  { image: "assets/archive-butterflies/butterfly-16.jpg", wingColour: "Black" },
  { image: "assets/archive-butterflies/butterfly-17.jpg", wingColour: "Black" },
  { image: "assets/archive-butterflies/butterfly-18.jpg", wingColour: "Coloured" },
  { image: "assets/archive-butterflies/butterfly-19.jpg", wingColour: "Coloured" },
  { image: "assets/archive-butterflies/butterfly-20.jpg", wingColour: "Green" },
  { image: "assets/archive-butterflies/butterfly-21.jpg", wingColour: "Orange" },
  { image: "assets/archive-butterflies/butterfly-22.jpg", wingColour: "Brown" },
  { image: "assets/archive-butterflies/butterfly-23.png", wingColour: "Green" },
  { image: "assets/archive-butterflies/butterfly-24.png", wingColour: "White" },
  { image: "assets/archive-butterflies/butterfly-25.png", wingColour: "Coloured" },
  { image: "assets/archive-butterflies/butterfly-26.png", wingColour: "Orange" },
  { image: "assets/archive-butterflies/butterfly-27.png", wingColour: "White" },
  { image: "assets/archive-butterflies/butterfly-28.png", wingColour: "Green" },
  { image: "assets/archive-butterflies/butterfly-29.png", wingColour: "Coloured" },
  { image: "assets/archive-butterflies/butterfly-30.png", wingColour: "Orange" },
  { image: "assets/archive-butterflies/butterfly-31.jpg", wingColour: "Coloured" },
  { image: "assets/archive-butterflies/butterfly-32.jpg", wingColour: "Purple" },
  { image: "assets/archive-butterflies/butterfly-33.jpg", wingColour: "Green" },
  { image: "assets/archive-butterflies/butterfly-34.jpg", wingColour: "Coloured" },
  { image: "assets/archive-butterflies/butterfly-35.jpg", wingColour: "Coloured" },
  { image: "assets/archive-butterflies/butterfly-36.jpg", wingColour: "Orange" },
  { image: "assets/archive-butterflies/butterfly-37.jpg", wingColour: "Red" },
  { image: "assets/archive-butterflies/butterfly-38.jpg", wingColour: "White" },
  { image: "assets/archive-butterflies/butterfly-39.jpg", wingColour: "Orange" },
  { image: "assets/archive-butterflies/butterfly-40.jpg", wingColour: "Coloured" },
  { image: "assets/archive-butterflies/butterfly-41.jpg", wingColour: "Yellow" },
  { image: "assets/archive-butterflies/butterfly-42.jpg", wingColour: "Coloured" },
  { image: "assets/archive-butterflies/butterfly-43.jpg", wingColour: "Coloured" },
  { image: "assets/archive-butterflies/butterfly-44.jpg", wingColour: "Blue" },
  { image: "assets/archive-butterflies/butterfly-45.jpg", wingColour: "Coloured" },
  { image: "assets/archive-butterflies/butterfly-46.jpg", wingColour: "Blue" },
  { image: "assets/archive-butterflies/butterfly-47.jpg", wingColour: "White" },
  { image: "assets/archive-butterflies/butterfly-48.jpg", wingColour: "Blue" },
  { image: "assets/archive-butterflies/butterfly-49.jpg", wingColour: "Yellow" },
  { image: "assets/archive-butterflies/butterfly-50.jpg", wingColour: "Coloured" },
  { image: "assets/archive-butterflies/butterfly-51.jpg", wingColour: "Red" },
  { image: "assets/archive-butterflies/butterfly-52.png", wingColour: "Blue" },
  { image: "assets/archive-butterflies/butterfly-53.jpg", wingColour: "White" },
  { image: "assets/archive-butterflies/butterfly-54.png", wingColour: "Orange" },
  { image: "assets/archive-butterflies/butterfly-55.png", wingColour: "Purple" },
  { image: "assets/archive-butterflies/butterfly-56.jpg", wingColour: "Green" },
  { image: "assets/archive-butterflies/butterfly-57.jpg", wingColour: "Yellow" },
  { image: "assets/archive-butterflies/butterfly-58.jpg", wingColour: "Coloured" },
  { image: "assets/archive-butterflies/butterfly-59.jpg", wingColour: "Orange" },
  { image: "assets/archive-butterflies/butterfly-60.jpg", wingColour: "Coloured" },
  { image: "assets/archive-butterflies/butterfly-61.jpg", wingColour: "Coloured" },
  { image: "assets/archive-butterflies/butterfly-62.jpg", wingColour: "White" },
  { image: "assets/archive-butterflies/butterfly-63.jpg", wingColour: "Coloured" },
  { image: "assets/archive-butterflies/butterfly-64.jpg", wingColour: "Yellow" },
  { image: "assets/archive-butterflies/butterfly-65.jpg", wingColour: "Red" },
  { image: "assets/archive-butterflies/butterfly-66.jpg", wingColour: "Yellow" },
  { image: "assets/archive-butterflies/butterfly-67.jpg", wingColour: "Orange" },
  { image: "assets/archive-butterflies/butterfly-68.jpg", wingColour: "Green" },
  { image: "assets/archive-butterflies/butterfly-69.jpg", wingColour: "Orange" },
  { image: "assets/archive-butterflies/butterfly-70.jpg", wingColour: "Yellow" },
  { image: "assets/archive-butterflies/butterfly-71.jpg", wingColour: "Red" },
  { image: "assets/archive-butterflies/butterfly-72.jpg", wingColour: "Coloured" },
  { image: "assets/archive-butterflies/butterfly-73.jpg", wingColour: "Yellow" },
  { image: "assets/archive-butterflies/butterfly-74.jpg", wingColour: "Brown" },
  { image: "assets/archive-butterflies/butterfly-75.jpg", wingColour: "Black" },
  { image: "assets/archive-butterflies/butterfly-76.jpg", wingColour: "Coloured" },
  { image: "assets/archive-butterflies/butterfly-77.jpg", wingColour: "Coloured" },
  { image: "assets/archive-butterflies/butterfly-78.jpg", wingColour: "Black" },
  { image: "assets/archive-butterflies/butterfly-79.jpg", wingColour: "Orange" },
  { image: "assets/archive-butterflies/butterfly-80.jpg", wingColour: "Green" },
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

const namedButterflyDetails = [
  { name: "Monarch Flower", latinName: "Danaus reference form", habitat: "Garden", wingPattern: "Stripes" },
  { name: "Golden Leafwing", latinName: "Cethosia reference form", habitat: "Forest", wingPattern: "Stripes" },
  { name: "Amber Leafwing", latinName: "Anaea reference form", habitat: "Forest", wingPattern: "Eyespots" },
  { name: "Map Hairstreak", latinName: "Cigaritis reference form", habitat: "Meadow", wingPattern: "Stripes" },
  { name: "White Grass Jewel", latinName: "Leptosia reference form", habitat: "Wetland", wingPattern: "Stripes" },
  { name: "Scarlet Mosaic", latinName: "Telipna reference form", habitat: "Forest", wingPattern: "Spots" },
  { name: "Slate Charaxes", latinName: "Charaxes reference form", habitat: "Mountain", wingPattern: "Eyespots" },
  { name: "Black Pie", latinName: "Taraka reference form", habitat: "Forest", wingPattern: "Spots" },
  { name: "Lemon Emigrant", latinName: "Catopsilia reference form", habitat: "Garden", wingPattern: "Spots" },
  { name: "Brown Pansy", latinName: "Junonia reference form", habitat: "Forest", wingPattern: "Scales" },
  { name: "Dead Leaf", latinName: "Kallima reference form", habitat: "Forest", wingPattern: "Solid" },
  { name: "Tailed Charaxes", latinName: "Polyura reference form", habitat: "Forest", wingPattern: "Eyespots" },
  { name: "Prism Skipper", latinName: "Nexus prismata", habitat: "Garden", wingPattern: "Scales" },
  { name: "Blue Pansy", latinName: "Junonia orithya reference form", habitat: "Garden", wingPattern: "Eyespots" },
  { name: "Rock Ringlet", latinName: "Erebia reference form", habitat: "Mountain", wingPattern: "Eyespots" },
  { name: "Wood Emperor", latinName: "Apatura reference form", habitat: "Mountain", wingPattern: "Eyespots" },
  { name: "Lime Swallowtail", latinName: "Papilio reference form", habitat: "Garden", wingPattern: "Spots" },
  { name: "Clouded Yellow", latinName: "Colias reference form", habitat: "Meadow", wingPattern: "Spots" },
  { name: "Meadow Brown", latinName: "Maniola reference form", habitat: "Meadow", wingPattern: "Solid" },
  { name: "Great Eggfly", latinName: "Hypolimnas reference form", habitat: "Garden", wingPattern: "Spots" },
  { name: "Plain Tiger Pair", latinName: "Danaus reference pair", habitat: "Garden", wingPattern: "Spots" },
  { name: "Pale Sergeant", latinName: "Athyma reference form", habitat: "Forest", wingPattern: "Stripes" },
  { name: "Desert White", latinName: "Pontia reference form", habitat: "Mountain", wingPattern: "Spots" },
  { name: "Purple Emperor", latinName: "Apatura reference form", habitat: "Forest", wingPattern: "Eyespots" },
  { name: "Mud-Puddling Whites", latinName: "Pieridae reference group", habitat: "Wetland", wingPattern: "Stripes" },
  { name: "Tiny Pierrot", latinName: "Tarucus reference form", habitat: "Mountain", wingPattern: "Spots" },
  { name: "White Orange-tip", latinName: "Hebomoia reference form", habitat: "Garden", wingPattern: "Stripes" },
  { name: "Yellow Jezebel", latinName: "Delias reference form", habitat: "Garden", wingPattern: "Spots" },
  { name: "Common Crow", latinName: "Euploea reference form", habitat: "Forest", wingPattern: "Spots" },
  { name: "Psyche White", latinName: "Leptosia reference form", habitat: "Wetland", wingPattern: "Solid" },
  { name: "Meadow Ringlet", latinName: "Ypthima reference form", habitat: "Meadow", wingPattern: "Eyespots" },
  { name: "Silver Pearl", latinName: "Argynnis luna", habitat: "Wetland", wingPattern: "Spots" },
  { name: "Velvet Skipper", latinName: "Hesperia veluta", habitat: "Forest", wingPattern: "Stripes" },
  { name: "Dappled Fritillary", latinName: "Speyeria maculata", habitat: "Meadow", wingPattern: "Spots" },
  { name: "Ember Glider", latinName: "Pyris ignitus", habitat: "Garden", wingPattern: "Scales" },
  { name: "Golden Sapphire", latinName: "Celastrina aurea", habitat: "Mountain", wingPattern: "Eyespots" },
  { name: "Azure Admiral", latinName: "Limenitis azura", habitat: "Forest", wingPattern: "Stripes" },
  { name: "Forest Sailor", latinName: "Pachliopta silva", habitat: "Forest", wingPattern: "Solid" },
  { name: "Coral Moon", latinName: "Actias corallina", habitat: "Garden", wingPattern: "Scales" },
  { name: "Jade Crescent", latinName: "Danais viridis", habitat: "Meadow", wingPattern: "Spots" },
  { name: "Sunset Seraph", latinName: "Heliconius vespera", habitat: "Forest", wingPattern: "Stripes" },
  { name: "Amber Dazzler", latinName: "Papilio fulgens", habitat: "Garden", wingPattern: "Scales" },
  { name: "Orchard Lace", latinName: "Euphaedra orchida", habitat: "Wetland", wingPattern: "Spots" },
  { name: "Twilight Skipper", latinName: "Carcharodus vesper", habitat: "Mountain", wingPattern: "Stripes" },
  { name: "Meadow Mirage", latinName: "Colias mirage", habitat: "Meadow", wingPattern: "Solid" },
  { name: "Orchid Spinner", latinName: "Papilio orchis", habitat: "Garden", wingPattern: "Scales" },
  { name: "Sunbeam Darter", latinName: "Junonia solis", habitat: "Meadow", wingPattern: "Stripes" },
  { name: "Moonlit Breeze", latinName: "Kallima luna", habitat: "Wetland", wingPattern: "Solid" },
  { name: "Prairie Flame", latinName: "Asterocampa ignis", habitat: "Meadow", wingPattern: "Spots" },
  { name: "Sapphire Wisp", latinName: "Celastrina vapor", habitat: "Mountain", wingPattern: "Eyespots" },
  { name: "Citrine Drift", latinName: "Gonepteryx citrina", habitat: "Garden", wingPattern: "Stripes" },
  { name: "Crimson Lantern", latinName: "Talides rubra", habitat: "Forest", wingPattern: "Spots" },
  { name: "Obsidian Shade", latinName: "Papilio obsidianus", habitat: "Mountain", wingPattern: "Solid" },
  { name: "Pearl Mist", latinName: "Leptidia perla", habitat: "Wetland", wingPattern: "Spots" },
  { name: "Verdant Haze", latinName: "Miletus virens", habitat: "Forest", wingPattern: "Scales" },
  { name: "Copper Crown", latinName: "Argynnis cuprum", habitat: "Garden", wingPattern: "Stripes" },
  { name: "Ruby Quill", latinName: "Papilio rubra", habitat: "Forest", wingPattern: "Scales" },
  { name: "Forest Ember", latinName: "Charaxes ember", habitat: "Forest", wingPattern: "Eyespots" },
  { name: "Ocean Whisper", latinName: "Colias marina", habitat: "Wetland", wingPattern: "Stripes" },
  { name: "Dawn Tapestry", latinName: "Heliconius aurora", habitat: "Garden", wingPattern: "Scales" },
  { name: "Storm Petal", latinName: "Vanessa tempestatis", habitat: "Mountain", wingPattern: "Spots" },
  { name: "Amber Kite", latinName: "Papilio kitesa", habitat: "Garden", wingPattern: "Stripes" },
  { name: "Snow Leaf", latinName: "Leptidea nivis", habitat: "Mountain", wingPattern: "Solid" },
  { name: "Bronze Warden", latinName: "Nymphalis aeneus", habitat: "Forest", wingPattern: "Scales" },
  { name: "Twilight Monarch", latinName: "Danaus vesper", habitat: "Garden", wingPattern: "Stripes" },
  { name: "Jade Echo", latinName: "Papilio echo", habitat: "Wetland", wingPattern: "Eyespots" },
  { name: "Ember Crest", latinName: "Charaxes emberis", habitat: "Forest", wingPattern: "Scales" },
  { name: "Vale Dancer", latinName: "Miletus vallis", habitat: "Meadow", wingPattern: "Stripes" },
  { name: "Meadow Flicker", latinName: "Colias flickera", habitat: "Meadow", wingPattern: "Spots" },
  { name: "Verdant Gleam", latinName: "Pieris viridia", habitat: "Forest", wingPattern: "Scales" },
  { name: "Arctic Shine", latinName: "Colias borealis", habitat: "Mountain", wingPattern: "Solid" },
  { name: "Scarlet Comet", latinName: "Vanessa cometa", habitat: "Garden", wingPattern: "Stripes" },
  { name: "Golden Arrow", latinName: "Papilio sagittus", habitat: "Meadow", wingPattern: "Stripes" },
  { name: "Prairie Pearl", latinName: "Argynnis prairia", habitat: "Meadow", wingPattern: "Spots" },
  { name: "Crystal Wing", latinName: "Himalia crystalla", habitat: "Forest", wingPattern: "Scales" },
  { name: "Carbon Shadow", latinName: "Charaxes carbonis", habitat: "Mountain", wingPattern: "Solid" },
  { name: "Highland Azure", latinName: "Polyura alticola", habitat: "Mountain", wingPattern: "Eyespots" },
  { name: "Glade Sprite", latinName: "Tirumala silvatica", habitat: "Forest", wingPattern: "Stripes" },
  { name: "Sunflare", latinName: "Heliconius solis", habitat: "Garden", wingPattern: "Scales" },
  { name: "Whisper Moth", latinName: "Danaus susurrus", habitat: "Wetland", wingPattern: "Solid" },
];

const namedButterflyProfiles = namedButterflyDetails.map((profile, index) => ({
  ...profile,
  ...numberedButterflyWingColours[index],
}));

const butterflyProfiles = [
  ...namedButterflyProfiles,
  ...numberedButterflyWingColours.slice(namedButterflyProfiles.length).map((upload, index) => {
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

const archivePositions = positions.slice(0, butterflyProfiles.length);
const modalParagraphClass = "text-[16px] leading-[1.55] text-[#3f3b39]";
const modalSmallParagraphClass = "text-[14px] leading-[1.5] text-[#6f7c91] sm:text-[15px]";
const modalItalicTextClass = "text-[#6f7f57]";
const modalProfileItalicClass = `mt-[10px] text-[16px] italic leading-tight ${modalItalicTextClass} md:text-[18px]`;
const modalSmallItalicClass = `text-[14px] italic leading-[1.5] ${modalItalicTextClass} sm:text-[15px]`;
const modalStatusProgressClass = "grid h-full place-items-center rounded-full bg-[#5f9449] text-[10px] font-bold text-white";

function normalizeWingColour(wingColour) {
  return String(wingColour || "").trim().replace(/\s+/g, " ").replace(/^[a-z]/, (char) => char.toUpperCase());
}

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
  return archivePositions.map(([top, left, size], index) => {
    const profile = butterflyProfiles[index];
    const wingColour = normalizeWingColour(profile.wingColour);
    const fillColor = wingColourNodeFills[wingColour] || fills[(index * 5 + 2) % fills.length];
    const habitat = habitatKeys[(index * 7 + 1) % habitatKeys.length];

    return {
      id: index + 1,
      name: `${profile.name} ${String(index + 1).padStart(2, "0")}`,
      title: profile.title,
      latinName: profile.latinName,
      top,
      left,
      size,
      fillColor,
      habitat,
      completeness: 45 + ((index * 13) % 50),
      delay: (index % 9) * 0.12,
      drift: 4 + (index % 5) * 1.6,
      image: profile.image,
      ringColor: habitats[habitat].ringColor,
      sectionLabel: "Butterfly Display",
      paragraphOne: `${profile.name} is represented with one of the local butterfly files while the node reflects its archive colour group.`,
      paragraphTwo: `This butterfly is classified as ${profile.wingColour.toLowerCase()} with ${profile.wingPattern.toLowerCase()} markings for the colour and wing-pattern filters.`,
      originLabel: "Origin",
      originValue: "Local butterfly file",
      wingPattern: profile.wingPattern,
      wingColour,
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
      className={`fixed inset-0 z-[100] flex ${alignmentClass} bg-black/10 p-[18px]`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.section
        role="dialog"
        aria-modal="true"
        aria-labelledby={labelledBy}
        className={`relative max-h-[92vh] overflow-auto bg-white font-sans shadow-[0_34px_80px_rgba(0,0,0,0.40)] ${className}`}
        initial={{ opacity: 0, x, y: align === "center" ? 20 : 0, scale: 0.97 }}
        animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
        exit={{ opacity: 0, x, y: align === "center" ? 20 : 0, scale: 0.97 }}
        transition={{ duration: 0.2 }}
        onClick={(event) => event.stopPropagation()}
      >
        <button type="button" onClick={onClose} aria-label="Close dialog" className="absolute right-[18px] top-[18px] z-10 grid h-6 w-6 place-items-center text-slate-400 transition active:scale-95">
          <CloseIcon size={21} />
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
      className={`inline-flex min-h-8 items-center gap-1.5 rounded-full border px-2.5 text-[11px] font-medium transition active:scale-95 sm:min-h-9 sm:px-3 sm:text-[12px] ${selected ? "border-slate-400 bg-slate-50 text-slate-950 shadow-inner" : "border-slate-200 bg-white text-slate-600"}`}
    >
      {type === "colour" ? (
        <span className="h-4 w-4 rounded-full border border-slate-200" style={{ background: option.gradient || option.color }} />
      ) : type === "dot" ? (
        <span className="h-4 w-4 rounded-full border border-slate-200" style={{ backgroundColor: option.color }} />
      ) : (
        <span className="min-w-4 text-center text-[14px] leading-none">{option.icon}</span>
      )}
      <span>{option.label}</span>
    </button>
  );
}

function FilterSection({ title, options, group, activeFilters, onToggle, type }) {
  return (
    <section>
      <h3 className="mb-2 text-[12px] font-semibold leading-tight tracking-[-0.02em] text-slate-600 sm:text-[13px]">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => (
          <FilterChip key={option.label} option={option} group={group} activeFilters={activeFilters} onToggle={onToggle} type={type} />
        ))}
      </div>
    </section>
  );
}

function AdvancedFilterModal({ activeFilters, onToggle, onReset, onClose }) {
  return (
    <ModalShell onClose={onClose} labelledBy="advanced-filter-title" align="right" className="mr-0 w-[calc(100vw-36px)] max-w-[380px] rounded-[20px] px-[18px] pb-[18px] pt-[18px] sm:mr-[18px] sm:w-full">
      <div className="mb-[18px] flex items-center justify-between gap-[18px] border-b border-slate-200 pb-[18px] pr-12">
        <h2 id="advanced-filter-title" className="m-0 max-w-[calc(100%-88px)] text-[20px] font-bold leading-tight tracking-tight text-slate-950 sm:text-[21px]">Filters</h2>
        <button type="button" onClick={onReset} className="min-h-8 rounded-full border border-slate-200 bg-white px-3 text-[11px] font-semibold text-slate-600 transition active:scale-95 sm:min-h-9 sm:text-[12px]">
          Reset Filters
        </button>
      </div>
      <div className="space-y-[18px]">
        <FilterSection title="Butterfly Wing Patterns" options={wingPatternOptions} group="wingPatterns" activeFilters={activeFilters} onToggle={onToggle} />
        <FilterSection title="Habitat" options={habitatFilterOptions} group="habitats" activeFilters={activeFilters} onToggle={onToggle} type="dot" />
        <FilterSection title="Wing Colour" options={wingColourOptions} group="wingColours" activeFilters={activeFilters} onToggle={onToggle} type="colour" />
        <FilterSection title="Mimicry" options={mimicryOptions} group="mimicry" activeFilters={activeFilters} onToggle={onToggle} />
        <FilterSection title="Migration Seasons" options={migrationOptions} group="migration" activeFilters={activeFilters} onToggle={onToggle} />
      </div>
    </ModalShell>
  );
}

function AboutMetric({ icon, value, label, tint, iconColor }) {
  return (
    <div className="flex items-center gap-4 md:gap-5">
      <div className={`grid h-11 w-11 shrink-0 place-items-center rounded-full md:h-14 md:w-14 ${tint} ${iconColor}`}>{icon}</div>
      <div>
        <div className="text-[25px] font-bold leading-none tracking-tight text-slate-950 md:text-[30px]">{value}</div>
        <div className="mt-1.5 text-[16px] leading-none text-slate-600 md:text-[19px]">{label}</div>
      </div>
    </div>
  );
}

function StatIcon({ type }) {
  if (type === "records") {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M8 3v4" />
        <path d="M16 3v4" />
        <path d="M5 9h14" />
        <rect x="7" y="7" width="10" height="13" rx="5" />
        <path d="M3 13h4" />
        <path d="M17 13h4" />
        <path d="M4 19l3-2" />
        <path d="M20 19l-3-2" />
      </svg>
    );
  }

  if (type === "habitats") {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M4 11 12 4l8 7" />
        <path d="M6.5 10v9h11v-9" />
        <path d="M10 19v-5h4v5" />
      </svg>
    );
  }

  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="12" cy="12" r="1" />
    </svg>
  );
}

function AboutArchiveModal({ onClose }) {
  return (
    <ModalShell onClose={onClose} labelledBy="info-archive-title" align="left" className="mb-[40px] ml-0 h-[1088px] w-[360px] max-w-[calc(100vw-36px)] rounded-[18px] px-8 py-10 sm:ml-[18px]">
      <h2 id="info-archive-title" className="max-w-[calc(100%-52px)] text-[24px] font-semibold leading-[1.12] text-[#1d2a1e] sm:text-[26px]">About the Archive</h2>
      <p className={`mt-[18px] ${modalParagraphClass}`}>
        This an evolving archive of butterfly records. You will explore connections through colour, habitat, completeness and discovery. Journey through the vibrant world of East African butterflies, where each wing pattern tells a story millions of years in the making and color is never accidental it is strategy.These delicate creatures, with wings painted in nature's most vibrant palette, represent millions of years of adaptation to one of Earth's most diverse ecosystems.
      </p>
      <div className="mt-[18px] space-y-[18px]">
        <AboutMetric icon={<StatIcon type="records" />} value={archivePositions.length} label="Species" tint="bg-emerald-50" iconColor="text-emerald-700" />
        <AboutMetric icon={<StatIcon type="habitats" />} value="6" label="Habitats" tint="bg-orange-50" iconColor="text-orange-700" />
        <AboutMetric icon={<StatIcon type="completeness" />} value="68%" label="Avg. completeness" tint="bg-slate-100" iconColor="text-slate-600" />
      </div>
      <div className={`mt-[18px] border-t border-slate-200 pt-[18px] ${modalParagraphClass}`}>
        Touch any circle to explore. Your path is saved as black breadcrumb dots.
      </div>
    </ModalShell>
  );
}

function VisualKeyItem({ marker, title, description }) {
  return (
    <div className="grid grid-cols-[40px_1fr] items-center gap-3">
      <div className="flex justify-center">{marker}</div>
      <div>
        <h5 className="text-[13px] font-semibold leading-tight text-[#4f7a3f]">{title}</h5>
        <p className={`mt-1.5 text-[16px] leading-[1.55] text-[#3f3b39]`}>{description}</p>
      </div>
    </div>
  );
}

function VisualKeyModal({ onClose }) {
  return (
    <ModalShell onClose={onClose} labelledBy="visual-key-title" align="right" className="mb-[40px] mr-0 w-[calc(100vw-36px)] max-w-[340px] rounded-[20px] px-[18px] pb-[40px] pt-[18px] sm:mr-[18px] sm:w-full">
      <div className="border-b border-slate-200 pb-[18px] pr-[42px]">
        <h4 id="visual-key-title" className="max-w-full text-[16px] font-medium leading-[1.22] text-[#1d2a1e] sm:text-[17px]">How to go through the archive</h4>
      </div>
      <div className="mt-[18px] space-y-[18px]">
        <VisualKeyItem
          marker={<span className="h-8 w-8 rounded-full bg-gradient-to-br from-[#aaa8ff] to-[#efd0ef]" />}
          title="Wing colour"
          description="The fill shows the butterfly's dominant wing colour."
        />
        <VisualKeyItem
          marker={<span className="h-8 w-8 rounded-full border-[5px] border-slate-200 bg-white" />}
          title="Habitat ring"
          description="The ring colour shows where the species lives"
        />
        <VisualKeyItem
          marker={
            <span className="flex h-10 w-11 items-center justify-center gap-1.5" aria-hidden="true">
              <span className="h-4 w-4 rounded-full border-[3px] border-[#d7ded4] bg-[#f6fbf4]" />
              <span className="h-8 w-8 rounded-full border-[5px] border-[#8fb07f] bg-[#eef7ea]" />
            </span>
          }
          title="Ring Size"
          description="Population Density"
        />
        <VisualKeyItem
          marker={
            <svg width="46" height="22" viewBox="0 0 136 44" fill="none" aria-hidden="true" className="mt-1">
              <path d="M6 31 C32 25 44 17 68 20 C95 24 105 29 130 30" stroke="#c7c7c7" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
          }
          title="Archive Path"
          description="Gray lines show butterflies you have caught."
        />
      </div>
    </ModalShell>
  );
}

function SpecimenScientificModal({ specimen, onClose }) {
  const [zoomOpen, setZoomOpen] = useState(false);
  const [zoomedIn, setZoomedIn] = useState(true);

  if (!specimen) return null;

  const closeZoom = () => {
    setZoomOpen(false);
    setZoomedIn(true);
  };

  const isGardenProfile = specimen.habitat === "Garden";
  const isForestProfile = specimen.habitat === "Forest";
  const isMeadowProfile = specimen.habitat === "Meadow";
  const isMountainProfile = specimen.habitat === "Mountain";
  const isWetlandProfile = specimen.habitat === "Wetland";
  const isUnknownProfile = specimen.habitat === "Unknown";
  const isHabitatProfile = isGardenProfile || isForestProfile || isMeadowProfile || isMountainProfile || isWetlandProfile || isUnknownProfile;

  return (
    <motion.div className="fixed inset-0 z-[120] flex items-center justify-center overflow-auto bg-black/10 p-[18px]" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
      <div
        className="w-full max-w-[calc(100vw-36px)]"
        style={{
          width: isHabitatProfile ? "min(1120px, calc(100vw - 36px))" : "min(780px, calc(100vw - 36px))",
        }}
      >
        <motion.section role="dialog" aria-modal="true" aria-labelledby="specimen-detail-title" className={`relative max-h-[88vh] w-full overflow-auto bg-white font-sans shadow-[0_26px_70px_rgba(15,23,42,0.24)] ${isHabitatProfile ? "grid gap-[24px] rounded-[22px] p-[24px] md:grid-cols-[390px_1fr] md:items-center md:p-[34px]" : "grid gap-[18px] rounded-[24px] p-[18px] pt-[58px] md:grid-cols-[280px_1fr] md:items-center"}`} initial={{ opacity: 0, y: 20, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 20, scale: 0.96 }} transition={{ duration: 0.22 }} onClick={(event) => event.stopPropagation()}>
          <button type="button" onClick={onClose} aria-label="Close specimen details" className="absolute right-[18px] top-[18px] z-40 grid h-6 w-6 place-items-center text-slate-400 transition active:scale-95"><CloseIcon size={21} /></button>
          {isGardenProfile ? (
            <>
              <div className="relative mx-auto w-full max-w-[340px]">
                <div className="absolute -left-10 bottom-0 h-36 w-36 rounded-full bg-[#e9f1df]" aria-hidden="true" />
                <button
                  type="button"
                  aria-label={`Zoom ${specimen.name}`}
                  onClick={() => {
                    setZoomOpen(true);
                    setZoomedIn(true);
                  }}
                  className="relative aspect-square w-full overflow-hidden rounded-full border-[8px] bg-stone-100 shadow-[0_18px_42px_rgba(45,75,38,0.18)] transition active:scale-[0.98]"
                  style={{ borderColor: specimen.ringColor || habitats[specimen.habitat]?.ringColor || "#4f843e" }}
                >
                  <img src={specimen.image} alt={specimen.name} className="h-full w-full object-cover transition duration-300 hover:scale-105" />
                </button>
                <div className="absolute bottom-4 right-5 grid h-14 w-14 place-items-center rounded-full bg-white text-[#4f7a3f] shadow-[0_12px_28px_rgba(15,23,42,0.18)]" aria-hidden="true">
                  <LeafIcon />
                </div>
              </div>

              <div className="text-left">
                <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.24em] text-[#4f7a3f]">
                  <ButterflyOutlineIcon />
                  Butterfly Profile
                </div>
                <h3 id="specimen-detail-title" className="mt-[14px] text-[24px] font-semibold leading-[1.12] text-[#1d2a1e] md:text-[30px]">
                  Meet the Common Mormon
                </h3>
                <div className={modalProfileItalicClass}>
                  A garden butterfly with bold white wing markings
                </div>
                <p className={`mt-[16px] max-w-[760px] ${modalParagraphClass}`}>
                  This butterfly is easy to spot because of the bright white band across its dark wings. It is often seen near gardens, paths, and flowering plants.
                </p>

                <div className="mt-[18px]">
                  <div className="flex items-center gap-2 text-[15px] font-bold text-[#4f7a3f]">
                    <LeafIcon />
                    Quick clues
                  </div>
                  <div className="mt-[12px] grid gap-3 sm:grid-cols-3">
                    {[
                      { label: "Dark wings", icon: "dark" },
                      { label: "White band", icon: "band" },
                      { label: "Swallowtail shape", icon: "swallowtail" },
                    ].map((clue) => (
                      <div key={clue.label} className="flex min-h-[46px] items-center gap-3 rounded-[10px] border border-slate-200 bg-white px-3 text-[13px] font-medium text-stone-800 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]">
                        <ClueIcon type={clue.icon} />
                        {clue.label}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-[18px] grid gap-[16px] border-y border-stone-200 py-[16px] sm:grid-cols-2">
                  <div className="grid grid-cols-[34px_1fr_46px] items-center gap-3 text-[#4f7a3f]">
                    <PinIcon />
                    <div className="text-stone-700">
                      <div className="text-[13px]">Found in</div>
                      <div className="mt-1 text-[16px] font-bold text-[#1d2a1e]">Garden collection</div>
                    </div>
                    <span className="text-[#4f7a3f]" aria-hidden="true"><FlowerIcon /></span>
                  </div>
                  <div className="border-stone-200 sm:border-l sm:pl-[18px]">
                    <div className="flex items-start gap-3 text-[#4f7a3f]">
                      <CircleInfoIcon />
                      <div className="flex-1 text-stone-700">
                        <div className="text-[13px]">Status</div>
                        <div className="mt-1 text-[16px] font-bold text-[#1d2a1e]">49% completed</div>
                        <div className="mt-3 h-4 overflow-hidden rounded-full bg-stone-200">
                          <div className={`${modalStatusProgressClass} w-[49%]`}>49%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-[12px] flex items-center gap-3 text-[14px] text-[#4f7a3f]">
                  <span className="grid h-7 w-7 place-items-center rounded-full bg-[#e9f1df]" aria-hidden="true"><LeafIcon /></span>
                  <span>Scientific name: <i className="text-stone-800">Papilio polytes</i></span>
                </div>
              </div>
            </>
          ) : isForestProfile ? (
            <>
              <div className="relative mx-auto w-full max-w-[340px]">
                <div className="absolute -left-10 bottom-0 h-36 w-36 rounded-full bg-[#e9f1df]" aria-hidden="true" />
                <button
                  type="button"
                  aria-label={`Zoom ${specimen.name}`}
                  onClick={() => {
                    setZoomOpen(true);
                    setZoomedIn(true);
                  }}
                  className="relative aspect-square w-full overflow-hidden rounded-full border-[8px] bg-stone-100 shadow-[0_18px_42px_rgba(45,75,38,0.18)] transition active:scale-[0.98]"
                  style={{ borderColor: specimen.ringColor || habitats[specimen.habitat]?.ringColor || "#047857" }}
                >
                  <img src={specimen.image} alt={specimen.name} className="h-full w-full object-cover transition duration-300 hover:scale-105" />
                </button>
                <div className="absolute bottom-4 right-5 grid h-14 w-14 place-items-center rounded-full bg-white text-[#4f7a3f] shadow-[0_12px_28px_rgba(15,23,42,0.18)]" aria-hidden="true">
                  <ForestIcon />
                </div>
              </div>

              <div className="text-left">
                <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.24em] text-[#4f7a3f]">
                  <ButterflyOutlineIcon />
                  Butterfly Profile
                </div>
                <h3 id="specimen-detail-title" className="mt-[14px] text-[24px] font-semibold leading-[1.12] text-[#1d2a1e] md:text-[30px]">
                  Meet the Purple Emperor
                </h3>
                <div className={modalProfileItalicClass}>
                  A forest butterfly with iridescent purple wing flashes
                </div>
                <p className={`mt-[16px] max-w-[760px] ${modalParagraphClass}`}>
                  This butterfly is often spotted in woodland clearings, oak forests, and shaded paths. Its dark wings shimmer with violet-purple tones when caught by sunlight filtering through the trees.
                </p>

                <div className="mt-[18px]">
                  <div className="flex items-center gap-2 text-[15px] font-bold text-[#4f7a3f]">
                    <LeafIcon />
                    Quick clues
                  </div>
                  <div className="mt-[12px] grid gap-3 sm:grid-cols-3">
                    {[
                      { label: "Dark wings", icon: "dark" },
                      { label: "Purple shimmer", icon: "shimmer" },
                      { label: "Forest habitat", icon: "forest" },
                    ].map((clue) => (
                      <div key={clue.label} className="flex min-h-[46px] items-center gap-3 rounded-[10px] border border-slate-200 bg-white px-3 text-[13px] font-medium text-stone-800 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]">
                        <ClueIcon type={clue.icon} />
                        {clue.label}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-[18px] grid gap-[16px] border-y border-stone-200 py-[16px] sm:grid-cols-2">
                  <div className="grid grid-cols-[34px_1fr_46px] items-center gap-3 text-[#4f7a3f]">
                    <PinIcon />
                    <div className="text-stone-700">
                      <div className="text-[13px]">Found in</div>
                      <div className="mt-1 text-[16px] font-bold text-[#1d2a1e]">Forest collection</div>
                    </div>
                    <span className="text-[#4f7a3f]" aria-hidden="true"><ForestIcon /></span>
                  </div>
                  <div className="border-stone-200 sm:border-l sm:pl-[18px]">
                    <div className="flex items-start gap-3 text-[#4f7a3f]">
                      <CircleInfoIcon />
                      <div className="flex-1 text-stone-700">
                        <div className="text-[13px]">Status</div>
                        <div className="mt-1 text-[16px] font-bold text-[#1d2a1e]">53% completed</div>
                        <div className="mt-3 h-4 overflow-hidden rounded-full bg-stone-200">
                          <div className={`${modalStatusProgressClass} w-[53%]`}>53%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-[12px] flex items-center gap-3 text-[14px] text-[#4f7a3f]">
                  <span className="grid h-7 w-7 place-items-center rounded-full bg-[#e9f1df]" aria-hidden="true"><LeafIcon /></span>
                  <span>Scientific name: <i className="text-stone-800">Apatura iris</i></span>
                </div>
              </div>
            </>
          ) : isUnknownProfile ? (
            <>
              <div className="relative mx-auto w-full max-w-[340px]">
                <div className="absolute -left-10 bottom-0 h-36 w-36 rounded-full bg-[#eef1e5]" aria-hidden="true" />
                <button
                  type="button"
                  aria-label={`Zoom ${specimen.name}`}
                  onClick={() => {
                    setZoomOpen(true);
                    setZoomedIn(true);
                  }}
                  className="relative aspect-square w-full overflow-hidden rounded-full border-[8px] bg-stone-100 shadow-[0_18px_42px_rgba(75,85,99,0.18)] transition active:scale-[0.98]"
                  style={{ borderColor: specimen.ringColor || habitats[specimen.habitat]?.ringColor || "#d4d4d8" }}
                >
                  <img src={specimen.image} alt={specimen.name} className="h-full w-full object-cover transition duration-300 hover:scale-105" />
                </button>
                <div className="absolute bottom-4 right-5 grid h-14 w-14 place-items-center rounded-full bg-white text-[#4f7a3f] shadow-[0_12px_28px_rgba(15,23,42,0.18)]" aria-hidden="true">
                  <UnknownHabitatIcon />
                </div>
              </div>

              <div className="text-left">
                <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.24em] text-[#4f7a3f]">
                  <ButterflyOutlineIcon />
                  Butterfly Profile
                </div>
                <h3 id="specimen-detail-title" className="mt-[14px] text-[24px] font-semibold leading-[1.12] text-[#1d2a1e] md:text-[30px]">
                  Meet the Mystery Swallowtail
                </h3>
                <div className={modalProfileItalicClass}>
                  A rare butterfly with an unknown habitat range
                </div>
                <p className={`mt-[16px] max-w-[760px] ${modalParagraphClass}`}>
                  Very little is known about this elusive butterfly. It has only been recorded a handful of times, and researchers are still unsure whether it prefers forest edges, open meadows, or wet lowlands.
                </p>

                <div className="mt-[18px]">
                  <div className="flex items-center gap-2 text-[15px] font-bold text-[#4f7a3f]">
                    <LeafIcon />
                    Quick clues
                  </div>
                  <div className="mt-[12px] grid gap-3 sm:grid-cols-3">
                    {[
                      { label: "Elusive species", icon: "search" },
                      { label: "Variable markings", icon: "variable" },
                      { label: "Unknown habitat", icon: "unknown" },
                    ].map((clue) => (
                      <div key={clue.label} className="flex min-h-[46px] items-center gap-3 rounded-[10px] border border-slate-200 bg-white px-3 text-[13px] font-medium text-stone-800 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]">
                        <ClueIcon type={clue.icon} />
                        {clue.label}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-[18px] grid gap-[16px] border-y border-stone-200 py-[16px] sm:grid-cols-2">
                  <div className="grid grid-cols-[34px_1fr_46px] items-center gap-3 text-[#4f7a3f]">
                    <PinIcon />
                    <div className="text-stone-700">
                      <div className="text-[13px]">Found in</div>
                      <div className="mt-1 text-[16px] font-bold text-[#1d2a1e]">Unclassified collection</div>
                    </div>
                    <span className="text-[#4f7a3f]" aria-hidden="true"><UnknownHabitatIcon /></span>
                  </div>
                  <div className="border-stone-200 sm:border-l sm:pl-[18px]">
                    <div className="flex items-start gap-3 text-[#4f7a3f]">
                      <CircleInfoIcon />
                      <div className="flex-1 text-stone-700">
                        <div className="text-[13px]">Status</div>
                        <div className="mt-1 text-[16px] font-bold text-[#1d2a1e]">18% completed</div>
                        <div className="mt-3 h-4 overflow-hidden rounded-full bg-stone-200">
                          <div className={`${modalStatusProgressClass} w-[18%]`}>18%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-[12px] flex items-center gap-3 text-[14px] text-[#4f7a3f]">
                  <span className="grid h-7 w-7 place-items-center rounded-full bg-[#e9f1df]" aria-hidden="true"><LeafIcon /></span>
                  <span>Scientific name: <i className="text-stone-800">Unidentified specimen</i></span>
                </div>
              </div>
            </>
          ) : isMeadowProfile ? (
            <>
              <div className="relative mx-auto w-full max-w-[340px]">
                <div className="absolute -left-10 bottom-0 h-36 w-36 rounded-full bg-[#efecd8]" aria-hidden="true" />
                <button
                  type="button"
                  aria-label={`Zoom ${specimen.name}`}
                  onClick={() => {
                    setZoomOpen(true);
                    setZoomedIn(true);
                  }}
                  className="relative aspect-square w-full overflow-hidden rounded-full border-[8px] bg-stone-100 shadow-[0_18px_42px_rgba(45,75,38,0.18)] transition active:scale-[0.98]"
                  style={{ borderColor: specimen.ringColor || habitats[specimen.habitat]?.ringColor || "#d97706" }}
                >
                  <img src={specimen.image} alt={specimen.name} className="h-full w-full object-cover transition duration-300 hover:scale-105" />
                </button>
                <div className="absolute bottom-4 right-5 grid h-14 w-14 place-items-center rounded-full bg-white text-[#4f7a3f] shadow-[0_12px_28px_rgba(15,23,42,0.18)]" aria-hidden="true">
                  <GrassIcon />
                </div>
              </div>

              <div className="text-left">
                <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.24em] text-[#4f7a3f]">
                  <ButterflyOutlineIcon />
                  Butterfly Profile
                </div>
                <h3 id="specimen-detail-title" className="mt-[14px] text-[24px] font-semibold leading-[1.12] text-[#1d2a1e] md:text-[30px]">
                  Meet the Meadow Brown
                </h3>
                <div className={modalProfileItalicClass}>
                  A meadow butterfly with warm brown eye-spotted wings
                </div>
                <p className={`mt-[16px] max-w-[760px] ${modalParagraphClass}`}>
                  This butterfly is a familiar sight in open meadows and grassy field edges. It flutters low over wild grasses and flowers, blending beautifully with sunlit summer grasslands.
                </p>

                <div className="mt-[18px]">
                  <div className="flex items-center gap-2 text-[15px] font-bold text-[#4f7a3f]">
                    <LeafIcon />
                    Quick clues
                  </div>
                  <div className="mt-[12px] grid gap-3 sm:grid-cols-3">
                    {[
                      { label: "Brown wings", icon: "dark" },
                      { label: "Orange patches", icon: "patch" },
                      { label: "Meadow habitat", icon: "meadow" },
                    ].map((clue) => (
                      <div key={clue.label} className="flex min-h-[46px] items-center gap-3 rounded-[10px] border border-slate-200 bg-white px-3 text-[13px] font-medium text-stone-800 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]">
                        <ClueIcon type={clue.icon} />
                        {clue.label}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-[18px] grid gap-[16px] border-y border-stone-200 py-[16px] sm:grid-cols-2">
                  <div className="grid grid-cols-[34px_1fr_46px] items-center gap-3 text-[#4f7a3f]">
                    <PinIcon />
                    <div className="text-stone-700">
                      <div className="text-[13px]">Found in</div>
                      <div className="mt-1 text-[16px] font-bold text-[#1d2a1e]">Meadow collection</div>
                    </div>
                    <span className="text-[#4f7a3f]" aria-hidden="true"><GrassIcon /></span>
                  </div>
                  <div className="border-stone-200 sm:border-l sm:pl-[18px]">
                    <div className="flex items-start gap-3 text-[#4f7a3f]">
                      <CircleInfoIcon />
                      <div className="flex-1 text-stone-700">
                        <div className="text-[13px]">Status</div>
                        <div className="mt-1 text-[16px] font-bold text-[#1d2a1e]">58% completed</div>
                        <div className="mt-3 h-4 overflow-hidden rounded-full bg-stone-200">
                          <div className={`${modalStatusProgressClass} w-[58%]`}>58%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-[12px] flex items-center gap-3 text-[14px] text-[#4f7a3f]">
                  <span className="grid h-7 w-7 place-items-center rounded-full bg-[#efecd8]" aria-hidden="true"><LeafIcon /></span>
                  <span>Scientific name: <i className="text-stone-800">Maniola jurtina</i></span>
                </div>
              </div>
            </>
          ) : isWetlandProfile ? (
            <>
              <div className="relative mx-auto w-full max-w-[340px]">
                <div className="absolute -left-10 bottom-0 h-36 w-36 rounded-full bg-[#e9f1df]" aria-hidden="true" />
                <button
                  type="button"
                  aria-label={`Zoom ${specimen.name}`}
                  onClick={() => {
                    setZoomOpen(true);
                    setZoomedIn(true);
                  }}
                  className="relative aspect-square w-full overflow-hidden rounded-full border-[8px] bg-stone-100 shadow-[0_18px_42px_rgba(45,75,38,0.18)] transition active:scale-[0.98]"
                  style={{ borderColor: specimen.ringColor || habitats[specimen.habitat]?.ringColor || "#3b82f6" }}
                >
                  <img src={specimen.image} alt={specimen.name} className="h-full w-full object-cover transition duration-300 hover:scale-105" />
                </button>
                <div className="absolute bottom-4 right-5 grid h-14 w-14 place-items-center rounded-full bg-white text-[#4f7a3f] shadow-[0_12px_28px_rgba(15,23,42,0.18)]" aria-hidden="true">
                  <WetlandIcon />
                </div>
              </div>

              <div className="text-left">
                <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.24em] text-[#4f7a3f]">
                  <ButterflyOutlineIcon />
                  Butterfly Profile
                </div>
                <h3 id="specimen-detail-title" className="mt-[14px] text-[24px] font-semibold leading-[1.12] text-[#1d2a1e] md:text-[30px]">
                  Meet the Marsh Fritillary
                </h3>
                <div className={modalProfileItalicClass}>
                  A wetland butterfly with bright orange checkered wings
                </div>
                <p className={`mt-[16px] max-w-[760px] ${modalParagraphClass}`}>
                  This butterfly is commonly found in damp meadows, marsh edges, and wet grasslands. Its bright patterned wings stand out among reeds, sedges, and moisture-loving flowers.
                </p>

                <div className="mt-[18px]">
                  <div className="flex items-center gap-2 text-[15px] font-bold text-[#4f7a3f]">
                    <LeafIcon />
                    Quick clues
                  </div>
                  <div className="mt-[12px] grid gap-3 sm:grid-cols-3">
                    {[
                      { label: "Orange pattern", icon: "orangeDot" },
                      { label: "Checkered wings", icon: "checkered" },
                      { label: "Wetland habitat", icon: "wetland" },
                    ].map((clue) => (
                      <div key={clue.label} className="flex min-h-[46px] items-center gap-3 rounded-[10px] border border-slate-200 bg-white px-3 text-[13px] font-medium text-stone-800 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]">
                        <ClueIcon type={clue.icon} />
                        {clue.label}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-[18px] grid gap-[16px] border-y border-stone-200 py-[16px] sm:grid-cols-2">
                  <div className="grid grid-cols-[34px_1fr_46px] items-center gap-3 text-[#4f7a3f]">
                    <PinIcon />
                    <div className="text-stone-700">
                      <div className="text-[13px]">Found in</div>
                      <div className="mt-1 text-[16px] font-bold text-[#1d2a1e]">Wetland collection</div>
                    </div>
                    <span className="text-[#4f7a3f]" aria-hidden="true"><WetlandIcon /></span>
                  </div>
                  <div className="border-stone-200 sm:border-l sm:pl-[18px]">
                    <div className="flex items-start gap-3 text-[#4f7a3f]">
                      <CircleInfoIcon />
                      <div className="flex-1 text-stone-700">
                        <div className="text-[13px]">Status</div>
                        <div className="mt-1 text-[16px] font-bold text-[#1d2a1e]">41% completed</div>
                        <div className="mt-3 h-4 overflow-hidden rounded-full bg-stone-200">
                          <div className={`${modalStatusProgressClass} w-[41%]`}>41%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-[12px] flex items-center gap-3 text-[14px] text-[#4f7a3f]">
                  <span className="grid h-7 w-7 place-items-center rounded-full bg-[#e9f1df]" aria-hidden="true"><LeafIcon /></span>
                  <span>Scientific name: <i className="text-stone-800">Euphydryas aurinia</i></span>
                </div>
              </div>
            </>
          ) : isMountainProfile ? (
            <>
              <div className="relative mx-auto w-full max-w-[340px]">
                <div className="absolute -left-10 bottom-0 h-36 w-36 rounded-full bg-[#e8eef2]" aria-hidden="true" />
                <button
                  type="button"
                  aria-label={`Zoom ${specimen.name}`}
                  onClick={() => {
                    setZoomOpen(true);
                    setZoomedIn(true);
                  }}
                  className="relative aspect-square w-full overflow-hidden rounded-full border-[8px] bg-stone-100 shadow-[0_18px_42px_rgba(51,65,85,0.18)] transition active:scale-[0.98]"
                  style={{ borderColor: specimen.ringColor || habitats[specimen.habitat]?.ringColor || "#64748b" }}
                >
                  <img src={specimen.image} alt={specimen.name} className="h-full w-full object-cover transition duration-300 hover:scale-105" />
                </button>
                <div className="absolute bottom-4 right-5 grid h-14 w-14 place-items-center rounded-full bg-white text-[#4f7a3f] shadow-[0_12px_28px_rgba(15,23,42,0.18)]" aria-hidden="true">
                  <MountainIcon />
                </div>
              </div>

              <div className="text-left">
                <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.24em] text-[#4f7a3f]">
                  <ButterflyOutlineIcon />
                  Butterfly Profile
                </div>
                <h3 id="specimen-detail-title" className="mt-[14px] text-[24px] font-semibold leading-[1.12] text-[#1d2a1e] md:text-[30px]">
                  Meet the Apollo Butterfly
                </h3>
                <div className={modalProfileItalicClass}>
                  A mountain butterfly with striking red eye spots
                </div>
                <p className={`mt-[16px] max-w-[760px] ${modalParagraphClass}`}>
                  This butterfly is often seen on sunny alpine slopes and rocky mountain meadows. Its pale wings and red markings make it easy to notice among high-altitude wildflowers.
                </p>

                <div className="mt-[18px]">
                  <div className="flex items-center gap-2 text-[15px] font-bold text-[#4f7a3f]">
                    <LeafIcon />
                    Quick clues
                  </div>
                  <div className="mt-[12px] grid gap-3 sm:grid-cols-3">
                    {[
                      { label: "White wings", icon: "swallowtail" },
                      { label: "Red eye spots", icon: "redEye" },
                      { label: "Mountain habitat", icon: "mountain" },
                    ].map((clue) => (
                      <div key={clue.label} className="flex min-h-[46px] items-center gap-3 rounded-[10px] border border-slate-200 bg-white px-3 text-[13px] font-medium text-stone-800 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]">
                        <ClueIcon type={clue.icon} />
                        {clue.label}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-[18px] grid gap-[16px] border-y border-stone-200 py-[16px] sm:grid-cols-2">
                  <div className="grid grid-cols-[34px_1fr_46px] items-center gap-3 text-[#4f7a3f]">
                    <PinIcon />
                    <div className="text-stone-700">
                      <div className="text-[13px]">Found in</div>
                      <div className="mt-1 text-[16px] font-bold text-[#1d2a1e]">Mountain collection</div>
                    </div>
                    <span className="text-[#4f7a3f]" aria-hidden="true"><MountainIcon /></span>
                  </div>
                  <div className="border-stone-200 sm:border-l sm:pl-[18px]">
                    <div className="flex items-start gap-3 text-[#4f7a3f]">
                      <CircleInfoIcon />
                      <div className="flex-1 text-stone-700">
                        <div className="text-[13px]">Status</div>
                        <div className="mt-1 text-[16px] font-bold text-[#1d2a1e]">36% completed</div>
                        <div className="mt-3 h-4 overflow-hidden rounded-full bg-stone-200">
                          <div className={`${modalStatusProgressClass} w-[36%]`}>36%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-[12px] flex items-center gap-3 text-[14px] text-[#4f7a3f]">
                  <span className="grid h-7 w-7 place-items-center rounded-full bg-[#e9f1df]" aria-hidden="true"><LeafIcon /></span>
                  <span>Scientific name: <i className="text-stone-800">Parnassius apollo</i></span>
                </div>
              </div>
            </>
          ) : (
            <>
          <button
            type="button"
            aria-label={`Zoom ${specimen.name}`}
            onClick={() => {
              setZoomOpen(true);
              setZoomedIn(true);
            }}
            className="mx-auto aspect-square w-[min(68vw,250px)] overflow-hidden rounded-full border-[13px] shadow-[0_20px_54px_rgba(15,23,42,0.16)] transition active:scale-[0.98] md:w-full md:border-[15px]"
            style={{ borderColor: specimen.ringColor || habitats[specimen.habitat]?.ringColor || "#047857" }}
          >
            <img src={specimen.image} alt={specimen.name} className="h-full w-full object-cover transition duration-300 hover:scale-105" />
          </button>

          <div className="text-left">
            <div className="text-[11px] font-bold uppercase tracking-[0.24em] text-slate-500">Scientific Display</div>
            <h2 id="specimen-detail-title" className="mt-[18px] text-[28px] font-black leading-[1.04] tracking-[-0.04em] text-slate-950 md:text-[32px]">{specimen.name}</h2>
            <div className="mt-[18px] text-[17px] italic leading-tight text-slate-600">{specimen.latinName}</div>
            <p className={`mt-[18px] max-w-[420px] ${modalParagraphClass}`}>{specimen.paragraphOne}</p>
            <p className={`mt-[18px] max-w-[420px] ${modalParagraphClass}`}>{specimen.paragraphTwo}</p>
            <div className="mt-[18px] max-w-[370px] border-t border-slate-200 pt-[18px]">
              <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-slate-500">{specimen.originLabel}: {specimen.originValue}</div>
              <div className="mt-[18px] text-[14px] font-medium text-slate-700">{specimen.habitat} · {specimen.completeness}% complete</div>
            </div>
          </div>
            </>
          )}
        </motion.section>
      </div>

      <AnimatePresence>
        {zoomOpen && (
          <motion.div
            className="fixed inset-0 z-[160] flex items-center justify-center overflow-auto bg-black/88 p-[18px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeZoom}
          >
            <button type="button" onClick={closeZoom} aria-label="Close zoomed butterfly" className="fixed right-[18px] top-[18px] z-20 grid h-12 w-12 place-items-center rounded-full bg-white text-slate-500 shadow-[0_16px_40px_rgba(0,0,0,0.24)] transition active:scale-95">
              <CloseIcon size={28} />
            </button>
            <motion.img
              src={specimen.image}
              alt={specimen.name}
              className="max-h-none max-w-none cursor-zoom-in rounded-[8px] bg-white object-contain shadow-[0_30px_90px_rgba(0,0,0,0.38)] transition-[width] duration-300"
              style={{ width: zoomedIn ? "min(1500px, 170vw)" : "min(92vw, 980px)" }}
              initial={{ scale: 0.86, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(event) => {
                event.stopPropagation();
                setZoomedIn((current) => !current);
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
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

          return (
            <motion.line
              key={`${from.id}-${to.id}-${index}`}
              x1={from.left}
              y1={from.top}
              x2={to.left}
              y2={to.top}
              stroke="rgba(126, 184, 130, 0.42)"
              strokeWidth="0.18"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
            />
          );
        })}
      </svg>

      {trail.map((item, index) => {
        const isLatest = index === trail.length - 1;

        return (
          <motion.span
            key={`${item.id}-${index}`}
            className="absolute grid -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full"
            style={{
              top: `${item.top}%`,
              left: `${item.left}%`,
              width: isLatest ? 58 : 36,
              height: isLatest ? 58 : 36,
              background: isLatest ? "rgba(235, 239, 151, 0.58)" : "transparent",
            }}
            initial={{ opacity: 0, scale: 0.55 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20, delay: index * 0.04 }}
          >
            <span
              className="block rounded-full"
              style={{
                width: isLatest ? 31 : 29,
                height: isLatest ? 31 : 29,
                border: "2.5px solid #16822d",
                background: isLatest ? "#178d2d" : "rgba(255,255,255,0.92)",
                boxShadow: isLatest ? "0 8px 18px rgba(23,141,45,0.22)" : "0 5px 14px rgba(15,23,42,0.08)",
              }}
            />
          </motion.span>
        );
      })}
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
          background: butterfly.fillColor,
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
      className="absolute bottom-4 left-1/2 z-40 flex max-w-[calc(100vw-24px)] -translate-x-1/2 items-center gap-2 rounded-full border border-stone-200 bg-white px-2.5 py-2 shadow-[0_18px_45px_rgba(0,0,0,0.22)] backdrop-blur md:bottom-5"
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      role="status"
      aria-live="polite"
    >
      <button
        type="button"
        onClick={onOpen}
        className={`grid h-9 w-9 shrink-0 place-items-center rounded-full text-[16px] font-medium leading-none transition active:scale-95 ${
          hasCatches ? "bg-[#14843a] text-white" : "bg-[#dff5e9] text-[#07813d]"
        }`}
        aria-label="Open caught butterflies"
      >
        {trailCount}
      </button>

      <button
        type="button"
        onClick={onOpen}
        className="max-w-[150px] truncate whitespace-nowrap rounded-full px-1 text-[15px] font-medium tracking-[-0.02em] text-black transition active:scale-95 sm:max-w-none"
      >
        Catching: {trailCount} caught
      </button>

      <button
        type="button"
        onClick={onClear}
        disabled={!hasCatches}
        className={`inline-flex min-h-9 shrink-0 items-center gap-1.5 rounded-full px-4 text-[14px] font-medium tracking-[-0.02em] transition active:scale-95 ${
          hasCatches ? "bg-[#fff1f1] text-[#e60000]" : "cursor-not-allowed bg-[#f3f5fa] text-slate-500"
        }`}
        aria-label="Clear caught butterflies"
      >
        <ClearXIcon />
        <span className="hidden sm:inline">{hasCatches ? "Clear archive" : "Clear catches"}</span>
        <span className="sm:hidden">Clear</span>
      </button>
    </motion.div>
  );
}

function TrailHistoryModal({ trail, onClose, onClear, onSelect }) {
  const uniqueTrail = trail.filter((item, index, items) => items.findIndex((candidate) => candidate.id === item.id) === index);
  const hasTrail = uniqueTrail.length > 0;
  const patternDescriptions = {
    Eyespots: "eye-spotted",
    Scales: "softly scaled",
    Solid: "solid-toned",
    Spots: "spotted",
    Stripes: "striped",
  };

  return (
    <ModalShell
      onClose={onClose}
      labelledBy="trail-history-title"
      align="center"
      className="w-[calc(100vw-36px)] max-w-[560px] rounded-[24px] px-[22px] pb-[20px] pt-[30px] sm:px-[28px] sm:pb-[24px] sm:pt-[34px]"
    >
      <div className="border-b border-slate-100 pb-[18px] pr-[42px]">
        <h4 id="trail-history-title" className="max-w-[calc(100%-52px)] text-[20px] font-medium leading-[1.12] text-[#1d2a1e] sm:text-[22px]">
          Your Butterfly Collection
        </h4>
        <p className={`mt-[14px] max-w-[520px] ${modalParagraphClass}`}>
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
                  <span className={`mt-1 block ${modalSmallItalicClass}`}>
                    A {item.habitat.toLowerCase()} butterfly with {item.wingColour.toLowerCase()} {patternDescriptions[item.wingPattern] || item.wingPattern.toLowerCase()} wings
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
              <div className={`mt-[10px] ${modalSmallParagraphClass}`}>Touch butterfly circles to catch your first butterfly.</div>
            </div>
          </div>
        )}
      </div>

      <div className="mt-[16px] flex flex-wrap items-center justify-between gap-[12px]">
        <div className="flex items-center gap-2 text-[15px] font-medium text-slate-500 sm:text-[17px]">
          <span className="text-[#4f7a3f]" aria-hidden="true"><ButterflyOutlineIcon /></span>
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

function MigrationPage() {
  return (
    <iframe
      title="Butterfly Migration Atlas"
      src={butterflyMigrationInteractivePath}
      className="fixed inset-0 block h-screen w-screen border-0"
    />
  );
}

function EastAfricaButterflyArchive() {
  const butterflies = useMemo(() => makeButterflies(), []);
  const [page, setPage] = useState("archive");
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState(null);
  const [hovered, setHovered] = useState(null);
  const [armedSpecimenId, setArmedSpecimenId] = useState(null);
  const [trail, setTrail] = useState([]);
  const [filterModalOpen, setFilterModalOpen] = useState(false);
  const [activeFilters, setActiveFilters] = useState({
    wingPatterns: new Set(),
    habitats: new Set(),
    wingColours: new Set(),
    mimicry: new Set(),
    migration: new Set(),
  });
  const [aboutOpen, setAboutOpen] = useState(false);
  const [visualKeyOpen, setVisualKeyOpen] = useState(false);
  const [trailHistoryOpen, setTrailHistoryOpen] = useState(false);

  const activeFilterCount =
    activeFilters.wingPatterns.size +
    activeFilters.habitats.size +
    activeFilters.wingColours.size +
    activeFilters.mimicry.size +
    activeFilters.migration.size;

  const toggleAdvancedFilter = (group, value) => {
    setActiveFilters((current) => {
      const next = {
        wingPatterns: new Set(current.wingPatterns),
        habitats: new Set(current.habitats),
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
    setActiveFilters({
      wingPatterns: new Set(),
      habitats: new Set(),
      wingColours: new Set(),
      mimicry: new Set(),
      migration: new Set(),
    });
  };

  const visibleButterflies = butterflies.filter((butterfly) => {
    const matchesFilter = filter === "All" || butterfly.habitat === filter;

    const matchesWingPattern = activeFilters.wingPatterns.size === 0 || activeFilters.wingPatterns.has(butterfly.wingPattern);
    const matchesHabitat = activeFilters.habitats.size === 0 || activeFilters.habitats.has(butterfly.habitat);
    const matchesWingColour = activeFilters.wingColours.size === 0 || activeFilters.wingColours.has(butterfly.wingColour);
    const matchesMimicry = activeFilters.mimicry.size === 0 || activeFilters.mimicry.has(butterfly.mimicry);
    const matchesMigration = activeFilters.migration.size === 0 || activeFilters.migration.has(butterfly.migration);

    return matchesFilter && matchesWingPattern && matchesHabitat && matchesWingColour && matchesMimicry && matchesMigration;
  });

  const handleSelect = (butterfly) => {
    setHovered(null);
    setSelected(null);
    setArmedSpecimenId(null);
    setTrail((current) => {
      if (current.some((item) => item.id === butterfly.id)) return current;
      return [...current, butterfly];
    });
  };

  const clearTrail = () => {
    setTrail([]);
    setSelected(null);
  };

  const closeOpenModals = () => {
    setAboutOpen(false);
    setVisualKeyOpen(false);
    setFilterModalOpen(false);
    setTrailHistoryOpen(false);
    setSelected(null);
    setHovered(null);
    setArmedSpecimenId(null);
  };

  const anyModalOpen = aboutOpen || visualKeyOpen || filterModalOpen || selected || trailHistoryOpen;

  if (page === "migration") {
    return <MigrationPage />;
  }

  return (
    <main className="relative h-screen min-h-[680px] overflow-hidden bg-white font-sans text-slate-950 md:min-h-[780px]">
      <header className="absolute inset-x-0 top-0 z-50 grid h-[82px] grid-cols-[1fr_auto] items-center gap-[22px] border-b border-slate-200 bg-white/94 px-4 backdrop-blur md:h-[106px] md:px-[50px]">
        <div className="whitespace-nowrap font-serif text-[20px] font-bold tracking-normal text-[#111] max-[1500px]:text-[18px]">
          East African Butterfly Archive
        </div>

        <div className="relative flex items-center justify-end gap-3">
          <button
            type="button"
            onClick={() => setPage("migration")}
            className="inline-flex min-h-[48px] items-center rounded-full bg-[#eef6ee] px-5 text-[14px] font-extrabold text-[#4b6e40] transition hover:bg-[#e5f1e6] active:scale-95 md:min-h-[62px] md:px-7 md:text-[14px]"
          >
            Migration
          </button>

          <button
            type="button"
            className="min-h-[48px] min-w-[68px] rounded-full bg-[#4b6e40] px-5 text-[14px] font-extrabold text-white shadow-[0_6px_14px_rgba(47,76,39,0.24)] transition active:scale-95 md:min-h-[62px] md:min-w-[86px] md:px-7 md:text-[14px]"
            onClick={resetAllFilters}
            aria-label="Reset filters"
          >
            {activeFilterCount > 0 ? `${activeFilterCount} Filters` : filter}
          </button>

          <button
            type="button"
            className="grid h-12 w-12 place-items-center rounded-full bg-[#eef6ee] text-[#4b6e40] transition hover:bg-[#e5f1e6] active:scale-95 md:h-[62px] md:w-[62px]"
            aria-label="Open filter menu"
            aria-expanded={filterModalOpen}
            onClick={() => setFilterModalOpen(true)}
          >
            <SlidersIcon />
          </button>
        </div>
      </header>

      {!anyModalOpen && (
        <div className="absolute left-1/2 top-[126px] z-10 hidden -translate-x-1/2 text-[21px] font-medium text-[#8aa0c1] md:block">
          {archivePositions.length} Species
        </div>
      )}

      <section className="absolute inset-0 pt-[82px] md:pt-[106px]" aria-label="Interactive butterfly archive map">
        <div
          className="absolute inset-0"
          onDoubleClick={(event) => {
            event.stopPropagation();
            closeOpenModals();
          }}
        >
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
