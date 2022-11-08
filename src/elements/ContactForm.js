import React from "react";

const ContactForm = () => {
    return (
        <>
            <p>Contact Us</p>
            <form action="/action_page.php">
                <label for="firstname">First Name</label>
                <input type="text" name="firstname" id="fname" placeholder= "Your name.."/>
                <label for="lastname">Last Name</label>
                <input type="text" name="lastname" id="lname" placeholder="Your last name..."/>

                <label for="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Your email"/>
            </form>
        </>
    )
}

export default ContactForm;