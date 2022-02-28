const express = require('express')
const app = express()
const port = 8000

app.use(express.static('public'))

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

app.get('/', onhome)
app.get('/profile', onprofile)

function onhome(req, res) {
    res.send("<h1>Welkom op de homepagina</h1>")
}

function onprofile(req, res) {
    res.send("<h1>Welkom op de profielpagina</h1>")
}

app.use((req, res, next) => {
    res.status(404).send(
        "<h1>Error: Page Not Found</h1>")
})