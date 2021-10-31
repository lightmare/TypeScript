//// [internalAliasEnumInsideLocalModuleWithoutExport.ts]
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


//// [internalAliasEnumInsideLocalModuleWithoutExport.js]
"use strict";
exports.__esModule = true;
exports.c = exports.a = void 0;
var a;
(function (a) {
    var weekend;
    (function (weekend) {
        weekend[weekend[0] = "Friday"] = 0;
        weekend[weekend[1] = "Saturday"] = 1;
        weekend[weekend[2] = "Sunday"] = 2;
    })(weekend = a.weekend || (a.weekend = {}));
})(a = exports.a || (exports.a = {}));
var c;
(function (c) {
    var b = a.weekend;
    c.bVal = b.Sunday;
})(c = exports.c || (exports.c = {}));


//// [internalAliasEnumInsideLocalModuleWithoutExport.d.ts]
export declare module a {
    enum weekend {
        Friday = 0,
        Saturday = 1,
        Sunday = 2
    }
}
export declare module c {
    import b = a.weekend;
    var bVal: b;
}
