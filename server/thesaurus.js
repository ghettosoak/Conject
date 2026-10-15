// Replaces php/thesaurus.php: GET /api/thesaurus?query=word1 word2
// -> { word1: [synonyms...], word2: [...] }
const express = require('express');
const getPool = require('./db');

const router = express.Router();

const SQL = `
	SELECT DISTINCT term.word
	FROM term
	JOIN synset ON synset.id = term.synset_id
	JOIN term term2 ON term2.synset_id = synset.id
	WHERE synset.is_visible = 1
	  AND term2.word = ?`;

router.get('/', async (req, res) => {
	const words = String(req.query.query || '').split(/\s+/).filter(Boolean).slice(0, 50);
	const symmetry = {};

	try {
		for (const word of words) {
			const [rows] = await getPool().query(SQL, [word]); // parameterized: no SQL injection
			symmetry[word] = rows.map(r => r.word);
		}
		res.json(symmetry);
	} catch (err) {
		console.error('thesaurus query failed:', err.message);
		res.status(503).json({ error: 'thesaurus database unavailable' });
	}
});

module.exports = router;
