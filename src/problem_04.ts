class Person {
	constructor(private name: string, private age: number) {
		this.name = name;
		this.age = age;
	}

	public getDetails(): string {
		return `The Person Name ${this.name} and Age ${this.age}`;
	}
}

const personResult = new Person("Stark", 20);
console.log(personResult.getDetails());

class Student extends Person {
	constructor(name: string, age: number, private grade: string) {
		super(name, age);
		this.grade = grade;
	}

	public getGrade() {
    return `Student Grade ${this.grade}`
    }
}

const studentResult = new Student("Tony", 55, 'F');
console.log(studentResult.getGrade());