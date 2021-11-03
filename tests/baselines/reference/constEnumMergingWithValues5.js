//// [m1.ts]
module foo {
    const enum E { X }
}

export = foo

//// [m1.js]
define(["require", "exports"], function (require, exports) {
    "use strict";
    var foo;
    (function (foo) {
        var E;
        (function () {
            this[this[0] = "X"] = 0;
        }.call(E || (E = {})));
    })(foo || (foo = {}));
    return foo;
});
