import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";

const Header = () => {
    return(
        <header>
            <NavLink>
              <img src="./images/ram.jpge" alt="ram"/> 
            </NavLink>
            <Navbar />
        </header>
    );
};
export default Header;