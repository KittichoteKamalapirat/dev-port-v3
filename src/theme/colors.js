// @ts-check

/**
 * @typedef {import('./tailwind/types').TailwindThemeConfig} TailwindThemeConfig
 */

/**
 * Design system border colors
 * @satisfies {TailwindThemeConfig['borderColor']}
 */
export const borderColors = {
  bounds: "var(--color-border-bounds)",
  bounds_solid: "var(--color-border-bounds_solid)",
  divider: "var(--color-border-divider)",
  focus: "var(--color-border-focus)",
  disabled: "var(--color-border-disabled)",
  input_controls: {
    enable: "var(--color-border-input_controls-enable)",
    hover: "var(--color-border-input_controls-hover)",
    press: "var(--color-border-input_controls-press)",
    active: "var(--color-border-input_controls-active)",
    selected: {
      enable: "var(--color-border-input_controls-selected-enable)",
      hover: "var(--color-border-input_controls-selected-hover)",
      press: "var(--color-border-input_controls-selected-press)",
    },
  },
  interactive: {
    secondary: {
      enable: "var(--color-border-interactive-secondary-enable)",
      hover: "var(--color-border-interactive-secondary-hover)",
      press: "var(--color-border-interactive-secondary-press)",
    },
  },
  system: {
    danger: {
      primary: "var(--color-border-system-danger-primary)",
    },
  },
};

/**
 * Primitive colors mostly support opacity modifier (<token>/<opacity-value>).
 * @satisfies {TailwindThemeConfig['colors']}
 */
export const primitiveColors = {
  // brand: {
  //   accent: {
  //     100: "var(--color-brand-accent-100)",
  //     200: "var(--color-brand-accent-200)",
  //     300: "var(--color-brand-accent-300)",
  //     400: "var(--color-brand-accent-400)",
  //     500: "var(--color-brand-accent-500)",
  //     600: "var(--color-brand-accent-600)",
  //     700: "var(--color-brand-accent-700)",
  //     800: "var(--color-brand-accent-800)",
  //   },
  //   on_light: {
  //     primary: "var(--color-brand-on_light-primary)",
  //     accent: "var(--color-brand-on_light-accent)",
  //   },
  //   on_dark: {
  //     // This color has some opacity built-in, you cannot override it
  //     primary: "var(--color-brand-on_dark-primary)",
  //     accent: "var(--color-brand-on_dark-accent)",
  //   },
  //   background: {
  //     primary: "var(--color-brand-background-primary)",
  //   },
  // },
  // base: {
  //   black: "var(--color-base-black)",
  //   white: "var(--color-base-white)",
  // },
  neutral: {
    100: "var(--color-neutral-100)",
    200: "var(--color-neutral-200)",
    300: "var(--color-neutral-300)",
    400: "var(--color-neutral-400)",
    500: "var(--color-neutral-500)",
    600: "var(--color-neutral-600)",
    700: "var(--color-neutral-700)",
    800: "var(--color-neutral-800)",
    900: "var(--color-neutral-900)",
    1000: "var(--color-neutral-1000)",
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
