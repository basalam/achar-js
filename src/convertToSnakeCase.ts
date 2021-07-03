function convertToSnakeCase(text: string): string {
  if (!text) return "";

  // Remove everything exept Alphabet, numbers or space character
  text = text.replace(/[^A-Z|^a-z|^1-9|^\s]/g, "");

  return text.replace(/\s/g, "_").toLowerCase();
}

export default convertToSnakeCase;
