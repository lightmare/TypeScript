//// [autonumberingInEnums.ts]
enum Foo {
    a = 1
}

enum Foo {
    b // should work fine
}

//// [autonumberingInEnums.js]
var Foo;
(function () {
    this[this[1] = "a"] = 1;
}.call(Foo || (Foo = {})));
(function () {
    this[this[0] = "b"] = 0; // should work fine
}.call(Foo || (Foo = {})));
