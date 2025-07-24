const express = require('express');
const cors = require('cors');
const romanNumeralRoute = require('./routes/romannumeral');
require('./tracing');
const promClient = require('prom-client');

const app = express();
app.use(cors());

require('dotenv').config();

// Collect default metrics
promClient.collectDefaultMetrics();

// Expose /metrics endpoint
app.get('/metrics', async (req, res) => {
  res.set('Content-Type', promClient.register.contentType);
  res.end(await promClient.register.metrics());
});

app.use('/romannumeral', romanNumeralRoute);

app.listen(process.env.PORT, () => {
    console.log("Listening on port: ", process.env.PORT)
})

module.exports = app;