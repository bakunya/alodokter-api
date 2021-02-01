const scrapeController = require("../scrape-controller/card-controller")
const {ROOT_URL} = require("../utils/options")

async function keluargaController(req, res, next) {
    try {
        const count = req.params.count || 1
        const url = `${ROOT_URL}/keluarga/page/${count}`
        const data = await scrapeController(url)
        return res.json(data)
    } catch (err) {
        next(Error(err.message));
    }
}

module.exports = keluargaController