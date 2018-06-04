/**
 * 接口核心原则之一就是对值所具有的 结构 进行类型检查
 * 只是检查数据结构的类型,不是类似于java的类实现接口
 */

 interface LabelledValue {
   label: string
 }
 function printLabel(labelledObj: LabelledValue) {
   console.log(labelledObj.label);
 }
let myObj = {label: 'syc', otherParams:true};
printLabel(myObj);

/**
 * 可选属性, 只读属性, 额外的属性检查
 * 可选属性: 属性名后跟问号(?)即可
 * 只读属性: 属性名前用readonly标记,只能在创建的时候修改其值
 */
interface SquareConfig {
  color: string,
  width?: number,
  [propName: string]: any,    // SquareConfig可能会包含其他属性
}
function createSquare(config: SquareConfig): {color: string, area: number} {
  let newSquare = {color: config.color, area: 0};
  if (config.width) {
    newSquare.area = config.width * config.width;
  }
  return newSquare;
}
let mySquare = createSquare({color: 'red', width: 20, height: 300});
console.log(mySquare);


/**
 * 接口中的函数
 * 要求对应位置上的参数类型是兼容的
 */
interface SearchFunc {
  (source: string, subString: string): boolean;
}
let mySearch: SearchFunc = function(src: string, subSrc: string): boolean {
  return true;
}

/**
 * 类类型
 */