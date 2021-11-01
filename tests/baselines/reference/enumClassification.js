//// [enumClassification.ts]
// An enum type where each member has no initializer or an initializer that specififes
// a numeric literal, a string literal, or a single identifier naming another member in
// the enum type is classified as a literal enum type. An enum type that doesn't adhere
// to this pattern is classified as a numeric enum type.

// Examples of literal enum types

enum E01 {
    A
}

enum E02 {
    A = 123
}

enum E03 {
    A = "hello"
}

enum E04 {
    A,
    B,
    C
}

enum E05 {
    A,
    B = 10,
    C
}

enum E06 {
    A = "one",
    B = "two",
    C = "three"
}

enum E07 {
    A,
    B,
    C = "hi",
    D = 10,
    E,
    F = "bye"
}

enum E08 {
    A = 10,
    B = "hello",
    C = A,
    D = B,
    E = C,
}

// Examples of numeric enum types with only constant members

enum E10 {}

enum E11 {
    A = +0,
    B,
    C
}

enum E12 {
    A = 1 << 0,
    B = 1 << 1,
    C = 1 << 2
}

// Examples of numeric enum types with constant and computed members

enum E20 {
    A = "foo".length,
    B = A + 1,
    C = +"123",
    D = Math.sin(1)
}


//// [enumClassification.js]
// An enum type where each member has no initializer or an initializer that specififes
// a numeric literal, a string literal, or a single identifier naming another member in
// the enum type is classified as a literal enum type. An enum type that doesn't adhere
// to this pattern is classified as a numeric enum type.
// Examples of literal enum types
var E01;
(function () {
    this[this[0] = "A"] = 0;
}.call(E01 || (E01 = {})));
var E02;
(function () {
    this[this[123] = "A"] = 123;
}.call(E02 || (E02 = {})));
var E03;
(function () {
    this["A"] = "hello";
}.call(E03 || (E03 = {})));
var E04;
(function () {
    this[this[0] = "A"] = 0;
    this[this[1] = "B"] = 1;
    this[this[2] = "C"] = 2;
}.call(E04 || (E04 = {})));
var E05;
(function () {
    this[this[0] = "A"] = 0;
    this[this[10] = "B"] = 10;
    this[this[11] = "C"] = 11;
}.call(E05 || (E05 = {})));
var E06;
(function () {
    this["A"] = "one";
    this["B"] = "two";
    this["C"] = "three";
}.call(E06 || (E06 = {})));
var E07;
(function () {
    this[this[0] = "A"] = 0;
    this[this[1] = "B"] = 1;
    this["C"] = "hi";
    this[this[10] = "D"] = 10;
    this[this[11] = "E"] = 11;
    this["F"] = "bye";
}.call(E07 || (E07 = {})));
var E08;
(function () {
    this[this[10] = "A"] = 10;
    this["B"] = "hello";
    this[this[10] = "C"] = 10;
    this["D"] = "hello";
    this[this[10] = "E"] = 10;
}.call(E08 || (E08 = {})));
// Examples of numeric enum types with only constant members
var E10;
E10 || (E10 = {});
var E11;
(function () {
    this[this[0] = "A"] = 0;
    this[this[1] = "B"] = 1;
    this[this[2] = "C"] = 2;
}.call(E11 || (E11 = {})));
var E12;
(function () {
    this[this[1] = "A"] = 1;
    this[this[2] = "B"] = 2;
    this[this[4] = "C"] = 4;
}.call(E12 || (E12 = {})));
// Examples of numeric enum types with constant and computed members
var E20;
(function () {
    this[this["A"] = "foo".length] = "A";
    this[this["B"] = this.A + 1] = "B";
    this[this["C"] = +"123"] = "C";
    this[this["D"] = Math.sin(1)] = "D";
}.call(E20 || (E20 = {})));


//// [enumClassification.d.ts]
declare enum E01 {
    A = 0
}
declare enum E02 {
    A = 123
}
declare enum E03 {
    A = "hello"
}
declare enum E04 {
    A = 0,
    B = 1,
    C = 2
}
declare enum E05 {
    A = 0,
    B = 10,
    C = 11
}
declare enum E06 {
    A = "one",
    B = "two",
    C = "three"
}
declare enum E07 {
    A = 0,
    B = 1,
    C = "hi",
    D = 10,
    E = 11,
    F = "bye"
}
declare enum E08 {
    A = 10,
    B = "hello",
    C = 10,
    D = "hello",
    E = 10
}
declare enum E10 {
}
declare enum E11 {
    A = 0,
    B = 1,
    C = 2
}
declare enum E12 {
    A = 1,
    B = 2,
    C = 4
}
declare enum E20 {
    A,
    B,
    C,
    D
}
