import moment from "moment";
import { MOMENTJS_SHORT_DATE_FORMAT } from "../../helpers/DateHelper";
import { IProject } from "./IProject";
import { ADSSETS, CYBERCOM_GROUP, SOPRA_STERIA, SVRVIVE_STUDIOS } from './EmployersData';

export const data: IProject[] = [
    {
        name: "Förvaltning - tandvårdsenheten",
        role: "Full-stack .NET Developer",
        description: "",
        customer: "Region Västmanland & Region Dalarna",
        technologies: [],
        dateFrom: moment("20200731", MOMENTJS_SHORT_DATE_FORMAT).toDate(),
        isHighlighted: false,
        show: true,
        category: "Work",
        employer: SOPRA_STERIA
    },
    {
        name: "Libretto 2.0",
        role: "Full-stack .NET Developer",
        description: "",
        customer: "Region Stockholm",
        technologies: [],
        dateFrom: moment("20200301", MOMENTJS_SHORT_DATE_FORMAT).toDate(),
        dateTo: moment("20200814", MOMENTJS_SHORT_DATE_FORMAT).toDate(),
        isHighlighted: false,
        show: true,
        category: "Work",
        employer: SOPRA_STERIA
    },
    {
        name: "Smidas",
        role: ".NET Developer",
        description: "",
        technologies: [],
        dateFrom: moment("20190115", MOMENTJS_SHORT_DATE_FORMAT).toDate(),
        dateTo: moment("20190815", MOMENTJS_SHORT_DATE_FORMAT).toDate(),
        isHighlighted: false,
        show: true,
        category: "Free-time"
    },
    {
        name: "CLASSIFIED",
        role: "Full-stack .NET Developer & DevOps",
        description: "",
        customer: "Rovio Entertainment Corporation",
        technologies: [],
        dateFrom: moment("20190411", MOMENTJS_SHORT_DATE_FORMAT).toDate(),
        dateTo: moment("20190627", MOMENTJS_SHORT_DATE_FORMAT).toDate(),
        isHighlighted: false,
        show: true,
        category: "Work",
        employer: SOPRA_STERIA
    },
    {
        name: "Autonomous stock analysis tool",
        role: "Python developer",
        description: "",
        technologies: [],
        dateFrom: moment("20190115", MOMENTJS_SHORT_DATE_FORMAT).toDate(),
        dateTo: moment("20190815", MOMENTJS_SHORT_DATE_FORMAT).toDate(),
        isHighlighted: false,
        show: true,
        category: "Free-time"
    },
    {
        name: "Kammarkollegiets tolkavropstjänst",
        role: "Full-stack .NET Developer",
        description: "",
        customer: "Kammarkollegiet",
        technologies: [],
        dateFrom: moment("20180615", MOMENTJS_SHORT_DATE_FORMAT).toDate(),
        dateTo: moment("20190411", MOMENTJS_SHORT_DATE_FORMAT).toDate(),
        isHighlighted: true,
        show: true,
        category: "Work",
        employer: SOPRA_STERIA
    },
    {
        name: "Krystal Kart AR",
        role: "NodeJS API Developer",
        description: "",
        technologies: [],
        dateFrom: moment("20180214", MOMENTJS_SHORT_DATE_FORMAT).toDate(),
        dateTo: moment("20180314", MOMENTJS_SHORT_DATE_FORMAT).toDate(),
        isHighlighted: false,
        show: true,
        category: "Work",
        employer: SVRVIVE_STUDIOS
    },
    {
        name: "Kartong - Death By Cardboard!",
        role: "Backend developer",
        description: "",
        technologies: [],
        dateFrom: moment("20170301", MOMENTJS_SHORT_DATE_FORMAT).toDate(),
        dateTo: moment("20180314", MOMENTJS_SHORT_DATE_FORMAT).toDate(),
        isHighlighted: false,
        show: true,
        category: "Work",
        employer: SVRVIVE_STUDIOS
    },
    {
        name: "CLASSIFIED",
        role: "Unity developer & Producer",
        description: "",
        technologies: [],
        dateFrom: moment("20170615", MOMENTJS_SHORT_DATE_FORMAT).toDate(),
        dateTo: moment("20171015", MOMENTJS_SHORT_DATE_FORMAT).toDate(),
        isHighlighted: false,
        show: true,
        category: "Work",
        employer: SVRVIVE_STUDIOS
    },
    {
        name: "SVRVIVE - The Deus Helix",
        role: "Unity developer",
        description: "",
        technologies: [],
        dateFrom: moment("20160808", MOMENTJS_SHORT_DATE_FORMAT).toDate(),
        dateTo: moment("20170915", MOMENTJS_SHORT_DATE_FORMAT).toDate(),
        isHighlighted: false,
        show: true,
        category: "Work",
        employer: SVRVIVE_STUDIOS
    },
    {
        name: "Cards and Loans",
        role: "Java developer",
        description: "",
        customer: "CrossKey",
        technologies: [],
        dateFrom: moment("20160515", MOMENTJS_SHORT_DATE_FORMAT).toDate(),
        dateTo: moment("20180808", MOMENTJS_SHORT_DATE_FORMAT).toDate(),
        isHighlighted: false,
        show: true,
        category: "Work",
        employer: CYBERCOM_GROUP
    },
    {
        name: "Data gatherer",
        role: "Java developer",
        description: "",
        technologies: [],
        dateFrom: moment("20140915", MOMENTJS_SHORT_DATE_FORMAT).toDate(),
        dateTo: moment("20160504", MOMENTJS_SHORT_DATE_FORMAT).toDate(),
        isHighlighted: false,
        show: true,
        category: "Work",
        employer: ADSSETS
    },
    {
        name: "Systems administration",
        role: "Sysadmin",
        description: "",
        technologies: [],
        dateFrom: moment("20140715", MOMENTJS_SHORT_DATE_FORMAT).toDate(),
        dateTo: moment("20160504", MOMENTJS_SHORT_DATE_FORMAT).toDate(),
        isHighlighted: false,
        show: true,
        category: "Work",
        employer: ADSSETS
    },
    {
        name: "Adsscore",
        role: "Java developer",
        description: "",
        technologies: [],
        dateFrom: moment("20140602", MOMENTJS_SHORT_DATE_FORMAT).toDate(),
        dateTo: moment("20160504", MOMENTJS_SHORT_DATE_FORMAT).toDate(),
        isHighlighted: false,
        show: true,
        category: "Work",
        employer: ADSSETS
    }
];