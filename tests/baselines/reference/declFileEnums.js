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
(function (e1) {
    e1[e1[0] = "a"] = 0;
    e1[e1[1] = "b"] = 1;
    e1[e1[2] = "c"] = 2;
})(e1 || (e1 = {}));
var e2;
(function (e2) {
    e2[e2[10] = "a"] = 10;
    e2[e2[12] = "b"] = 12;
    e2[e2[10] = "c"] = 10;
})(e2 || (e2 = {}));
var e3;
(function (e3) {
    e3[e3[10] = "a"] = 10;
    e3[e3["b"] = Math.PI] = "b";
    e3[e3[13] = "c"] = 13;
})(e3 || (e3 = {}));
var e4;
(function (e4) {
    e4[e4[0] = "a"] = 0;
    e4[e4[1] = "b"] = 1;
    e4[e4[2] = "c"] = 2;
    e4[e4[10] = "d"] = 10;
    e4[e4[11] = "e"] = 11;
})(e4 || (e4 = {}));
var e5;
(function (e5) {
    e5[e5[0] = "Friday"] = 0;
    e5[e5[1] = "Saturday"] = 1;
    e5[e5[2] = "Sunday"] = 2;
    e5[e5[3] = "Weekend days"] = 3;
})(e5 || (e5 = {}));


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
