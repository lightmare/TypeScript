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
(function () {
    this[this[0] = "a"] = 0;
    this[this[0] = "b"] = 0;
}.call(E || (E = {})));
(function () {
    this[this[0] = "c"] = 0;
}.call(E || (E = {})));
