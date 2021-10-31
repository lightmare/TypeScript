//// [enumWithoutInitializerAfterComputedMember.ts]
enum E {
    a,
    b = a,
    c
}

//// [enumWithoutInitializerAfterComputedMember.js]
var E;
(function (E) {
    E[E[0] = "a"] = 0;
    E[E[0] = "b"] = 0;
    E[E[1] = "c"] = 1;
})(E || (E = {}));
