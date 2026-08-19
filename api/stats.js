module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate=60');

  const token = process.env.GC_TOKEN;
  if (!token) return res.status(500).json({ error: 'Token not configured' });

  const headers = { 'Authorization': `Bearer ${token}` };

  try {
    const r = await fetch('https://habibabdulghani.goatcounter.com/api/v0/stats/hits', { headers });
    const data = await r.json();
    if (!r.ok) return res.status(r.status).json({ error: data });

    const now = new Date();
    const pad = n => String(n).padStart(2, '0');
    const fmt = d => `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}`;

    const today = fmt(now);
    const last7 = new Set();
    for (let i = 0; i < 7; i++) {
      last7.add(fmt(new Date(now - i * 24 * 60 * 60 * 1000)));
    }

    let todayCount = 0;
    let weekCount = 0;

    for (const hit of data.hits || []) {
      for (const stat of hit.stats || []) {
        const day = stat.day; // "2026-08-19"
        const daily = stat.daily || 0;
        if (day === today) todayCount += daily;
        if (last7.has(day)) weekCount += daily;
      }
    }

    res.json({ today: todayCount, week: weekCount });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};
