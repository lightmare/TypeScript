//// [parserEnum5.ts]
enum E2 { a, }
enum E3 { a: 1, }
enum E1 { a, b: 1, c, d: 2 = 3 }

//// [parserEnum5.js]
var E2;
(function (E2) {
    E2[E2[0] = "a"] = 0;
})(E2 || (E2 = {}));
var E3;
(function (E3) {
    E3[E3[0] = "a"] = 0;
    E3[E3[1] = 1] = 1;
})(E3 || (E3 = {}));
var E1;
(function (E1) {
    E1[E1[0] = "a"] = 0;
    E1[E1[1] = "b"] = 1;
    E1[E1[2] = 1] = 2;
    E1[E1[3] = "c"] = 3;
    E1[E1[4] = "d"] = 4;
    E1[E1[3] = 2] = 3;
})(E1 || (E1 = {}));
