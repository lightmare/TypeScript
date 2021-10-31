//// [mergedEnumDeclarationCodeGen.ts]
enum E {
    a,
    b = a
}
enum E {
    c = a
}

//// [mergedEnumDeclarationCodeGen.js]
var E;
(function (E) {
    E[E[0] = "a"] = 0;
    E[E[0] = "b"] = 0;
})(E || (E = {}));
(function (E) {
    E[E[0] = "c"] = 0;
})(E || (E = {}));
