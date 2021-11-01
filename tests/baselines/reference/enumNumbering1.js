//// [enumNumbering1.ts]
enum Test {
    A,
    B,
    C = Math.floor(Math.random() * 1000),
    D = 10,
    E // Error but shouldn't be
}


//// [enumNumbering1.js]
var Test;
(function () {
    this[this[0] = "A"] = 0;
    this[this[1] = "B"] = 1;
    this[this["C"] = Math.floor(Math.random() * 1000)] = "C";
    this[this[10] = "D"] = 10;
    this[this[11] = "E"] = 11; // Error but shouldn't be
}.call(Test || (Test = {})));
