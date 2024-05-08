// import mongoose from "mongoose";

// export const dbConnection = () => {
//   mongoose
//     .connect(process.env.MONGO_URI, { 'mongodb+srv://nabiazeenatzia:nzz@cluster0.oqweyfu.mongodb.net/Event' })
//     .then(() => {
//       console.log("Connected to database!");
//     })
//     .catch((err) => {
//       console.log("Some error occured while connecting to database:", err);
//     });
// };
// const mongoose = require('mongoose');

// const connectDB = async () => {

// const mongoose = require('mongoose')
//   module.exports = dbConnection = () => {
//     try {
//          mongoose.connect('mongodb+srv://nabiazeenatzia:nzz@cluster0.oqweyfu.mongodb.net/Event', {
//           // useNewUrlParser: true,
//           // useUnifiedTopology: true,
//           // useCreateIndex: true, // To avoid deprecation warning
//           // useFindAndModify: false // To avoid deprecation warning
//         });
//         console.log('MongoDB Connected');
//     } catch (error) {
//         console.error('MongoDB Connection Error:', error.message);
//         process.exit(1); // Failure
//     }
// };
// export default mongoose;
const mongoose = require('mongoose')

 module.exports = dbConnection = () => {
  mongoose
    .connect("mongodb+srv://nabiazeenatzia:nzz@cluster0.oqweyfu.mongodb.net/Event", { useNewUrlParser: true, useUnifiedTopology: true  })
    .then(() => {
      console.log("Connected to database!");
    })
    .catch((err) => {
      console.log("Some error occured while connecting to database:", err);
    });
};
