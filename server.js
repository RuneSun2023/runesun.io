// Forudsætter Node.js og Express.js er installeret
const express = require('express');
const app = express();

app.use(express.static('src'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/src/index.html');
});

app.listen(3000, () => {
    console.log('Serveren kører på http://localhost:3000');
});

