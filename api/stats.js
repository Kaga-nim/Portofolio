module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');

  const token = process.env.GC_TOKEN;
  if (!token) return res.status(500).json({ error: 'Token not configured' });

  const now = new Date();
  const pad = n => String(n).padStart(2, '0');
  const fmt = d => `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}`;

  const today = fmt(now);
  const weekAgo = fmt(new Date(now - 6 * 24 * 60 * 60 * 1000));

  const headers = { 'Authorization': `Bearer ${token}` };

  const gcFetch = async (start, end) => {
    const url = `https://habibabdulghani.goatcounter.com/api/v0/stats/hits?start=${start}&end=${end}`;
    const r = await fetch(url, { headers });
    const text = await r.text();
    if (!r.ok) return { error: r.status, body: text.slice(0, 300) };
    try { return JSON.parse(text); }
    catch(e) { return { error: 'invalid json', body: text.slice(0, 300) }; }
  };

  try {
    const [d1, d2] = await Promise.all([
      gcFetch(today, today),
      gcFetch(weekAgo, today)
    ]);

    if (d1.error || d2.error) {
      return res.status(502).json({ debug: { d1, d2 } });
    }

    const sum = arr => (arr || []).reduce((s, h) => s + (h.count || 0), 0);
    res.json({ today: sum(d1.hits), week: sum(d2.hits) });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};
