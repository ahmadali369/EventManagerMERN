
// // import  { useState, useEffect } from 'react';

// // const useTicketContext = () => {
// //   const [tickets, setTickets] = useState([]);
// //   const [isLoading, setIsLoading] = useState(true);
// //   const [error, setError] = useState(null);

// //   useEffect(() => {
// //     fetch('/api/tickets')
// //       .then(response => {
// //         if (!response.ok) {
// //           throw new Error('Failed to fetch tickets');
// //         }
// //         return response.json();
// //       })
// //       .then(data => {
// //         setTickets(data.tickets);
// //         setIsLoading(false);
// //       })
// //       .catch(error => {
// //         setError(error.message);
// //         setIsLoading(false);
// //       });
// //   }, []);

// //   return {
// //     tickets,
// //     isLoading,
// //     error,
// //   };
// // };

// // export default useTicketContext;
// // import React, { createContext, useState,useContext } from 'react';
// import { createContext, useState } from 'react';
// import PropTypes from 'prop-types';

// // Create context
// export const TicketContext = createContext();

// // Create context provider
// export const TicketProvider = ({ children, ticketPrice }) => {
//   const [ticketCount, setTicketCount] = useState(1);
//   const [totalAmount, setTotalAmount] = useState(ticketPrice);

//   const increaseTicketCount = () => {
//     setTicketCount(ticketCount + 1);
//     setTotalAmount(totalAmount + ticketPrice);
//   };

//   const decreaseTicketCount = () => {
//     if (ticketCount > 1) {
//       setTicketCount(ticketCount - 1);
//       setTotalAmount(totalAmount - ticketPrice);
//     }
//   };

//   return (
//     <TicketContext.Provider
//       value={{
//         ticketCount,
//         totalAmount,
//         increaseTicketCount,
//         decreaseTicketCount
//       }}
//     >
//       {children}
//     </TicketContext.Provider>
//   );
// };
// // Add prop types validation
// TicketProvider.propTypes = {
//   children: PropTypes.node, // Validate that children is a node
//   ticketPrice: PropTypes.number.isRequired, // Validate that ticketPrice is a required number
// };

// // export const SilverTicketProvider = ({ children }) => {
// //   const { increaseTicketCount, decreaseTicketCount } = useContext(TicketContext);
  
// //   return (
// //     <TicketProvider ticketPrice={89}>
// //       {React.Children.map(children, (child) =>
// //         React.cloneElement(child, { increaseTicketCount, decreaseTicketCount })
// //       )}
// //     </TicketProvider>
// //   );
// // };


// // export const GoldTicketProvider = ({ children }) => {
// //   return (
// //     <TicketProvider>
// //       {children}
// //     </TicketProvider>
// //   );
// // };

// // export const EarlyBirdTicketProvider = ({ children }) => {
// //   return (
// //     <TicketProvider>
// //       {children}
// //     </TicketProvider>
// //   );
// // };

// // export const BothTicketProvider = ({ children }) => {
// //   return (
// //     <TicketProvider>
// //       {children}
// //     </TicketProvider>
// //   );
// // };

// // export const VipTicketProvider = ({ children }) => {
// //   return (
// //     <TicketProvider>
// //       {children}
// //     </TicketProvider>
// //   );
// // };

// // // Add prop types validation for each context provider
// // SilverTicketProvider.propTypes = {
// //   children: PropTypes.node
// // };

// // GoldTicketProvider.propTypes = {
// //   children: PropTypes.node
// // };

// // EarlyBirdTicketProvider.propTypes = {
// //   children: PropTypes.node
// // };

// // BothTicketProvider.propTypes = {
// //   children: PropTypes.node
// // };

// // VipTicketProvider.propTypes = {
// //   children: PropTypes.node
// // };
