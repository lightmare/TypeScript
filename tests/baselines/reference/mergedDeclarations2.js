//// [mergedDeclarations2.ts]
enum Foo {
    b
}
enum Foo {
    a = b
}

module Foo {
    export var x = b
}

//// [mergedDeclarations2.js]
var Foo;
(function (Foo) {
    Foo[Foo[0] = "b"] = 0;
})(Foo || (Foo = {}));
(function (Foo) {
    Foo[Foo[0] = "a"] = 0;
})(Foo || (Foo = {}));
(function (Foo) {
    Foo.x = b;
})(Foo || (Foo = {}));
