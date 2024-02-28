import './App.css';
import Navbar from './Components/Navbar/Navbar.js';
import Footer from './Components/Footer/Footer.js';
import Home from './Pages/Home/Home.js';
import Experiences from './Pages/Experience/Experiences.js';
import Education from './Pages/Education/Education.js';
import Projects from './Pages/Projects/Projects.js';
import Contact from './Pages/Contact/Contact.js';
import NotFound from './Pages/NotFound/NotFound.js'
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='app'>
      <Navbar />
      <div className='Content'>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/Experiences' element={<Experiences />} />
          <Route exact path='/Education' element={<Education />} />
          <Route exact path='/Projects' element={<Projects />} />
          <Route exact path='/Contact' element={<Contact />} />
          <Route exact path='*' element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
