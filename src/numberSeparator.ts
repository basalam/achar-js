/**
 * @param {string} number - You can pass string or number
 */
export default function numberSeparator(number: string | number): string {
  if (typeof number != "number" && typeof number != "string") {
    return "";
  }

  return typeof number === "number"
    ? number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    : number.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
