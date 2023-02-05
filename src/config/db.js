const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const DB_URI = process.env.DB_URI;
const DATABASE = process.env.DATABASE;

const connectDB = async () => {
    try {
        await mongoose.set("strictQuery", false);
        await mongoose.connect(DB_URI, {
            dbName: DATABASE,
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB Connected...");
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
