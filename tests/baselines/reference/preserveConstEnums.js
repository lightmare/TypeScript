//// [preserveConstEnums.ts]
const enum E {
    Value = 1, Value2 = Value
}

//// [preserveConstEnums.js]
var E;
(function () {
    this[this[1] = "Value"] = 1;
    this[this[1] = "Value2"] = 1;
}.call(E || (E = {})));
