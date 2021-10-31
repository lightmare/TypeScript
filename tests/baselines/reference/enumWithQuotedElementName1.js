//// [enumWithQuotedElementName1.ts]
enum E {
   'fo"o',
}

//// [enumWithQuotedElementName1.js]
var E;
(function (E) {
    E[E[0] = "fo\"o"] = 0;
})(E || (E = {}));
