/**
 * boolean type
 * true/false
 */
let isDone: boolean = false;

/**
 * number
 * TypeScript中所有数字都是浮点类型,他们都是number类型
 */
let decLiteral = 7;         // 10进制
let hexLiteral = 0xf00d;    // 16进制
let octalLiteral = 0o530;   // 8进制
let binaryLiteral = 0b1010; // 2进制

/**
 * string
 * 字符串类型,可以使用模板字符串
 */
let name1: string = 'syc';
let age: number = 26;
let sentence: string = `hello, my name is ${name1},
                        i am ${age}`;

/**
 * array
 * 数组
 */
let list1: number[] = [1,2,3];
let list2: Array<number> = [4,5,6];

/**
 * Tuple
 * 元组,已知元素和元素数量的数组
 * 对于声明的元组,可以添加声明中指定的类型之一,不可以添加指定范围之外的元素
 */
let tuple1: [string, number, boolean];
tuple1 = ['syc', 123, true];
tuple1.push(false);
console.log(tuple1[3]);

/**
 * enum 枚举
 * 类似于c#的枚举
 */
enum Color {
  Red = 5, Green, Blue
}
let c: Color = Color.Green;
let d: string = Color[7];
console.log(c);
console.log(d);

/**
 * any,是任意类型
 * 任意数据类型,可以是任意的数据类型;
 * 可以在any类型上调用任意类型的方法且不会编译出错,但可能会运行出错
 */
let notSure: any = 4;
notSure = 'maybe a string';
notSure = true;
notSure.toFixed(2);     // 运行错误

/**
 * void 空值,即没有任何类型(不同于any)
 * 多用于函数没有返回值
 */
function warnUser(): void {
  alert('这个函数没人任何返回值');
}
warnUser();

/**
 * null undefined
 * null和undefined是任意类型的子类型,可以赋值给任意类型,但是,使用--strictNullChecks的情况下,
 * null和undefined只能赋值给自身和void
 * 下面实验中能将undefined赋值给void,但是null不能赋值给void
 */
let u: undefined = undefined;
let n: null = null;
let v1: void = undefined;
// let v2: void = null;
let any1: any = null;
let any2: any = undefined;

/**
 * Never , 永不存在的值,返回never的函数必须具有无法到达的终点
 * 是任意类型的子类型,可以赋值给任意类型,但是没有类型是Never的子类型,只有自身可以赋值给自身,any也不可以赋值给Never
 * 
 */
// 永远会抛出错误,永远无法抵达终点
function error1(message: string): never {
  throw new Error(message);
}

/**
 * 类型断言,即程序员已经能够确认变量的类型,不需要类型检查了
 * 在jsx语法中,只支持as语法的类型断言
 */
let someValue: any = 'this is some value';
let strLength1: number = (<string>someValue).length;
let strLength2: number = (someValue as string).length;