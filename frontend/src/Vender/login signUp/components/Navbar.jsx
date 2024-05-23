import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../store/auth";

const Navbar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <>
      <header className="header">

        <nav className="navbar">
          {isLoggedIn ? (
            <>
              <NavLink to="/logout">Logout</NavLink>
            </>
          ) : (
            <>
              <NavLink to="/signup">Signup</NavLink>
              <NavLink to="/login">Login</NavLink>
            </>
          )}
        </nav>
        
      </header>
    </>
  );
};

export default Navbar;
