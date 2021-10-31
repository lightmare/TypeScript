//// [parserInterfaceKeywordInEnum.ts]
enum Bar {
    interface,
}


//// [parserInterfaceKeywordInEnum.js]
var Bar;
(function (Bar) {
    Bar[Bar[0] = "interface"] = 0;
})(Bar || (Bar = {}));
