//// [parserEnumDeclaration1.ts]
enum E {
  Foo = 1,
  Bar
}

//// [parserEnumDeclaration1.js]
var E;
(function () {
    this[this[1] = "Foo"] = 1;
    this[this[2] = "Bar"] = 2;
}.call(E || (E = {})));
