const CONFIGURATION = {
    PORT : 3000,
    LOG_FOLDER_NAME: 'logs'
}

const SCRAPING_SITE = {
    TIMEOUTS_IN_MILLISEC: {
        BASE_LOAD: 5000,
        NAVIGATION: 7000
    },

    SCRAPING_DETAIL_TYPE: {
        COMPANY_URLS: "COMPANY_URLS",
        COMPANY_WISE_INFO: "COMPANY_WISE_INFO"
    }
}

module.exports= {
    CONFIGURATION,
    SCRAPING_SITE
}