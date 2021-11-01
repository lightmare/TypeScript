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
(function () {
    this[this["C"] = new Number(30)] = "C";
}.call(E5 || (E5 = {})));
var E9;
(function () {
    this[this[0] = "A"] = 0;
    this[this[0] = "B"] = 0;
}.call(E9 || (E9 = {})));
//Enum with computed member intializer of different enum type
// Bug 707850: This should be allowed
var E10;
(function () {
    this[this[0] = "A"] = 0;
    this[this[0] = "B"] = 0;
}.call(E10 || (E10 = {})));
// Enum with computed member intializer of other types
var E11;
(function () {
    this[this["A"] = true] = "A";
    this[this["B"] = new Date()] = "B";
    this[this["C"] = window] = "C";
    this[this["D"] = {}] = "D";
    this[this["E"] = (function () { return 'foo'; })()] = "E";
}.call(E11 || (E11 = {})));
// Enum with string valued member and computed member initializers
var E12;
(function () {
    this["A"] = "";
    this[this[0] = "B"] = 0;
    this[this[0] = "C"] = 0;
    this[this[0] = "D"] = 0;
    this[this[0] = "E"] = 0;
    this[this[0] = "F"] = 0;
}.call(E12 || (E12 = {})));
// Enum with incorrect syntax
var E13;
(function () {
    this[this[0] = "postComma"] = 0;
    this[this[1] = "postValueComma"] = 1;
    this[this[2] = "postSemicolon"] = 2;
    this[this[3] = "postColonValueComma"] = 3;
    this[this[4] = 2] = 4;
    this[this[5] = "postColonValueSemicolon"] = 5;
    this[this[6] = 3] = 6;
}.call(E13 || (E13 = {})));
;
var E14;
(function () {
    this[this[0] = "a"] = 0;
    this[this[1] = "b"] = 1;
    this[this[2] = "any"] = 2;
    this[this[3] = "hello"] = 3;
    this[this[4] = 1] = 4;
    this[this[5] = "c"] = 5;
    this[this[6] = "d"] = 6;
}.call(E14 || (E14 = {})));
