/**
 * @param {(String | Number)} text - This function receives text or number
 * @returns {String} This function converts Persian/Arabic numerals to English
 */

//  Fix: return number & TypeScript types
function convertToEnDigit(text: any = "") {
  return text.replace(
    /[\u0660-\u0669\u06f0-\u06f9]/g,
    (c: string) => c.charCodeAt(0) & 0xf
  );
}

export default convertToEnDigit;
