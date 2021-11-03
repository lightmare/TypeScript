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
    (function (foo) {
        foo[foo[0] = "A"] = 0;
    })(foo || (foo = {}));
    return foo;
});
