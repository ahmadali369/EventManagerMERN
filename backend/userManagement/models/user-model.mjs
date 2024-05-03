import "dotenv/config";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

userSchema.methods.generateToken = async function () {
  try {
    return jwt.sign(
      {
        userId: this._id.toString(),
        email: this.email,
      },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: "1d",
      }
    );
  } catch (error) {
    console.error(error);
  }
};

export default mongoose.model("User", userSchema);
