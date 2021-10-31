//// [autonumberingInEnums.ts]
enum Foo {
    a = 1
}

enum Foo {
    b // should work fine
}

//// [autonumberingInEnums.js]
var Foo;
(function (Foo) {
    Foo[Foo[1] = "a"] = 1;
})(Foo || (Foo = {}));
(function (Foo) {
    Foo[Foo[0] = "b"] = 0; // should work fine
})(Foo || (Foo = {}));
