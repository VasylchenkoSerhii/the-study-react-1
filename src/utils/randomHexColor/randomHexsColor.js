export function getRandomHexColor() {
  let bgColor = `#${Math.ceil(Math.random() * 16777215).toString(16)}`;
  if (bgColor.length < 7) {
    bgColor += '1';
    return bgColor;
  };
  return bgColor;
};