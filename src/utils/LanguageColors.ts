const languageColors = {
  JavaScript: "#cbb400",
  TypeScript: "#2b7489",
  HTML: "#e34c26",
  Ruby: "#aadd77",
};

export const getLanguageColor = (language) => {
  return languageColors[language] || "#555";
};
