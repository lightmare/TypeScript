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
    (function (ErrorRecoverySet) {
        ErrorRecoverySet[ErrorRecoverySet[0] = "None"] = 0;
        ErrorRecoverySet[ErrorRecoverySet[1] = "Comma"] = 1;
        ErrorRecoverySet[ErrorRecoverySet[2] = "SColon"] = 2;
        ErrorRecoverySet[ErrorRecoverySet[4] = "Asg"] = 4;
        ErrorRecoverySet[ErrorRecoverySet[8] = "BinOp"] = 8;
        // AsgMod, AsgAdd, AsgSub, AsgLsh, AsgRsh, AsgRs2, AsgAnd, AsgXor, AsgOr, QMark, Mult, Div, 
        // Pct, GT, LT, And, Xor, Or
        ErrorRecoverySet[ErrorRecoverySet[16] = "RBrack"] = 16;
        ErrorRecoverySet[ErrorRecoverySet[32] = "RCurly"] = 32;
        ErrorRecoverySet[ErrorRecoverySet[64] = "RParen"] = 64;
        ErrorRecoverySet[ErrorRecoverySet[128] = "Dot"] = 128;
        ErrorRecoverySet[ErrorRecoverySet[256] = "Colon"] = 256;
        ErrorRecoverySet[ErrorRecoverySet[512] = "PrimType"] = 512;
        ErrorRecoverySet[ErrorRecoverySet[1024] = "AddOp"] = 1024;
        ErrorRecoverySet[ErrorRecoverySet[2048] = "LCurly"] = 2048;
        ErrorRecoverySet[ErrorRecoverySet[4096] = "PreOp"] = 4096;
        ErrorRecoverySet[ErrorRecoverySet[8192] = "RegExp"] = 8192;
        ErrorRecoverySet[ErrorRecoverySet[16384] = "LParen"] = 16384;
        ErrorRecoverySet[ErrorRecoverySet[32768] = "LBrack"] = 32768;
        ErrorRecoverySet[ErrorRecoverySet[65536] = "Scope"] = 65536;
        ErrorRecoverySet[ErrorRecoverySet[131072] = "In"] = 131072;
        ErrorRecoverySet[ErrorRecoverySet[262144] = "SCase"] = 262144;
        ErrorRecoverySet[ErrorRecoverySet[524288] = "Else"] = 524288;
        ErrorRecoverySet[ErrorRecoverySet[1048576] = "Catch"] = 1048576;
        ErrorRecoverySet[ErrorRecoverySet[2097152] = "Var"] = 2097152;
        ErrorRecoverySet[ErrorRecoverySet[4194304] = "Stmt"] = 4194304;
        ErrorRecoverySet[ErrorRecoverySet[8388608] = "While"] = 8388608;
        ErrorRecoverySet[ErrorRecoverySet[16777216] = "ID"] = 16777216;
        ErrorRecoverySet[ErrorRecoverySet[33554432] = "Prefix"] = 33554432;
        ErrorRecoverySet[ErrorRecoverySet[67108864] = "Literal"] = 67108864;
        ErrorRecoverySet[ErrorRecoverySet[134217728] = "RLit"] = 134217728;
        ErrorRecoverySet[ErrorRecoverySet[268435456] = "Func"] = 268435456;
        ErrorRecoverySet[ErrorRecoverySet[536870912] = "EOF"] = 536870912;
        // REVIEW: Name this something clearer.
        ErrorRecoverySet[ErrorRecoverySet[1073741824] = "TypeScriptS"] = 1073741824;
        ErrorRecoverySet[ErrorRecoverySet[520158210] = "ExprStart"] = 520158210;
        ErrorRecoverySet[ErrorRecoverySet[1608580098] = "StmtStart"] = 1608580098;
        ErrorRecoverySet[ErrorRecoverySet[49280] = "Postfix"] = 49280;
    })(ErrorRecoverySet = TypeScript.ErrorRecoverySet || (TypeScript.ErrorRecoverySet = {}));
    var AllowedElements;
    (function (AllowedElements) {
        AllowedElements[AllowedElements[0] = "None"] = 0;
        AllowedElements[AllowedElements[4] = "ModuleDeclarations"] = 4;
        AllowedElements[AllowedElements[8] = "ClassDeclarations"] = 8;
        AllowedElements[AllowedElements[16] = "InterfaceDeclarations"] = 16;
        AllowedElements[AllowedElements[1024] = "AmbientDeclarations"] = 1024;
        AllowedElements[AllowedElements[2048] = "Properties"] = 2048;
        AllowedElements[AllowedElements[1052] = "Global"] = 1052;
        AllowedElements[AllowedElements[3100] = "QuickParse"] = 3100;
    })(AllowedElements = TypeScript.AllowedElements || (TypeScript.AllowedElements = {}));
    var Modifiers;
    (function (Modifiers) {
        Modifiers[Modifiers[0] = "None"] = 0;
        Modifiers[Modifiers[1] = "Private"] = 1;
        Modifiers[Modifiers[2] = "Public"] = 2;
        Modifiers[Modifiers[4] = "Readonly"] = 4;
        Modifiers[Modifiers[8] = "Ambient"] = 8;
        Modifiers[Modifiers[16] = "Exported"] = 16;
        Modifiers[Modifiers[32] = "Getter"] = 32;
        Modifiers[Modifiers[64] = "Setter"] = 64;
        Modifiers[Modifiers[128] = "Static"] = 128;
    })(Modifiers = TypeScript.Modifiers || (TypeScript.Modifiers = {}));
    var ASTFlags;
    (function (ASTFlags) {
        ASTFlags[ASTFlags[0] = "None"] = 0;
        ASTFlags[ASTFlags[1] = "ExplicitSemicolon"] = 1;
        ASTFlags[ASTFlags[2] = "AutomaticSemicolon"] = 2;
        ASTFlags[ASTFlags[4] = "Writeable"] = 4;
        ASTFlags[ASTFlags[8] = "Error"] = 8;
        ASTFlags[ASTFlags[16] = "DotLHSPartial"] = 16;
        ASTFlags[ASTFlags[32] = "DotLHS"] = 32;
        ASTFlags[ASTFlags[64] = "IsStatement"] = 64;
        ASTFlags[ASTFlags[128] = "StrictMode"] = 128;
        ASTFlags[ASTFlags[256] = "PossibleOptionalParameter"] = 256;
        ASTFlags[ASTFlags[512] = "ClassBaseConstructorCall"] = 512;
        ASTFlags[ASTFlags[1024] = "OptionalName"] = 1024;
        // REVIEW: This flag is to mark lambda nodes to note that the LParen of an expression has already been matched in the lambda header.
        //         The flag is used to communicate this piece of information to the calling parseTerm, which intern will remove it.
        //         Once we have a better way to associate information with nodes, this flag should not be used.
        ASTFlags[ASTFlags[2048] = "SkipNextRParen"] = 2048;
    })(ASTFlags = TypeScript.ASTFlags || (TypeScript.ASTFlags = {}));
    var DeclFlags;
    (function (DeclFlags) {
        DeclFlags[DeclFlags[0] = "None"] = 0;
        DeclFlags[DeclFlags[1] = "Exported"] = 1;
        DeclFlags[DeclFlags[2] = "Private"] = 2;
        DeclFlags[DeclFlags[4] = "Public"] = 4;
        DeclFlags[DeclFlags[8] = "Ambient"] = 8;
        DeclFlags[DeclFlags[16] = "Static"] = 16;
        DeclFlags[DeclFlags[32] = "LocalStatic"] = 32;
        DeclFlags[DeclFlags[64] = "GetAccessor"] = 64;
        DeclFlags[DeclFlags[128] = "SetAccessor"] = 128;
    })(DeclFlags = TypeScript.DeclFlags || (TypeScript.DeclFlags = {}));
    var ModuleFlags;
    (function (ModuleFlags) {
        ModuleFlags[ModuleFlags[0] = "None"] = 0;
        ModuleFlags[ModuleFlags[1] = "Exported"] = 1;
        ModuleFlags[ModuleFlags[2] = "Private"] = 2;
        ModuleFlags[ModuleFlags[4] = "Public"] = 4;
        ModuleFlags[ModuleFlags[8] = "Ambient"] = 8;
        ModuleFlags[ModuleFlags[16] = "Static"] = 16;
        ModuleFlags[ModuleFlags[32] = "LocalStatic"] = 32;
        ModuleFlags[ModuleFlags[64] = "GetAccessor"] = 64;
        ModuleFlags[ModuleFlags[128] = "SetAccessor"] = 128;
        ModuleFlags[ModuleFlags[256] = "IsEnum"] = 256;
        ModuleFlags[ModuleFlags[512] = "ShouldEmitModuleDecl"] = 512;
        ModuleFlags[ModuleFlags[1024] = "IsWholeFile"] = 1024;
        ModuleFlags[ModuleFlags[2048] = "IsDynamic"] = 2048;
        ModuleFlags[ModuleFlags[4096] = "MustCaptureThis"] = 4096;
    })(ModuleFlags = TypeScript.ModuleFlags || (TypeScript.ModuleFlags = {}));
    var SymbolFlags;
    (function (SymbolFlags) {
        SymbolFlags[SymbolFlags[0] = "None"] = 0;
        SymbolFlags[SymbolFlags[1] = "Exported"] = 1;
        SymbolFlags[SymbolFlags[2] = "Private"] = 2;
        SymbolFlags[SymbolFlags[4] = "Public"] = 4;
        SymbolFlags[SymbolFlags[8] = "Ambient"] = 8;
        SymbolFlags[SymbolFlags[16] = "Static"] = 16;
        SymbolFlags[SymbolFlags[32] = "LocalStatic"] = 32;
        SymbolFlags[SymbolFlags[64] = "GetAccessor"] = 64;
        SymbolFlags[SymbolFlags[128] = "SetAccessor"] = 128;
        SymbolFlags[SymbolFlags[256] = "Property"] = 256;
        SymbolFlags[SymbolFlags[512] = "Readonly"] = 512;
        SymbolFlags[SymbolFlags[1024] = "ModuleMember"] = 1024;
        SymbolFlags[SymbolFlags[2048] = "InterfaceMember"] = 2048;
        SymbolFlags[SymbolFlags[4096] = "ClassMember"] = 4096;
        SymbolFlags[SymbolFlags[8192] = "BuiltIn"] = 8192;
        SymbolFlags[SymbolFlags[16384] = "TypeSetDuringScopeAssignment"] = 16384;
        SymbolFlags[SymbolFlags[32768] = "Constant"] = 32768;
        SymbolFlags[SymbolFlags[65536] = "Optional"] = 65536;
        SymbolFlags[SymbolFlags[131072] = "RecursivelyReferenced"] = 131072;
        SymbolFlags[SymbolFlags[262144] = "Bound"] = 262144;
        SymbolFlags[SymbolFlags[524288] = "CompilerGenerated"] = 524288;
    })(SymbolFlags = TypeScript.SymbolFlags || (TypeScript.SymbolFlags = {}));
    var VarFlags;
    (function (VarFlags) {
        VarFlags[VarFlags[0] = "None"] = 0;
        VarFlags[VarFlags[1] = "Exported"] = 1;
        VarFlags[VarFlags[2] = "Private"] = 2;
        VarFlags[VarFlags[4] = "Public"] = 4;
        VarFlags[VarFlags[8] = "Ambient"] = 8;
        VarFlags[VarFlags[16] = "Static"] = 16;
        VarFlags[VarFlags[32] = "LocalStatic"] = 32;
        VarFlags[VarFlags[64] = "GetAccessor"] = 64;
        VarFlags[VarFlags[128] = "SetAccessor"] = 128;
        VarFlags[VarFlags[256] = "AutoInit"] = 256;
        VarFlags[VarFlags[512] = "Property"] = 512;
        VarFlags[VarFlags[1024] = "Readonly"] = 1024;
        VarFlags[VarFlags[2048] = "Class"] = 2048;
        VarFlags[VarFlags[4096] = "ClassProperty"] = 4096;
        VarFlags[VarFlags[8192] = "ClassBodyProperty"] = 8192;
        VarFlags[VarFlags[16384] = "ClassConstructorProperty"] = 16384;
        VarFlags[VarFlags[32768] = "ClassSuperMustBeFirstCallInConstructor"] = 32768;
        VarFlags[VarFlags[65536] = "Constant"] = 65536;
        VarFlags[VarFlags[131072] = "MustCaptureThis"] = 131072;
    })(VarFlags = TypeScript.VarFlags || (TypeScript.VarFlags = {}));
    var FncFlags;
    (function (FncFlags) {
        FncFlags[FncFlags[0] = "None"] = 0;
        FncFlags[FncFlags[1] = "Exported"] = 1;
        FncFlags[FncFlags[2] = "Private"] = 2;
        FncFlags[FncFlags[4] = "Public"] = 4;
        FncFlags[FncFlags[8] = "Ambient"] = 8;
        FncFlags[FncFlags[16] = "Static"] = 16;
        FncFlags[FncFlags[32] = "LocalStatic"] = 32;
        FncFlags[FncFlags[64] = "GetAccessor"] = 64;
        FncFlags[FncFlags[128] = "SetAccessor"] = 128;
        FncFlags[FncFlags[256] = "Definition"] = 256;
        FncFlags[FncFlags[512] = "Signature"] = 512;
        FncFlags[FncFlags[1024] = "Method"] = 1024;
        FncFlags[FncFlags[2048] = "HasReturnExpression"] = 2048;
        FncFlags[FncFlags[4096] = "CallMember"] = 4096;
        FncFlags[FncFlags[8192] = "ConstructMember"] = 8192;
        FncFlags[FncFlags[16384] = "HasSelfReference"] = 16384;
        FncFlags[FncFlags[32768] = "IsFatArrowFunction"] = 32768;
        FncFlags[FncFlags[65536] = "IndexerMember"] = 65536;
        FncFlags[FncFlags[131072] = "IsFunctionExpression"] = 131072;
        FncFlags[FncFlags[262144] = "ClassMethod"] = 262144;
        FncFlags[FncFlags[524288] = "ClassPropertyMethodExported"] = 524288;
    })(FncFlags = TypeScript.FncFlags || (TypeScript.FncFlags = {}));
    var SignatureFlags;
    (function (SignatureFlags) {
        SignatureFlags[SignatureFlags[0] = "None"] = 0;
        SignatureFlags[SignatureFlags[1] = "IsIndexer"] = 1;
        SignatureFlags[SignatureFlags[2] = "IsStringIndexer"] = 2;
        SignatureFlags[SignatureFlags[4] = "IsNumberIndexer"] = 4;
    })(SignatureFlags = TypeScript.SignatureFlags || (TypeScript.SignatureFlags = {}));
    function ToDeclFlags(fncOrVarOrSymbolOrModuleFlags) {
        return fncOrVarOrSymbolOrModuleFlags;
    }
    TypeScript.ToDeclFlags = ToDeclFlags;
    var TypeFlags;
    (function (TypeFlags) {
        TypeFlags[TypeFlags[0] = "None"] = 0;
        TypeFlags[TypeFlags[1] = "HasImplementation"] = 1;
        TypeFlags[TypeFlags[2] = "HasSelfReference"] = 2;
        TypeFlags[TypeFlags[4] = "MergeResult"] = 4;
        TypeFlags[TypeFlags[8] = "IsEnum"] = 8;
        TypeFlags[TypeFlags[16] = "BuildingName"] = 16;
        TypeFlags[TypeFlags[32] = "HasBaseType"] = 32;
        TypeFlags[TypeFlags[64] = "HasBaseTypeOfObject"] = 64;
        TypeFlags[TypeFlags[128] = "IsClass"] = 128;
    })(TypeFlags = TypeScript.TypeFlags || (TypeScript.TypeFlags = {}));
    var TypeRelationshipFlags;
    (function (TypeRelationshipFlags) {
        TypeRelationshipFlags[TypeRelationshipFlags[0] = "SuccessfulComparison"] = 0;
        TypeRelationshipFlags[TypeRelationshipFlags[1] = "SourceIsNullTargetIsVoidOrUndefined"] = 1;
        TypeRelationshipFlags[TypeRelationshipFlags[2] = "RequiredPropertyIsMissing"] = 2;
        TypeRelationshipFlags[TypeRelationshipFlags[4] = "IncompatibleSignatures"] = 4;
        TypeRelationshipFlags[TypeRelationshipFlags[3] = "SourceSignatureHasTooManyParameters"] = 3;
        TypeRelationshipFlags[TypeRelationshipFlags[16] = "IncompatibleReturnTypes"] = 16;
        TypeRelationshipFlags[TypeRelationshipFlags[32] = "IncompatiblePropertyTypes"] = 32;
        TypeRelationshipFlags[TypeRelationshipFlags[64] = "IncompatibleParameterTypes"] = 64;
    })(TypeRelationshipFlags = TypeScript.TypeRelationshipFlags || (TypeScript.TypeRelationshipFlags = {}));
    var CodeGenTarget;
    (function (CodeGenTarget) {
        CodeGenTarget[CodeGenTarget[0] = "ES3"] = 0;
        CodeGenTarget[CodeGenTarget[1] = "ES5"] = 1;
    })(CodeGenTarget = TypeScript.CodeGenTarget || (TypeScript.CodeGenTarget = {}));
    var ModuleGenTarget;
    (function (ModuleGenTarget) {
        ModuleGenTarget[ModuleGenTarget[0] = "Synchronous"] = 0;
        ModuleGenTarget[ModuleGenTarget[1] = "Asynchronous"] = 1;
        ModuleGenTarget[ModuleGenTarget[2] = "Local"] = 2;
    })(ModuleGenTarget = TypeScript.ModuleGenTarget || (TypeScript.ModuleGenTarget = {}));
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
