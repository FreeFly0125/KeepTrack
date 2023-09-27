import { useState } from "react";
import { Project } from "./Project";
interface ProjectFormProps {
    project: Project;
    onSave: (project: Project) => void;
    onCancel: () => void;
}

function ProjectForm(props: ProjectFormProps) {
    const { project: initialProject,
        onSave,
        onCancel
    } = props;

    const [project, setProject] = useState(initialProject);

    const handleSubmit = (event: any) => {
        event.preventDefault();
        onSave(project);
    };

    const handleChange = (event: any) => {
        const { type, name, value, checked } = event.target;

        let updatedValue = type === 'checkbox' ? checked : value;

        if (type === 'number') {
            updatedValue = Number(updatedValue);
        }

        const change = {
            [name]: updatedValue,
        };

        let updatedProject: Project;

        setProject((p) => {
            updatedProject = new Project({ ...p, ...change });
            return updatedProject;
        });

    }

    return (
        <form className="input-group vertical" onSubmit={handleSubmit}>
            <label htmlFor="name">Project Name</label>
            <input
                type="text"
                name="name"
                placeholder="enter name"
                value={project.name}
                onChange={handleChange}
            />

            <label htmlFor="description">Project Description</label>
            <textarea
                name="description"
                placeholder="enter description"
                value={project.description}
                onChange={handleChange}
            />

            <label htmlFor="budget">Project Budget</label>
            <input
                type="text"
                name="budget"
                placeholder="enter budget"
                value={project.budget}
                onChange={handleChange}
            />

            <label htmlFor="isActive">Active?</label>
            <input
                type="checkbox"
                name="isActive"
                checked={project.isActive}
                onChange={handleChange}
            />

            <div className="input-group">
                <button className="primary bordered medium">Save</button>
                <span />
                <button className="bordered medium" onClick={onCancel}>Cancel</button>
            </div>
        </form>
    );
}

export default ProjectForm;

