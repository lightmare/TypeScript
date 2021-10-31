//// [enumsWithMultipleDeclarations3.ts]
module E {
}

enum E {
  A
}

//// [enumsWithMultipleDeclarations3.js]
var E;
(function (E) {
    E[E[0] = "A"] = 0;
})(E || (E = {}));
