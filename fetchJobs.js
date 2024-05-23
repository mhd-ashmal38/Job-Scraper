const puppeteer = require('puppeteer');

async function fetchJobs() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Navigate to the RSS feed URL
    await page.goto('https://remotive.io/api/remote-jobs');

    // Get the JSON content of the RSS feed
    const content = await page.evaluate(() => {
        return document.querySelector("pre").innerText;
    });

    await browser.close();

    return JSON.parse(content).jobs;
}

module.exports = fetchJobs;