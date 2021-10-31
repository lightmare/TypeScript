//// [internalAliasEnumInsideTopLevelModuleWithExport.ts]
export module a {
    export enum weekend {
        Friday,
        Saturday,
        Sunday
    }
}

export import b = a.weekend;
export var bVal: b = b.Sunday;


//// [internalAliasEnumInsideTopLevelModuleWithExport.js]
define(["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    exports.bVal = exports.b = exports.a = void 0;
    var a;
    (function (a) {
        var weekend;
        (function (weekend) {
            weekend[weekend[0] = "Friday"] = 0;
            weekend[weekend[1] = "Saturday"] = 1;
            weekend[weekend[2] = "Sunday"] = 2;
        })(weekend = a.weekend || (a.weekend = {}));
    })(a = exports.a || (exports.a = {}));
    exports.b = a.weekend;
    exports.bVal = exports.b.Sunday;
});


//// [internalAliasEnumInsideTopLevelModuleWithExport.d.ts]
export declare module a {
    enum weekend {
        Friday = 0,
        Saturday = 1,
        Sunday = 2
    }
}
export import b = a.weekend;
export declare var bVal: b;
