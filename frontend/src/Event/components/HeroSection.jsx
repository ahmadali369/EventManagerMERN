import React from "react";
import { Link } from "react-scroll";

const HeroSection = () => {
  return (
    <section className="hero">
      <img src="../../../public/restaurant.jpg" alt="restaurant" />
      <div className="item">
        <div>
          <h1>Event Manager</h1>

          <Link to="contact" spy={true} smooth={true} duration={500}>
            SIGN UP
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
