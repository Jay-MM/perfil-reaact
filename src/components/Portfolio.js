import { useState } from 'react'
import Project from "./Project"

const Portfolio = (project) => {
    const [projects] = useState([
        {
          name: 'jate',
          description: 'a PWA using  Express.js',
          link: " https://evening-spire-25471.herokuapp.com",
          repo: " https://github.com/Jay-MM/pwa-text-editor-"
        },
        {
          name: 'social-network-api',
          description: 'A social media application using Mongoose and Express.js',
          link: "https://raw.githubusercontent.com/Jay-MM/social-network-api/main/assets/social-network-api-walkthrough-video.mp4",
          repo: "https://github.com/Jay-MM/social-network-api"
        },
        {
          name: 'we-do',
          description: 'Full-Stack application using Node.js, Express, MySQL, and Google Geocoding API',
          link: "https://we-do-application.herokuapp.com/",
          repo: "https://github.com/ddwk21/we-do.git"
        },
        {
          name: 'note-taker',
          description: 'A web app that allows you to CRUD notes that uses Express.js',
          link: "https://shrouded-caverns-27380.herokuapp.com/",
          repo: "https://github.com/Jay-MM/note-taker.git"
        },
        {
          name: 'celebrity-astrology',
          description: 'An application allowing the user to search fro celebrities and see their astrology information utilizing HTML/CSS and a thirs party API',
          link: "https://jonpfluger.github.io/celebrity-astrology/",
          repo: "https://github.com/jonpfluger/celebrity-astrology"
        },
        {
            name: 'weather-dashboard',
            description: 'React/JavaScript/CSS',
            link: " https://jay-mm.github.io/weather-dashboard/",
            repo: "https://github.com/Jay-MM/weather-dashboard"
          },
      ]);
      
      return (
        <div>
          <div className="flex-row">
            {projects.map((project, idx) => (
              <Project
                project={project}
                key={"project" + idx}
              />
            ))}
          </div>
        </div>
        
      );
}
export default Portfolio