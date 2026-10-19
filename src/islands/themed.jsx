// Each Astro island is its own React root, so each gets the MUI dark theme.
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from '../theme';
import { ContentProvider } from '../content/ContentContext.jsx';

export const themed = (Component, { baseline = false } = {}) => {
  // `content` = this page's editable text/images (from the Astro page)
  const Themed = ({ content, ...props }) => (
    <ContentProvider content={content}>
      <ThemeProvider theme={theme}>
        {baseline && <CssBaseline enableColorScheme />}
        <Component {...props} />
      </ThemeProvider>
    </ContentProvider>
  );
  Themed.displayName = `Themed(${Component.displayName || Component.name || 'Component'})`;
  return Themed;
};
