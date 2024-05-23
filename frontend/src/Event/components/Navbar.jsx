import React, { useState } from "react";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";

import { GiHamburgerMenu } from "react-icons/gi";
import { useAuth } from "../../Vender/login signUp/store/auth";


const Navbar = () => {
  const [show, setShow] = useState(false);
  const { isLoggedIn } = useAuth();
  return (
    <nav>
      <div className="logo">Event Management</div>
      <div className={show ? "navLinks showmenu" : "navLinks"}>
        <div className="links">

          <NavLink to="/">
            HOME
          </NavLink>



          <Link to="services" spy={true} smooth={true} duration={500}>
            EVENTS
          </Link>
          <Link to="/events" spy={true} smooth={true} duration={500}>
            EVENT DETAILS
          </Link>




          {isLoggedIn ? (
            <>
              <NavLink to="/services">SERVICES</NavLink>
            </>
          ) : (
            <>
          <NavLink to="/signup">
            SERVICES
          </NavLink>
            </>
          )}






          <Link to="about" spy={true} smooth={true} duration={500}>
            ABOUT
          </Link>
          <Link to="contact" spy={true} smooth={true} duration={500}>
            SIGN UP
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
