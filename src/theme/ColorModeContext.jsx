import { createTheme, ThemeProvider } from '@mui/material';
import { createContext, useMemo, useState } from 'react';

export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

const ToggleColorMode = ({ children }) => {
  const [mode, setMode] = useState('dark');
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode(prevMode =>
          prevMode === 'light' ? 'dark' : 'light'
        );
      },
    }),
    []
  );
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default ToggleColorMode;
