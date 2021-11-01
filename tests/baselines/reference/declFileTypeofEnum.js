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
(function () {
    this[this[0] = "monday"] = 0;
    this[this[1] = "tuesday"] = 1;
    this[this[2] = "wednesday"] = 2;
    this[this[3] = "thursday"] = 3;
    this[this[4] = "friday"] = 4;
    this[this[5] = "saturday"] = 5;
    this[this[6] = "sunday"] = 6;
}.call(days || (days = {})));
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
