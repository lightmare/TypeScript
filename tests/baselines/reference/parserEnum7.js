//// [parserEnum7.ts]
enum E {
  1, 2, 3
}

//// [parserEnum7.js]
var E;
(function (E) {
    E[E[0] = 1] = 0;
    E[E[1] = 2] = 1;
    E[E[2] = 3] = 2;
})(E || (E = {}));
