//// [declarationEmitNoNonRequiredParens.ts]
export enum Test {
    A, B, C
}

export type TestType = typeof Test;

export const bar = (null as TestType[Extract<keyof TestType, string>][]);

//// [declarationEmitNoNonRequiredParens.js]
"use strict";
exports.__esModule = true;
exports.bar = exports.Test = void 0;
var Test;
(function () {
    this[this[0] = "A"] = 0;
    this[this[1] = "B"] = 1;
    this[this[2] = "C"] = 2;
}.call(Test = exports.Test || (exports.Test = {})));
exports.bar = null;


//// [declarationEmitNoNonRequiredParens.d.ts]
export declare enum Test {
    A = 0,
    B = 1,
    C = 2
}
export declare type TestType = typeof Test;
export declare const bar: Test[];
