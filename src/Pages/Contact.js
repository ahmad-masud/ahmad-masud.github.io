import ContactComponent from '../Components/Contact/ContactComponent';
import Header from '../Components/Header/Header.js'
import Fade from 'react-reveal/Fade';

function Contact() {
  return (
    <div className='contact'>
      <Fade>
        <Header text='Contact' />
        <ContactComponent />
      </Fade>
    </div>
  );
}

export default Contact;