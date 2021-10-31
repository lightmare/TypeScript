//// [es5-oldStyleOctalLiteralInEnums.ts]
enum E {
  x = -01,
  y = 02,
}

//// [es5-oldStyleOctalLiteralInEnums.js]
var E;
(function (E) {
    E[E[-1] = "x"] = -1;
    E[E[2] = "y"] = 2;
})(E || (E = {}));
