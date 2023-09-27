import { Project } from "./Project";
interface ProjectCardProps {
    project: Project;
    onEdit: (project: Project) => void;
}

function formatDescription(description: string): string {
    return description.length > 60 ? description.substring(0, 60) + "..." : description;
}

function ProjectCard(props: ProjectCardProps) {
    const { project, onEdit } = props;
    const handleEditClick = (projectBeginEdit: Project) => {
        onEdit(projectBeginEdit);
    }
    return (
        <div className="card">
            <img src={project.imageUrl} alt={project.name}></img>
            <section className="section dark">
                <h5 className="strong">
                    <strong>{project.name}</strong>
                </h5>
                <p>{formatDescription(project.description)}</p>
                <p>Budget: {project.budget}</p>
            </section>
            <button className="bordered" onClick={() => {
                handleEditClick(project)
            }}
            >
                <span className="icon-edit"></span>
                Edit
            </button>
        </div>
    );
}

export default ProjectCard;