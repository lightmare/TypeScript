//// [enumIndexer.ts]
enum MyEnumType {
    foo, bar
}
var _arr = [{ key: 'foo' }, { key: 'bar' }]
var enumValue = MyEnumType.foo;
var x = _arr.map(o => MyEnumType[o.key] === enumValue); // these are not same type


//// [enumIndexer.js]
var MyEnumType;
(function () {
    this[this[0] = "foo"] = 0;
    this[this[1] = "bar"] = 1;
}.call(MyEnumType || (MyEnumType = {})));
var _arr = [{ key: 'foo' }, { key: 'bar' }];
var enumValue = MyEnumType.foo;
var x = _arr.map(function (o) { return MyEnumType[o.key] === enumValue; }); // these are not same type
