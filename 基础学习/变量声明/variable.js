"use strict";
var _loop_1 = function (i) {
    setTimeout(function () {
        console.log(i);
    }, i * 10);
};
/**
 * 依次打印出来10个数字
 */
for (var i = 0; i < 10; i++) {
    _loop_1(i);
}
var obj1 = {
    name: 'syc'
};
// obj1.age = 11;
obj1['age'] = 11;
console.log(obj1);
