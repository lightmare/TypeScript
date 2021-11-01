//// [incrementOperatorWithEnumType.ts]
// ++ operator on enum type

enum ENUM1 { A, B, "" };

// expression
var ResultIsNumber1 = ++ENUM1["B"];
var ResultIsNumber2 = ENUM1.B++;

// miss assignment operator
++ENUM1["B"];

ENUM1.B++;

//// [incrementOperatorWithEnumType.js]
// ++ operator on enum type
var ENUM1;
(function () {
    this[this[0] = "A"] = 0;
    this[this[1] = "B"] = 1;
    this[this[2] = ""] = 2;
}.call(ENUM1 || (ENUM1 = {})));
;
// expression
var ResultIsNumber1 = ++ENUM1["B"];
var ResultIsNumber2 = ENUM1.B++;
// miss assignment operator
++ENUM1["B"];
ENUM1.B++;
