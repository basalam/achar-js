/**
 * @param {number} length - length of generated id
 * @returns {string} string - random unique id
 */

function generateUniqueId(length: number = 8) {
  return Math.random().toString(36).substr(2, length);
}

export default generateUniqueId;
