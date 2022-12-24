import './Navbar.css';
import {Link} from 'react-router-dom'
import logo from './my-icon.png'

function Navbar() {
  return (
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
          <Link to='/Experience' className='nav-link experience-nav-link'>Experience</Link>
          <Link to='/Projects' className='nav-link projects-nav-link'>Projects</Link>
          <Link to='/Contact' className='nav-link contact-nav-link'>Contact</Link>
        </div>
        <div className='nav-toggle-button' id='toggle-button' onClick={toggleNav}>
          <div className='toggle-icon'></div>
        </div>
      </div>
      <div className='media-nav' id='media-nav'>
        <div className='media-nav-links'>
          <Link to='/About' className='media-nav-link about-media-nav-link' onClick={closeNav}>About</Link>
          <Link to='/Experience' className='media-nav-link experience-media-nav-link' onClick={closeNav}>Experience</Link>
          <Link to='/Projects' className='media-nav-link projects-media-nav-link' onClick={closeNav}>Projects</Link>
          <Link to='/Contact' className='media-nav-link contact-media-nav-link' onClick={closeNav}>Contact</Link>
        </div>
      </div>
    </div>
  );
}

window.addEventListener('scroll', function () {
  var navbar = this.document.getElementById('nav')
  var name = this.document.getElementById('name')
  var nameContainer = this.document.getElementById('name-container')
  navbar.classList.toggle('sticky', window.scrollY > 0);
  name.classList.toggle('visible', window.scrollY > 0);
});

function closeNav() {
  var elem = document.getElementById("media-nav");
  var elem2 = document.getElementById('nav');

  elem.style.marginTop = '-265px';
  elem2.style.height = '65px';
  elem.style.height = '0px';
  document.getElementById('toggle-button').classList.remove('open2');
  setTimeout(function () {
    document.getElementById('toggle-button').classList.remove('open');
  }, 250);
}

function toggleNav() {
  var elem = document.getElementById('media-nav');
  var elem2 = document.getElementById('nav');
  var Style = window.getComputedStyle(elem);
  var Top = Style.getPropertyValue('margin-top');

  if (Top == '0px') {
    elem.style.marginTop = '-265px';
    elem2.style.height = '65px';
    elem.style.height = '0px';
    document.getElementById('toggle-button').classList.remove('open2');
    setTimeout(function () {
      document.getElementById('toggle-button').classList.remove('open');
    }, 250);
  } else {
    elem.style.marginTop = '0px';
    elem2.style.height = '265px'
    elem.style.height = '200px'
    document.getElementById('toggle-button').classList.add('open');
    setTimeout(function () {
      document.getElementById('toggle-button').classList.add('open2');
    }, 250);
  }
}

window.addEventListener("resize", function () {
  var elem = document.getElementById('media-nav');
  var elem2 = document.getElementById('nav');
  var Style = window.getComputedStyle(elem);
  var Top = Style.getPropertyValue('margin-top');

  if (window.innerWidth >= 600) {
    elem.style.marginTop = '-265px';
    elem2.style.height = '65px';
    elem.style.height = '0px';
    document.getElementById('toggle-button').classList.remove('open2');
    setTimeout(function () {
      document.getElementById('toggle-button').classList.remove('open');
    }, 250);
  }
});


export default Navbar;
