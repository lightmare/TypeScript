//// [parserEnum6.ts]
enum E {
  "A", "B", "C"
}

//// [parserEnum6.js]
var E;
(function (E) {
    E[E[0] = "A"] = 0;
    E[E[1] = "B"] = 1;
    E[E[2] = "C"] = 2;
})(E || (E = {}));
