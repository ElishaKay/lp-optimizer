const mongoose = require('mongoose')
const morgan = require('morgan')
const bodyParser = require("body-parser");

require('dotenv').config()
const path = require('path')
const landingPagesRoutes = require('./routes/landingPages');
const analyticsRoutes = require('./routes/analytics');


mongoose
    .connect(process.env.MONGO_DEV, { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false, useUnifiedTopology: true })
    .then(() => true)
    .catch(err => {
        console.log(err);
    });

//views
const express = require('express')
const app = express()
const port = 3000

app.use(morgan('dev'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use('/', landingPagesRoutes);
app.use('/analytics', analyticsRoutes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})