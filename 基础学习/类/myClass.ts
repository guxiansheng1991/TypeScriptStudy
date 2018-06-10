class Demo1 {
  public _name: string;
  private _age: number;
  protected _size: number;
  static common: string = 'hello world';
  constructor(name:string, age: number, size: number) {
    this._name = name;
    this._age = age;
    this._size = size;
  }

  get getName(): string {
    console.log(Demo1.common);
    return this._name;
  }
  private get getAge(): number {
    console.log(Demo1.common);
    return this._age;
  }
  protected get getSize(): number {
    console.log(Demo1.common);
    return this._size;
  }
  static hello(): string {
    return '你好啊';
  }
}

class Demo2 extends Demo1 {
  _eat: string;
  constructor(name:string, age: number, size: number, eat: string) {
    super(name, age, size);
    this._eat = eat;
  }
  get getEat(): string {
    console.log(Demo1.common);
    return this._eat;
  } 
}

console.log(Demo1.common);
Demo1.hello();
let d2 = new Demo2('s', 13, 20, 'yes');
console.log(d2.getName);
// console.log(d2.getAge);
// console.log(d2.getSize);


abstract class Demo3 {
  abstract hello(): string;
  test(): number {
    return 3;
  }
  constructor(public name: string) {
  
  }
}

class Demo4 extends Demo3 {
  constructor(name: string) {
    super(name);
  }
  hello(): string {
    return 'hello';
  }
}

let d4 = new Demo4('shen');
d4.hello();
d4.test();