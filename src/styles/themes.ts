import { mauve, mauveDark, purple, purpleDark } from '@radix-ui/colors';

export const theme = {
  light: {
    background: mauve.mauve1,
    cardBackground: mauve.mauve3,
    textColor: mauve.mauve12,
    accent: purple.purple9,
    accentHover: purple.purple11,
  },
  dark: {
    background: mauveDark.mauve1,
    cardBackground: mauveDark.mauve3,
    textColor: mauveDark.mauve12,
    accent: purpleDark.purple9,
    accentHover: purpleDark.purple11,
  }
};


// themes.ts
export const defaultTheme = {
  colors: {
    background: mauve.mauve1,
    cardBackground: mauve.mauve3,
    textColor: mauve.mauve12,
    accent: purple.purple9,
    accentHover: purple.purple11,
  },
  fonts: {
    primary: 'Montserrat, sans-serif',
  },
};

export const darkTheme = {
  colors: {
    background: mauveDark.mauve1,
    cardBackground: mauveDark.mauve3,
    textColor: mauveDark.mauve12,
    accent: purpleDark.purple9,
    accentHover: purpleDark.purple11,
  },
};
