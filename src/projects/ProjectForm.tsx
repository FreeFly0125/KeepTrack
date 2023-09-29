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
    const [error, setError] = useState({
        name: '',
        description: '',
        budget: ''
    });

    const handleSubmit = (event: any) => {
        event.preventDefault();
        if (!isValid()) return;
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
        setError(() => validate(updatedProject));
    }

    const validate = (project: Project) => {
        let newError: any = { name: '', description: '', budget: '' };
        if (project.name.length === 0) {
            newError.name = "Name in required!";
        }
        else if (project.name.length < 3) {
            newError.name = "Name needs to be more than 3 characters";
        }
        if (project.description.length === 0) {
            newError.description = "Description is required!";
        }
        if (project.budget === 0) {
            newError.budget = "Budget must be more than $0";
        }
        return newError;
    }

    const isValid = () => (error.name.length === 0 && error.description.length === 0 && error.budget.length === 0);

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
            {error.name.length > 0 && (
                <div className="card error">
                    <p>{error.name}</p>
                </div>
            )}

            <label htmlFor="description">Project Description</label>
            <textarea
                name="description"
                placeholder="enter description"
                value={project.description}
                onChange={handleChange}
            />
            {error.description.length > 0 && (
                <div className="card error">
                    <p>{error.description}</p>
                </div>
            )}

            <label htmlFor="budget">Project Budget</label>
            <input
                type="text"
                name="budget"
                placeholder="enter budget"
                value={project.budget}
                onChange={handleChange}
            />
            {error.budget.length > 0 && (
                <div className="card error">
                    <p>{error.budget}</p>
                </div>
            )}

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

