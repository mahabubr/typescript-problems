interface IAge {
	name: string;
	age: number;
}

type AgeTypes = Array<IAge>;

function personAge(arr: AgeTypes): AgeTypes {
	const ageFiler = arr.filter((item) => item.age >= 18);
	return ageFiler;
}

const personArr: AgeTypes = [
	{ name: "Sundar Pachai", age: 20 },
	{ name: "Elon Musk", age: 15 },
	{ name: "Jeff Bezos", age: 25 },
	{ name: "Tony Stark", age: 20 },
	{ name: "Newton Eyenstyne", age: 10 },
	{ name: "Nekola Tesla", age: 18 },
];

const filterResult = personAge(personArr);
console.log(filterResult);
