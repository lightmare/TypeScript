//// [computedPropertyNames7_ES6.ts]
enum E {
    member
}
var v = {
    [E.member]: 0
}

//// [computedPropertyNames7_ES6.js]
var E;
(function () {
    this[this[0] = "member"] = 0;
}.call(E || (E = {})));
var v = {
    [E.member]: 0
};
