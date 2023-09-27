import { useState } from 'react';
import ProjectList from './ProjectList';
import { MOCK_PROJECTS } from './MockProjects';
import { Project } from './Project';

function ProjectsPage() {
    const [projects, setProjects] = useState<Project[]>(MOCK_PROJECTS);

    const saveProject = (project: Project) => {
        let updatedProjects = projects.map((p: Project) => {
            return p.id === project.id ? project : p;
        });
        setProjects(updatedProjects);
    }

    return (
        <>
            <h1>Projects</h1>
            <ProjectList
                projects={projects}
                onSave={saveProject}
            />
        </>
    );
}

export default ProjectsPage;