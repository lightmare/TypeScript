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
    (function (NodeType) {
        NodeType[NodeType[0] = "None"] = 0;
        NodeType[NodeType[1] = "Empty"] = 1;
        NodeType[NodeType[2] = "EmptyExpr"] = 2;
        NodeType[NodeType[3] = "True"] = 3;
        NodeType[NodeType[4] = "False"] = 4;
        NodeType[NodeType[5] = "This"] = 5;
        NodeType[NodeType[6] = "Super"] = 6;
        NodeType[NodeType[7] = "QString"] = 7;
        NodeType[NodeType[8] = "Regex"] = 8;
        NodeType[NodeType[9] = "Null"] = 9;
        NodeType[NodeType[10] = "ArrayLit"] = 10;
        NodeType[NodeType[11] = "ObjectLit"] = 11;
        NodeType[NodeType[12] = "Void"] = 12;
        NodeType[NodeType[13] = "Comma"] = 13;
        NodeType[NodeType[14] = "Pos"] = 14;
        NodeType[NodeType[15] = "Neg"] = 15;
        NodeType[NodeType[16] = "Delete"] = 16;
        NodeType[NodeType[17] = "Await"] = 17;
        NodeType[NodeType[18] = "In"] = 18;
        NodeType[NodeType[19] = "Dot"] = 19;
        NodeType[NodeType[20] = "From"] = 20;
        NodeType[NodeType[21] = "Is"] = 21;
        NodeType[NodeType[22] = "InstOf"] = 22;
        NodeType[NodeType[23] = "Typeof"] = 23;
        NodeType[NodeType[24] = "NumberLit"] = 24;
        NodeType[NodeType[25] = "Name"] = 25;
        NodeType[NodeType[26] = "TypeRef"] = 26;
        NodeType[NodeType[27] = "Index"] = 27;
        NodeType[NodeType[28] = "Call"] = 28;
        NodeType[NodeType[29] = "New"] = 29;
        NodeType[NodeType[30] = "Asg"] = 30;
        NodeType[NodeType[31] = "AsgAdd"] = 31;
        NodeType[NodeType[32] = "AsgSub"] = 32;
        NodeType[NodeType[33] = "AsgDiv"] = 33;
        NodeType[NodeType[34] = "AsgMul"] = 34;
        NodeType[NodeType[35] = "AsgMod"] = 35;
        NodeType[NodeType[36] = "AsgAnd"] = 36;
        NodeType[NodeType[37] = "AsgXor"] = 37;
        NodeType[NodeType[38] = "AsgOr"] = 38;
        NodeType[NodeType[39] = "AsgLsh"] = 39;
        NodeType[NodeType[40] = "AsgRsh"] = 40;
        NodeType[NodeType[41] = "AsgRs2"] = 41;
        NodeType[NodeType[42] = "ConditionalExpression"] = 42;
        NodeType[NodeType[43] = "LogOr"] = 43;
        NodeType[NodeType[44] = "LogAnd"] = 44;
        NodeType[NodeType[45] = "Or"] = 45;
        NodeType[NodeType[46] = "Xor"] = 46;
        NodeType[NodeType[47] = "And"] = 47;
        NodeType[NodeType[48] = "Eq"] = 48;
        NodeType[NodeType[49] = "Ne"] = 49;
        NodeType[NodeType[50] = "Eqv"] = 50;
        NodeType[NodeType[51] = "NEqv"] = 51;
        NodeType[NodeType[52] = "Lt"] = 52;
        NodeType[NodeType[53] = "Le"] = 53;
        NodeType[NodeType[54] = "Gt"] = 54;
        NodeType[NodeType[55] = "Ge"] = 55;
        NodeType[NodeType[56] = "Add"] = 56;
        NodeType[NodeType[57] = "Sub"] = 57;
        NodeType[NodeType[58] = "Mul"] = 58;
        NodeType[NodeType[59] = "Div"] = 59;
        NodeType[NodeType[60] = "Mod"] = 60;
        NodeType[NodeType[61] = "Lsh"] = 61;
        NodeType[NodeType[62] = "Rsh"] = 62;
        NodeType[NodeType[63] = "Rs2"] = 63;
        NodeType[NodeType[64] = "Not"] = 64;
        NodeType[NodeType[65] = "LogNot"] = 65;
        NodeType[NodeType[66] = "IncPre"] = 66;
        NodeType[NodeType[67] = "DecPre"] = 67;
        NodeType[NodeType[68] = "IncPost"] = 68;
        NodeType[NodeType[69] = "DecPost"] = 69;
        NodeType[NodeType[70] = "TypeAssertion"] = 70;
        NodeType[NodeType[71] = "FuncDecl"] = 71;
        NodeType[NodeType[72] = "Member"] = 72;
        NodeType[NodeType[73] = "VarDecl"] = 73;
        NodeType[NodeType[74] = "ArgDecl"] = 74;
        NodeType[NodeType[75] = "Return"] = 75;
        NodeType[NodeType[76] = "Break"] = 76;
        NodeType[NodeType[77] = "Continue"] = 77;
        NodeType[NodeType[78] = "Throw"] = 78;
        NodeType[NodeType[79] = "For"] = 79;
        NodeType[NodeType[80] = "ForIn"] = 80;
        NodeType[NodeType[81] = "If"] = 81;
        NodeType[NodeType[82] = "While"] = 82;
        NodeType[NodeType[83] = "DoWhile"] = 83;
        NodeType[NodeType[84] = "Block"] = 84;
        NodeType[NodeType[85] = "Case"] = 85;
        NodeType[NodeType[86] = "Switch"] = 86;
        NodeType[NodeType[87] = "Try"] = 87;
        NodeType[NodeType[88] = "TryCatch"] = 88;
        NodeType[NodeType[89] = "TryFinally"] = 89;
        NodeType[NodeType[90] = "Finally"] = 90;
        NodeType[NodeType[91] = "Catch"] = 91;
        NodeType[NodeType[92] = "List"] = 92;
        NodeType[NodeType[93] = "Script"] = 93;
        NodeType[NodeType[94] = "ClassDeclaration"] = 94;
        NodeType[NodeType[95] = "InterfaceDeclaration"] = 95;
        NodeType[NodeType[96] = "ModuleDeclaration"] = 96;
        NodeType[NodeType[97] = "ImportDeclaration"] = 97;
        NodeType[NodeType[98] = "With"] = 98;
        NodeType[NodeType[99] = "Label"] = 99;
        NodeType[NodeType[100] = "LabeledStatement"] = 100;
        NodeType[NodeType[101] = "EBStart"] = 101;
        NodeType[NodeType[102] = "GotoEB"] = 102;
        NodeType[NodeType[103] = "EndCode"] = 103;
        NodeType[NodeType[104] = "Error"] = 104;
        NodeType[NodeType[105] = "Comment"] = 105;
        NodeType[NodeType[106] = "Debugger"] = 106;
        NodeType[NodeType[71] = "GeneralNode"] = 71;
        NodeType[NodeType[41] = "LastAsg"] = 41;
    })(NodeType = TypeScript.NodeType || (TypeScript.NodeType = {}));
})(TypeScript || (TypeScript = {}));
