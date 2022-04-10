const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const arrayify = require('array-back');
const multer = require('multer');
const {
    MongoClient
} = require('mongodb');
const {
    ObjectId
} = require('mongodb');

//////////////////////
// Define Variables //
//////////////////////
const port = process.env.PORT || 4000;
let db = null;
const interests = ["Travel", "Dogs", "Cooking", "Surfing", "Politics", "Cats", "Fitness", "Reading", "Netflix", "Partying"];

//////////////////
// Static Files //
//////////////////
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

///////////////////////////
// Set Templating Engine //
///////////////////////////
app.set('view engine', 'ejs');

////////////////////////
// Define Main Routes //
////////////////////////

// De eerste route is de pagina waar de gebruiker op komt wanneer hij/zij als eerste de app opent
app.get('/', (req, res) => {
    // De database wordt leeggemaakt, de gebruiker moet voor het eerst zijn/haar profiel aanmaken dus de database mag nog geen profiel bevatten
    db.collection('profiles').deleteMany({});

    const title = "Match-A-Pet";
    res.render('index', {
        title
    });
})

// De pagina voor het aanmaken van het profiel
app.get('/makeprofile', (req, res) => {
    const title = "Make Profile";
    res.render('makeprofile', {
        title,
        interests
    });
})

// Met deze post route wordt het formulier dat door de gebruiker is ingevuld verstuurd naar de database
app.post('/makeprofile', async (req, res) => {
    // Alle onderdelen van het formulier worden opgehaald door middel van de BodyParser van express en samengevoegd in een variabele
    let profile = {
        name: req.body.name,
        age: req.body.age,
        country: req.body.country,
        bio: req.body.bio,
        interests: arrayify(req.body.interests),
        name_a: req.body.name_a,
        age_a: req.body.age_a,
        type_a: req.body.type_a,
        breed_a: req.body.breed_a,
        bio_a: req.body.bio_a
    };

    // Vervolgens wordt door middel van het inserten van deze variabele het profiel opgeslagen in de database
    await db.collection('profiles').insertOne(profile);

    const profiles = await db.collection('profiles').findOne();

    const title = "Succesfully Made Profile Page!";
    res.render('home', {
        title,
        profiles
    });
})

// De route voor de homepagina
app.get('/home', (req, res) => {
    const title = "Home";
    res.render('home', {
        title
    });
})

// De route voor de profielpagina
app.get('/profile', async (req, res) => {
    // Het eerder ingevulde profiel wordt nu uit de database gehaald zodat deze kan worden laten zien aan de gebruiker
    const profiles = await db.collection('profiles').findOne();

    const title = "Profile Page";
    res.render('profile', {
        title,
        profiles
    });
})

// De route voor de editpagina
app.get('/edit', async (req, res) => {
    // Het profiel wordt uit de database gehaald zodat deze ingevuld kan worden in de invoervelden, zodat de gebruiker deze niet allemaal opnieuw hoeft in te vullen
    const profiles = await db.collection('profiles').findOne();

    const title = "Profile Editor";
    res.render('edit', {
        title,
        profiles,
        interests
    });
})

// Met deze post route wordt het bewerkte profiel verstuurd naar de database
app.post('/edit', async (req, res) => {
    // Alle onderdelen van het formulier (met bewerkingen) worden opnieuw opgehaald door middel van de BodyParser van express en samengevoegd in een variabele
    let profile = {
        name: req.body.name,
        age: req.body.age,
        country: req.body.country,
        bio: req.body.bio,
        interests: arrayify(req.body.interests),
        name_a: req.body.name_a,
        age_a: req.body.age_a,
        type_a: req.body.type_a,
        breed_a: req.body.breed_a,
        bio_a: req.body.bio_a
    };

    // Het aangepaste profiel moet het oude profiel vervangen, dit wordt gedaan met de replaceOne functie    
    const query = {};
    await db.collection('profiles').replaceOne(query, profile);

    // Het aangepaste proifel wordt gezocht in de database zodat deze weer op de profielpagina laten zien kan worden
    const profiles = await db.collection('profiles').findOne();

    const title = "Succesfully Edited Profile Page!";
    res.render('profile', {
        title,
        profiles
    });
})


////////////////
// Error Page //
////////////////

// De route voor de error status 404 wordt aangemaakt, wanneer er een verkeerde route in de url wordt ingevuld wordt deze pagina laten zien
app.use((req, res, next) => {
    console.log("Error 404");
    const title = "Error 404";
    res.status(404).render('404', {
        title
    });
})

/////////////////////////
// Connect to database //
/////////////////////////

// Er wordt een connectie gemaakt met de database van MongoDB, de variabelen zoals DB_URI & NAME worden uit de .env file gehaald
// Bron: https://github.com/cmda-bt/be-course-21-22/blob/main/examples/mongo_example/server.js
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

//////////////////
// Start Server //
//////////////////

// De server wordt opgestart, hierbij wordt de port waarop deze wordt gehost gelogt in de console, en wordt er gecheckt of de database is geconnect, waarna de gebruiker ook hierover wordt ingelicht via de console
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);

    connectDB().then(() => console.log('We have a connection to Mongo!'));
})



// Ik wilde ook graag een foto upload-functie erin verwerken, maar ben hier uiteindelijk helaas niet uitgekomen... Het was me toch iets te moeilijk, ik heb nu dus gewoon een dummyfoto gebruikt bij de profielfoto,
// en bij het fotoupload knopje heb ik het wel voor elkaar gekregen dat je deze geuploade foto kan zien. Deze wordt dan uiteraard niet op de server opgeslagen en is daardoor ook niet zichtbaar op het uiteindelijke profiel
// Ik hoop dat desalniettemin mijn functie goed genoeg is!