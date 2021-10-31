//// [tests/cases/compiler/importedEnumMemberMergedWithExportedAliasIsError.ts] ////

//// [enum.ts]
export enum Enum {
    A,
    B
}
//// [alias.ts]
import {Enum} from "./enum";

import EnumA = Enum.A;

export type EnumA = [string] | [string, number];


//// [enum.js]
"use strict";
exports.__esModule = true;
exports.Enum = void 0;
var Enum;
(function (Enum) {
    Enum[Enum[0] = "A"] = 0;
    Enum[Enum[1] = "B"] = 1;
})(Enum = exports.Enum || (exports.Enum = {}));
//// [alias.js]
"use strict";
exports.__esModule = true;
