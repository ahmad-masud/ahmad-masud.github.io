import './App.css';
import Navbar from './Components/Navbar/Navbar.js';
import Footer from './Components/Footer/Footer.js';
import Home from './Pages/Home.js';
import About from './Pages/About.js';
import Experience from './Pages/Experience.js';
import Projects from './Pages/Projects.js';
import Education from './Pages/Education.js';
import Contact from './Pages/Contact.js';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

function App() {
  const location = useLocation()
  return (
    <div className='app'>
      <Navbar />
      <div className='Content'>
        <AnimatePresence mode='wait'>
          <Routes key={location.pathname} location={location}>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/About' element={<About />} />
            <Route exact path='/Experience' element={<Experience />} />
            <Route exact path='/Projects' element={<Projects />} />
            <Route exact path='/Education' element={<Education />} />
            <Route exact path='/Contact' element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </div>
      <Footer />
    </div>
  );
}

export default App;
