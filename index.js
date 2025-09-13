const express = require('express');
const app = express();
const port = 3000;

// Ruta principal de bienvenida
app.get('/', (req, res) => {
    res.send(`
        <h1>¡Bienvenido a la API de Conversiones!</h1>
        <p>Usa las siguientes rutas para realizar conversiones:</p>
        <ul>
            <li><a href="/convert/celsius-to-fahrenheit/25">Celsius → Fahrenheit</a></li>
            <li><a href="/convert/fahrenheit-to-celsius/77">Fahrenheit → Celsius</a></li>
            <li><a href="/convert/km-to-miles/10">Kilómetros → Millas</a></li>
        </ul>
    `);
});

// Celsius → Fahrenheit
app.get('/convert/celsius-to-fahrenheit/:value', (req, res) => {
    const celsius = parseFloat(req.params.value);
    const fahrenheit = (celsius * 9/5) + 32;
    res.json({ celsius, fahrenheit });
});

// Fahrenheit → Celsius
app.get('/convert/fahrenheit-to-celsius/:value', (req, res) => {
    const fahrenheit = parseFloat(req.params.value);
    const celsius = (fahrenheit - 32) * 5/9;
    res.json({ fahrenheit, celsius });
});

// Kilómetros → Millas
app.get('/convert/km-to-miles/:value', (req, res) => {
    const km = parseFloat(req.params.value);
    const miles = km * 0.621371;
    res.json({ km, miles });
});

// Servidor escuchando
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
