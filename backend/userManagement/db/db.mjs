import "dotenv/config";
import mongoose from "mongoose";

const db = async () => {
  try {
    await mongoose.connect(process.env.DB_URI);
    console.log("Connected to Database");
  } catch (error) {
    console.log(error);
    process.exit(0);
  }
};

export default db;
