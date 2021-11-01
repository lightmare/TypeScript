//// [enumWithParenthesizedInitializer1.ts]
enum E {
 e = -(3
}

//// [enumWithParenthesizedInitializer1.js]
var E;
(function () {
    this[this[-3] = "e"] = -3;
}.call(E || (E = {})));
