"use strict";
/**
 *
 * @param person person
 */
function greeter(person) {
    return "Hello, " + person;
}
var user = '你好啊';
document.body.innerHTML = greeter(user);
function greeter2(person) {
    return "hello, " + person.firstName + " " + person.lastName;
}
var user2 = { firstName: 'yc', lastName: 's' };
document.body.innerHTML = greeter2(user2);
var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeter3(person) {
    return "hello, " + person.firstName + " " + person.lastName;
}
var user3 = new Student('Jane', '.m', 'User');
document.body.innerHTML = greeter3(user3);
