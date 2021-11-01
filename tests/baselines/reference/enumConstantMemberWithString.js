//// [enumConstantMemberWithString.ts]
enum T1 {
    a = "1",
    b = "1" + "2",
    c = "1" + "2" + "3",
    d = "a" - "a",
    e = "a" + 1
}

enum T2 {
    a = "1",
    b = "1" + "2"
}

enum T3 {
    a = "1",
    b = "1" + "2",
    c = 1,
    d = 1 + 2
}

enum T4 {
    a = "1"
}

enum T5 {
    a = "1" + "2"
}

declare enum T6 {
    a = "1",
    b = "1" + "2"
}


//// [enumConstantMemberWithString.js]
var T1;
(function () {
    this["a"] = "1";
    this["b"] = "12";
    this["c"] = "123";
    this[this[0] = "d"] = 0;
    this[this[0] = "e"] = 0;
}.call(T1 || (T1 = {})));
var T2;
(function () {
    this["a"] = "1";
    this["b"] = "12";
}.call(T2 || (T2 = {})));
var T3;
(function () {
    this["a"] = "1";
    this["b"] = "12";
    this[this[1] = "c"] = 1;
    this[this[0] = "d"] = 0;
}.call(T3 || (T3 = {})));
var T4;
(function () {
    this["a"] = "1";
}.call(T4 || (T4 = {})));
var T5;
(function () {
    this["a"] = "12";
}.call(T5 || (T5 = {})));
