const scrapeController = require("../scrape-controller/card-controller")
const {ROOT_URL} = require("../utils/options")

async function hidupSehatController(req, res, next) {
    try {
        const count = req.params.count || 1
        const url = `${ROOT_URL}/hidup-sehat/page/${count}`
        const data = await scrapeController(url)
        return res.json(data)
    } catch (err) {
        next(Error(err.message));  
    }
}

module.exports = hidupSehatController