
export const isAlphanumeric = (word: string) => {
  const isValid = String(word)
  .toLowerCase()
  .match(
    /^[a-zA-Z0-9_]*$/
  );
  if (isValid) return true

  return false
};