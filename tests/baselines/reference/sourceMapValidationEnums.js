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
(function (e) {
    e[e[0] = "x"] = 0;
    e[e[1] = "y"] = 1;
    e[e[2] = "x"] = 2;
})(e || (e = {}));
var e2;
(function (e2) {
    e2[e2[10] = "x"] = 10;
    e2[e2[10] = "y"] = 10;
    e2[e2[11] = "z"] = 11;
    e2[e2[12] = "x2"] = 12;
})(e2 || (e2 = {}));
var e3;
e3 || (e3 = {});
//# sourceMappingURL=sourceMapValidationEnums.js.map