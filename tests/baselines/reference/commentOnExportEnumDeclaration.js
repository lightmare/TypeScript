//// [commentOnExportEnumDeclaration.ts]
/**
 * comment
 */
export enum Color {
    r, g, b
}

//// [commentOnExportEnumDeclaration.js]
"use strict";
exports.__esModule = true;
exports.Color = void 0;
/**
 * comment
 */
var Color;
(function () {
    this[this[0] = "r"] = 0;
    this[this[1] = "g"] = 1;
    this[this[2] = "b"] = 2;
}.call(Color = exports.Color || (exports.Color = {})));
