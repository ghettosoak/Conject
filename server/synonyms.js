// Proxies Altervista's thesaurus so the API key stays on the server.
// GET /api/synonyms?word=house&language=en_US  (key: ALTERVISTA_KEY env var)
const https = require('https');
const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
	const key = process.env.ALTERVISTA_KEY;
	const word = String(req.query.word || '').trim();
	const language = String(req.query.language || '');

	if (!key) return res.status(503).json({ error: 'ALTERVISTA_KEY is not set' });
	if (!word || word.length > 100 || !/^[a-z]{2}_[A-Z]{2}$/.test(language))
		return res.status(400).json({ error: 'bad word or language' });

	const url = 'https://thesaurus.altervista.org/thesaurus/v1?' + new URLSearchParams({
		word, language, key, output: 'json'
	});

	https.get(url, { timeout: 8000 }, upstream => {
		res.status(upstream.statusCode);
		res.type('json');
		upstream.pipe(res);
	}).on('timeout', function () {
		this.destroy(new Error('timeout'));
	}).on('error', err => {
		console.error('synonyms request failed:', err.message);
		if (!res.headersSent) res.status(502).json({ error: 'upstream unavailable' });
	});
});

module.exports = router;
