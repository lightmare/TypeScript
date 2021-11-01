//// [internalAliasEnumInsideTopLevelModuleWithoutExport.ts]
export module a {
    export enum weekend {
        Friday,
        Saturday,
        Sunday
    }
}

import b = a.weekend;
export var bVal: b = b.Sunday;


//// [internalAliasEnumInsideTopLevelModuleWithoutExport.js]
define(["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    exports.bVal = exports.a = void 0;
    var a;
    (function (a) {
        var weekend;
        (function () {
            this[this[0] = "Friday"] = 0;
            this[this[1] = "Saturday"] = 1;
            this[this[2] = "Sunday"] = 2;
        }.call(weekend = a.weekend || (a.weekend = {})));
    })(a = exports.a || (exports.a = {}));
    var b = a.weekend;
    exports.bVal = b.Sunday;
});


//// [internalAliasEnumInsideTopLevelModuleWithoutExport.d.ts]
export declare module a {
    enum weekend {
        Friday = 0,
        Saturday = 1,
        Sunday = 2
    }
}
import b = a.weekend;
export declare var bVal: b;
