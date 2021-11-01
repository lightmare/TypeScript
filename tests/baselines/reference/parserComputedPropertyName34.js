//// [parserComputedPropertyName34.ts]
enum E {
    // no ASI, comma expected
    [e] = id++,
    [e2] = 1
}

//// [parserComputedPropertyName34.js]
var E;
(function () {
    // no ASI, comma expected
    this[this[e] = id++] = e;
    this[this[e2] = 1] = e2;
}.call(E || (E = {})));
