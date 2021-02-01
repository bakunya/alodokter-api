const axios = require("axios");
const cherio = require("cheerio");
const {ROOT_URL} = require("../utils/options")

async function scrapeContent(url) {
    try {
        const response = await axios(url)
        const html = response.data;
        const $ = cherio.load(html)
        const data = JSON.parse($("search-a-z-2")[0].attribs['search-results']).map(val => ({
            title: val.post_title,
            permalink: val.permalink,
            source_url: `${ROOT_URL}/${val.permalink}`
        }))
        return {
            data,
            source: ROOT_URL
        }
    } catch (err) {
        throw Error(err.message);
    }
}


module.exports = (url) => scrapeContent(url)