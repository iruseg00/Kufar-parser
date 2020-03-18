const search = require('./search');
const puppeteer = require('puppeteer');
const {logger} = require('../../logs/log');

var url = [
    'https://re.kufar.by/api/search/ads-search/v1/engine/v1/search/raw-paginated?cat=1010&typ=sell&sort=lst.d&size=200&cur=BYR&gts=o-minskaja-oblast',
    'https://re.kufar.by/api/search/ads-search/v1/engine/v1/search/raw-paginated?cat=1010&typ=sell&sort=lst.d&size=200&cur=BYR&gts=o-vitebskaja-oblast',
    'https://re.kufar.by/api/search/ads-search/v1/engine/v1/search/raw-paginated?cat=1010&typ=sell&sort=lst.d&size=200&cur=BYR&gts=o-brestskaja-oblast',
    'https://re.kufar.by/api/search/ads-search/v1/engine/v1/search/raw-paginated?cat=1010&typ=sell&sort=lst.d&size=200&cur=BYR&gts=o-gomelskaja-oblast',
    'https://re.kufar.by/api/search/ads-search/v1/engine/v1/search/raw-paginated?cat=1010&typ=sell&sort=lst.d&size=200&cur=BYR&gts=o-grodnenskaja-oblast',
    'https://re.kufar.by/api/search/ads-search/v1/engine/v1/search/raw-paginated?cat=1010&typ=sell&sort=lst.d&size=200&cur=BYN&gts=o-minsk',
    'https://re.kufar.by/api/search/ads-search/v1/engine/v1/search/raw-paginated?cat=1010&typ=sell&sort=lst.d&size=200&cur=BYR&rgn=4',
];

async function Kufar()
{
    try
    {
        let html ;
        const browser = await puppeteer.launch();
        for(var i = 0 ; i < 7; i++)
        {
          const page = await browser.newPage();
          await page.goto(url[i]);
          html = await page.content(); 
          search(html.toString()); 
          logger.info('KUFAR: URL[' + i + '] parsed SUCCESS');
        };
        await browser.close();
    }
    catch(error)
    {
        logger.error('KUFAR: error on Kufar.js, error: ' + error);
    }
}

module.exports = Kufar;