/**
 * Central theme color palette
 * ---------------------------
 * This module centralizes the project's color tokens so you can tweak the
 * visual appearance from one place. It purposely provides a small, well
 * documented set of named exports (primary/secondary/text/etc.) and a small
 * helper for rgba generation. The goal is to make incremental migration easy:
 * - JS/TS components can import the named colors directly.
 * - If you prefer CSS variables, you can create them at runtime using these
 *   values (for example in a provider component) and then switch the app's
 *   styling without touching individual components.
 *
 * Usage guidance (recommended):
 * - Import specific tokens where needed, e.g. `import { primary, surface } from
 *   '../data/theme'` and use them in inline styles or in style objects.
 * - For CSS files, consider exporting the values into CSS custom properties
 *   once you settle on a stable palette (I can add an automatic CSS-vars
 *   generator if you'd like).
 *
 * Notes about naming:
 * - `primary` is the main brand accent used for CTAs and highlights.
 * - `secondary` is a darker tone used for emphasis and headers in dark
 *    contexts.
 * - `surface`/`background`/`muted` are intended for backgrounds and borders.
 */

// Primary brand colors
export const primary = '#F47C3C'; // main accent (buttons, highlights)
export const primaryHover = '#F9A66C'; // hover/interaction variant for primary
export const secondary = '#34495E'; // darker accent used for headings and dark surfaces

// Text and surfaces
export const text = '#2C3E50'; // primary readable text color on light surfaces
export const background = '#FDFDFD'; // page background (light mode)
export const surface = '#FFFFFF'; // cards, nav backgrounds in light mode
export const muted = '#ECF0F1'; // light gray for subtle borders and dividers

// Neutral utilities
export const white = '#FFFFFF';
export const black = '#000000';

// Accents and small details
export const accent = primary; // alias for small UI accents
export const accentAlt = '#25F4EE'; // secondary accent used for multi-color icons

// Brand/social colors (kept here because they are used by icons/SVGs)
export const telegram = '#229ED9';
export const discord = '#5865F2';
export const tiktok = '#000000';
export const tiktokAccent1 = '#25F4EE';
export const tiktokAccent2 = '#FE2C55';

// Base color used for shadows / overlays. Prefer using hexToRgba(shadowBase,
// 0.13) to create the semi-transparent variants we previously had inline.
export const shadowBase = '#34495E';

/**
 * Convert a hex color to an rgba(...) string.
 * - Accepts 3- or 6-digit hex strings (with or without leading '#').
 * - alpha should be a number in [0,1].
 *
 * Example: hexToRgba('#34495E', 0.12) -> 'rgba(52, 73, 94, 0.12)'
 */
export function hexToRgba(hex: string, alpha = 1) {
  if (!hex) return `rgba(0,0,0,${alpha})`;
  const h = hex.replace('#', '');
  let r = 0,
    g = 0,
    b = 0;
  if (h.length === 3) {
    r = parseInt(h[0] + h[0], 16);
    g = parseInt(h[1] + h[1], 16);
    b = parseInt(h[2] + h[2], 16);
  } else if (h.length === 6) {
    r = parseInt(h.substring(0, 2), 16);
    g = parseInt(h.substring(2, 4), 16);
    b = parseInt(h.substring(4, 6), 16);
  }
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

export default {
  primary,
  primaryHover,
  secondary,
  text,
  background,
  surface,
  muted,
  white,
  black,
  accent,
  accentAlt,
  telegram,
  discord,
  tiktok,
  tiktokAccent1,
  tiktokAccent2,
  shadowBase,
  hexToRgba,
};

// Theme variants for light and dark modes. Each variant provides the
// high-level tokens a component needs: page background, text color, surface
// (card) background, navigation background/text, and accent colors.
export type ThemeVariant = {
  id: 'light' | 'dark';
  pageBackground: string;
  text: string;
  surface: string;
  navBackground: string;
  navText: string;
  accent: string;
  accentHover: string;
  shadowBase?: string;
};

export const themes: Record<'light' | 'dark', ThemeVariant> = {
  light: {
    id: 'light',
    pageBackground: background,
    text,
    surface,
    navBackground: surface,
    navText: text,
    accent: primary,
    accentHover: primaryHover,
    shadowBase,
  },
  dark: {
    id: 'dark',
    pageBackground: '#1f2a36', // darker page background for dark mode
    text: '#dfe8ee',
    surface: '#2c3e50',
    navBackground: '#27343c',
    navText: '#ecf0f1',
    accent: primary,
    accentHover: primaryHover,
    shadowBase,
  },
};

export function getTheme(mode: 'light' | 'dark') {
  return themes[mode];
}

/**
 * Apply a theme to the document by setting CSS variables on :root.
 * This makes theme tokens available to inline styles that use var(--name)
 * and to plain CSS that reads the same variables.
 */
export function applyTheme(mode: 'light' | 'dark') {
  if (typeof document === 'undefined') return; // guard for SSR
  const t = getTheme(mode);
  const root = document.documentElement;
  root.style.setProperty('--bg', t.pageBackground);
  root.style.setProperty('--text', t.text);
  root.style.setProperty('--surface', t.surface);
  root.style.setProperty('--primary', t.accent);
  root.style.setProperty('--primary-hover', t.accentHover);
  root.style.setProperty('--secondary', t.navBackground || '#34495E');
  root.style.setProperty(
    '--muted',
    t.pageBackground === '#FDFDFD' ? '#ECF0F1' : '#3A4A52',
  );
  root.style.setProperty(
    '--primary-contrast',
    t.pageBackground === '#FDFDFD' ? '#FFFFFF' : '#FFFFFF',
  );
  // shadows: create rgba variants from shadowBase if present
  const shadow1 = hexToRgba(t.shadowBase ?? '#34495E', 0.07);
  const shadow2 = hexToRgba(t.shadowBase ?? '#34495E', 0.22);
  root.style.setProperty('--shadow-1', shadow1);
  root.style.setProperty('--shadow-2', shadow2);
  // nav-specific tokens
  root.style.setProperty('--nav-background', t.navBackground);
  root.style.setProperty('--nav-text', t.navText);
}
