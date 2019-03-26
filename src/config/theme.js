const palette = {
  white: '#FFFFFF',
  mystic: '#E0E7ED',
  iron: '#D4D4D5',
  trout: '#4A4C58',
  limedSpruce: '#323C48',
  tuna: '#393C46',
  black: '#000000',
  brilliantRose: '#F26AA3',
  buttercup: '#F6B21B',
  red: '#FF0000',
  monza: '#B3001E',
  redDamask: '#D65E49',
  java: '#1EB8C3',
  turquoiseBlue: '#67EEA1',
  wisteria: '#A073B2',
  shakespeare: '#4895D0'
};

// export const hexToRgba = (hex, opacity = 1) => {
//   const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
//   const newHex = hex.replace(
//     shorthandRegex,
//     (m, r, g, b) => r + r + g + g + b + b
//   );
//   const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(newHex);
//   const color = x => parseInt(result[x], 16);
//   const string = `rgba(${color(1)},${color(2)},${color(3)},${opacity})`;
//   return result ? string : null;
// };

const theme = {
  primary: palette.wisteria,
  primaryVariant: palette.trout,
  secondary: palette.brilliantRose,

  background: palette.mystic,
  surface: palette.white,
  error: palette.monza,

  onPrimary: palette.white,
  onPrimaryAlt: palette.white,
  onPrimaryVariant: palette.iron,
  onSecondary: palette.white,
  onBackground: palette.limedSpruce,
  onSurface: palette.limedSpruce,
  onError: palette.white,

  shadow: palette.black,
  disabled: palette.iron
};

export default theme;
