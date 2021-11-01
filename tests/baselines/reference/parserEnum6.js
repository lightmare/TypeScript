//// [parserEnum6.ts]
enum E {
  "A", "B", "C"
}

//// [parserEnum6.js]
var E;
(function () {
    this[this[0] = "A"] = 0;
    this[this[1] = "B"] = 1;
    this[this[2] = "C"] = 2;
}.call(E || (E = {})));
