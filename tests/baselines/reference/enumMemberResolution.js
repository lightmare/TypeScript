//// [enumMemberResolution.ts]
enum Position2 {
    IgnoreRulesSpecific = 0
}
var x = IgnoreRulesSpecific. // error
var y = 1;
var z = Position2.IgnoreRulesSpecific; // no error


//// [enumMemberResolution.js]
var Position2;
(function () {
    this[this[0] = "IgnoreRulesSpecific"] = 0;
}.call(Position2 || (Position2 = {})));
var x = IgnoreRulesSpecific.
; // error
var y = 1;
var z = Position2.IgnoreRulesSpecific; // no error
