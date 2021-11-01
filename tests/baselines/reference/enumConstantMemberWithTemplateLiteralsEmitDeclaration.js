//// [enumConstantMemberWithTemplateLiteralsEmitDeclaration.ts]
enum T1 {
    a = `1`
}

enum T2 {
    a = `1`,
    b = "2",
    c = 3
}

enum T3 {
    a = `1` + `1`
}

enum T4 {
    a = `1`,
    b = `1` + `1`,
    c = `1` + "2",
    d = "2" + `1`,
    e = "2" + `1` + `1`
}

enum T5 {
    a = `1`,
    b = `1` + `2`,
    c = `1` + `2` + `3`,
    d = 1
}

enum T6 {
    a = 1,
    b = `12`.length
}

declare enum T7 {
    a = `1`,
    b = `1` + `1`,
    c = "2" + `1`
}


//// [enumConstantMemberWithTemplateLiteralsEmitDeclaration.js]
var T1;
(function () {
    this["a"] = "1";
}.call(T1 || (T1 = {})));
var T2;
(function () {
    this["a"] = "1";
    this["b"] = "2";
    this[this[3] = "c"] = 3;
}.call(T2 || (T2 = {})));
var T3;
(function () {
    this["a"] = "11";
}.call(T3 || (T3 = {})));
var T4;
(function () {
    this["a"] = "1";
    this["b"] = "11";
    this["c"] = "12";
    this["d"] = "21";
    this["e"] = "211";
}.call(T4 || (T4 = {})));
var T5;
(function () {
    this["a"] = "1";
    this["b"] = "12";
    this["c"] = "123";
    this[this[1] = "d"] = 1;
}.call(T5 || (T5 = {})));
var T6;
(function () {
    this[this[1] = "a"] = 1;
    this[this["b"] = "12".length] = "b";
}.call(T6 || (T6 = {})));


//// [enumConstantMemberWithTemplateLiteralsEmitDeclaration.d.ts]
declare enum T1 {
    a = "1"
}
declare enum T2 {
    a = "1",
    b = "2",
    c = 3
}
declare enum T3 {
    a = "11"
}
declare enum T4 {
    a = "1",
    b = "11",
    c = "12",
    d = "21",
    e = "211"
}
declare enum T5 {
    a = "1",
    b = "12",
    c = "123",
    d = 1
}
declare enum T6 {
    a = 1,
    b
}
declare enum T7 {
    a = "1",
    b = "11",
    c = "21"
}
