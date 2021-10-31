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
(function (Nums) {
    Nums[Nums[0] = 1] = 0;
    Nums[Nums[1] = 1.1] = 1;
    Nums[Nums[2] = 1.2] = 2;
    Nums[Nums[3] = "13e-1"] = 3;
    Nums[Nums[4] = 61453] = 4;
})(Nums || (Nums = {}));
