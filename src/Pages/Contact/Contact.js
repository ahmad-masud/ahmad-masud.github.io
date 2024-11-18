import './Contact.css';
import { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();
  const [message, setMessage] = useState('Sent Successfully ✅');
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_3yamhe1',
        'template_v2uaobc',
        form.current,
        'tqejVuoeOE6huM6Cw'
      )
      .then(
        (result) => {
          console.log(result.text);
          setMessage('Sent Successfully ✅');
          document.getElementById('success-label').style.marginTop = '80px';
          setTimeout(function () {
            document.getElementById('success-label').style.marginTop = '-70px';
          }, 5000);
        },
        (error) => {
          console.log(error.text);
          setMessage('Error Occurred ❌');
          document.getElementById('success-label').style.marginTop = '80px';
          setTimeout(function () {
            document.getElementById('success-label').style.marginTop = '-70px';
          }, 5000);
        }
      );
  };

  useEffect(() => {
    document.title = 'Contact | Ahmad Masud';
  }, []);

  return (
    <div className="contact">
      <p className="contact-title">Contact</p>
      <label className="contact-success-label" id="success-label">
        {message}{' '}
      </label>
      <form className="contact-form" ref={form} onSubmit={sendEmail}>
        <label className="contact-name-label required">Name</label>
        <input
          className="contact-name-input"
          type="text"
          name="from_name"
          required
        />
        <label className="contact-email-label required">Email</label>
        <input
          className="contact-email-input"
          type="email"
          name="from_email"
          required
        />
        <label className="contact-message-label required">Message</label>
        <textarea className="contact-message" name="message" required />
        <input className="contact-submit" type="submit" value="Send" required />
      </form>
    </div>
  );
}

export default Contact;
