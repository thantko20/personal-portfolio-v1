import GlobalStyles from './globalStyles';

const theme = {
  colors: {
    bodyBg: '#19191C',
    primary: {
      50: '#EEF2FF',
      100: '#EEF2FF',
      300: '#A5B4FC',
      400: '#818CF8',
      500: '#6366F1',
      600: '#4F46E5',
      700: '#4338CA',
      900: '#272460',
    },
    neutral: {
      200: '#E5E5E5',
      300: '#d4d4d4',
      400: '#a3a3a3',
      500: '#737373',
      600: '#525252',
      800: '#262626',
    },
    text: '#C2C2C2',
    white: '#ffffff',
    black: '#000000',
  },
  fontFamily: {
    primary: "'Poppins', sans-serif",
  },
  breakpoints: {
    sm: '39.9375em',
    md: '47.9375em',
    lg: '73.75em',
  },
};

export default theme;
export { GlobalStyles };
