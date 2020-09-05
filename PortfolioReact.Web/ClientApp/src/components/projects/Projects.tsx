﻿import * as React from 'react';
import { IProject } from './IProject';
import { ProjectCard } from './ProjectCard';
import { ProjectsApi } from './ProjectsApi';

export const Projects: React.FunctionComponent = () => {

    const api = new ProjectsApi();

    const [projects, setProjects] = React.useState<IProject[]>([]);

    React.useEffect(() => {
        api.getProjects((data: IProject[]) => {
            setProjects(data);
        });
    }, [api]);

    return (
        <>
            {
                projects.map((project, i) =>
                    <ProjectCard key={i} project={project}/>
                )
            }
        </>
    );
}