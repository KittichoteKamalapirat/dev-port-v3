// @ts-check

/**
 * @typedef {import('./tailwind/types').TailwindThemeConfig} TailwindThemeConfig
 */

/**
 * Design system border colors
 * @satisfies {TailwindThemeConfig['borderColor']}
 */
export const borderColors = {
  light: "var(--color-border-light)",
  medium: "var(--color-border-medium)",
  strong: "var(--color-border-strong)",
  focus: "var(--color-border-focus)",
  interactive: {
    enable: "var(--color-border-interactive-enable)",
    hover: "var(--color-border-interactive-hover)",
    press: "var(--color-border-interactive-press)",
  },
};

/**
 * Primitive colors mostly support opacity modifier (<token>/<opacity-value>).
 * @satisfies {TailwindThemeConfig['colors']}
 */
export const primitiveColors = {
  base: {
    black: "var(--color-base-black)",
    white: "var(--color-base-white)",
  },
  neutral: {
    50: "var(--color-neutral-50)",
    100: "var(--color-neutral-100)",
    200: "var(--color-neutral-200)",
    300: "var(--color-neutral-300)",
    400: "var(--color-neutral-400)",
    500: "var(--color-neutral-500)",
    600: "var(--color-neutral-600)",
    700: "var(--color-neutral-700)",
    800: "var(--color-neutral-800)",
    900: "var(--color-neutral-900)",
    950: "var(--color-neutral-950)",
  },
  amber: {
    50: "var(--color-amber-50)",
    100: "var(--color-amber-100)",
    200: "var(--color-amber-200)",
    300: "var(--color-amber-300)",
    400: "var(--color-amber-400)",
    500: "var(--color-amber-500)",
    600: "var(--color-amber-600)",
    700: "var(--color-amber-700)",
    800: "var(--color-amber-800)",
    900: "var(--color-amber-900)",
    950: "var(--color-amber-950)",
  },
};

/**
 * @satisfies {TailwindThemeConfig['colors']}
 */
export const semanticColors = {
  foreground: {
    primary: "var(--color-foreground-primary)",
    secondary: "var(--color-foreground-secondary)",
    tertiary: "var(--color-foreground-tertiary)",
    interactive: {
      enable: "var(--color-foreground-interactive-enable)",
      hover: "var(--color-foreground-interactive-hover)",
      focus: "var(--color-foreground-interactive-focus)",
      press: "var(--color-foreground-interactive-press)",
      active: "var(--color-foreground-interactive-active)",
      disabled: "var(--color-foreground-interactive-disabled)",
    },
    accent: {
      purple: "var(--color-foreground-accent-purple)",
      green: "var(--color-foreground-accent-green)",
    },
  },
  background: {
    primary: "var(--color-background-primary)",
    secondary: "var(--color-background-secondary)",
    tertiary: "var(--color-background-tertiary)",
    opacity_primary: "var(--color-background-opacity_primary)",
    opacity_secondary: "var(--color-background-opacity_secondary)",
    overlay: "var(--color-background-overlay)",
    interactive: {
      primary: {
        enable: "var(--color-background-interactive-primary-enable)",
        hover: "var(--color-background-interactive-primary-hover)",
        focus: "var(--color-background-interactive-primary-focus)",
        press: "var(--color-background-interactive-primary-press)",
        inverted: "var(--color-background-interactive-primary-inverted)",
      },
      secondary: {
        hover: "var(--color-background-interactive-secondary-hover)",
        focus: "var(--color-background-interactive-secondary-focus)",
        press: "var(--color-background-interactive-secondary-press)",
        active: "var(--color-background-interactive-secondary-active)",
      },
      tertiary: {
        hover: "var(--color-background-interactive-tertiary-hover)",
        focus: "var(--color-background-interactive-tertiary-focus)",
        press: "var(--color-background-interactive-tertiary-press)",
        active: "var(--color-background-interactive-tertiary-active)",
      },
      disabled: "var(--color-background-interactive-disabled)",
      "disabled-handle": "var(--color-background-interactive-disabled-handle)",
    },
  },
};

/**
 * Additional colors.
 * Note: this config does not support nested object, it could break the doc page.
 * @satisfies {Record<string, string>}
 */
export const additionalColors = {
  // For blur fill color
  "blur-fill": "var(--color-blur-fill)",
  transparent: "transparent",
};

/**
 * Design system colors
 * @satisfies {TailwindThemeConfig['colors']}
 */
export const colors = {
  ...semanticColors,
  ...primitiveColors,
  // Make border specific colors available in global color with prefix 'border'
  border: borderColors,
};
