//// [logicalNotOperatorWithEnumType.ts]
// ! operator on enum type

enum ENUM { A, B, C };
enum ENUM1 { };

// enum type var
var ResultIsBoolean1 = !ENUM;

// enum type expressions
var ResultIsBoolean2 = !ENUM["B"];
var ResultIsBoolean3 = !(ENUM.B + ENUM["C"]);

// multiple ! operators
var ResultIsBoolean4 = !!ENUM;
var ResultIsBoolean5 = !!!(ENUM["B"] + ENUM.C);

// miss assignment operators
!ENUM;
!ENUM1;
!ENUM.B;
!ENUM, ENUM1;

//// [logicalNotOperatorWithEnumType.js]
// ! operator on enum type
var ENUM;
(function () {
    this[this[0] = "A"] = 0;
    this[this[1] = "B"] = 1;
    this[this[2] = "C"] = 2;
}.call(ENUM || (ENUM = {})));
;
var ENUM1;
ENUM1 || (ENUM1 = {});
;
// enum type var
var ResultIsBoolean1 = !ENUM;
// enum type expressions
var ResultIsBoolean2 = !ENUM["B"];
var ResultIsBoolean3 = !(ENUM.B + ENUM["C"]);
// multiple ! operators
var ResultIsBoolean4 = !!ENUM;
var ResultIsBoolean5 = !!!(ENUM["B"] + ENUM.C);
// miss assignment operators
!ENUM;
!ENUM1;
!ENUM.B;
!ENUM, ENUM1;
