//// [localImportNameVsGlobalName.ts]
module Keyboard {
  export enum Key { UP, DOWN, LEFT, RIGHT }
}

module App {
  import Key = Keyboard.Key;

  export function foo(key: Key): void {}

  foo(Key.UP);
  foo(Key.DOWN);
  foo(Key.LEFT);
}

//// [localImportNameVsGlobalName.js]
var Keyboard;
(function (Keyboard) {
    var Key;
    (function (Key) {
        Key[Key[0] = "UP"] = 0;
        Key[Key[1] = "DOWN"] = 1;
        Key[Key[2] = "LEFT"] = 2;
        Key[Key[3] = "RIGHT"] = 3;
    })(Key = Keyboard.Key || (Keyboard.Key = {}));
})(Keyboard || (Keyboard = {}));
var App;
(function (App) {
    var Key = Keyboard.Key;
    function foo(key) { }
    App.foo = foo;
    foo(Key.UP);
    foo(Key.DOWN);
    foo(Key.LEFT);
})(App || (App = {}));
