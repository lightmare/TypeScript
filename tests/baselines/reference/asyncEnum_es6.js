//// [asyncEnum_es6.ts]
async enum E {  
  Value
}

//// [asyncEnum_es6.js]
var E;
(function () {
    this[this[0] = "Value"] = 0;
}.call(E || (E = {})));
