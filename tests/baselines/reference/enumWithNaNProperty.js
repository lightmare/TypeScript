//// [enumWithNaNProperty.ts]
enum A {
    NaN = 1
}


//// [enumWithNaNProperty.js]
var A;
(function () {
    this[this[1] = "NaN"] = 1;
}.call(A || (A = {})));
