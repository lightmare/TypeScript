//// [compoundArithmeticAssignmentLHSCanBeAssigned.ts]
enum E { a, b, c }

var a: any;
var b: number;
var c: E;

var x1: any;
x1 *= a;
x1 *= b;
x1 *= c;
x1 *= null;
x1 *= undefined;

var x2: number;
x2 *= a;
x2 *= b;
x2 *= c;
x2 *= null;
x2 *= undefined;

var x3: E;
x3 *= a;
x3 *= b;
x3 *= c;
x3 *= null;
x3 *= undefined;

//// [compoundArithmeticAssignmentLHSCanBeAssigned.js]
var E;
(function (E) {
    E[E[0] = "a"] = 0;
    E[E[1] = "b"] = 1;
    E[E[2] = "c"] = 2;
})(E || (E = {}));
var a;
var b;
var c;
var x1;
x1 *= a;
x1 *= b;
x1 *= c;
x1 *= null;
x1 *= undefined;
var x2;
x2 *= a;
x2 *= b;
x2 *= c;
x2 *= null;
x2 *= undefined;
var x3;
x3 *= a;
x3 *= b;
x3 *= c;
x3 *= null;
x3 *= undefined;
