//// [enumNegativeLiteral1.ts]
enum E {
    a = -5, b, c
}


//// [enumNegativeLiteral1.js]
var E;
(function () {
    this[this[-5] = "a"] = -5;
    this[this[-4] = "b"] = -4;
    this[this[-3] = "c"] = -3;
}.call(E || (E = {})));
