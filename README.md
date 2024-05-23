Remotive Jobs Scraper
---------------------
This is a simple Node.js scraper built with Puppeteer to extract remote job listings from the Remotive API and store them in DynamoDB.

Setup Instructions :-
1. Clone this repository to your local machine.
2. Navigate to the project directory and install the required dependencies using npm.
3. Ensure you have AWS credentials configured on your system. You can set up your AWS credentials by following the AWS Documentation.
4. Run the scraper using Node.js.
   
Dependencies
------------
1. Puppeteer: Puppeteer is a Node library which provides a high-level API to control headless Chrome or Chromium over the DevTools Protocol. It is used here for web scraping.
2. AWS SDK: The AWS SDK for JavaScript is required to interact with DynamoDB. Make sure you have the necessary credentials configured.
