"use strict";
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.name = name;
        this.age = age;
    }
    getDetails() {
        return `The Person Name ${this.name} and Age ${this.age}`;
    }
}
const personResult = new Person("Tony", 55);
console.log(personResult.getDetails());
class Student extends Person {
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
        this.grade = grade;
    }
    getGrade() {
        return `Student Grade ${this.grade}`;
    }
}
const studentResult = new Student("Tony", 55, 'A+');
console.log(studentResult.getGrade());
