import './Footer.css';

function Footer() {

  return (
    <div className='footer'>
      <p className='footer-quote'>
        "Always remember that your present situation is not your final destination. The best is yet to come." -Zig Ziglar
      </p>
      <div className='footer-links'>
          <a aria-label='github' href='https://github.com/ahmad-masud' className='footer-link' target="_blank" rel="noreferrer">
            <i className="fa-brands fa-github icon"></i>
          </a>
          <a aria-label='facebook' href='https://www.facebook.com/AhmadMasud25' className='footer-link' target="_blank" rel="noreferrer">
            <i className="fa-brands fa-facebook icon"></i>
          </a>
          <a aria-label='linkedin' href='https://www.linkedin.com/in/ahmadmasud/' className='footer-link' target="_blank" rel="noreferrer">
            <i className="fa-brands fa-linkedin icon"></i>
          </a>
          <a aria-label='twitter' href='https://twitter.com/_AhmadMasud' className='footer-link' target="_blank" rel="noreferrer">
            <i className="fa-brands fa-square-twitter icon"></i>
          </a>
      </div>
      <span className='footer-copyright-text'>
        Designed and Programmed by Ahmad Masud ©
      </span>
    </div>
  );
}

export default Footer;
