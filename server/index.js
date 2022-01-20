require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const {seed} = require('./seed.js')
const {SERVER_PORT} = process.env;
const {getGif} = require('./controller')
const {user} = require('./controller')

app.use(cors());
app.use(express.json());

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../client/index.html'));
});

app.use(express.static('client')) //linking public folder

app.post('/seed', seed);

// FEATURES
app.get('/api/gif', getGif);

app.post('/user', user);

app.listen(SERVER_PORT, () => {
    console.log(`Listening on ${SERVER_PORT}`)
});
