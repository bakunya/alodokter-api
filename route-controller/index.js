const rootController = require("../route-controller/root-controller")
const contentController = require("../route-controller/content-controller")
const penyakitController = require("../route-controller/penyakit-controller")
const obatController = require("../route-controller/obat-controller")
const hidupSehatController = require("../route-controller/hidupsehat-controller")
const keluargaController = require("../route-controller/keluarga-controller")
const kesehatanController = require("../route-controller/kesehatan-controller")
const searchController = require("../route-controller/search-controller")

module.exports = {
    rootController,
    contentController,
    searchController,
    kesehatanController,
    hidupSehatController,
    obatController,
    keluargaController,
    penyakitController
}