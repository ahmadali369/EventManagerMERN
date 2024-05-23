import mongoose from "mongoose";

const { Schema } = mongoose;

const venderSchema = new Schema({
  name: {
    type: String,
  },
  discription: {
    type: String,
  },
  venderName: {
    type: String,
  },
}, { timestamps: true });

const VenderService = mongoose.model('VenderService', venderSchema);

export default VenderService;