//// [parserComputedPropertyName16.ts]
enum E {
  [e] = 1
}

//// [parserComputedPropertyName16.js]
var E;
(function () {
    this[this[e] = 1] = e;
}.call(E || (E = {})));
