const express = require('express');
const app = express();
const PORT = 8090;
const db = require('./queries');
const bodyParser = require('body-parser');
const cors = require('cors');

// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     next();
// });

app.use(cors());

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

app.get('/', (req, res) => res.send('Hello World'));
app.post('/properties', db.createProperty);
app.get('/properties', db.getProperties);
app.get('/persons', db.getPersons);
app.post('/persons', db.createPerson);
app.get('/employees', db.getEmployees);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
