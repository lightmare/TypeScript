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
(function (B) {
    B[B[0] = "Member"] = 0;
})(B = exports.B || (exports.B = {}));
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
(function (G) {
    G[G[1] = "A"] = 1;
    G[G[2] = "B"] = 2;
    G[G[3] = "C"] = 3;
})(G = exports.G || (exports.G = {}));
var H;
(function (H) {
    H["A"] = "a";
    H["B"] = "b";
})(H = exports.H || (exports.H = {}));
var I;
(function (I) {
    I["A"] = "a";
    I[I[0] = "B"] = 0;
    I[I[1] = "C"] = 1;
})(I = exports.I || (exports.I = {}));
var K;
(function (K) {
    K[K[0] = "None"] = 0;
    K[K[1] = "A"] = 1;
    K[K[2] = "B"] = 2;
    K[K[4] = "C"] = 4;
    K[K[7] = "Mask"] = 7;
})(K = exports.K || (exports.K = {}));


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
