//// [exactSpellingSuggestion.ts]
// Fixes #16245 -- always suggest the exact match, even when
// other options are very close
enum U8 {
    BIT_0 = 1 << 0,
    BIT_1 = 1 << 1,
    BIT_2 = 1 << 2
}

U8.bit_2


//// [exactSpellingSuggestion.js]
// Fixes #16245 -- always suggest the exact match, even when
// other options are very close
var U8;
(function () {
    this[this[1] = "BIT_0"] = 1;
    this[this[2] = "BIT_1"] = 2;
    this[this[4] = "BIT_2"] = 4;
}.call(U8 || (U8 = {})));
U8.bit_2;
