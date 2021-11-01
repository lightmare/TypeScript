//// [sourceMapValidationEnums.ts]
enum e {
    x,
    y,
    x
}
enum e2 {
    x = 10,
    y = 10,
    z,
    x2
}
enum e3 {
}

//// [sourceMapValidationEnums.js]
var e;
(function () {
    this[this[0] = "x"] = 0;
    this[this[1] = "y"] = 1;
    this[this[2] = "x"] = 2;
}.call(e || (e = {})));
var e2;
(function () {
    this[this[10] = "x"] = 10;
    this[this[10] = "y"] = 10;
    this[this[11] = "z"] = 11;
    this[this[12] = "x2"] = 12;
}.call(e2 || (e2 = {})));
var e3;
e3 || (e3 = {});
//# sourceMappingURL=sourceMapValidationEnums.js.map