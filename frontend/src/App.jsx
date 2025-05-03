import './App.css';
import Navbar from './sections/Navbar/Navbar';  // Make sure to import Navbar
import About from './sections/About/About';
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';
import Hero from './sections/Hero/Hero';
import Projects from './sections/Projects/Projects';
import Skills from './sections/Skills/Skills';
import Education from './sections/Education/Education';


const App = () => {
  return (
    <>
      <Navbar /> {/* Add the Navbar here */}
      <div id="home">
        <Hero />
      </div>

      <div id='about'>
        <About />
      </div>
      
      <div id="education">
        <Education />
      </div>

      <div id="projects">
        <Projects />
      </div>

      <div id="skills">
        <Skills />
      </div>
      
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </>
  );
}



export default App;
