//// [enumWithNaNProperty.ts]
enum A {
    NaN = 1
}


//// [enumWithNaNProperty.js]
var A;
(function (A) {
    A[A[1] = "NaN"] = 1;
})(A || (A = {}));
