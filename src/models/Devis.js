const mongoose = require("mongoose");

const DevisSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    need: {
        type: String,
        required: true,
    },
    work_for_need: {
        type: String,
        required: true,
    },
    startDate: {
        type: String,
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    message: {
        type: String,
    },
});

module.exports = mongoose.model("devis", DevisSchema);
