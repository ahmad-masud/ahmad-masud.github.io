import './App.css';
import Navbar from './Components/Navbar/Navbar.js';
import Footer from './Components/Footer/Footer.js';
import Home from './Pages/Home.js';
import About from './Pages/About.js';
import Experiences from './Pages/Experiences.js';
import Projects from './Pages/Projects.js';
import Education from './Pages/Education.js';
import Contact from './Pages/Contact.js';
import { Routes, Route, useLocation } from 'react-router-dom';
import ScrollToTop from './Components/ScrollToTop/ScrollToTop.js'

function App() {
  return (
    <div className='app'>
      <Navbar />
      <div className='Content'>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/About' element={<About />} />
          <Route exact path='/Experiences' element={<Experiences />} />
          <Route exact path='/Projects' element={<Projects />} />
          <Route exact path='/Education' element={<Education />} />
          <Route exact path='/Contact' element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
