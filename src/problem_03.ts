type arrTypes = string[];

const reverseArray = <T extends arrTypes>(...arr: T): arrTypes => {
	const result = arr.reverse();
	return result;
};

const reverseResult = reverseArray<arrTypes>(
	"nikola",
	"tesla",
	"world",
	"stark",
	"natasha",
	'thor'
);
console.log(reverseResult);
