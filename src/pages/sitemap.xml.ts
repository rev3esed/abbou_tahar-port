import type { APIRoute } from 'astro';

const pages = [
  '',
  'publications',
  'conferences',
  'teaching',
  'activities',
  'gallery',
  'awards',
  'links',
];

export const GET: APIRoute = ({ site }) => {
  const baseUrl = (site?.origin || 'https://www.abboutahar.com').replace(/\/$/, '');
  const lastmod = new Date().toISOString().split('T')[0];

  const urls = pages
    .map((path) => {
      const loc = path ? `${baseUrl}/${path}/` : `${baseUrl}/`;
      const priority = path === '' ? '1.0' : path === 'publications' || path === 'conferences' ? '0.9' : '0.8';
      return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <priority>${priority}</priority>\n  </url>`;
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};
