// Local preview server with the same rules as nginx.conf: "/" -> 302 /nl/, directory index,
// 404.html with status 404, X-Robots-Tag on every response. No dependencies.
//   node tools/serve.mjs [dist] [port]
import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { join, extname, normalize, resolve } from 'node:path';
const root = resolve(process.argv[2] || 'dist');
const port = Number(process.argv[3] || 4173);
const TYPES = { '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.svg': 'image/svg+xml',
  '.webp': 'image/webp', '.jpg': 'image/jpeg', '.png': 'image/png', '.woff2': 'font/woff2', '.txt': 'text/plain; charset=utf-8', '.json': 'application/json' };
createServer(async (req, res) => {
  res.setHeader('X-Robots-Tag', 'noindex, nofollow');
  const url = new URL(req.url, 'http://x');
  let p = decodeURIComponent(url.pathname);
  if (p === '/') { res.writeHead(302, { Location: '/nl/' }); return res.end(); }
  let file = normalize(join(root, p));
  if (!file.startsWith(root)) { res.writeHead(400); return res.end(); }
  try {
    let s = await stat(file);
    if (s.isDirectory()) {
      if (!p.endsWith('/')) { res.writeHead(301, { Location: p + '/' }); return res.end(); }
      file = join(file, 'index.html'); s = await stat(file);
    }
    res.writeHead(200, { 'Content-Type': TYPES[extname(file)] || 'application/octet-stream' });
    res.end(await readFile(file));
  } catch {
    res.writeHead(404, { 'Content-Type': TYPES['.html'] });
    res.end(await readFile(join(root, '404.html')).catch(() => 'not found'));
  }
}).listen(port, () => console.log(`serving ${root} on http://localhost:${port}`));
