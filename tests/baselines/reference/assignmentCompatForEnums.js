//// [assignmentCompatForEnums.ts]
enum TokenType { One, Two };

var list = {};


function returnType(): TokenType { return null; }

function foo() {
    var x = returnType();

    var x: TokenType = list['one'];
}



//// [assignmentCompatForEnums.js]
var TokenType;
(function () {
    this[this[0] = "One"] = 0;
    this[this[1] = "Two"] = 1;
}.call(TokenType || (TokenType = {})));
;
var list = {};
function returnType() { return null; }
function foo() {
    var x = returnType();
    var x = list['one'];
}
