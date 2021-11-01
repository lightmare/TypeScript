//// [parserRealSource3.ts]
// Copyright (c) Microsoft. All rights reserved. Licensed under the Apache License, Version 2.0. 
// See LICENSE.txt in the project root for complete license information.

///<reference path='typescript.ts' />

module TypeScript {
    // Note: Any addition to the NodeType should also be supported with addition to AstWalkerDetailCallback
    export enum NodeType {
        None,
        Empty,
        EmptyExpr,
        True,
        False,
        This,
        Super,
        QString,
        Regex,
        Null,
        ArrayLit,
        ObjectLit,
        Void,
        Comma,
        Pos,
        Neg,
        Delete,
        Await,
        In,
        Dot,
        From,
        Is,
        InstOf,
        Typeof,
        NumberLit,
        Name,
        TypeRef,
        Index,
        Call,
        New,
        Asg,
        AsgAdd,
        AsgSub,
        AsgDiv,
        AsgMul,
        AsgMod,
        AsgAnd,
        AsgXor,
        AsgOr,
        AsgLsh,
        AsgRsh,
        AsgRs2,
        ConditionalExpression,
        LogOr,
        LogAnd,
        Or,
        Xor,
        And,
        Eq,
        Ne,
        Eqv,
        NEqv,
        Lt,
        Le,
        Gt,
        Ge,
        Add,
        Sub,
        Mul,
        Div,
        Mod,
        Lsh,
        Rsh,
        Rs2,
        Not,
        LogNot,
        IncPre,
        DecPre,
        IncPost,
        DecPost,
        TypeAssertion,
        FuncDecl,
        Member,
        VarDecl,
        ArgDecl,
        Return,
        Break,
        Continue,
        Throw,
        For,
        ForIn,
        If,
        While,
        DoWhile,
        Block,
        Case,
        Switch,
        Try,
        TryCatch,
        TryFinally,
        Finally,
        Catch,
        List,
        Script,
        ClassDeclaration,
        InterfaceDeclaration,
        ModuleDeclaration,
        ImportDeclaration,
        With,
        Label,
        LabeledStatement,
        EBStart,
        GotoEB,
        EndCode,
        Error,
        Comment,
        Debugger,
        GeneralNode = FuncDecl,
        LastAsg = AsgRs2,
    }
}

//// [parserRealSource3.js]
// Copyright (c) Microsoft. All rights reserved. Licensed under the Apache License, Version 2.0. 
// See LICENSE.txt in the project root for complete license information.
///<reference path='typescript.ts' />
var TypeScript;
(function (TypeScript) {
    // Note: Any addition to the NodeType should also be supported with addition to AstWalkerDetailCallback
    var NodeType;
    (function () {
        this[this[0] = "None"] = 0;
        this[this[1] = "Empty"] = 1;
        this[this[2] = "EmptyExpr"] = 2;
        this[this[3] = "True"] = 3;
        this[this[4] = "False"] = 4;
        this[this[5] = "This"] = 5;
        this[this[6] = "Super"] = 6;
        this[this[7] = "QString"] = 7;
        this[this[8] = "Regex"] = 8;
        this[this[9] = "Null"] = 9;
        this[this[10] = "ArrayLit"] = 10;
        this[this[11] = "ObjectLit"] = 11;
        this[this[12] = "Void"] = 12;
        this[this[13] = "Comma"] = 13;
        this[this[14] = "Pos"] = 14;
        this[this[15] = "Neg"] = 15;
        this[this[16] = "Delete"] = 16;
        this[this[17] = "Await"] = 17;
        this[this[18] = "In"] = 18;
        this[this[19] = "Dot"] = 19;
        this[this[20] = "From"] = 20;
        this[this[21] = "Is"] = 21;
        this[this[22] = "InstOf"] = 22;
        this[this[23] = "Typeof"] = 23;
        this[this[24] = "NumberLit"] = 24;
        this[this[25] = "Name"] = 25;
        this[this[26] = "TypeRef"] = 26;
        this[this[27] = "Index"] = 27;
        this[this[28] = "Call"] = 28;
        this[this[29] = "New"] = 29;
        this[this[30] = "Asg"] = 30;
        this[this[31] = "AsgAdd"] = 31;
        this[this[32] = "AsgSub"] = 32;
        this[this[33] = "AsgDiv"] = 33;
        this[this[34] = "AsgMul"] = 34;
        this[this[35] = "AsgMod"] = 35;
        this[this[36] = "AsgAnd"] = 36;
        this[this[37] = "AsgXor"] = 37;
        this[this[38] = "AsgOr"] = 38;
        this[this[39] = "AsgLsh"] = 39;
        this[this[40] = "AsgRsh"] = 40;
        this[this[41] = "AsgRs2"] = 41;
        this[this[42] = "ConditionalExpression"] = 42;
        this[this[43] = "LogOr"] = 43;
        this[this[44] = "LogAnd"] = 44;
        this[this[45] = "Or"] = 45;
        this[this[46] = "Xor"] = 46;
        this[this[47] = "And"] = 47;
        this[this[48] = "Eq"] = 48;
        this[this[49] = "Ne"] = 49;
        this[this[50] = "Eqv"] = 50;
        this[this[51] = "NEqv"] = 51;
        this[this[52] = "Lt"] = 52;
        this[this[53] = "Le"] = 53;
        this[this[54] = "Gt"] = 54;
        this[this[55] = "Ge"] = 55;
        this[this[56] = "Add"] = 56;
        this[this[57] = "Sub"] = 57;
        this[this[58] = "Mul"] = 58;
        this[this[59] = "Div"] = 59;
        this[this[60] = "Mod"] = 60;
        this[this[61] = "Lsh"] = 61;
        this[this[62] = "Rsh"] = 62;
        this[this[63] = "Rs2"] = 63;
        this[this[64] = "Not"] = 64;
        this[this[65] = "LogNot"] = 65;
        this[this[66] = "IncPre"] = 66;
        this[this[67] = "DecPre"] = 67;
        this[this[68] = "IncPost"] = 68;
        this[this[69] = "DecPost"] = 69;
        this[this[70] = "TypeAssertion"] = 70;
        this[this[71] = "FuncDecl"] = 71;
        this[this[72] = "Member"] = 72;
        this[this[73] = "VarDecl"] = 73;
        this[this[74] = "ArgDecl"] = 74;
        this[this[75] = "Return"] = 75;
        this[this[76] = "Break"] = 76;
        this[this[77] = "Continue"] = 77;
        this[this[78] = "Throw"] = 78;
        this[this[79] = "For"] = 79;
        this[this[80] = "ForIn"] = 80;
        this[this[81] = "If"] = 81;
        this[this[82] = "While"] = 82;
        this[this[83] = "DoWhile"] = 83;
        this[this[84] = "Block"] = 84;
        this[this[85] = "Case"] = 85;
        this[this[86] = "Switch"] = 86;
        this[this[87] = "Try"] = 87;
        this[this[88] = "TryCatch"] = 88;
        this[this[89] = "TryFinally"] = 89;
        this[this[90] = "Finally"] = 90;
        this[this[91] = "Catch"] = 91;
        this[this[92] = "List"] = 92;
        this[this[93] = "Script"] = 93;
        this[this[94] = "ClassDeclaration"] = 94;
        this[this[95] = "InterfaceDeclaration"] = 95;
        this[this[96] = "ModuleDeclaration"] = 96;
        this[this[97] = "ImportDeclaration"] = 97;
        this[this[98] = "With"] = 98;
        this[this[99] = "Label"] = 99;
        this[this[100] = "LabeledStatement"] = 100;
        this[this[101] = "EBStart"] = 101;
        this[this[102] = "GotoEB"] = 102;
        this[this[103] = "EndCode"] = 103;
        this[this[104] = "Error"] = 104;
        this[this[105] = "Comment"] = 105;
        this[this[106] = "Debugger"] = 106;
        this[this[71] = "GeneralNode"] = 71;
        this[this[41] = "LastAsg"] = 41;
    }.call(NodeType = TypeScript.NodeType || (TypeScript.NodeType = {})));
})(TypeScript || (TypeScript = {}));
