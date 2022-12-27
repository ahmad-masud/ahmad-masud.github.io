import ContactComponent from '../Components/Contact/ContactComponent';
import Header from '../Components/Header/Header.js'

function Contact() {
  return (
    <div className='contact'>
      <Header text='Contact' />
      <ContactComponent />
    </div>
  );
}

export default Contact;