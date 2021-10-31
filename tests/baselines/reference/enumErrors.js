//// [enumErrors.ts]
// Enum named with PredefinedTypes
enum any { }
enum number { }
enum string { }
enum boolean { }

// Enum with computed member initializer of type Number
enum E5 {
    C = new Number(30)
}

enum E9 {
    A,
    B = A
}

//Enum with computed member intializer of different enum type
// Bug 707850: This should be allowed
enum E10 {
    A = E9.A,
    B = E9.B
}

// Enum with computed member intializer of other types
enum E11 {
    A = true,
    B = new Date(),
    C = window,
    D = {},
    E = (() => 'foo')(),
}

// Enum with string valued member and computed member initializers
enum E12 {
    A = '',
    B = new Date(),
    C = window,
    D = {},
    E = 1 + 1,
    F = (() => 'foo')(),
}

// Enum with incorrect syntax
enum E13 {
    postComma,
    postValueComma = 1,

    postSemicolon;
    postColonValueComma: 2,
    postColonValueSemicolon: 3;
};

enum E14 { a, b: any "hello" += 1, c, d}


//// [enumErrors.js]
// Enum named with PredefinedTypes
var any;
any || (any = {});
var number;
number || (number = {});
var string;
string || (string = {});
var boolean;
boolean || (boolean = {});
// Enum with computed member initializer of type Number
var E5;
(function (E5) {
    E5[E5["C"] = new Number(30)] = "C";
})(E5 || (E5 = {}));
var E9;
(function (E9) {
    E9[E9[0] = "A"] = 0;
    E9[E9[0] = "B"] = 0;
})(E9 || (E9 = {}));
//Enum with computed member intializer of different enum type
// Bug 707850: This should be allowed
var E10;
(function (E10) {
    E10[E10[0] = "A"] = 0;
    E10[E10[0] = "B"] = 0;
})(E10 || (E10 = {}));
// Enum with computed member intializer of other types
var E11;
(function (E11) {
    E11[E11["A"] = true] = "A";
    E11[E11["B"] = new Date()] = "B";
    E11[E11["C"] = window] = "C";
    E11[E11["D"] = {}] = "D";
    E11[E11["E"] = (function () { return 'foo'; })()] = "E";
})(E11 || (E11 = {}));
// Enum with string valued member and computed member initializers
var E12;
(function (E12) {
    E12["A"] = "";
    E12[E12[0] = "B"] = 0;
    E12[E12[0] = "C"] = 0;
    E12[E12[0] = "D"] = 0;
    E12[E12[0] = "E"] = 0;
    E12[E12[0] = "F"] = 0;
})(E12 || (E12 = {}));
// Enum with incorrect syntax
var E13;
(function (E13) {
    E13[E13[0] = "postComma"] = 0;
    E13[E13[1] = "postValueComma"] = 1;
    E13[E13[2] = "postSemicolon"] = 2;
    E13[E13[3] = "postColonValueComma"] = 3;
    E13[E13[4] = 2] = 4;
    E13[E13[5] = "postColonValueSemicolon"] = 5;
    E13[E13[6] = 3] = 6;
})(E13 || (E13 = {}));
;
var E14;
(function (E14) {
    E14[E14[0] = "a"] = 0;
    E14[E14[1] = "b"] = 1;
    E14[E14[2] = "any"] = 2;
    E14[E14[3] = "hello"] = 3;
    E14[E14[4] = 1] = 4;
    E14[E14[5] = "c"] = 5;
    E14[E14[6] = "d"] = 6;
})(E14 || (E14 = {}));
