//// [asyncEnum_es5.ts]
async enum E {
  Value
}

//// [asyncEnum_es5.js]
var E;
(function () {
    this[this[0] = "Value"] = 0;
}.call(E || (E = {})));
