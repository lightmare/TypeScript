//// [parserEnumDeclaration1.ts]
enum E {
  Foo = 1,
  Bar
}

//// [parserEnumDeclaration1.js]
var E;
(function (E) {
    E[E[1] = "Foo"] = 1;
    E[E[2] = "Bar"] = 2;
})(E || (E = {}));
