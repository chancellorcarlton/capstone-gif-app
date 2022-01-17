const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../client/index.html'));
});

app.use(express.static('client')) //linking public folder

app.use(cors());
app.use(express.json());

const ctrl = require('./controller')





const port = process.env.PORT || 4321;

app.listen(port, () => {
    console.log(`Listening on ${port}`)
});
