/**
 * @param {(number | string)} price - The price you want to convert into Tomans.
 * @param {Object} [options] - currency or separator option [optional]
 */

interface Options {
  currency: boolean;
  separator: boolean;
}

function rialToToman(price: string | number, options?: Options) {
  if (!price || typeof price != "number" && typeof price != "string") return ""

  const currency = options?.currency;
  const separator = options?.separator;

  price = typeof price === "string" ? parseInt(price) / 10 : price / 10;
  const withSeparator = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return currency && separator
    ? `${withSeparator} تومان`
    : !currency && separator
    ? withSeparator
    : currency && !separator
    ? `${price} تومان`
    : price;
}

export default rialToToman;
