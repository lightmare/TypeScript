//// [strictModeEnumMemberNameReserved.ts]
"use strict";
enum E {
    static
}

const x1: E.static = E.static;


//// [strictModeEnumMemberNameReserved.js]
"use strict";
var E;
(function () {
    this[this[0] = "static"] = 0;
}.call(E || (E = {})));
var x1 = E.static;
