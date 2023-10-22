// Object containing set of defined colors
const languageColors = {
  JavaScript: "#cbb400",
  TypeScript: "#2b7489",
  HTML: "#e34c26",
  Ruby: "#aadd77",
};

/**
 * Get the color associated with a programming language. If the language is not found within languageColors object,
 * a default color is returned.
 *
 * @param {string} language - The programming language.
 * @returns {string} The color associated with the language, or a default color if not found.
 */

export const getLanguageColor = (language: string) => {
  return languageColors[language] || "#555";
};
