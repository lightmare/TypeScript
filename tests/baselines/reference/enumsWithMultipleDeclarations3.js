//// [enumsWithMultipleDeclarations3.ts]
module E {
}

enum E {
  A
}

//// [enumsWithMultipleDeclarations3.js]
var E;
(function () {
    this[this[0] = "A"] = 0;
}.call(E || (E = {})));
