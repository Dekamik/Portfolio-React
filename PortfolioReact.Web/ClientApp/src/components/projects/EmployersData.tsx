import moment from 'moment';
import { MOMENTJS_SHORT_DATE_FORMAT } from "../../helpers/DateHelper";
import { IEmployer } from "./IEmployer";

export const SOPRA_STERIA: IEmployer = {
    name: "Sopra Steria",
    dateFrom: moment("20180314", MOMENTJS_SHORT_DATE_FORMAT).toDate()
};

export const SVRVIVE_STUDIOS: IEmployer = {
    name: "SVRVIVE Studios",
    dateFrom: moment("20160808", MOMENTJS_SHORT_DATE_FORMAT).toDate(),
    dateTo: moment("201803013", MOMENTJS_SHORT_DATE_FORMAT).toDate()
};

export const CYBERCOM_GROUP: IEmployer = {
    name: "Cybercom Group",
    dateFrom: moment("20160504", MOMENTJS_SHORT_DATE_FORMAT).toDate(),
    dateTo: moment("20160807", MOMENTJS_SHORT_DATE_FORMAT).toDate()
};

export const ADSSETS: IEmployer = {
    name: "Adssets",
    dateFrom: moment("20140602", MOMENTJS_SHORT_DATE_FORMAT).toDate(),
    dateTo: moment("20160504", MOMENTJS_SHORT_DATE_FORMAT).toDate()
}
