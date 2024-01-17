const express = require('express');
const bodyParser = require('body-parser');
const consign = require('consign');

const app = express();
const path = require('path');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.engine('html', require('ejs').renderFile)
app.set('view engine', 'html');
app.use(express.static(path.join(__dirname, '../app/public')));
app.set('views', path.join(__dirname, '../app/views'));

consign()
    .include('app/routes')
    .then('app/models')
    .then('app/controllers')
    .into(app);

module.exports = app;