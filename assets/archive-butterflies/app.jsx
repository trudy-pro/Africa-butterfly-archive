
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
  { image: "assets/archive-butterflies/butterfly-01.jpg", wingColour: "Blue" },
  { image: "assets/archive-butterflies/butterfly-02.jpg", wingColour: "Orange" },
  { image: "assets/archive-butterflies/butterfly-03.jpg", wingColour: "Orange" },
  { image: "assets/archive-butterflies/butterfly-04.jpg", wingColour: "Orange" },
  { image: "assets/archive-butterflies/butterfly-05.jpg", wingColour: "Black" },
  { image: "assets/archive-butterflies/butterfly-06.jpg", wingColour: "White" },
  { image: "assets/archive-butterflies/butterfly-07.jpg", wingColour: "Brown" },
  { image: "assets/archive-butterflies/butterfly-08.jpg", wingColour: "Red" },
  { image: "assets/archive-butterflies/butterfly-09.jpg", wingColour: "Coloured" },
  { image: "assets/archive-butterflies/butterfly-10.jpg", wingColour: "White" },
  { image: "assets/archive-butterflies/butterfly-11.jpg", wingColour: "Coloured" },
  { image: "assets/archive-butterflies/butterfly-12.jpg", wingColour: "Brown" },
  { image: "assets/archive-butterflies/butterfly-13.jpg", wingColour: "Yellow" },
  { image: "assets/archive-butterflies/butterfly-14.jpg", wingColour: "Yellow" },
  { image: "assets/archive-butterflies/butterfly-15.jpg", wingColour: "Brown" },
  { image: "assets/archive-butterflies/butterfly-16.jpg", wingColour: "Orange" },
  { image: "assets/archive-butterflies/butterfly-17.jpg", wingColour: "Green" },
  { image: "assets/archive-butterflies/butterfly-18.jpg", wingColour: "Orange" },
  { image: "assets/archive-butterflies/butterfly-19.jpg", wingColour: "Yellow" },
  { image: "assets/archive-butterflies/butterfly-20.jpg", wingColour: "Brown" },
  { image: "assets/archive-butterflies/butterfly-21.jpg", wingColour: "Coloured" },
  { image: "assets/archive-butterflies/butterfly-22.jpg", wingColour: "Brown" },
  { image: "assets/archive-butterflies/butterfly-23.jpg", wingColour: "Blue" },
  { image: "assets/archive-butterflies/butterfly-24.jpg", wingColour: "Coloured" },
  { image: "assets/archive-butterflies/butterfly-25.jpg", wingColour: "Brown" },
  { image: "assets/archive-butterflies/butterfly-26.jpg", wingColour: "Green" },
  { image: "assets/archive-butterflies/butterfly-27.jpg", wingColour: "Orange" },
  { image: "assets/archive-butterflies/butterfly-28.jpg", wingColour: "Green" },
  { image: "assets/archive-butterflies/butterfly-29.jpg", wingColour: "Red" },
  { image: "assets/archive-butterflies/butterfly-30.jpg", wingColour: "Coloured" },
  { image: "assets/archive-butterflies/butterfly-31.jpg", wingColour: "White" },
  { image: "assets/archive-butterflies/butterfly-32.jpg", wingColour: "Red" },
  { image: "assets/archive-butterflies/butterfly-33.jpg", wingColour: "Orange" },
  { image: "assets/archive-butterflies/butterfly-34.jpg", wingColour: "Brown" },
  { image: "assets/archive-butterflies/butterfly-35.jpg", wingColour: "White" },
  { image: "assets/archive-butterflies/butterfly-36.jpg", wingColour: "White" },
  { image: "assets/archive-butterflies/butterfly-37.jpg", wingColour: "Green" },
  { image: "assets/archive-butterflies/butterfly-38.jpg", wingColour: "Blue" },
  { image: "assets/archive-butterflies/butterfly-39.jpg", wingColour: "Purple" },
  { image: "assets/archive-butterflies/butterfly-40.jpg", wingColour: "Red" },
  { image: "assets/archive-butterflies/butterfly-41.jpg", wingColour: "Orange" },
  { image: "assets/archive-butterflies/butterfly-42.jpg", wingColour: "Green" },
  { image: "assets/archive-butterflies/butterfly-43.jpg", wingColour: "Coloured" },
  { image: "assets/archive-butterflies/butterfly-44.jpg", wingColour: "White" },
  { image: "assets/archive-butterflies/butterfly-45.jpg", wingColour: "Blue" },
  { image: "assets/archive-butterflies/butterfly-46.jpg", wingColour: "Brown" },
  { image: "assets/archive-butterflies/butterfly-47.jpg", wingColour: "White" },
  { image: "assets/archive-butterflies/butterfly-48.jpg", wingColour: "Blue" },
  { image: "assets/archive-butterflies/butterfly-49.jpg", wingColour: "Coloured" },
  { image: "assets/archive-butterflies/butterfly-50.jpg", wingColour: "Purple" },
  { image: "assets/archive-butterflies/butterfly-51.jpg", wingColour: "Blue" },
  { image: "assets/archive-butterflies/butterfly-52.jpg", wingColour: "White" },
  { image: "assets/archive-butterflies/butterfly-53.jpg", wingColour: "Brown" },
  { image: "assets/archive-butterflies/butterfly-54.jpg", wingColour: "Red" },
  { image: "assets/archive-butterflies/butterfly-55.jpg", wingColour: "Purple" },
  { image: "assets/archive-butterflies/butterfly-56.jpg", wingColour: "Red" },
  { image: "assets/archive-butterflies/butterfly-57.jpg", wingColour: "Black" },
  { image: "assets/archive-butterflies/butterfly-58.jpg", wingColour: "Blue" },
  { image: "assets/archive-butterflies/butterfly-59.jpg", wingColour: "Blue" },
  { image: "assets/archive-butterflies/butterfly-60.jpg", wingColour: "Orange" },
  { image: "assets/archive-butterflies/butterfly-61.jpg", wingColour: "Black" },
  { image: "assets/archive-butterflies/butterfly-62.jpg", wingColour: "Yellow" },
  { image: "assets/archive-butterflies/butterfly-63.jpg", wingColour: "Yellow" },
  { image: "assets/archive-butterflies/butterfly-64.jpg", wingColour: "Black" },
  { image: "assets/archive-butterflies/butterfly-65.jpg", wingColour: "Brown" },
  { image: "assets/archive-butterflies/butterfly-66.jpg", wingColour: "Green" },
  { image: "assets/archive-butterflies/butterfly-67.jpg", wingColour: "Black" },
  { image: "assets/archive-butterflies/butterfly-68.jpg", wingColour: "White" },
  { image: "assets/archive-butterflies/butterfly-69.jpg", wingColour: "Orange" },
  { image: "assets/archive-butterflies/butterfly-70.jpg", wingColour: "Brown" },
  { image: "assets/archive-butterflies/butterfly-71.jpg", wingColour: "Red" },
  { image: "assets/archive-butterflies/butterfly-72.jpg", wingColour: "Black" },
  { image: "assets/archive-butterflies/butterfly-73.jpg", wingColour: "Orange" },
  { image: "assets/archive-butterflies/butterfly-74.jpg", wingColour: "White" },
  { image: "assets/archive-butterflies/butterfly-75.jpg", wingColour: "Green" },
  { image: "assets/archive-butterflies/butterfly-76.jpg", wingColour: "Orange" },
  { image: "assets/archive-butterflies/butterfly-77.jpg", wingColour: "Red" },
  { image: "assets/archive-butterflies/butterfly-78.jpg", wingColour: "Orange" },
  { image: "assets/archive-butterflies/butterfly-79.jpg", wingColour: "White" },
  { image: "assets/archive-butterflies/butterfly-80.jpg", wingColour: "White" },
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
  { name: "Zambezi Paradise Skipper", latinName: "Abantis zambesiaca", habitat: "Meadow", wingPattern: "Spots", title: "Zambezi Paradise Skipper", summary: "A blue butterfly with spotted wing markings from meadow habitats", paragraphOne: "Abantis zambesiaca is a butterfly in the Hesperiidae family.", paragraphTwo: "This record is classified as blue with spots wing markings and a meadow habitat label.", researchVisibility: "Sparse", contributionsWelcome: "Habitat notes, local sightings", populationRecords: 82, originValue: "Figma butterfly content" },
  { name: "Plum Judy", latinName: "Abisara echerius", habitat: "Forest", wingPattern: "Stripes", title: "Plum Judy", summary: "An orange butterfly with bold striped or banded wings from forest habitats", paragraphOne: "Abisara echerius is a butterfly in the Riodinidae family. Reference records describe it as occurring in Asia.", paragraphTwo: "This record is classified as orange with stripes wing markings and a forest habitat label.", researchVisibility: "Moderate", contributionsWelcome: "Range confirmations, habitat notes", populationRecords: 2742, originValue: "Figma butterfly content" },
  { name: "Garden Acraea", latinName: "Acraea horta", habitat: "Garden", wingPattern: "Spots", title: "Garden Acraea", summary: "An orange butterfly with spotted wing markings from garden habitats", paragraphOne: "Acraea horta is a butterfly in the Nymphalidae family. Reference records describe it as occurring in South Africa and Zimbabwe.", paragraphTwo: "This record is classified as orange with spots wing markings and a garden habitat label.", researchVisibility: "High", contributionsWelcome: "Regional sightings, photo/source notes", populationRecords: 5671, originValue: "Figma butterfly content" },
  { name: "Tawny Coster", latinName: "Acraea terpsicore", habitat: "Meadow", wingPattern: "Spots", title: "Tawny Coster", summary: "An orange butterfly with spotted wing markings from meadow habitats", paragraphOne: "Acraea terpsicore is a butterfly in the Nymphalidae family. Reference records describe it as occurring in parts of Africa.", paragraphTwo: "This record is classified as orange with spots wing markings and a meadow habitat label.", researchVisibility: "High", contributionsWelcome: "Regional sightings, photo/source notes", populationRecords: 14202, originValue: "Figma butterfly content" },
  { name: "Painted Bamboo Ringlet", latinName: "Aphysoneura pigmentaria", habitat: "Mountain", wingPattern: "Eyespots", title: "Painted Bamboo Ringlet", summary: "A black butterfly with round eyespots on the wings from mountain habitats", paragraphOne: "Aphysoneura pigmentaria is a butterfly in the Nymphalidae family. Reference records describe it as occurring in the DRC, Uganda, Kenya, Tanzania, Malawi, Zambia and Zimbabwe.", paragraphTwo: "This record is classified as black with eyespots wing markings and a mountain habitat label.", researchVisibility: "Sparse", contributionsWelcome: "Habitat notes, local sightings", populationRecords: 105, originValue: "Figma butterfly content" },
  { name: "Argyrocheila Undifera", latinName: "Argyrocheila undifera", habitat: "Forest", wingPattern: "Spots", title: "Argyrocheila Undifera", summary: "A white butterfly with spotted wing markings from forest habitats", paragraphOne: "Argyrocheila undifera is a butterfly in the Pieridae family. Reference records describe it as occurring in parts of Africa.", paragraphTwo: "This record is classified as white with spots wing markings and a forest habitat label.", researchVisibility: "Sparse", contributionsWelcome: "Habitat notes, local sightings", populationRecords: 72, originValue: "Figma butterfly content" },
  { name: "Aslauga Imitans", latinName: "Aslauga imitans", habitat: "Forest", wingPattern: "Solid", title: "Aslauga Imitans", summary: "A brown butterfly with shimmering scale colours from forest habitats", paragraphOne: "Aslauga imitans is a butterfly in the Lycaenidae family. Reference records describe it as occurring in Ghana, western Cameroon and the Democratic Republic of the Congo.", paragraphTwo: "This record is classified as brown with solid wing markings and a forest habitat label.", researchVisibility: "Very sparse", contributionsWelcome: "Basic sightings, habitat notes", populationRecords: 14, originValue: "Figma butterfly content" },
  { name: "Axiocerses Collinsi", latinName: "Axiocerses collinsi", habitat: "Forest", wingPattern: "Scales", title: "Axiocerses Collinsi", summary: "A red butterfly with shimmering scale colours from forest habitats", paragraphOne: "Axiocerses collinsi is a butterfly in the Lycaenidae family. Reference records describe it as occurring in the coastal forests of Kenya.", paragraphTwo: "This record is classified as red with scales wing markings and a forest habitat label.", researchVisibility: "High", contributionsWelcome: "Regional sightings, photo/source notes", populationRecords: 5390, originValue: "Figma butterfly content" },
  { name: "Sophus Forester", latinName: "Bebearia sophus", habitat: "Forest", wingPattern: "Stripes", title: "Sophus Forester", summary: "A brown butterfly with bold striped or banded wings from forest habitats", paragraphOne: "Bebearia sophus is a butterfly in the Nymphalidae family. Reference records describe it as occurring in parts of Africa.", paragraphTwo: "This record is classified as coloured with stripes wing markings and a forest habitat label.", researchVisibility: "Sparse", contributionsWelcome: "Habitat notes, local sightings", populationRecords: 359, originValue: "Figma butterfly content" },
  { name: "Pioneer White", latinName: "Belenois aurota", habitat: "Meadow", wingPattern: "Stripes", title: "Pioneer White", summary: "A white butterfly with bold striped or banded wings from meadow habitats", paragraphOne: "Belenois aurota is a butterfly in the Pieridae family. Reference records describe it as occurring in South Asia and Africa.", paragraphTwo: "This record is classified as white with stripes wing markings and a meadow habitat label.", researchVisibility: "High", contributionsWelcome: "Regional sightings, photo/source notes", populationRecords: 17718, originValue: "Figma butterfly content" },
  { name: "Small Marbled Bush Brown", latinName: "Bicyclus auricruda", habitat: "Forest", wingPattern: "Eyespots", title: "Small Marbled Bush Brown", summary: "A brown butterfly with round eyespots on the wings from forest habitats", paragraphOne: "Bicyclus auricruda is a butterfly in the Nymphalidae family. Reference records describe it as occurring in parts of Africa.", paragraphTwo: "This record is classified as coloured with eyespots wing markings and a forest habitat label.", researchVisibility: "Sparse", contributionsWelcome: "Habitat notes, local sightings", populationRecords: 144, originValue: "Figma butterfly content" },
  { name: "Chirinda Bush Brown", latinName: "Bicyclus campinus ocelligerus", habitat: "Meadow", wingPattern: "Eyespots", title: "Chirinda Bush Brown", summary: "A brown butterfly with round eyespots on the wings from meadow habitats", paragraphOne: "Bicyclus campinus ocelligerus is a butterfly in the Nymphalidae family.", paragraphTwo: "This record is classified as brown with eyespots wing markings and a meadow habitat label.", researchVisibility: "Very sparse", contributionsWelcome: "Basic sightings, habitat notes", populationRecords: 75, originValue: "Figma butterfly content" },
  { name: "Uniform Bush Brown", latinName: "Bicyclus uniformis", habitat: "Forest", wingPattern: "Eyespots", title: "Uniform Bush Brown", summary: "A brown butterfly with round eyespots on the wings from forest habitats", paragraphOne: "Bicyclus uniformis is a butterfly in the Nymphalidae family. Reference records describe it as occurring in parts of Africa.", paragraphTwo: "This record is classified as yellow with eyespots wing markings and a forest habitat label.", researchVisibility: "Sparse", contributionsWelcome: "Habitat notes, local sightings", populationRecords: 63, originValue: "Figma butterfly content" },
  { name: "Brakefieldia Eliasis", latinName: "Brakefieldia eliasis", habitat: "Forest", wingPattern: "Eyespots", title: "Brakefieldia Eliasis", summary: "A brown butterfly with round eyespots on the wings from forest habitats", paragraphOne: "Brakefieldia eliasis is listed in biodiversity taxon references as a butterfly in the Nymphalidae family.", paragraphTwo: "This record is classified as yellow with eyespots wing markings and a forest habitat label.", researchVisibility: "Very sparse", contributionsWelcome: "Basic sightings, habitat notes", populationRecords: 3, originValue: "Figma butterfly content" },
  { name: "Brakefieldia Ochracea", latinName: "Brakefieldia ochracea", habitat: "Forest", wingPattern: "Eyespots", title: "Brakefieldia Ochracea", summary: "A brown butterfly with round eyespots on the wings from forest habitats", paragraphOne: "Brakefieldia ochracea is listed in biodiversity taxon references as a butterfly in the Nymphalidae family.", paragraphTwo: "This record is classified as brown with eyespots wing markings and a forest habitat label.", researchVisibility: "Sparse", contributionsWelcome: "Habitat notes, local sightings", populationRecords: 164, originValue: "Figma butterfly content" },
  { name: "Rainforest Dancing Brown", latinName: "Cassionympha cassius", habitat: "Wetland", wingPattern: "Eyespots", title: "Rainforest Dancing Brown", summary: "A brown butterfly with round eyespots on the wings from wetland habitats", paragraphOne: "Cassionympha cassius is a butterfly in the Nymphalidae family. Reference records describe it as occurring in parts of Africa.", paragraphTwo: "This record is classified as orange with eyespots wing markings and a wetland habitat label.", researchVisibility: "Moderate", contributionsWelcome: "Range confirmations, habitat notes", populationRecords: 3081, originValue: "Figma butterfly content" },
  { name: "African Migrant", latinName: "Catopsilia florella", habitat: "Garden", wingPattern: "Solid", title: "African Migrant", summary: "A white butterfly with broad, mostly solid wing colour from garden habitats", paragraphOne: "Catopsilia florella is a butterfly in the Pieridae family. Reference records describe it as occurring in Africa, Arabia and the Canary Islands.", paragraphTwo: "This record is classified as green with solid wing markings and a garden habitat label.", researchVisibility: "Moderate", contributionsWelcome: "Range confirmations, habitat notes", populationRecords: 10432, originValue: "Figma butterfly content" },
  { name: "Cephetola Collinsi", latinName: "Cephetola collinsi", habitat: "Forest", wingPattern: "Solid", title: "Cephetola Collinsi", summary: "An orange butterfly with shimmering scale colours from forest habitats", paragraphOne: "Cephetola collinsi is a butterfly in the Lycaenidae family. Reference records describe it as occurring in Ivory Coast, Ghana, Togo and southern Nigeria.", paragraphTwo: "This record is classified as orange with solid wing markings and a forest habitat label.", researchVisibility: "Very sparse", contributionsWelcome: "Basic sightings, habitat notes", populationRecords: 1, originValue: "Figma butterfly content" },
  { name: "Common Forest Sylph", latinName: "Ceratrichia phocion", habitat: "Forest", wingPattern: "Spots", title: "Common Forest Sylph", summary: "A yellow skipper with spotted wing markings, associated with forest habitats", paragraphOne: "Ceratrichia phocion is a butterfly in the Hesperiidae family.", paragraphTwo: "This record is classified as yellow with spots wing markings and a forest habitat label.", researchVisibility: "Sparse", contributionsWelcome: "Habitat notes, local sightings", populationRecords: 121, originValue: "Figma butterfly content" },
  { name: "Blue Striped Prince", latinName: "Charaxes baumanni", habitat: "Meadow", wingPattern: "Scales", title: "Blue Striped Prince", summary: "A brown butterfly with spotted wing markings from meadow habitats", paragraphOne: "Charaxes baumanni is a butterfly in the Nymphalidae family. Reference records describe it as occurring in Sudan, Kenya, the Democratic Republic of the Congo, Uganda, Rwanda, Tanzania, Zambia, Malawi, Mozambique and Zimbabwe.", paragraphTwo: "This record is classified as brown with scales wing markings and a meadow habitat label.", researchVisibility: "Sparse", contributionsWelcome: "Habitat notes, local sightings", populationRecords: 172, originValue: "Figma butterfly content" },
  { name: "Charaxes Brutus", latinName: "Charaxes brutus angustus", habitat: "Forest", wingPattern: "Spots", title: "Charaxes Brutus", summary: "A multi-coloured butterfly with spotted wing markings from forest habitats", paragraphOne: "Charaxes brutus angustus is a butterfly in the Nymphalidae family. Reference records describe it as occurring in Africa.", paragraphTwo: "This record is classified as coloured with spots wing markings and a forest habitat label.", researchVisibility: "Sparse", contributionsWelcome: "Habitat notes, local sightings", populationRecords: 352, originValue: "Figma butterfly content" },
  { name: "Green Demon Charaxes", latinName: "Charaxes cedreatis", habitat: "Forest", wingPattern: "Scales", title: "Green Demon Charaxes", summary: "A brown butterfly with spotted wing markings from forest habitats", paragraphOne: "Charaxes cedreatis is a butterfly in the Nymphalidae family. Reference records describe it as occurring in parts of Africa.", paragraphTwo: "This record is classified as brown with scales wing markings and a forest habitat label.", researchVisibility: "Sparse", contributionsWelcome: "Habitat notes, local sightings", populationRecords: 475, originValue: "Figma butterfly content" },
  { name: "Auroral Blue Queen", latinName: "Charaxes doubledayi", habitat: "Forest", wingPattern: "Scales", title: "Auroral Blue Queen", summary: "A blue butterfly with spotted wing markings from forest habitats", paragraphOne: "Charaxes doubledayi is a butterfly in the Nymphalidae family. Reference records describe it as occurring in parts of Africa.", paragraphTwo: "This record is classified as blue with scales wing markings and a forest habitat label.", researchVisibility: "Very sparse", contributionsWelcome: "Basic sightings, habitat notes", populationRecords: 68, originValue: "Figma butterfly content" },
  { name: "Savannah Charaxes", latinName: "Charaxes etesipe", habitat: "Meadow", wingPattern: "Spots", title: "Savannah Charaxes", summary: "A multi-coloured butterfly with spotted wing markings from meadow habitats", paragraphOne: "Charaxes etesipe is a butterfly in the Nymphalidae family.", paragraphTwo: "This record is classified as coloured with spots wing markings and a meadow habitat label.", researchVisibility: "Sparse", contributionsWelcome: "Habitat notes, local sightings", populationRecords: 723, originValue: "Figma butterfly content" },
  { name: "Imperial Blue Charaxes", latinName: "Charaxes imperialis", habitat: "Forest", wingPattern: "Stripes", title: "Imperial Blue Charaxes", summary: "A brown butterfly with spotted wing markings from forest habitats", paragraphOne: "Charaxes imperialis is a butterfly in the Nymphalidae family. Reference records describe it as occurring in parts of Africa.", paragraphTwo: "This record is classified as brown with stripes wing markings and a forest habitat label.", researchVisibility: "Sparse", contributionsWelcome: "Habitat notes, local sightings", populationRecords: 325, originValue: "Figma butterfly content" },
  { name: "Ornate Green Charaxes", latinName: "Charaxes subornatus", habitat: "Forest", wingPattern: "Solid", title: "Ornate Green Charaxes", summary: "A green butterfly with spotted wing markings from forest habitats", paragraphOne: "Charaxes subornatus is a butterfly in the Nymphalidae family. Reference records describe it as occurring in parts of Africa.", paragraphTwo: "This record is classified as green with solid wing markings and a forest habitat label.", researchVisibility: "Sparse", contributionsWelcome: "Habitat notes, local sightings", populationRecords: 170, originValue: "Figma butterfly content" },
  { name: "African White Pearl Emperor", latinName: "Charaxes varanes vologeses", habitat: "Forest", wingPattern: "Spots", title: "African White Pearl Emperor", summary: "An orange butterfly with spotted wing markings from forest habitats", paragraphOne: "Charaxes varanes vologeses is a butterfly in the Nymphalidae family. Reference records describe it as occurring in Africa from Saudi Arabia to South Africa.", paragraphTwo: "This record is classified as orange with spots wing markings and a forest habitat label.", researchVisibility: "Sparse", contributionsWelcome: "Habitat notes, local sightings", populationRecords: 459, originValue: "Figma butterfly content" },
  { name: "Cigaritis Crustaria", latinName: "Cigaritis crustaria", habitat: "Forest", wingPattern: "Stripes", title: "Cigaritis Crustaria", summary: "A green butterfly with bold striped or banded wings from forest habitats", paragraphOne: "Cigaritis crustaria is a butterfly in the Lycaenidae family. Reference records describe it as occurring in parts of Africa.", paragraphTwo: "This record is classified as green with stripes wing markings and a forest habitat label.", researchVisibility: "Very sparse", contributionsWelcome: "Basic sightings, habitat notes", populationRecords: 41, originValue: "Figma butterfly content" },
  { name: "Colotis Celimene", latinName: "Colotis celimene sudanicus", habitat: "Meadow", wingPattern: "Spots", title: "Colotis Celimene", summary: "A red butterfly with spotted wing markings from meadow habitats", paragraphOne: "Colotis celimene sudanicus is a butterfly in the Pieridae family. Reference records describe it as occurring in the Afrotropical realm.", paragraphTwo: "This record is classified as red with spots wing markings and a meadow habitat label.", researchVisibility: "Sparse", contributionsWelcome: "Habitat notes, local sightings", populationRecords: 384, originValue: "Figma butterfly content" },
  { name: "Tailed Meadow Blue", latinName: "Cupidopsis jobates", habitat: "Meadow", wingPattern: "Stripes", title: "Tailed Meadow Blue", summary: "A blue butterfly with spotted wing markings from meadow habitats", paragraphOne: "Cupidopsis jobates is a butterfly in the Lycaenidae family. Reference records describe it as occurring in most of Africa, south of the Sahara.", paragraphTwo: "This record is classified as coloured with stripes wing markings and a meadow habitat label.", researchVisibility: "Sparse", contributionsWelcome: "Habitat notes, local sightings", populationRecords: 836, originValue: "Figma butterfly content" },
  { name: "Herminia Glider", latinName: "Cymothoe herminia jonhstoni", habitat: "Mountain", wingPattern: "Stripes", title: "Herminia Glider", summary: "A white butterfly with bold striped or banded wings from mountain habitats", paragraphOne: "Cymothoe herminia jonhstoni is a butterfly in the Nymphalidae family. Reference records describe it as occurring in parts of Africa.", paragraphTwo: "This record is classified as white with stripes wing markings and a mountain habitat label.", researchVisibility: "Very sparse", contributionsWelcome: "Basic sightings, habitat notes", populationRecords: 69, originValue: "Figma butterfly content" },
  { name: "Blood-red Glider", latinName: "Cymothoe sangaris", habitat: "Forest", wingPattern: "Solid", title: "Blood-red Glider", summary: "A red butterfly with broad, mostly solid wing colour from forest habitats", paragraphOne: "Cymothoe sangaris is a butterfly in the Nymphalidae family. Reference records describe it as occurring in Central Africa.", paragraphTwo: "This record is classified as red with solid wing markings and a forest habitat label.", researchVisibility: "Sparse", contributionsWelcome: "Habitat notes, local sightings", populationRecords: 450, originValue: "Figma butterfly content" },
  { name: "Plain Tiger Butterfly", latinName: "Danaus chrysippus", habitat: "Meadow", wingPattern: "Spots", title: "Plain Tiger Butterfly", summary: "An orange butterfly with spotted wing markings from meadow habitats", paragraphOne: "Danaus chrysippus is a butterfly in the Nymphalidae family. Reference records describe it as occurring in drier, wide-open areas.", paragraphTwo: "This record is classified as orange with spots wing markings and a meadow habitat label.", researchVisibility: "High", contributionsWelcome: "Regional sightings, photo/source notes", populationRecords: 55646, originValue: "Figma butterfly content" },
  { name: "Western Virgin", latinName: "Dapidodigma hymen", habitat: "Forest", wingPattern: "Stripes", title: "Western Virgin", summary: "A brown butterfly with shimmering scale colours from forest habitats", paragraphOne: "Dapidodigma hymen is a butterfly in the Lycaenidae family.", paragraphTwo: "This record is classified as brown with stripes wing markings and a forest habitat label.", researchVisibility: "Very sparse", contributionsWelcome: "Basic sightings, habitat notes", populationRecords: 31, originValue: "Figma butterfly content" },
  { name: "Dixeia Charina", latinName: "Dixeia charina liliana", habitat: "Meadow", wingPattern: "Stripes", title: "Dixeia Charina", summary: "A white butterfly with bold striped or banded wings from meadow habitats", paragraphOne: "Dixeia charina liliana is a butterfly in the Pieridae family. Reference records describe it as occurring in southeastern Africa.", paragraphTwo: "This record is classified as white with stripes wing markings and a meadow habitat label.", researchVisibility: "Sparse", contributionsWelcome: "Habitat notes, local sightings", populationRecords: 1788, originValue: "Figma butterfly content" },
  { name: "Eastern Cream Flat", latinName: "Eagris lucetia", habitat: "Forest", wingPattern: "Stripes", title: "Eastern Cream Flat", summary: "A white butterfly with bold striped or banded wings from forest habitats", paragraphOne: "Eagris lucetia is a butterfly in the Hesperiidae family.", paragraphTwo: "This record is classified as white with stripes wing markings and a forest habitat label.", researchVisibility: "Sparse", contributionsWelcome: "Habitat notes, local sightings", populationRecords: 247, originValue: "Figma butterfly content" },
  { name: "Ceres Forester", latinName: "Euphaedra ceres", habitat: "Forest", wingPattern: "Spots", title: "Ceres Forester", summary: "A green butterfly with spotted wing markings from forest habitats", paragraphOne: "Euphaedra ceres is a butterfly in the Nymphalidae family.", paragraphTwo: "This record is classified as green with spots wing markings and a forest habitat label.", researchVisibility: "Sparse", contributionsWelcome: "Habitat notes, local sightings", populationRecords: 456, originValue: "Figma butterfly content" },
  { name: "Widespread Forester", latinName: "Euphaedra medon", habitat: "Forest", wingPattern: "Spots", title: "Widespread Forester", summary: "A blue butterfly with spotted wing markings from forest habitats", paragraphOne: "Euphaedra medon is a butterfly in the Nymphalidae family.", paragraphTwo: "This record is classified as blue with spots wing markings and a forest habitat label.", researchVisibility: "Moderate", contributionsWelcome: "Range confirmations, habitat notes", populationRecords: 1123, originValue: "Figma butterfly content" },
  { name: "Violet Forester", latinName: "Euphaedra violacea", habitat: "Forest", wingPattern: "Scales", title: "Violet Forester", summary: "A purple butterfly with spotted wing markings from forest habitats", paragraphOne: "Euphaedra violacea is listed in biodiversity taxon references as a butterfly in the Nymphalidae family.", paragraphTwo: "This record is classified as purple with scales wing markings and a forest habitat label.", researchVisibility: "Moderate", contributionsWelcome: "Range confirmations, habitat notes", populationRecords: 11742, originValue: "Figma butterfly content" },
  { name: "Zaddach's Mimic Forester", latinName: "Euphaedra zaddachii", habitat: "Forest", wingPattern: "Stripes", title: "Zaddach's Mimic Forester", summary: "An orange butterfly with bold striped or banded wings from forest habitats", paragraphOne: "Euphaedra zaddachii is a butterfly in the Nymphalidae family. Reference records describe it as occurring in parts of Africa.", paragraphTwo: "This record is classified as red with stripes wing markings and a forest habitat label.", researchVisibility: "Sparse", contributionsWelcome: "Habitat notes, local sightings", populationRecords: 161, originValue: "Figma butterfly content" },
  { name: "Euptera Hirundo", latinName: "Euptera hirundo", habitat: "Forest", wingPattern: "Spots", title: "Euptera Hirundo", summary: "An orange butterfly with spotted wing markings from forest habitats", paragraphOne: "Euptera hirundo is a butterfly in the Nymphalidae family. Reference records describe it as occurring in Cameroon, Gabon, the Democratic Republic of the Congo, Uganda, Kenya, Zambia and Tanzania.", paragraphTwo: "This record is classified as orange with spots wing markings and a forest habitat label.", researchVisibility: "Very sparse", contributionsWelcome: "Basic sightings, habitat notes", populationRecords: 43, originValue: "Figma butterfly content" },
  { name: "Mottled-green Nymph", latinName: "Euryphura achlys", habitat: "Forest", wingPattern: "Spots", title: "Mottled-green Nymph", summary: "A green butterfly with spotted wing markings from forest habitats", paragraphOne: "Euryphura achlys is listed in biodiversity taxon references as a butterfly in the Nymphalidae family.", paragraphTwo: "This record is classified as green with spots wing markings and a forest habitat label.", researchVisibility: "Sparse", contributionsWelcome: "Habitat notes, local sightings", populationRecords: 202, originValue: "Figma butterfly content" },
  { name: "Gabelana rosei", latinName: "Gabelana rosei", habitat: "Forest", wingPattern: "Spots", title: "Gabelana rosei", summary: "A toxic, spotted pink butterfly from East African savannas", paragraphOne: "Stephenia caecilia is a butterfly belonging to the Nymphalidae family. The scientific name of this species was first proposed as Papilio caecilia by Johann Christian Fabricius in a publication in 1781.", paragraphTwo: "This record is classified as coloured with spots wing markings and a forest habitat label.", researchVisibility: "Very sparse", contributionsWelcome: "Basic sightings, habitat notes", populationRecords: 0, originValue: "Figma butterfly content" },
  { name: "Glutophrissa White", latinName: "Glutophrissa", habitat: "Forest", wingPattern: "Solid", title: "Glutophrissa White", summary: "A white butterfly with broad, mostly solid wing colour from forest habitats", paragraphOne: "Glutophrissa is listed in biodiversity taxon references as a butterfly in the Pieridae family.", paragraphTwo: "This record is classified as white with solid wing markings and a forest habitat label.", researchVisibility: "Moderate", contributionsWelcome: "Range confirmations, habitat notes", populationRecords: 11885, originValue: "Figma butterfly content" },
  { name: "Large Striped Swordtail", latinName: "Graphium antheus", habitat: "Forest", wingPattern: "Stripes", title: "Large Striped Swordtail", summary: "A blue butterfly with bold striped or banded wings from forest habitats", paragraphOne: "Graphium antheus is listed in biodiversity taxon references as a butterfly in the Papilionidae family.", paragraphTwo: "This record is classified as blue with stripes wing markings and a forest habitat label.", researchVisibility: "Moderate", contributionsWelcome: "Range confirmations, habitat notes", populationRecords: 2871, originValue: "Figma butterfly content" },
  { name: "Western Hallelesis", latinName: "Hallelesis halyma", habitat: "Forest", wingPattern: "Eyespots", title: "Western Hallelesis", summary: "A brown butterfly with round eyespots on the wings from forest habitats", paragraphOne: "Hallelesis halyma is listed in biodiversity taxon references as a butterfly in the Nymphalidae family.", paragraphTwo: "This record is classified as brown with eyespots wing markings and a forest habitat label.", researchVisibility: "Very sparse", contributionsWelcome: "Basic sightings, habitat notes", populationRecords: 86, originValue: "Figma butterfly content" },
  { name: "Hewitsonia rogerioi", latinName: "Hewitsonia rogerioi", habitat: "Forest", wingPattern: "Stripes", title: "Hewitsonia rogerioi", summary: "A white butterfly with bold striped or banded wings from forest habitats", paragraphOne: "Hewitsonia rogerioi is listed in biodiversity taxon references as a butterfly in the Lycaenidae family.", paragraphTwo: "This record is classified as white with stripes wing markings and a forest habitat label.", researchVisibility: "Sparse", contributionsWelcome: "Habitat notes, local sightings", populationRecords: 276, originValue: "Figma butterfly content" },
  { name: "Hypolimnas Salmacis", latinName: "Hypolimnas salmacis magnifica", habitat: "Forest", wingPattern: "Scales", title: "Hypolimnas Salmacis", summary: "A blue butterfly with spotted wing markings from forest habitats", paragraphOne: "Hypolimnas salmacis magnifica is listed in biodiversity taxon references as a butterfly in the Nymphalidae family.", paragraphTwo: "This record is classified as blue with scales wing markings and a forest habitat label.", researchVisibility: "Very sparse", contributionsWelcome: "Basic sightings, habitat notes", populationRecords: 25, originValue: "Figma butterfly content" },
  { name: "Black-patch Hairstreak", latinName: "Hypolycaena liara", habitat: "Forest", wingPattern: "Scales", title: "Black-patch Hairstreak", summary: "A purple butterfly with shimmering scale colours from forest habitats", paragraphOne: "Hypolycaena liara is listed in biodiversity taxon references as a butterfly in the Lycaenidae family.", paragraphTwo: "This record is classified as coloured with scales wing markings and a forest habitat label.", researchVisibility: "Very sparse", contributionsWelcome: "Basic sightings, habitat notes", populationRecords: 68, originValue: "Figma butterfly content" },
  { name: "Common Hairstreak", latinName: "Hypolycaena philippus", habitat: "Forest", wingPattern: "Scales", title: "Common Hairstreak", summary: "A purple butterfly with shimmering scale colours from forest habitats", paragraphOne: "Hypolycaena philippus is listed in biodiversity taxon references as a butterfly in the Lycaenidae family.", paragraphTwo: "This record is classified as purple with scales wing markings and a forest habitat label.", researchVisibility: "Moderate", contributionsWelcome: "Range confirmations, habitat notes", populationRecords: 4045, originValue: "Figma butterfly content" },
  { name: "Giant Sapphire", latinName: "Iolaus alcibiades", habitat: "Forest", wingPattern: "Scales", title: "Giant Sapphire", summary: "A blue butterfly with shimmering scale colours from forest habitats", paragraphOne: "Iolaus alcibiades is listed in biodiversity taxon references as a butterfly in the Lycaenidae family.", paragraphTwo: "This record is classified as blue with scales wing markings and a forest habitat label.", researchVisibility: "Very sparse", contributionsWelcome: "Basic sightings, habitat notes", populationRecords: 9, originValue: "Figma butterfly content" },
  { name: "Lalos Sapphire", latinName: "Iolaus lalos", habitat: "Forest", wingPattern: "Scales", title: "Lalos Sapphire", summary: "A white butterfly with shimmering scale colours from forest habitats", paragraphOne: "Iolaus lalos is listed in biodiversity taxon references as a butterfly in the Lycaenidae family.", paragraphTwo: "This record is classified as white with scales wing markings and a forest habitat label.", researchVisibility: "Sparse", contributionsWelcome: "Habitat notes, local sightings", populationRecords: 643, originValue: "Figma butterfly content" },
  { name: "Incredible Sapphire Gem", latinName: "Iridana incredibilis", habitat: "Forest", wingPattern: "Scales", title: "Incredible Sapphire Gem", summary: "A brown butterfly with shimmering scale colours from forest habitats", paragraphOne: "Iridana incredibilis is listed in biodiversity taxon references as a butterfly in the Lycaenidae family.", paragraphTwo: "This record is classified as brown with scales wing markings and a forest habitat label.", researchVisibility: "Very sparse", contributionsWelcome: "Basic sightings, habitat notes", populationRecords: 11, originValue: "Figma butterfly content" },
  { name: "Kollarik's Sapphire Gem", latinName: "Iridana kollariki", habitat: "Forest", wingPattern: "Scales", title: "Kollarik's Sapphire Gem", summary: "An orange butterfly with shimmering scale colours from forest habitats", paragraphOne: "Iridana kollariki is listed in biodiversity taxon references as a butterfly in the Lycaenidae family.", paragraphTwo: "This record is classified as red with scales wing markings and a forest habitat label.", researchVisibility: "Very sparse", contributionsWelcome: "Basic sightings, habitat notes", populationRecords: 0, originValue: "Figma butterfly content" },
  { name: "Central Blue Leaf-pansy", latinName: "Junonia cymodoce lugens", habitat: "Meadow", wingPattern: "Eyespots", title: "Central Blue Leaf-pansy", summary: "A purple butterfly with round eyespots on the wings from meadow habitats", paragraphOne: "Junonia cymodoce lugens is listed in biodiversity taxon references as a butterfly in the Nymphalidae family.", paragraphTwo: "This record is classified as purple with eyespots wing markings and a meadow habitat label.", researchVisibility: "Very sparse", contributionsWelcome: "Basic sightings, habitat notes", populationRecords: 84, originValue: "Figma butterfly content" },
  { name: "Gregori's Brown Pansy", latinName: "Junonia gregorii", habitat: "Meadow", wingPattern: "Spots", title: "Gregori's Brown Pansy", summary: "A brown butterfly with spotted wing markings from meadow habitats", paragraphOne: "Junonia gregorii is listed in biodiversity taxon references as a butterfly in the Nymphalidae family.", paragraphTwo: "This record is classified as red with spots wing markings and a meadow habitat label.", researchVisibility: "Sparse", contributionsWelcome: "Habitat notes, local sightings", populationRecords: 358, originValue: "Figma butterfly content" },
  { name: "Blue-spot Pansy", latinName: "Junonia oenone", habitat: "Meadow", wingPattern: "Eyespots", title: "Blue-spot Pansy", summary: "A black butterfly with round eyespots on the wings from meadow habitats", paragraphOne: "Junonia oenone is listed in biodiversity taxon references as a butterfly in the Nymphalidae family.", paragraphTwo: "This record is classified as black with eyespots wing markings and a meadow habitat label.", researchVisibility: "High", contributionsWelcome: "Regional sightings, photo/source notes", populationRecords: 10498, originValue: "Figma butterfly content" },
  { name: "Junonia Orythia", latinName: "Junonia orythia madagascarensis", habitat: "Meadow", wingPattern: "Eyespots", title: "Junonia Orythia", summary: "A blue butterfly with round eyespots on the wings from meadow habitats", paragraphOne: "Junonia orythia madagascarensis is listed in biodiversity taxon references as a butterfly in the Nymphalidae family.", paragraphTwo: "This record is classified as blue with eyespots wing markings and a meadow habitat label.", researchVisibility: "Moderate", contributionsWelcome: "Range confirmations, habitat notes", populationRecords: 2756, originValue: "Figma butterfly content" },
  { name: "Eastern Blue Mother-of-Pearl", latinName: "Junonia temora", habitat: "Meadow", wingPattern: "Eyespots", title: "Eastern Blue Mother-of-Pearl", summary: "A blue butterfly with round eyespots on the wings from meadow habitats", paragraphOne: "Junonia temora is listed in biodiversity taxon references as a butterfly in the Nymphalidae family.", paragraphTwo: "This record is classified as blue with eyespots wing markings and a meadow habitat label.", researchVisibility: "Sparse", contributionsWelcome: "Taxonomy checks, habitat notes", populationRecords: 362, originValue: "Figma butterfly content" },
  { name: "Common Harlequin", latinName: "Mimeresia libentina", habitat: "Forest", wingPattern: "Stripes", title: "Common Harlequin", summary: "An orange butterfly with shimmering scale colours from forest habitats", paragraphOne: "Mimeresia libentina is a butterfly in the Lycaenidae family. Reference records describe it as occurring in Sierra Leone, Liberia, Ivory Coast, Ghana, Togo, Nigeria, Cameroon, Equatorial Guinea and Gabon.", paragraphTwo: "This record is classified as orange with stripes wing markings and a forest habitat label.", researchVisibility: "Sparse", contributionsWelcome: "Habitat notes, local sightings", populationRecords: 99, originValue: "Figma butterfly content" },
  { name: "Western Sailor", latinName: "Neptis occidentalis", habitat: "Forest", wingPattern: "Scales", title: "Western Sailor", summary: "A black butterfly with bold striped or banded wings from forest habitats", paragraphOne: "Neptis occidentalis is a butterfly in the Nymphalidae family. Reference records describe it as occurring in Nigeria, Cameroon, the Democratic Republic of the Congo, Sudan, Uganda, Kenya and Tanzania.", paragraphTwo: "This record is classified as black with scales wing markings and a forest habitat label.", researchVisibility: "Very sparse", contributionsWelcome: "Basic sightings, habitat notes", populationRecords: 12, originValue: "Figma butterfly content" },
  { name: "Giant African Swallowtail", latinName: "Papilio antimachus", habitat: "Forest", wingPattern: "Stripes", title: "Giant African Swallowtail", summary: "A yellow butterfly with bold striped or banded wings from forest habitats", paragraphOne: "Papilio antimachus is a butterfly in the Papilionidae family.", paragraphTwo: "This record is classified as yellow with stripes wing markings and a forest habitat label.", researchVisibility: "Sparse", contributionsWelcome: "Habitat notes, local sightings", populationRecords: 229, originValue: "Figma butterfly content" },
  { name: "Mocker Swallowtail", latinName: "Papilio dardanus", habitat: "Forest", wingPattern: "Stripes", title: "Mocker Swallowtail", summary: "A white butterfly with bold striped or banded wings from forest habitats", paragraphOne: "Papilio dardanus is a butterfly in the Papilionidae family.", paragraphTwo: "This record is classified as yellow with stripes wing markings and a forest habitat label.", researchVisibility: "Moderate", contributionsWelcome: "Range confirmations, habitat notes", populationRecords: 9265, originValue: "Figma butterfly content" },
  { name: "Citrus Swallowtail", latinName: "Papilio demodocus", habitat: "Garden", wingPattern: "Spots", title: "Citrus Swallowtail", summary: "A black butterfly with spotted wing markings from garden habitats", paragraphOne: "Papilio demodocus is a butterfly in the Papilionidae family.", paragraphTwo: "This record is classified as black with spots wing markings and a garden habitat label.", researchVisibility: "Moderate", contributionsWelcome: "Range confirmations, habitat notes", populationRecords: 13682, originValue: "Figma butterfly content" },
  { name: "Mechow's Swallowtail", latinName: "Papilio mechowi", habitat: "Forest", wingPattern: "Stripes", title: "Mechow's Swallowtail", summary: "A brown butterfly with bold striped or banded wings from forest habitats", paragraphOne: "Papilio mechowi is a butterfly in the Papilionidae family. Reference records describe it as occurring in Africa.", paragraphTwo: "This record is classified as brown with stripes wing markings and a forest habitat label.", researchVisibility: "Sparse", contributionsWelcome: "Habitat notes, local sightings", populationRecords: 349, originValue: "Figma butterfly content" },
  { name: "Emerald Peacock Swallowtail", latinName: "Papilio palinurus", habitat: "Forest", wingPattern: "Scales", title: "Emerald Peacock Swallowtail", summary: "A green butterfly with bold striped or banded wings from forest habitats", paragraphOne: "Papilio palinurus is a butterfly in the Papilionidae family. Reference records describe it as occurring in Southeast Asia, but is regularly kept in butterfly houses around the world.", paragraphTwo: "This record is classified as green with scales wing markings and a forest habitat label.", researchVisibility: "Sparse", contributionsWelcome: "Habitat notes, local sightings", populationRecords: 504, originValue: "Figma butterfly content" },
  { name: "Madagascar Giant Swallowtail", latinName: "Pharmacophagus antenor", habitat: "Forest", wingPattern: "Spots", title: "Madagascar Giant Swallowtail", summary: "A black butterfly with spotted wing markings from forest habitats", paragraphOne: "Pharmacophagus antenor is a butterfly in the Papilionidae family.", paragraphTwo: "This record is classified as black with spots wing markings and a forest habitat label.", researchVisibility: "Sparse", contributionsWelcome: "Habitat notes, local sightings", populationRecords: 284, originValue: "Figma butterfly content" },
  { name: "Physcaeneura Leda", latinName: "Physcaeneura leda", habitat: "Meadow", wingPattern: "Spots", title: "Physcaeneura Leda", summary: "A white butterfly with spotted wing markings from meadow habitats", paragraphOne: "Physcaeneura leda is a butterfly in the Nymphalidae family. Reference records describe it from sea level to 1,850 meters.", paragraphTwo: "This record is classified as white with spots wing markings and a meadow habitat label.", researchVisibility: "Sparse", contributionsWelcome: "Habitat notes, local sightings", populationRecords: 196, originValue: "Figma butterfly content" },
  { name: "Square-winged Red Charaxes", latinName: "Polyura pleione", habitat: "Forest", wingPattern: "Stripes", title: "Square-winged Red Charaxes", summary: "A brown butterfly with spotted wing markings from forest habitats", paragraphOne: "Polyura pleione is listed in biodiversity taxon references as a butterfly in the Nymphalidae family.", paragraphTwo: "This record is classified as orange with stripes wing markings and a forest habitat label.", researchVisibility: "Very sparse", contributionsWelcome: "Basic sightings, habitat notes", populationRecords: 0, originValue: "Figma butterfly content" },
  { name: "Banded Commodore", latinName: "Precis andremiaja", habitat: "Forest", wingPattern: "Eyespots", title: "Banded Commodore", summary: "A brown butterfly with round eyespots on the wings from forest habitats", paragraphOne: "Precis andremiaja is a butterfly in the Nymphalidae family.", paragraphTwo: "This record is classified as brown with eyespots wing markings and a forest habitat label.", researchVisibility: "Sparse", contributionsWelcome: "Habitat notes, local sightings", populationRecords: 294, originValue: "Figma butterfly content" },
  { name: "Wide-banded Commodore", latinName: "Precis sinuata hecqi", habitat: "Meadow", wingPattern: "Spots", title: "Wide-banded Commodore", summary: "A red butterfly with spotted wing markings from meadow habitats", paragraphOne: "Precis sinuata hecqi is a butterfly in the Nymphalidae family. Reference records describe it as occurring in parts of Africa.", paragraphTwo: "This record is classified as red with spots wing markings and a meadow habitat label.", researchVisibility: "Very sparse", contributionsWelcome: "Basic sightings, habitat notes", populationRecords: 99, originValue: "Figma butterfly content" },
  { name: "False Chief", latinName: "Pseudacraea lucretia", habitat: "Forest", wingPattern: "Stripes", title: "False Chief", summary: "A black butterfly with spotted wing markings from forest habitats", paragraphOne: "Pseudacraea lucretia is a butterfly in the Nymphalidae family. Reference records describe it as occurring in Africa.", paragraphTwo: "This record is classified as black with stripes wing markings and a forest habitat label.", researchVisibility: "Moderate", contributionsWelcome: "Range confirmations, habitat notes", populationRecords: 2124, originValue: "Figma butterfly content" },
  { name: "False Fritillary", latinName: "Pseudargynnis", habitat: "Wetland", wingPattern: "Spots", title: "False Fritillary", summary: "An orange butterfly with spotted wing markings from wetland habitats", paragraphOne: "Pseudargynnis is a butterfly in the Nymphalidae family.", paragraphTwo: "This record is classified as orange with spots wing markings and a wetland habitat label.", researchVisibility: "Sparse", contributionsWelcome: "Species-level IDs, local sightings", populationRecords: 9, originValue: "Figma butterfly content" },
  { name: "Mabira Ghost", latinName: "Pseudopontia mabira", habitat: "Forest", wingPattern: "Solid", title: "Mabira Ghost", summary: "A white butterfly with broad, mostly solid wing colour from forest habitats", paragraphOne: "Pseudopontia mabira is a butterfly in the Pieridae family.", paragraphTwo: "This record is classified as white with solid wing markings and a forest habitat label.", researchVisibility: "Very sparse", contributionsWelcome: "Basic sightings, habitat notes", populationRecords: 48, originValue: "Figma butterfly content" },
  { name: "Blue Red-eye", latinName: "Pteroteinon laufella", habitat: "Forest", wingPattern: "Scales", title: "Blue Red-eye", summary: "A white butterfly with bold striped or banded wings from forest habitats", paragraphOne: "Pteroteinon laufella is a butterfly in the Hesperiidae family.", paragraphTwo: "This record is classified as green with scales wing markings and a forest habitat label.", researchVisibility: "Very sparse", contributionsWelcome: "Basic sightings, habitat notes", populationRecords: 63, originValue: "Figma butterfly content" },
  { name: "Pink Acraea", latinName: "Stephenia caecilia", habitat: "Meadow", wingPattern: "Spots", title: "Pink Acraea", summary: "An orange butterfly with spotted wing markings from meadow habitats", paragraphOne: "Stephenia caecilia is listed in biodiversity taxon references as a butterfly in the Nymphalidae family.", paragraphTwo: "This record is classified as orange with spots wing markings and a meadow habitat label.", researchVisibility: "Sparse", contributionsWelcome: "Species-level IDs, local sightings", populationRecords: 0, originValue: "Figma butterfly content" },
  { name: "Wichgraf's Hillside Brown", latinName: "Stygionympha wichgrafi", habitat: "Mountain", wingPattern: "Eyespots", title: "Wichgraf's Hillside Brown", summary: "A red butterfly with round eyespots on the wings from mountain habitats", paragraphOne: "Stygionympha wichgrafi is a butterfly in the Nymphalidae family. Reference records describe it as occurring in South Africa, Zimbabwe and Mozambique.", paragraphTwo: "This record is classified as red with eyespots wing markings and a mountain habitat label.", researchVisibility: "Sparse", contributionsWelcome: "Habitat notes, local sightings", populationRecords: 909, originValue: "Figma butterfly content" },
  { name: "Painted Lady", latinName: "Vanessa cardui", habitat: "Garden", wingPattern: "Spots", title: "Painted Lady", summary: "An orange butterfly with spotted wing markings from garden habitats", paragraphOne: "Vanessa cardui is a butterfly in the Nymphalidae family.", paragraphTwo: "This record is classified as orange with spots wing markings and a garden habitat label.", researchVisibility: "High", contributionsWelcome: "Regional sightings, photo/source notes", populationRecords: 1457932, originValue: "Figma butterfly content" },
  { name: "Silver Ringlet", latinName: "Ypthima albida albida", habitat: "Mountain", wingPattern: "Eyespots", title: "Silver Ringlet", summary: "A white butterfly with round eyespots on the wings from mountain habitats", paragraphOne: "Ypthima albida albida is a butterfly in the Nymphalidae family. Reference records describe it as occurring in Nigeria, Cameroon, Sudan, the Democratic Republic of the Congo, Uganda, Rwanda, Burundi, Kenya and Tanzania.", paragraphTwo: "This record is classified as white with eyespots wing markings and a mountain habitat label.", researchVisibility: "Sparse", contributionsWelcome: "Habitat notes, local sightings", populationRecords: 247, originValue: "Figma butterfly content" },
  { name: "Common Ringlet", latinName: "Ypthima doleta", habitat: "Forest", wingPattern: "Eyespots", title: "Common Ringlet", summary: "A white butterfly with round eyespots on the wings from forest habitats", paragraphOne: "Ypthima doleta is listed in biodiversity taxon references as a butterfly in the Nymphalidae family.", paragraphTwo: "This record is classified as white with eyespots wing markings and a forest habitat label.", researchVisibility: "Sparse", contributionsWelcome: "Habitat notes, local sightings", populationRecords: 163, originValue: "Figma butterfly content" },
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
const modalParagraphClass = "text-[16px] leading-[1.55] text-[#3f3b39] 2xl:text-[19px]";
const modalSmallParagraphClass = "text-[14px] leading-[1.5] text-[#6f7c91] sm:text-[15px] 2xl:text-[17px]";
const modalItalicTextClass = "text-[#6f7f57]";
const modalProfileItalicClass = `mt-[10px] text-[16px] italic leading-tight ${modalItalicTextClass} md:text-[18px]`;
const modalSmallItalicClass = `text-[14px] italic leading-[1.5] ${modalItalicTextClass} sm:text-[15px]`;

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

function sizeFromPopulationRecords(records) {
  const count = Math.max(0, Number(records) || 0);
  const cappedCount = Math.min(count, 100000);
  const normalized = Math.log10(cappedCount + 1) / 5;
  return Math.round(28 + normalized * 38);
}

function makeButterflies() {
  return archivePositions.map(([top, left, size], index) => {
    const profile = butterflyProfiles[index];
    const wingColour = normalizeWingColour(profile.wingColour);
    const fillColor = wingColourNodeFills[wingColour] || fills[(index * 5 + 2) % fills.length];
    const habitat = habitats[profile.habitat] ? profile.habitat : habitatKeys[(index * 7 + 1) % habitatKeys.length];
    const populationRecords = Number(profile.populationRecords) || 0;

    return {
      id: index + 1,
      name: profile.name,
      archiveNumber: String(index + 1).padStart(2, "0"),
      title: profile.title,
      latinName: profile.latinName,
      top,
      left,
      size: sizeFromPopulationRecords(populationRecords),
      populationRecords,
      fillColor,
      habitat,
      delay: (index % 9) * 0.12,
      drift: 4 + (index % 5) * 1.6,
      image: profile.image,
      ringColor: habitats[habitat].ringColor,
      sectionLabel: "Butterfly Display",
      summary: profile.summary || "",
      paragraphOne: profile.paragraphOne || `${profile.name} is represented with one of the local butterfly files while the node reflects its archive colour group.`,
      paragraphTwo: profile.paragraphTwo || `This butterfly is classified as ${profile.wingColour.toLowerCase()} with ${profile.wingPattern.toLowerCase()} markings for the colour and wing-pattern filters.`,
      researchVisibility: profile.researchVisibility || "Sparse",
      contributionsWelcome: profile.contributionsWelcome || "Habitat notes, local sightings",
      originLabel: "Origin",
      originValue: profile.originValue || "Local butterfly file",
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
        <button type="button" onClick={onClose} aria-label="Close dialog" className="absolute right-[18px] top-[18px] z-10 grid h-8 w-8 place-items-center rounded-full text-slate-400 transition active:scale-95 2xl:h-12 2xl:w-12 2xl:bg-stone-50">
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
      className={`inline-flex min-h-8 items-center gap-1.5 rounded-full border px-2.5 text-[11px] font-medium transition active:scale-95 sm:min-h-9 sm:px-3 sm:text-[12px] 2xl:min-h-12 2xl:gap-2 2xl:px-4 2xl:text-[15px] ${selected ? "border-slate-400 bg-slate-50 text-slate-950 shadow-inner" : "border-slate-200 bg-white text-slate-600"}`}
    >
      {type === "colour" ? (
        <span className="h-4 w-4 rounded-full border border-slate-200 2xl:h-5 2xl:w-5" style={{ background: option.gradient || option.color }} />
      ) : type === "dot" ? (
        <span className="h-4 w-4 rounded-full border border-slate-200 2xl:h-5 2xl:w-5" style={{ backgroundColor: option.color }} />
      ) : (
        <span className="min-w-4 text-center text-[14px] leading-none 2xl:min-w-5 2xl:text-[17px]">{option.icon}</span>
      )}
      <span>{option.label}</span>
    </button>
  );
}

function FilterSection({ title, options, group, activeFilters, onToggle, type }) {
  return (
    <section>
      <h3 className="mb-2 text-[12px] font-semibold leading-tight tracking-[-0.02em] text-slate-600 sm:text-[13px] 2xl:mb-3 2xl:text-[16px]">{title}</h3>
      <div className="flex flex-wrap gap-2 2xl:gap-3">
        {options.map((option) => (
          <FilterChip key={option.label} option={option} group={group} activeFilters={activeFilters} onToggle={onToggle} type={type} />
        ))}
      </div>
    </section>
  );
}

function AdvancedFilterModal({ activeFilters, onToggle, onReset, onClose }) {
  return (
    <ModalShell onClose={onClose} labelledBy="advanced-filter-title" align="right" className="mr-0 w-[calc(100vw-36px)] max-w-[380px] rounded-[20px] px-[18px] pb-[18px] pt-[18px] sm:mr-[18px] sm:w-full 2xl:mr-8 2xl:max-w-[520px] 2xl:rounded-[24px] 2xl:px-7 2xl:pb-7 2xl:pt-7">
      <div className="mb-[18px] flex items-center justify-between gap-[18px] border-b border-slate-200 pb-[18px] pr-12 2xl:mb-6 2xl:pb-6 2xl:pr-16">
        <h2 id="advanced-filter-title" className="m-0 max-w-[calc(100%-88px)] text-[20px] font-bold leading-tight tracking-tight text-slate-950 sm:text-[21px] 2xl:text-[28px]">Filters</h2>
        <button type="button" onClick={onReset} className="min-h-8 rounded-full border border-slate-200 bg-white px-3 text-[11px] font-semibold text-slate-600 transition active:scale-95 sm:min-h-9 sm:text-[12px] 2xl:min-h-12 2xl:px-5 2xl:text-[15px]">
          Reset Filters
        </button>
      </div>
      <div className="space-y-[18px] 2xl:space-y-7">
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
    <ModalShell onClose={onClose} labelledBy="info-archive-title" align="left" className="mb-[40px] ml-0 h-[1088px] w-[360px] max-w-[calc(100vw-36px)] rounded-[18px] px-8 py-10 sm:ml-[18px] 2xl:ml-8 2xl:w-[460px] 2xl:rounded-[24px] 2xl:px-10 2xl:py-12">
      <h2 id="info-archive-title" className="max-w-[calc(100%-52px)] text-[24px] font-semibold leading-[1.12] text-[#1d2a1e] sm:text-[26px] 2xl:text-[32px]">About the Archive</h2>
      <p className={`mt-[18px] ${modalParagraphClass}`}>
        This an evolving archive of butterfly records. You will explore connections through colour, habitat and discovery. Journey through the vibrant world of East African butterflies, where each wing pattern tells a story millions of years in the making and color is never accidental it is strategy.These delicate creatures, with wings painted in nature's most vibrant palette, represent millions of years of adaptation to one of Earth's most diverse ecosystems.
      </p>
      <div className="mt-[18px] space-y-[18px]">
        <AboutMetric icon={<StatIcon type="records" />} value={archivePositions.length} label="Species" tint="bg-emerald-50" iconColor="text-emerald-700" />
        <AboutMetric icon={<StatIcon type="habitats" />} value="6" label="Habitats" tint="bg-orange-50" iconColor="text-orange-700" />
      </div>
      <div className={`mt-[18px] border-t border-slate-200 pt-[18px] ${modalParagraphClass}`}>
        Touch any circle to explore. Your path is saved as black breadcrumb dots.
      </div>
    </ModalShell>
  );
}

function VisualKeyItem({ marker, title, description }) {
  return (
    <div className="grid grid-cols-[40px_1fr] items-center gap-3 2xl:grid-cols-[54px_1fr] 2xl:gap-4">
      <div className="flex justify-center">{marker}</div>
      <div>
        <h5 className="text-[13px] font-semibold leading-tight text-[#4f7a3f] 2xl:text-[17px]">{title}</h5>
        <p className={`mt-1.5 text-[16px] leading-[1.55] text-[#3f3b39] 2xl:text-[19px]`}>{description}</p>
      </div>
    </div>
  );
}

function VisualKeyModal({ onClose }) {
  return (
    <ModalShell onClose={onClose} labelledBy="visual-key-title" align="right" className="mb-[40px] mr-0 w-[calc(100vw-36px)] max-w-[340px] rounded-[20px] px-[18px] pb-[40px] pt-[18px] sm:mr-[18px] sm:w-full 2xl:mr-8 2xl:max-w-[430px] 2xl:rounded-[24px] 2xl:px-7 2xl:pb-10 2xl:pt-7">
      <div className="border-b border-slate-200 pb-[18px] pr-[42px] 2xl:pb-6 2xl:pr-16">
        <h4 id="visual-key-title" className="max-w-full text-[16px] font-medium leading-[1.22] text-[#1d2a1e] sm:text-[17px] 2xl:text-[23px]">How to go through the archive</h4>
      </div>
      <div className="mt-[18px] space-y-[18px] 2xl:mt-6 2xl:space-y-7">
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
          description="GBIF observation density proxy"
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
  const [contributionOpen, setContributionOpen] = useState(false);

  if (!specimen) return null;

  const closeZoom = () => {
    setZoomOpen(false);
    setZoomedIn(true);
  };
  const archiveBasePath = window.location.pathname.replace(/\/[^/]*$/, "/");
  const contributionUrl = `${window.location.origin}${archiveBasePath}contribute.html?species=${encodeURIComponent(specimen.name)}&latin=${encodeURIComponent(specimen.latinName)}`;
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=320x320&margin=16&data=${encodeURIComponent(contributionUrl)}`;

  const patternIcons = {
    Spots: "●",
    Stripes: "▬",
    Eyespots: "◉",
    Scales: "◇",
    Solid: "■",
  };
  const colourStyles = {
    Blue: { background: "#3b82f6" },
    Orange: { background: "#f97316" },
    Yellow: { background: "#fde047" },
    Coloured: { background: "linear-gradient(135deg, #6366f1, #ec4899)" },
    White: { background: "#ffffff", borderColor: "#dbe4ef" },
    Green: { background: "#22c55e" },
    Purple: { background: "#a855f7" },
    Brown: { background: "#92400e" },
    Red: { background: "#ef4444" },
    Black: { background: "#1f2937" },
  };
  const habitatIcons = {
    Forest: "♣",
    Meadow: "⌁",
    Wetland: "≈",
    Garden: "✿",
    Mountain: "△",
    Unknown: "?",
  };
  const tags = [
    { type: "pattern", icon: patternIcons[specimen.wingPattern] || "●", label: specimen.wingPattern + " wings" },
    { type: "colour", label: specimen.wingColour + " color", style: colourStyles[specimen.wingColour] || { background: "#94a3b8" } },
    { type: "habitat", icon: habitatIcons[specimen.habitat] || "?", label: specimen.habitat + " habitat" },
  ];

  return (
    <motion.div className="fixed inset-0 z-[120] flex items-center justify-center overflow-auto bg-black/10 p-[18px] 2xl:p-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
      <motion.section
        role="dialog"
        aria-modal="true"
        aria-labelledby="specimen-detail-title"
        className="relative grid max-h-[88vh] w-[min(1120px,calc(100vw-36px))] gap-[28px] overflow-auto rounded-[22px] bg-white p-[24px] font-sans shadow-[0_26px_70px_rgba(15,23,42,0.24)] md:grid-cols-[330px_1fr] md:items-center md:p-[34px] 2xl:w-[min(1380px,calc(100vw-64px))] 2xl:grid-cols-[410px_1fr] 2xl:gap-[46px] 2xl:rounded-[28px] 2xl:p-[46px]"
        initial={{ opacity: 0, y: 20, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.96 }}
        transition={{ duration: 0.22 }}
        onClick={(event) => event.stopPropagation()}
      >
        <button type="button" onClick={onClose} aria-label="Close specimen details" className="absolute right-[18px] top-[18px] z-40 grid h-8 w-8 place-items-center rounded-full bg-white text-slate-400 shadow-[0_8px_24px_rgba(15,23,42,0.12)] transition active:scale-95 2xl:right-6 2xl:top-6 2xl:h-12 2xl:w-12"><CloseIcon size={21} /></button>

        <div className="mx-auto w-full max-w-[310px] text-center 2xl:max-w-[390px]">
          <button
            type="button"
            aria-label={"Zoom " + specimen.name}
            onClick={() => {
              setZoomOpen(true);
              setZoomedIn(true);
            }}
            className="aspect-square w-full overflow-hidden rounded-full border-[8px] bg-stone-100 shadow-[0_18px_42px_rgba(45,75,38,0.18)] transition active:scale-[0.98]"
            style={{ borderColor: specimen.ringColor || habitats[specimen.habitat]?.ringColor || "#047857" }}
          >
            <img src={specimen.image} alt={specimen.name} className="h-full w-full object-cover transition duration-300 hover:scale-105" />
          </button>
          <div className="mt-[22px] text-[12px] font-semibold uppercase tracking-[0.18em] text-slate-500 2xl:mt-7 2xl:text-[14px]">Scientific name</div>
          <div className="mt-[10px] text-[18px] italic leading-tight text-[#1d2a1e] 2xl:text-[22px]">{specimen.latinName}</div>
        </div>

        <div className="min-w-0 text-left">
          <div className="inline-flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.24em] text-[#6f7f57] 2xl:text-[13px]">
            <span className="grid h-7 w-7 place-items-center text-[#5f7f50] [&_svg]:h-6 [&_svg]:w-6" aria-hidden="true">
              <ButterflyOutlineIcon />
            </span>
            <span>Butterfly Profile</span>
          </div>
          <h3 id="specimen-detail-title" className="mt-[14px] text-[28px] font-semibold leading-[1.08] text-[#1d2a1e] md:text-[34px] 2xl:text-[46px]">
            {specimen.name}
          </h3>
          <div className="mt-[16px] max-w-[680px] text-[18px] italic leading-[1.35] text-[#6f7f57] 2xl:max-w-[820px] 2xl:text-[23px]">
            {specimen.summary}
          </div>
          <p className={"mt-[22px] max-w-[720px] " + modalParagraphClass}>
            {specimen.paragraphOne}
          </p>
          <div className="mt-[28px] inline-flex items-center gap-2.5 text-[15px] font-bold leading-none text-[#5f7f50] 2xl:text-[18px]">
            <span className="grid h-7 w-7 place-items-center text-[#5f7f50]" aria-hidden="true">
              <LeafIcon />
            </span>
            <span>Quick clues</span>
          </div>
          <div className="mt-[14px] grid gap-3 sm:grid-cols-3">
            {tags.map((tag) => (
              <div key={tag.label} className="flex min-h-[46px] items-center justify-center gap-3 rounded-[10px] border border-slate-200 bg-white px-4 text-center text-[14px] font-semibold text-stone-800 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] 2xl:min-h-[58px] 2xl:text-[17px]">
                {tag.type === "colour" ? (
                  <span className="h-5 w-5 rounded-full border border-white shadow-[0_0_0_1px_rgba(148,163,184,0.45)]" style={tag.style} aria-hidden="true" />
                ) : (
                  <span className="grid h-5 w-5 place-items-center text-[18px] leading-none text-slate-600" aria-hidden="true">{tag.icon}</span>
                )}
                <span>{tag.label}</span>
              </div>
            ))}
          </div>
          <div className="mt-[20px] flex flex-wrap items-center gap-3 text-[12px] leading-none 2xl:mt-7 2xl:text-[15px]">
            <div className="inline-flex min-h-[34px] items-center gap-3 rounded-[8px] bg-stone-100 px-4 text-stone-950">
              <span className="font-bold">Research visibility</span>
              <span className="italic">{specimen.researchVisibility}</span>
            </div>
            <div className="inline-flex min-h-[34px] items-center gap-3 rounded-[8px] bg-stone-100 px-4 text-stone-950">
              <span className="font-bold">Contributions welcome</span>
              <span className="italic">{specimen.contributionsWelcome}</span>
            </div>
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                setContributionOpen(true);
              }}
              className="ml-auto rounded-full px-2 py-1 text-[11px] font-semibold text-stone-400 transition hover:bg-stone-100 hover:text-[#5f7f50] active:scale-95 2xl:min-h-11 2xl:px-5 2xl:text-[14px]"
            >
              Upload...
            </button>
          </div>
        </div>
      </motion.section>

      <AnimatePresence>
        {contributionOpen && (
          <motion.div
            className="fixed inset-0 z-[170] flex items-center justify-center bg-black/20 p-[18px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={(event) => {
              event.stopPropagation();
              setContributionOpen(false);
            }}
          >
            <motion.section
              role="dialog"
              aria-modal="true"
              aria-labelledby="contribution-title"
              className="relative w-[min(92vw,420px)] rounded-[18px] border border-slate-200 bg-white px-6 pb-6 pt-7 text-center shadow-[0_26px_70px_rgba(15,23,42,0.22)]"
              initial={{ opacity: 0, y: 12, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.96 }}
              transition={{ duration: 0.18 }}
              onClick={(event) => event.stopPropagation()}
            >
              <button type="button" onClick={() => setContributionOpen(false)} aria-label="Close contribution QR" className="absolute right-4 top-4 grid h-8 w-8 place-items-center rounded-full bg-stone-50 text-slate-400 transition active:scale-95"><CloseIcon size={21} /></button>
              <div className="mx-auto mb-3 grid h-10 w-10 place-items-center rounded-full bg-[#e9eadf] text-[#5f7f50]" aria-hidden="true">
                <LeafIcon />
              </div>
              <h4 id="contribution-title" className="text-[22px] font-bold leading-tight text-[#1d2a1e]">Contribute to this butterfly</h4>
              <p className="mx-auto mt-2 max-w-[320px] text-[14px] leading-[1.55] text-slate-500">
                Scan with a phone to edit notes or upload a sighting image for <span className="font-semibold text-[#5f7f50]">{specimen.name}</span>.
              </p>
              <div className="mx-auto mt-5 grid h-[230px] w-[230px] place-items-center rounded-[14px] border border-slate-200 bg-white p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]">
                <img src={qrUrl} alt={`QR code to contribute to ${specimen.name}`} className="h-full w-full" />
              </div>
              <a href={contributionUrl} target="_blank" rel="noreferrer" className="mt-4 inline-flex min-h-10 items-center justify-center rounded-full bg-[#4b6e40] px-5 text-[13px] font-bold text-white transition active:scale-95">
                Open contribution form
              </a>
              <p className="mt-3 text-[11px] leading-[1.45] text-slate-400">
                Phone scanning works when this site is opened from a phone-accessible address, not only 127.0.0.1.
              </p>
            </motion.section>
          </motion.div>
        )}
      </AnimatePresence>

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
      <div className="absolute bottom-20 left-3 z-40 md:bottom-6 md:left-6 2xl:bottom-8 2xl:left-8">
        <button
          type="button"
          onClick={onAbout}
          className="grid h-[54px] w-[54px] place-items-center rounded-full border border-stone-200 bg-white text-slate-950 shadow-[0_14px_36px_rgba(61,48,32,0.14)] transition active:scale-95 md:h-[58px] md:w-[58px] 2xl:h-[76px] 2xl:w-[76px] 2xl:[&_svg]:h-9 2xl:[&_svg]:w-9"
          aria-label="Open info archive"
          title="Info archive"
        >
          <InfoIcon />
        </button>
      </div>

      <div className="absolute bottom-20 right-3 z-40 md:bottom-6 md:right-6 2xl:bottom-8 2xl:right-8">
        <button
          type="button"
          onClick={onKey}
          className="grid h-[54px] w-[54px] place-items-center rounded-full border border-stone-200 bg-white text-slate-950 shadow-[0_14px_36px_rgba(61,48,32,0.14)] transition active:scale-95 md:h-[58px] md:w-[58px] 2xl:h-[76px] 2xl:w-[76px] 2xl:[&_svg]:h-9 2xl:[&_svg]:w-9"
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
    <motion.div className="archive-hover-preview pointer-events-none absolute z-40 hidden rounded-full border-[12px] bg-orange-500 shadow-[0_22px_55px_rgba(15,23,42,0.18)] md:block" style={{ top: `${specimen.top}%`, left: `${specimen.left}%`, width: 220, height: 220, borderColor: specimen.ringColor || "#f97316", transform: "translate(-50%, -50%) scale(var(--archive-preview-scale, 1))" }} initial={{ opacity: 0, scale: 0.65 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.65 }} transition={{ type: "spring", stiffness: 280, damping: 22 }}>
      <img src={specimen.image} alt="" className="h-full w-full rounded-full object-cover" draggable="false" />
    </motion.div>
  );
}

function ButterflyCircle({ butterfly, selected, hidden, onSelect, onPreviewStart, onPreviewEnd }) {
  const touchSize = Math.max(butterfly.size + 34, 72);

  return (
    <motion.button
      aria-label={`Open ${butterfly.name}, ${butterfly.habitat}`}
      className={`absolute z-20 grid cursor-pointer select-none place-items-center rounded-full touch-manipulation outline-none ring-offset-4 transition-opacity focus-visible:ring-4 focus-visible:ring-emerald-200 ${hidden ? "pointer-events-none opacity-10" : "opacity-100"}`}
      style={{ top: `${butterfly.top}%`, left: `${butterfly.left}%`, width: touchSize, height: touchSize, transform: "translate(-50%, -50%) scale(var(--archive-touch-scale, 1))", WebkitTapHighlightColor: "transparent" }}
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
      className="absolute bottom-4 left-1/2 z-40 flex max-w-[calc(100vw-24px)] -translate-x-1/2 items-center gap-2 rounded-full border border-stone-200 bg-white px-2.5 py-2 shadow-[0_18px_45px_rgba(0,0,0,0.22)] backdrop-blur md:bottom-5 2xl:bottom-8 2xl:gap-3 2xl:px-4 2xl:py-3"
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      role="status"
      aria-live="polite"
    >
      <button
        type="button"
        onClick={onOpen}
        className={`grid h-9 w-9 shrink-0 place-items-center rounded-full text-[16px] font-medium leading-none transition active:scale-95 2xl:h-12 2xl:w-12 2xl:text-[20px] ${
          hasCatches ? "bg-[#14843a] text-white" : "bg-[#dff5e9] text-[#07813d]"
        }`}
        aria-label="Open caught butterflies"
      >
        {trailCount}
      </button>

      <button
        type="button"
        onClick={onOpen}
        className="max-w-[150px] truncate whitespace-nowrap rounded-full px-1 text-[15px] font-medium tracking-[-0.02em] text-black transition active:scale-95 sm:max-w-none 2xl:px-2 2xl:text-[18px]"
      >
        Catching: {trailCount} caught
      </button>

      <button
        type="button"
        onClick={onClear}
        disabled={!hasCatches}
        className={`inline-flex min-h-9 shrink-0 items-center gap-1.5 rounded-full px-4 text-[14px] font-medium tracking-[-0.02em] transition active:scale-95 2xl:min-h-12 2xl:gap-2 2xl:px-6 2xl:text-[17px] ${
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
      className="w-[calc(100vw-36px)] max-w-[560px] rounded-[24px] px-[22px] pb-[20px] pt-[30px] sm:px-[28px] sm:pb-[24px] sm:pt-[34px] 2xl:max-w-[720px] 2xl:px-9 2xl:pb-8 2xl:pt-10"
    >
      <div className="border-b border-slate-100 pb-[18px] pr-[42px]">
        <h4 id="trail-history-title" className="max-w-[calc(100%-52px)] text-[20px] font-medium leading-[1.12] text-[#1d2a1e] sm:text-[22px] 2xl:text-[30px]">
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
                className="grid w-full grid-cols-[62px_1fr_18px] items-center gap-[12px] border-b border-slate-100 py-[12px] text-left transition active:scale-[0.99] hover:bg-stone-50 sm:grid-cols-[70px_1fr_20px] sm:gap-[14px] 2xl:grid-cols-[86px_1fr_28px] 2xl:gap-5 2xl:py-4"
              >
                <span
                  className="h-[56px] w-[56px] overflow-hidden rounded-full border-[4px] bg-stone-100 sm:h-[62px] sm:w-[62px] 2xl:h-[80px] 2xl:w-[80px]"
                  style={{ borderColor: item.ringColor || habitats[item.habitat].ringColor }}
                >
                  <img src={item.image} alt="" className="h-full w-full object-cover" draggable="false" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-[17px] font-bold leading-tight text-slate-950 sm:text-[19px] 2xl:text-[23px]">{item.name}</span>
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
    setSelected(butterfly);
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
    <main className="relative h-screen min-h-[680px] overflow-hidden bg-white font-sans text-slate-950 md:min-h-[780px] 2xl:min-h-[900px]">
      <header className="absolute inset-x-0 top-0 z-50 grid h-[82px] grid-cols-[1fr_auto] items-center gap-[22px] border-b border-slate-200 bg-white/94 px-4 backdrop-blur md:h-[106px] md:px-[50px] 2xl:h-[122px] 2xl:px-[72px]">
        <div className="whitespace-nowrap font-serif text-[20px] font-bold tracking-normal text-[#111] max-[1500px]:text-[18px] 2xl:text-[26px]">
          East African Butterfly Archive
        </div>

        <div className="relative flex items-center justify-end gap-3">
          <button
            type="button"
            onClick={() => setPage("migration")}
            className="inline-flex min-h-[48px] items-center rounded-full bg-[#eef6ee] px-5 text-[14px] font-extrabold text-[#4b6e40] transition hover:bg-[#e5f1e6] active:scale-95 md:min-h-[62px] md:px-7 md:text-[14px] 2xl:min-h-[72px] 2xl:px-9 2xl:text-[16px]"
          >
            Migration
          </button>

          <button
            type="button"
            className="min-h-[48px] min-w-[68px] rounded-full bg-[#4b6e40] px-5 text-[14px] font-extrabold text-white shadow-[0_6px_14px_rgba(47,76,39,0.24)] transition active:scale-95 md:min-h-[62px] md:min-w-[86px] md:px-7 md:text-[14px] 2xl:min-h-[72px] 2xl:min-w-[108px] 2xl:px-9 2xl:text-[16px]"
            onClick={resetAllFilters}
            aria-label="Reset filters"
          >
            {activeFilterCount > 0 ? `${activeFilterCount} Filters` : filter}
          </button>

          <button
            type="button"
            className="grid h-12 w-12 place-items-center rounded-full bg-[#eef6ee] text-[#4b6e40] transition hover:bg-[#e5f1e6] active:scale-95 md:h-[62px] md:w-[62px] 2xl:h-[72px] 2xl:w-[72px] 2xl:[&_svg]:h-7 2xl:[&_svg]:w-7"
            aria-label="Open filter menu"
            aria-expanded={filterModalOpen}
            onClick={() => setFilterModalOpen(true)}
          >
            <SlidersIcon />
          </button>
        </div>
      </header>

      {!anyModalOpen && (
        <div className="absolute left-1/2 top-[126px] z-10 hidden -translate-x-1/2 text-[21px] font-medium text-[#8aa0c1] md:block 2xl:top-[148px] 2xl:text-[26px]">
          {archivePositions.length} Species
        </div>
      )}

      <section className="absolute inset-0 pt-[82px] md:pt-[106px] 2xl:pt-[122px]" aria-label="Interactive butterfly archive map">
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
