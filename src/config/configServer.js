const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const path = require('path');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.engine('html', require('ejs').renderFile)
app.set('view engine', 'html');
app.use(express.static(path.join(__dirname, '../app/public')));
app.set('views', path.join(__dirname, '../app/views'));

require('../app/routes/home')(app);
require('../app/routes/login')(app);
require('../app/routes/agendamento')(app);
require('../app/routes/cadastrar')(app);

module.exports = app;