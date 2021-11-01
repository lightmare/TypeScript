//// [enumWithoutInitializerAfterComputedMember.ts]
enum E {
    a,
    b = a,
    c
}

//// [enumWithoutInitializerAfterComputedMember.js]
var E;
(function () {
    this[this[0] = "a"] = 0;
    this[this[0] = "b"] = 0;
    this[this[1] = "c"] = 1;
}.call(E || (E = {})));
