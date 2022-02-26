const express = require("express")

const app = express()
const PORT = 3007

app.get("/", (req, res) => {
    res.send('hello world!')
})

app.listen(PORT, () => {
    console.log(`Server listening on https://localhost:${PORT}`)
})
