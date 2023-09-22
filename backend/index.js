'use strict';
const express = require('express');
const persons = require('./routers/external');
const logger = require('./middlewares/logger');

const app = express();
const PORT = process.env.PORT || 3002;
const HOST = process.env.HOST || '0.0.0.0';

// MIDDLEWARES:
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger);

// ROUTERS:
app.use('/api', persons);

app.get('/version', (req, res) => {
    return res.status(200).send('version: 1.0.0, date:' + Date.now());
});

app.listen(PORT, HOST, () => {
    console.log(`Server is up and running on http://${HOST}:${PORT}`);
});
