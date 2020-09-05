export interface IProject {
    name: string;
    role: string;
    description: string;
    customer?: string;
    employer?: string;
    technologies: string[];
    dateFrom: Date;
    dateTo?: Date;
    isHighlighted: boolean;
    category: "Work" | "Free-time";
}
