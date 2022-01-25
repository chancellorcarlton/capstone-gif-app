require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const {seed} = require('./seed.js')
const {SERVER_PORT} = process.env;
const {getGif, user, login, remove} = require('./controller');

app.use(cors());
app.use(express.json());

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../client/index.html'));
});

app.use(express.static('client'))
app.post('/seed', seed);

app.get('/api/gif', getGif);
app.post('/users', user);
app.post('/login', login);
// app.delete('/remove', remove);

const port = process.env.PORT || SERVER_PORT;

app.listen(port, () => {console.log(`Listening on ${port}`)});
