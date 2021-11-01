//// [collisionThisExpressionAndEnumInGlobal.ts]
enum _this { // Error
    _thisVal1,
    _thisVal2,
}
var f = () => this;

//// [collisionThisExpressionAndEnumInGlobal.js]
var _this_1 = this;
var _this;
(function () {
    this[this[0] = "_thisVal1"] = 0;
    this[this[1] = "_thisVal2"] = 1;
}.call(_this || (_this = {})));
var f = function () { return _this_1; };
