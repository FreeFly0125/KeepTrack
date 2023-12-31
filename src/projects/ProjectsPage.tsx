import { useState, useEffect } from 'react';
import ProjectList from './ProjectList';
import { MOCK_PROJECTS } from './MockProjects';
import { Project } from './Project';
import { projectAPI } from './ProjectAPI';

function ProjectsPage() {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | undefined>(undefined);

    useEffect(() => {
        async function loadProjects() {
            setLoading(true);
            try {
                const data = await projectAPI.get(1);
                setError('');
                setProjects(data);
            } catch (e) {
                if (e instanceof Error) {
                    setError(e.message);
                }
            } finally {
                setLoading(false);
            }
        }
        loadProjects();
    }, []);

    const saveProject = (project: Project) => {
        projectAPI.put(project).then((updatedProject) => {
            let updatedProjects = projects.map((p) => {
                return p.id === project.id ? new Project(updatedProject) : p;
            });
            setProjects(updatedProjects);
        }).catch((error) => {
            if (error instanceof Error) {
                setError(error.message);
            }
        });
    }

    return (
        <>
            <h1>Projects</h1>
            {error && (
                <div className='row'>
                    <div className='card large error'>
                        <section>
                            <p>
                                <span className='icon-alert inverse'></span>
                                {error}
                            </p>
                        </section>
                    </div>
                </div>
            )}
            <ProjectList
                projects={projects}
                onSave={saveProject}
            />
            {loading && (
                <div className='center-page'>
                    <span className='spinner primary'></span>
                    <p>Loading...</p>
                </div>
            )}
        </>
    );
}

export default ProjectsPage;