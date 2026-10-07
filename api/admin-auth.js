const attempts = new Map();

module.exports = async (request, response) => {
  response.setHeader('Cache-Control', 'no-store');
  response.setHeader('X-Content-Type-Options', 'nosniff');

  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST');
    return response.status(405).json({ error: 'Method not allowed' });
  }

  const clientIp = String(request.headers['x-forwarded-for'] || 'unknown').split(',')[0].trim();
  const now = Date.now();
  const previous = attempts.get(clientIp);
  if (previous && now - previous.startedAt < 10 * 60 * 1000 && previous.count >= 8) {
    return response.status(429).json({ error: 'Demasiados intentos. Esperá unos minutos.' });
  }

  const password = typeof request.body?.password === 'string' ? request.body.password : '';
  // Piloto: configurar WAVEPOINT_ADMIN_PASSWORD en Vercel antes de publicar.
  // El fallback permite probar el flujo inicial y debe eliminarse en producción.
  const expected = process.env.WAVEPOINT_ADMIN_PASSWORD || 'piloto123';
  const valid = password.length > 0 && password === expected;

  if (!valid) {
    attempts.set(clientIp, previous && now - previous.startedAt < 10 * 60 * 1000
      ? { startedAt: previous.startedAt, count: previous.count + 1 }
      : { startedAt: now, count: 1 });
    return response.status(401).json({ error: 'Contraseña incorrecta' });
  }

  attempts.delete(clientIp);
  return response.status(200).json({ ok: true, mode: process.env.WAVEPOINT_ADMIN_PASSWORD ? 'configured' : 'pilot-fallback' });
};
