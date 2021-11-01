//// [parserInterfaceKeywordInEnum1.ts]
"use strict";

enum Bar {
    interface,
}


//// [parserInterfaceKeywordInEnum1.js]
"use strict";
var Bar;
(function () {
    this[this[0] = "interface"] = 0;
}.call(Bar || (Bar = {})));
