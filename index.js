const express = require('express');
const app = express();
const path = require('path');
const parser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const router = require('./routes/index');
const PORT = process.env.PORT || 5000;

app.use(morgan('dev'));
app.use(cors());
app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());
app.use('/', express.static(path.join(__dirname, './turingapp-ui/build/')));
// app.use(express.urlencoded({ extended: true }))
// app.use(express.json())

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE", "OPTIONS");
    next();
  });

app.use('/tasks', router);

app.get('/', (req, res) => {
    // return res.json('Turing app is live!!!');
    console.log('dirname', __dirname);
    // return res.sendFile(path.join(__dirname, "/turingapp-ui/build/index"));
    return res.sendFile('index.html', {root: __dirname + "/turingapp-ui/build/"});
}); 

app.listen(PORT, () => {
    console.log(`Server is started @PORT: ${PORT}`);
});

module.exports = app;