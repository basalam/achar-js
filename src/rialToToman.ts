/**
 * @param {(number | string)} price - The price you want to convert into Tomans.
 * @param {Object} [options] - currency or separator option [optional]
 */

import numberSeparator from "./numberSeparator"

interface Options {
  currency: boolean;
  separator: boolean;
}

function rialToToman(price: string | number, options?: Options) {
  if (!price || typeof price != "number" && typeof price != "string") return ""

  const currency = options?.currency;
  const separator = options?.separator;

  price = typeof price === "string" ? parseInt(price) / 10 : price / 10;

  return currency && separator
    ? `${numberSeparator(price)} تومان`
    : !currency && separator
    ? numberSeparator(price)
    : currency && !separator
    ? `${price} تومان`
    : price;
}

export default rialToToman;
