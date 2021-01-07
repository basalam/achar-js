/**
 * @param {String} num - This function receives text or number
 * @returns {String} This function returns string with separator
 */

function numberSeparator(num: string | number): string {
  if (!num || typeof num != "number" && typeof num != "string") return "";

  return typeof num === "number"
  ? num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  : num.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

export default numberSeparator;
