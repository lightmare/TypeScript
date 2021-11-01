//// [computedPropertyNames7_ES5.ts]
enum E {
    member
}
var v = {
    [E.member]: 0
}

//// [computedPropertyNames7_ES5.js]
var _a;
var E;
(function () {
    this[this[0] = "member"] = 0;
}.call(E || (E = {})));
var v = (_a = {},
    _a[E.member] = 0,
    _a);
