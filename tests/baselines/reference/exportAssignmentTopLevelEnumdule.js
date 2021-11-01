//// [tests/cases/conformance/externalModules/exportAssignmentTopLevelEnumdule.ts] ////

//// [foo_0.ts]
enum foo {
	red, green, blue
}
module foo {
	export var answer = 42;
}
export = foo;

//// [foo_1.ts]
import foo = require("./foo_0");
var color: foo;
if(color === foo.green){
	color = foo.answer;
}


//// [foo_0.js]
define(["require", "exports"], function (require, exports) {
    "use strict";
    var foo;
    (function () {
        this[this[0] = "red"] = 0;
        this[this[1] = "green"] = 1;
        this[this[2] = "blue"] = 2;
    }.call(foo || (foo = {})));
    (function (foo) {
        foo.answer = 42;
    })(foo || (foo = {}));
    return foo;
});
//// [foo_1.js]
define(["require", "exports", "./foo_0"], function (require, exports, foo) {
    "use strict";
    exports.__esModule = true;
    var color;
    if (color === foo.green) {
        color = foo.answer;
    }
});
