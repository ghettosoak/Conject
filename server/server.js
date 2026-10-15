// Serves the Con.ject front end and the optional thesaurus API.
const path = require('path');
const express = require('express');

const root = path.join(__dirname, '..');
const app = express();

app.use('/api/thesaurus', require('./thesaurus'));
app.use('/api/synonyms', require('./synonyms'));

// index.php contains no PHP, so serve it as plain HTML
app.get('/', (req, res) => res.sendFile(path.join(root, 'index.php'), {
	headers: { 'Content-Type': 'text/html; charset=utf-8' }
}));

['css', 'js', 'img', 'type'].forEach(dir =>
	app.use('/' + dir, express.static(path.join(root, dir)))
);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log('Con.ject running at http://localhost:' + port));
