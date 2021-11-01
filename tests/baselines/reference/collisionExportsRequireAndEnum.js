//// [tests/cases/compiler/collisionExportsRequireAndEnum.ts] ////

//// [collisionExportsRequireAndEnum_externalmodule.ts]
export enum require { // Error
    _thisVal1,
    _thisVal2,
}
export enum exports { // Error
    _thisVal1,
    _thisVal2,
}
module m1 {
    enum require {
        _thisVal1,
        _thisVal2,
    }
    enum exports {
        _thisVal1,
        _thisVal2,
    }
}
module m2 {
    export enum require { 
        _thisVal1,
        _thisVal2,
    }
    export enum exports {
        _thisVal1,
        _thisVal2,
    }
}

//// [collisionExportsRequireAndEnum_globalFile.ts]
enum require {
    _thisVal1,
    _thisVal2,
}
enum exports {
    _thisVal1,
    _thisVal2,
}
module m3 {
    enum require {
        _thisVal1,
        _thisVal2,
    }
    enum exports {
        _thisVal1,
        _thisVal2,
    }
}
module m4 {
    export enum require {
        _thisVal1,
        _thisVal2,
    }
    export enum exports {
        _thisVal1,
        _thisVal2,
    }
}

//// [collisionExportsRequireAndEnum_externalmodule.js]
define(["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    exports.exports = exports.require = void 0;
    var require;
    (function () {
        this[this[0] = "_thisVal1"] = 0;
        this[this[1] = "_thisVal2"] = 1;
    }.call(require = exports.require || (exports.require = {})));
    var exports;
    (function () {
        this[this[0] = "_thisVal1"] = 0;
        this[this[1] = "_thisVal2"] = 1;
    }.call(exports = exports.exports || (exports.exports = {})));
    var m1;
    (function (m1) {
        var require;
        (function () {
            this[this[0] = "_thisVal1"] = 0;
            this[this[1] = "_thisVal2"] = 1;
        }.call(require || (require = {})));
        var exports;
        (function () {
            this[this[0] = "_thisVal1"] = 0;
            this[this[1] = "_thisVal2"] = 1;
        }.call(exports || (exports = {})));
    })(m1 || (m1 = {}));
    var m2;
    (function (m2) {
        var require;
        (function () {
            this[this[0] = "_thisVal1"] = 0;
            this[this[1] = "_thisVal2"] = 1;
        }.call(require = m2.require || (m2.require = {})));
        var exports;
        (function () {
            this[this[0] = "_thisVal1"] = 0;
            this[this[1] = "_thisVal2"] = 1;
        }.call(exports = m2.exports || (m2.exports = {})));
    })(m2 || (m2 = {}));
});
//// [collisionExportsRequireAndEnum_globalFile.js]
var require;
(function () {
    this[this[0] = "_thisVal1"] = 0;
    this[this[1] = "_thisVal2"] = 1;
}.call(require || (require = {})));
var exports;
(function () {
    this[this[0] = "_thisVal1"] = 0;
    this[this[1] = "_thisVal2"] = 1;
}.call(exports || (exports = {})));
var m3;
(function (m3) {
    var require;
    (function () {
        this[this[0] = "_thisVal1"] = 0;
        this[this[1] = "_thisVal2"] = 1;
    }.call(require || (require = {})));
    var exports;
    (function () {
        this[this[0] = "_thisVal1"] = 0;
        this[this[1] = "_thisVal2"] = 1;
    }.call(exports || (exports = {})));
})(m3 || (m3 = {}));
var m4;
(function (m4) {
    var require;
    (function () {
        this[this[0] = "_thisVal1"] = 0;
        this[this[1] = "_thisVal2"] = 1;
    }.call(require = m4.require || (m4.require = {})));
    var exports;
    (function () {
        this[this[0] = "_thisVal1"] = 0;
        this[this[1] = "_thisVal2"] = 1;
    }.call(exports = m4.exports || (m4.exports = {})));
})(m4 || (m4 = {}));
