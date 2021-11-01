//// [es3-oldStyleOctalLiteralInEnums.ts]
enum E {
  x = -01,
  y = 02,
}

//// [es3-oldStyleOctalLiteralInEnums.js]
var E;
(function () {
    this[this[-1] = "x"] = -1;
    this[this[2] = "y"] = 2;
}.call(E || (E = {})));
