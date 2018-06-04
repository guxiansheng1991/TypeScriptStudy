"use strict";
/**
 * 接口核心原则之一就是对值所具有的 结构 进行类型检查
 * 只是检查数据结构的类型,不是类似于java的类实现接口
 */
function printLabel(labelledObj) {
    console.log(labelledObj.label);
}
var myObj = { label: 'syc', otherParams: true };
printLabel(myObj);
function createSquare(config) {
    var newSquare = { color: config.color, area: 0 };
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
var mySquare = createSquare({ color: 'red', width: 20, height: 300 });
console.log(mySquare);
var mySearch = function (src, subSrc) {
    return true;
};
/**
 * 类类型
 */ 
