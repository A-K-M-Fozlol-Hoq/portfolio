import React from 'react';
import './ContactForm.css'
const ContactForm = () => {
    return (
        <div className="contact-form-wraper pt-5 pb-5">
            <div className="contact">
                <form action="">
                    <h2>Get In Touch</h2>
                    <label for="Fname">First name: </label>
                    <input id="Fname" type="text" placeholder="Enter Your Name" />
                    <label for="Sname">Second name: </label>
                    <input id="Sname" type="text" placeholder="Enter YOur Last Name" />
                    <label for="email">Email: </label>
                    <input id="email" type="email" placeholder="Enter YOue Email..." />
                    <textarea name="" maxlength="101" id="" cols="30" rows="10"></textarea>
                    <input type="submit" value="send" />
                </form>
        </div>
        </div>
    );
};

export default ContactForm;