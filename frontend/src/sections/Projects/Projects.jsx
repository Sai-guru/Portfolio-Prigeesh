import styles from './ProjectsStyles.module.css';

import MyGithubSearch from '../../assets/MyGithubSearch.png';
import EComm from '../../assets/myecomm.png';
import Bulkmail from '../../assets/bulkmail.png';
import Weather from '../../assets/Weather.png';

import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={EComm}
          link="https://ecommerce-mern-emc-backend.onrender.com/"
          h3="MERN E-Commerce"
          p= "Vendico is a full-stack e-commerce solution built using MERN Stack. It provides a complete, scalable, and responsive foundation for an online store featuring." />
        <ProjectCard
          src={MyGithubSearch}
          link="https://sai-guru.github.io/MyGithubSearch/"
          h3="MyGithubSearch"
          p="GitHub User Details Web App is a React.js application for searching GitHub profiles by username." />
        <ProjectCard
          src={Bulkmail}
          link="https://bulk-mail-website.vercel.app/"
          h3="Bulkmail"
          p="A web application to send bulk emails efficiently."
        />
        <ProjectCard
          src={Weather}
          link="https://prigeesh-weatherweb.netlify.app/"
          h3="Weather Website"
          p="This project is a React-based weather application that allows users to fetch and display real-time weather data for any city using the OpenWeatherMap API."
        />

      </div>
    </section>
  );
}

export default Projects;
