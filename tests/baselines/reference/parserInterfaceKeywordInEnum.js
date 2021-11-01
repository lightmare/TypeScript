//// [parserInterfaceKeywordInEnum.ts]
enum Bar {
    interface,
}


//// [parserInterfaceKeywordInEnum.js]
var Bar;
(function () {
    this[this[0] = "interface"] = 0;
}.call(Bar || (Bar = {})));
