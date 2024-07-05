const express = require('express');
const axios = require('axios');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS
app.use(cors());

// Read and parse jokes.json
const jokesPath = path.join(__dirname, 'data', 'jokes.json');
const jokes = JSON.parse(fs.readFileSync(jokesPath, 'utf-8'));

// Read and parse images.json
const imagesPath = path.join(__dirname, 'data', 'images.json');
const images = JSON.parse(fs.readFileSync(imagesPath, 'utf-8'));

// Random joke endpoint
app.get('/api/jokes/random', (req, res) => {
    const randomIndex = Math.floor(Math.random() * jokes.length);
    const randomJoke = jokes[randomIndex];
    res.json(randomJoke);
});

// Random image endpoint
app.get('/api/images/random', (req, res) => {
    const randomIndex = Math.floor(Math.random() * images.length);
    const randomImage = images[randomIndex];
    res.json(randomImage);
});

// Random joke and image endpoint
app.get('/api/jokes-images/random', (req, res) => {
    const randomJokeIndex = Math.floor(Math.random() * jokes.length);
    const randomImageIndex = Math.floor(Math.random() * images.length);

    const randomJoke = jokes[randomJokeIndex];
    const randomImage = images[randomImageIndex];

    res.json({
        joke: randomJoke,
        imageUrl: randomImage.imageUrl
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
