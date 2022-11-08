import React, { Component } from "react";

class ContactForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            fname: "",
            lname: "",
            email: "",
            message: "",
            mailSent: false,
            error: null
        }
        this.handleChange = this.handleChange.bind(this);
        
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }
    handleChange(event){
        this.setState({ value: event.target.value });
    }
    handleFormSubmit( event ) {
        alert("Thank you for your message, " + this.state.fname + " ! We'll be in touch shortly.");
        event.preventDefault();
    }
    render (){
        return (
            <>
                <p>Contact Us</p>
                <form onSubmit={this.handleFormSubmit}>
                    <label>First Name</label>
                    <input type="text" name="firstname" id="fname" placeholder= "Your name.." value={this.state.fname} onChange={event => this.setState({ fname: event.target.value })}/>

                    <label>Last Name</label>
                    <input type="text" name="lastname" id="lname" placeholder="Your last name..." value={this.state.lname} onChange={event => this.setState({ lname: event.target.value })}/>
    
                    <label>Email</label>
                    <input type="text" id="email" name="email" placeholder="Your email" value={this.state.email} onChange={ event => this.setState({ email: event.target.value })}/>

                    <label>Message</label>
                    <textarea id="message" name="message" placeholder="Your message" value={this.state.message} onChange={ event => this.setState({ message: event.target.value })}/>

                    <input type="submit" value="Submit"/>
                </form>
            </>
        )
    }
}

export default ContactForm;