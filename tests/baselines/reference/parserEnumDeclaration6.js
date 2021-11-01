//// [parserEnumDeclaration6.ts]
enum E {
    A = 1,
    B,
    C = 1 << 1,
    D,
}

//// [parserEnumDeclaration6.js]
var E;
(function () {
    this[this[1] = "A"] = 1;
    this[this[2] = "B"] = 2;
    this[this[2] = "C"] = 2;
    this[this[3] = "D"] = 3;
}.call(E || (E = {})));
