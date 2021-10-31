//// [underscoreEscapedNameInEnum.ts]
enum E {
    "__foo" = 1,
    bar = E["__foo"] + 1
}


//// [underscoreEscapedNameInEnum.js]
var E;
(function (E) {
    E[E[1] = "__foo"] = 1;
    E[E[2] = "bar"] = 2;
})(E || (E = {}));
