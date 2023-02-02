const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");

// Route pour créer un nouveau contact
router.post("/", (req, res) => {
    const newContact = new Contact({
        name: req.body.name,
        email: req.body.email,
        subject: req.body.subject,
        message: req.body.message,
    });

    newContact
        .save()
        .then((contact) => res.json(contact))
        .catch((err) => res.status(400).json(err));
});

// Route pour obtenir tous les contacts
router.get("/", (req, res) => {
    Contact.find()
        .sort({ date: -1 })
        .then((contacts) => res.json(contacts))
        .catch((err) => res.status(400).json(err));
});

// Route pour obtenir un contact spécifique
router.get("/:id", (req, res) => {
    Contact.findById(req.params.id)
        .then((contact) => res.json(contact))
        .catch((err) => res.status(400).json(err));
});

// Route pour mettre à jour un contact
router.put("/:id", (req, res) => {
    Contact.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then((contact) => res.json(contact))
        .catch((err) => res.status(400).json(err));
});

// Route pour supprimer un contact
router.delete("/:id", (req, res) => {
    Contact.findByIdAndRemove(req.params.id)
        .then(() => res.json({ success: true }))
        .catch((err) => res.status(400).json(err));
});

module.exports = router;
