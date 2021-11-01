//// [enumConstantMembers.ts]
// Constant members allow negatives, but not decimals. Also hex literals are allowed
enum E1 {
    a = 1,
    b
}
enum E2 {
    a = - 1,
    b
}
enum E3 {
    a = 0.1,
    b // Error because 0.1 is not a constant
}

declare enum E4 {
    a = 1,
    b = -1,
    c = 0.1 // Not a constant
}

enum E5 {
    a = 1 / 0,
    b = 2 / 0.0,
    c = 1.0 / 0.0,
    d = 0.0 / 0.0,
    e = NaN,
    f = Infinity,
    g = -Infinity
}

const enum E6 {
    a = 1 / 0,
    b = 2 / 0.0,
    c = 1.0 / 0.0,
    d = 0.0 / 0.0,
    e = NaN,
    f = Infinity,
    g = -Infinity
}


//// [enumConstantMembers.js]
// Constant members allow negatives, but not decimals. Also hex literals are allowed
var E1;
(function () {
    this[this[1] = "a"] = 1;
    this[this[2] = "b"] = 2;
}.call(E1 || (E1 = {})));
var E2;
(function () {
    this[this[-1] = "a"] = -1;
    this[this[0] = "b"] = 0;
}.call(E2 || (E2 = {})));
var E3;
(function () {
    this[this[0.1] = "a"] = 0.1;
    this[this[1.1] = "b"] = 1.1; // Error because 0.1 is not a constant
}.call(E3 || (E3 = {})));
var E5;
(function () {
    this[this[Infinity] = "a"] = Infinity;
    this[this[Infinity] = "b"] = Infinity;
    this[this[Infinity] = "c"] = Infinity;
    this[this[NaN] = "d"] = NaN;
    this[this[NaN] = "e"] = NaN;
    this[this[Infinity] = "f"] = Infinity;
    this[this[-Infinity] = "g"] = -Infinity;
}.call(E5 || (E5 = {})));
