import rialToToman from "./rialToToman";

/**
 * Converts Rials to Tomans and adds "تومان" sign and separator
 * @param {number | string} price - The price you want to convert into Tomans.
 */
export default function rialToHumanizeToman(price: string | number) {
  return rialToToman(price, { currency: true, separator: true });
}
