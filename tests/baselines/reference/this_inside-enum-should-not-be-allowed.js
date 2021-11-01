//// [this_inside-enum-should-not-be-allowed.ts]
enum TopLevelEnum {
    ThisWasAllowedButShouldNotBe = this // Should not be allowed
}

module ModuleEnum {
    enum EnumInModule {
        WasADifferentError = this // this was handled as if this was in a module
    }
}

//// [this_inside-enum-should-not-be-allowed.js]
var TopLevelEnum;
(function () {
    this[this["ThisWasAllowedButShouldNotBe"] = this] = "ThisWasAllowedButShouldNotBe"; // Should not be allowed
}.call(TopLevelEnum || (TopLevelEnum = {})));
var ModuleEnum;
(function (ModuleEnum) {
    var EnumInModule;
    (function () {
        this[this["WasADifferentError"] = this] = "WasADifferentError"; // this was handled as if this was in a module
    }.call(EnumInModule || (EnumInModule = {})));
})(ModuleEnum || (ModuleEnum = {}));
