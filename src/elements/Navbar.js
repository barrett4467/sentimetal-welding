import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return(
        <div>
            <Link to="/">Home</Link>
            <Link to="/services">Services</Link>
            <Link to="/previous-work">Previous Work</Link>
            <Link to="/contact">Contact Us</Link>
        </div>
    )
}

export default Navbar;