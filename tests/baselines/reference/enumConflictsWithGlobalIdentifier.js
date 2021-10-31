//// [enumConflictsWithGlobalIdentifier.ts]
enum Position { 
    IgnoreRulesSpecific = 0,
}
var x = IgnoreRulesSpecific.
var y = Position.IgnoreRulesSpecific;


//// [enumConflictsWithGlobalIdentifier.js]
var Position;
(function (Position) {
    Position[Position[0] = "IgnoreRulesSpecific"] = 0;
})(Position || (Position = {}));
var x = IgnoreRulesSpecific.
;
var y = Position.IgnoreRulesSpecific;
