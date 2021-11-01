//// [enumWithInfinityProperty.ts]
enum A {
    Infinity = 1
}


//// [enumWithInfinityProperty.js]
var A;
(function () {
    this[this[1] = "Infinity"] = 1;
}.call(A || (A = {})));
