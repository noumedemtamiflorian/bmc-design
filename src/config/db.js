const mongoose = require("mongoose");
const dotenv = require("dotenv")
dotenv.config()

const DB_URI = process.env.DB_URI;
const DATABASE="bmc-design"

const connectDB = async () => {
  try {
    await mongoose.connect(DB_URI, {
      dbName : DATABASE,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    mongoose.set('strictQuery', false);
    console.log("MongoDB Connected...");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;