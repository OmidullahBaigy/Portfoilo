import React from "react";

function Contact(){
    return(
        
        <div class="contact-form">
    <h1>Contact with me</h1>
    <input type="text" placeholder="First Name" />
    <input type="text" placeholder="Last Name" />
    <input type="email" placeholder="Email" />
    <textarea placeholder="Your Message"></textarea>
    <button type="submit">Send Message</button>
</div>

    )
}

export default Contact;