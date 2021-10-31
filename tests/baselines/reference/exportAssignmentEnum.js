//// [tests/cases/compiler/exportAssignmentEnum.ts] ////

//// [exportAssignmentEnum_A.ts]
enum E {
	A,
	B,
	C,
}

export = E;

//// [exportAssignmentEnum_B.ts]
import EnumE = require("./exportAssignmentEnum_A");

var a = EnumE.A;
var b = EnumE.B;
var c = EnumE.C;

//// [exportAssignmentEnum_A.js]
"use strict";
var E;
(function (E) {
    E[E[0] = "A"] = 0;
    E[E[1] = "B"] = 1;
    E[E[2] = "C"] = 2;
})(E || (E = {}));
module.exports = E;
//// [exportAssignmentEnum_B.js]
"use strict";
exports.__esModule = true;
var EnumE = require("./exportAssignmentEnum_A");
var a = EnumE.A;
var b = EnumE.B;
var c = EnumE.C;
