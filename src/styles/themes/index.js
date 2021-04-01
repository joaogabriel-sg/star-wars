import palette from './palette';

const fonts = ['Lato', 'Helvetica', 'Arial', 'sans-serif'].join(',');

const mediaQueries = {
  tablet: '768px',
  mobile: '620px',
};

export const dark = {
  title: 'dark',
  colors: {
    primary: '#191919',
    secondary: '#2d2d2d',
    text: '#f1f2f6',
    palette,
  },
  fonts,
  mediaQueries,
};

export const light = {
  title: 'light',
  colors: {
    primary: '#f1f2f6',
    secondary: '#dfe4ea',
    text: '#191919',
    palette,
  },
  fonts,
  mediaQueries,
};
