//// [parserES5ComputedPropertyName6.ts]
enum E {
  [e] = 1
}

//// [parserES5ComputedPropertyName6.js]
var E;
(function () {
    this[this[e] = 1] = e;
}.call(E || (E = {})));
