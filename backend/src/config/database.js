import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

console.log("Using MONGO_URI:", process.env.MONGO_URI); // Debug line

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI); // <-- no extra options
    console.log(`MongoDB connected: ${connection.connection.host}`);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1);
  }
};

export default connectDB;
