//// [asyncEnum_es6.ts]
async enum E {  
  Value
}

//// [asyncEnum_es6.js]
var E;
(function (E) {
    E[E[0] = "Value"] = 0;
})(E || (E = {}));
