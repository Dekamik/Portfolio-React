import * as React from 'react';
import { IProject } from './IProject';
import { ProjectCard } from './ProjectCard';

export const Projects: React.FunctionComponent = () => {

    const [projects, setProjects] = React.useState<IProject[]>([]);

    React.useEffect(() => {
        setProjects([
            {
                name: "AnyProject1",
                role: "AnyRole",
                description: "AnyDescription",
                customer: "AnyCustomer",
                technologies: ["AnyTech1", "AnyTech2"],
                dateFrom: "2020-01-01",
                dateTo: "2020-02-01",
                isHighlighted: true,
                category: "Work",
                employer: "AnyEmployer"
            },
            {
                name: "AnyProject2",
                role: "AnyRole",
                description: "AnyDescription",
                customer: "AnyCustomer",
                technologies: ["AnyTech1", "AnyTech2"],
                dateFrom: "2020-02-01",
                dateTo: "2020-03-01",
                isHighlighted: false,
                category: "Work",
                employer: "AnyEmployer"
            }
        ]);
    }, []);

    return (
        <>
            {
                projects.map((project) => 
                    <ProjectCard project={project}/>
                )
            }
        </>
    );
}