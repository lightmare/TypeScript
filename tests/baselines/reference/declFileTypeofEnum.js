//// [declFileTypeofEnum.ts]
enum days {
    monday,
    tuesday,
    wednesday,
    thursday,
    friday,
    saturday,
    sunday
}

var weekendDay = days.saturday;
var daysOfMonth = days;
var daysOfYear: typeof days;

//// [declFileTypeofEnum.js]
var days;
(function (days) {
    days[days[0] = "monday"] = 0;
    days[days[1] = "tuesday"] = 1;
    days[days[2] = "wednesday"] = 2;
    days[days[3] = "thursday"] = 3;
    days[days[4] = "friday"] = 4;
    days[days[5] = "saturday"] = 5;
    days[days[6] = "sunday"] = 6;
})(days || (days = {}));
var weekendDay = days.saturday;
var daysOfMonth = days;
var daysOfYear;


//// [declFileTypeofEnum.d.ts]
declare enum days {
    monday = 0,
    tuesday = 1,
    wednesday = 2,
    thursday = 3,
    friday = 4,
    saturday = 5,
    sunday = 6
}
declare var weekendDay: days;
declare var daysOfMonth: typeof days;
declare var daysOfYear: typeof days;
