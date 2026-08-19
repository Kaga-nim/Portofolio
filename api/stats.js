module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate=60');

  const token = process.env.GC_TOKEN;
  if (!token) return res.status(500).json({ error: 'Token not configured' });

  const now = new Date();
  const pad = n => String(n).padStart(2, '0');
  const fmt = d => `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}`;

  const today = fmt(now);
  const weekAgo = fmt(new Date(now - 6 * 24 * 60 * 60 * 1000));

  const headers = { 'Authorization': `Bearer ${token}` };

  try {
    const [r1, r2] = await Promise.all([
      fetch(`https://habibabdulghani.goatcounter.com/api/v0/stats/hits?start=${today}+00%3A00%3A00&end=${today}+23%3A59%3A59`, { headers }),
      fetch(`https://habibabdulghani.goatcounter.com/api/v0/stats/hits?start=${weekAgo}+00%3A00%3A00&end=${today}+23%3A59%3A59`, { headers })
    ]);

    const d1 = await r1.json();
    const d2 = await r2.json();

    const sum = arr => (arr || []).reduce((s, h) => s + (h.count || 0), 0);

    res.json({
      today: sum(d1.hits),
      week: sum(d2.hits)
    });
  } catch (e) {
    res.status(500).json({ error: 'Failed to fetch stats' });
  }
};
