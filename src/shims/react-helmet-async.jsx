// Stand-in for react-helmet-async. Page titles, descriptions and structured
// data now live in each Astro page (src/pages/*.astro → SiteLayout.astro),
// so the <Helmet> blocks inside the React views render nothing.
export function Helmet() { return null; }
export function HelmetProvider({ children }) { return children; }
