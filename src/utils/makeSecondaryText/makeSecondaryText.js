export const makeSecondaryText = (text) => {
  if (text.length > 27) {
    return text.slice(0, 27) + "...";
  } else {
    return text;
  }
};
