const puppeteer = require('puppeteer');
const logger = require('../helpers/logger');
const { SCRAPING_SITE } = require('../helpers/constants');

const SCRAPE_TYPE = {
    URL: "URL", 
    
}
async function scrapeURL(url, type) {
  try {
    
    const {
        TIMEOUTS_IN_MILLISEC
    } = SCRAPING_SITE;
    logger.info(`Scrapping url = ${url}`)
  
    const browser = await puppeteer.launch({
      executablePath: process.env.BROWSER_EXE_FILE, 
      headless: false,
    });

    const page = await browser.newPage();
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36');
    
    /**
     * Here we are givig time for website to load the page
     */

    await page.goto(url);
    await page.waitForTimeout(TIMEOUTS_IN_MILLISEC.BASE_LOAD);
    let result;
    switch(type) {
        case "COMPANY_URLS_SCRAPPER" : {
            result = await page.evaluate(() => {
                const tableRows = Array.from(document.querySelectorAll('table#table tbody tr'));
            
                const urls = tableRows.map((row) => {
                  const urlCell = row.querySelector('td:nth-child(2) a');
                  const url = urlCell.getAttribute('href');
                  return { url };
                });
            
                return urls;
            });
            break;
        }
    }

    browser.close()
    return result;

  } catch (error) {
    logger.error(`Error scraping URL: ${url} - ${error}`);
  }
}

module.exports = scrapeURL;
