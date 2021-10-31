//// [enumsWithMultipleDeclarations1.ts]
enum E {
  A
}

enum E {
  B
}

enum E {
  C
}

//// [enumsWithMultipleDeclarations1.js]
var E;
(function (E) {
    E[E[0] = "A"] = 0;
})(E || (E = {}));
(function (E) {
    E[E[0] = "B"] = 0;
})(E || (E = {}));
(function (E) {
    E[E[0] = "C"] = 0;
})(E || (E = {}));
