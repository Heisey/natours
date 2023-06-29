
export const isNumeric = (word: string) => {
  const isValid = String(word)
  .toLowerCase()
  .match(
    /\d+/
  );
  if (isValid) return true

  return false
};