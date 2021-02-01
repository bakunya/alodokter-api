const scrapeController = require("../scrape-controller/card-controller")
const {ROOT_URL} = require("../utils/options")

async function searchController(req, res, next) {
    try {
        const key = req.query.key || ""
        const page = req.query.page || 1
        const url = `${ROOT_URL}/search?s=${key}&page=${page}`
        const data = await scrapeController(url)
        return res.json(data)
    } catch (err) {
        next(Error(err.message));
    }
}

module.exports = searchController