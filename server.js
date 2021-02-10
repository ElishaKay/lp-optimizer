const mongoose = require('mongoose')
require('dotenv').config()
const path = require('path')
const landingPagesRoutes = require('./routes/landingPages');

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

app.use('/', landingPagesRoutes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})