const palette = {
  charcoal: '#393E41',
  trout: '#4A4C58',
  darkGreen: '#44BBA4',
  calmBlue: '#81DBD1',
  brightGreen: '#F2FCFB',
  grey: '#EEEEEE',
  white: '#FFFFFF'
};

const theme = {
  primary: palette.darkGreen,
  primaryVariant: palette.calmBlue,
  secondary: palette.brightGreen,
  surface: palette.white,

  onPrimary: palette.white,
  onPrimaryVariant: palette.white,
  onSecondary: palette.charcoal,
  onSurface: palette.trout,

  shadow: palette.darkGreen,
  disabled: palette.grey
};

export default theme;
