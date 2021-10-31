//// [parserEnumDeclaration6.ts]
enum E {
    A = 1,
    B,
    C = 1 << 1,
    D,
}

//// [parserEnumDeclaration6.js]
var E;
(function (E) {
    E[E[1] = "A"] = 1;
    E[E[2] = "B"] = 2;
    E[E[2] = "C"] = 2;
    E[E[3] = "D"] = 3;
})(E || (E = {}));
