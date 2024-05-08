// import React, { useState } from "react";
import { useState } from "react";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";


const Navbar = () => {
  const [show, setShow] = useState(false);

  const scrollToTickets = () => {
    const ticketsSection = document.getElementById("tickets");
    ticketsSection.scrollIntoView({ behavior: "smooth" });
    setShow(false); // Close the menu after scrolling
  };
  return (
    <nav>
      <div className="logo">Event Management</div>
      <div className={show ? "navLinks showmenu" : "navLinks"}>
        <div className="links">
          <Link to="hero" spy={true} smooth={true} duration={500}>
            HOME
          </Link>
          <Link to="services" spy={true} smooth={true} duration={500}>
            EVENTS
          </Link>
          <Link to="about" spy={true} smooth={true} duration={500}>
            ABOUT
          </Link>
          <Link to="contact" spy={true} smooth={true} duration={500}>
            SIGN UP
          </Link>
          {/* <Link to="tickets" spy={true} smooth={true} duration={500} className="link" onClick={() => setShow(!show)}>BUY TICKET</Link>
           */}
           {/* <button onClick={scrollToTickets} className="link">
            BUY TICKET
          </button> */}
          <Link to="tickets" spy={true} smooth={true} duration={500} className="link" onClick ={scrollToTickets}>
            BUY TICKET
          </Link>
        </div>
      </div>
      <div className="hamburger" onClick={() => setShow(!show)}>
        <GiHamburgerMenu />
      </div>
    </nav>
  );
};

export default Navbar;
