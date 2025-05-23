import styles from './HeroStyles.module.css';
import heroImg from '../../assets/profile.jpg';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/cv.pdf';
import { useTheme } from '../../common/ThemeContext';
import { FaInstagram } from 'react-icons/fa';


const Hero = () => {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;

  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={heroImg}
          className={styles.hero}
          alt="Profile picture of Guru"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          SAI GURU PRIGEESH M
          
        </h1>
        <h2>Full Stack Developer</h2>
        <span>
          <a href="https://www.instagram.com/prigeesh._.2006?igsh=MWJhZHdtamluNXZzZw==" target="_blank">
          <FaInstagram size={30} color={theme === 'light' ? 'black' : '#ffffff'} />
          </a>
          <a href="https://github.com/Sai-guru/Sai-guru" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://tinyurl.com/hf42w9fy" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </span>
        <p className={styles.description}>
        MERN Stack Developer | Fresher with expertise in MongoDB, Express.js, React.js, and Node.js, 
          with TypeScript. Eager to develop scalable web applications and APIs. Passionate about 
          contributing to the team and learning new technologies.
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}


export default Hero;
