const express = require('express');
const cors = require('cors');
const romanNumeralRoute = require('./routes/romannumeral');

const app = express();
app.use(cors());

require('dotenv').config();

app.use('/romannumeral', romanNumeralRoute);

app.listen(process.env.PORT, () => {
    console.log("Listening on port: ", process.env.PORT)
})