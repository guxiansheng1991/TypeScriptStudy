"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Demo1 = /** @class */ (function () {
    function Demo1(name, age, size) {
        this._name = name;
        this._age = age;
        this._size = size;
    }
    Object.defineProperty(Demo1.prototype, "getName", {
        get: function () {
            console.log(Demo1.common);
            return this._name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Demo1.prototype, "getAge", {
        get: function () {
            console.log(Demo1.common);
            return this._age;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Demo1.prototype, "getSize", {
        get: function () {
            console.log(Demo1.common);
            return this._size;
        },
        enumerable: true,
        configurable: true
    });
    Demo1.hello = function () {
        return '你好啊';
    };
    Demo1.common = 'hello world';
    return Demo1;
}());
var Demo2 = /** @class */ (function (_super) {
    __extends(Demo2, _super);
    function Demo2(name, age, size, eat) {
        var _this = _super.call(this, name, age, size) || this;
        _this._eat = eat;
        return _this;
    }
    Object.defineProperty(Demo2.prototype, "getEat", {
        get: function () {
            console.log(Demo1.common);
            return this._eat;
        },
        enumerable: true,
        configurable: true
    });
    return Demo2;
}(Demo1));
console.log(Demo1.common);
Demo1.hello();
var d2 = new Demo2('s', 13, 20, 'yes');
console.log(d2.getName);
// console.log(d2.getAge);
// console.log(d2.getSize);
var Demo3 = /** @class */ (function () {
    function Demo3(name) {
        this.name = name;
    }
    Demo3.prototype.test = function () {
        return 3;
    };
    return Demo3;
}());
var Demo4 = /** @class */ (function (_super) {
    __extends(Demo4, _super);
    function Demo4(name) {
        return _super.call(this, name) || this;
    }
    Demo4.prototype.hello = function () {
        return 'hello';
    };
    return Demo4;
}(Demo3));
var d4 = new Demo4('shen');
d4.hello();
d4.test();
