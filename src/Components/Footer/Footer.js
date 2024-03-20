import './Footer.css';

function Footer() {
  return (
    <div className='footer'>
      <p className='footer-quote'>
        "Computers are good at following instructions, but not at reading your mind." -Donald Knuth
      </p>
      <div className='footer-links'>
          <a aria-label='github' href='https://github.com/ahmad-masud' className='footer-link' target="_blank" rel="noreferrer">
            <i className="bi bi-github"></i>
          </a>
          <a aria-label='linkedin' href='https://www.linkedin.com/in/ahmadmasud/' className='footer-link' target="_blank" rel="noreferrer">
            <i className="bi bi-linkedin"></i>
          </a>
          <a aria-label='email' href='mailto:ahmadmasud25@hotmail.com' className='footer-link' target="_blank" rel="noreferrer">
            <i className="bi bi-envelope-fill"></i>
          </a>
      </div>
      <span className='footer-copyright-text'>
        Designed and Programmed by Ahmad Masud {new Date().getFullYear()} ©
      </span>
    </div>
  );
}

export default Footer;
