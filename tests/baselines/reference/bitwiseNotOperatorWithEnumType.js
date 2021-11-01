//// [bitwiseNotOperatorWithEnumType.ts]
// ~ operator on enum type

enum ENUM1 { A, B, "" };

// enum type var
var ResultIsNumber1 = ~ENUM1;

// enum type expressions
var ResultIsNumber2 = ~ENUM1["A"];
var ResultIsNumber3 = ~(ENUM1.A + ENUM1["B"]);

// multiple ~ operators
var ResultIsNumber4 = ~~~(ENUM1["A"] + ENUM1.B);

// miss assignment operators
~ENUM1;
~ENUM1["A"];
~ENUM1.A, ~ENUM1["B"];

//// [bitwiseNotOperatorWithEnumType.js]
// ~ operator on enum type
var ENUM1;
(function () {
    this[this[0] = "A"] = 0;
    this[this[1] = "B"] = 1;
    this[this[2] = ""] = 2;
}.call(ENUM1 || (ENUM1 = {})));
;
// enum type var
var ResultIsNumber1 = ~ENUM1;
// enum type expressions
var ResultIsNumber2 = ~ENUM1["A"];
var ResultIsNumber3 = ~(ENUM1.A + ENUM1["B"]);
// multiple ~ operators
var ResultIsNumber4 = ~~~(ENUM1["A"] + ENUM1.B);
// miss assignment operators
~ENUM1;
~ENUM1["A"];
~ENUM1.A, ~ENUM1["B"];
