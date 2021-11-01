//// [validEnumAssignments.ts]
enum E {
    A,
    B
}

var n: number;
var a: any;
var e: E;

n = e;
n = E.A;

a = n;
a = e;
a = E.A;

e = e;
e = E.A;
e = E.B;
e = n;
e = null;
e = undefined;
e = 1;
e = 1.;
e = 1.0;
e = -1;

//// [validEnumAssignments.js]
var E;
(function () {
    this[this[0] = "A"] = 0;
    this[this[1] = "B"] = 1;
}.call(E || (E = {})));
var n;
var a;
var e;
n = e;
n = E.A;
a = n;
a = e;
a = E.A;
e = e;
e = E.A;
e = E.B;
e = n;
e = null;
e = undefined;
e = 1;
e = 1.;
e = 1.0;
e = -1;
