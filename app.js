const express = require('express');

const app = express();

const {  mongoConn } = require('./databases/configuration');

const conn = mongoConn()

const cors = require('cors');

const proyectos = require('./routes/proyecto');


//middlewares
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors());

app.use('/api/proyectos', proyectos);

module.exports = app;