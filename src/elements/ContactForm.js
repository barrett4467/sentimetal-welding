import React, { useState } from "react";

const ContactForm = () => {
    const [status, setStatus] = useState("Submit");
    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");
        const { name, email, message } = e.target.elements;
        let details = {
            name: name.value,
            email: email.value,
            message: message.value,
        };
        let response = await fetch("http://localhost:3000/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(details),
        });
        setStatus("Submit");
        let result = await response.json();
        alert(result.status);
    };
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name: </label>
                <input type="text" id="name" required/>
            </div>
            <div>
                <label htmlFor="email">Email: </label>
                <input type="text" id="email" required/>
            </div>
            <div>
                <label htmlFor="name">Message: </label>
                <input type="text" id="message" required/>
            </div>
            <button type="submit">{status}</button>
        </form>
    )
}

export default ContactForm;