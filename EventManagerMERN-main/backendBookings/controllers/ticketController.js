// // const Ticket = require('../models/ticketModel');

// // //Route handler for getting all tickets
// // router.get('/', async (req, res) => {
// //     try {
// //         const tickets = await Ticket.find();
// //         res.json({ tickets });
// //     } catch (error) {
// //         console.error('Error fetching tickets:', error);
// //         res.status(500).json({ error: 'Internal server error' });
// //     }
// // });

// // // Route handler for creating a new ticket
// // router.post('/', async (req, res) => {
// //     try {
// //         const newTicket = req.body;
// //         const ticket = new Ticket(newTicket);
// //         await ticket.save();
// //         res.json({ message: 'Ticket created successfully', ticket });
// //     } catch (error) {
// //         console.error('Error creating ticket:', error);
// //         res.status(500).json({ error: 'Internal server error' });
// //     }
// // });

// // exports.getAllTickets = async (req, res) => {
// //   try {
// //     const tickets = await Ticket.find();
// //     res.json(tickets);
// //   } catch (error) {
// //     console.error('Error fetching tickets:', error);
// //     res.status(500).json({ error: 'Internal server error' });
// //   }
// // };

// // // Get ticket by ID
// // exports.getTicketById = async (req, res) => {
// //   try {
// //     const ticket = await Ticket.findById(req.params.id);
// //     res.json(ticket);
// //   } catch (error) {
// //     console.error('Error fetching ticket by ID:', error);
// //     res.status(500).json({ error: 'Internal server error' });
// //   }
// // };

// // // Create a new ticket
// // exports.createTicket = async (req, res) => {
// //   try {
// //     const newTicket = new Ticket(req.body);
// //     await newTicket.save();
// //     res.status(201).json(newTicket);
// //   } catch (error) {
// //     console.error('Error creating ticket:', error);
// //     res.status(500).json({ error: 'Internal server error' });
// //   }
// // };

// // // Update a ticket
// // exports.updateTicket = async (req, res) => {
// //   try {
// //     const updatedTicket = await Ticket.findByIdAndUpdate(req.params.id, req.body, { new: true });
// //     res.json(updatedTicket);
// //   } catch (error) {
// //     console.error('Error updating ticket:', error);
// //     res.status(500).json({ error: 'Internal server error' });
// //   }
// // };

// // // Delete a ticket
// // exports.deleteTicket = async (req, res) => {
// //   try {
// //     await Ticket.findByIdAndDelete(req.params.id);
// //     res.json({ message: 'Ticket deleted successfully' });
// //   } catch (error) {
// //     console.error('Error deleting ticket:', error);
// //     res.status(500).json({ error: 'Internal server error' });
// //   }
// // };

// // module.exports = router;

// // // // Controller method to book tickets
// // // exports.bookTickets = async (req, res) => {
// // //   const { eventId, ticketType, quantity } = req.body;

// // //   try {
// // //     // Check if tickets are available
// // //     const ticket = await Ticket.findOne({ eventId, ticketType });
// // //     if (!ticket) {
// // //       return res.status(404).json({ message: 'Ticket not found' });
// // //     }
// // //     if (ticket.availableQuantity < quantity) {
// // //       return res.status(400).json({ message: 'Not enough tickets available' });
// // //     }

// // //     // Decrease available quantity and save ticket
// // //     ticket.availableQuantity -= quantity;
// // //     await ticket.save();

// // //     // Return success response
// // //     res.json({ message: `Successfully booked ${quantity} ${ticketType} tickets` });
// // //   } catch (error) {
// // //     console.error(error);
// // //     res.status(500).json({ message: 'Internal server error' });
// // //   }
// // // };





const Ticket = require('../models/ticketModel');

module.exports = getAllTickets = async (req, res) => {
  try {
    const tickets = await Ticket.find();
    res.json(tickets);
  } catch (error) {
    console.error('Error fetching tickets:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Get ticket by ID
module.exports = getTicketById = async (req, res) => {
  try {
    const ticket = await Ticket.findById(req.params.id);
    res.json(ticket);
  } catch (error) {
    console.error('Error fetching ticket by ID:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Create a new ticket
module.exports = createTicket = async (req, res) => {
  try {
    const newTicket = new Ticket(req.body);
    await newTicket.save();
    res.status(201).json(newTicket);
  } catch (error) {
    console.error('Error creating ticket:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Update a ticket
module.exports= updateTicket = async (req, res) => {
  try {
    const updatedTicket = await Ticket.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedTicket);
  } catch (error) {
    console.error('Error updating ticket:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Delete a ticket
module.exports= deleteTicket = async (req, res) => {
  try {
    await Ticket.findByIdAndDelete(req.params.id);
    res.json({ message: 'Ticket deleted successfully' });
  } catch (error) {
    console.error('Error deleting ticket:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
