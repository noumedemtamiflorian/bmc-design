const express = require("express");
const router = express.Router();
const Devis = require("../models/Devis");

// Route pour créer un nouveau devis
router.post("/", (req, res) => {
    const newDevis = new Devis({
        name: req.body.name,
        email: req.body.email,
        need: req.body.need,
        work_for_need: req.body.work_for_need,
        startDate: req.body.startDate,
        amount: req.body.amount,
        message: req.body.message,
    });

    newDevis
        .save()
        .then((devis) => res.json(devis))
        .catch((err) => res.status(400).json(err));
});

// Route pour obtenir tous les devis
router.get("/", (req, res) => {
    Devis.find()
        .sort({ date: -1 })
        .then((devis) => res.json(devis))
        .catch((err) => res.status(400).json(err));
});

// Route pour obtenir un seul devis
router.get("/:id", (req, res) => {
    Devis.findById(req.params.id)
        .then((devis) => res.json(devis))
        .catch((err) => res.status(400).json(err));
});

// Route pour mettre à jour un devis
router.put("/:id", (req, res) => {
    Devis.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then((devis) => res.json(devis))
        .catch((err) => res.status(400).json(err));
});

// Route pour supprimer un devis
router.delete("/:id", (req, res) => {
    Devis.findByIdAndRemove(req.params.id)
        .then(() => res.json({ success: true }))
        .catch((err) => res.status(400).json(err));
});

module.exports = router;
