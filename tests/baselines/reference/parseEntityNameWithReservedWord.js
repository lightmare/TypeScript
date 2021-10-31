//// [parseEntityNameWithReservedWord.ts]
enum Bool { false }
const x: Bool.false = Bool.false;


//// [parseEntityNameWithReservedWord.js]
var Bool;
(function (Bool) {
    Bool[Bool[0] = "false"] = 0;
})(Bool || (Bool = {}));
var x = Bool["false"];
