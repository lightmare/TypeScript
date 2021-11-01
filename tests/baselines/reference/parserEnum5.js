//// [parserEnum5.ts]
enum E2 { a, }
enum E3 { a: 1, }
enum E1 { a, b: 1, c, d: 2 = 3 }

//// [parserEnum5.js]
var E2;
(function () {
    this[this[0] = "a"] = 0;
}.call(E2 || (E2 = {})));
var E3;
(function () {
    this[this[0] = "a"] = 0;
    this[this[1] = 1] = 1;
}.call(E3 || (E3 = {})));
var E1;
(function () {
    this[this[0] = "a"] = 0;
    this[this[1] = "b"] = 1;
    this[this[2] = 1] = 2;
    this[this[3] = "c"] = 3;
    this[this[4] = "d"] = 4;
    this[this[3] = 2] = 3;
}.call(E1 || (E1 = {})));
