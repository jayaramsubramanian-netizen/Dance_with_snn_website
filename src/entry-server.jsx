import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { ThemeProvider, CssBaseline } from '@mui/material'
import { CacheProvider } from '@emotion/react'
import createCache from '@emotion/cache'
import createEmotionServer from '@emotion/server/create-instance'
import App from './App'
import theme from './theme'

export function render(url) {
  const helmetContext = {}

  // Create a fresh emotion cache per request to avoid style leaking between routes
  const cache = createCache({ key: 'css' })
  const { extractCriticalToChunks, constructStyleTagsFromChunks } = createEmotionServer(cache)

  const appHtml = renderToString(
    <CacheProvider value={cache}>
      <HelmetProvider context={helmetContext}>
        <ThemeProvider theme={theme}>
          <CssBaseline enableColorScheme />
          <StaticRouter location={url}>
            <App />
          </StaticRouter>
        </ThemeProvider>
      </HelmetProvider>
    </CacheProvider>
  )

  // Extract the critical MUI/emotion CSS used for this render — prevents
  // flash of unstyled content (CLS) which hurts Core Web Vitals / SEO
  const chunks = extractCriticalToChunks(appHtml)
  const emotionStyleTags = constructStyleTagsFromChunks(chunks)

  return { appHtml, helmet: helmetContext.helmet, emotionStyleTags }
}
