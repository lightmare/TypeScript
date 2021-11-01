//// [enumIdentifierLiterals.ts]
enum Nums {
    1.0,
    11e-1,
    0.12e1,
    "13e-1",
    0xF00D
}

//// [enumIdentifierLiterals.js]
var Nums;
(function () {
    this[this[0] = 1] = 0;
    this[this[1] = 1.1] = 1;
    this[this[2] = 1.2] = 2;
    this[this[3] = "13e-1"] = 3;
    this[this[4] = 61453] = 4;
}.call(Nums || (Nums = {})));
