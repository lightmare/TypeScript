//// [declFileEnumUsedAsValue.ts]
enum e {
    a,
    b,
    c
}
var x = e;

//// [declFileEnumUsedAsValue.js]
var e;
(function (e) {
    e[e[0] = "a"] = 0;
    e[e[1] = "b"] = 1;
    e[e[2] = "c"] = 2;
})(e || (e = {}));
var x = e;


//// [declFileEnumUsedAsValue.d.ts]
declare enum e {
    a = 0,
    b = 1,
    c = 2
}
declare var x: typeof e;
