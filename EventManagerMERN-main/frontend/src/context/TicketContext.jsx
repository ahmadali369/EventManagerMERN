// // import  { createContext, useState } from 'react';
// // import PropTypes from 'prop-types';

// // // Create context
// // export const TicketContext = createContext();


// // export const TicketProvider = ({ children, ticketPrice }) => {
// //   const [ticketCount, setTicketCount] = useState(1);
// //   const [totalAmount, setTotalAmount] = useState(ticketPrice);

// //   const increaseTicketCount = () => {
// //     setTicketCount(ticketCount + 1);
// //     setTotalAmount(totalAmount + ticketPrice);
// //   };

// //   const decreaseTicketCount = () => {
// //     if (ticketCount > 1) {
// //       setTicketCount(ticketCount - 1);
// //       setTotalAmount(totalAmount - ticketPrice);
// //     }
// //   };

// //   return (
// //     <TicketContext.Provider
// //       value={{
// //         ticketCount,
// //         totalAmount,
// //         increaseTicketCount,
// //         decreaseTicketCount
// //       }}
// //     >
// //       {children}
// //     </TicketContext.Provider>
// //   );
// // };

// // // Add prop types validation
// // TicketProvider.propTypes = {
// //   children: PropTypes.node,
// //   ticketPrice: PropTypes.number.isRequired,
// // };




// import  { createContext, useState, useContext } from 'react';

// const TicketContext = createContext();

// export const useTicketContext = () => useContext(TicketContext);

// export const TicketProvider = ({ children }) => {
//     const [ticketCounts, setTicketCounts] = useState({
//         silver: 0,
//         gold: 0,
//         earlyBird: 0,
//         ticketCamping: 0,
//         vipTicketCamping: 0
//     });

//     const [totalAmount, setTotalAmount] = useState(0);

//     const handleIncreaseTicket = (type, price) => {
//         const newTicketCounts = { ...ticketCounts };
//         newTicketCounts[type]++;
//         setTicketCounts(newTicketCounts);
//         setTotalAmount(totalAmount + price);
//     };

//     const handleDecreaseTicket = (type, price) => {
//         if (ticketCounts[type] > 0) {
//             const newTicketCounts = { ...ticketCounts };
//             newTicketCounts[type]--;
//             setTicketCounts(newTicketCounts);
//             setTotalAmount(totalAmount - price);
//         }
//     };

//     return (
//         <TicketContext.Provider value={{ ticketCounts, totalAmount, handleIncreaseTicket, handleDecreaseTicket }}>
//             {children}
//         </TicketContext.Provider>
//     );
// };
