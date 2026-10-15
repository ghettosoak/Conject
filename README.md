# Con.ject
A (finally) sexy update to translate.google.com.


## Running

    npm install
    ALTERVISTA_KEY=your-key npm start   # http://localhost:3000 (set PORT to change)

Synonyms come from Altervista's thesaurus API, proxied by the server so the
key never reaches the browser. Get a free key at http://thesaurus.altervista.org/.

The optional `/api/thesaurus` endpoint reads the openDE MySQL database
(`openDE_2015-02-17.sql`). Configure it with `DB_HOST`, `DB_USER`,
`DB_PASSWORD` and `DB_NAME`. The front end itself doesn't need it.
