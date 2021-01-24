/**
 * @param {*} value - any type
 * @returns {boolean} boolean (true / false)
 */

function isObject(value: any): boolean {
  return value && typeof value === "object" && value.constructor === Object;
}

export default isObject;
