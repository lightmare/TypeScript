//// [compoundAdditionAssignmentLHSCannotBeAssigned.ts]
// string can add every type, and result string cannot be assigned to below types
enum E { a, b, c }

var x1: boolean;
x1 += '';

var x2: number;
x2 += '';

var x3: E;
x3 += '';

var x4: {a: string};
x4 += '';

var x5: void;
x5 += '';

//// [compoundAdditionAssignmentLHSCannotBeAssigned.js]
// string can add every type, and result string cannot be assigned to below types
var E;
(function () {
    this[this[0] = "a"] = 0;
    this[this[1] = "b"] = 1;
    this[this[2] = "c"] = 2;
}.call(E || (E = {})));
var x1;
x1 += '';
var x2;
x2 += '';
var x3;
x3 += '';
var x4;
x4 += '';
var x5;
x5 += '';
