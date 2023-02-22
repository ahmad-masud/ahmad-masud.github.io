import './ContactComponent.css';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function ContactComponent() {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_3yamhe1', 'template_v2uaobc', form.current, 'tqejVuoeOE6huM6Cw')
        .then((result) => {
            console.log(result.text);
            document.getElementById('success-label').style.marginLeft = '10px';
            setTimeout(function () {
                document.getElementById('success-label').style.marginLeft = '-300px';
              }, 5000);
        }, (error) => {
            console.log(error.text);
        });
    };
  
    return (
        <div className='contact'>
            <label className='contact-success-label' id='success-label'>Sent Successfully <i className="fa-solid fa-circle-check"></i></label>
            <form className='contact-form' ref={form} onSubmit={sendEmail}>
                <label className='contact-name-label required'>Name</label>
                <input className='contact-name-input' type="text" name="from_name" required />
                <label className='contact-email-label required'>Email</label>
                <input className='contact-email-input' type="email" name="from_email" required/>
                <label className='contact-message-label required'>Message</label>
                <textarea className='contact-message' name="message" required/>
                <input className='contact-submit' type="submit" value="Send" required/>
            </form>  
        </div>
    );
}

export default ContactComponent;