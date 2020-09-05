import * as React from 'react';
import { IProject } from './IProject';

interface IProjectCard {
    project: IProject;
}

export const ProjectCard: React.FunctionComponent<IProjectCard> = ({ project }) => {
    return (
        <div className="card project-card">
            <div className="card-header">
                {project.customer}
            </div>
            <div className="card-body">
                <h5 className="card-title">{project.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{project.role}</h6>
                <p className="card-text">{project.description}</p>
            </div>
            <div className="card-footer">
                {project.technologies.map(tech => 
                    <>
                        <span className="badge badge-primary">{tech}</span>
                        <span>&nbsp;</span>
                    </>
                )}
            </div>
        </div>
    );
}