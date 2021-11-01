//// [enumMergingErrors.ts]
// Enum with constant, computed, constant members split across 3 declarations with the same root module
module M {
    export enum E1 { A = 0 }
    export enum E2 { C }
    export enum E3 { A = 0 }
}
module M {
    export enum E1 { B = 'foo'.length }
    export enum E2 { B = 'foo'.length }
    export enum E3 { C }
}
module M {
    export enum E1 { C }
    export enum E2 { A = 0 }
    export enum E3 { B = 'foo'.length }
}

// Enum with no initializer in either declaration with constant members with the same root module
module M1 {
    export enum E1 { A = 0 }
}
module M1 {
    export enum E1 { B }
}
module M1 {
    export enum E1 { C }
}


// Enum with initializer in only one of three declarations with constant members with the same root module
module M2 {
    export enum E1 { A }
}
module M2 {
    export enum E1 { B = 0 }
}
module M2 {
    export enum E1 { C }
}




//// [enumMergingErrors.js]
// Enum with constant, computed, constant members split across 3 declarations with the same root module
var M;
(function (M) {
    var E1;
    (function () {
        this[this[0] = "A"] = 0;
    }.call(E1 = M.E1 || (M.E1 = {})));
    var E2;
    (function () {
        this[this[0] = "C"] = 0;
    }.call(E2 = M.E2 || (M.E2 = {})));
    var E3;
    (function () {
        this[this[0] = "A"] = 0;
    }.call(E3 = M.E3 || (M.E3 = {})));
})(M || (M = {}));
(function (M) {
    var E1;
    (function () {
        this[this["B"] = 'foo'.length] = "B";
    }.call(E1 = M.E1 || (M.E1 = {})));
    var E2;
    (function () {
        this[this["B"] = 'foo'.length] = "B";
    }.call(E2 = M.E2 || (M.E2 = {})));
    var E3;
    (function () {
        this[this[0] = "C"] = 0;
    }.call(E3 = M.E3 || (M.E3 = {})));
})(M || (M = {}));
(function (M) {
    var E1;
    (function () {
        this[this[0] = "C"] = 0;
    }.call(E1 = M.E1 || (M.E1 = {})));
    var E2;
    (function () {
        this[this[0] = "A"] = 0;
    }.call(E2 = M.E2 || (M.E2 = {})));
    var E3;
    (function () {
        this[this["B"] = 'foo'.length] = "B";
    }.call(E3 = M.E3 || (M.E3 = {})));
})(M || (M = {}));
// Enum with no initializer in either declaration with constant members with the same root module
var M1;
(function (M1) {
    var E1;
    (function () {
        this[this[0] = "A"] = 0;
    }.call(E1 = M1.E1 || (M1.E1 = {})));
})(M1 || (M1 = {}));
(function (M1) {
    var E1;
    (function () {
        this[this[0] = "B"] = 0;
    }.call(E1 = M1.E1 || (M1.E1 = {})));
})(M1 || (M1 = {}));
(function (M1) {
    var E1;
    (function () {
        this[this[0] = "C"] = 0;
    }.call(E1 = M1.E1 || (M1.E1 = {})));
})(M1 || (M1 = {}));
// Enum with initializer in only one of three declarations with constant members with the same root module
var M2;
(function (M2) {
    var E1;
    (function () {
        this[this[0] = "A"] = 0;
    }.call(E1 = M2.E1 || (M2.E1 = {})));
})(M2 || (M2 = {}));
(function (M2) {
    var E1;
    (function () {
        this[this[0] = "B"] = 0;
    }.call(E1 = M2.E1 || (M2.E1 = {})));
})(M2 || (M2 = {}));
(function (M2) {
    var E1;
    (function () {
        this[this[0] = "C"] = 0;
    }.call(E1 = M2.E1 || (M2.E1 = {})));
})(M2 || (M2 = {}));
