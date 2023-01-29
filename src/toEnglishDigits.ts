/**
 * Converts Arabic or Persian numbers to English
 * @param {string} text - Text with Arabic or Persian numbers
 * @returns {string} Text with English numbers
 */
export default function toEnglishDigits(text: string): string {
  const PERSIAN_OR_ARABIC_NUMBERS_REGEX = /[\u0660-\u0669\u06f0-\u06f9]/g;

  return text.replace(PERSIAN_OR_ARABIC_NUMBERS_REGEX, (c: string) =>
    String(c.charCodeAt(0) & 0xf)
  );
}
