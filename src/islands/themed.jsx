// Each Astro island is its own React root, so each gets the MUI dark theme.
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from '../theme';

export const themed = (Component, { baseline = false } = {}) => {
  const Themed = (props) => (
    <ThemeProvider theme={theme}>
      {baseline && <CssBaseline enableColorScheme />}
      <Component {...props} />
    </ThemeProvider>
  );
  Themed.displayName = `Themed(${Component.displayName || Component.name || 'Component'})`;
  return Themed;
};
