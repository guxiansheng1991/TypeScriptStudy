"use strict";
/**
 * boolean type
 * true/false
 */
var isDone = false;
/**
 * number
 * TypeScript中所有数字都是浮点类型,他们都是number类型
 */
var decLiteral = 7; // 10进制
var hexLiteral = 0xf00d; // 16进制
var octalLiteral = 344; // 8进制
var binaryLiteral = 10; // 2进制
/**
 * string
 * 字符串类型,可以使用模板字符串
 */
var name1 = 'syc';
var age = 26;
var sentence = "hello, my name is " + name1 + ",\n                        i am " + age;
/**
 * array
 * 数组
 */
var list1 = [1, 2, 3];
var list2 = [4, 5, 6];
/**
 * Tuple
 * 元组,已知元素和元素数量的数组
 * 对于声明的元组,可以添加声明中指定的类型之一,不可以添加指定范围之外的元素
 */
var tuple1;
tuple1 = ['syc', 123, true];
tuple1.push(false);
console.log(tuple1[3]);
/**
 * enum 枚举
 * 类似于c#的枚举
 */
var Color;
(function (Color) {
    Color[Color["Red"] = 5] = "Red";
    Color[Color["Green"] = 6] = "Green";
    Color[Color["Blue"] = 7] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
var d = Color[7];
console.log(c);
console.log(d);
/**
 * any,是任意类型
 * 任意数据类型,可以是任意的数据类型;
 * 可以在any类型上调用任意类型的方法且不会编译出错,但可能会运行出错
 */
var notSure = 4;
notSure = 'maybe a string';
notSure = true;
notSure.toFixed(2); // 运行错误
/**
 * void 空值,即没有任何类型(不同于any)
 * 多用于函数没有返回值
 */
function warnUser() {
    alert('这个函数没人任何返回值');
}
warnUser();
/**
 * null undefined
 * null和undefined是任意类型的子类型,可以赋值给任意类型,但是,使用--strictNullChecks的情况下,
 * null和undefined只能赋值给自身和void
 * 下面实验中能将undefined赋值给void,但是null不能赋值给void
 */
var u = undefined;
var n = null;
var v1 = undefined;
// let v2: void = null;
var any1 = null;
var any2 = undefined;
/**
 * Never , 永不存在的值,返回never的函数必须具有无法到达的终点
 * 是任意类型的子类型,可以赋值给任意类型,但是没有类型是Never的子类型,只有自身可以赋值给自身,any也不可以赋值给Never
 *
 */
// 永远会抛出错误,永远无法抵达终点
function error1(message) {
    throw new Error(message);
}
/**
 * 类型断言,即程序员已经能够确认变量的类型,不需要类型检查了
 * 在jsx语法中,只支持as语法的类型断言
 */
var someValue = 'this is some value';
var strLength1 = someValue.length;
var strLength2 = someValue.length;
