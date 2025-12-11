import React from "react";
import "./Hero.css";
import arrowicon from "../Assets/arrow.png";
import { NavLink } from "react-router-dom";

function Hero() {
  return (
    <>
      <div className="hero">
        <h2 className="hero-intro">
          Explore a handmade world where little details mean everything in
        </h2>

        <h1 className="H-H">H.H</h1>
        <h1 className="Handmade-Harmony">Handmade Harmony</h1>

        <div>
          <p className="hero-description">
            Where every thread tells a story...
          </p>

          <p className="hero-description">
            Explore our world of handmade crochet dolls,decorative lamps, and
            custom gifts, all crafted with love.
          </p>
        </div>

        <div className="hero-latest-btn">
          <img src={arrowicon} alt="arrow" />
          <NavLink to="/shop">
            {({ isActive }) => (
              <>
                SHOP THE MAGIC
                {isActive && <hr />}
              </>
            )}
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Hero;
