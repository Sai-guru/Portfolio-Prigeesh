import styles from './ProjectsStyles.module.css';

import MyGithubSearch from '../../assets/MyGithubSearch.png';
import EComm from '../../assets/myecomm.png';
import Bulkmail from '../../assets/bulkmail.png';
import planetsNode from '../../assets/planetsNode.png';
import weatherAdvisor from '../../assets/weatherAdvisor.png';
import pokeInfo from '../../assets/pokeInfo.png';
import todo from '../../assets/todo.png';
import digiclk from '../../assets/digiclk.png';

import ProjectCard from '../../common/ProjectCard';



const Projects = () => {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={planetsNode}
          link="https://planet-node.vercel.app/"
          h3="Planet Node Visualizer"
          p="This project visualizes the monthly Rahu and Ketu positions based on planetary data using React, Recharts, and astronomical calculations in Python. It’s designed to help visualize nodal shifts across the year with intuitive charts and tables."
        />
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
          src={weatherAdvisor}
          link="https://weather-advisor-five.vercel.app/"
          h3="Weather Website Info via Open Router API providers"
          p="This project is a React-based weather application that allows users to fetch and display real-time weather data for any city using the OpenWeatherMap API."
        />
        <ProjectCard
          src={pokeInfo}
          link="https://pokeinfoguru.netlify.app/"
          h3="⚡ PokeInfo"
          p="PokeInfo is a fun and beginner-friendly web app built with vanilla JavaScript. It uses the modern fetch to retrieve Pokémon data from the public PokéAPI and displays the info."
        />
        <ProjectCard
          src={todo}
          link="https://to-do-react-omega-ten.vercel.app/"
          h3="📝Todo-react-App"
          p="A simple, responsive, and functional Todo app built with React.js. This app allows users to add, mark, and delete tasks efficiently🎉."
        />
        <ProjectCard
          src={digiclk}
          link="https://effortless-creponne-59c3c2.netlify.app/"
          h3="Digital Clock"
          p="A cute & responsive, Digital Time Clock built with Vanilla js.It shows live time."
        />

      </div>
    </section>
  );
}



export default Projects;
