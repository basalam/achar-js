/**
 * @param {String} htmlTag - This string should have some html tag
 * @returns {String} This function receives some text with an HTML tag and removes all tags around the text
 */

function stripText(htmlTag: string = ""): string {
  // <a href="#">Text</a> => text
  htmlTag = htmlTag.replace(/(<([^>]+)>)/gi, "");

  // replace breaklines with <br> tag
  htmlTag = htmlTag.replace(/(?:\r\n|\r|\n)/g, "<br>");

  return htmlTag;
}

export default stripText;
