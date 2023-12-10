import { flatten } from "flat";
import { RecursiveKeyValuePair } from "tailwindcss/types/config";

// import { getCssVarValue } from "@/utils/dom";

export const getCssVarValue = (
  name: string,
  element: HTMLElement = window.document.body,
) => {
  return getComputedStyle(element).getPropertyValue(name);
};
import { ObjectValues, ObjectKeys } from "@/types";

export type ObjToArr<T extends Record<PropertyKey, unknown>> = {
  key: ObjectKeys<T>;
  value: ObjectValues<T>;
}[];

/**
 * Converts an object to an array of { key, value }
 */
export function objToArr<T extends Record<PropertyKey, unknown>>(
  obj: T,
): ObjToArr<T> {
  return (Object.entries(obj) as [ObjectKeys<T>, ObjectValues<T>][]).map(
    ([key, value]) => ({
      key,
      value,
    }),
  );
}

export type CreateClassNamePatternOptions = {
  /**
   * Prefix to be added before the color name.
   * If `null` is sent, the prefix will be removed.
   * @default '*'
   */
  prefix?: string | null;
};

export function createClassNamePattern(
  names: Exclude<PropertyKey, symbol>[],
  options: CreateClassNamePatternOptions = {},
) {
  const { prefix = "*" } = options;
  return [prefix, ...names].filter(Boolean).join("-");
}

export function flattenTailwindConfigToArr(
  config: RecursiveKeyValuePair<string, string>,
) {
  // Converts nested color config to flatten obj
  // { background: { primary: '<color>' } } => { 'background-primary': '<color>' }
  const flattenColors = flatten(config, { delimiter: "-" }) as Record<
    string,
    string
  >;
  // Convert flatten obj to an array
  return objToArr(flattenColors);
}

export function removeClassNameDot(className: string) {
  return className.replace(/^\./, "");
}

/**
 * Some colors are defined in the config with tailwind's special placeholder, `<alpha-value>`
 * When reading the config directly, we will also get that placeholder.
 * This function parses special color config and make it ready-to-use outside tailwind system.
 */
export function configToCssColor(str: string, value = 1) {
  return str.replace("<alpha-value>", value.toString());
}

/**
 * Extract the variable name from a css 'var(<variableName>)' value string
 *
 * @example
 * getCssVariableNameFromVar('var(--color-primary)') // '--color-primary'
 */
export function getCssVariableNameFromVar(varStr: string) {
  return varStr.replace(/^var\((.+)\)$/, "$1");
}

/**
 * Predicate if a string is using css var() syntax
 *
 * @example
 * isUsingVar('var(--color-primary)') // true
 */
export function isUsingCssVar(varStr: string): varStr is `var(${string})` {
  return varStr.startsWith("var(") && varStr.endsWith(")");
}

/**
 * Resolve css string value to its actual value
 * If the string is not using css var() syntax, it will return the string itself
 *
 * @param varStr
 * @param [element] - optionally pass an element to get the value from
 */
export function resolveCssVar(varStr: string | number, element?: HTMLElement) {
  // In case a number is passed, just return it as a string
  if (typeof varStr === "number") return varStr.toString();

  if (isUsingCssVar(varStr)) {
    const varName = getCssVariableNameFromVar(varStr);
    return getCssVarValue(varName, element);
  }

  return varStr;
}
