const express = require('express');
const app = express();
const PORT = 8090;
const db = require('./queries');


app.get('/', (req, res) => res.send('Hello World'));
app.get('/properties', db.getProperties)

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
