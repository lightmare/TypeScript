//// [tests/cases/compiler/constEnumNamespaceReferenceCausesNoImport2.ts] ////

//// [foo.ts]
export module ConstEnumOnlyModule {
  export const enum ConstFooEnum {
    Some,
    Values,
    Here
  }
}

//// [reexport.ts]
import * as Foo from "./foo";
export = Foo.ConstEnumOnlyModule;

//// [index.ts]
import Foo = require("./reexport");
function check(x: Foo.ConstFooEnum): void {
  switch (x) {
    case Foo.ConstFooEnum.Some:
      break;
  }
}

//// [foo.js]
"use strict";
exports.__esModule = true;
exports.ConstEnumOnlyModule = void 0;
var ConstEnumOnlyModule;
(function (ConstEnumOnlyModule) {
    var ConstFooEnum;
    (function () {
        this[this[0] = "Some"] = 0;
        this[this[1] = "Values"] = 1;
        this[this[2] = "Here"] = 2;
    }.call(ConstFooEnum = ConstEnumOnlyModule.ConstFooEnum || (ConstEnumOnlyModule.ConstFooEnum = {})));
})(ConstEnumOnlyModule = exports.ConstEnumOnlyModule || (exports.ConstEnumOnlyModule = {}));
//// [reexport.js]
"use strict";
var Foo = require("./foo");
module.exports = Foo.ConstEnumOnlyModule;
//// [index.js]
"use strict";
exports.__esModule = true;
function check(x) {
    switch (x) {
        case 0 /* Some */:
            break;
    }
}
