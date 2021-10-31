//// [enumMapBackIntoItself.ts]
enum TShirtSize {
   Small,
   Medium,
   Large
}
var mySize = TShirtSize.Large;
var test = TShirtSize[mySize];
// specifically checking output here, bug was that test used to be undefined at runtime
test + ''

//// [enumMapBackIntoItself.js]
var TShirtSize;
(function (TShirtSize) {
    TShirtSize[TShirtSize[0] = "Small"] = 0;
    TShirtSize[TShirtSize[1] = "Medium"] = 1;
    TShirtSize[TShirtSize[2] = "Large"] = 2;
})(TShirtSize || (TShirtSize = {}));
var mySize = TShirtSize.Large;
var test = TShirtSize[mySize];
// specifically checking output here, bug was that test used to be undefined at runtime
test + '';
