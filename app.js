const express = require('express')
const app = express()
const port = 4000

const profiles = [
    {
        id: 1,
        name: "Hans",
        age: "27",
        bio: "Just an adventurous, spontaneous guy looking for an animal-loving match!",
        interests: ["Travel", "Dogs", "Cooking", "Surfing", "Politics"]
    }
];

//Static Files
app.use(express.static('public'))

//Set Engine
app.set('view engine', 'ejs')

//Main Routes
app.get('/',  (req, res) => {
    const title  = "Home";
    res.render('home', {title});
})

app.get('/profile',  (req, res) => {
    const title  = "Profile Page";
    res.render('profile', {title, id: 1,
        name: "Hans",
        age: "27",
        bio: "Just an adventurous, spontaneous guy looking for an animal-loving match!",
        interests: ["Travel", "Dogs", "Cooking", "Surfing", "Politics"]});
})

app.get('/edit',  (req, res) => {
    const title  = "Profile Editor";
    res.render('edit', {title});
})

// Error Page
app.use((req, res, next) => {
    res.status(404).send(
        "<h1>Error: Page Not Found</h1>");
})

//Start Server
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})