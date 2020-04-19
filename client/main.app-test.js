const puppeteer = require('puppeteer');

describe('main', () => {

    it('loads without errors', async function () {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto('http://localhost:3000');
      
        await browser.close();
    })
    
})