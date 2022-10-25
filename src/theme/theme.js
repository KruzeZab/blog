import { createTheme } from '@mui/material';

export const lightTheme = createTheme({
  typography: {
    fontFamily: ['"Poppins"', '"Roboto"', 'sans-serif'].join(','),
  },
  palette: {
    error: {
      main: '#fd2155',
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    error: {
      main: '#fd2155',
    },
  },
});
