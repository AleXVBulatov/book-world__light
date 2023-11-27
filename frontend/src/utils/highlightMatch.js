const highlightMatch = (text, filter) => {
  if (!filter) return text;

  const regexp = new RegExp(`(${filter})`, "gi");

  return text.split(regexp).map((substring, index) => {
    if (substring.toLowerCase() === filter.toLowerCase()) {
      return (
        <span key={index} style={{ backgroundColor: "#ff9e60" }}>
          {substring}
        </span>
      );
    }
    return substring;
  });
};

export default highlightMatch;
