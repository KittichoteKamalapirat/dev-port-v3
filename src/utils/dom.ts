/**
 * Get the value of a CSS variable
 *
 * @param name - The name of the CSS variable starting with --, e.g. --space-gap-sm
 * @param [element = window.document.body] - Optional element to get the CSS variable from
 */
export const getCssVarValue = (
  name: string,
  element: HTMLElement = window.document.body,
) => {
  return getComputedStyle(element).getPropertyValue(name);
};
