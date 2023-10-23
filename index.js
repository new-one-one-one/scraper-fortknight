const express = require('express');
const dotenv = require('dotenv');
const { CONFIGURATION } = require('./helpers/constants');
const logger = require('./helpers/logger');

dotenv.config();

const app = express();
const PORT = process.env.PORT || CONFIGURATION.PORT;

app.get('/', async (req, res) => {
  logger.info("Scrapping requested")
  res.send('Scraping process initiated.');
});

app.listen(PORT, (err) => {
    if(err) {
        logger.error("Encountered an error" + JSON.stringify(err))
    }
    logger.info(`Server Started at port ${PORT}`)
});
