// import app from "./app.js";
// conimport { express } from 'express';
// const app = require('./app.js')
const express = require ('express')
const app = express();
// app.listen(process.env.PORT, () => {
//   console.log(`Server listening at port ${process.env.PORT}`);
// });
const port = process.env.PORT || 5174; // Assign the port

app.listen(port, () => {
    console.log(`Server listening at port ${port}`); // Print the port
});
