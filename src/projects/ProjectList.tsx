import React from "react";
import { Project } from "./Project";

interface ProjectListProps {
    projects: Project[];
}

function ProjectList({ projects }: ProjectListProps) {
    return (
        <div className="row">
            {projects.map((project) => (
                <div key={project.id} className="cols-sm">
                    <div className="card">
                        <img src={project.imageUrl} alt={project.name}></img>
                        <article className="section dark">
                            <h5 className="strong">
                                {project.name}
                            </h5>
                            <p>{project.description}</p>
                            <p>Budget: {project.budget.toString()}</p>
                        </article>
                    </div>
                </div>
            ))}
        </div>
        // <ul className="row">
        //     {projects.map((project) => (
        //         <li key={project.id}>{project.name}</li>
        //     ))}
        // </ul>
    );
}

export default ProjectList;