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
 * 只读属性: 属性名前用readonly标记,只能在创建的时候修改其值
 */
interface Point {
  readonly x: number;
  readonly y: number;
  z?: number
}
// 已经声明,不能修改了,因为Point的属性都是为readonly类型
let p1: Point = {x:10, y:20};  
// p1.x = 30;    // [ts] 无法分配到“x”，因为它是常数或只读属性
p1.z = 20;

/**
 * 只读数组: 删除了所以能够修改数组的方法
 * 可以通过类型断言重写ReadonlyArray数组为普通数组
 */
let a: number[] = [1,2,3,4];
let ro:ReadonlyArray<number> = a;
// ro[0] = 30;   // [ts] 无法分配到“x”，因为它是常数或只读属性
let so = ro as number[];
so[0] = 50;

/**
 * 额外的属性检查
 * 绕开额外检查的方法:
 * (1)类型断言
 * (2)声明任意属性
 * (3)将传入函数的参数先传给另一个变量
 */
interface SquareConfig2 {
  color?:string;
  width?:number;
}
function createSquare2(config: SquareConfig2): {color: string, area: number} {
  return {color: '#cccccc', area: 123};
}
// createSquare2({colour: '#123456', width: 200});    // 额外检查属性,colour不合法
// (1)类型断言
createSquare2({colour: '#123456', width: 200} as SquareConfig2);
// (2)声明任意属性,将SquareConfig2改为如下
/*
interface SquareConfig2 {
  color?:string;
  width?:number;
  [propName: string]: any
}
*/
// (3)将传入函数的参数先传给另一个变量
let tempParam = {colour: '#123456', width: 200};
createSquare2(tempParam);


/**
 * 接口中的函数
 * 要求对应位置上的参数类型是兼容的
 */
interface SearchFunc {
  func1(source: string, subString: string): boolean;
  func2(test: string): string;
}
let mySearch: SearchFunc['func1'] = function(src: string, subSrc: string): boolean {
  return true;
}

/**
 * 可索引类型
 * 接口能描述那些能 "通过索引得到" 的类型
 * 但是数字索引的返回值必须是字符串索引返回值的 子类型
 * 索引可以设置为只读,防止对索引赋值
 */
interface NumberDictionary {
  readonly [index: string]: number;
  length: number;    // 可以，length是number类型
  // name: string       // 错误，`name`的类型与索引类型返回值的类型不匹配,类型“string”的属性“name”不能赋给字符串索引类型“number”
}


/**
 * 类类型
 * 类似于java,类实现接口,接口约束一个类的实例部分,但是不约束类的静态部分
 */
interface ClockInterface {
  currentTime: Date;
  setTime(d: Date): void;
}

class Clock implements ClockInterface {
  currentTime: Date;
  setTime(d: Date):void {
      this.currentTime = d;
  }
  constructor(h: number, m: number) {
    this.currentTime = new Date();
  }
}

/**
 * 接口之间继承
 */
interface Shape {
  color: string;
}

interface PenStroke {
  penWidth: number;
}

interface Square extends Shape, PenStroke {
  sideLength: number;
}

let square = <Square>{};
square.color = "blue";
square.sideLength = 10;
square.penWidth = 5.0;

/**
 * 接口继承类
 * 接口继承类的成员但不包含实现
 * 接口会继承类的private和protected成员
 */
class Control {
  private state: any;
}

// 因为SelectableControl继承了Control,所以SelectableControl只能被Control的子类实现
interface SelectableControl extends Control {
  select(): void;
}

class Button extends Control implements SelectableControl {
  select() { }
}

class TextBox extends Control {

}

// Image2不能实现SelectableControl,因为Image2不是Control的子类
// class Image2 implements SelectableControl {
//   select() { }
// }

class Location2 {

}