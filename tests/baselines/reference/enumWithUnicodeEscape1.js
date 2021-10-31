//// [enumWithUnicodeEscape1.ts]
enum E {
  'gold \u2730'
}


//// [enumWithUnicodeEscape1.js]
var E;
(function (E) {
    E[E[0] = "gold \u2730"] = 0;
})(E || (E = {}));
