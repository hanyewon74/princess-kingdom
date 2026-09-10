// Vercel Serverless Function
// 이 파일은 서버에서만 실행되며, ANTHROPIC_API_KEY는 브라우저에 절대 노출되지 않습니다.

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    res.status(500).json({ error: 'ANTHROPIC_API_KEY가 서버에 설정되어 있지 않습니다.' });
    return;
  }

  try {
    const { image, mediaType, prompt } = req.body || {};

    if (!image || !mediaType || !prompt) {
      res.status(400).json({ error: 'image, mediaType, prompt가 모두 필요합니다.' });
      return;
    }

    const anthropicRes = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-6',
        max_tokens: 1000,
        messages: [{
          role: 'user',
          content: [
            { type: 'image', source: { type: 'base64', media_type: mediaType, data: image } },
            { type: 'text', text: prompt }
          ]
        }]
      })
    });

    const data = await anthropicRes.json();

    if (!anthropicRes.ok) {
      res.status(anthropicRes.status).json({ error: data });
      return;
    }

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: String(err) });
  }
};
