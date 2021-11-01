//// [enumWithQuotedElementName1.ts]
enum E {
   'fo"o',
}

//// [enumWithQuotedElementName1.js]
var E;
(function () {
    this[this[0] = "fo\"o"] = 0;
}.call(E || (E = {})));
