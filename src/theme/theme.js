import { createTheme } from '@mui/material/styles';

export const brand = {
  main: '#e46e0f',
  light: '#f59b4b',
  dark: '#b3660f',
  contrastText: '#ffffff',
};

export const palette = {
  background: {
    default: '#494949',
    paper: '#ffffff',
  },
};

const theme = createTheme({
  palette: {
    primary: brand,
    secondary: { main: '#b3660f' },
    background: palette.background,
  },
  shape: {
    borderRadius: 12,
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          borderRadius: 12,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 600,
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          alignItems: 'center',
        },
      },
    },
  },
});

export default theme;
