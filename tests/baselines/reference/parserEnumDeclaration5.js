//// [parserEnumDeclaration5.ts]
enum E {
    A = 1,
    B,
    C = 2,
    D
}

//// [parserEnumDeclaration5.js]
var E;
(function (E) {
    E[E[1] = "A"] = 1;
    E[E[2] = "B"] = 2;
    E[E[2] = "C"] = 2;
    E[E[3] = "D"] = 3;
})(E || (E = {}));
