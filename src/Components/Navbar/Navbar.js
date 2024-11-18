import './Navbar.css';
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import logo from '../../Content/images/logo.webp';

function Navbar() {
  const [darkModeOn, setDarkModeOn] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navRef = useRef(null);
  const mediaNavRef = useRef(null);
  const toggleButtonRef = useRef(null);

  useEffect(() => {
    const root = document.querySelector(':root');
    const updateColorMode = () => {
      if (Cookies.get('colorMode') === 'dark') {
        root.classList.add('dark');
        setDarkModeOn(true);
      } else if (Cookies.get('colorMode') === 'light') {
        root.classList.remove('dark');
        setDarkModeOn(false);
      } else {
        if (
          window.matchMedia &&
          window.matchMedia('(prefers-color-scheme: dark)').matches
        ) {
          root.classList.add('dark');
          setDarkModeOn(true);
        } else {
          root.classList.remove('dark');
          setDarkModeOn(false);
        }
      }
    };
    updateColorMode();

    const handleScroll = () => {
      navRef.current.classList.toggle('sticky', window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);

    const handleResize = () => {
      if (window.innerWidth >= 700) {
        closeNav();
      }
    };
    window.addEventListener('resize', handleResize);

    // Cleanup to avoid memory leaks
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const changeColorMode = () => {
    const root = document.querySelector(':root');
    const newColorMode = darkModeOn ? 'light' : 'dark';
    root.classList.toggle('dark', newColorMode === 'dark');
    Cookies.set('colorMode', newColorMode);
    setDarkModeOn(!darkModeOn);
  };

  const closeNav = () => {
    mediaNavRef.current.style.marginTop = '55px';
    mediaNavRef.current.style.opacity = '0';
    mediaNavRef.current.style.visibility = 'hidden';
    setIsNavOpen(false);
  };

  const openNav = () => {
    mediaNavRef.current.style.marginTop = '60px';
    mediaNavRef.current.style.opacity = '1';
    mediaNavRef.current.style.visibility = 'visible';
    setIsNavOpen(true);
  };

  const toggleNav = () => {
    isNavOpen ? closeNav() : openNav();
  };

  return (
    <>
      <div className="nav" ref={navRef}>
        <div className="nav-container">
          <div className="nav-logo-container">
            <button
              aria-label="navigation toggle"
              className="nav-toggle-button"
              ref={toggleButtonRef}
              onClick={toggleNav}
            >
              {isNavOpen ? (
                <i className="bi bi-x"></i>
              ) : (
                <i className="bi bi-list"></i>
              )}
            </button>
            <Link to="/" className="logo-nav-link">
              <img
                src={logo}
                alt="logo"
                className="logo"
                onClick={closeNav}
                width="50"
              ></img>
            </Link>
          </div>
          <div className="nav-links">
            <Link to="/Experiences" className="nav-link experience-nav-link">
              Experiences
            </Link>
            <Link to="/Education" className="nav-link education-nav-link">
              Education
            </Link>
            <Link to="/Projects" className="nav-link projects-nav-link">
              Projects
            </Link>
            <Link to="/Contact" className="nav-link contact-nav-link">
              Contact
            </Link>
            <a
              aria-label="resume"
              target="_blank"
              rel="noreferrer"
              href="/Resume.pdf"
              className="nav-link resume-nav-link"
            >
              Resume
            </a>
            <button
              aria-label="change theme"
              onClick={changeColorMode}
              className="nav-link"
              id="color-switch-button"
            >
              {darkModeOn ? (
                <i className="bi bi-lightbulb-off-fill"></i>
              ) : (
                <i className="bi bi-lightbulb-fill"></i>
              )}
            </button>
            <a
              aria-label="github"
              href="https://github.com/ahmad-masud"
              className="nav-link github-nav-link"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bi bi-github"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="media-nav" ref={mediaNavRef}>
        <div className="media-nav-links">
          <Link
            to="/Experiences"
            className="media-nav-link experience-media-nav-link"
            onClick={closeNav}
          >
            Experiences
          </Link>
          <Link
            to="/Education"
            className="media-nav-link education-media-nav-link"
            onClick={closeNav}
          >
            Education
          </Link>
          <Link
            to="/Projects"
            className="media-nav-link projects-media-nav-link"
            onClick={closeNav}
          >
            Projects
          </Link>
          <Link
            to="/Contact"
            className="media-nav-link contact-media-nav-link"
            onClick={closeNav}
          >
            Contact
          </Link>
          <a
            aria-label="resume"
            target="_blank"
            rel="noreferrer"
            href="Resume.pdf"
            className="media-nav-link resume-media-nav-link"
            onClick={closeNav}
          >
            Resume
          </a>
        </div>
      </div>
    </>
  );
}

export default Navbar;
