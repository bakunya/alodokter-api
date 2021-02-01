const axios = require("axios")
const cheerio = require("cheerio")
const {ROOT_URL} = require("../utils/options")

async function scrapeTrending(url) {
    try {
        const html = await axios.get(url)
        const $ = cheerio.load(html.data)
        const data = {
            date: $(".date-article").text().trim(),
            title: $("h1#post_title").text(),
            content: Array.from($("#postContent > *:not(div)")).map(elm => $(elm).text().replace(/\n/g, " ")).filter(e => e !== ""),
            img: JSON.parse(JSON.stringify($("#postContent img")[0].attribs))['src'],
            tag: Array.from($(".tag-label-container > *")).map(elm => ({
                app_link: $(elm).attr("href").split("/").pop(),
                tag: $(elm).attr("href").split("/").pop().replace("-", " "),
                source_link: ROOT_URL + $(elm).attr("href"),
            })),
            doctor: {
                name: JSON.parse(JSON.stringify($("sources-post")[0].attribs))['doctor-name'],
                sources: JSON.parse(JSON.stringify($("sources-post")[0].attribs))['sources']
            },
            souce: ROOT_URL,
        }
        return data
    } catch (err) {
        throw Error(err.message)
    }
}

module.exports = (url) => scrapeTrending(url)