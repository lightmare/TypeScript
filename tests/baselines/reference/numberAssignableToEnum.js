//// [numberAssignableToEnum.ts]
enum E { A }
var n: number;
var e: E;
e = n;
n = e;

//// [numberAssignableToEnum.js]
var E;
(function () {
    this[this[0] = "A"] = 0;
}.call(E || (E = {})));
var n;
var e;
e = n;
n = e;
