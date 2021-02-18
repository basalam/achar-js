/**
 * @param {(number | string)} price - The price you want to convert into Tomans.
 */

import rialToToman from "./rialToToman";

function rialToPerfectToman(price: string | number) {
  return rialToToman(price, { currency: true, separator: true });
}

export default rialToPerfectToman;
