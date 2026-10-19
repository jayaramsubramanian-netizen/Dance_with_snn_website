// /content-schema.json — the list of editable website fields, read by the
// portal's admin → Website editor so it always matches this version of the site.
import { schema } from '../content/core.js';

export const GET = () =>
  new Response(JSON.stringify(schema), { headers: { 'Content-Type': 'application/json' } });
