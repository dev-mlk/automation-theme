const express = require("express")
const path = require("path")

const app = express()
const PORT = 3007

// app.get("/", (req, res) => {
//     res.render('index')
// })

app.get("/", (req, res) => {
    res.sendFile("index.html", {
        root: path.join(__dirname, "public")
    })
})
// app.get("/service", (req, res) => {
//     res.render('services')
// })

app.get("/services", (req, res) => {
    res.sendFile("services.html", {
        root: path.join(__dirname, "public")
    })
})

app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`)
})
