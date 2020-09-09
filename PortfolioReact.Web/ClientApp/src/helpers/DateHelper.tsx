import moment from 'moment';

export const dateToString = (date: Date) => new Date(date).toLocaleDateString("sv-SE");
export const dateToYearMonthString = (date: Date) => moment(date).format("YYYY-MM");
export const MOMENTJS_SHORT_DATE_FORMAT = "YYYYMMDD";