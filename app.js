const express = require("express");
const db = require("./src/config/db");
const contact = require("./src/routes/contact");
const devis = require("./src/routes/devis");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

const app = express();
app.use(express.json());

// Connexion à la base de données MongoDB Atlas
db();

// Configuration du header Access-Control-Allow-Origin et Access-Control-Allow-Headers, Access-Control-Allow-Methods sur le serveur ExpressJS
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE, PATCH, OPTIONS"
    );
    next();
});

// Utilisation des routes pour les contacts
app.use("/api/contact", contact);

// Utilisation des routes pour les devis
app.use("/api/devis", devis);

// Utilisation des routes pour la documentation de l'API avec swagger enn mode developement
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Démarrage du serveur
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Serveur démarré sur le port ${port}`));
