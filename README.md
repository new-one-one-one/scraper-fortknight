# Scraping Knight with Puppeteer, Logging with Winston, and Express.js

This project provides a structured example for web scraping using Puppeteer, logging with Winston, and setting up an Express.js server. It also demonstrates how to create a dynamic directory structure for logs, organized by year, month, and date.

## Project Structure

The project directory structure is organized as follows:

```
- scraper-fortknight
  - logs
    - year
      - month
        - date
          - error.log
          - info.log
          - success.log
          - warning.log
  - server.js
  - helpers
    - scraper.js
    - logger.js
  - .env.txt
```

- **scraper-fortknight**: Holds the source code files for the Scrapping Knight

- **logs**: Contains log files organized by year, month, and date.

- **helpers**: Contains web scraper, and the generic logger.

- **.env**: Configuration file for managing environment variables which you have to create utilizing `.env.txt`.

## How to Use

1. Set up your project by running `npm install` to install the required packages.

2. Create and configure environment variables in the `.env` file utilizing the contents of `.env.txt`. For logging, set the `LOG_DIR` to the directory where log files will be stored. Also you can configure `PORT`

3. Create a web scraper by modifying `scraper.js` with your specific scraping logic.

4. Start the Express server by running `node index.js`.

5. Access the web scraper by visiting `http://localhost:{PORT}/` in your web browser.

## Logging

The project uses Winston for logging. Log files are organized by year, month, and date. You can find log files in the `logs` directory, structured as described above.

## Error Handling

Error handling is integrated into the project, and errors that occur during web scraping are logged using Winston.

## Dependencies

- Puppeteer: For web scraping
- Winston: For logging
- Express.js: For setting up the web server
- dotenv: For managing environment variables

## License

This project is licensed under the [MIT License](LICENSE).

Feel free to clone this repository to release my Scrapping  Knight to crawl website.