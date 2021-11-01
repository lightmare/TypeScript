//// [parserComputedPropertyName26.ts]
enum E {
    // No ASI
    [e] = 0
    [e2] = 1
}

//// [parserComputedPropertyName26.js]
var E;
(function () {
    // No ASI
    this[this[e] = 0[e2] = 1] = e;
}.call(E || (E = {})));
