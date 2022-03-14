const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const arrayify = require('array-back');

const port = 4000;

const {MongoClient} = require('mongodb');
const {ObjectId} = require('mongodb');
let db = null;

const interests = ["Travel", "Dogs", "Cooking", "Surfing", "Politics", "Cats", "Fitness", "Reading", "Netflix", "Partying"];

//Static Files
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//Set Engine
app.set('view engine', 'ejs');

//Main Routes
app.get('/', (req, res) => {
    const title = "Home";
    res.render('home', {title});
})

app.get('/profile', async (req, res) => {
    const query = {_id: ObjectId("622f16832581971024e7ad12")};
    const profiles = await db.collection('profiles').findOne(query);

    const title = "Profile Page";
    res.render('profile', {title, profiles});
})

app.get('/edit', (req, res) => {
    const title = "Profile Editor";
    res.render('edit', {title, interests});
})

app.post('/edit', async (req, res) => {
    let profile = {
        name: req.body.name,
        age: req.body.age,
        bio: req.body.bio,
        interests: arrayify(req.body.interests),
        name_a: req.body.name_a,
        age_a: req.body.age_a,
        type_a: req.body.type_a,
        breed_a: req.body.breed_a,
        bio_a: req.body.bio_a
    };

    await db.collection('profiles').insertOne(profile);

    const query = { name: "Huub"};
    const profiles = await db.collection('profiles').findOne(query);

    const title = "Succesfully Edited Profile Page!";
    res.render('profile', {title, profiles});
})

// Error Page
app.use((req, res, next) => {
    res.status(404).send("<h1>Error: Page Not Found</h1>");
})

//Connect to database
async function connectDB() {
    const uri = process.env.DB_URI;
    const client = new MongoClient(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    try {
        await client.connect();
        db = client.db(process.env.DB_NAME);
    } catch (error) {
        throw error;
    }
}

//Start Server
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);

    connectDB().then(() => console.log('We have a connection to Mongo!'));
})