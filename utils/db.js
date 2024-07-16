const mongoose = require("mongoose");
const URL = process.env.MONGO_DB;
const connectDb = async () => {
    try {
        await mongoose.connect(URL);
        console.log("Connection successful to DB")

    } catch (error) {
        console.error("Database connection failed");
        process.exit(0);
    }
}

module.exports = connectDb