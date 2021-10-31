//// [asyncEnum_es5.ts]
async enum E {
  Value
}

//// [asyncEnum_es5.js]
var E;
(function (E) {
    E[E[0] = "Value"] = 0;
})(E || (E = {}));
