const express = require('express');
const dotenv = require('dotenv');
const { CONFIGURATION } = require('./helpers/constants');

dotenv.config();

const app = express();
const PORT = process.env.PORT || CONFIGURATION.PORT;

app.get('/', async (req, res) => {
  res.send('Scraping process initiated.');
});

app.listen(PORT, () => {
    console.log(`Server Started at port ${PORT}`)
});
