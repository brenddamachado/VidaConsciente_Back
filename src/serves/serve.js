const express = require('express');
const cors = require('cors');
const localRoutes = require('../routes/local.router.js');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to the Testing and Treatment Locations API!');
});

app.use('/api/locations', localRoutes);

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});