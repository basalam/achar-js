/**
 * Generates a unique id with the requested length
 * @param {number} length - Length of generated id
 * @returns {string} Unique id
 */
export default function generateUniqueId(length: number = 8): string {
  return Math.random().toString(36).substr(2, length);
}

console.log(generateUniqueId(15));
