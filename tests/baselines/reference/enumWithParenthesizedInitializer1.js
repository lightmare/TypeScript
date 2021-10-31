//// [enumWithParenthesizedInitializer1.ts]
enum E {
 e = -(3
}

//// [enumWithParenthesizedInitializer1.js]
var E;
(function (E) {
    E[E[-3] = "e"] = -3;
})(E || (E = {}));
