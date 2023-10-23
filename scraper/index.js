const puppeteer = require('puppeteer');
const logger = require('../helpers/logger');
const { SCRAPING_SITE } = require('../helpers/constants');

async function scrapeURL(url, type) {
  try {
    const {
        TIMEOUTS_IN_MILLISEC
    } = SCRAPING_SITE;
    logger.info(`Scrapping url = ${url}`)
  
    const browser = await puppeteer.launch({
      executablePath: process.env.BROWSER_EXE_FILE, 
      headless: process.env.RUN_SCRAPPING_IN_BACKGROUND,
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
        case SCRAPING_SITE.SCRAPING_DETAIL_TYPE.COMPANY_URLS : {
            result = await page.evaluate(() => {
                const tableRows = Array.from(document.querySelectorAll('table#table tbody tr'));
                const urls = tableRows.map((row) => {
                  const urlCell = row.querySelector('td:nth-child(2) a');
                  const url = urlCell.getAttribute('href');
                  return url;
                });
                return urls;
            });
            break;
        }

        case SCRAPING_SITE.SCRAPING_DETAIL_TYPE.COMPANY_WISE_INFO : {
            const tableSelector = 'table.table.table-striped';
            result = await page.evaluate((tableSelector) => {
                const table = document.querySelector(tableSelector);
                const rows = table.querySelectorAll('tr');
                const details = {};
                for (const row of rows) {
                    const cells = row.querySelectorAll('td');
                    if (cells.length === 2) {
                    const key = cells[0].textContent.trim();
                    const value = cells[1].textContent.trim();
                    details[key] = value;
                    }
                }
                return details;
            }, tableSelector);
        }
    }
    browser.close()
    return result;
  } catch (error) {
    logger.error(`Error scraping URL: ${url} - ${error}`);
  }
}

module.exports = scrapeURL;
