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
    (function (EImpl1) {
        EImpl1[EImpl1[0] = "A"] = 0;
        EImpl1[EImpl1[1] = "B"] = 1;
        EImpl1[EImpl1[2] = "C"] = 2;
    })(EImpl1 || (EImpl1 = {}));
    (function (EImpl1) {
        EImpl1[EImpl1[1] = "D"] = 1;
        EImpl1[EImpl1[2] = "E"] = 2;
        EImpl1[EImpl1[3] = "F"] = 3;
    })(EImpl1 || (EImpl1 = {}));
    var EConst1;
    (function (EConst1) {
        EConst1[EConst1[3] = "A"] = 3;
        EConst1[EConst1[2] = "B"] = 2;
        EConst1[EConst1[1] = "C"] = 1;
    })(EConst1 = M1.EConst1 || (M1.EConst1 = {}));
    (function (EConst1) {
        EConst1[EConst1[7] = "D"] = 7;
        EConst1[EConst1[9] = "E"] = 9;
        EConst1[EConst1[8] = "F"] = 8;
    })(EConst1 = M1.EConst1 || (M1.EConst1 = {}));
    var x = [EConst1.A, EConst1.B, EConst1.C, EConst1.D, EConst1.E, EConst1.F];
})(M1 || (M1 = {}));
// Enum with only computed members across 2 declarations with the same root module 
var M2;
(function (M2) {
    var EComp2;
    (function (EComp2) {
        EComp2[EComp2["A"] = 'foo'.length] = "A";
        EComp2[EComp2["B"] = 'foo'.length] = "B";
        EComp2[EComp2["C"] = 'foo'.length] = "C";
    })(EComp2 = M2.EComp2 || (M2.EComp2 = {}));
    (function (EComp2) {
        EComp2[EComp2["D"] = 'foo'.length] = "D";
        EComp2[EComp2["E"] = 'foo'.length] = "E";
        EComp2[EComp2["F"] = 'foo'.length] = "F";
    })(EComp2 = M2.EComp2 || (M2.EComp2 = {}));
    var x = [EComp2.A, EComp2.B, EComp2.C, EComp2.D, EComp2.E, EComp2.F];
})(M2 || (M2 = {}));
// Enum with initializer in only one of two declarations with constant members with the same root module
var M3;
(function (M3) {
    var EInit;
    (function (EInit) {
        EInit[EInit[0] = "A"] = 0;
        EInit[EInit[1] = "B"] = 1;
    })(EInit || (EInit = {}));
    (function (EInit) {
        EInit[EInit[1] = "C"] = 1;
        EInit[EInit[2] = "D"] = 2;
        EInit[EInit[3] = "E"] = 3;
    })(EInit || (EInit = {}));
})(M3 || (M3 = {}));
// Enums with same name but different root module
var M4;
(function (M4) {
    var Color;
    (function (Color) {
        Color[Color[0] = "Red"] = 0;
        Color[Color[1] = "Green"] = 1;
        Color[Color[2] = "Blue"] = 2;
    })(Color = M4.Color || (M4.Color = {}));
})(M4 || (M4 = {}));
var M5;
(function (M5) {
    var Color;
    (function (Color) {
        Color[Color[0] = "Red"] = 0;
        Color[Color[1] = "Green"] = 1;
        Color[Color[2] = "Blue"] = 2;
    })(Color = M5.Color || (M5.Color = {}));
})(M5 || (M5 = {}));
var M6;
(function (M6) {
    var A;
    (function (A) {
        var Color;
        (function (Color) {
            Color[Color[0] = "Red"] = 0;
            Color[Color[1] = "Green"] = 1;
            Color[Color[2] = "Blue"] = 2;
        })(Color = A.Color || (A.Color = {}));
    })(A = M6.A || (M6.A = {}));
})(M6 || (M6 = {}));
(function (M6) {
    var A;
    (function (A) {
        var Color;
        (function (Color) {
            Color[Color[1] = "Yellow"] = 1;
        })(Color = A.Color || (A.Color = {}));
    })(A = M6.A || (M6.A = {}));
    var t = A.Color.Yellow;
    t = A.Color.Red;
})(M6 || (M6 = {}));
