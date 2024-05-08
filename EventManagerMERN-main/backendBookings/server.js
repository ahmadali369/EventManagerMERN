
// const express = require('express');
// const app = express();
// const bodyParser = require('body-parser');
// const mongodb = require('mongodb');

// const ticketRoutes = require('./routes/ticketRoutes');

// // Use routes
// app.use('/api', ticketRoutes);

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });


// // Import MongoClient from mongodb
// const { MongoClient } = mongodb;

// // MongoDB connection URL
// const url = 'mongodb+srv://nabiazeenatzia:nzz@cluster0.oqweyfu.mongodb.net//BookingsTicketProject';

// // Middleware
// router.use(bodyParser.json());

// // Connect to MongoDB
// MongoClient.connect(url)
//     .then(client => {
//         console.log('MongoDB Connected');
//         const db = client.db(); //  database object
        
//         //  route handler for getting all tickets
//         router.get('/', async (req, res) => {
//             try {
//                 const tickets = await db.collection('tickets').find().toArray();
//                 res.json({ tickets });
//             } catch (error) {
//                 console.error('Error fetching tickets:', error);
//                 res.status(500).json({ error: 'Internal server error' });
//             }
//         });

//         router.post('/', async (req, res) => {
//             try {
//                 const newTicket = req.body;
//                 const result = await db.collection('tickets').insertOne(newTicket);
//                 res.json({ message: 'Ticket created successfully', ticketId: result.insertedId });
//             } catch (error) {
//                 console.error('Error creating ticket:', error);
//                 res.status(500).json({ error: 'Internal server error' });
//             }
//         });

//         //  route handler for booking a ticket
//         router.post('/book', async (req, res) => {
//             try {
//                 const { eventId, ticketId, quantity } = req.body;
//                 // Logic to book tickets for the specified event and ticket type
//                 res.json({ message: `Successfully booked ${quantity} tickets for event ${eventId}` });
//             } catch (error) {
//                 console.error('Error booking ticket:', error);
//                 res.status(500).json({ error: 'Internal server error' });
//             }
//         });

//     })
//     .catch(err => {
//         console.error('Error connecting to MongoDB:', err);
//     });

// module.exports = router;

// import app from "./app.js";

// app.listen(process.env.PORT, () => {
//   console.log(`Server listening at port ${process.env.PORT}`);
// });

// export const dbConnection = () => {
//   mongoose
//     .connect(process.env.MONGO_URI, { dbName: "MERN_STACK_EVENT_MESSAGE" })
//     .then(() => {
//       console.log("Connected to database!");
//     })
//     .catch((err) => {
//       console.log("Some error occured while connecting to database:", err);
//     });
// };


// const Message = require('./models/eventModel')
// import app from "./app.js";
// const app = require('./app.js')

// const express = require('express');
// const app = express();


const bodyParser = require('body-parser');
const mongoose = require('mongoose');


const ticketRoutes = require('./routes/ticketRoutes.js');

// Middleware
app.use(bodyParser.json());

// Connect to MongoDB
// mongoose.connect('mongodb+srv://nabiazeenatzia:nzz@cluster0.oqweyfu.mongodb.net/BookingsTicketProject', { useNewUrlParser: true, useUnifiedTopology: true })
//mongoose.connect("mongodb+srv://nabiazeenatzia:nzz@cluster0.oqweyfu.mongodb.net/Event", { useNewUrlParser: true, useUnifiedTopology: true  })
mongoose.connect('mongodb+srv://nabiazeenatzia:nzz@cluster0.oqweyfu.mongodb.net/BookingsTicketProject', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB Connected');
    
    // Use routes
    app.use('/api', ticketRoutes);

    const PORT = process.env.PORT || 5173;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error('Error connecting to MongoDB:', err);
  });
  



