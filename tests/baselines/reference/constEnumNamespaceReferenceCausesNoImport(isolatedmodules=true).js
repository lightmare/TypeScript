//// [tests/cases/compiler/constEnumNamespaceReferenceCausesNoImport.ts] ////

//// [foo.ts]
export const enum ConstFooEnum {
    Some,
    Values,
    Here
};
export function fooFunc(): void { /* removed */ }
//// [index.ts]
import * as Foo from "./foo";

function check(x: Foo.ConstFooEnum): void {
  switch (x) {
    case Foo.ConstFooEnum.Some:
      break;
  }
}

//// [foo.js]
"use strict";
exports.__esModule = true;
exports.fooFunc = exports.ConstFooEnum = void 0;
var ConstFooEnum;
(function () {
    this[this[0] = "Some"] = 0;
    this[this[1] = "Values"] = 1;
    this[this[2] = "Here"] = 2;
}.call(ConstFooEnum = exports.ConstFooEnum || (exports.ConstFooEnum = {})));
;
function fooFunc() { }
exports.fooFunc = fooFunc;
//// [index.js]
"use strict";
exports.__esModule = true;
var Foo = require("./foo");
function check(x) {
    switch (x) {
        case Foo.ConstFooEnum.Some:
            break;
    }
}
