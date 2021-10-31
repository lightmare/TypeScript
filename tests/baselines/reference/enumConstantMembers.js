//// [enumConstantMembers.ts]
// Constant members allow negatives, but not decimals. Also hex literals are allowed
enum E1 {
    a = 1,
    b
}
enum E2 {
    a = - 1,
    b
}
enum E3 {
    a = 0.1,
    b // Error because 0.1 is not a constant
}

declare enum E4 {
    a = 1,
    b = -1,
    c = 0.1 // Not a constant
}

enum E5 {
    a = 1 / 0,
    b = 2 / 0.0,
    c = 1.0 / 0.0,
    d = 0.0 / 0.0,
    e = NaN,
    f = Infinity,
    g = -Infinity
}

const enum E6 {
    a = 1 / 0,
    b = 2 / 0.0,
    c = 1.0 / 0.0,
    d = 0.0 / 0.0,
    e = NaN,
    f = Infinity,
    g = -Infinity
}


//// [enumConstantMembers.js]
// Constant members allow negatives, but not decimals. Also hex literals are allowed
var E1;
(function (E1) {
    E1[E1[1] = "a"] = 1;
    E1[E1[2] = "b"] = 2;
})(E1 || (E1 = {}));
var E2;
(function (E2) {
    E2[E2[-1] = "a"] = -1;
    E2[E2[0] = "b"] = 0;
})(E2 || (E2 = {}));
var E3;
(function (E3) {
    E3[E3[0.1] = "a"] = 0.1;
    E3[E3[1.1] = "b"] = 1.1; // Error because 0.1 is not a constant
})(E3 || (E3 = {}));
var E5;
(function (E5) {
    E5[E5[Infinity] = "a"] = Infinity;
    E5[E5[Infinity] = "b"] = Infinity;
    E5[E5[Infinity] = "c"] = Infinity;
    E5[E5[NaN] = "d"] = NaN;
    E5[E5[NaN] = "e"] = NaN;
    E5[E5[Infinity] = "f"] = Infinity;
    E5[E5[-Infinity] = "g"] = -Infinity;
})(E5 || (E5 = {}));
