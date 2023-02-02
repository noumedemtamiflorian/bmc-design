const express = require("express");
const db = require("./src/config/db");
const app = express();

app.use(express.json());

// Connexion à la base de données MongoDB Atlas
db();

// Démarrage du serveur
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Serveur démarré sur le port ${port}`));
