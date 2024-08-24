const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// Permitir CORS
app.use(cors());

// Datos de ejemplo (simulando base de datos)
const alarmas = require('./data');

// Ruta API para obtener las alarmas
app.get('/api/alarmas', (req, res) => {
    res.json(alarmas);
});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
