//// [foo_0.ts]
export enum E1 {
	A,B,C
}

class C1 {

}

// Invalid, as there is already an exported member.
export = C1;

//// [foo_0.js]
define(["require", "exports"], function (require, exports) {
    "use strict";
    exports.E1 = void 0;
    var E1;
    (function (E1) {
        E1[E1[0] = "A"] = 0;
        E1[E1[1] = "B"] = 1;
        E1[E1[2] = "C"] = 2;
    })(E1 = exports.E1 || (exports.E1 = {}));
    var C1 = /** @class */ (function () {
        function C1() {
        }
        return C1;
    }());
    return C1;
});
