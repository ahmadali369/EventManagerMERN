
import { Container } from '@mui/material';
// import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Services from "../components/Services";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
// import TicketsPage from "../src/pages/homeTicket";

const App = () => {
  return (
    
    <Router>
      
      <Navbar />
      <HeroSection />
      <Services />
      <About />
      <Contact />
      <Footer />
      <Toaster />


     


      <Container maxWidth="md">
      
    </Container>
    </Router>
  );
};

export default App;
