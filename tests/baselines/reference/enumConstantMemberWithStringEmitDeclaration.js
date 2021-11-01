//// [enumConstantMemberWithStringEmitDeclaration.ts]
enum T1 {
    a = "1",
    b = "1" + "2",
    c = "1" + "2" + "3"
}

enum T2 {
    a = "1",
    b = "1" + "2"
}

enum T3 {
    a = "1",
    b = "1" + "2"
}

enum T4 {
    a = "1"
}

enum T5 {
    a = "1" + "2"
}

declare enum T6 {
    a = "1",
    b = "1" + "2"
}


//// [enumConstantMemberWithStringEmitDeclaration.js]
var T1;
(function () {
    this["a"] = "1";
    this["b"] = "12";
    this["c"] = "123";
}.call(T1 || (T1 = {})));
var T2;
(function () {
    this["a"] = "1";
    this["b"] = "12";
}.call(T2 || (T2 = {})));
var T3;
(function () {
    this["a"] = "1";
    this["b"] = "12";
}.call(T3 || (T3 = {})));
var T4;
(function () {
    this["a"] = "1";
}.call(T4 || (T4 = {})));
var T5;
(function () {
    this["a"] = "12";
}.call(T5 || (T5 = {})));


//// [enumConstantMemberWithStringEmitDeclaration.d.ts]
declare enum T1 {
    a = "1",
    b = "12",
    c = "123"
}
declare enum T2 {
    a = "1",
    b = "12"
}
declare enum T3 {
    a = "1",
    b = "12"
}
declare enum T4 {
    a = "1"
}
declare enum T5 {
    a = "12"
}
declare enum T6 {
    a = "1",
    b = "12"
}
