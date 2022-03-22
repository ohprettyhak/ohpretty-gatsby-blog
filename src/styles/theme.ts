const fonts = {
  family: {
    base: `-apple-system, BlinkMacSystemFont, 'Apple SD Gothic Neo', Pretendard, Roboto, 'Noto Sans KR', 'Segoe UI', 'Malgun Gothic', sans-serif`,
  },
  size: {
    sm: '1.4rem',
    base: '1.6rem',
    lg: '2rem',
    xl: '2.5rem',
    title: '6rem',
  },
  weight: {
    light: 100,
    normal: 400,
    bold: 700,
  },
};

const colors = {
  red: '#ff4d4d',
  yellow: '#ffff4d',
  blue: '#0099ff',
};

const size = {
  mobile: '425px',
  tablet: '768px',
  desktop: '1200px',
};

const device = {
  mobile: `@media only screen and (max-width: ${size.mobile})`,
  tablet: `@media only screen and (max-width: ${size.tablet})`,
  desktopL: `@media only screen and (max-width: ${size.desktop})`,
};

const lightThemeColors = {
  ...colors,
  primary: 'white',
  line: '#eeeeee',
  font: '#343a40',
  fontSecondary: '#868e96',
  cover: '#fcfcfc',
  tertiary: '#808080',
};

const darkThemeColors = {
  ...colors,
  primary: '#25201d',
  line: '#1a1613',
  font: 'white',
  fontSecondary: '#bbbbbb',
  cover: '#221e1a',
  tertiary: '#d4d0c4',
};

const defalutTheme = {
  fonts,
  device,
};

export const darkTheme = {
  ...defalutTheme,
  colors: darkThemeColors,
};

export const lightTheme = {
  ...defalutTheme,
  colors: lightThemeColors,
};
