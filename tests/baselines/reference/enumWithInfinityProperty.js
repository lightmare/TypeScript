//// [enumWithInfinityProperty.ts]
enum A {
    Infinity = 1
}


//// [enumWithInfinityProperty.js]
var A;
(function (A) {
    A[A[1] = "Infinity"] = 1;
})(A || (A = {}));
