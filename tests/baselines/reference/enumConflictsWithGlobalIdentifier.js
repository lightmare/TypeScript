//// [enumConflictsWithGlobalIdentifier.ts]
enum Position { 
    IgnoreRulesSpecific = 0,
}
var x = IgnoreRulesSpecific.
var y = Position.IgnoreRulesSpecific;


//// [enumConflictsWithGlobalIdentifier.js]
var Position;
(function () {
    this[this[0] = "IgnoreRulesSpecific"] = 0;
}.call(Position || (Position = {})));
var x = IgnoreRulesSpecific.
;
var y = Position.IgnoreRulesSpecific;
