//// [enumGenericTypeClash.ts]
class X<A,B,C> { }
enum X { MyVal }


//// [enumGenericTypeClash.js]
var X = /** @class */ (function () {
    function X() {
    }
    return X;
}());
(function () {
    this[this[0] = "MyVal"] = 0;
}.call(X || (X = {})));
