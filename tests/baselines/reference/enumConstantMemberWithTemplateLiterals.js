//// [enumConstantMemberWithTemplateLiterals.ts]
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
    d = 1,
    e = `1` - `1`,
    f = `1` + 1,
    g = `1${"2"}3`,
    h = `1`.length
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


//// [enumConstantMemberWithTemplateLiterals.js]
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
    this[this[0] = "e"] = 0;
    this[this[0] = "f"] = 0;
    this[this[0] = "g"] = 0;
    this[this[0] = "h"] = 0;
}.call(T5 || (T5 = {})));
var T6;
(function () {
    this[this[1] = "a"] = 1;
    this[this["b"] = "12".length] = "b";
}.call(T6 || (T6 = {})));
