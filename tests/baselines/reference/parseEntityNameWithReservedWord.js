//// [parseEntityNameWithReservedWord.ts]
enum Bool { false }
const x: Bool.false = Bool.false;


//// [parseEntityNameWithReservedWord.js]
var Bool;
(function () {
    this[this[0] = "false"] = 0;
}.call(Bool || (Bool = {})));
var x = Bool["false"];
