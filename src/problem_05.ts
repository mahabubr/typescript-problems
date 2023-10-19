function checkType(txt: unknown) {
	if (typeof txt === "string") {
		return txt;
	} else {
		return new Error("Something Wrong");
	}
}

const typeResult = checkType("Testing");
console.log(typeResult);
