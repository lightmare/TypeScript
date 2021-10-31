//// [decrementOperatorWithEnumType.ts]
// -- operator on enum type

enum ENUM1 { A, B, "" };

// expression
var ResultIsNumber1 = --ENUM1["A"];
var ResultIsNumber2 = ENUM1.A--;

// miss assignment operator
--ENUM1["A"];

ENUM1[A]--;


//// [decrementOperatorWithEnumType.js]
// -- operator on enum type
var ENUM1;
(function (ENUM1) {
    ENUM1[ENUM1[0] = "A"] = 0;
    ENUM1[ENUM1[1] = "B"] = 1;
    ENUM1[ENUM1[2] = ""] = 2;
})(ENUM1 || (ENUM1 = {}));
;
// expression
var ResultIsNumber1 = --ENUM1["A"];
var ResultIsNumber2 = ENUM1.A--;
// miss assignment operator
--ENUM1["A"];
ENUM1[A]--;
