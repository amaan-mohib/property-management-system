export const formatPrice = (price = 0) => {
  if (price >= 10000000) {
    return `${price / 10000000} Crore`;
  } else if (price >= 100000) {
    return `${price / 100000} Lac`;
  } else if (price >= 10000) {
    return `${price / 10000} K`;
  }
};
