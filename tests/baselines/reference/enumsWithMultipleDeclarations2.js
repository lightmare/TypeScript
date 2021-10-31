//// [enumsWithMultipleDeclarations2.ts]
enum E {
  A
}

enum E {
  B = 1
}

enum E {
  C
}

//// [enumsWithMultipleDeclarations2.js]
var E;
(function (E) {
    E[E[0] = "A"] = 0;
})(E || (E = {}));
(function (E) {
    E[E[1] = "B"] = 1;
})(E || (E = {}));
(function (E) {
    E[E[0] = "C"] = 0;
})(E || (E = {}));
