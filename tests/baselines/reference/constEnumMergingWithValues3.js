//// [m1.ts]
enum foo { A }
module foo {
    const enum E { X }
}

export = foo

//// [m1.js]
define(["require", "exports"], function (require, exports) {
    "use strict";
    var foo;
    (function () {
        this[this[0] = "A"] = 0;
    }.call(foo || (foo = {})));
    return foo;
});
