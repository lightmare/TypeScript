//// [enumNegativeLiteral1.ts]
enum E {
    a = -5, b, c
}


//// [enumNegativeLiteral1.js]
var E;
(function (E) {
    E[E[-5] = "a"] = -5;
    E[E[-4] = "b"] = -4;
    E[E[-3] = "c"] = -3;
})(E || (E = {}));
