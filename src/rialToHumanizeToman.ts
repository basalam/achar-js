/**
 * @param {(number | string)} price - The price you want to convert into Tomans.
 */

import rialToToman from "./rialToToman";

function rialToHumanizeToman(price: string | number = NaN) {
  return rialToToman(price, { currency: true, separator: true });
}

export default rialToHumanizeToman;
