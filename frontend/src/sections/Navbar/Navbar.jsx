import './Navbar.css';
import logo from '../../assets/logo.png';

function Navbar() {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="navbar-logo" />
      <div className="navbar-container">
        <ul className="navbar-links">
          <li onClick={() => scrollToSection('home')}>Home</li>
          <li onClick={() => scrollToSection('about')}>About</li>
          <li onClick={() => scrollToSection('projects')}>Projects</li>
          <li onClick={() => scrollToSection('contact')}>Contact</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
