//// [declFileEnums.ts]
enum e1 {
    a,
    b,
    c
}

enum e2 {
    a = 10,
    b = a + 2,
    c = 10,
}

enum e3 {
    a = 10,
    b = Math.PI,
    c = a + 3
}

enum e4 {
    a,
    b,
    c,
    d = 10,
    e
}

enum e5 {
    "Friday",
    "Saturday",
    "Sunday",
    "Weekend days"
}




//// [declFileEnums.js]
var e1;
(function () {
    this[this[0] = "a"] = 0;
    this[this[1] = "b"] = 1;
    this[this[2] = "c"] = 2;
}.call(e1 || (e1 = {})));
var e2;
(function () {
    this[this[10] = "a"] = 10;
    this[this[12] = "b"] = 12;
    this[this[10] = "c"] = 10;
}.call(e2 || (e2 = {})));
var e3;
(function () {
    this[this[10] = "a"] = 10;
    this[this["b"] = Math.PI] = "b";
    this[this[13] = "c"] = 13;
}.call(e3 || (e3 = {})));
var e4;
(function () {
    this[this[0] = "a"] = 0;
    this[this[1] = "b"] = 1;
    this[this[2] = "c"] = 2;
    this[this[10] = "d"] = 10;
    this[this[11] = "e"] = 11;
}.call(e4 || (e4 = {})));
var e5;
(function () {
    this[this[0] = "Friday"] = 0;
    this[this[1] = "Saturday"] = 1;
    this[this[2] = "Sunday"] = 2;
    this[this[3] = "Weekend days"] = 3;
}.call(e5 || (e5 = {})));


//// [declFileEnums.d.ts]
declare enum e1 {
    a = 0,
    b = 1,
    c = 2
}
declare enum e2 {
    a = 10,
    b = 12,
    c = 10
}
declare enum e3 {
    a = 10,
    b,
    c = 13
}
declare enum e4 {
    a = 0,
    b = 1,
    c = 2,
    d = 10,
    e = 11
}
declare enum e5 {
    "Friday" = 0,
    "Saturday" = 1,
    "Sunday" = 2,
    "Weekend days" = 3
}
