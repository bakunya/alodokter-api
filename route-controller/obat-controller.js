const scrapeController = require("../scrape-controller/A-Z-controller")
const {ROOT_URL} = require("../utils/options")

async function obatController(req, res, next) {
    try {
        const url = `${ROOT_URL}/obat-a-z`
        const data = await scrapeController(url)
        return res.json(data)
    } catch (err) {
        next(Error(err.message));
    }
}

module.exports = obatController