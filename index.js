const express = require('express');
const app = express();
const parser = require('body-parser');
const morgan = require('morgan');
const router = require('./routes/index');
const db = require('./db');
const PORT = process.env.PORT || 5000;

app.use(morgan('dev'));
app.use(parser.urlencoded({ extended: false }))
app.use(parser.json())
app.use(router);
app.use('/tasks', router);

app.listen(PORT, () => {
    console.log(`Server is started @PORT: ${PORT}`);
});

app.get('/', (req, res) => {
    return res.json('Turing app is live!!!');
}); 

module.exports = app;