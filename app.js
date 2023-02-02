const express = require("express");

const app = express();

// Démarrage du serveur
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Serveur démarré sur le port ${port}`));