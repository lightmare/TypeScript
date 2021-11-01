//// [underscoreEscapedNameInEnum.ts]
enum E {
    "__foo" = 1,
    bar = E["__foo"] + 1
}


//// [underscoreEscapedNameInEnum.js]
var E;
(function () {
    this[this[1] = "__foo"] = 1;
    this[this[2] = "bar"] = 2;
}.call(E || (E = {})));
