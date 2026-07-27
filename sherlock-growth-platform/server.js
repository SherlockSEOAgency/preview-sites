// Sherlock Growth Platform — wachtlijst-funnel
// Dependency-vrij (alleen Node core). Serveert de pagina + slaat leads op.
const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = process.env.PORT || 3000;
const ADMIN_TOKEN = process.env.ADMIN_TOKEN || "changeme";
const DATA_DIR = process.env.DATA_DIR || "/data";
const STORE = path.join(DATA_DIR, "leads.ndjson");
const HTML = fs.readFileSync(path.join(__dirname, "index.html"));

try { fs.mkdirSync(DATA_DIR, { recursive: true }); } catch (e) {}

function send(res, code, body, type = "text/plain; charset=utf-8") {
  res.writeHead(code, { "Content-Type": type });
  res.end(body);
}

const RE_MAIL = /^[^@\s]+@[^@\s]+\.[a-zA-Z]{2,}$/;

const server = http.createServer((req, res) => {
  const u = new URL(req.url, "http://x");

  if (req.method === "GET" && (u.pathname === "/" || u.pathname === "/index.html"))
    return send(res, 200, HTML, "text/html; charset=utf-8");

  if (req.method === "GET" && u.pathname === "/healthz")
    return send(res, 200, "ok");

  if (req.method === "POST" && u.pathname === "/api/lead") {
    let b = "";
    req.on("data", (c) => { b += c; if (b.length > 10000) req.destroy(); });
    req.on("end", () => {
      let d = {};
      try { d = JSON.parse(b || "{}"); }
      catch (e) { return send(res, 400, JSON.stringify({ ok: false, error: "ongeldige invoer" }), "application/json"); }
      // honeypot: bot vult 'bedrijfs_fax' -> doe alsof het lukte, sla niets op
      if (d.bedrijfs_fax) return send(res, 200, JSON.stringify({ ok: true }), "application/json");
      const email = String(d.email || "").trim().toLowerCase();
      if (!RE_MAIL.test(email) || !d.consent)
        return send(res, 422, JSON.stringify({ ok: false, error: "Vul een geldig e-mailadres in en geef toestemming voor opvolging." }), "application/json");
      const rec = {
        ts: new Date().toISOString(),
        naam: String(d.naam || "").trim().slice(0, 200),
        email,
        bedrijf: String(d.bedrijf || "").trim().slice(0, 200),
        zoek: String(d.zoek || "").trim().slice(0, 40),
        wens: String(d.wens || "").trim().slice(0, 2000),
        consent: !!d.consent,
        ip: String(req.headers["x-forwarded-for"] || "").split(",")[0].trim(),
      };
      try { fs.appendFileSync(STORE, JSON.stringify(rec) + "\n"); }
      catch (e) { console.error("STORE_FAIL " + e.message); }
      console.log("LEAD " + JSON.stringify(rec)); // ook in de container-logs = tweede spoor
      send(res, 200, JSON.stringify({ ok: true }), "application/json");
    });
    return;
  }

  if (req.method === "GET" && u.pathname === "/api/leads") {
    if (u.searchParams.get("token") !== ADMIN_TOKEN) return send(res, 401, "unauthorized");
    let data = "";
    try { data = fs.readFileSync(STORE, "utf8"); } catch (e) {}
    const lines = data.trim() ? data.trim().split("\n") : [];
    return send(res, 200, JSON.stringify({
      count: lines.length,
      leads: lines.map((l) => { try { return JSON.parse(l); } catch (e) { return { raw: l }; } }),
    }, null, 2), "application/json");
  }

  send(res, 404, "not found");
});

server.listen(PORT, () => console.log("growth-funnel up on " + PORT));
