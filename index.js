const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3001;
require('dotenv').config();
console.log(process.env.DATASOURCE);
const apiRouters = require('./router');
const cors = require('cors');

const public = path.resolve(__dirname, 'public');
app.use(express.static(public));

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json())

app.use('/api', cors(), apiRouters);

// send the user to index html page
app.get('/', (req, res) => {
    res.sendFile(public);
});

// last route, catches 404
app.use((req, res) => {
    res.sendStatus(404);
});

app.listen(port, () => console.log(`The magic happens in port ${port}`));