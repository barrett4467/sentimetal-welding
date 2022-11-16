import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm() {
    const [state, handleSubmit] = useForm('mjvzpnky');
  
    if (state.succeeded) {
      return <p>We'll be in touch shortly!</p>;
    }
  
    return (
      <form method="POST" onSubmit={handleSubmit}>
        <label htmlFor="name">Full Name</label>
        <input id="name" type="text" name="name" required />
        <ValidationError prefix="Name" field="name" errors={state.errors} />
  
        <label htmlFor="email">Email Address</label>
        <input id="email" type="email" name="email" required />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
  
        <label htmlFor="email">Phone Number</label>
        <input id="phone" type="text" pattern="[0-9]*" minLength="10" maxLength= "10" name="phone" required />
        <ValidationError prefix="Phone" field="phone" errors={state.errors} />

        <label htmlFor="message">How can we help?</label>
        <textarea id="message" name="message" required></textarea>
        <ValidationError prefix="Message" field="message" errors={state.errors} />
  
        <button type="submit" disabled={state.submitting}>
          Submit
        </button>
        <ValidationError errors={state.errors} />
      </form>
    );
  };