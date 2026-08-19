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
    try { return JSON.parse(text); }
    catch(e) { return { error: 'invalid json', body: text.slice(0, 500) }; }
  };

  try {
    const [d1, d2] = await Promise.all([
      gcFetch(today, today),
      gcFetch(weekAgo, today)
    ]);

    // Sementara return raw untuk debug
    res.json({ today_raw: d1, week_raw: d2 });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};
