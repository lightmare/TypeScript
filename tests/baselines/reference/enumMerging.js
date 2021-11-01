//// [enumMerging.ts]
// Enum with only constant members across 2 declarations with the same root module
// Enum with initializer in all declarations with constant members with the same root module
module M1 {
    enum EImpl1 {
        A, B, C
    }

    enum EImpl1 {
        D = 1, E, F
    }

    export enum EConst1 {
        A = 3, B = 2, C = 1
    }

    export enum EConst1 {
        D = 7, E = 9, F = 8
    }

    var x = [EConst1.A, EConst1.B, EConst1.C, EConst1.D, EConst1.E, EConst1.F];
}

// Enum with only computed members across 2 declarations with the same root module 
module M2 {
    export enum EComp2 {
        A = 'foo'.length, B = 'foo'.length, C = 'foo'.length
    }

    export enum EComp2 {
        D = 'foo'.length, E = 'foo'.length, F = 'foo'.length
    }

    var x = [EComp2.A, EComp2.B, EComp2.C, EComp2.D, EComp2.E, EComp2.F];
}

// Enum with initializer in only one of two declarations with constant members with the same root module
module M3 {
    enum EInit {
        A,
        B
    }

    enum EInit {
        C = 1, D, E
    }
}

// Enums with same name but different root module
module M4 {
    export enum Color { Red, Green, Blue }
}
module M5 {
    export enum Color { Red, Green, Blue }
}

module M6.A {
    export enum Color { Red, Green, Blue }
}
module M6 {
    export module A {
        export enum Color { Yellow = 1 }
    }
    var t = A.Color.Yellow;
    t = A.Color.Red;
}


//// [enumMerging.js]
// Enum with only constant members across 2 declarations with the same root module
// Enum with initializer in all declarations with constant members with the same root module
var M1;
(function (M1) {
    var EImpl1;
    (function () {
        this[this[0] = "A"] = 0;
        this[this[1] = "B"] = 1;
        this[this[2] = "C"] = 2;
    }.call(EImpl1 || (EImpl1 = {})));
    (function () {
        this[this[1] = "D"] = 1;
        this[this[2] = "E"] = 2;
        this[this[3] = "F"] = 3;
    }.call(EImpl1 || (EImpl1 = {})));
    var EConst1;
    (function () {
        this[this[3] = "A"] = 3;
        this[this[2] = "B"] = 2;
        this[this[1] = "C"] = 1;
    }.call(EConst1 = M1.EConst1 || (M1.EConst1 = {})));
    (function () {
        this[this[7] = "D"] = 7;
        this[this[9] = "E"] = 9;
        this[this[8] = "F"] = 8;
    }.call(EConst1 = M1.EConst1 || (M1.EConst1 = {})));
    var x = [EConst1.A, EConst1.B, EConst1.C, EConst1.D, EConst1.E, EConst1.F];
})(M1 || (M1 = {}));
// Enum with only computed members across 2 declarations with the same root module 
var M2;
(function (M2) {
    var EComp2;
    (function () {
        this[this["A"] = 'foo'.length] = "A";
        this[this["B"] = 'foo'.length] = "B";
        this[this["C"] = 'foo'.length] = "C";
    }.call(EComp2 = M2.EComp2 || (M2.EComp2 = {})));
    (function () {
        this[this["D"] = 'foo'.length] = "D";
        this[this["E"] = 'foo'.length] = "E";
        this[this["F"] = 'foo'.length] = "F";
    }.call(EComp2 = M2.EComp2 || (M2.EComp2 = {})));
    var x = [EComp2.A, EComp2.B, EComp2.C, EComp2.D, EComp2.E, EComp2.F];
})(M2 || (M2 = {}));
// Enum with initializer in only one of two declarations with constant members with the same root module
var M3;
(function (M3) {
    var EInit;
    (function () {
        this[this[0] = "A"] = 0;
        this[this[1] = "B"] = 1;
    }.call(EInit || (EInit = {})));
    (function () {
        this[this[1] = "C"] = 1;
        this[this[2] = "D"] = 2;
        this[this[3] = "E"] = 3;
    }.call(EInit || (EInit = {})));
})(M3 || (M3 = {}));
// Enums with same name but different root module
var M4;
(function (M4) {
    var Color;
    (function () {
        this[this[0] = "Red"] = 0;
        this[this[1] = "Green"] = 1;
        this[this[2] = "Blue"] = 2;
    }.call(Color = M4.Color || (M4.Color = {})));
})(M4 || (M4 = {}));
var M5;
(function (M5) {
    var Color;
    (function () {
        this[this[0] = "Red"] = 0;
        this[this[1] = "Green"] = 1;
        this[this[2] = "Blue"] = 2;
    }.call(Color = M5.Color || (M5.Color = {})));
})(M5 || (M5 = {}));
var M6;
(function (M6) {
    var A;
    (function (A) {
        var Color;
        (function () {
            this[this[0] = "Red"] = 0;
            this[this[1] = "Green"] = 1;
            this[this[2] = "Blue"] = 2;
        }.call(Color = A.Color || (A.Color = {})));
    })(A = M6.A || (M6.A = {}));
})(M6 || (M6 = {}));
(function (M6) {
    var A;
    (function (A) {
        var Color;
        (function () {
            this[this[1] = "Yellow"] = 1;
        }.call(Color = A.Color || (A.Color = {})));
    })(A = M6.A || (M6.A = {}));
    var t = A.Color.Yellow;
    t = A.Color.Red;
})(M6 || (M6 = {}));
