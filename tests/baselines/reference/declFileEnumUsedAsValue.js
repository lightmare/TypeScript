//// [declFileEnumUsedAsValue.ts]
enum e {
    a,
    b,
    c
}
var x = e;

//// [declFileEnumUsedAsValue.js]
var e;
(function () {
    this[this[0] = "a"] = 0;
    this[this[1] = "b"] = 1;
    this[this[2] = "c"] = 2;
}.call(e || (e = {})));
var x = e;


//// [declFileEnumUsedAsValue.d.ts]
declare enum e {
    a = 0,
    b = 1,
    c = 2
}
declare var x: typeof e;
