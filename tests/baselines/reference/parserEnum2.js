//// [parserEnum2.ts]
    export enum SignatureFlags {
        None = 0,
        IsIndexer = 1,
        IsStringIndexer = 1 << 1,
        IsNumberIndexer = 1 << 2
    }

//// [parserEnum2.js]
"use strict";
exports.__esModule = true;
exports.SignatureFlags = void 0;
var SignatureFlags;
(function (SignatureFlags) {
    SignatureFlags[SignatureFlags[0] = "None"] = 0;
    SignatureFlags[SignatureFlags[1] = "IsIndexer"] = 1;
    SignatureFlags[SignatureFlags[2] = "IsStringIndexer"] = 2;
    SignatureFlags[SignatureFlags[4] = "IsNumberIndexer"] = 4;
})(SignatureFlags = exports.SignatureFlags || (exports.SignatureFlags = {}));
