const express = require('express');
const axios = require('axios');
const logger = require('morgan');
const session = require('express-session');
const app = express();
const path = require('path');
const prayerRoutes = require('./routes/prayerRoutes');

require('dotenv').config();
require('./db/db');

const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, '../client/build')));
app.use('/prayer', prayerRoutes);

app.get('/', async (req, res) => {
  res.status(200).send('connected');
});

app.listen(PORT, () => {
  console.log(`Server listening at localhost:${PORT}!`);
});
