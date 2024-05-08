const express = require('express');
const router = express.Router();
const Ticket = require('../models/ticketModel'); // Import your Mongoose model
const ticketController = require('../controllers/ticketController'); // Import ticketController module

// Define routes
router.get('/tickets', ticketController.getAllTickets);
router.get('/tickets/:id', ticketController.getTicketById);
router.post('/tickets', ticketController.createTicket);
router.put('/tickets/:id', ticketController.updateTicket);
router.delete('/tickets/:id', ticketController.deleteTicket);

// Route handler for getting all tickets
router.get('/', async (req, res) => {
    try {
        const tickets = await Ticket.find();
        res.json({ tickets });
    } catch (error) {
        console.error('Error fetching tickets:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Route handler for creating a new ticket
router.post('/', async (req, res) => {
    try {
        const newTicket = req.body;
        const ticket = new Ticket(newTicket);
        await ticket.save();
        res.json({ message: 'Ticket created successfully', ticket });
    } catch (error) {
        console.error('Error creating ticket:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Route handler for booking a ticket
router.post('/book', async (req, res) => {
    try {
        const { eventId, ticketId, quantity } = req.body;
        // Logic to book tickets for the specified event and ticket type
        res.json({ message: `Successfully booked ${quantity} tickets for event ${eventId}` });
    } catch (error) {
        console.error('Error booking ticket:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;



















// // MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
// //     .then(client => {
// //         console.log('Connected to MongoDB');
// //         const db = client.db(); // database object
        
// //     })
// //     .catch(err => {
// //         console.error('Error connecting to MongoDB:', err);
// //     });

// // // route handler for getting all tickets
// // router.get('/error', async (req, res) => {
// //     try {
// //         const tickets = await db.collection('tickets').find().toArray();
// //         res.json({ tickets });
// //     } catch (error) {
// //         console.error('Error fetching tickets:', error);
// //         res.status(500).json({ error: 'Internal server error' });
// //     }
// // });

// // //  route handler for creating a new ticket
// // router.post('/create', async (req, res) => {
// //     try {
// //         const newTicket = req.body;
// //         const result = await db.collection('tickets').insertOne(newTicket);
// //         res.json({ message: 'Ticket created successfully', ticketId: result.insertedId });
// //     } catch (error) {
// //         console.error('Error creating ticket:', error);
// //         res.status(500).json({ error: 'Internal server error' });
// //     }
// // });

// // //  route handler for booking a ticket
// // router.post('/book', async (req, res) => {
// //     try {
// //         const { eventId, ticketId, quantity } = req.body;
// //         // Logic to book tickets for the specified event and ticket type
// //         res.json({ message: `Successfully booked ${quantity} tickets for event ${eventId}` });
// //     } catch (error) {
// //         console.error('Error booking ticket:', error);
// //         res.status(500).json({ error: 'Internal server error' });
// //     }
// // });

// // const ticketRouter = require('./routes/ticketRoute');

// // const app = express();

// // // Mount ticketRouter on '/tickets' path
// // app.use('/tickets', ticketRouter);
// //   // Add more route handlers as needed for ticket booking management  
// // module.exports = router;
