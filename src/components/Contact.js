import React from "react";
import Navbar from "../elements/Navbar";
import ContactFormspree from "../elements/ContactFormspree";
import Map from "../elements/map";

const Contact = () => {
    return (
        <>
            <Navbar />
            <h1>Contact</h1>
            <ContactFormspree />
            <h2>Give us a call at: 777-777-7777</h2>
            <Map />
        </>
    )
}

export default Contact;