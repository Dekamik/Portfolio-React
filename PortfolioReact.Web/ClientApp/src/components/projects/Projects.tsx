import * as React from 'react';
import { IProject } from './IProject';
import { ProjectCard } from './ProjectCard';
import { ProjectsApi } from './ProjectsApi';
import { Spinner } from './../common/Spinner';
import { data } from './ProjectsDummyData';

export const Projects: React.FunctionComponent = () => {

    const api = new ProjectsApi();

    const [projects, setProjects] = React.useState<IProject[]>([]);
    const [isLoading, setIsLoading] = React.useState<boolean>(true);

    /* HACK: Uncomment when implemented
    React.useEffect(() => {
        api.getProjects(
            (data: IProject[]) => {
                setProjects(data);
            },
            (message: string) => {
                console.log(message);
            },
            () => {
                setIsLoading(false);
            }
        );
    }, [api]);*/

    // HACK: Using hard-coded dummy data for MVP
    React.useEffect(() => {
        setProjects(data);
        setIsLoading(false);
    });

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