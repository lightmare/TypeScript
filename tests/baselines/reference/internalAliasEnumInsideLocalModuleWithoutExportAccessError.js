//// [internalAliasEnumInsideLocalModuleWithoutExportAccessError.ts]
export module a {
    export enum weekend {
        Friday,
        Saturday,
        Sunday
    }
}

export module c {
    import b = a.weekend;
    export var bVal: b = b.Sunday;
}

var happyFriday = c.b.Friday;

//// [internalAliasEnumInsideLocalModuleWithoutExportAccessError.js]
"use strict";
exports.__esModule = true;
exports.c = exports.a = void 0;
var a;
(function (a) {
    var weekend;
    (function () {
        this[this[0] = "Friday"] = 0;
        this[this[1] = "Saturday"] = 1;
        this[this[2] = "Sunday"] = 2;
    }.call(weekend = a.weekend || (a.weekend = {})));
})(a = exports.a || (exports.a = {}));
var c;
(function (c) {
    var b = a.weekend;
    c.bVal = b.Sunday;
})(c = exports.c || (exports.c = {}));
var happyFriday = c.b.Friday;
