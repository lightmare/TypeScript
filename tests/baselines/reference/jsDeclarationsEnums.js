//// [index.js]
// Pretty much all of this should be an error, (since enums are forbidden in js),
// but we should be able to synthesize declarations from the symbols regardless

export enum A {}

export enum B {
    Member
}

enum C {}

export { C };

enum DD {}

export { DD as D };

export enum E {}
export { E as EE };

export { F as FF };
export enum F {}

export enum G {
    A = 1,
    B,
    C
}

export enum H {
    A = "a",
    B = "b"
}

export enum I {
    A = "a",
    B = 0,
    C
}

export const enum J {
    A = 1,
    B,
    C
}

export enum K {
    None   = 0,
    A = 1 << 0,
    B = 1 << 1,
    C = 1 << 2,
    Mask = A | B | C,
}

export const enum L {
    None   = 0,
    A = 1 << 0,
    B = 1 << 1,
    C = 1 << 2,
    Mask = A | B | C,
}


//// [index.js]
"use strict";
// Pretty much all of this should be an error, (since enums are forbidden in js),
// but we should be able to synthesize declarations from the symbols regardless
Object.defineProperty(exports, "__esModule", { value: true });
exports.K = exports.I = exports.H = exports.G = exports.F = exports.FF = exports.EE = exports.E = exports.D = exports.C = exports.B = exports.A = void 0;
var A;
A = exports.A || (exports.A = {});
var B;
(function () {
    this[this[0] = "Member"] = 0;
}.call(B = exports.B || (exports.B = {})));
var C;
C || (C = {});
exports.C = C;
var DD;
DD || (DD = {});
exports.D = DD;
var E;
E = exports.E || (exports.E = {});
exports.EE = E;
var F;
F = exports.F || (exports.F = {});
exports.FF = F;
var G;
(function () {
    this[this[1] = "A"] = 1;
    this[this[2] = "B"] = 2;
    this[this[3] = "C"] = 3;
}.call(G = exports.G || (exports.G = {})));
var H;
(function () {
    this["A"] = "a";
    this["B"] = "b";
}.call(H = exports.H || (exports.H = {})));
var I;
(function () {
    this["A"] = "a";
    this[this[0] = "B"] = 0;
    this[this[1] = "C"] = 1;
}.call(I = exports.I || (exports.I = {})));
var K;
(function () {
    this[this[0] = "None"] = 0;
    this[this[1] = "A"] = 1;
    this[this[2] = "B"] = 2;
    this[this[4] = "C"] = 4;
    this[this[7] = "Mask"] = 7;
}.call(K = exports.K || (exports.K = {})));


//// [index.d.ts]
export enum A {
}
export enum B {
    Member = 0
}
export enum E {
}
export enum F {
}
export enum G {
    A = 1,
    B = 2,
    C = 3
}
export enum H {
    A = "a",
    B = "b"
}
export enum I {
    A = "a",
    B = 0,
    C = 1
}
export const enum J {
    A = 1,
    B = 2,
    C = 3
}
export enum K {
    None = 0,
    A = 1,
    B = 2,
    C = 4,
    Mask = 7
}
export const enum L {
    None = 0,
    A = 1,
    B = 2,
    C = 4,
    Mask = 7
}
export enum C {
}
declare enum DD {
}
export { DD as D, E as EE, F as FF };
