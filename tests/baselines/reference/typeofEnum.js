//// [typeofEnum.ts]
enum E {
    e1,
    e2
}

var e1: typeof E;
e1.e1;

//// [typeofEnum.js]
var E;
(function (E) {
    E[E[0] = "e1"] = 0;
    E[E[1] = "e2"] = 1;
})(E || (E = {}));
var e1;
e1.e1;
