//// [parserEnum7.ts]
enum E {
  1, 2, 3
}

//// [parserEnum7.js]
var E;
(function () {
    this[this[0] = 1] = 0;
    this[this[1] = 2] = 1;
    this[this[2] = 3] = 2;
}.call(E || (E = {})));
