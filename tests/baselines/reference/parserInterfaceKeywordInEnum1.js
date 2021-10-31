//// [parserInterfaceKeywordInEnum1.ts]
"use strict";

enum Bar {
    interface,
}


//// [parserInterfaceKeywordInEnum1.js]
"use strict";
var Bar;
(function (Bar) {
    Bar[Bar[0] = "interface"] = 0;
})(Bar || (Bar = {}));
