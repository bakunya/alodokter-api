const scrapeController = require("../scrape-controller/content-controller")
const {ROOT_URL} = require("../utils/options")

async function contentController(req, res, next) {
    try {
        const url = `${ROOT_URL}/${req.params.url}`
        const data = await scrapeController(url)
        return res.json(data)
    } catch (err) {
        next(Error(err.message))
    }
}

module.exports = contentController