export function withBase(path = '/') {
  const rawBase = import.meta.env.BASE_URL ?? '/';
  const base = rawBase.replace(/\/$/, '');
  const normalized = path === '/' || path === ''
    ? '/'
    : `/${path.replace(/^\/+/, '')}`;
  const combined = `${base}${normalized}`;
  return combined === '' ? '/' : combined;
}
