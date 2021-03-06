// Template for Puppeteer as an example
// Visits the website, and takes a screenshot of it saved in the project directory
// This template is made for root user

const puppeteer = require('puppeteer');

(async () => {
	const browser = await puppeteer.launch({args: ['--no-sandbox', '--disable-setuid-sandbox']});
	const page = await browser.newPage();
	await page.goto('https://example.com');
	await page.screenshot({path: 'example.png'});

	await browser.close();
})();
