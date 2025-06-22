// app.js
const express = require('express');
const app = express();
app.use(express.json());

app.get('/ping', (req, res) => {
    res.json({ message: 'pong' });
});

app.post('/sumar', (req, res) => {
    const { a, b } = req.body;
    res.json({ resultado: a + b });
});

module.exports = app;
