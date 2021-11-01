//// [validNumberAssignments.ts]
var x = 1;

var a: any = x;
var b: Object = x;
var c: number = x;
enum E { A };
var d: E = x;
var e = E.A;
e = x;

//// [validNumberAssignments.js]
var x = 1;
var a = x;
var b = x;
var c = x;
var E;
(function () {
    this[this[0] = "A"] = 0;
}.call(E || (E = {})));
;
var d = x;
var e = E.A;
e = x;
