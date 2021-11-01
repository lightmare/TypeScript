//// [parserEnumDeclaration5.ts]
enum E {
    A = 1,
    B,
    C = 2,
    D
}

//// [parserEnumDeclaration5.js]
var E;
(function () {
    this[this[1] = "A"] = 1;
    this[this[2] = "B"] = 2;
    this[this[2] = "C"] = 2;
    this[this[3] = "D"] = 3;
}.call(E || (E = {})));
