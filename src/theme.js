// Light/dark theme toggle.
//
// - First load with no saved override follows the OS `prefers-color-scheme`.
// - A user override (Light / Dark) is persisted in localStorage.
// - Cycling the button goes: Auto -> Light -> Dark -> Auto.
// - The resolved theme is applied as a `dark` class on <html>
//   (Tailwind's class-based dark mode).
//
// An inline script in index.html applies the class before first paint to
// avoid a flash; this module re-applies it and wires up the toggle button.

const root = document.documentElement;
const STORAGE_KEY = 'lr-theme';
const darkQuery = window.matchMedia('(prefers-color-scheme: dark)');

/** @returns {'light' | 'dark' | null} the saved override, or null for Auto. */
function storedOverride() {
  try {
    const v = localStorage.getItem(STORAGE_KEY);
    return v === 'light' || v === 'dark' ? v : null;
  } catch {
    return null;
  }
}

/** Resolve the effective theme and toggle the `dark` class on <html>. */
export function applyTheme() {
  const override = storedOverride();
  const isDark = override ? override === 'dark' : darkQuery.matches;
  root.classList.toggle('dark', isDark);
}

function setupToggle() {
  const btn = document.getElementById('theme-toggle');
  if (!btn) return;
  const icons = btn.querySelectorAll('[data-theme-icon]');

  function render() {
    const t = storedOverride() || 'auto';
    icons.forEach((icon) => {
      icon.classList.toggle('hidden', icon.dataset.themeIcon !== t);
    });
    btn.title = 'Theme: ' + (t === 'auto' ? 'system' : t) + ' — click to change';
    btn.setAttribute('aria-label', 'Theme: ' + t + '. Change theme');
  }

  btn.addEventListener('click', () => {
    const t = storedOverride();
    // Auto -> Light -> Dark -> Auto
    const next = t === null ? 'light' : t === 'light' ? 'dark' : null;
    try {
      if (next) localStorage.setItem(STORAGE_KEY, next);
      else localStorage.removeItem(STORAGE_KEY);
    } catch {
      /* ignore storage failures (e.g. private mode) */
    }
    applyTheme();
    render();
  });

  // Follow live OS changes while in Auto mode.
  darkQuery.addEventListener('change', () => {
    if (storedOverride() === null) applyTheme();
  });

  render();
}

applyTheme();

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', setupToggle);
} else {
  setupToggle();
}
