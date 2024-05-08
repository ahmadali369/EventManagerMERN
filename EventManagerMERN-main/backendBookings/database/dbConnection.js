// // import mongoose from "mongoose";
// // import { mongoose } from 'mongoose';
// const mongoose = require('mongoose')

//  module.exports = dbConnection = () => {
//   mongoose
//     .connect("mongodb+srv://nabiazeenatzia:nzz@cluster0.oqweyfu.mongodb.net/Event", { useNewUrlParser: true, useUnifiedTopology: true  })
//     .then(() => {
//       console.log("Connected to database!");
//     })
//     .catch((err) => {
//       console.log("Some error occured while connecting to database:", err);
//     });
// };





const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://nabiazeenatzia:nzz@cluster0.oqweyfu.mongodb.net/BookingsTicketProject', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('MongoDB Connected');
    } catch (error) {
        console.error('MongoDB Connection Error:', error.message);
        process.exit(1); // Failure
    }
}