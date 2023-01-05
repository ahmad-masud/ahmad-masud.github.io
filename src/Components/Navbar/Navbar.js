import './Navbar.css';
import { Link } from 'react-router-dom';
import logo from '../../Images/Icon.png';

function Navbar() {

  window.addEventListener('scroll', function () {
    var name = this.document.getElementById('name')
    name.classList.toggle('visible', window.scrollY > 0);
  });
  
  function closeNav() {
    var elem = document.getElementById("media-nav");
  
    elem.style.marginTop = '100px';
    elem.style.opacity = '0';
    elem.style.visibility = 'hidden';
    document.getElementById('toggle-button').classList.remove('open2');
    setTimeout(function () {
      document.getElementById('toggle-button').classList.remove('open');
    }, 200);
  }
  
  function openNav() {
    var elem = document.getElementById("media-nav");
  
    elem.style.marginTop = '109px';
    elem.style.opacity = '1';
    elem.style.visibility = 'visible';
    document.getElementById('toggle-button').classList.add('open');
    setTimeout(function () {
      document.getElementById('toggle-button').classList.add('open2');
    }, 200);
  }
  
  function toggleNav() {
    var elem = document.getElementById('media-nav');
    var Style = window.getComputedStyle(elem);
    var Top = Style.getPropertyValue('margin-top');
  
    if (Top == '109px') {
      closeNav()
    } else {
      openNav()
    }
  }
  
  window.addEventListener("resize", function () {
    if (window.innerWidth >= 600) {
      closeNav()
    }
  });

  return (
    <>
      <div className='top-container'>
        <div className='follow-container'>
          <span className='follow-text'>Follow me on Github! <a className='follow-link' href='https://github.com/ahmad-masud' target='_blank'>👉 github.com</a></span>
        </div>
        <div className='nav' id='nav'>
          <div className='nav-container'>
            <div className='nav-logo-container'>
              <Link to='/' className='logo-nav-link'>
                <img src={logo} alt='logo' className='logo' onClick={closeNav}></img>
              </Link>
              <Link to='/' className='text-logo-nav-link' id='name' onClick={closeNav}>Ahmad Masud</Link>
            </div>
            <div className='nav-links'>
              <Link to='/About' className='nav-link about-nav-link'>About</Link>
              <Link to='/Experiences' className='nav-link experience-nav-link'>Experiences</Link>
              <Link to='/Projects' className='nav-link projects-nav-link'>Projects</Link>
              <Link to='/Contact' className='nav-link contact-nav-link'>Contact</Link>
            </div>
            <div className='nav-toggle-button' id='toggle-button' onClick={toggleNav}>
              <div className='toggle-icon'></div>
            </div>
          </div>
        </div>
      </div>
      <div className='media-nav' id='media-nav'>
        <div className='media-nav-links'>
          <Link to='/About' className='media-nav-link about-media-nav-link' onClick={closeNav}>About</Link>
          <hr className='nav-hr' />
          <Link to='/Experiences' className='media-nav-link experience-media-nav-link' onClick={closeNav}>Experiences</Link>
          <hr className='nav-hr' />
          <Link to='/Projects' className='media-nav-link projects-media-nav-link' onClick={closeNav}>Projects</Link>
          <hr className='nav-hr' />
          <Link to='/Contact' className='media-nav-link contact-media-nav-link' onClick={closeNav}>Contact</Link>
          <hr className='nav-hr' />
        </div>
      </div>
    </>
  );
}

export default Navbar;
