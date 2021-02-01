const axios = require("axios");
const cherio = require("cheerio")
const {ROOT_URL} = require("../utils/options")

async function scrapeContent(url) {
    try {
        const response = await axios.get(url)
        const html = response.data;
        const $ = cherio.load(html)
        const dataRaw = $("card-post-index")
        const content = []
        for (const elm of dataRaw) {
            let objectData = {
                app_url: "/content" + elm.attribs["url-path"],
                img: elm.attribs["image-url"],
                category: elm.attribs["category"],
                label: elm.attribs["label"],
                title: elm.attribs["title"],
                desc: elm.attribs["short-description"],
                source_url: ROOT_URL + elm.attribs["url-path"],
            }
            content.push(objectData)
        }
        const paginate = {
            next: JSON.parse(JSON.stringify($("paginate-button")[0].attribs))['next-page'],
            prev: JSON.parse(JSON.stringify($("paginate-button")[0].attribs))['prev-page']
        }

        const data = {
            content: content.filter(con => con.category !== ""),
            paginate,
            source: ROOT_URL,
        }
        return data
    } catch (err) {
        throw Error(err.message)
    }
}

module.exports = (url) => scrapeContent(url)