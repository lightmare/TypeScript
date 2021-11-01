//// [arrayLiteralInference.ts]
// Repro from #31204

export enum AppType {
    HeaderDetail = 'HeaderDetail',
    HeaderMultiDetail = 'HeaderMultiDetail',
    AdvancedList = 'AdvancedList',
    Standard = 'Standard',
    Relationship = 'Relationship',
    Report = 'Report',
    Composite = 'Composite',
    ListOnly = 'ListOnly',
    ModuleSettings = 'ModuleSettings'
}

export enum AppStyle {
    Tree,
    TreeEntity,
    Standard,
    MiniApp,
    PivotTable
}

const appTypeStylesWithError: Map<AppType, Array<AppStyle>> = new Map([
    [AppType.Standard, [AppStyle.Standard, AppStyle.MiniApp]],
    [AppType.Relationship, [AppStyle.Standard, AppStyle.Tree, AppStyle.TreeEntity]],
    [AppType.AdvancedList, [AppStyle.Standard, AppStyle.MiniApp]]
]);

// Repro from #31204

declare function foo<T>(...args: T[]): T[];
let b1: { x: boolean }[] = foo({ x: true }, { x: false });
let b2: boolean[][] = foo([true], [false]);


//// [arrayLiteralInference.js]
// Repro from #31204
export var AppType;
(function () {
    this["HeaderDetail"] = "HeaderDetail";
    this["HeaderMultiDetail"] = "HeaderMultiDetail";
    this["AdvancedList"] = "AdvancedList";
    this["Standard"] = "Standard";
    this["Relationship"] = "Relationship";
    this["Report"] = "Report";
    this["Composite"] = "Composite";
    this["ListOnly"] = "ListOnly";
    this["ModuleSettings"] = "ModuleSettings";
}.call(AppType || (AppType = {})));
export var AppStyle;
(function () {
    this[this[0] = "Tree"] = 0;
    this[this[1] = "TreeEntity"] = 1;
    this[this[2] = "Standard"] = 2;
    this[this[3] = "MiniApp"] = 3;
    this[this[4] = "PivotTable"] = 4;
}.call(AppStyle || (AppStyle = {})));
const appTypeStylesWithError = new Map([
    [AppType.Standard, [AppStyle.Standard, AppStyle.MiniApp]],
    [AppType.Relationship, [AppStyle.Standard, AppStyle.Tree, AppStyle.TreeEntity]],
    [AppType.AdvancedList, [AppStyle.Standard, AppStyle.MiniApp]]
]);
let b1 = foo({ x: true }, { x: false });
let b2 = foo([true], [false]);
