import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm() {
    const [state, handleSubmit] = useForm('mjvzpnky');

    if (state.succeeded) {
        return <p>Thank you for your email!</p>;
    }
    return (
        <form method="POST" onSubmit={handleSubmit}>
        <label htmlFor="name">Full Name</label>
        <input id="name" type="text" name="name" required />
        <button type="submit" disabled={state.submitting}>Submit</button>
        <ValidationError errors={state.errors}/>
        </form>
    );
};