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
(function () {
    this[this[0] = "Small"] = 0;
    this[this[1] = "Medium"] = 1;
    this[this[2] = "Large"] = 2;
}.call(TShirtSize || (TShirtSize = {})));
var mySize = TShirtSize.Large;
var test = TShirtSize[mySize];
// specifically checking output here, bug was that test used to be undefined at runtime
test + '';
