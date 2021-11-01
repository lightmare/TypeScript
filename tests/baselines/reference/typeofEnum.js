//// [typeofEnum.ts]
enum E {
    e1,
    e2
}

var e1: typeof E;
e1.e1;

//// [typeofEnum.js]
var E;
(function () {
    this[this[0] = "e1"] = 0;
    this[this[1] = "e2"] = 1;
}.call(E || (E = {})));
var e1;
e1.e1;
