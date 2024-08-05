const express = require('express');
const app = express();

//configuring the env file only in development mode
if (process.env.NODE_ENV !== 'PRODUCTION')
    require("dotenv").config({ path: "config/config.env" })

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const user = require('./routes/user');

app.use('/api', user);

module.exports = app;