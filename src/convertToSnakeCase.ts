import { isObject } from "./index";

/**
 * Converts snake_case words to camelCase
 * @param {*} entry - You can pass objects, arrays or strings
 * @returns {*}
 */
export default function snakeToCamelCase(entry: any): any {
  const snakeToCamel = (text: string) => {
    return text.replace(/(\_\w)/g, (word: string) => word[1].toUpperCase());
  };

  if (typeof entry === "string") {
    return snakeToCamel(entry);
  }

  if (isObject(entry)) {
    const clone: any = {};

    for (const key in entry) {
      clone[snakeToCamel(key)] =
        typeof entry[key] === "string"
          ? entry[key]
          : snakeToCamelCase(entry[key]);
    }

    return clone;
  }

  if (Array.isArray(entry)) {
    return entry.map((i) => snakeToCamel(i));
  }

  return entry;
}
