export function helperGradient(percent) {
  let green = 0;
  let red = 255;
  const gradient = percent * 5;
  green = green + gradient;
  if (green >= 256) {
    red = red - (green - 255);
  }
  return `rgb(${red}, ${green}, 0)`;
}
