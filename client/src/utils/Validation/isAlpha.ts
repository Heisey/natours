
export const isAlpha = (word: string) => {
  const isValid = String(word)
  .toLowerCase()
  .match(
    /[A-Za-z]/g
  );
  if (isValid) return true

  return false
};