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
(function (Color) {
    Color[Color[0] = "r"] = 0;
    Color[Color[1] = "g"] = 1;
    Color[Color[2] = "b"] = 2;
})(Color = exports.Color || (exports.Color = {}));
