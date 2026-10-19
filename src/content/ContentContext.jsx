// src/content/ContentContext.jsx — gives React sections the editable text and
// images. Without a provider (or for a missing key) the schema default is used,
// so every section always renders.
import { createContext, useContext, Fragment } from 'react';
import { defaultContent } from './core.js';

const DEFAULTS = defaultContent();
const ContentContext = createContext(DEFAULTS);

export function ContentProvider({ content, children }) {
  return <ContentContext.Provider value={content ? { ...DEFAULTS, ...content } : DEFAULTS}>{children}</ContentContext.Provider>;
}

export function useContent() {
  const map = useContext(ContentContext);
  const t = (key) => map[key] ?? DEFAULTS[key] ?? '';
  const img = (key) => ({ src: t(key), alt: map[`${key}#alt`] ?? DEFAULTS[`${key}#alt`] ?? '' });
  return { t, img };
}

/**
 * Renders admin text: **words** → highlighted span, one newline → <br/>,
 * blank line → paragraph break (<br/><br/>), matching the original markup.
 */
export function RichText({ text, highlightStyle = { color: '#E94B6E', fontWeight: 600 } }) {
  const paragraphs = String(text ?? '').replace(/\r\n/g, '\n').split(/\n{2,}/);
  return paragraphs.map((para, pi) => (
    <Fragment key={pi}>
      {pi > 0 && <><br /><br /></>}
      {para.split('\n').map((line, li) => (
        <Fragment key={li}>
          {li > 0 && <br />}
          {line.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
            part.startsWith('**') && part.endsWith('**') && part.length > 4
              ? <span key={i} style={highlightStyle}>{part.slice(2, -2)}</span>
              : <Fragment key={i}>{part}</Fragment>
          )}
        </Fragment>
      ))}
    </Fragment>
  ));
}

/** Shorthand: <Rich k="home.legacy.body" /> */
export function Rich({ k, highlightStyle }) {
  const { t } = useContent();
  return <RichText text={t(k)} highlightStyle={highlightStyle} />;
}
