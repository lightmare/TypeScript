//// [incrementOperatorWithEnumTypeInvalidOperations.ts]
// ++ operator on enum type

enum ENUM { };
enum ENUM1 { A, B, "" };

// enum type var
var ResultIsNumber1 = ++ENUM;
var ResultIsNumber2 = ++ENUM1;

var ResultIsNumber3 = ENUM++;
var ResultIsNumber4 = ENUM1++;

// enum type expressions
var ResultIsNumber5 = ++(ENUM[1] + ENUM[2]);
var ResultIsNumber6 = (ENUM[1] + ENUM[2])++;

// miss assignment operator
++ENUM;
++ENUM1;

ENUM++;
ENUM1++;

//// [incrementOperatorWithEnumTypeInvalidOperations.js]
// ++ operator on enum type
var ENUM;
ENUM || (ENUM = {});
;
var ENUM1;
(function () {
    this[this[0] = "A"] = 0;
    this[this[1] = "B"] = 1;
    this[this[2] = ""] = 2;
}.call(ENUM1 || (ENUM1 = {})));
;
// enum type var
var ResultIsNumber1 = ++ENUM;
var ResultIsNumber2 = ++ENUM1;
var ResultIsNumber3 = ENUM++;
var ResultIsNumber4 = ENUM1++;
// enum type expressions
var ResultIsNumber5 = ++(ENUM[1] + ENUM[2]);
var ResultIsNumber6 = (ENUM[1] + ENUM[2])++;
// miss assignment operator
++ENUM;
++ENUM1;
ENUM++;
ENUM1++;
