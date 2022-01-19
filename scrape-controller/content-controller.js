const axios = require("axios")
const cheerio = require("cheerio")
const { ROOT_URL } = require("../utils/options")

async function scrapeTrending(url) {
    try {
        const html = await axios.get(url)
        const $ = cheerio.load(html.data)
        const data = {
            date: $(".date-article").text().trim(),
            title: $("h1#post_title").text() != "" ? $("h1#post_title").text() : $(".title-tag-container").text(),
            content: getContent($),
            img: getImg($),
            tag: getTag($),
            doctor: {
                name: JSON.parse(JSON.stringify($("sources-post")[0].attribs))['doctor-name'],
                sources: JSON.parse(JSON.stringify($("sources-post")[0].attribs))['sources']
            },
            souce: ROOT_URL,
        }
        // var debugimg = $(".post-content img").attr("src");
        // console.log(debugimg);
        // console.log($().find('img').attr('src'));
        return data
    } catch (err) {
        throw Error(err.message)
    }
}


function getTag($) {
    return Array.from($(".tag-label-container > *")).map(elm => ({
        app_link: $(elm).attr("href").split("/").pop(),
        tag: $(elm).attr("href").split("/").pop().replace("-", " "),
        source_link: ROOT_URL + $(elm).attr("href"),
    }))
}

function getImg($) {
    let a = $("#postContent > *:not(div)").length
    if (a.length > 0) {
        return ("#postContent img").attr("src")
    }
    else {
        return $(".post-content img").attr("src")
    }
    return "no img"
    // return $("#postContent img").attr("src") != "" ? $("#postContent img").attr("src") : $(".post-content img").attr("src")
}

function getContent($) {
    let contentType1 = "#postContent > *:not(div)"
    let contentType2 = ".post-content > *:not(div)"
    return contentLoad($, contentType1) != "" ? contentLoad($, contentType1) : contentLoad($, contentType2)
}

function contentLoad($, parameter) {
    return Array.from($(parameter)).map(elm => $(elm).text().replace(/\n/g, " ")).filter(e => e !== "")
}

module.exports = (url) => scrapeTrending(url)