//// [enumWithQuotedElementName2.ts]
enum E {
   "fo'o",
}

//// [enumWithQuotedElementName2.js]
var E;
(function (E) {
    E[E[0] = "fo'o"] = 0;
})(E || (E = {}));
