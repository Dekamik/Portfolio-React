import * as React from 'react';
import { IProject } from './IProject';
import { dateToYearMonthString } from './../../helpers/DateHelper';
import { Badge } from './../common/Badge';

interface IProjectCard {
    project: IProject;
}

export const ProjectCard: React.FunctionComponent<IProjectCard> = ({ project }) => {
    return (
        <div className="card project-card">
            <div className="card-header">
                {project.category === "Free-time" ? `${project.category}` : `${project.employer?.name}`}
                <span className="float-right">{dateToYearMonthString(project.dateFrom)} - {project.dateTo ? dateToYearMonthString(project.dateTo) : "today"}</span>
            </div>
            <div className="card-body">
                <h5 className="card-title">{project.customer ? `${project.name} at ${project.customer}` : `${project.name}`}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{project.role}</h6>
                <p className="card-text">{project.description}</p>
            </div>
            <div className="card-footer">
                {
                    project.technologies.map((tech, i) =>
                        <Badge key={i}>{tech}</Badge>
                    )
                }
            </div>
        </div>
    );
}