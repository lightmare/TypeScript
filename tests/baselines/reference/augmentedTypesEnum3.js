//// [augmentedTypesEnum3.ts]
module E {
    var t;
}
enum E { }

enum F { }
module F { var t; }

module A {
    var o;
}
enum A {
    b
}
enum A {
    c
}
module A {
    var p;
}

//// [augmentedTypesEnum3.js]
var E;
(function (E) {
    var t;
})(E || (E = {}));
E || (E = {});
var F;
F || (F = {});
(function (F) {
    var t;
})(F || (F = {}));
var A;
(function (A) {
    var o;
})(A || (A = {}));
(function (A) {
    A[A[0] = "b"] = 0;
})(A || (A = {}));
(function (A) {
    A[A[0] = "c"] = 0;
})(A || (A = {}));
(function (A) {
    var p;
})(A || (A = {}));
