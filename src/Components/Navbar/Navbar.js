import './Navbar.css';
import { Link } from 'react-router-dom';
import logo from '../../Images/logo.png';

function Navbar() {

  window.addEventListener('scroll', function () {
    var name = this.document.getElementById('name')
    var nav = this.document.getElementById('nav')
    name.classList.toggle('visible', window.scrollY > 0);
    nav.classList.toggle('sticky', window.scrollY > 0);
  });
  
  function closeNav() {
    var elem = document.getElementById("media-nav");
  
    elem.style.marginTop = '55px';
    elem.style.opacity = '0';
    elem.style.visibility = 'hidden';
    document.getElementById('toggle-button').classList.remove('open2');
    setTimeout(function () {
      document.getElementById('toggle-button').classList.remove('open');
    }, 200);
  }
  
  function openNav() {
    var elem = document.getElementById("media-nav");
  
    elem.style.marginTop = '60px';
    elem.style.opacity = '1';
    elem.style.visibility = 'visible';
    document.getElementById('toggle-button').classList.add('open');
    setTimeout(function () {
      document.getElementById('toggle-button').classList.add('open2');
    }, 200);
  }
  
  function toggleNav() {
    var Top = document.getElementById('media-nav').style.getPropertyValue('margin-top');
  
    if (Top == '60px') {
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
      <div className='nav' id='nav'>
        <div className='nav-container'>
          <div className='nav-logo-container'>
            <Link to='/' className='logo-nav-link'>
              <img src={logo} alt='logo' className='logo' onClick={closeNav}></img>
            </Link>
            <Link to='/' className='text-logo-nav-link' id='name' onClick={closeNav}>Ahmad Masud</Link>
          </div>
          <div className='nav-links'>
            <Link to='/Experiences' className='nav-link experience-nav-link'>Experiences</Link>
            <Link to='/Projects' className='nav-link projects-nav-link'>Projects</Link>
            <Link to='/Contact' className='nav-link contact-nav-link'>Contact</Link>
            <a href='https://github.com/ahmad-masud' className='nav-link github-nav-link' target='_blank'><i className="fa-brands fa-github"></i></a>
          </div>
          <div className='nav-toggle-button' id='toggle-button' onClick={toggleNav}>
            <div className='toggle-icon'></div>
          </div>
        </div>
      </div>
      <div className='media-nav' id='media-nav'>
        <div className='media-nav-links'>
          <Link to='/Experiences' className='media-nav-link experience-media-nav-link' onClick={closeNav}>Experiences</Link>
          <hr className='media-nav-link-line'></hr>
          <Link to='/Projects' className='media-nav-link projects-media-nav-link' onClick={closeNav}>Projects</Link>
          <hr className='media-nav-link-line'></hr>
          <Link to='/Contact' className='media-nav-link contact-media-nav-link' onClick={closeNav}>Contact</Link>
          <hr className='media-nav-link-line'></hr>
          <a href='https://github.com/ahmad-masud' className='media-nav-link projects-media-nav-link' onClick={closeNav} target='_blank'>Github <i className="fa-solid fa-up-right-from-square"></i></a>
          <hr className='media-nav-link-line'></hr>
        </div>
      </div>
    </>
  );
}

export default Navbar;
