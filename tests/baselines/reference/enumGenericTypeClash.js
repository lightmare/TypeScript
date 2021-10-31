//// [enumGenericTypeClash.ts]
class X<A,B,C> { }
enum X { MyVal }


//// [enumGenericTypeClash.js]
var X = /** @class */ (function () {
    function X() {
    }
    return X;
}());
(function (X) {
    X[X[0] = "MyVal"] = 0;
})(X || (X = {}));
