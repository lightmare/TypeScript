//// [numberAssignableToEnum.ts]
enum E { A }
var n: number;
var e: E;
e = n;
n = e;

//// [numberAssignableToEnum.js]
var E;
(function (E) {
    E[E[0] = "A"] = 0;
})(E || (E = {}));
var n;
var e;
e = n;
n = e;
