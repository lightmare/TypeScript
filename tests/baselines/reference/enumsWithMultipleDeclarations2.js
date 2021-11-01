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
(function () {
    this[this[0] = "A"] = 0;
}.call(E || (E = {})));
(function () {
    this[this[1] = "B"] = 1;
}.call(E || (E = {})));
(function () {
    this[this[0] = "C"] = 0;
}.call(E || (E = {})));
