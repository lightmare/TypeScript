//// [tests/cases/compiler/isolatedModulesImportConstEnumTypeOnly.ts] ////

//// [enum.ts]
export const enum Foo { Bar }

//// [index.ts]
import { Foo } from "./enum";
function f(foo: Foo) { return; }


//// [enum.js]
"use strict";
exports.__esModule = true;
exports.Foo = void 0;
var Foo;
(function (Foo) {
    Foo[Foo[0] = "Bar"] = 0;
})(Foo = exports.Foo || (exports.Foo = {}));
//// [index.js]
"use strict";
exports.__esModule = true;
function f(foo) { return; }
