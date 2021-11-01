//// [enumWithQuotedElementName2.ts]
enum E {
   "fo'o",
}

//// [enumWithQuotedElementName2.js]
var E;
(function () {
    this[this[0] = "fo'o"] = 0;
}.call(E || (E = {})));
