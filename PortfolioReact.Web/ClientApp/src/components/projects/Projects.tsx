import * as React from 'react';
import { IProject } from './IProject';
import { ProjectCard } from './ProjectCard';
import { ProjectsApi } from './ProjectsApi';
import { Spinner } from './../common/Spinner';

export const Projects: React.FunctionComponent = () => {

    const api = new ProjectsApi();

    const [projects, setProjects] = React.useState<IProject[]>([]);
    const [isLoading, setIsLoading] = React.useState<boolean>(true);

    React.useEffect(() => {
        api.getProjects(
            (data: IProject[]) => {
                setProjects(data);
            },
            (message: string) => {

            },
            () => {
                setIsLoading(false);
            }
        );
    }, [api]);

    return (
        <Spinner isLoading={isLoading}>
            {
                projects.map((project, i) =>
                    <ProjectCard key={i} project={project}/>
                )
            }
        </Spinner>
    );
}