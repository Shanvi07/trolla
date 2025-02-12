const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useUnifiedTopology: true,  // Keep only the necessary options
          });
          
        console.log("✅ MongoDB Connected Successfully");
    } catch (error) {
        console.error("MongoDB Connection Failed:", error);
        process.exit(1); // Stop server on failure
    }
};

module.exports = connectDB;

