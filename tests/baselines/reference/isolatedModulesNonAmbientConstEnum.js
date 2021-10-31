//// [file1.ts]
const enum E { X = 100 };
var e = E.X;
export var x;

//// [file1.js]
var E;
(function (E) {
    E[E[100] = "X"] = 100;
})(E || (E = {}));
;
var e = E.X;
export var x;
