import styles from './ProjectsStyles.module.css';

import MyGithubSearch from '../../assets/MyGithubSearch.png';
import FormData from '../../assets/FormData.png';
import Bulkmail from '../../assets/bulkmail.png';
import Weather from '../../assets/Weather.png';

import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={FormData}
          link="https://form-data-indol.vercel.app/"
          h3="Form Data"
          p= "FormData Web App is a MERN stack application designed to collect and store user information." />
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
