const express = require('express');
const dotenv = require('dotenv');
const { CONFIGURATION } = require('./helpers/constants');
const logger = require('./helpers/logger');
const scrapeURL = require('./scraper');

dotenv.config();

const app = express();
const PORT = process.env.PORT || CONFIGURATION.PORT;

(async() => {
    logger.info("Scrapping requested")
    const data = await scrapeURL("https://www.zaubacorp.com/company-list")
    console.log({data})
})()

app.get('/', async (req, res) => {
  logger.info("Scrapping requested")
  console.log({data})
  res.send('Scraping process initiated.');
});

// /p-1-company.html
app.listen(PORT, (err) => {
    if(err) {
        logger.error("Encountered an error" + JSON.stringify(err))
    }
    logger.info(`Server Started at port ${PORT}`)
});
