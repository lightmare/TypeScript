//// [parserEnum1.ts]
    export enum SignatureFlags {
        None = 0,
        IsIndexer = 1,
        IsStringIndexer = 1 << 1,
        IsNumberIndexer = 1 << 2,
    }

//// [parserEnum1.js]
"use strict";
exports.__esModule = true;
exports.SignatureFlags = void 0;
var SignatureFlags;
(function () {
    this[this[0] = "None"] = 0;
    this[this[1] = "IsIndexer"] = 1;
    this[this[2] = "IsStringIndexer"] = 2;
    this[this[4] = "IsNumberIndexer"] = 4;
}.call(SignatureFlags = exports.SignatureFlags || (exports.SignatureFlags = {})));
