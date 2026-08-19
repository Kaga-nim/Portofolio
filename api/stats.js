module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');

  const token = process.env.GC_TOKEN;
  if (!token) return res.status(500).json({ error: 'Token not configured' });

  const headers = { 'Authorization': `Bearer ${token}` };

  const gcFetch = async (path) => {
    const url = `https://habibabdulghani.goatcounter.com${path}`;
    const r = await fetch(url, { headers });
    const text = await r.text();
    try { return { status: r.status, data: JSON.parse(text) }; }
    catch(e) { return { status: r.status, body: text.slice(0, 300) }; }
  };

  try {
    const [a, b, c, d] = await Promise.all([
      gcFetch('/api/v0/stats/hits'),
      gcFetch('/api/v0/stats/hits?start=2026-08-12&end=2026-08-19'),
      gcFetch('/api/v0/stats/total?start=2026-08-12&end=2026-08-19'),
      gcFetch('/api/v0/export')
    ]);

    res.json({ noParams: a, withDate: b, total: c, export: d });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};
