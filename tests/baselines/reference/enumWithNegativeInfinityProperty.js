//// [enumWithNegativeInfinityProperty.ts]
enum A {
    "-Infinity" = 1
}


//// [enumWithNegativeInfinityProperty.js]
var A;
(function (A) {
    A[A[1] = "-Infinity"] = 1;
})(A || (A = {}));
