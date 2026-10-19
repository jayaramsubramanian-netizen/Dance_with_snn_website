// Stand-in for react-router-dom on the multi-page Astro site.
// Navigation is a normal page load; the current path comes from the browser,
// or (while Astro renders the page at build time) from SiteLayout.astro.
export function currentPath() {
  if (typeof window !== 'undefined') return window.location.pathname.replace(/\/+$/, '') || '/';
  return globalThis.__SNN_PATH__ || '/';
}

export function useLocation() {
  return { pathname: currentPath(), search: '', hash: '' };
}

export function useNavigate() {
  return (to) => {
    if (typeof window === 'undefined') return;
    if (typeof to === 'number') { window.history.go(to); return; }
    window.location.href = to;
  };
}

export function Link({ to, children, ...rest }) {
  return <a href={to} {...rest}>{children}</a>;
}
export const NavLink = Link;
