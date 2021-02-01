const express = require("express")
const controller = require("../route-controller/index")
const {slow, limiter} = require("../utils/limit-options")

function scrapeRoutes() {
    const router = express.Router()

    router.get("/trending/page/:count", slow, limiter, controller.rootController)

    router.get("/content/:url", slow, limiter, controller.contentController)

    router.get("/penyakit", slow, limiter, controller.penyakitController)

    router.get("/obat", slow, limiter, controller.obatController)

    router.get("/hidup-sehat/page/:count", slow, limiter, controller.hidupSehatController)

    router.get("/keluarga/page/:count", slow, limiter, controller.keluargaController)

    router.get("/kesehatan/page/:count", slow, limiter, controller.kesehatanController)

    router.get("/search", slow, limiter, controller.searchController)

    return router
}

module.exports = scrapeRoutes