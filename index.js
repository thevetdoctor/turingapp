const express = require('express');
const app = express();
const parser = require('body-parser');
const morgan = require('morgan');
const router = require('./routes/index');
const db = require('./db');

app.use(morgan('dev'));
app.use(parser.urlencoded({ extended: false }))
app.use(parser.json())
app.use(router);
app.use('/tasks', router);

app.listen(3000, () => {
    console.log('Server is started');
});

app.get('/', (req, res) => {
    res.json('Turing app is live!!!');
});

module.exports = app;