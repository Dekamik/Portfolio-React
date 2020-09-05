export interface IProject {
    name: string;
    role: string;
    description: string;
    customer?: string;
    employer: string;
    technologies: string[];
    dateFrom: string;
    dateTo?: string;
    isHighlighted: boolean;
    category: "Work" | "Free-time";
}
