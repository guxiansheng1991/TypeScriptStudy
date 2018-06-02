/**
 * 
 * @param person person 
 */
function greeter(person: string) {
  return "Hello, " + person;
}
let user = '你好啊';
document.body.innerHTML = greeter(user);


/**
 * interface 接口
 * @param person Person interface
 */
interface Person {
  firstName: string;
  lastName: string
}
function greeter2(person: Person) {
  return `hello, ${person.firstName} ${person.lastName}`;
}
let user2 = {firstName: 'yc', lastName: 's'};
document.body.innerHTML = greeter2(user2);


class Student {
  fullName: string;
  constructor(public firstName: string, public middleInitial: string, public lastName: string) {
    this.fullName = `${firstName} ${middleInitial} ${lastName}`;
  }
}
interface Person {
  firstName: string,
  lastName: string
}
function greeter3(person: Person) {
  return `hello, ${person.firstName} ${person.lastName}`;
}
let user3 = new Student('Jane','.m','User');
document.body.innerHTML = greeter3(user3);