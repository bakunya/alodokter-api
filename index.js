const express = require("express")
const app = express()
const scrapeRoutes = require("./router/route-scrape")
const {slow, limiter} = require("./utils/limit-options")

    
app.get("/", slow, limiter, (req, res) => {
    res.send({
        date: new Date().toLocaleString(),
        status: "Server running"
    })
})

app.use(scrapeRoutes())


app.use((req, res, next) => {
    res.status(404)
    next(Error(`The page not found in path ${req.url} and method ${req.method}`))
})

app.use((error, req, res, next) => {
    status = res.status || 400
    res.status(500).json({
        message: error.message,
        stack: error.stack
    })
})

app.listen(3000, () => console.log("Server running in port 3000"))