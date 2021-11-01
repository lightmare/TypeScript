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
(function () {
    this[this[0] = "A"] = 0;
}.call(E || (E = {})));
(function () {
    this[this[0] = "B"] = 0;
}.call(E || (E = {})));
(function () {
    this[this[0] = "C"] = 0;
}.call(E || (E = {})));
