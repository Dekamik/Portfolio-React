import { IEmployer } from './IEmployer';

export interface IProject {
    name: string;
    role: string;
    description: string;
    customer?: string;
    employer?: IEmployer;
    technologies: string[];
    dateFrom: Date;
    dateTo?: Date;
    isHighlighted: boolean;
    show: boolean;
    category: "Work" | "Free-time";
}
