/**
 * Removes all the HTML tags around the text
 * @param {string} textWithHTML - A text with some HTML tags
 * @returns {string}
 */
export default function stripText(textWithHTML: string = ""): string {
  return textWithHTML.replace(/(<([^>]+)>)/gi, "");
}
