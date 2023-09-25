import React from "react";

interface ProjectFormProps {
    onCancel: () => void;
}

function ProjectForm(props: ProjectFormProps) {
    const { onCancel } = props;

    return (
        <form className="input-group vertical">
            <label htmlFor="name">Project Name</label>
            <input type="text" name="name" placeholder="enter name"></input>
            <label htmlFor="description">Project Description</label>
            <textarea name="description" placeholder="enter description"></textarea>
            <label htmlFor="budget">Project Budget</label>
            <input type="text" name="budget" placeholder="enter budget"></input>
            <label htmlFor="isActive">Active?</label>
            <input type="checkbox" name="isActive"></input>
            <div className="input-group">
                <button className="primary bordered medium">Save</button>
                <span />
                <button className="bordered medium" onClick={onCancel}>Cancel</button>
            </div>
        </form>
    );
}

export default ProjectForm;