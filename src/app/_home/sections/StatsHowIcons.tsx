"use client";

/* =====================================================================
   Premium glossy SVG icons — gold ring + navy/glass interior.
   Follows the "premium sports-tech" prompt: metallic gold gradient ring,
   deep navy inner disc, glass highlights, soft inner glow.
   Use size = 84 on desktop stats, size = 56 on the 3 steps.
   ===================================================================== */

type IconProps = { size?: number; id?: string };

/** Shared gradient defs for a single instance. Each icon uses unique ids (prefix `id`). */
function Defs({ id }: { id: string }) {
  return (
    <defs>
      <linearGradient id={`${id}-ring`} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#FDEFB8" />
        <stop offset="20%" stopColor="#F5D07A" />
        <stop offset="50%" stopColor="#D4A853" />
        <stop offset="80%" stopColor="#B8913F" />
        <stop offset="100%" stopColor="#8B6A2E" />
      </linearGradient>
      <radialGradient id={`${id}-inner`} cx="50%" cy="30%" r="70%">
        <stop offset="0%" stopColor="#1A3358" />
        <stop offset="50%" stopColor="#0F2A44" />
        <stop offset="100%" stopColor="#050B18" />
      </radialGradient>
      <linearGradient id={`${id}-gloss`} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.45" />
        <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.1" />
        <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
      </linearGradient>
      <linearGradient id={`${id}-icon`} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#FDEFB8" />
        <stop offset="50%" stopColor="#F5D07A" />
        <stop offset="100%" stopColor="#D4A853" />
      </linearGradient>
      <filter id={`${id}-soft`} x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="1" />
      </filter>
    </defs>
  );
}

/** Outer ring + inner navy disc + top gloss. Children = the distinctive shape. */
function Frame({
  id,
  size,
  children,
}: {
  id: string;
  size: number;
  children: React.ReactNode;
}) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <Defs id={id} />
      {/* Soft outer glow */}
      <circle cx="50" cy="50" r="48" fill="none" stroke={`url(#${id}-ring)`} strokeWidth="0.5" opacity="0.4" />
      {/* Ring */}
      <circle cx="50" cy="50" r="46" fill={`url(#${id}-ring)`} />
      <circle cx="50" cy="50" r="40" fill={`url(#${id}-inner)`} />
      {/* Inner rim */}
      <circle cx="50" cy="50" r="40" fill="none" stroke="#D4A853" strokeWidth="0.4" opacity="0.5" />
      {/* Top gloss highlight on ring */}
      <path
        d="M 12 40 A 38 38 0 0 1 88 40 L 82 42 A 32 32 0 0 0 18 42 Z"
        fill={`url(#${id}-gloss)`}
      />
      {children}
    </svg>
  );
}

/* ========== 6 STATS ICONS ========== */

// 1. Soccer ball — 48 Selecciones
export function IconStatBall({ size = 84 }: IconProps) {
  const id = "sb";
  return (
    <Frame id={id} size={size}>
      {/* ball body */}
      <circle cx="50" cy="50" r="22" fill={`url(#${id}-icon)`} stroke="#8B6A2E" strokeWidth="0.6" />
      {/* center pentagon */}
      <path
        d="M50 38 L60 45.5 L56 57 L44 57 L40 45.5 Z"
        fill="#0A1A2F"
        stroke="#8B6A2E"
        strokeWidth="0.4"
      />
      {/* seams */}
      <line x1="50" y1="38" x2="50" y2="30" stroke="#8B6A2E" strokeWidth="0.6" />
      <line x1="60" y1="45.5" x2="68" y2="41" stroke="#8B6A2E" strokeWidth="0.6" />
      <line x1="56" y1="57" x2="62" y2="68" stroke="#8B6A2E" strokeWidth="0.6" />
      <line x1="44" y1="57" x2="38" y2="68" stroke="#8B6A2E" strokeWidth="0.6" />
      <line x1="40" y1="45.5" x2="32" y2="41" stroke="#8B6A2E" strokeWidth="0.6" />
      {/* highlight */}
      <ellipse cx="43" cy="42" rx="4" ry="2" fill="#FFF" opacity="0.3" transform="rotate(-30 43 42)" />
    </Frame>
  );
}

// 2. Stadium — 16 Sedes
export function IconStatStadium({ size = 84 }: IconProps) {
  const id = "st";
  return (
    <Frame id={id} size={size}>
      {/* Base stadium bowl */}
      <ellipse cx="50" cy="62" rx="26" ry="10" fill="none" stroke={`url(#${id}-icon)`} strokeWidth="2" />
      <ellipse cx="50" cy="58" rx="26" ry="10" fill="none" stroke={`url(#${id}-icon)`} strokeWidth="1.2" opacity="0.7" />
      {/* Roof with light bar */}
      <path
        d="M 24 52 Q 50 38 76 52"
        fill="none"
        stroke={`url(#${id}-icon)`}
        strokeWidth="2.2"
      />
      {/* Lights on roof */}
      {[32, 40, 50, 60, 68].map((x, i) => {
        const y = 52 - Math.sin(((x - 24) / 52) * Math.PI) * 10;
        return <circle key={i} cx={x} cy={y} r="1.2" fill="#FDEFB8" />;
      })}
      {/* Pitch line */}
      <line x1="32" y1="62" x2="68" y2="62" stroke={`url(#${id}-icon)`} strokeWidth="0.6" opacity="0.6" />
      {/* Goal posts */}
      <rect x="35" y="59" width="4" height="3" fill="none" stroke={`url(#${id}-icon)`} strokeWidth="0.4" />
      <rect x="61" y="59" width="4" height="3" fill="none" stroke={`url(#${id}-icon)`} strokeWidth="0.4" />
    </Frame>
  );
}

// 3. Whistle — 104 Partidos
export function IconStatWhistle({ size = 84 }: IconProps) {
  const id = "wh";
  return (
    <Frame id={id} size={size}>
      {/* Whistle body */}
      <path
        d="M 28 44 L 62 44 Q 72 44 72 52 Q 72 60 62 60 L 40 60 L 36 66 L 30 66 L 28 60 Q 22 58 22 52 Q 22 46 28 44 Z"
        fill={`url(#${id}-icon)`}
        stroke="#8B6A2E"
        strokeWidth="0.6"
      />
      {/* Ring loop */}
      <circle cx="66" cy="42" r="4" fill="none" stroke={`url(#${id}-icon)`} strokeWidth="1.5" />
      {/* Hole */}
      <circle cx="55" cy="52" r="3" fill="#0A1A2F" />
      {/* Highlight */}
      <path d="M 30 46 L 56 46" stroke="#FFF" strokeWidth="0.8" opacity="0.35" />
    </Frame>
  );
}

// 4. Group — 12 Grupos
export function IconStatGroup({ size = 84 }: IconProps) {
  const id = "gr";
  return (
    <Frame id={id} size={size}>
      {/* 3 figures */}
      <circle cx="38" cy="42" r="5" fill={`url(#${id}-icon)`} />
      <path
        d="M 28 62 Q 28 52 38 52 Q 48 52 48 62 L 28 62 Z"
        fill={`url(#${id}-icon)`}
      />
      <circle cx="62" cy="42" r="5" fill={`url(#${id}-icon)`} />
      <path
        d="M 52 62 Q 52 52 62 52 Q 72 52 72 62 L 52 62 Z"
        fill={`url(#${id}-icon)`}
      />
      <circle cx="50" cy="38" r="6" fill={`url(#${id}-icon)`} stroke="#8B6A2E" strokeWidth="0.4" />
      <path
        d="M 38 58 Q 38 48 50 48 Q 62 48 62 58 L 38 58 Z"
        fill={`url(#${id}-icon)`}
        stroke="#8B6A2E"
        strokeWidth="0.4"
      />
      {/* Highlights */}
      <circle cx="48.5" cy="36" r="1.5" fill="#FFF" opacity="0.35" />
    </Frame>
  );
}

// 5. Flag — 3 Países
export function IconStatFlag({ size = 84 }: IconProps) {
  const id = "fl";
  return (
    <Frame id={id} size={size}>
      {/* Pole */}
      <rect x="33" y="28" width="2" height="44" rx="1" fill={`url(#${id}-icon)`} />
      {/* Flag */}
      <path
        d="M 35 30 L 66 34 Q 70 36 66 40 L 50 45 Q 46 46 50 48 L 66 52 Q 70 54 66 56 L 35 50 Z"
        fill={`url(#${id}-icon)`}
        stroke="#8B6A2E"
        strokeWidth="0.5"
      />
      {/* Base */}
      <ellipse cx="34" cy="72" rx="6" ry="1.5" fill={`url(#${id}-icon)`} opacity="0.6" />
      {/* Highlight */}
      <path d="M 37 33 L 62 36" stroke="#FFF" strokeWidth="0.6" opacity="0.4" />
    </Frame>
  );
}

// 6. Puzzle — 12 Módulos
export function IconStatPuzzle({ size = 84 }: IconProps) {
  const id = "pz";
  return (
    <Frame id={id} size={size}>
      <path
        d="M 32 32 L 44 32 Q 44 28 48 28 Q 52 28 52 32 L 64 32 Q 68 32 68 36 L 68 44 Q 72 44 72 48 Q 72 52 68 52 L 68 60 Q 68 64 64 64 L 56 64 Q 56 68 52 68 Q 48 68 48 64 L 32 64 Q 28 64 28 60 L 28 52 Q 24 52 24 48 Q 24 44 28 44 L 28 36 Q 28 32 32 32 Z"
        fill={`url(#${id}-icon)`}
        stroke="#8B6A2E"
        strokeWidth="0.6"
      />
      {/* Inner highlight */}
      <path d="M 32 36 L 44 36" stroke="#FFF" strokeWidth="0.8" opacity="0.35" />
      <path d="M 36 56 L 60 56" stroke="#0A1A2F" strokeWidth="0.6" opacity="0.3" />
    </Frame>
  );
}

/* ========== 3 STEPS ICONS ========== */

// Step 1 — Elige tu selección (clipboard + shirt)
export function IconStepChoose({ size = 56 }: IconProps) {
  const id = "s1";
  return (
    <Frame id={id} size={size}>
      {/* Clipboard */}
      <rect
        x="32"
        y="30"
        width="36"
        height="44"
        rx="4"
        fill="#0F2A44"
        stroke={`url(#${id}-icon)`}
        strokeWidth="1.2"
      />
      <rect x="42" y="26" width="16" height="6" rx="1.5" fill={`url(#${id}-icon)`} />
      {/* Lines */}
      <rect x="38" y="40" width="14" height="1.5" rx="0.5" fill={`url(#${id}-icon)`} opacity="0.8" />
      <rect x="38" y="46" width="18" height="1.5" rx="0.5" fill={`url(#${id}-icon)`} opacity="0.6" />
      {/* Shirt */}
      <path
        d="M 50 54 L 55 52 L 58 55 L 62 55 L 62 68 L 54 68 L 54 62 L 46 62 L 46 68 L 38 68 L 38 55 L 42 55 L 45 52 Z"
        fill={`url(#${id}-icon)`}
        stroke="#8B6A2E"
        strokeWidth="0.4"
        transform="translate(0 -2)"
      />
    </Frame>
  );
}

// Step 2 — Juega y predice (trophy + ball)
export function IconStepPlay({ size = 56 }: IconProps) {
  const id = "s2";
  return (
    <Frame id={id} size={size}>
      {/* Trophy */}
      <path
        d="M 38 28 L 58 28 L 57 48 Q 57 52 48 53 Q 39 52 39 48 Z"
        fill={`url(#${id}-icon)`}
        stroke="#8B6A2E"
        strokeWidth="0.5"
      />
      {/* Handles */}
      <path
        d="M 38 32 Q 32 32 32 38 Q 32 44 40 44"
        fill="none"
        stroke={`url(#${id}-icon)`}
        strokeWidth="1.4"
      />
      <path
        d="M 58 32 Q 64 32 64 38 Q 64 44 56 44"
        fill="none"
        stroke={`url(#${id}-icon)`}
        strokeWidth="1.4"
      />
      {/* Trophy stem + base */}
      <rect x="46" y="53" width="4" height="5" fill="#8B6A2E" />
      <rect x="41" y="58" width="14" height="3" rx="0.5" fill={`url(#${id}-icon)`} />
      {/* Ball at the bottom */}
      <circle cx="50" cy="67" r="6" fill={`url(#${id}-icon)`} stroke="#8B6A2E" strokeWidth="0.4" />
      <path
        d="M 50 63 L 53 65 L 52 69 L 48 69 L 47 65 Z"
        fill="#0A1A2F"
        stroke="#8B6A2E"
        strokeWidth="0.3"
      />
    </Frame>
  );
}

// Step 3 — Vive y gana (TV + gift)
export function IconStepWin({ size = 56 }: IconProps) {
  const id = "s3";
  return (
    <Frame id={id} size={size}>
      {/* TV screen */}
      <rect
        x="28"
        y="32"
        width="36"
        height="24"
        rx="2"
        fill="#0F2A44"
        stroke={`url(#${id}-icon)`}
        strokeWidth="1.2"
      />
      {/* Play icon inside */}
      <path d="M 42 38 L 52 44 L 42 50 Z" fill={`url(#${id}-icon)`} />
      {/* Base */}
      <rect x="42" y="56" width="8" height="2" fill={`url(#${id}-icon)`} />
      {/* Gift bottom right */}
      <rect
        x="54"
        y="62"
        width="16"
        height="12"
        rx="1.2"
        fill={`url(#${id}-icon)`}
        stroke="#8B6A2E"
        strokeWidth="0.4"
      />
      <rect x="54" y="66" width="16" height="2" fill="#8B6A2E" />
      <rect x="60" y="62" width="4" height="12" fill="#8B6A2E" />
      {/* Bow */}
      <circle cx="62" cy="62" r="2" fill={`url(#${id}-icon)`} stroke="#8B6A2E" strokeWidth="0.3" />
    </Frame>
  );
}
