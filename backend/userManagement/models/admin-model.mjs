import mongoose from "mongoose";
import jwt from "jsonwebtoken";

const adminSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

adminSchema.methods.generateToken = async function () {
  try {
    return jwt.sign(
      {
        userId: this._id.toString(),
        username: this.username,
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

export default mongoose.model("Admin", adminSchema);
