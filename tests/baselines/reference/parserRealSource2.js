//// [parserRealSource2.ts]
// Copyright (c) Microsoft. All rights reserved. Licensed under the Apache License, Version 2.0. 
// See LICENSE.txt in the project root for complete license information.

///<reference path='typescript.ts' />

module TypeScript {

    export function hasFlag(val: number, flag: number) {
        return (val & flag) != 0;
    }

    export enum ErrorRecoverySet {
        None = 0,
        Comma = 1, // Comma
        SColon = 1 << 1, // SColon
        Asg = 1 << 2, // Asg
        BinOp = 1 << 3, // Lsh, Rsh, Rs2, Le, Ge, INSTANCEOF, EQ, NE, Eqv, NEqv, LogAnd, LogOr, AsgMul, AsgDiv
        // AsgMod, AsgAdd, AsgSub, AsgLsh, AsgRsh, AsgRs2, AsgAnd, AsgXor, AsgOr, QMark, Mult, Div, 
        // Pct, GT, LT, And, Xor, Or
        RBrack = 1 << 4, // RBrack
        RCurly = 1 << 5, // RCurly
        RParen = 1 << 6, // RParen
        Dot = 1 << 7, // Dot
        Colon = 1 << 8, // Colon
        PrimType = 1 << 9, // number, string, boolean
        AddOp = 1 << 10, // Add, Sub
        LCurly = 1 << 11, // LCurly
        PreOp = 1 << 12, // Tilde, Bang, Inc, Dec
        RegExp = 1 << 13, // RegExp
        LParen = 1 << 14, // LParen
        LBrack = 1 << 15, // LBrack
        Scope = 1 << 16, // Scope
        In = 1 << 17, // IN
        SCase = 1 << 18, // CASE, DEFAULT
        Else = 1 << 19, // ELSE
        Catch = 1 << 20, // CATCH, FINALLY
        Var = 1 << 21, // 
        Stmt = 1 << 22, // BREAK, RETURN, THROW, DEBUGGER, FOR, SWITCH, DO, IF, TRY, WITH
        While = 1 << 23, // WHILE
        ID = 1 << 24, // ID
        Prefix = 1 << 25, // VOID, DELETE, TYPEOF, AWAIT
        Literal = 1 << 26, // IntCon, FltCon, StrCon
        RLit = 1 << 27, // THIS, TRUE, FALSE, NULL
        Func = 1 << 28, // FUNCTION
        EOF = 1 << 29, // EOF

        // REVIEW: Name this something clearer.
        TypeScriptS = 1 << 30, // PROPERTY, PRIVATE, STATIC, INTERFACE, CLASS, MODULE, EXPORT, IMPORT
        ExprStart = SColon | AddOp | LCurly | PreOp | RegExp | LParen | LBrack | ID | Prefix | RLit | Func | Literal,
        StmtStart = ExprStart | SColon | Var | Stmt | While | TypeScriptS,
        Postfix = Dot | LParen | LBrack,
    }

    export enum AllowedElements {
        None = 0,
        ModuleDeclarations = 1 << 2,
        ClassDeclarations = 1 << 3,
        InterfaceDeclarations = 1 << 4,
        AmbientDeclarations = 1 << 10,
        Properties = 1 << 11,

        Global = ModuleDeclarations | ClassDeclarations | InterfaceDeclarations | AmbientDeclarations,
        QuickParse = Global | Properties,
    }

    export enum Modifiers {
        None = 0,
        Private = 1,
        Public = 1 << 1,
        Readonly = 1 << 2,
        Ambient = 1 << 3,
        Exported = 1 << 4,
        Getter = 1 << 5,
        Setter = 1 << 6,
        Static = 1 << 7,
    }

    export enum ASTFlags {
        None = 0,
        ExplicitSemicolon = 1, // statment terminated by an explicit semicolon
        AutomaticSemicolon = 1 << 1, // statment terminated by an automatic semicolon
        Writeable = 1 << 2,  // node is lhs that can be modified
        Error = 1 << 3, // node has an error
        DotLHSPartial = 1 << 4, // node is the lhs of an incomplete dot expr at cursor
        DotLHS = 1 << 5, // node is the lhs of a dot expr
        IsStatement = 1 << 6, // node is a statement
        StrictMode = 1 << 7, // node is in the strict mode environment
        PossibleOptionalParameter = 1 << 8,
        ClassBaseConstructorCall = 1 << 9,
        OptionalName = 1 << 10,
        // REVIEW: This flag is to mark lambda nodes to note that the LParen of an expression has already been matched in the lambda header.
        //         The flag is used to communicate this piece of information to the calling parseTerm, which intern will remove it.
        //         Once we have a better way to associate information with nodes, this flag should not be used.
        SkipNextRParen = 1 << 11, 
    }

    export enum DeclFlags {
        None = 0,
        Exported = 1,
        Private = 1 << 1,
        Public = 1 << 2,
        Ambient = 1 << 3,
        Static = 1 << 4,
        LocalStatic = 1 << 5,
        GetAccessor = 1 << 6,
        SetAccessor = 1 << 7,
    }

    export enum ModuleFlags {
        None = 0,
        Exported = 1,
        Private = 1 << 1,
        Public = 1 << 2,
        Ambient = 1 << 3,
        Static = 1 << 4,
        LocalStatic = 1 << 5,
        GetAccessor = 1 << 6,
        SetAccessor = 1 << 7,
        IsEnum = 1 << 8,
        ShouldEmitModuleDecl = 1 << 9,
        IsWholeFile = 1 << 10,
        IsDynamic = 1 << 11,
        MustCaptureThis = 1 << 12,
    }

    export enum SymbolFlags {
        None = 0,
        Exported = 1,
        Private = 1 << 1,
        Public = 1 << 2,
        Ambient = 1 << 3,
        Static = 1 << 4,
        LocalStatic = 1 << 5,
        GetAccessor = 1 << 6,
        SetAccessor = 1 << 7,
        Property = 1 << 8,
        Readonly = 1 << 9,
        ModuleMember = 1 << 10,
        InterfaceMember = 1 << 11,
        ClassMember = 1 << 12,
        BuiltIn = 1 << 13,
        TypeSetDuringScopeAssignment = 1 << 14,
        Constant = 1 << 15,
        Optional = 1 << 16,
        RecursivelyReferenced = 1 << 17,
        Bound = 1 << 18,
        CompilerGenerated = 1 << 19,
    }

    export enum VarFlags {
        None = 0,
        Exported = 1,
        Private = 1 << 1,
        Public = 1 << 2,
        Ambient = 1 << 3,
        Static = 1 << 4,
        LocalStatic = 1 << 5,
        GetAccessor = 1 << 6,
        SetAccessor = 1 << 7,
        AutoInit = 1 << 8,
        Property = 1 << 9,
        Readonly = 1 << 10,
        Class = 1 << 11,
        ClassProperty = 1 << 12,
        ClassBodyProperty = 1 << 13,
        ClassConstructorProperty = 1 << 14,
        ClassSuperMustBeFirstCallInConstructor = 1 << 15,
        Constant = 1 << 16,
        MustCaptureThis = 1 << 17,
    }

    export enum FncFlags {
        None = 0,
        Exported = 1,
        Private = 1 << 1,
        Public = 1 << 2,
        Ambient = 1 << 3,
        Static = 1 << 4,
        LocalStatic = 1 << 5,
        GetAccessor = 1 << 6,
        SetAccessor = 1 << 7,
        Definition = 1 << 8,
        Signature = 1 << 9,
        Method = 1 << 10,
        HasReturnExpression = 1 << 11,
        CallMember = 1 << 12,
        ConstructMember = 1 << 13,
        HasSelfReference = 1 << 14,
        IsFatArrowFunction = 1 << 15,
        IndexerMember = 1 << 16,
        IsFunctionExpression = 1 << 17,
        ClassMethod = 1 << 18,
        ClassPropertyMethodExported = 1 << 19,
    }

    export enum SignatureFlags {
        None = 0,
        IsIndexer = 1,
        IsStringIndexer = 1 << 1,
        IsNumberIndexer = 1 << 2,
    }

    export function ToDeclFlags(fncFlags: FncFlags) : DeclFlags;
    export function ToDeclFlags(varFlags: VarFlags) : DeclFlags;
    export function ToDeclFlags(symFlags: SymbolFlags): DeclFlags;
    export function ToDeclFlags(moduleFlags: ModuleFlags): DeclFlags;
    export function ToDeclFlags(fncOrVarOrSymbolOrModuleFlags: any) {
        return <DeclFlags>fncOrVarOrSymbolOrModuleFlags;
    }

    export enum TypeFlags {
        None = 0,
        HasImplementation = 1,
        HasSelfReference = 1 << 1,
        MergeResult = 1 << 2,
        IsEnum = 1 << 3,
        BuildingName = 1 << 4,
        HasBaseType = 1 << 5,
        HasBaseTypeOfObject = 1 << 6,
        IsClass = 1 << 7,
    }

    export enum TypeRelationshipFlags {
        SuccessfulComparison = 0,
        SourceIsNullTargetIsVoidOrUndefined = 1,
        RequiredPropertyIsMissing = 1 << 1,
        IncompatibleSignatures = 1 << 2,
        SourceSignatureHasTooManyParameters = 3,
        IncompatibleReturnTypes = 1 << 4,
        IncompatiblePropertyTypes = 1 << 5,
        IncompatibleParameterTypes = 1 << 6,
    }

    export enum CodeGenTarget {
        ES3 = 0,
        ES5 = 1,
    }

    export enum ModuleGenTarget {
        Synchronous = 0,
        Asynchronous = 1,
        Local = 1 << 1,
    }

    // Compiler defaults to generating ES5-compliant code for
    //  - getters and setters
    export var codeGenTarget: CodeGenTarget = CodeGenTarget.ES3;

    export var moduleGenTarget: ModuleGenTarget = ModuleGenTarget.Synchronous;

    export var optimizeModuleCodeGen = true;

    export function flagsToString(e, flags: number): string {
        var builder = "";
        for (var i = 1; i < (1 << 31) ; i = i << 1) {
            if ((flags & i) != 0) {
                for (var k in e) {
                    if (e[k] == i) {
                        if (builder.length > 0) {
                            builder += "|";
                        }
                        builder += k;
                        break;
                    }
                }
            }
        }
        return builder;
    }

}

//// [parserRealSource2.js]
// Copyright (c) Microsoft. All rights reserved. Licensed under the Apache License, Version 2.0. 
// See LICENSE.txt in the project root for complete license information.
///<reference path='typescript.ts' />
var TypeScript;
(function (TypeScript) {
    function hasFlag(val, flag) {
        return (val & flag) != 0;
    }
    TypeScript.hasFlag = hasFlag;
    var ErrorRecoverySet;
    (function () {
        this[this[0] = "None"] = 0;
        this[this[1] = "Comma"] = 1;
        this[this[2] = "SColon"] = 2;
        this[this[4] = "Asg"] = 4;
        this[this[8] = "BinOp"] = 8;
        // AsgMod, AsgAdd, AsgSub, AsgLsh, AsgRsh, AsgRs2, AsgAnd, AsgXor, AsgOr, QMark, Mult, Div, 
        // Pct, GT, LT, And, Xor, Or
        this[this[16] = "RBrack"] = 16;
        this[this[32] = "RCurly"] = 32;
        this[this[64] = "RParen"] = 64;
        this[this[128] = "Dot"] = 128;
        this[this[256] = "Colon"] = 256;
        this[this[512] = "PrimType"] = 512;
        this[this[1024] = "AddOp"] = 1024;
        this[this[2048] = "LCurly"] = 2048;
        this[this[4096] = "PreOp"] = 4096;
        this[this[8192] = "RegExp"] = 8192;
        this[this[16384] = "LParen"] = 16384;
        this[this[32768] = "LBrack"] = 32768;
        this[this[65536] = "Scope"] = 65536;
        this[this[131072] = "In"] = 131072;
        this[this[262144] = "SCase"] = 262144;
        this[this[524288] = "Else"] = 524288;
        this[this[1048576] = "Catch"] = 1048576;
        this[this[2097152] = "Var"] = 2097152;
        this[this[4194304] = "Stmt"] = 4194304;
        this[this[8388608] = "While"] = 8388608;
        this[this[16777216] = "ID"] = 16777216;
        this[this[33554432] = "Prefix"] = 33554432;
        this[this[67108864] = "Literal"] = 67108864;
        this[this[134217728] = "RLit"] = 134217728;
        this[this[268435456] = "Func"] = 268435456;
        this[this[536870912] = "EOF"] = 536870912;
        // REVIEW: Name this something clearer.
        this[this[1073741824] = "TypeScriptS"] = 1073741824;
        this[this[520158210] = "ExprStart"] = 520158210;
        this[this[1608580098] = "StmtStart"] = 1608580098;
        this[this[49280] = "Postfix"] = 49280;
    }.call(ErrorRecoverySet = TypeScript.ErrorRecoverySet || (TypeScript.ErrorRecoverySet = {})));
    var AllowedElements;
    (function () {
        this[this[0] = "None"] = 0;
        this[this[4] = "ModuleDeclarations"] = 4;
        this[this[8] = "ClassDeclarations"] = 8;
        this[this[16] = "InterfaceDeclarations"] = 16;
        this[this[1024] = "AmbientDeclarations"] = 1024;
        this[this[2048] = "Properties"] = 2048;
        this[this[1052] = "Global"] = 1052;
        this[this[3100] = "QuickParse"] = 3100;
    }.call(AllowedElements = TypeScript.AllowedElements || (TypeScript.AllowedElements = {})));
    var Modifiers;
    (function () {
        this[this[0] = "None"] = 0;
        this[this[1] = "Private"] = 1;
        this[this[2] = "Public"] = 2;
        this[this[4] = "Readonly"] = 4;
        this[this[8] = "Ambient"] = 8;
        this[this[16] = "Exported"] = 16;
        this[this[32] = "Getter"] = 32;
        this[this[64] = "Setter"] = 64;
        this[this[128] = "Static"] = 128;
    }.call(Modifiers = TypeScript.Modifiers || (TypeScript.Modifiers = {})));
    var ASTFlags;
    (function () {
        this[this[0] = "None"] = 0;
        this[this[1] = "ExplicitSemicolon"] = 1;
        this[this[2] = "AutomaticSemicolon"] = 2;
        this[this[4] = "Writeable"] = 4;
        this[this[8] = "Error"] = 8;
        this[this[16] = "DotLHSPartial"] = 16;
        this[this[32] = "DotLHS"] = 32;
        this[this[64] = "IsStatement"] = 64;
        this[this[128] = "StrictMode"] = 128;
        this[this[256] = "PossibleOptionalParameter"] = 256;
        this[this[512] = "ClassBaseConstructorCall"] = 512;
        this[this[1024] = "OptionalName"] = 1024;
        // REVIEW: This flag is to mark lambda nodes to note that the LParen of an expression has already been matched in the lambda header.
        //         The flag is used to communicate this piece of information to the calling parseTerm, which intern will remove it.
        //         Once we have a better way to associate information with nodes, this flag should not be used.
        this[this[2048] = "SkipNextRParen"] = 2048;
    }.call(ASTFlags = TypeScript.ASTFlags || (TypeScript.ASTFlags = {})));
    var DeclFlags;
    (function () {
        this[this[0] = "None"] = 0;
        this[this[1] = "Exported"] = 1;
        this[this[2] = "Private"] = 2;
        this[this[4] = "Public"] = 4;
        this[this[8] = "Ambient"] = 8;
        this[this[16] = "Static"] = 16;
        this[this[32] = "LocalStatic"] = 32;
        this[this[64] = "GetAccessor"] = 64;
        this[this[128] = "SetAccessor"] = 128;
    }.call(DeclFlags = TypeScript.DeclFlags || (TypeScript.DeclFlags = {})));
    var ModuleFlags;
    (function () {
        this[this[0] = "None"] = 0;
        this[this[1] = "Exported"] = 1;
        this[this[2] = "Private"] = 2;
        this[this[4] = "Public"] = 4;
        this[this[8] = "Ambient"] = 8;
        this[this[16] = "Static"] = 16;
        this[this[32] = "LocalStatic"] = 32;
        this[this[64] = "GetAccessor"] = 64;
        this[this[128] = "SetAccessor"] = 128;
        this[this[256] = "IsEnum"] = 256;
        this[this[512] = "ShouldEmitModuleDecl"] = 512;
        this[this[1024] = "IsWholeFile"] = 1024;
        this[this[2048] = "IsDynamic"] = 2048;
        this[this[4096] = "MustCaptureThis"] = 4096;
    }.call(ModuleFlags = TypeScript.ModuleFlags || (TypeScript.ModuleFlags = {})));
    var SymbolFlags;
    (function () {
        this[this[0] = "None"] = 0;
        this[this[1] = "Exported"] = 1;
        this[this[2] = "Private"] = 2;
        this[this[4] = "Public"] = 4;
        this[this[8] = "Ambient"] = 8;
        this[this[16] = "Static"] = 16;
        this[this[32] = "LocalStatic"] = 32;
        this[this[64] = "GetAccessor"] = 64;
        this[this[128] = "SetAccessor"] = 128;
        this[this[256] = "Property"] = 256;
        this[this[512] = "Readonly"] = 512;
        this[this[1024] = "ModuleMember"] = 1024;
        this[this[2048] = "InterfaceMember"] = 2048;
        this[this[4096] = "ClassMember"] = 4096;
        this[this[8192] = "BuiltIn"] = 8192;
        this[this[16384] = "TypeSetDuringScopeAssignment"] = 16384;
        this[this[32768] = "Constant"] = 32768;
        this[this[65536] = "Optional"] = 65536;
        this[this[131072] = "RecursivelyReferenced"] = 131072;
        this[this[262144] = "Bound"] = 262144;
        this[this[524288] = "CompilerGenerated"] = 524288;
    }.call(SymbolFlags = TypeScript.SymbolFlags || (TypeScript.SymbolFlags = {})));
    var VarFlags;
    (function () {
        this[this[0] = "None"] = 0;
        this[this[1] = "Exported"] = 1;
        this[this[2] = "Private"] = 2;
        this[this[4] = "Public"] = 4;
        this[this[8] = "Ambient"] = 8;
        this[this[16] = "Static"] = 16;
        this[this[32] = "LocalStatic"] = 32;
        this[this[64] = "GetAccessor"] = 64;
        this[this[128] = "SetAccessor"] = 128;
        this[this[256] = "AutoInit"] = 256;
        this[this[512] = "Property"] = 512;
        this[this[1024] = "Readonly"] = 1024;
        this[this[2048] = "Class"] = 2048;
        this[this[4096] = "ClassProperty"] = 4096;
        this[this[8192] = "ClassBodyProperty"] = 8192;
        this[this[16384] = "ClassConstructorProperty"] = 16384;
        this[this[32768] = "ClassSuperMustBeFirstCallInConstructor"] = 32768;
        this[this[65536] = "Constant"] = 65536;
        this[this[131072] = "MustCaptureThis"] = 131072;
    }.call(VarFlags = TypeScript.VarFlags || (TypeScript.VarFlags = {})));
    var FncFlags;
    (function () {
        this[this[0] = "None"] = 0;
        this[this[1] = "Exported"] = 1;
        this[this[2] = "Private"] = 2;
        this[this[4] = "Public"] = 4;
        this[this[8] = "Ambient"] = 8;
        this[this[16] = "Static"] = 16;
        this[this[32] = "LocalStatic"] = 32;
        this[this[64] = "GetAccessor"] = 64;
        this[this[128] = "SetAccessor"] = 128;
        this[this[256] = "Definition"] = 256;
        this[this[512] = "Signature"] = 512;
        this[this[1024] = "Method"] = 1024;
        this[this[2048] = "HasReturnExpression"] = 2048;
        this[this[4096] = "CallMember"] = 4096;
        this[this[8192] = "ConstructMember"] = 8192;
        this[this[16384] = "HasSelfReference"] = 16384;
        this[this[32768] = "IsFatArrowFunction"] = 32768;
        this[this[65536] = "IndexerMember"] = 65536;
        this[this[131072] = "IsFunctionExpression"] = 131072;
        this[this[262144] = "ClassMethod"] = 262144;
        this[this[524288] = "ClassPropertyMethodExported"] = 524288;
    }.call(FncFlags = TypeScript.FncFlags || (TypeScript.FncFlags = {})));
    var SignatureFlags;
    (function () {
        this[this[0] = "None"] = 0;
        this[this[1] = "IsIndexer"] = 1;
        this[this[2] = "IsStringIndexer"] = 2;
        this[this[4] = "IsNumberIndexer"] = 4;
    }.call(SignatureFlags = TypeScript.SignatureFlags || (TypeScript.SignatureFlags = {})));
    function ToDeclFlags(fncOrVarOrSymbolOrModuleFlags) {
        return fncOrVarOrSymbolOrModuleFlags;
    }
    TypeScript.ToDeclFlags = ToDeclFlags;
    var TypeFlags;
    (function () {
        this[this[0] = "None"] = 0;
        this[this[1] = "HasImplementation"] = 1;
        this[this[2] = "HasSelfReference"] = 2;
        this[this[4] = "MergeResult"] = 4;
        this[this[8] = "IsEnum"] = 8;
        this[this[16] = "BuildingName"] = 16;
        this[this[32] = "HasBaseType"] = 32;
        this[this[64] = "HasBaseTypeOfObject"] = 64;
        this[this[128] = "IsClass"] = 128;
    }.call(TypeFlags = TypeScript.TypeFlags || (TypeScript.TypeFlags = {})));
    var TypeRelationshipFlags;
    (function () {
        this[this[0] = "SuccessfulComparison"] = 0;
        this[this[1] = "SourceIsNullTargetIsVoidOrUndefined"] = 1;
        this[this[2] = "RequiredPropertyIsMissing"] = 2;
        this[this[4] = "IncompatibleSignatures"] = 4;
        this[this[3] = "SourceSignatureHasTooManyParameters"] = 3;
        this[this[16] = "IncompatibleReturnTypes"] = 16;
        this[this[32] = "IncompatiblePropertyTypes"] = 32;
        this[this[64] = "IncompatibleParameterTypes"] = 64;
    }.call(TypeRelationshipFlags = TypeScript.TypeRelationshipFlags || (TypeScript.TypeRelationshipFlags = {})));
    var CodeGenTarget;
    (function () {
        this[this[0] = "ES3"] = 0;
        this[this[1] = "ES5"] = 1;
    }.call(CodeGenTarget = TypeScript.CodeGenTarget || (TypeScript.CodeGenTarget = {})));
    var ModuleGenTarget;
    (function () {
        this[this[0] = "Synchronous"] = 0;
        this[this[1] = "Asynchronous"] = 1;
        this[this[2] = "Local"] = 2;
    }.call(ModuleGenTarget = TypeScript.ModuleGenTarget || (TypeScript.ModuleGenTarget = {})));
    // Compiler defaults to generating ES5-compliant code for
    //  - getters and setters
    TypeScript.codeGenTarget = CodeGenTarget.ES3;
    TypeScript.moduleGenTarget = ModuleGenTarget.Synchronous;
    TypeScript.optimizeModuleCodeGen = true;
    function flagsToString(e, flags) {
        var builder = "";
        for (var i = 1; i < (1 << 31); i = i << 1) {
            if ((flags & i) != 0) {
                for (var k in e) {
                    if (e[k] == i) {
                        if (builder.length > 0) {
                            builder += "|";
                        }
                        builder += k;
                        break;
                    }
                }
            }
        }
        return builder;
    }
    TypeScript.flagsToString = flagsToString;
})(TypeScript || (TypeScript = {}));
