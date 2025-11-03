import React from "react";
import ProjectCard from "./ProjectCard";
import { Link } from "react-router-dom";

function Projects(){
    const projectList = [
        {title: "OSA website", description: "I make a web for my team and my web is in Google."},
        {title: "restorant web", description: "i make this for landan pizza restorant ."},
        {title: "education web", description: "I make a web for our school or in shark-e-khorasan"},
        {title: "game web", description: " i make a web to have 30 game for people."},
    ]
    return(
        <section className="projects" id="projects">
            <h2>Projects</h2>
            {projectList.map( (project, index) =>(
                <ProjectCard key={index} {...project} />
            )
            )}
        </section>
    )
}

export default Projects;