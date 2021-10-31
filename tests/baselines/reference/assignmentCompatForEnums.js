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
(function (TokenType) {
    TokenType[TokenType[0] = "One"] = 0;
    TokenType[TokenType[1] = "Two"] = 1;
})(TokenType || (TokenType = {}));
;
var list = {};
function returnType() { return null; }
function foo() {
    var x = returnType();
    var x = list['one'];
}
