// // const mongoose = require('mongoose');

// // const ticketSchema = new mongoose.Schema({
// //   eventId: {
// //     type: mongoose.Schema.Types.ObjectId,
// //     ref: 'Event',
// //     required: true
// //   },
// //   ticketType: {
// //     type: String,
// //     enum: ['Silver', 'Gold', 'VIP','Basic'],
// //     required: true
// //   },
// //   price: {
// //     type: Number,
// //     required: true
// //   },
// //   availableQuantity: {
// //     type: Number,
// //     required: true
// //   }
// // });

// // const Ticket = mongoose.model('Ticket', ticketSchema);

// // module.exports = Ticket;


// // const mongoose = require('mongoose');

// // // Define ticket schema
// // const ticketSchema = new mongoose.Schema({
  
// //   eventName: { type: String, required: true },
// //   description: { type: String, required: true },
// //   eventDate: { type: Date, required: true },
// //   ticketPrice: { type: Number, required: true },
// //   eventLocation: { type: String, required: true},
// // });

// // // Create Ticket model from schema
// // const Ticket = mongoose.model('Ticket', ticketSchema);

// // module.exports = Ticket;



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

// Define ticket schema
const ticketSchema = new mongoose.Schema({
  
  eventName: { type: String, required: true },
  description: { type: String, required: true },
  eventDate: { type: Date, required: true },
  ticketPrice: { type: Number, required: true },
  eventLocation: { type: String, required: true},
});

// Create Ticket model from schema
const Ticket = mongoose.model('Ticket', ticketSchema);

module.exports = { connectDB, Ticket };
