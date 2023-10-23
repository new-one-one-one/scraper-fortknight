const express = require('express');
const dotenv = require('dotenv');
const { CONFIGURATION, SCRAPING_SITE } = require('./helpers/constants');
const logger = require('./helpers/logger');
const scrapeURL = require('./scraper');

dotenv.config();

const app = express();
const PORT = process.env.PORT || CONFIGURATION.PORT;

(async() => {
    logger.info("Scrapping requested")
    const data = await scrapeURL("https://www.zaubacorp.com/company-list", SCRAPING_SITE.SCRAPING_DETAIL_TYPE.COMPANY_URLS)
    
    data.map(async(companyURL, ind) => {
        if (ind > 5) {
            return 
        }
        const dataCompany = await scrapeURL(companyURL , SCRAPING_SITE.SCRAPING_DETAIL_TYPE.COMPANY_WISE_INFO)
        console.log({dataCompany})
    })

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
